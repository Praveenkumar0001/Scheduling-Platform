"use client"

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Key, CreditCard, Code, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { 
    section: "Praveen Kumar",
    items: [
      { name: "Profile", href: "/settings/profile" },
      { name: "General", href: "/settings/general" },
      { name: "Calendars", href: "/settings/calendars" },
      { name: "Conferencing", href: "/settings/conferencing" },
      { name: "Appearance", href: "/settings/appearance" },
      { name: "Out of office", href: "/settings/out-of-office" },
      { name: "Push notifications", href: "/settings/push-notifications" },
    ]
  },
  {
    section: "Security",
    icon: Key,
    items: [
      { name: "Password", href: "/settings/security/password" },
      { name: "Impersonation", href: "/settings/security/impersonation" },
      { name: "Compliance", href: "/settings/security/compliance" },
    ]
  },
  {
    section: "Billing",
    icon: CreditCard,
    items: [
      { name: "Manage billing", href: "/settings/billing" },
    ]
  },
  {
    section: "Developer",
    icon: Code,
    items: [
      { name: "Webhooks", href: "/settings/developer/webhooks" },
      { name: "API keys", href: "/settings/developer/api-keys" },
    ]
  },
  {
    section: "My teams",
    icon: Users,
    items: []
  }
];

export default function SettingsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        {/* Settings Sidebar */}
        <div className="w-64 fixed inset-y-0 bg-[#0a0a0a] border-r border-gray-800 overflow-y-auto">
          {/* Back Button */}
          <div className="p-4 border-b border-gray-800">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-6">
            {navigation.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 mb-2">
                  {section.icon && <section.icon className="w-4 h-4 text-gray-500" />}
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {section.section}
                  </h3>
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 text-sm rounded-lg transition-colors",
                        pathname === item.href
                          ? "bg-gray-900 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-900"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Add a team */}
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors w-full">
              <span className="text-lg">+</span>
              <span>Add a team</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1">
          <main className="p-8 bg-black min-h-screen">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
