"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

interface TimeSlotSelectorProps {
  date: Date;
  eventSlug: string;
  onSelectTime: (time: string) => void;
  selectedTime?: string;
}

export default function TimeSlotSelector({
  date,
  eventSlug,
  onSelectTime,
  selectedTime,
}: TimeSlotSelectorProps) {
  const [slots, setSlots] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAvailableSlots();
  }, [date, eventSlug]);

  const fetchAvailableSlots = async () => {
    setLoading(true);
    try {
      // First, get the event type ID from the slug
      const eventTypesResponse = await fetch("/api/event-types");
      const eventTypes = await eventTypesResponse.json();
      const eventType = Array.isArray(eventTypes) 
        ? eventTypes.find((et: any) => et.slug === eventSlug)
        : null;

      if (!eventType) {
        setSlots([]);
        setLoading(false);
        return;
      }

      // Fetch available slots
      const dateStr = date.toISOString().split("T")[0];
      const response = await fetch(
        `/api/bookings/available-slots?date=${dateStr}&eventTypeId=${eventType.id}`
      );
      
      if (!response.ok) {
        setSlots([]);
        setLoading(false);
        return;
      }

      const data = await response.json();
      setSlots(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch available slots:", error);
      setSlots([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Select a Time</h3>
      {slots.length === 0 ? (
        <p className="text-muted-foreground">No available time slots for this date.</p>
      ) : (
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-2">
            {slots.map((slot) => {
              const startTime = new Date(slot.startTime).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              });
              return (
                <Button
                  key={slot.startTime}
                  variant={selectedTime === startTime ? "default" : "outline"}
                  className="w-full"
                  onClick={() => onSelectTime(startTime)}
                >
                  {startTime}
                </Button>
              );
            })}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}
