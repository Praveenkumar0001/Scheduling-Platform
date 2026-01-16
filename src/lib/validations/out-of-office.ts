import { z } from "zod";

export const outOfOfficeSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  startDate: z.string().or(z.date()),
  endDate: z.string().or(z.date()),
  isAllDay: z.boolean().default(true),
  notes: z.string().max(500).optional(),
  redirectUserId: z.string().optional(),
}).refine(
  (data) => {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    return end >= start;
  },
  {
    message: "End date must be after or equal to start date",
    path: ["endDate"],
  }
);

export const createOutOfOfficeSchema = outOfOfficeSchema;

export const updateOutOfOfficeSchema = z.object({
  title: z.string().min(1, "Title is required").max(100).optional(),
  startDate: z.string().or(z.date()).optional(),
  endDate: z.string().or(z.date()).optional(),
  isAllDay: z.boolean().optional(),
  notes: z.string().max(500).optional(),
  redirectUserId: z.string().optional(),
});

export type OutOfOfficeInput = z.infer<typeof createOutOfOfficeSchema>;
export type OutOfOfficeUpdate = z.infer<typeof updateOutOfOfficeSchema>;
