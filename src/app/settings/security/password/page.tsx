"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { KeyRound, ExternalLink } from "lucide-react";

export default function PasswordPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Password</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage settings for your account passwords
        </p>
      </div>

      <Card className="border-gray-800 shadow-sm bg-[#0a0a0a]">
        <CardHeader className="border-b border-gray-800 bg-[#0a0a0a]">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-base font-semibold text-white">Your account is managed by GOOGLE</CardTitle>
              <CardDescription className="text-sm text-gray-400 mt-1">
                To change your email, password, enable two-factor authentication and more, please visit your GOOGLE account settings.
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
              SSO
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6 bg-[#0a0a0a]">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-gray-800 p-6 mb-6">
              <KeyRound className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No password set</h3>
            <p className="text-sm text-gray-400 text-center mb-6 max-w-md">
              Your account is currently managed by Google. You can create a separate password for direct sign-in.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              <KeyRound className="mr-2 h-4 w-4" />
              Create account password
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-800 shadow-sm bg-[#0a0a0a]">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="text-base font-semibold text-white">Two-factor authentication</CardTitle>
          <CardDescription className="text-sm text-gray-400 mt-1">
            Manage your 2FA settings through your Google account
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
            <ExternalLink className="mr-2 h-4 w-4" />
            Manage in Google Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
