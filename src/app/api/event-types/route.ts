import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getDemoUserId } from "@/lib/helpers/demo-user";

// GET all event types
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId") || await getDemoUserId();

    const eventTypes = await prisma.eventType.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(eventTypes);
  } catch (error) {
    console.error("Error fetching event types:", error);
    return NextResponse.json({ error: "Failed to fetch event types" }, { status: 500 });
  }
}

// POST create new event type
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, description, duration, color, userId } = body;

    const eventType = await prisma.eventType.create({
      data: {
        title,
        slug,
        description,
        duration: parseInt(duration),
        color: color || "#000000",
        userId: userId || await getDemoUserId(),
      },
    });

    return NextResponse.json(eventType, { status: 201 });
  } catch (error) {
    console.error("Error creating event type:", error);
    return NextResponse.json({ error: "Failed to create event type" }, { status: 500 });
  }
}
