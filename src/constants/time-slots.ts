export const TIME_SLOTS = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? "00" : "30";
  const time = `${hour.toString().padStart(2, "0")}:${minute}`;
  
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  const period = hour < 12 ? "AM" : "PM";
  const display = `${displayHour}:${minute} ${period}`;
  
  return { value: time, label: display };
});

export const BUSINESS_HOURS_START = "09:00";
export const BUSINESS_HOURS_END = "17:00";

export const DEFAULT_SLOT_INTERVAL = 30; // minutes
export const MIN_SLOT_DURATION = 15; // minutes
export const MAX_SLOT_DURATION = 480; // minutes (8 hours)

export const DURATION_OPTIONS = [
  { value: 15, label: "15 minutes" },
  { value: 30, label: "30 minutes" },
  { value: 45, label: "45 minutes" },
  { value: 60, label: "1 hour" },
  { value: 90, label: "1.5 hours" },
  { value: 120, label: "2 hours" },
  { value: 180, label: "3 hours" },
  { value: 240, label: "4 hours" },
];

export function formatTime(time: string): string {
  const [hour, minute] = time.split(":").map(Number);
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  const period = hour < 12 ? "AM" : "PM";
  return `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`;
}

export function parseTime(timeString: string): { hour: number; minute: number } {
  const [hour, minute] = timeString.split(":").map(Number);
  return { hour, minute };
}

export function isValidTimeRange(startTime: string, endTime: string): boolean {
  const start = parseTime(startTime);
  const end = parseTime(endTime);
  
  const startMinutes = start.hour * 60 + start.minute;
  const endMinutes = end.hour * 60 + end.minute;
  
  return endMinutes > startMinutes;
}
