import BookingCalendar from "@/components/booking/BookingCalendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookEventPage({ params }: { params: { username: string; eventSlug: string } }) {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{params.eventSlug.replace(/-/g, ' ')}</CardTitle>
            <CardDescription>Book a time with @{params.username}</CardDescription>
          </CardHeader>
          <CardContent>
            <BookingCalendar username={params.username} eventSlug={params.eventSlug} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
