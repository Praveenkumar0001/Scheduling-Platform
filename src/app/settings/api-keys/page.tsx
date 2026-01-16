"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key, Plus } from "lucide-react";

export default function APIKeysPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">API keys</h1>
          <p className="text-muted-foreground">
            API keys allow other apps to communicate with Cal.com
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-muted p-6 mb-6">
              <Key className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create your first API key</h3>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              API keys allow other apps to communicate with Cal.com
            </p>
            <Button size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About API Keys</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">What are API keys?</h4>
            <p className="text-sm text-muted-foreground">
              API keys are unique identifiers that authenticate requests to our API. They allow you to programmatically access and manage your scheduling data.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">How to use them?</h4>
            <p className="text-sm text-muted-foreground">
              Include your API key in the Authorization header of your HTTP requests. Keep your keys secure and never share them publicly.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Security best practices</h4>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Store API keys securely using environment variables</li>
              <li>Rotate keys regularly</li>
              <li>Use different keys for different environments</li>
              <li>Revoke keys immediately if compromised</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
