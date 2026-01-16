"use client"

import { Video, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConferencingPage() {
  return (
    <div className="max-w-4xl">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Conferencing</h1>
          <p className="text-gray-400">Add your favourite video conferencing apps for your meetings</p>
        </div>
        <button className="px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors text-sm">
          + Add
        </button>
      </div>

      {/* Cal Video Card */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
            <Video className="w-6 h-6 text-gray-400" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-white font-semibold">Cal Video</h3>
              <span className="px-2 py-0.5 bg-green-600 text-white text-xs rounded font-medium">
                Default
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cal Video is the in-house web-based video conferencing platform powered by Daily.co, which is minimalistic and lightweight, but has most of the features you need.
            </p>
          </div>

          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
