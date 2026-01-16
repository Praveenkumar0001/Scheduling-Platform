"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { OutOfOffice } from "@/types";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface OutOfOfficeDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  entry?: OutOfOffice | null;
}

export default function OutOfOfficeDialog({
  open,
  onClose,
  onSuccess,
  entry,
}: OutOfOfficeDialogProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: entry?.title || "",
    startDate: entry ? new Date(entry.startDate) : new Date(),
    endDate: entry ? new Date(entry.endDate) : new Date(),
    isAllDay: entry?.isAllDay ?? true,
    notes: entry?.notes || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = entry
        ? `/api/out-of-office/${entry.id}`
        : "/api/out-of-office";
      const method = entry ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          startDate: formData.startDate.toISOString(),
          endDate: formData.endDate.toISOString(),
          isAllDay: formData.isAllDay,
          notes: formData.notes,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save out-of-office entry");
      }

      toast({
        title: "Success",
        description: `Out-of-office entry ${entry ? "updated" : "created"} successfully`,
      });

      onSuccess();
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to save out-of-office entry",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>
            {entry ? "Edit Out of Office" : "Create Out of Office"}
          </DialogTitle>
          <DialogDescription>
            Set the dates when you'll be unavailable to take bookings.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="e.g., Vacation, Holiday, Conference"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="w-full justify-start text-left font-normal bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(formData.startDate, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.startDate}
                    onSelect={(date) =>
                      date && setFormData({ ...formData, startDate: date })
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="w-full justify-start text-left font-normal bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(formData.endDate, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.endDate}
                    onSelect={(date) =>
                      date && setFormData({ ...formData, endDate: date })
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="isAllDay"
              checked={formData.isAllDay}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, isAllDay: checked })
              }
            />
            <Label htmlFor="isAllDay">All Day</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              placeholder="Add any additional information..."
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : entry ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
