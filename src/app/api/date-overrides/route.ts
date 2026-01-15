import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getDemoUserId } from "@/lib/helpers/demo-user";

// GET all date overrides
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId") || await getDemoUserId();

    const overrides = await prisma.dateOverride.findMany({
      where: { userId },
      orderBy: { date: "asc" },
    });

    return NextResponse.json(overrides);
  } catch (error) {
    console.error("Error fetching date overrides:", error);
    return NextResponse.json({ error: "Failed to fetch date overrides" }, { status: 500 });
  }
}

// POST create date override
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { date, isAvailable, startTime, endTime, reason, userId } = body;

    const override = await prisma.dateOverride.create({
      data: {
        date: new Date(date),
        isAvailable,
        startTime: isAvailable ? startTime : null,
        endTime: isAvailable ? endTime : null,
        reason,
        userId: userId || await getDemoUserId(),
      },
    });

    return NextResponse.json(override, { status: 201 });
  } catch (error) {
    console.error("Error creating date override:", error);
    return NextResponse.json({ error: "Failed to create date override" }, { status: 500 });
  }
}
