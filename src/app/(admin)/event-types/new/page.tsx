import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EventTypeForm from "@/components/event-types/EventTypeForm";

export default function NewEventTypePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Event Type</h1>
        <p className="text-muted-foreground">Set up a new event type for scheduling</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
          <CardDescription>Configure your event type settings</CardDescription>
        </CardHeader>
        <CardContent>
          <EventTypeForm />
        </CardContent>
      </Card>
    </div>
  );
}
