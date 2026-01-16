// Run this in Render Shell: node scripts/manual-seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    console.log('Creating demo user...');
    
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
    
    console.log('✓ Created user:', user.email);
    
    // Create sample event types
    const eventType1 = await prisma.eventType.upsert({
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
    
    console.log('✓ Created event type:', eventType1.title);
    
    // Create default availability (Monday-Friday, 9 AM - 5 PM)
    for (let day = 1; day <= 5; day++) {
      await prisma.availability.upsert({
        where: {
          userId_dayOfWeek: {
            userId: user.id,
            dayOfWeek: day,
          },
        },
        update: {},
        create: {
          dayOfWeek: day,
          startTime: '09:00',
          endTime: '17:00',
          userId: user.id,
        },
      });
    }
    
    console.log('✓ Created availability (Mon-Fri, 9AM-5PM)');
    console.log('\n✅ Database seeded successfully!');
    
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
