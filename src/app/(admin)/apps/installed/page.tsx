"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  GitBranch, 
  Calendar, 
  Video, 
  Contact, 
  MessageSquare, 
  CreditCard, 
  Grid3x3,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";

type Category = {
  id: string;
  name: string;
  icon: React.ElementType;
  description?: string;
  emptyMessage?: string;
  emptyDescription?: string;
  apps?: Array<{
    name: string;
    description: string;
    icon: React.ElementType;
    isDefault?: boolean;
  }>;
};

const categories: Category[] = [
  {
    id: "analytics",
    name: "Analytics",
    icon: BarChart3,
    emptyMessage: "No analytics apps",
    emptyDescription: "Add an analytics app for your booking pages",
  },
  {
    id: "automation",
    name: "Automation",
    icon: GitBranch,
    emptyMessage: "No automation apps",
    emptyDescription: "Add an automation app to use",
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: Calendar,
    description: "Configure how your event types interact with your calendars",
    emptyMessage: "No calendar apps",
    emptyDescription: "Add a calendar app to check for conflicts to prevent double bookings",
  },
  {
    id: "conferencing",
    name: "Conferencing",
    icon: Video,
    description: "Configure which conferencing apps to use",
    apps: [
      {
        name: "Cal Video",
        description: "Cal Video is the in-house web-based video conferencing platform powered by Daily.co, which is minimalistic and lightweight, but has most of the features you need.",
        icon: Video,
        isDefault: true,
      },
    ],
  },
  {
    id: "crm",
    name: "CRM",
    icon: Contact,
    emptyMessage: "No CRM apps",
    emptyDescription: "Add a CRM app to keep track of who you've met with",
  },
  {
    id: "messaging",
    name: "Messaging",
    icon: MessageSquare,
    emptyMessage: "No messaging apps",
    emptyDescription: "Add a messaging app to set up custom notifications & reminders",
  },
  {
    id: "payment",
    name: "Payment",
    icon: CreditCard,
    emptyMessage: "No payment apps",
    emptyDescription: "Add a payment app to ease transaction between you and your clients",
  },
  {
    id: "other",
    name: "Other",
    icon: Grid3x3,
    description: "All your installed apps from other categories.",
    apps: [
      {
        name: "Routing",
        description: "It would allow a booker to connect with the right person or choose the right event, faster. It would work by taking inputs from the booker and using that data to route to the correct booker/event as configured by Cal user",
        icon: Grid3x3,
      },
    ],
  },
];

export default function InstalledAppsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("calendar");

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Installed apps</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your installed apps or change settings
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {currentCategory && (
            <div className="space-y-6">
              {/* Category Header */}
              {currentCategory.description && (
                <Card className="bg-[#0a0a0a] border-gray-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white text-lg">
                          {currentCategory.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400 mt-1">
                          {currentCategory.description}
                        </CardDescription>
                      </div>
                      {currentCategory.id === "calendar" && (
                        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                          + Add calendar
                        </Button>
                      )}
                      {currentCategory.id === "conferencing" && (
                        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                          + Add
                        </Button>
                      )}
                      {currentCategory.id === "other" && (
                        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                          + Add
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                </Card>
              )}

              {/* Apps List or Empty State */}
              {currentCategory.apps && currentCategory.apps.length > 0 ? (
                <div className="space-y-4">
                  {currentCategory.apps.map((app, index) => {
                    const AppIcon = app.icon;
                    return (
                      <Card key={index} className="bg-[#0a0a0a] border-gray-800">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-gray-800">
                              <AppIcon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="text-white font-medium">{app.name}</h3>
                                {app.isDefault && (
                                  <span className="px-2 py-0.5 text-xs bg-green-600 text-white rounded">
                                    Default
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-400 mt-1">
                                {app.description}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-gray-400 hover:text-white hover:bg-gray-800"
                            >
                              <MoreHorizontal className="h-5 w-5" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="p-6 rounded-full bg-gray-800 mb-4">
                    {currentCategory.id === "analytics" && (
                      <BarChart3 className="h-8 w-8 text-gray-400" />
                    )}
                    {currentCategory.id === "automation" && (
                      <GitBranch className="h-8 w-8 text-gray-400" />
                    )}
                    {currentCategory.id === "calendar" && (
                      <Calendar className="h-8 w-8 text-gray-400" />
                    )}
                    {currentCategory.id === "crm" && (
                      <Contact className="h-8 w-8 text-gray-400" />
                    )}
                    {currentCategory.id === "messaging" && (
                      <MessageSquare className="h-8 w-8 text-gray-400" />
                    )}
                    {currentCategory.id === "payment" && (
                      <CreditCard className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {currentCategory.emptyMessage}
                  </h3>
                  <p className="text-sm text-gray-400 text-center mb-6 max-w-md">
                    {currentCategory.emptyDescription}
                  </p>
                  <Button
                    className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
                  >
                    {currentCategory.id === "calendar" && "Connect calendar apps"}
                    {currentCategory.id === "analytics" && "Connect analytics apps"}
                    {currentCategory.id === "automation" && "Connect automation apps"}
                    {currentCategory.id === "crm" && "Connect CRM apps"}
                    {currentCategory.id === "messaging" && "Connect messaging apps"}
                    {currentCategory.id === "payment" && "Connect payment apps"}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
