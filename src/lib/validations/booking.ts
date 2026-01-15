import { z } from "zod";

export const bookingSchema = z.object({
  startTime: z.string().or(z.date()),
  endTime: z.string().or(z.date()),
  attendeeName: z.string().min(1, "Name is required").max(100),
  attendeeEmail: z.string().email("Invalid email address"),
  attendeeNotes: z.string().max(500).optional(),
  eventTypeId: z.string(),
  userId: z.string(),
});

export const createBookingSchema = bookingSchema.omit({ userId: true });
export const updateBookingSchema = z.object({
  status: z.enum(["confirmed", "cancelled"]),
});

export type BookingInput = z.infer<typeof createBookingSchema>;
export type BookingUpdate = z.infer<typeof updateBookingSchema>;
