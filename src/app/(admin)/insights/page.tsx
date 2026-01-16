"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, RefreshCw, TrendingUp } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Insights</h1>
        <p className="text-sm text-gray-400 mt-1">
          View booking insights across your events
        </p>
      </div>

      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
        <CardContent className="p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Make informed decisions with Insights
              </h2>
              <p className="text-gray-300 text-lg">
                Our Insights dashboard surfaces all activity across your team and shows you trends that enable better team scheduling and decision making.
              </p>
              <div className="flex gap-4">
                <Button className="bg-white text-black hover:bg-gray-100">
                  Create team
                </Button>
                <Button variant="ghost" className="text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="flex flex-col gap-4">
                {/* Bookings Card */}
                <Card className="bg-black/40 border-gray-700 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Bookings</p>
                        <p className="text-5xl font-bold text-white">32%</p>
                      </div>
                      <div className="h-20 w-20 bg-gray-800 rounded-lg"></div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  {/* Most Booked Card */}
                  <Card className="bg-black/40 border-gray-700 backdrop-blur">
                    <CardContent className="p-4">
                      <p className="text-gray-400 text-xs mb-2">Most booked</p>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
                        <p className="text-3xl font-bold text-white">321</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Canceled Card */}
                  <Card className="bg-black/40 border-gray-700 backdrop-blur">
                    <CardContent className="p-4">
                      <p className="text-gray-400 text-xs mb-2">Canceled</p>
                      <p className="text-3xl font-bold text-white">2%</p>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-500">trending</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Decorative Chart Bars */}
              <div className="absolute bottom-0 right-0 flex items-end gap-2 opacity-20">
                <div className="w-8 h-12 bg-gray-600 rounded"></div>
                <div className="w-8 h-20 bg-gray-600 rounded"></div>
                <div className="w-8 h-16 bg-gray-600 rounded"></div>
                <div className="w-8 h-24 bg-gray-600 rounded"></div>
                <div className="w-8 h-14 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* View Bookings Card */}
        <Card className="bg-[#0a0a0a] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-500/10">
                <Users className="h-6 w-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">
                  View bookings across all members
                </h3>
                <p className="text-sm text-gray-400">
                  See who's receiving the most bookings and ensure the best distribution across your team
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Identify Trends Card */}
        <Card className="bg-[#0a0a0a] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <RefreshCw className="h-6 w-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">
                  Identify booking trends
                </h3>
                <p className="text-sm text-gray-400">
                  See what times of the week and what times during the day are popular for your bookers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spot Popular Events Card */}
        <Card className="bg-[#0a0a0a] border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">
                  Spot popular event types
                </h3>
                <p className="text-sm text-gray-400">
                  See which of your event types are receiving the most clicks and bookings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
