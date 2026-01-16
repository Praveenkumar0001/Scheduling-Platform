import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET single event type
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const eventType = await prisma.eventType.findUnique({
      where: { id: params.id },
    });

    if (!eventType) {
      return NextResponse.json({ error: "Event type not found" }, { status: 404 });
    }

    return NextResponse.json(eventType);
  } catch (error) {
    console.error("Error fetching event type:", error);
    return NextResponse.json({ error: "Failed to fetch event type" }, { status: 500 });
  }
}

// PUT update event type
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { title, slug, description, duration, color, isActive } = body;

    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (slug !== undefined) updateData.slug = slug;
    if (description !== undefined) updateData.description = description;
    if (duration !== undefined) updateData.duration = parseInt(duration);
    if (color !== undefined) updateData.color = color;
    if (isActive !== undefined) updateData.isActive = isActive;

    const eventType = await prisma.eventType.update({
      where: { id: params.id },
      data: updateData,
    });

    return NextResponse.json(eventType);
  } catch (error) {
    console.error("Error updating event type:", error);
    return NextResponse.json({ error: "Failed to update event type" }, { status: 500 });
  }
}

// DELETE event type
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.eventType.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Event type deleted successfully" });
  } catch (error) {
    console.error("Error deleting event type:", error);
    return NextResponse.json({ error: "Failed to delete event type" }, { status: 500 });
  }
}
