import { NextRequest, NextResponse } from "next/server";
import { OutOfOfficeService } from "@/lib/services/out-of-office.service";
import { updateOutOfOfficeSchema } from "@/lib/validations/out-of-office";

// GET single out-of-office entry
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const entry = await OutOfOfficeService.getById(params.id);
    
    if (!entry) {
      return NextResponse.json(
        { error: "Out-of-office entry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(entry);
  } catch (error) {
    console.error("Error fetching out-of-office entry:", error);
    return NextResponse.json(
      { error: "Failed to fetch out-of-office entry" },
      { status: 500 }
    );
  }
}

// PATCH update out-of-office entry
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = updateOutOfOfficeSchema.parse(body);

    const entry = await OutOfOfficeService.update(params.id, validatedData);
    return NextResponse.json(entry);
  } catch (error) {
    console.error("Error updating out-of-office entry:", error);
    
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid input", details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to update out-of-office entry" },
      { status: 500 }
    );
  }
}

// DELETE out-of-office entry
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await OutOfOfficeService.delete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting out-of-office entry:", error);
    return NextResponse.json(
      { error: "Failed to delete out-of-office entry" },
      { status: 500 }
    );
  }
}
