import { initializeDatabase, seedBlogs, seedCaseStudies, seedAdminUser } from '../lib/db-mysql.js';

async function main() {
  try {
    console.log('🔄 Initializing database tables...');
    await initializeDatabase();
    
    console.log('📝 Seeding blogs...');
    await seedBlogs();
    
    console.log('📚 Seeding case studies...');
    await seedCaseStudies();
    
    console.log('👤 Seeding admin user...');
    await seedAdminUser();
    
    console.log('✅ Database initialization complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
}

main();
