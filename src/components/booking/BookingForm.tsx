"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface BookingFormProps {
  username: string;
  eventSlug: string;
  date: Date;
  time: string;
}

export default function BookingForm({ username, eventSlug, date, time }: BookingFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get event type to determine duration
      const eventTypesResponse = await fetch("/api/event-types");
      const eventTypes = await eventTypesResponse.json();
      const eventType = Array.isArray(eventTypes)
        ? eventTypes.find((et: any) => et.slug === eventSlug)
        : null;

      if (!eventType) {
        throw new Error("Event type not found");
      }

      // Calculate end time based on duration
      const startDateTime = new Date(`${date.toISOString().split("T")[0]}T${time}:00`);
      const endDateTime = new Date(startDateTime.getTime() + eventType.duration * 60000);

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attendeeName: formData.name,
          attendeeEmail: formData.email,
          attendeeNotes: formData.notes,
          startTime: startDateTime.toISOString(),
          endTime: endDateTime.toISOString(),
          eventTypeId: eventType.id,
        }),
      });

      if (!response.ok) throw new Error("Failed to create booking");

      const booking = await response.json();

      toast({
        title: "Success",
        description: "Booking created successfully",
      });

      router.push(`/booking/${booking.id}/success`);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create booking",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="John Doe"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes (Optional)</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Anything you'd like to share..."
          rows={3}
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Booking..." : "Confirm Booking"}
      </Button>
    </form>
  );
}
