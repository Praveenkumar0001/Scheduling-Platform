"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "lucide-react";

export default function GeneralSettingsPage() {
  const [settings, setSettings] = useState({
    language: "en",
    timezone: "Europe/London",
    timeFormat: "12",
    startOfWeek: "Sunday",
    dynamicGroupLinks: true,
    searchEngineIndexing: true,
    monthlyDigest: true,
    preventImpersonation: false
  });

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">General</h1>
        <p className="text-gray-400">Manage settings for your language and timezone</p>
      </div>

      <div className="space-y-8">
        {/* Language */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Language
          </label>
          <Select value={settings.language} onValueChange={(value) => setSettings({...settings, language: value})}>
            <SelectTrigger className="w-full bg-[#1a1a1a] border-gray-800 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-gray-800">
              <SelectItem value="en" className="text-white hover:bg-gray-900">English</SelectItem>
              <SelectItem value="es" className="text-white hover:bg-gray-900">Spanish</SelectItem>
              <SelectItem value="fr" className="text-white hover:bg-gray-900">French</SelectItem>
              <SelectItem value="de" className="text-white hover:bg-gray-900">German</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Timezone */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Timezone
          </label>
          <div className="flex gap-3">
            <Select value={settings.timezone} onValueChange={(value) => setSettings({...settings, timezone: value})}>
              <SelectTrigger className="flex-1 bg-[#1a1a1a] border-gray-800 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-gray-800">
                <SelectItem value="Europe/London" className="text-white hover:bg-gray-900">Europe/London</SelectItem>
                <SelectItem value="America/New_York" className="text-white hover:bg-gray-900">America/New_York</SelectItem>
                <SelectItem value="America/Los_Angeles" className="text-white hover:bg-gray-900">America/Los_Angeles</SelectItem>
                <SelectItem value="Asia/Tokyo" className="text-white hover:bg-gray-900">Asia/Tokyo</SelectItem>
                <SelectItem value="Asia/Calcutta" className="text-white hover:bg-gray-900">Asia/Calcutta</SelectItem>
                <SelectItem value="Australia/Sydney" className="text-white hover:bg-gray-900">Australia/Sydney</SelectItem>
              </SelectContent>
            </Select>
            <button className="px-4 py-2 bg-[#1a1a1a] border border-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm whitespace-nowrap flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule timezone change
            </button>
          </div>
        </div>

        {/* Time Format */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Time format
          </label>
          <Select value={settings.timeFormat} onValueChange={(value) => setSettings({...settings, timeFormat: value})}>
            <SelectTrigger className="w-full bg-[#1a1a1a] border-gray-800 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-gray-800">
              <SelectItem value="12" className="text-white hover:bg-gray-900">12-hour</SelectItem>
              <SelectItem value="24" className="text-white hover:bg-gray-900">24-hour</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-yellow-600 mt-2">
            This is an internal setting and will not affect how times are displayed on public booking pages for you or anyone booking you.
          </p>
        </div>

        {/* Start of Week */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Start of week
          </label>
          <Select value={settings.startOfWeek} onValueChange={(value) => setSettings({...settings, startOfWeek: value})}>
            <SelectTrigger className="w-full bg-[#1a1a1a] border-gray-800 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-gray-800">
              <SelectItem value="Sunday" className="text-white hover:bg-gray-900">Sunday</SelectItem>
              <SelectItem value="Monday" className="text-white hover:bg-gray-900">Monday</SelectItem>
              <SelectItem value="Saturday" className="text-white hover:bg-gray-900">Saturday</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Update Button */}
        <div className="flex justify-end pt-4">
          <Button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
            Update
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Dynamic Group Links */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-white font-medium mb-1">Dynamic group links</h3>
              <p className="text-gray-400 text-sm">Allow attendees to book you through dynamic group bookings</p>
            </div>
            <Switch 
              checked={settings.dynamicGroupLinks}
              onCheckedChange={(checked) => setSettings({...settings, dynamicGroupLinks: checked})}
            />
          </div>
        </div>

        {/* Allow Search Engine Indexing */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-white font-medium mb-1">Allow search engine indexing</h3>
              <p className="text-gray-400 text-sm">Allow search engines to access your public content</p>
            </div>
            <Switch 
              checked={settings.searchEngineIndexing}
              onCheckedChange={(checked) => setSettings({...settings, searchEngineIndexing: checked})}
            />
          </div>
        </div>

        {/* Monthly Digest Email */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-white font-medium mb-1">Monthly digest email</h3>
              <p className="text-gray-400 text-sm">Monthly digest email for teams</p>
            </div>
            <Switch 
              checked={settings.monthlyDigest}
              onCheckedChange={(checked) => setSettings({...settings, monthlyDigest: checked})}
            />
          </div>
        </div>

        {/* Prevent Impersonation */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-white font-medium mb-1">Prevent impersonation on bookings</h3>
              <p className="text-gray-400 text-sm">
                When enabled, anyone trying to book events using your email address must verify they own it via a one time code or be logged in to prevent impersonation
              </p>
            </div>
            <Switch 
              checked={settings.preventImpersonation}
              onCheckedChange={(checked) => setSettings({...settings, preventImpersonation: checked})}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
