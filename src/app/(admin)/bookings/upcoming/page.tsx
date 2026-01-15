import BookingList from "@/components/booking/BookingList";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UpcomingBookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/bookings">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Upcoming Bookings</h1>
          <p className="text-muted-foreground">View all your scheduled appointments</p>
        </div>
      </div>

      <BookingList filter="upcoming" />
    </div>
  );
}
