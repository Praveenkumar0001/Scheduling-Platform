export interface EventType {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  duration: number;
  color: string;
  isActive: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEventTypeInput {
  title: string;
  slug: string;
  description?: string;
  duration: number;
  color?: string;
  isActive?: boolean;
}

export interface UpdateEventTypeInput {
  title?: string;
  slug?: string;
  description?: string;
  duration?: number;
  color?: string;
  isActive?: boolean;
}

export interface EventTypeWithBookings extends EventType {
  bookings: Array<{
    id: string;
    startTime: Date;
    endTime: Date;
  }>;
}
