"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, GitBranch, BarChart3, TestTube, Mail, Download } from "lucide-react";

export default function RoutingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Routing</h1>
        <p className="text-gray-400 mt-2">Create forms to direct attendees to the correct destinations</p>
      </div>

      {/* Teams Plan Required Banner */}
      <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-4">Teams plan required</h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                Routing forms are a great way to route your incoming leads to the right person. Upgrade to a Teams plan to access this feature.
              </p>
              <div className="flex gap-3">
                <Button className="bg-white text-black hover:bg-gray-100">
                  Upgrade
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
            </div>
            
            {/* Illustration */}
            <div className="hidden lg:block ml-8">
              <div className="w-64 h-40 bg-white rounded-lg p-4 relative">
                <div className="absolute top-8 left-12 w-32 h-8 bg-black rounded"></div>
                <div className="absolute bottom-8 left-8 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-white" />
                  </div>
                </div>
                <svg className="absolute -top-4 left-1/2 transform -translate-x-1/2" width="100" height="30" viewBox="0 0 100 30">
                  <path d="M50 0 L30 30 L70 30 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-gray-600"/>
                </svg>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Create your first form */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-orange-500" />
            </div>
            <CardTitle className="text-white">Create your first form</CardTitle>
            <CardDescription className="text-gray-400">
              With routing forms you can ask qualifying questions and route to the correct person or event type.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Create your first route */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
              <GitBranch className="w-6 h-6 text-green-500" />
            </div>
            <CardTitle className="text-white">Create your first route</CardTitle>
            <CardDescription className="text-gray-400">
              Route to the right person based on the answers to your form
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Reporting */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-blue-500" />
            </div>
            <CardTitle className="text-white">Reporting</CardTitle>
            <CardDescription className="text-gray-400">
              See all incoming form data and download it as a CSV
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Test routing form */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
              <TestTube className="w-6 h-6 text-cyan-500" />
            </div>
            <CardTitle className="text-white">Test routing form</CardTitle>
            <CardDescription className="text-gray-400">
              Test your routing form without submitting any data
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Send Email to Owner */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-yellow-500" />
            </div>
            <CardTitle className="text-white">Send Email to Owner</CardTitle>
            <CardDescription className="text-gray-400">
              Sends an email to the owner when the form is submitted
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Download responses */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-purple-500" />
            </div>
            <CardTitle className="text-white">Download responses</CardTitle>
            <CardDescription className="text-gray-400">
              Download all responses to your form in CSV format.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
