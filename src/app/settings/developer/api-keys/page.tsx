"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key, Plus, Shield, Code2, AlertCircle } from "lucide-react";

export default function APIKeysPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">API keys</h1>
          <p className="text-sm text-gray-500 mt-1">
            API keys allow other apps to communicate with Cal.com
          </p>
        </div>
        <Button className="bg-black hover:bg-gray-800">
          <Plus className="mr-2 h-4 w-4" />
          New API key
        </Button>
      </div>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-gray-100 p-6 mb-6">
              <Key className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Create your first API key</h3>
            <p className="text-sm text-gray-500 text-center mb-6 max-w-md">
              API keys allow other apps to communicate with Cal.com and manage your scheduling data programmatically.
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800">
              <Plus className="mr-2 h-4 w-4" />
              New API key
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-gray-600" />
            <CardTitle className="text-base font-semibold text-gray-900">About API Keys</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <div className="flex items-start gap-3 mb-2">
              <Key className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">What are API keys?</h4>
                <p className="text-sm text-gray-600">
                  API keys are unique identifiers that authenticate requests to our API. They allow you to programmatically access and manage your scheduling data.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-start gap-3 mb-2">
              <Code2 className="h-5 w-5 text-purple-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">How to use them?</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Include your API key in the Authorization header of your HTTP requests:
                </p>
                <div className="bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-xs">
                  Authorization: Bearer your_api_key_here
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="h-5 w-5 text-green-600 mt-0.5" />
              <h4 className="text-sm font-semibold text-gray-900">Security best practices</h4>
            </div>
            <ul className="space-y-2 ml-8">
              {[
                "Store API keys securely using environment variables",
                "Rotate keys regularly for enhanced security",
                "Use different keys for different environments (dev, staging, production)",
                "Revoke keys immediately if compromised",
                "Never commit API keys to version control",
                "Set appropriate rate limits and scopes"
              ].map((practice, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-yellow-200 bg-yellow-50 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-yellow-900 mb-1">Keep your keys secure</h4>
              <p className="text-sm text-yellow-700">
                API keys have full access to your account. Treat them like passwords and never share them publicly or in client-side code.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
