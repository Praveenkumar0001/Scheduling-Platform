import { addMinutes, parse } from "date-fns";

export interface TimeSlot {
  startTime: Date;
  endTime: Date;
}

export function generateTimeSlots(
  date: Date,
  startTime: string,
  endTime: string,
  duration: number,
  interval: number = 30
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  const start = new Date(date);
  start.setHours(startHour, startMinute, 0, 0);

  const end = new Date(date);
  end.setHours(endHour, endMinute, 0, 0);

  let currentSlot = start;

  while (currentSlot < end) {
    const slotEnd = addMinutes(currentSlot, duration);
    
    if (slotEnd <= end) {
      slots.push({
        startTime: new Date(currentSlot),
        endTime: slotEnd,
      });
    }

    currentSlot = addMinutes(currentSlot, interval);
  }

  return slots;
}

export function isSlotAvailable(
  slot: TimeSlot,
  bookedSlots: TimeSlot[]
): boolean {
  return !bookedSlots.some((booked) => {
    return (
      (slot.startTime >= booked.startTime && slot.startTime < booked.endTime) ||
      (slot.endTime > booked.startTime && slot.endTime <= booked.endTime) ||
      (slot.startTime <= booked.startTime && slot.endTime >= booked.endTime)
    );
  });
}

export function filterAvailableSlots(
  slots: TimeSlot[],
  bookedSlots: TimeSlot[]
): TimeSlot[] {
  return slots.filter((slot) => isSlotAvailable(slot, bookedSlots));
}

export function formatTimeSlot(slot: TimeSlot): string {
  const startTime = slot.startTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  
  return startTime;
}
