export interface Booking {
  id: string;
  startTime: Date;
  endTime: Date;
  attendeeName: string;
  attendeeEmail: string;
  attendeeNotes?: string | null;
  status: BookingStatus;
  userId: string;
  eventTypeId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BookingStatus = "confirmed" | "cancelled";

export interface CreateBookingInput {
  startTime: Date | string;
  endTime: Date | string;
  attendeeName: string;
  attendeeEmail: string;
  attendeeNotes?: string;
  eventTypeId: string;
}

export interface UpdateBookingInput {
  status?: BookingStatus;
  attendeeNotes?: string;
}

export interface BookingWithEventType extends Booking {
  eventType: {
    id: string;
    title: string;
    duration: number;
    color: string;
  };
}

export interface BookingWithUser extends Booking {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface AvailableSlot {
  date: Date;
  slots: TimeSlot[];
}
