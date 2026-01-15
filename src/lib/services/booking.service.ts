import prisma from "@/lib/prisma";
import { BookingInput, BookingUpdate } from "@/lib/validations/booking";

export class BookingService {
  static async getAll(userId: string, filter?: "upcoming" | "past") {
    const now = new Date();
    let whereClause: any = { userId };

    if (filter === "upcoming") {
      whereClause.startTime = { gte: now };
    } else if (filter === "past") {
      whereClause.startTime = { lt: now };
    }

    return await prisma.booking.findMany({
      where: whereClause,
      include: {
        eventType: true,
      },
      orderBy: { startTime: filter === "past" ? "desc" : "asc" },
    });
  }

  static async getById(id: string) {
    return await prisma.booking.findUnique({
      where: { id },
      include: {
        eventType: true,
        user: true,
      },
    });
  }

  static async create(data: BookingInput & { userId: string }) {
    return await prisma.booking.create({
      data: {
        ...data,
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
      },
      include: {
        eventType: true,
      },
    });
  }

  static async update(id: string, data: BookingUpdate) {
    return await prisma.booking.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return await prisma.booking.delete({
      where: { id },
    });
  }

  static async checkAvailability(
    userId: string,
    startTime: Date,
    endTime: Date
  ): Promise<boolean> {
    const existingBooking = await prisma.booking.findFirst({
      where: {
        userId,
        status: "confirmed",
        OR: [
          {
            AND: [
              { startTime: { lte: startTime } },
              { endTime: { gt: startTime } },
            ],
          },
          {
            AND: [
              { startTime: { lt: endTime } },
              { endTime: { gte: endTime } },
            ],
          },
          {
            AND: [
              { startTime: { gte: startTime } },
              { endTime: { lte: endTime } },
            ],
          },
        ],
      },
    });

    return !existingBooking;
  }
}
