"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const weekdays = [
  { id: 0, name: "Sunday" },
  { id: 1, name: "Monday" },
  { id: 2, name: "Tuesday" },
  { id: 3, name: "Wednesday" },
  { id: 4, name: "Thursday" },
  { id: 5, name: "Friday" },
  { id: 6, name: "Saturday" },
];

const timeSlots = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? "00" : "30";
  return `${hour.toString().padStart(2, "0")}:${minute}`;
});

export default function AvailabilityForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState(
    weekdays.map((day) => ({
      dayOfWeek: day.id,
      enabled: day.id >= 1 && day.id <= 5,
      startTime: "09:00",
      endTime: "17:00",
    }))
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const enabledSlots = availability.filter((slot) => slot.enabled);
      
      const response = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ availabilities: enabledSlots }),
      });

      if (!response.ok) throw new Error("Failed to save availability");

      toast({
        title: "Success",
        description: "Availability updated successfully",
      });

      router.push("/availability");
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save availability",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateDay = (dayId: number, field: string, value: any) => {
    setAvailability(
      availability.map((day) =>
        day.dayOfWeek === dayId ? { ...day, [field]: value } : day
      )
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {weekdays.map((day) => {
        const dayAvailability = availability.find((a) => a.dayOfWeek === day.id)!;
        
        return (
          <div key={day.id} className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="w-32">
              <Label className="font-medium">{day.name}</Label>
            </div>
            
            <Switch
              checked={dayAvailability.enabled}
              onCheckedChange={(checked) => updateDay(day.id, "enabled", checked)}
            />

            {dayAvailability.enabled && (
              <>
                <div className="flex-1">
                  <Select
                    value={dayAvailability.startTime}
                    onValueChange={(value) => updateDay(day.id, "startTime", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <span className="text-muted-foreground">to</span>

                <div className="flex-1">
                  <Select
                    value={dayAvailability.endTime}
                    onValueChange={(value) => updateDay(day.id, "endTime", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
          </div>
        );
      })}

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Availability"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/availability")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
