"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function AppearancePage() {
  const [dashboardTheme, setDashboardTheme] = useState("system");
  const [bookingTheme, setBookingTheme] = useState("system");
  const [bookingLayouts, setBookingLayouts] = useState({
    month: true,
    weekly: true,
    column: true
  });
  const [defaultView, setDefaultView] = useState("month");
  const [customBrandColors, setCustomBrandColors] = useState(true);
  const [brandColorLight, setBrandColorLight] = useState("292929");
  const [brandColorDark, setBrandColorDark] = useState("fafafa");
  const [disableBranding, setDisableBranding] = useState(false);

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Appearance</h1>
        <p className="text-gray-400">Manage settings for your booking appearance</p>
      </div>

      <div className="space-y-8">
        {/* Dashboard Theme */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-1">Dashboard theme</h3>
          <p className="text-gray-400 text-sm mb-6">This only applies to your logged in dashboard</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setDashboardTheme("system")}
              className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                dashboardTheme === "system" ? "border-white" : "border-gray-800"
              }`}
            >
              <div className="aspect-video bg-gray-800 flex">
                <div className="w-1/2 bg-gray-200"></div>
                <div className="w-1/2 bg-gray-900"></div>
              </div>
              <p className="text-white text-sm py-2">System default</p>
            </button>
            
            <button
              onClick={() => setDashboardTheme("light")}
              className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                dashboardTheme === "light" ? "border-white" : "border-gray-800"
              }`}
            >
              <div className="aspect-video bg-gray-200"></div>
              <p className="text-white text-sm py-2">Light</p>
            </button>
            
            <button
              onClick={() => setDashboardTheme("dark")}
              className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                dashboardTheme === "dark" ? "border-white" : "border-gray-800"
              }`}
            >
              <div className="aspect-video bg-gray-900"></div>
              <p className="text-white text-sm py-2">Dark</p>
            </button>
          </div>
          
          <div className="flex justify-end">
            <Button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Update
            </Button>
          </div>
        </div>

        {/* Booking Page Theme */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-1">Booking page theme</h3>
          <p className="text-gray-400 text-sm mb-6">This only applies to your public booking pages</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setBookingTheme("system")}
              className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                bookingTheme === "system" ? "border-white" : "border-gray-800"
              }`}
            >
              <div className="aspect-video bg-gray-800 flex">
                <div className="w-1/2 bg-gray-200"></div>
                <div className="w-1/2 bg-gray-900"></div>
              </div>
              <p className="text-white text-sm py-2">System default</p>
            </button>
            
            <button
              onClick={() => setBookingTheme("light")}
              className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                bookingTheme === "light" ? "border-white" : "border-gray-800"
              }`}
            >
              <div className="aspect-video bg-gray-200"></div>
              <p className="text-white text-sm py-2">Light</p>
            </button>
            
            <button
              onClick={() => setBookingTheme("dark")}
              className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                bookingTheme === "dark" ? "border-white" : "border-gray-800"
              }`}
            >
              <div className="aspect-video bg-gray-900"></div>
              <p className="text-white text-sm py-2">Dark</p>
            </button>
          </div>
          
          <div className="flex justify-end">
            <Button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Update
            </Button>
          </div>
        </div>

        {/* Booking Layout */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-1">Booking layout</h3>
          <p className="text-gray-400 text-sm mb-6">
            You can select multiple and bookers can switch views. This can be overridden on a per event basis.
          </p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <div className="aspect-video bg-gray-800 rounded-lg mb-2"></div>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={bookingLayouts.month}
                  onCheckedChange={(checked) => setBookingLayouts({...bookingLayouts, month: checked as boolean})}
                  className="border-gray-600 data-[state=checked]:bg-purple-600"
                />
                <label className="text-white text-sm">Month</label>
              </div>
            </div>
            
            <div>
              <div className="aspect-video bg-gray-800 rounded-lg mb-2"></div>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={bookingLayouts.weekly}
                  onCheckedChange={(checked) => setBookingLayouts({...bookingLayouts, weekly: checked as boolean})}
                  className="border-gray-600 data-[state=checked]:bg-purple-600"
                />
                <label className="text-white text-sm">Weekly</label>
              </div>
            </div>
            
            <div>
              <div className="aspect-video bg-gray-800 rounded-lg mb-2"></div>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={bookingLayouts.column}
                  onCheckedChange={(checked) => setBookingLayouts({...bookingLayouts, column: checked as boolean})}
                  className="border-gray-600 data-[state=checked]:bg-purple-600"
                />
                <label className="text-white text-sm">Column</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-white mb-3">Default view</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setDefaultView("month")}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  defaultView === "month" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-400 hover:text-white"
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setDefaultView("weekly")}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  defaultView === "weekly" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-400 hover:text-white"
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setDefaultView("column")}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  defaultView === "column" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-400 hover:text-white"
                }`}
              >
                Column
              </button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Update
            </Button>
          </div>
        </div>

        {/* Custom Brand Colors */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white font-semibold mb-1">Custom brand colors</h3>
              <p className="text-gray-400 text-sm">Customize your own brand colour into your booking page.</p>
            </div>
            <Switch
              checked={customBrandColors}
              onCheckedChange={setCustomBrandColors}
            />
          </div>

          {customBrandColors && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-3">Brand color (light theme)</label>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-gray-900 border border-gray-700"></div>
                  <input
                    type="text"
                    value={brandColorLight}
                    onChange={(e) => setBrandColorLight(e.target.value)}
                    className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">Brand color (dark theme)</label>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-white border border-gray-700"></div>
                  <input
                    type="text"
                    value={brandColorDark}
                    onChange={(e) => setBrandColorDark(e.target.value)}
                    className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
                  />
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-end mt-6">
            <Button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Update
            </Button>
          </div>
        </div>

        {/* Disable Cal.com Branding */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-semibold">Disable Cal.com branding</h3>
                <span className="px-2 py-0.5 bg-yellow-600 text-white text-xs rounded font-medium">
                  Upgrade
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Removes any Cal.com related brandings, i.e. 'Powered by Cal.com.'
              </p>
            </div>
            <Switch
              checked={disableBranding}
              onCheckedChange={setDisableBranding}
              disabled
              className="opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
