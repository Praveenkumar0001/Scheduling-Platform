"use client"

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CalendarsPage() {
  return (
    <div className="max-w-4xl">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Calendars</h1>
          <p className="text-gray-400">Configure how your event types interact with your calendars</p>
        </div>
        <button className="px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors text-sm">
          + Add calendar
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6">
          <Calendar className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No calendar apps</h3>
        <p className="text-gray-400 text-center max-w-md mb-6">
          Add a calendar app to check for conflicts to prevent double bookings
        </p>
        <button className="px-6 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors">
          Connect calendar apps
        </button>
      </div>
    </div>
  );
}
