import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EventTypeList from "@/components/event-types/EventTypeList";

export default function EventTypesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Event Types</h1>
          <p className="text-muted-foreground">Manage your event types and scheduling options</p>
        </div>
        <Button asChild>
          <Link href="/event-types/new">
            <Plus className="mr-2 h-4 w-4" />
            New Event Type
          </Link>
        </Button>
      </div>

      <EventTypeList />
    </div>
  );
}
