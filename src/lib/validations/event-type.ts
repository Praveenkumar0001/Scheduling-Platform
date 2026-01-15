import { z } from "zod";

export const eventTypeSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  slug: z.string().min(1, "Slug is required").max(100).regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
  description: z.string().max(500).optional(),
  duration: z.number().min(5).max(480),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Invalid color format"),
  isActive: z.boolean().default(true),
  userId: z.string(),
});

export const createEventTypeSchema = eventTypeSchema.omit({ userId: true });
export const updateEventTypeSchema = eventTypeSchema.partial().omit({ userId: true });

export type EventTypeInput = z.infer<typeof createEventTypeSchema>;
export type EventTypeUpdate = z.infer<typeof updateEventTypeSchema>;
