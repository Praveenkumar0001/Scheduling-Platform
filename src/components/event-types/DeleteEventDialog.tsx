"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { AlertTriangle } from "lucide-react";

interface DeleteEventDialogProps {
  eventTypeId: string;
}

export default function DeleteEventDialog({ eventTypeId }: DeleteEventDialogProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/event-types/${eventTypeId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete event type");

      toast({
        title: "Success",
        description: "Event type deleted successfully",
      });

      router.push("/event-types");
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete event type",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 p-4 border border-destructive/50 bg-destructive/10 rounded-lg">
        <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
        <div>
          <p className="font-medium">This action cannot be undone</p>
          <p className="text-sm text-muted-foreground">
            All bookings associated with this event type will also be affected.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete Event Type"}
        </Button>
        <Button
          className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
          onClick={() => router.push("/event-types")}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
