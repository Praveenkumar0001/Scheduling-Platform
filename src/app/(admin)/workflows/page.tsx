"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Phone, Mail, List, Smartphone } from "lucide-react";

type WorkflowTemplate = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const calAiTemplates: WorkflowTemplate[] = [
  {
    title: "Call to confirm booking",
    description: "2 hrs before event starts",
    icon: Phone,
  },
  {
    title: "Follow up with no shows",
    description: "30m after event ends",
    icon: Phone,
  },
  {
    title: "Remind attendees to bring ID",
    description: "1 day before event starts",
    icon: Phone,
  },
];

const standardTemplates: WorkflowTemplate[] = [
  {
    title: "Send SMS reminder",
    description: "24 hours before event starts",
    icon: Smartphone,
  },
  {
    title: "Follow up with no shows",
    description: "30m after event ends",
    icon: List,
  },
  {
    title: "Remind attendees to bring ID",
    description: "1 day before event starts",
    icon: Mail,
  },
  {
    title: "Email reminder",
    description: "1 hour before event starts",
    icon: Mail,
  },
  {
    title: "Custom email reminder",
    description: "Event is rescheduled to host",
    icon: Mail,
  },
  {
    title: "Custom SMS reminder",
    description: "When event is scheduled",
    icon: Smartphone,
  },
];

export default function WorkflowsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Workflows</h1>
          <p className="text-sm text-gray-400 mt-1">
            Create workflows to automate notifications and reminders
          </p>
        </div>
        <Button className="bg-white text-black hover:bg-gray-100">
          + New
        </Button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-12">
        <div className="p-6 rounded-full bg-gray-800 mb-6">
          <Zap className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-3">Workflows</h2>
        <p className="text-sm text-gray-400 text-center max-w-2xl mb-6">
          Workflows enable simple automation to send notifications & reminders enabling you to build processes around your events.
        </p>
        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
          + Create a workflow
        </Button>
      </div>

      {/* Cal.ai Templates */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Cal.ai templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {calAiTemplates.map((template, index) => {
            const Icon = template.icon;
            return (
              <Card
                key={index}
                className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded bg-gray-800">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-1">
                        {template.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Standard Templates */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Standard templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {standardTemplates.map((template, index) => {
            const Icon = template.icon;
            return (
              <Card
                key={index}
                className="bg-[#0a0a0a] border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded bg-gray-800">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-1">
                        {template.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
