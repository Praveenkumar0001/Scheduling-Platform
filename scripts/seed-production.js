// Run this in Render Shell: node scripts/seed-production.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  try {
    console.log('Starting seed...');
    
    // Create demo user
    const user = await prisma.user.upsert({
      where: { email: 'demo@example.com' },
      update: {},
      create: {
        email: 'demo@example.com',
        username: 'demo-user',
        name: 'Demo User',
        timezone: 'UTC',
      },
    });
    console.log('✓ Created demo user:', user.id);

    // Create sample event types
    await prisma.eventType.upsert({
      where: { userId_slug: { userId: user.id, slug: '30min' } },
      update: {},
      create: {
        title: '30 min meeting',
        slug: '30min',
        description: 'A standard 30-minute meeting',
        duration: 30,
        color: '#10b981',
        isActive: true,
        userId: user.id,
      },
    });
    console.log('✓ Created 30min event type');

    await prisma.eventType.upsert({
      where: { userId_slug: { userId: user.id, slug: '15min' } },
      update: {},
      create: {
        title: '15 min meeting',
        slug: '15min',
        description: 'A quick 15-minute catch-up',
        duration: 15,
        color: '#f59e0b',
        isActive: true,
        userId: user.id,
      },
    });
    console.log('✓ Created 15min event type');

    console.log('✅ Seed completed successfully!');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
