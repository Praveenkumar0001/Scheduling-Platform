"use client"

import { useEffect, useState } from "react";
import EventTypeCard from "./EventTypeCard";
import EmptyState from "@/components/shared/EmptyState";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

interface EventType {
  id: string;
  title: string;
  slug: string;
  description?: string;
  duration: number;
  color: string;
  isActive: boolean;
}

export default function EventTypeList() {
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventTypes();
  }, []);

  const fetchEventTypes = async () => {
    try {
      const response = await fetch("/api/event-types");
      const data = await response.json();
      setEventTypes(data);
    } catch (error) {
      console.error("Failed to fetch event types:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (eventTypes.length === 0) {
    return (
      <EmptyState
        title="No event types"
        description="Create your first event type to start accepting bookings"
      />
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {eventTypes.map((eventType) => (
        <EventTypeCard key={eventType.id} {...eventType} />
      ))}
    </div>
  );
}
