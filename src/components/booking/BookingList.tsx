"use client"

import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import EmptyState from "@/components/shared/EmptyState";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

interface BookingListProps {
  filter: "all" | "upcoming" | "past";
}

export default function BookingList({ filter }: BookingListProps) {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, [filter]);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`/api/bookings?filter=${filter}`);
      const data = await response.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (bookings.length === 0) {
    return (
      <EmptyState
        title="No bookings"
        description={`You don't have any ${filter === "all" ? "" : filter} bookings yet`}
      />
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {bookings.map((booking) => (
        <BookingCard 
          key={booking.id} 
          {...booking} 
          onCancelled={fetchBookings}
        />
      ))}
    </div>
  );
}
