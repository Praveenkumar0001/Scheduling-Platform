"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { KeyRound } from "lucide-react";

export default function PasswordPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Password</h1>
        <p className="text-muted-foreground">
          Manage settings for your account passwords
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your account is managed by GOOGLE</CardTitle>
          <CardDescription>
            To change your email, password, enable two-factor authentication and more, please visit your GOOGLE account settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="rounded-full bg-muted p-6 mb-4">
              <KeyRound className="h-12 w-12 text-muted-foreground" />
            </div>
            <Button size="lg">
              Create account password
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
