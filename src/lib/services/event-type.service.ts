import prisma from "@/lib/prisma";
import { EventTypeInput, EventTypeUpdate } from "@/lib/validations/event-type";

export class EventTypeService {
  static async getAll(userId: string) {
    return await prisma.eventType.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getById(id: string) {
    return await prisma.eventType.findUnique({
      where: { id },
    });
  }

  static async getBySlug(userId: string, slug: string) {
    return await prisma.eventType.findUnique({
      where: {
        userId_slug: {
          userId,
          slug,
        },
      },
    });
  }

  static async create(data: EventTypeInput & { userId: string }) {
    return await prisma.eventType.create({
      data,
    });
  }

  static async update(id: string, data: EventTypeUpdate) {
    return await prisma.eventType.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return await prisma.eventType.delete({
      where: { id },
    });
  }
}
