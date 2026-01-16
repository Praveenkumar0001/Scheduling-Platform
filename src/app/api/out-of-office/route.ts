import { NextRequest, NextResponse } from "next/server";
import { OutOfOfficeService } from "@/lib/services/out-of-office.service";
import { createOutOfOfficeSchema } from "@/lib/validations/out-of-office";
import { getDemoUserId } from "@/lib/helpers/demo-user";

// GET all out-of-office entries
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId") || await getDemoUserId();
    
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    const filters: any = {};
    if (startDate) filters.startDate = new Date(startDate);
    if (endDate) filters.endDate = new Date(endDate);

    const entries = await OutOfOfficeService.getAll(userId, filters);
    return NextResponse.json(entries);
  } catch (error) {
    console.error("Error fetching out-of-office entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch out-of-office entries" },
      { status: 500 }
    );
  }
}

// POST create new out-of-office entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userId = body.userId || await getDemoUserId();

    // Validate input
    const validatedData = createOutOfOfficeSchema.parse(body);

    const entry = await OutOfOfficeService.create({
      ...validatedData,
      userId,
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error("Error creating out-of-office entry:", error);
    
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid input", details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create out-of-office entry" },
      { status: 500 }
    );
  }
}
