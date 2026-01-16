"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Video, Zap, BarChart3, MoreHorizontal, Calendar, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";

const featuredCategories = [
  { name: "Conferencing", count: 26, icon: Video, color: "from-blue-500/10 to-blue-600/10", iconColor: "text-blue-500" },
  { name: "Automation", count: 19, icon: Zap, color: "from-purple-500/10 to-purple-600/10", iconColor: "text-purple-500" },
  { name: "Analytics", count: 11, icon: BarChart3, color: "from-green-500/10 to-green-600/10", iconColor: "text-green-500" },
  { name: "Other", count: 11, icon: MoreHorizontal, color: "from-gray-500/10 to-gray-600/10", iconColor: "text-gray-500" },
  { name: "Calendar", count: 10, icon: Calendar, color: "from-orange-500/10 to-orange-600/10", iconColor: "text-orange-500" },
];

const mostPopularApps = [
  {
    name: "Google Calendar",
    icon: "📅",
    description: "Google Calendar is a time management and scheduling service developed by Google. Allows users to create and edit events, with options available for type and...",
  },
  {
    name: "Google Meet",
    icon: "📹",
    description: "Google Meet is Google's web-based video conferencing platform, designed to compete with major conferencing platforms.",
  },
  {
    name: "Zoom Video",
    icon: "🎥",
    description: "Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings,...",
  },
];

const recentlyAddedApps = [
  {
    name: "BTCPayServer",
    icon: "₿",
    iconBg: "bg-yellow-500",
    description: "BTCPay Server is a self-hosted open source Bitcoin payment processor. Start receiving bitcoin payments for your events and bookings.",
  },
  {
    name: "Dub",
    icon: "🔗",
    iconBg: "bg-white",
    description: "Dub is the modern link attribution platform for you to create short links, track conversion analytics, and run affiliate programs.",
  },
  {
    name: "Lindy",
    icon: "🤖",
    iconBg: "bg-white",
    description: "Build AI agents in minutes to automate workflows, save time and grow your business",
  },
];

const allApps = [
  { name: "8×8", icon: "8×8", iconBg: "bg-red-600", description: "The best video conferencing solution for businesses of any size. Fully secure, reliable, packed with feature...", hasInstall: true },
  { name: "Alby", icon: "🐝", iconBg: "bg-white", description: "Your Bitcoin &amp; Nostr companion for the web. Use Alby to charge Satoshi for your Cal.com meetings.", hasInstall: true },
  { name: "Amie", icon: "📱", iconBg: "bg-pink-400", description: "The joyful productivity app", hasInstall: false, hasVisit: true },
  { name: "Apple Calendar", icon: "📆", iconBg: "bg-white", description: "Apple calendar runs both the macOS and iOS mobile operating systems. Offering online cloud backup of...", hasInstall: true },
  { name: "Autocheckin", icon: "A", iconBg: "bg-black", description: "You simply paste a Cal.com link of someone, select a frequency and we will take care of the scheduling for...", hasVisit: true },
  { name: "BAA for HIPAA", icon: "⚕️", iconBg: "bg-blue-600", description: "Request a signed Business Associate Agreement for your HIPAA compliance records", hasSubscribe: true },
  { name: "BTCPayServer", icon: "₿", iconBg: "bg-yellow-500", description: "BTCPay Server is a self-hosted open source Bitcoin payment processor. Start receiving bitcoin payments for for...", hasInstall: true },
  { name: "Basecamp3", icon: "⛺", iconBg: "bg-black", description: "Basecamp puts everything you need to get work done in one place. It's the calm, organized way to manage...", hasInstall: true },
  { name: "Bolna", icon: "🎵", iconBg: "bg-blue-500", description: "24×7 AI receptionists to answer all inbound calls", hasVisit: true },
  { name: "Cal Video", icon: "📹", iconBg: "bg-white", description: "Cal Video is the in-house web-based video conferencing platform powered by Daily.co, which is minimalistic and...", isDefault: true },
  { name: "CalDav (Beta)", icon: "📆", iconBg: "bg-red-600", description: "Caldav is a protocol that allows different clients/servers to access scheduling information on remote...", hasInstall: true },
  { name: "Campfire", icon: "🔥", iconBg: "bg-orange-500", description: "Feel connected with your remote team. Team events, new hire onboardings, coffee chats, all on Campfire. No mor...", hasInstall: true },
];

const categories = ["All", "Conferencing", "Automation", "Analytics", "Other", "Calendar", "Payment"];

export default function AppsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">App Store</h1>
          <p className="text-gray-400 mt-2">Connecting people, technology and the workplace.</p>
        </div>
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-[#1a1a1a] border-gray-800 text-white placeholder-gray-500 focus:ring-gray-700"
          />
        </div>
      </div>

      {/* Featured Categories */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Featured categories</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:bg-gray-900 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:bg-gray-900 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {featuredCategories.map((category) => (
            <Card key={category.name} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{category.name}</h3>
                <p className="text-sm text-gray-400">{category.count} apps →</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Most Popular */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Most popular</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:bg-gray-900 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:bg-gray-900 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mostPopularApps.map((app) => (
            <Card key={app.name} className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{app.name}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">{app.description}</p>
                <Button className="w-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                  Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recently Added */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Recently added</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:bg-gray-900 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:bg-gray-900 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentlyAddedApps.map((app) => (
            <Card key={app.name} className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-lg ${app.iconBg} flex items-center justify-center mb-4 text-3xl`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{app.name}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{app.description}</p>
                <Button className="w-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                  Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Apps */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">All apps</h2>
        
        {/* Category Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-gray-700 text-white"
                  : "bg-[#1a1a1a] text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allApps.map((app) => (
            <Card key={app.name} className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors relative">
              <CardContent className="p-5">
                {app.isDefault && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                    Default
                  </div>
                )}
                <div className={`w-12 h-12 rounded-lg ${app.iconBg} flex items-center justify-center mb-3 text-xl font-bold`}>
                  {app.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{app.name}</h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-3">{app.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 text-xs">
                    Details
                  </Button>
                  {app.hasInstall && (
                    <Button size="sm" className="bg-white text-black hover:bg-gray-100 text-xs">
                      + Install
                    </Button>
                  )}
                  {app.hasVisit && (
                    <Button size="sm" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 text-xs">
                      Visit
                    </Button>
                  )}
                  {app.hasSubscribe && (
                    <Button size="sm" className="bg-white text-black hover:bg-gray-100 text-xs">
                      + Subscribe
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
