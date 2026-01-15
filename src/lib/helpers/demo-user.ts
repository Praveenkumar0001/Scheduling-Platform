import prisma from "@/lib/prisma";

let cachedDemoUserId: string | null = null;

export async function getDemoUserId(): Promise<string> {
  if (cachedDemoUserId) {
    return cachedDemoUserId;
  }

  const demoUser = await prisma.user.findUnique({
    where: { email: "demo@example.com" },
    select: { id: true },
  });

  if (!demoUser) {
    throw new Error("Demo user not found. Please run: npm run db:seed");
  }

  cachedDemoUserId = demoUser.id;
  return demoUser.id;
}
