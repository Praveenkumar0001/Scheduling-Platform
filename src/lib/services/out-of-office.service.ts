import prisma from "@/lib/prisma";
import { OutOfOfficeInput, OutOfOfficeUpdate } from "@/lib/validations/out-of-office";
import { OutOfOfficeFilters } from "@/types";

export class OutOfOfficeService {
  static async getAll(userId: string, filters?: OutOfOfficeFilters) {
    const whereClause: any = { userId };

    if (filters?.startDate) {
      whereClause.endDate = { gte: filters.startDate };
    }

    if (filters?.endDate) {
      whereClause.startDate = { lte: filters.endDate };
    }

    return await prisma.outOfOffice.findMany({
      where: whereClause,
      orderBy: { startDate: "asc" },
    });
  }

  static async getById(id: string) {
    return await prisma.outOfOffice.findUnique({
      where: { id },
    });
  }

  static async create(data: OutOfOfficeInput & { userId: string }) {
    return await prisma.outOfOffice.create({
      data: {
        ...data,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
      },
    });
  }

  static async update(id: string, data: OutOfOfficeUpdate) {
    const updateData: any = { ...data };
    
    if (data.startDate) {
      updateData.startDate = new Date(data.startDate);
    }
    
    if (data.endDate) {
      updateData.endDate = new Date(data.endDate);
    }

    return await prisma.outOfOffice.update({
      where: { id },
      data: updateData,
    });
  }

  static async delete(id: string) {
    return await prisma.outOfOffice.delete({
      where: { id },
    });
  }

  static async checkIfUserIsOOO(
    userId: string,
    date: Date
  ): Promise<boolean> {
    const oooEntry = await prisma.outOfOffice.findFirst({
      where: {
        userId,
        startDate: { lte: date },
        endDate: { gte: date },
      },
    });

    return !!oooEntry;
  }

  static async getActiveOOO(userId: string) {
    const now = new Date();
    return await prisma.outOfOffice.findMany({
      where: {
        userId,
        startDate: { lte: now },
        endDate: { gte: now },
      },
    });
  }

  static async getUpcomingOOO(userId: string) {
    const now = new Date();
    return await prisma.outOfOffice.findMany({
      where: {
        userId,
        startDate: { gt: now },
      },
      orderBy: { startDate: "asc" },
    });
  }
}
