import { z } from "zod";

export const availabilitySchema = z.object({
  dayOfWeek: z.number().min(0).max(6),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
  userId: z.string(),
});

export const createAvailabilitySchema = z.object({
  availabilities: z.array(availabilitySchema.omit({ userId: true })),
  userId: z.string().optional(),
});

export type AvailabilityInput = z.infer<typeof availabilitySchema>;
export type CreateAvailabilityInput = z.infer<typeof createAvailabilitySchema>;
