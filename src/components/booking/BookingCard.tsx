"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail, User } from "lucide-react";
import { format } from "date-fns";
import CancelBookingDialog from "./CancelBookingDialog";
import { useState } from "react";

interface BookingCardProps {
  id: string;
  attendeeName: string;
  attendeeEmail: string;
  startTime: Date;
  endTime: Date;
  status: string;
  eventType: {
    title: string;
    color: string;
  };
  onCancelled?: () => void;
}

export default function BookingCard({
  id,
  attendeeName,
  attendeeEmail,
  startTime,
  endTime,
  status,
  eventType,
  onCancelled,
}: BookingCardProps) {
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: eventType.color }}
              />
              <CardTitle className="text-lg">{eventType.title}</CardTitle>
            </div>
            <Badge variant={status === "confirmed" ? "default" : "secondary"}>
              {status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span>{attendeeName}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{attendeeEmail}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{format(new Date(startTime), "MMMM d, yyyy")}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>
              {format(new Date(startTime), "h:mm a")} - {format(new Date(endTime), "h:mm a")}
            </span>
          </div>

          {status === "confirmed" && (
            <Button 
              className="w-full mt-4 bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
              size="sm" 
              onClick={() => setShowCancelDialog(true)}
            >
              Cancel Booking
            </Button>
          )}
        </CardContent>
      </Card>

      <CancelBookingDialog
        bookingId={id}
        open={showCancelDialog}
        onOpenChange={setShowCancelDialog}
        onCancelled={onCancelled}
      />
    </>
  );
}
