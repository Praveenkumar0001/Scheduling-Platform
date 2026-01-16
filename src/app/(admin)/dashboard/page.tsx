"use client"

import { useState, useEffect } from "react";
import { Search, ExternalLink, Link2, MoreHorizontal, Trash2, Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface EventType {
  id: string;
  title: string;
  slug: string;
  duration: number;
  description?: string;
  isActive: boolean;
}

export default function DashboardPage() {
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewModal, setShowNewModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const fetchEventTypes = async () => {
    try {
      const response = await fetch("/api/event-types");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setEventTypes(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load event types",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventTypes();
  }, []);

  const toggleEventType = async (id: string, currentState: boolean) => {
    try {
      const response = await fetch(`/api/event-types/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !currentState }),
      });
      
      if (!response.ok) throw new Error("Failed to update");
      
      setEventTypes(eventTypes.map(et => 
        et.id === id ? { ...et, isActive: !currentState } : et
      ));
      
      toast({
        title: "Success",
        description: `Event type ${!currentState ? 'enabled' : 'disabled'}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update event type",
        variant: "destructive",
      });
    }
  };

  const deleteEventType = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event type?")) return;
    
    try {
      const response = await fetch(`/api/event-types/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) throw new Error("Failed to delete");
      
      setEventTypes(eventTypes.filter(et => et.id !== id));
      
      toast({
        title: "Success",
        description: "Event type deleted",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete event type",
        variant: "destructive",
      });
    }
  };

  const copyBookingLink = (slug: string) => {
    const link = `${window.location.origin}/praveen-kumar-kp9ja6/${slug}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Success",
      description: "Booking link copied to clipboard",
    });
  };

  const filteredEventTypes = eventTypes.filter(et =>
    et.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    et.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Event types</h1>
          <p className="text-gray-400 mt-2">Configure different events for people to book on your calendar.</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700 w-64"
            />
          </div>
          {/* New Button */}
          <button 
            onClick={() => router.push('/event-types/new')}
            className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            + New
          </button>
        </div>
      </div>

      {/* Event Type Cards */}
      <div className="space-y-4">
        {filteredEventTypes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No event types found</p>
            <button
              onClick={() => router.push('/event-types/new')}
              className="mt-4 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Create your first event type
            </button>
          </div>
        ) : (
          filteredEventTypes.map((eventType) => (
          <div
            key={eventType.id}
            className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">{eventType.title}</h3>
                  <span className="text-sm text-gray-500">/praveen-kumar-kp9ja6/{eventType.slug}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {eventType.duration}m
                  </div>
                  {eventType.description && (
                    <span className="text-xs text-gray-500">{eventType.description}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Hidden Badge */}
                {!eventType.isActive && (
                  <span className="text-sm text-gray-500">Hidden</span>
                )}
                
                {/* Toggle Switch */}
                <button 
                  onClick={() => toggleEventType(eventType.id, eventType.isActive)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] ${
                    eventType.isActive ? 'bg-green-600' : 'bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      eventType.isActive ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>

                {/* Preview Icon */}
                <button 
                  onClick={() => window.open(`/praveen-kumar-kp9ja6/${eventType.slug}`, '_blank')}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Preview booking page"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>

                {/* Copy Link Icon */}
                <button 
                  onClick={() => copyBookingLink(eventType.slug)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy booking link"
                >
                  <Link2 className="w-5 h-5" />
                </button>

                {/* Edit Icon */}
                <button 
                  onClick={() => router.push(`/event-types/${eventType.id}/edit`)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Edit event type"
                >
                  <Edit className="w-5 h-5" />
                </button>

                {/* Delete Icon */}
                <button 
                  onClick={() => deleteEventType(eventType.id)}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  title="Delete event type"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  );
}
