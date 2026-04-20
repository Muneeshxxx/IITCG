import { NextResponse } from 'next/server';
import { getConnection, seedBlogs, seedCaseStudies, seedAdminUser } from '@/lib/db-mysql';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'iitcg-secret-key';

function getPath(request) {
  const url = new URL(request.url);
  return url.pathname;
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

function verifyToken(request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.split(' ')[1];
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function GET(request) {
  const path = getPath(request);

  try {
    if (path === '/api/health') {
      return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() }, { headers: corsHeaders() });
    }

    if (path === '/api/blogs') {
      const connection = await getConnection();
      try {
        await seedBlogs();
        const [rows] = await connection.execute('SELECT * FROM blogs ORDER BY created_at DESC');
        return NextResponse.json({ success: true, data: rows }, { headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    if (path === '/api/case-studies') {
      const connection = await getConnection();
      try {
        await seedCaseStudies();
        const [rows] = await connection.execute('SELECT * FROM case_studies ORDER BY created_at DESC');
        const parsed = rows.map(row => ({
          ...row,
          technologies: typeof row.technologies === 'string' ? JSON.parse(row.technologies) : row.technologies
        }));
        return NextResponse.json({ success: true, data: parsed }, { headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    if (path === '/api/leads') {
      const connection = await getConnection();
      try {
        const [rows] = await connection.execute('SELECT * FROM leads ORDER BY created_at DESC LIMIT 100');
        return NextResponse.json({ success: true, data: rows }, { headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    if (path === '/api/contacts') {
      const connection = await getConnection();
      try {
        const [rows] = await connection.execute('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 100');
        return NextResponse.json({ success: true, data: rows }, { headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    return NextResponse.json({ success: true, message: 'IITCG API v2 (MySQL)' }, { headers: corsHeaders() });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500, headers: corsHeaders() });
  }
}

export async function POST(request) {
  const path = getPath(request);

  try {
    const body = await request.json();

    if (path === '/api/auth/login') {
      const { email, password } = body;
      if (!email || !password) {
        return NextResponse.json({ success: false, error: 'Email and password required' }, { status: 400, headers: corsHeaders() });
      }
      const connection = await getConnection();
      try {
        await seedAdminUser();
        const [users] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
        const user = users[0];
        if (!user || user.password !== password) {
          return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401, headers: corsHeaders() });
        }
        const token = jwt.sign({ userId: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
        return NextResponse.json({ success: true, token, user: { id: user.id, email: user.email, role: user.role } }, { headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    if (path === '/api/leads') {
      const { name, email, company, phone, service, message } = body;
      if (!name || !email) {
        return NextResponse.json({ success: false, error: 'Name and email are required' }, { status: 400, headers: corsHeaders() });
      }
      const connection = await getConnection();
      try {
        await connection.execute(`
          CREATE TABLE IF NOT EXISTS leads (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            company VARCHAR(255),
            phone VARCHAR(20),
            service VARCHAR(255),
            message TEXT,
            source VARCHAR(50),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        const id = uuidv4();
        await connection.execute(
          'INSERT INTO leads (id, name, email, company, phone, service, message, source) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [id, name, email, company || '', phone || '', service || '', message || '', 'website']
        );
        return NextResponse.json({ success: true, data: { id } }, { status: 201, headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    if (path === '/api/contact') {
      const { name, email, company, message } = body;
      if (!name || !email || !message) {
        return NextResponse.json({ success: false, error: 'Name, email, and message are required' }, { status: 400, headers: corsHeaders() });
      }
      const connection = await getConnection();
      try {
        await connection.execute(`
          CREATE TABLE IF NOT EXISTS contacts (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            company VARCHAR(255),
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        const id = uuidv4();
        await connection.execute(
          'INSERT INTO contacts (id, name, email, company, message) VALUES (?, ?, ?, ?, ?)',
          [id, name, email, company || '', message]
        );
        return NextResponse.json({ success: true, data: { id } }, { status: 201, headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    if (path === '/api/newsletter') {
      const { email } = body;
      if (!email) {
        return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400, headers: corsHeaders() });
      }
      const connection = await getConnection();
      try {
        await connection.execute(`
          CREATE TABLE IF NOT EXISTS newsletter (
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255) UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        const id = uuidv4();
        await connection.execute(
          'INSERT INTO newsletter (id, email) VALUES (?, ?)',
          [id, email]
        );
        return NextResponse.json({ success: true, data: { id } }, { status: 201, headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    if (path === '/api/blogs') {
      const decoded = verifyToken(request);
      if (!decoded) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401, headers: corsHeaders() });
      }
      const { title, excerpt, content, category, author } = body;
      if (!title || !excerpt) {
        return NextResponse.json({ success: false, error: 'Title and excerpt required' }, { status: 400, headers: corsHeaders() });
      }
      const connection = await getConnection();
      try {
        const id = uuidv4();
        await connection.execute(
          'INSERT INTO blogs (id, title, excerpt, content, category, author, readTime) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [id, title, excerpt, content || '', category || 'General', author || 'IITCG Team', '5 min read']
        );
        return NextResponse.json({ success: true, data: { id } }, { status: 201, headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    if (path === '/api/case-studies') {
      const decoded = verifyToken(request);
      if (!decoded) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401, headers: corsHeaders() });
      }
      const { title, client, industry, challenge, solution, results, technologies } = body;
      if (!title || !client) {
        return NextResponse.json({ success: false, error: 'Title and client required' }, { status: 400, headers: corsHeaders() });
      }
      const connection = await getConnection();
      try {
        const id = uuidv4();
        await connection.execute(
          'INSERT INTO case_studies (id, title, client, industry, challenge, solution, results, technologies) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [id, title, client, industry || '', challenge || '', solution || '', results || '', JSON.stringify(technologies || [])]
        );
        return NextResponse.json({ success: true, data: { id } }, { status: 201, headers: corsHeaders() });
      } finally {
        connection.release();
      }
    }

    return NextResponse.json({ success: false, error: 'Not found' }, { status: 404, headers: corsHeaders() });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500, headers: corsHeaders() });
  }
}

export async function DELETE(request) {
  const path = getPath(request);

  try {
    const decoded = verifyToken(request);
    if (!decoded) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401, headers: corsHeaders() });
    }

    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400, headers: corsHeaders() });
    }

    const connection = await getConnection();

    if (path === '/api/blogs') {
      await connection.execute('DELETE FROM blogs WHERE id = ?', [id]);
      return NextResponse.json({ success: true, message: 'Blog deleted' }, { headers: corsHeaders() });
    }

    if (path === '/api/case-studies') {
      await connection.execute('DELETE FROM case_studies WHERE id = ?', [id]);
      return NextResponse.json({ success: true, message: 'Case study deleted' }, { headers: corsHeaders() });
    }

    if (path === '/api/leads') {
      await connection.execute('DELETE FROM leads WHERE id = ?', [id]);
      return NextResponse.json({ success: true, message: 'Lead deleted' }, { headers: corsHeaders() });
    }

    return NextResponse.json({ success: false, error: 'Not found' }, { status: 404, headers: corsHeaders() });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500, headers: corsHeaders() });
  }
}
