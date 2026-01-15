import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AvailabilityPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Availability</h1>
          <p className="text-muted-foreground">View your current availability settings</p>
        </div>
        <Button asChild>
          <Link href="/availability/edit">Edit Availability</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
          <CardDescription>Your available hours for each day</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">Configure your availability to set when others can book time with you.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
