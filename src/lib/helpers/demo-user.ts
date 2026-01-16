import prisma from "@/lib/prisma";

let cachedDemoUserId: string | null = null;

export async function getDemoUserId(): Promise<string> {
  if (cachedDemoUserId) {
    return cachedDemoUserId;
  }

  const demoUser = await prisma.user.findFirst({
    select: { id: true },
    orderBy: { createdAt: 'asc' },
  });

  if (!demoUser) {
    throw new Error("No users found in database. Please run: npx prisma db seed");
  }

  cachedDemoUserId = demoUser.id;
  return demoUser.id;
}
