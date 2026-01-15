export interface Availability {
  id: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateAvailabilityInput {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface UpdateAvailabilityInput {
  dayOfWeek?: number;
  startTime?: string;
  endTime?: string;
}

export interface WeeklyAvailability {
  [key: number]: Availability[];
}

export interface AvailabilitySlot {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  enabled: boolean;
}
