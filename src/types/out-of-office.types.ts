export interface OutOfOffice {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  isAllDay: boolean;
  notes?: string | null;
  redirectUserId?: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOutOfOfficeInput {
  title: string;
  startDate: Date | string;
  endDate: Date | string;
  isAllDay?: boolean;
  notes?: string;
  redirectUserId?: string;
}

export interface UpdateOutOfOfficeInput {
  title?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  isAllDay?: boolean;
  notes?: string;
  redirectUserId?: string;
}

export interface OutOfOfficeFilters {
  startDate?: Date;
  endDate?: Date;
  userId?: string;
}
