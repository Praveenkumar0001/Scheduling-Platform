import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a demo user
  const user = await prisma.user.upsert({
    where: { email: 'praveenkumar01.iitism@gmail.com' },
    update: {},
    create: {
      email: 'praveenkumar01.iitism@gmail.com',
      username: 'praveen-kumar-kp9ja6',
      name: 'Praveen Kumar',
      timezone: 'Asia/Calcutta',
    },
  })

  console.log('Created user:', user)

  // Create sample event types
  const eventType1 = await prisma.eventType.upsert({
    where: { userId_slug: { userId: user.id, slug: 'secret' } },
    update: {},
    create: {
      title: 'Secret meeting',
      slug: 'secret',
      description: 'A private 15-minute meeting',
      duration: 15,
      color: '#3b82f6',
      isActive: false,
      userId: user.id,
    },
  })

  const eventType2 = await prisma.eventType.upsert({
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
  })

  const eventType3 = await prisma.eventType.upsert({
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
  })

  console.log('Created event types:', { eventType1, eventType2, eventType3 })

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
