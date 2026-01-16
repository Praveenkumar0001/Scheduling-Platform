"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ShieldCheck, AlertCircle } from "lucide-react";

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
        <h1 className="text-2xl font-bold tracking-tight text-white">Impersonation</h1>
        <p className="text-sm text-gray-400 mt-1">
          Allow our support team to impersonate your account
        </p>
      </div>

      <Card className="border-gray-800 shadow-sm bg-[#0a0a0a]">
        <CardHeader className="border-b border-gray-800">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-gray-800 p-3 flex-shrink-0">
              <ShieldCheck className="h-6 w-6 text-gray-400" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-base font-semibold text-white">User impersonation</CardTitle>
              <CardDescription className="text-sm text-gray-400 mt-1">
                Allows our support team to temporarily sign in as you to help us quickly resolve any issues you report to us.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between py-2">
            <Label htmlFor="impersonation" className="flex-1 cursor-pointer">
              <div className="space-y-1">
                <div className="text-sm font-medium text-white">Allow impersonation</div>
                <div className="text-sm text-gray-400">
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

      <Card className="border-yellow-700/50 bg-yellow-500/10 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-yellow-400 mb-1">Security note</h4>
              <p className="text-sm text-yellow-300/80">
                When impersonation is enabled, Cal.com support staff will be able to access your account to help resolve issues. You will be notified via email whenever impersonation is used.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
