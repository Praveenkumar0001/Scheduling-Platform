import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET single availability
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const availability = await prisma.availability.findUnique({
      where: { id: params.id },
    });

    if (!availability) {
      return NextResponse.json({ error: "Availability not found" }, { status: 404 });
    }

    return NextResponse.json(availability);
  } catch (error) {
    console.error("Error fetching availability:", error);
    return NextResponse.json({ error: "Failed to fetch availability" }, { status: 500 });
  }
}

// DELETE availability
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.availability.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Availability deleted successfully" });
  } catch (error) {
    console.error("Error deleting availability:", error);
    return NextResponse.json({ error: "Failed to delete availability" }, { status: 500 });
  }
}
