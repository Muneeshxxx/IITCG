import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'iitcg',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelayMs: 0,
});

export async function getConnection() {
  return await pool.getConnection();
}

export async function initializeDatabase() {
  const connection = await getConnection();
  try {
    // Create blogs table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS blogs (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        excerpt TEXT,
        content LONGTEXT,
        category VARCHAR(100),
        author VARCHAR(255),
        readTime VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create case_studies table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS case_studies (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        client VARCHAR(255),
        industry VARCHAR(255),
        challenge TEXT,
        solution TEXT,
        results TEXT,
        technologies JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create users table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255),
        role VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Database tables initialized');
  } finally {
    connection.release();
  }
}

export async function seedBlogs() {
  const connection = await getConnection();
  try {
    const [rows] = await connection.execute('SELECT COUNT(*) as count FROM blogs');
    if (rows[0].count === 0) {
      const blogs = [
        {
          id: 'blog-1',
          title: 'How AI is Reshaping Enterprise Architecture in 2025',
          excerpt: 'Discover how generative AI and intelligent automation are fundamentally changing enterprise technology infrastructure.',
          content: 'Full blog content here...',
          category: 'AI',
          author: 'IITCG Team',
          readTime: '5 min read',
        },
        {
          id: 'blog-2',
          title: 'The Future of Cloud-Native Development',
          excerpt: 'Kubernetes, serverless, and microservices are evolving rapidly. Here is what you need to know.',
          content: 'Full blog content here...',
          category: 'Cloud',
          author: 'IITCG Team',
          readTime: '7 min read',
        },
        {
          id: 'blog-3',
          title: 'DevSecOps: Security as a First-Class Citizen',
          excerpt: 'Why integrating security into your CI/CD pipeline from day one is no longer optional.',
          content: 'Full blog content here...',
          category: 'DevOps',
          author: 'IITCG Team',
          readTime: '6 min read',
        },
        {
          id: 'blog-4',
          title: 'Travel Technology: Next-Gen Booking Engines',
          excerpt: 'How AI-powered booking engines are transforming the travel industry with personalization.',
          content: 'Full blog content here...',
          category: 'Travel',
          author: 'IITCG Team',
          readTime: '4 min read',
        },
        {
          id: 'blog-5',
          title: 'Building Scalable Data Pipelines',
          excerpt: 'A guide to designing data pipelines that handle petabytes with real-time processing.',
          content: 'Full blog content here...',
          category: 'Data',
          author: 'IITCG Team',
          readTime: '8 min read',
        },
        {
          id: 'blog-6',
          title: 'AI in Education: Bridging the Digital Divide',
          excerpt: 'How emerging technologies create more accessible, personalized learning experiences.',
          content: 'Full blog content here...',
          category: 'Education',
          author: 'IITCG Team',
          readTime: '5 min read',
        }
      ];

      for (const blog of blogs) {
        await connection.execute(
          'INSERT INTO blogs (id, title, excerpt, content, category, author, readTime) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [blog.id, blog.title, blog.excerpt, blog.content, blog.category, blog.author, blog.readTime]
        );
      }
    }
  } finally {
    connection.release();
  }
}

export async function seedCaseStudies() {
  const connection = await getConnection();
  try {
    const [rows] = await connection.execute('SELECT COUNT(*) as count FROM case_studies');
    if (rows[0].count === 0) {
      const caseStudies = [
        {
          id: 'case-1',
          title: 'AI-Powered Booking Engine for International Airline',
          client: 'Leading International Airline',
          industry: 'Travel & Aviation',
          challenge: 'Legacy booking system with poor conversion rates, slow search, and inability to handle peak traffic during holiday seasons.',
          solution: 'Built a cloud-native booking engine with AI-powered recommendations, dynamic pricing, and auto-scaling infrastructure on AWS.',
          results: '35% increase in booking conversion, 50% faster search response, 3x peak traffic capacity.',
          technologies: ['React', 'Node.js', 'AWS', 'TensorFlow', 'Redis', 'Kubernetes'],
        },
        {
          id: 'case-2',
          title: 'Enterprise AI Chatbot for Financial Services',
          client: 'Top 10 Global Bank',
          industry: 'Financial Services',
          challenge: 'High volume of customer inquiries overwhelming call center with 45-minute average wait times and rising costs.',
          solution: 'Deployed LLM-powered chatbot with custom RAG system, handling 70% of inquiries autonomously with seamless human handoff.',
          results: '70% reduction in call volume, 40% cost savings, customer satisfaction up 25%.',
          technologies: ['OpenAI', 'LangChain', 'Python', 'Azure', 'PostgreSQL'],
        },
        {
          id: 'case-3',
          title: 'Cloud Migration for E-commerce Platform',
          client: 'Regional E-commerce Leader',
          industry: 'Retail',
          challenge: 'On-premise infrastructure struggling with growth, frequent downtime during sales events, and mounting maintenance costs.',
          solution: 'Complete cloud migration to AWS with microservices architecture, CI/CD pipelines, and auto-scaling.',
          results: '99.99% uptime, 60% infrastructure cost reduction, deployments from weekly to daily.',
          technologies: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Docker'],
        }
      ];

      for (const cs of caseStudies) {
        await connection.execute(
          'INSERT INTO case_studies (id, title, client, industry, challenge, solution, results, technologies) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [cs.id, cs.title, cs.client, cs.industry, cs.challenge, cs.solution, cs.results, JSON.stringify(cs.technologies)]
        );
      }
    }
  } finally {
    connection.release();
  }
}

export async function seedAdminUser() {
  const connection = await getConnection();
  try {
    const [rows] = await connection.execute('SELECT COUNT(*) as count FROM users');
    if (rows[0].count === 0) {
      await connection.execute(
        'INSERT INTO users (id, email, password, role) VALUES (?, ?, ?, ?)',
        ['admin-1', 'admin@iitcg.com', 'admin123', 'admin']
      );
    }
  } finally {
    connection.release();
  }
}

export async function connectToDatabase() {
  return { pool };
}
