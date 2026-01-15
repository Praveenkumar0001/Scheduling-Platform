import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getDemoUserId } from "@/lib/helpers/demo-user";

// GET all availabilities
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId") || await getDemoUserId();

    const availabilities = await prisma.availability.findMany({
      where: { userId },
      orderBy: { dayOfWeek: "asc" },
    });

    return NextResponse.json(availabilities);
  } catch (error) {
    console.error("Error fetching availabilities:", error);
    return NextResponse.json({ error: "Failed to fetch availabilities" }, { status: 500 });
  }
}

// POST create or update availabilities
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { availabilities, userId } = body;
    const actualUserId = userId || await getDemoUserId();

    // Delete existing availabilities for the user
    await prisma.availability.deleteMany({
      where: { userId: actualUserId },
    });

    // Create new availabilities
    const created = await prisma.availability.createMany({
      data: availabilities.map((av: any) => ({
        dayOfWeek: av.dayOfWeek,
        startTime: av.startTime,
        endTime: av.endTime,
        userId: actualUserId,
      })),
    });

    return NextResponse.json({ count: created.count }, { status: 201 });
  } catch (error) {
    console.error("Error creating availabilities:", error);
    return NextResponse.json({ error: "Failed to create availabilities" }, { status: 500 });
  }
}
