import { MongoClient } from 'mongodb';

const MONGO_URL = process.env.MONGO_URL || process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || 'iitcg';

if (!MONGO_URL) {
  throw new Error('Missing MongoDB connection string. Set MONGO_URL or MONGODB_URI in your environment.');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  const db = client.db(DB_NAME);
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

export async function seedBlogs() {
  const { db } = await connectToDatabase();
  const blogsCollection = db.collection('blogs');
  const count = await blogsCollection.countDocuments();
  if (count === 0) {
    const blogs = [
      {
        id: 'blog-1',
        title: 'How AI is Reshaping Enterprise Architecture in 2025',
        excerpt: 'Discover how generative AI and intelligent automation are fundamentally changing enterprise technology infrastructure.',
        content: 'Full blog content here...',
        category: 'AI',
        author: 'IITCG Team',
        readTime: '5 min read',
        created_at: new Date('2025-05-15')
      },
      {
        id: 'blog-2',
        title: 'The Future of Cloud-Native Development',
        excerpt: 'Kubernetes, serverless, and microservices are evolving rapidly. Here is what you need to know.',
        content: 'Full blog content here...',
        category: 'Cloud',
        author: 'IITCG Team',
        readTime: '7 min read',
        created_at: new Date('2025-04-28')
      },
      {
        id: 'blog-3',
        title: 'DevSecOps: Security as a First-Class Citizen',
        excerpt: 'Why integrating security into your CI/CD pipeline from day one is no longer optional.',
        content: 'Full blog content here...',
        category: 'DevOps',
        author: 'IITCG Team',
        readTime: '6 min read',
        created_at: new Date('2025-04-10')
      },
      {
        id: 'blog-4',
        title: 'Travel Technology: Next-Gen Booking Engines',
        excerpt: 'How AI-powered booking engines are transforming the travel industry with personalization.',
        content: 'Full blog content here...',
        category: 'Travel',
        author: 'IITCG Team',
        readTime: '4 min read',
        created_at: new Date('2025-03-22')
      },
      {
        id: 'blog-5',
        title: 'Building Scalable Data Pipelines',
        excerpt: 'A guide to designing data pipelines that handle petabytes with real-time processing.',
        content: 'Full blog content here...',
        category: 'Data',
        author: 'IITCG Team',
        readTime: '8 min read',
        created_at: new Date('2025-03-05')
      },
      {
        id: 'blog-6',
        title: 'AI in Education: Bridging the Digital Divide',
        excerpt: 'How emerging technologies create more accessible, personalized learning experiences.',
        content: 'Full blog content here...',
        category: 'Education',
        author: 'IITCG Team',
        readTime: '5 min read',
        created_at: new Date('2025-02-18')
      }
    ];
    await blogsCollection.insertMany(blogs);
  }
}

export async function seedCaseStudies() {
  const { db } = await connectToDatabase();
  const collection = db.collection('case_studies');
  const count = await collection.countDocuments();
  if (count === 0) {
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
        created_at: new Date('2025-01-15')
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
        created_at: new Date('2024-11-20')
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
        created_at: new Date('2024-09-10')
      }
    ];
    await collection.insertMany(caseStudies);
  }
}

export async function seedAdminUser() {
  const { db } = await connectToDatabase();
  const collection = db.collection('users');
  const count = await collection.countDocuments();
  if (count === 0) {
    await collection.insertOne({
      id: 'admin-1',
      email: 'admin@iitcg.com',
      password: 'admin123',
      role: 'admin',
      created_at: new Date()
    });
  }
}
