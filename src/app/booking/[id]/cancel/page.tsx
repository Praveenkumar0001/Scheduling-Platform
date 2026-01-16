"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CancelBookingDialog from "@/components/booking/CancelBookingDialog";
import { Button } from "@/components/ui/button";

export default function CancelBookingPage({ params }: { params: { id: string } }) {
  const [showDialog, setShowDialog] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setShowDialog(false);
    router.push("/bookings");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Cancel Booking</CardTitle>
          <CardDescription>Are you sure you want to cancel this booking?</CardDescription>
        </CardHeader>
        <CardContent>
          <CancelBookingDialog 
            bookingId={params.id} 
            open={showDialog} 
            onOpenChange={handleClose}
          />
        </CardContent>
      </Card>
    </div>
  );
}
