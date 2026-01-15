"use client"

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import TimeSlotSelector from "./TimeSlotSelector";
import BookingForm from "./BookingForm";

interface BookingCalendarProps {
  username: string;
  eventSlug: string;
}

export default function BookingCalendar({ username, eventSlug }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Select a Date</h3>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          disabled={(date) => date < new Date()}
          className="rounded-md border"
        />
      </div>

      <div className="space-y-6">
        {selectedDate && (
          <>
            <TimeSlotSelector
              date={selectedDate}
              eventSlug={eventSlug}
              onSelectTime={setSelectedTime}
              selectedTime={selectedTime}
            />
            
            {selectedTime && (
              <BookingForm
                username={username}
                eventSlug={eventSlug}
                date={selectedDate}
                time={selectedTime}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
