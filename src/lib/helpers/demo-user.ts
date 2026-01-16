import prisma from "@/lib/prisma";

let cachedDemoUserId: string | null = null;

export async function getDemoUserId(): Promise<string> {
  if (cachedDemoUserId) {
    return cachedDemoUserId;
  }

  // Try to find or create demo user
  let demoUser = await prisma.user.findUnique({
    where: { email: "demo@example.com" },
    select: { id: true },
  });

  // Auto-create demo user if it doesn't exist
  if (!demoUser) {
    console.log("Demo user not found, creating...");
    try {
      demoUser = await prisma.user.upsert({
        where: { email: "demo@example.com" },
        update: {},
        create: {
          email: "demo@example.com",
          username: "demo-user",
          name: "Demo User",
          timezone: "UTC",
        },
        select: { id: true },
      });
      console.log("✓ Demo user created:", demoUser.id);
    } catch (error) {
      console.error("Failed to create demo user:", error);
      throw new Error("Failed to create demo user: " + (error as Error).message);
    }
  }

  cachedDemoUserId = demoUser.id;
  return demoUser.id;
}
