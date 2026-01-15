export function getUserTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function getTimeZoneOffset(timeZone: string): string {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "short",
  });
  
  const parts = formatter.formatToParts(date);
  const timeZoneName = parts.find((part) => part.type === "timeZoneName")?.value;
  
  return timeZoneName || timeZone;
}

export function convertTimeZone(
  date: Date,
  fromTimeZone: string,
  toTimeZone: string
): Date {
  const fromDate = new Date(
    date.toLocaleString("en-US", { timeZone: fromTimeZone })
  );
  const toDate = new Date(
    date.toLocaleString("en-US", { timeZone: toTimeZone })
  );
  
  const diff = toDate.getTime() - fromDate.getTime();
  return new Date(date.getTime() + diff);
}

export function isValidTimeZone(timeZone: string): boolean {
  try {
    Intl.DateTimeFormat(undefined, { timeZone });
    return true;
  } catch {
    return false;
  }
}
