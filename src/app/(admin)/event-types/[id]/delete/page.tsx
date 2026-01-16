import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteEventDialog from "@/components/event-types/DeleteEventDialog";

export default function DeleteEventTypePage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Delete Event Type</h1>
        <p className="text-gray-400">Remove this event type permanently</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Confirm Deletion</CardTitle>
          <CardDescription>This action cannot be undone</CardDescription>
        </CardHeader>
        <CardContent>
          <DeleteEventDialog eventTypeId={params.id} />
        </CardContent>
      </Card>
    </div>
  );
}
