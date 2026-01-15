import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BookingCalendar from "@/components/booking/BookingCalendar";

export default function RescheduleBookingPage({ params }: { params: { id: string; token: string } }) {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Reschedule Your Booking</CardTitle>
            <CardDescription>Select a new date and time for your meeting</CardDescription>
          </CardHeader>
          <CardContent>
            <BookingCalendar 
              username="demo" 
              eventSlug="reschedule" 
              bookingId={params.id}
              rescheduleToken={params.token}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
