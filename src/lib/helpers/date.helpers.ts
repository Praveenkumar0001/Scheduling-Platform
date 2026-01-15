import { format, parseISO, addMinutes, startOfDay, endOfDay } from "date-fns";
import { formatInTimeZone, toZonedTime } from "date-fns-tz";

export function formatDate(date: Date | string, formatStr: string = "PPP"): string {
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  return format(dateObj, formatStr);
}

export function formatDateTime(date: Date | string, formatStr: string = "PPP p"): string {
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  return format(dateObj, formatStr);
}

export function formatDateInTimeZone(
  date: Date | string,
  timeZone: string,
  formatStr: string = "PPP p"
): string {
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  return formatInTimeZone(dateObj, timeZone, formatStr);
}

export function getDateInTimeZone(date: Date | string, timeZone: string): Date {
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  return toZonedTime(dateObj, timeZone);
}

export function addDuration(date: Date, minutes: number): Date {
  return addMinutes(date, minutes);
}

export function getStartOfDay(date: Date): Date {
  return startOfDay(date);
}

export function getEndOfDay(date: Date): Date {
  return endOfDay(date);
}

export function isValidDate(date: any): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}
