import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function UserEventPage({ params }: { params: { username: string; eventSlug: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle className="text-2xl">{params.eventSlug.replace(/-/g, ' ')}</CardTitle>
          <CardDescription>Booking with @{params.username}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Select a time to book this event type.
            </p>
            <Link 
              href={`/${params.username}/${params.eventSlug}/book`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Continue to Booking
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
