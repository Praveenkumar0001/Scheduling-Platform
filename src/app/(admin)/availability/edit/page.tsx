import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AvailabilityForm from "@/components/availability/AvailabilityForm";

export default function EditAvailabilityPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Availability</h1>
        <p className="text-muted-foreground">Set your available hours for each day of the week</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
          <CardDescription>Configure when you're available for bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <AvailabilityForm />
        </CardContent>
      </Card>
    </div>
  );
}
