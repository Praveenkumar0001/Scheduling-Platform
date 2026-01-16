"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2, Plus, Code, Zap, CheckCircle2 } from "lucide-react";

export default function WebhooksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Webhooks</h1>
          <p className="text-sm text-gray-500 mt-1">
            Receive meeting data in real-time when something happens in Cal.com
          </p>
        </div>
        <Button className="bg-black hover:bg-gray-800">
          <Plus className="mr-2 h-4 w-4" />
          New webhook
        </Button>
      </div>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-gray-100 p-6 mb-6">
              <Link2 className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Create your first webhook</h3>
            <p className="text-sm text-gray-500 text-center mb-6 max-w-md">
              With Webhooks you can receive meeting data in real-time when something happens in Cal.com.
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800">
              <Plus className="mr-2 h-4 w-4" />
              New webhook
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-gray-600" />
            <CardTitle className="text-base font-semibold text-gray-900">About Webhooks</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <div className="flex items-start gap-3 mb-2">
              <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">What are webhooks?</h4>
                <p className="text-sm text-gray-600">
                  Webhooks allow you to receive real-time data about your bookings, cancellations, reschedules, and more. You can use webhooks to integrate your scheduling platform with other services.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-start gap-3 mb-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">How do they work?</h4>
                <p className="text-sm text-gray-600">
                  When an event occurs (like a new booking), we'll send an HTTP POST request to the URL you specify with details about the event.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Supported events</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Booking created",
                "Booking rescheduled",
                "Booking cancelled",
                "Meeting ended",
                "Form submitted",
                "Recording ready"
              ].map((event) => (
                <div key={event} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg bg-gray-50">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
