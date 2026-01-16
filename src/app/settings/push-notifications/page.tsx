"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Bell, CheckCircle2, AlertCircle } from "lucide-react";

export default function PushNotificationsPage() {
  const { toast } = useToast();
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    typeof window !== "undefined" && Notification.permission === "granted"
  );

  const handleEnableNotifications = async () => {
    if (!("Notification" in window)) {
      toast({
        title: "Not supported",
        description: "This browser does not support notifications",
        variant: "destructive",
      });
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setNotificationsEnabled(true);
        toast({
          title: "Success",
          description: "Browser notifications enabled successfully",
        });
      } else {
        toast({
          title: "Permission denied",
          description: "You need to allow notifications in your browser settings",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to enable notifications",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Push notifications</h1>
        <p className="text-sm text-gray-500 mt-1">
          Receive push notifications when booker submits instant meeting booking.
        </p>
      </div>

      {notificationsEnabled && (
        <Card className="border-green-200 bg-green-50 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-green-900 mb-1">Notifications enabled</h4>
                <p className="text-sm text-green-700">
                  You'll receive browser notifications for new bookings and important events.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-gray-600" />
            <CardTitle className="text-base font-semibold text-gray-900">Browser Notifications</CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-500 mt-1">
            Get notified about bookings, cancellations, and other important events
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-gray-100 p-6 mb-6">
              <Bell className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {notificationsEnabled ? "Notifications Active" : "Enable Notifications"}
            </h3>
            <p className="text-sm text-gray-500 text-center mb-6 max-w-md">
              {notificationsEnabled
                ? "You're all set! You'll receive notifications for instant meeting bookings and important updates."
                : "Allow browser notifications to get instant alerts when someone books a meeting with you."}
            </p>
            {!notificationsEnabled && (
              <Button 
                onClick={handleEnableNotifications} 
                size="lg"
                className="bg-black hover:bg-gray-800"
              >
                <Bell className="mr-2 h-4 w-4" />
                Allow browser notifications
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-base font-semibold text-gray-900">Notification Types</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {[
              { title: "New bookings", description: "Get notified when someone books a meeting" },
              { title: "Cancellations", description: "Stay informed about cancelled meetings" },
              { title: "Reschedules", description: "Know when meetings are rescheduled" },
              { title: "Reminders", description: "Receive reminders before upcoming meetings" }
            ].map((type, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg bg-white"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-gray-900">{type.title}</div>
                  <div className="text-sm text-gray-500">{type.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-blue-900 mb-1">Browser compatibility</h4>
              <p className="text-sm text-blue-700">
                Push notifications work best in Chrome, Firefox, Safari, and Edge. Make sure notifications are not blocked in your browser settings.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
