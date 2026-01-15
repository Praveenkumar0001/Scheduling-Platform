import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendEmail, generateBookingCancellationEmail } from "@/lib/services/email.service";

// GET single booking
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
      include: {
        eventType: true,
        user: true,
      },
    });

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Error fetching booking:", error);
    return NextResponse.json({ error: "Failed to fetch booking" }, { status: 500 });
  }
}

// PUT update booking (e.g., cancel)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status } = body;

    const booking = await prisma.booking.update({
      where: { id: params.id },
      data: { status },
      include: {
        eventType: true,
      },
    });

    // Send cancellation email if status is cancelled
    if (status === "cancelled") {
      try {
        const emailHtml = generateBookingCancellationEmail({
          attendeeName: booking.attendeeName,
          eventType: booking.eventType,
          startTime: booking.startTime,
        });

        await sendEmail({
          to: booking.attendeeEmail,
          subject: `Booking Cancelled: ${booking.eventType.title}`,
          html: emailHtml,
        });
      } catch (emailError) {
        console.error("Failed to send cancellation email:", emailError);
        // Don't fail the cancellation if email fails
      }
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json({ error: "Failed to update booking" }, { status: 500 });
  }
}

// DELETE booking
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.booking.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json({ error: "Failed to delete booking" }, { status: 500 });
  }
}
