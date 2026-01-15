export const WEEKDAYS = [
  { id: 0, name: "Sunday", short: "Sun" },
  { id: 1, name: "Monday", short: "Mon" },
  { id: 2, name: "Tuesday", short: "Tue" },
  { id: 3, name: "Wednesday", short: "Wed" },
  { id: 4, name: "Thursday", short: "Thu" },
  { id: 5, name: "Friday", short: "Fri" },
  { id: 6, name: "Saturday", short: "Sat" },
];

export const WORK_DAYS = WEEKDAYS.filter((day) => day.id >= 1 && day.id <= 5);

export function getWeekdayName(dayId: number, short: boolean = false): string {
  const day = WEEKDAYS.find((d) => d.id === dayId);
  return day ? (short ? day.short : day.name) : "";
}

export function isWeekday(dayId: number): boolean {
  return dayId >= 1 && dayId <= 5;
}

export function isWeekend(dayId: number): boolean {
  return dayId === 0 || dayId === 6;
}
