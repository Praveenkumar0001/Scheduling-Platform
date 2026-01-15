import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getDemoUserId } from "@/lib/helpers/demo-user";
import { sendEmail, generateBookingConfirmationEmail } from "@/lib/services/email.service";

// GET all bookings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId") || await getDemoUserId();
    const filter = searchParams.get("filter") || "all";

    const now = new Date();
    let whereClause: any = { userId };

    if (filter === "upcoming") {
      whereClause.startTime = { gte: now };
    } else if (filter === "past") {
      whereClause.startTime = { lt: now };
    }

    const bookings = await prisma.booking.findMany({
      where: whereClause,
      include: {
        eventType: true,
      },
      orderBy: { startTime: filter === "past" ? "desc" : "asc" },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}

// POST create new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { startTime, endTime, attendeeName, attendeeEmail, attendeeNotes, userId, eventTypeId } = body;

    const booking = await prisma.booking.create({
      data: {
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        attendeeName,
        attendeeEmail,
        attendeeNotes,
        userId: userId || await getDemoUserId(),
        eventTypeId,
      },
      include: {
        eventType: true,
      },
    });

    // Send confirmation email
    try {
      const emailHtml = generateBookingConfirmationEmail({
        attendeeName: booking.attendeeName,
        eventType: booking.eventType,
        startTime: booking.startTime,
        endTime: booking.endTime,
      });

      await sendEmail({
        to: booking.attendeeEmail,
        subject: `Booking Confirmed: ${booking.eventType.title}`,
        html: emailHtml,
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the booking if email fails
    }

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}
