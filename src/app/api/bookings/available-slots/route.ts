import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { startOfDay, endOfDay, addMinutes } from "date-fns";
import { getDemoUserId } from "@/lib/helpers/demo-user";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// GET available time slots for a specific date
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const eventTypeId = searchParams.get("eventTypeId");
    const userId = searchParams.get("userId") || await getDemoUserId();

    if (!date || !eventTypeId) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay();

    // Check for date override first
    const dateOverride = await prisma.dateOverride.findFirst({
      where: {
        userId,
        date: {
          gte: startOfDay(selectedDate),
          lte: endOfDay(selectedDate),
        },
      },
    });

    // If date is blocked, return empty array
    if (dateOverride && !dateOverride.isAvailable) {
      return NextResponse.json([]);
    }

    // Get user's availability for this day (or use override)
    let startTimeStr, endTimeStr;
    
    if (dateOverride && dateOverride.startTime && dateOverride.endTime) {
      startTimeStr = dateOverride.startTime;
      endTimeStr = dateOverride.endTime;
    } else {
      const availability = await prisma.availability.findFirst({
        where: {
          userId,
          dayOfWeek,
        },
      });

      if (!availability) {
        return NextResponse.json([]);
      }
      
      startTimeStr = availability.startTime;
      endTimeStr = availability.endTime;
    }

    // Get event type duration and buffer time
    const eventType = await prisma.eventType.findUnique({
      where: { id: eventTypeId },
    });

    if (!eventType) {
      return NextResponse.json({ error: "Event type not found" }, { status: 404 });
    }

    const bufferTime = eventType.bufferTime || 0;

    // Get existing bookings for this day
    const existingBookings = await prisma.booking.findMany({
      where: {
        userId,
        startTime: {
          gte: startOfDay(selectedDate),
          lte: endOfDay(selectedDate),
        },
        status: "confirmed",
      },
      include: {
        eventType: true,
      },
    });

    // Generate available time slots
    const slots = [];
    const [startHour, startMinute] = startTimeStr.split(":").map(Number);
    const [endHour, endMinute] = endTimeStr.split(":").map(Number);

    const startTime = new Date(selectedDate);
    startTime.setHours(startHour, startMinute, 0, 0);

    const endTime = new Date(selectedDate);
    endTime.setHours(endHour, endMinute, 0, 0);

    let currentSlot = startTime;
    while (currentSlot < endTime) {
      const slotEnd = addMinutes(currentSlot, eventType.duration);
      
      if (slotEnd <= endTime) {
        // Check if slot overlaps with existing bookings (including buffer time)
        const isAvailable = !existingBookings.some(booking => {
          const bookingBuffer = booking.eventType.bufferTime || 0;
          const bufferedStart = addMinutes(booking.startTime, -bookingBuffer);
          const bufferedEnd = addMinutes(booking.endTime, bookingBuffer);
          
          return (
            (currentSlot >= bufferedStart && currentSlot < bufferedEnd) ||
            (slotEnd > bufferedStart && slotEnd <= bufferedEnd) ||
            (currentSlot <= bufferedStart && slotEnd >= bufferedEnd)
          );
        });

        if (isAvailable) {
          slots.push({
            startTime: currentSlot.toISOString(),
            endTime: slotEnd.toISOString(),
          });
        }
      }

      currentSlot = addMinutes(currentSlot, 30); // 30-minute intervals
    }

    return NextResponse.json(slots);
  } catch (error) {
    console.error("Error fetching available slots:", error);
    return NextResponse.json({ error: "Failed to fetch available slots" }, { status: 500 });
  }
}
