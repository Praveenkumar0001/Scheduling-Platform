"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, RefreshCw, UserCheck, MessageSquare, Video, EyeOff } from "lucide-react";
import { Calendar } from "lucide-react";

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Teams</h1>
          <p className="text-gray-400 mt-2">Create and manage teams to use collaborative features.</p>
        </div>
        <Button className="bg-white text-black hover:bg-gray-100">
          + New
        </Button>
      </div>

      {/* Cal.com is better with teams Banner */}
      <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
        <CardContent className="p-8">
          <div className="flex items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">Cal.com is better with teams</h2>
              <p className="text-gray-300 text-lg mb-6 max-w-xl leading-relaxed">
                Add your team members to your event types. Use collective scheduling to include everyone or find the most suitable person with round robin scheduling.
              </p>
              <div className="flex gap-3">
                <Button className="bg-white text-black hover:bg-gray-100 font-medium">
                  Create team
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
            </div>
            
            {/* Illustration - Calendar Preview */}
            <div className="hidden lg:block">
              <div className="w-80 bg-white rounded-lg shadow-2xl p-6">
                {/* Header with avatars */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Acme Inc.</div>
                  </div>
                </div>
                
                {/* Event Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sales demo</h3>
                
                {/* Event Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4" />
                    <span>Friday, August 30, 2021</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-4 h-4 flex items-center justify-center">⏰</span>
                    <span>9:00 am - 10:00 am</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-4 h-4 flex items-center justify-center">ℹ️</span>
                    <span>Book a call with a member of our sales team.</span>
                  </div>
                </div>

                {/* Mini Calendar */}
                <div className="border border-gray-200 rounded-lg p-3 mt-4">
                  <div className="text-center mb-2">
                    <div className="text-sm font-semibold">Dec 2022</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    <div className="text-xs text-center text-gray-400">SUN</div>
                    <div className="text-xs text-center text-gray-400">MON</div>
                    <div className="text-xs text-center text-gray-400">TUE</div>
                    <div className="text-xs text-center text-gray-400">WED</div>
                    <div className="text-xs text-center text-gray-400">THU</div>
                    <div className="text-xs text-center text-gray-400">FRI</div>
                    <div className="text-xs text-center text-gray-400">SAT</div>
                    {[...Array(31)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`text-xs text-center py-1 ${
                          i === 14 || i === 15 || i === 16 || i === 21 || i === 22 || i === 23 
                            ? 'bg-gray-800 text-white rounded' 
                            : 'text-gray-700'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Collective scheduling */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-red-500" />
            </div>
            <CardTitle className="text-white">Collective scheduling</CardTitle>
            <CardDescription className="text-gray-400">
              Make it easy to book your team when everyone is available.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Round robin */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-blue-500" />
            </div>
            <CardTitle className="text-white">Round robin</CardTitle>
            <CardDescription className="text-gray-400">
              Find the best person available and cycle through your team.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Fixed round robin */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6 text-green-500" />
            </div>
            <CardTitle className="text-white">Fixed round robin</CardTitle>
            <CardDescription className="text-gray-400">
              Add one fixed attendee and round robin through a number of attendees.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Send SMS to attendee */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-orange-500" />
            </div>
            <CardTitle className="text-white">Send SMS to attendee</CardTitle>
            <CardDescription className="text-gray-400">
              Easily send meeting reminders via SMS to your attendees
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Cal Video Recordings */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-purple-500" />
            </div>
            <CardTitle className="text-white">Cal Video Recordings</CardTitle>
            <CardDescription className="text-gray-400">
              Recordings are only available as part of our teams plan. Upgrade to start recording your calls
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Disable Cal.com branding */}
        <Card className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <EyeOff className="w-6 h-6 text-purple-500" />
            </div>
            <CardTitle className="text-white">Disable Cal.com branding</CardTitle>
            <CardDescription className="text-gray-400">
              Hide all Cal.com branding from your public pages.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
