import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a demo user
  const user = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      username: 'demo',
      name: 'Demo User',
      timezone: 'America/New_York',
    },
  })

  console.log('Created user:', user)

  // Create sample event types
  const eventType1 = await prisma.eventType.upsert({
    where: { userId_slug: { userId: user.id, slug: '30-min-meeting' } },
    update: {},
    create: {
      title: '30 Minute Meeting',
      slug: '30-min-meeting',
      description: 'A quick 30-minute meeting',
      duration: 30,
      color: '#3b82f6',
      userId: user.id,
    },
  })

  const eventType2 = await prisma.eventType.upsert({
    where: { userId_slug: { userId: user.id, slug: '60-min-consultation' } },
    update: {},
    create: {
      title: '60 Minute Consultation',
      slug: '60-min-consultation',
      description: 'An hour-long consultation session',
      duration: 60,
      color: '#10b981',
      userId: user.id,
    },
  })

  console.log('Created event types:', { eventType1, eventType2 })

  // Create default availability (Monday-Friday, 9 AM - 5 PM)
  const availabilities = []
  for (let day = 1; day <= 5; day++) {
    const availability = await prisma.availability.create({
      data: {
        dayOfWeek: day,
        startTime: '09:00',
        endTime: '17:00',
        userId: user.id,
      },
    })
    availabilities.push(availability)
  }

  console.log('Created availabilities:', availabilities.length)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
