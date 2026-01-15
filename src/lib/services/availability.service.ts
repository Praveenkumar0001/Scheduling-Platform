import prisma from "@/lib/prisma";
import { AvailabilityInput } from "@/lib/validations/availability";

export class AvailabilityService {
  static async getAll(userId: string) {
    return await prisma.availability.findMany({
      where: { userId },
      orderBy: { dayOfWeek: "asc" },
    });
  }

  static async getById(id: string) {
    return await prisma.availability.findUnique({
      where: { id },
    });
  }

  static async getByDay(userId: string, dayOfWeek: number) {
    return await prisma.availability.findMany({
      where: {
        userId,
        dayOfWeek,
      },
    });
  }

  static async createMany(userId: string, availabilities: Omit<AvailabilityInput, "userId">[]) {
    // Delete existing availabilities
    await prisma.availability.deleteMany({
      where: { userId },
    });

    // Create new ones
    return await prisma.availability.createMany({
      data: availabilities.map((av) => ({
        ...av,
        userId,
      })),
    });
  }

  static async delete(id: string) {
    return await prisma.availability.delete({
      where: { id },
    });
  }
}
