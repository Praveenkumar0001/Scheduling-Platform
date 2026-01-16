"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function ImpersonationPage() {
  const { toast } = useToast();
  const [impersonationEnabled, setImpersonationEnabled] = useState(false);

  const handleToggle = (checked: boolean) => {
    setImpersonationEnabled(checked);
    toast({
      title: checked ? "Impersonation enabled" : "Impersonation disabled",
      description: checked 
        ? "Support team can now sign in as you to help resolve issues"
        : "Support team can no longer sign in as you",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Impersonation</h1>
        <p className="text-muted-foreground">
          Settings to manage user impersonation
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User impersonation</CardTitle>
          <CardDescription>
            Allows our support team to temporarily sign in as you to help us quickly resolve any issues you report to us.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label htmlFor="impersonation" className="flex-1">
              <div className="space-y-1">
                <div className="font-medium">Allow impersonation</div>
                <div className="text-sm text-muted-foreground">
                  Enable this to allow support team access when needed
                </div>
              </div>
            </Label>
            <Switch
              id="impersonation"
              checked={impersonationEnabled}
              onCheckedChange={handleToggle}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
