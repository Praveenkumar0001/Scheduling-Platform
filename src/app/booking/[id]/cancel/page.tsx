import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CancelBookingDialog from "@/components/booking/CancelBookingDialog";

export default function CancelBookingPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Cancel Booking</CardTitle>
          <CardDescription>Are you sure you want to cancel this booking?</CardDescription>
        </CardHeader>
        <CardContent>
          <CancelBookingDialog bookingId={params.id} />
        </CardContent>
      </Card>
    </div>
  );
}
