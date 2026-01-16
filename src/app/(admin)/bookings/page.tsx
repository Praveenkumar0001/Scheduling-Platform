import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingList from "@/components/booking/BookingList";
import Link from "next/link";

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Bookings</h1>
        <p className="text-gray-400">View and manage all your appointments</p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Bookings</TabsTrigger>
          <TabsTrigger value="upcoming" asChild>
            <Link href="/bookings/upcoming">Upcoming</Link>
          </TabsTrigger>
          <TabsTrigger value="past" asChild>
            <Link href="/bookings/past">Past</Link>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <BookingList filter="all" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
