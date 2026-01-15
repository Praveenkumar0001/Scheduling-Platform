import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EventTypeForm from "@/components/event-types/EventTypeForm";

export default function EditEventTypePage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Event Type</h1>
        <p className="text-muted-foreground">Update your event type settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
          <CardDescription>Modify your event type configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <EventTypeForm eventTypeId={params.id} />
        </CardContent>
      </Card>
    </div>
  );
}
