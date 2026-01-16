"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Clock, Users, Route, Zap, BarChart3, ExternalLink, Link2, Gift, Settings, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
  { name: "Event types", href: "/dashboard", icon: Calendar },
  { name: "Bookings", href: "/bookings", icon: Calendar },
  { name: "Availability", href: "/availability", icon: Clock },
  { name: "Teams", href: "/teams", icon: Users },
  { name: "Apps", href: "/apps", icon: null, hasDropdown: true },
  { name: "Routing", href: "/routing", icon: Route },
  { name: "Workflows", href: "/workflows", icon: Zap },
  { name: "Insights", href: "/insights", icon: BarChart3 },
];

const bottomNavigation = [
  { name: "View public page", href: "/public", icon: ExternalLink },
  { name: "Copy public page link", href: "#", icon: Link2 },
  { name: "Refer and earn", href: "/refer", icon: Gift },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [appsOpen, setAppsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#0a0a0a] border-r border-gray-800">
      <div className="flex-1 flex flex-col min-h-0">
        {/* Profile Section */}
        <div className="p-4 border-b border-gray-800 relative">
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex-shrink-0"></div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-white">Praveen Kumar</p>
            </div>
            <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform", profileOpen && "rotate-180")} />
          </button>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute top-full left-4 right-4 mt-2 bg-[#1a1a1a] border border-gray-800 rounded-lg shadow-xl z-50 overflow-hidden">
              <div className="py-2">
                <Link
                  href="/settings/profile"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My profile
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  My settings
                </Link>
                <Link
                  href="/out-of-office"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Out of office
                </Link>
              </div>
              
              <div className="border-t border-gray-800 py-2">
                <Link
                  href="/roadmap"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Roadmap
                </Link>
                <Link
                  href="/help"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Help
                </Link>
                <Link
                  href="/download"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download desktop app
                </Link>
              </div>

              <div className="border-t border-gray-800 py-2">
                <button
                  onClick={() => {/* handle sign out */}}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign out
                </button>
              </div>

              <div className="border-t border-gray-800 py-2">
                <Link
                  href="/insights"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  Insights
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href === "/dashboard" && pathname.startsWith("/dashboard"));
            
            if (item.hasDropdown) {
              return (
                <div key={item.name}>
                  <button
                    onClick={() => setAppsOpen(!appsOpen)}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="flex-1 text-left">{item.name}</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", appsOpen && "rotate-180")} />
                  </button>
                  
                  {/* Apps Dropdown */}
                  {appsOpen && (
                    <div className="mt-1 ml-8 space-y-1">
                      <Link
                        href="/apps"
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                          pathname === "/apps"
                            ? "bg-gray-900 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-900"
                        )}
                      >
                        App Store
                      </Link>
                      <Link
                        href="/apps/installed"
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                          pathname === "/apps/installed"
                            ? "bg-gray-900 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-900"
                        )}
                      >
                        Installed apps
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                )}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="px-3 py-4 space-y-1 border-t border-gray-800">
          {bottomNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <p className="text-xs text-gray-600">© 2025 Cal.com, Inc. v.4.6.0-bcaa7a</p>
        </div>
      </div>
    </div>
  );
}
