"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function DateOverridesPage() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({
    isAvailable: false,
    startTime: "09:00",
    endTime: "17:00",
    reason: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate) {
      toast({
        title: "Error",
        description: "Please select a date",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/date-overrides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate.toISOString(),
          ...formData,
        }),
      });

      if (!response.ok) throw new Error("Failed to save date override");

      toast({
        title: "Success",
        description: "Date override saved successfully",
      });

      setSelectedDate(undefined);
      setFormData({
        isAvailable: false,
        startTime: "09:00",
        endTime: "17:00",
        reason: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save date override",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Date Overrides</h1>
        <p className="text-muted-foreground">
          Block specific dates or set custom hours
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
            <CardDescription>Choose a date to override</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {selectedDate && (
          <Card>
            <CardHeader>
              <CardTitle>Override Settings</CardTitle>
              <CardDescription>
                Configure availability for {selectedDate.toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Available on this date</Label>
                    <p className="text-sm text-muted-foreground">
                      Make this date available or blocked
                    </p>
                  </div>
                  <Switch
                    checked={formData.isAvailable}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, isAvailable: checked })
                    }
                  />
                </div>

                {formData.isAvailable && (
                  <>
                    <div className="space-y-2">
                      <Label>Start Time</Label>
                      <Input
                        type="time"
                        value={formData.startTime}
                        onChange={(e) =>
                          setFormData({ ...formData, startTime: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>End Time</Label>
                      <Input
                        type="time"
                        value={formData.endTime}
                        onChange={(e) =>
                          setFormData({ ...formData, endTime: e.target.value })
                        }
                      />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label>Reason (Optional)</Label>
                  <Textarea
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                    placeholder="Out of office, Holiday, etc."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Save Override
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
