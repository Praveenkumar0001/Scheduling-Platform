"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2, Plus } from "lucide-react";

export default function WebhooksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Webhooks</h1>
          <p className="text-muted-foreground">
            Receive meeting data in real-time when something happens in Cal.com
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-muted p-6 mb-6">
              <Link2 className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create your first webhook</h3>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              With Webhooks you can receive meeting data in real-time when something happens in Cal.com.
            </p>
            <Button size="lg">
              <Plus className="mr-2 h-4 w-4" />
              New
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About Webhooks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">What are webhooks?</h4>
            <p className="text-sm text-muted-foreground">
              Webhooks allow you to receive real-time data about your bookings, cancellations, reschedules, and more. You can use webhooks to integrate your scheduling platform with other services.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">How do they work?</h4>
            <p className="text-sm text-muted-foreground">
              When an event occurs (like a new booking), we'll send an HTTP POST request to the URL you specify with details about the event.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
