"use client"

import { useState } from "react";
import { Bold, Italic, Link as LinkIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    username: "praveen-kumar-kp9ja6",
    fullName: "Praveen Kumar",
    email: "praveenkumar01.iitism@gmail.com",
    about: ""
  });

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400">Manage settings for your Cal.com profile</p>
      </div>

      <div className="space-y-8">
        {/* Profile Picture */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Profile picture
          </label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex-shrink-0"></div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors text-sm">
                Upload avatar
              </button>
              <button className="px-4 py-2 bg-transparent text-gray-400 hover:text-white transition-colors text-sm">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-white mb-3">
            Username
          </label>
          <div className="flex items-center bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-gray-700">
            <span className="px-4 py-3 text-gray-500 text-sm border-r border-gray-800 bg-[#0a0a0a]">
              cal.com/
            </span>
            <input
              id="username"
              type="text"
              value={profileData.username}
              onChange={(e) => setProfileData({...profileData, username: e.target.value})}
              className="flex-1 px-4 py-3 bg-transparent text-white text-sm focus:outline-none"
            />
          </div>
          <div className="flex items-start gap-2 mt-2">
            <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-gray-500">
              Tip: You can add a '+' between usernames (e.g. cal.com/anna+brian) to meet with multiple people
            </p>
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-white mb-3">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            value={profileData.fullName}
            onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Email
          </label>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg">
              <span className="text-white text-sm">{profileData.email}</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded font-medium">
                  Primary
                </span>
                <button className="p-1 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <button className="px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors text-sm whitespace-nowrap">
              + Add email
            </button>
          </div>
        </div>

        {/* About */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            About
          </label>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-gray-700">
            {/* Toolbar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800">
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded transition-colors">
                <Bold className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded transition-colors">
                <Italic className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded transition-colors">
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>
            {/* Text Area */}
            <textarea
              value={profileData.about}
              onChange={(e) => setProfileData({...profileData, about: e.target.value})}
              className="w-full px-4 py-3 bg-transparent text-white text-sm focus:outline-none resize-none"
              rows={6}
              placeholder="Write a little bit about yourself..."
            />
          </div>
        </div>

        {/* Connected Accounts */}
        <div>
          <h3 className="text-sm font-medium text-white mb-4">Connected accounts</h3>
          <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg">
            <span className="text-white text-sm">Google</span>
            <button className="px-4 py-2 bg-transparent border border-gray-700 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm">
              Disconnect
            </button>
          </div>
        </div>

        {/* Update Button */}
        <div className="flex justify-end pt-4 border-t border-gray-800">
          <Button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
            Update
          </Button>
        </div>

        {/* Danger Zone */}
        <div className="pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Danger zone</h3>
          <p className="text-gray-400 text-sm mb-4">Be careful. Account deletion cannot be undone.</p>
          <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
            <Trash2 className="w-4 h-4" />
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
