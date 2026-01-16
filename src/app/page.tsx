"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Globe, Star, Shield, Users, Megaphone, Briefcase, Heart, GraduationCap, HeadphonesIcon, User, ChevronDown, Code, Smartphone, FileText, Code2, Moon, CreditCard, Link2, Newspaper, Zap, Webhook } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showTimezoneModal, setShowTimezoneModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'personal' | 'team'>('personal');
  const [profileData, setProfileData] = useState({
    name: '',
    username: '',
    bio: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
        <header className={`max-w-7xl mx-auto transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] rounded-2xl border border-gray-200/60' 
            : 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] rounded-2xl border border-gray-200/40'
        }`}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                Cal.com
              </Link>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100/80 transition-all duration-200 flex items-center gap-1 font-medium">
                  Solutions
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Solutions Mega Menu */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200 p-6 w-[980px]">
                    <div className="flex gap-6">
                      {/* First Column - By team size */}
                      <div className="w-[250px]">
                        <h3 className="text-[11px] font-medium text-gray-500 uppercase tracking-wide mb-3">By team size</h3>
                        <div className="space-y-1">
                          <Link href="#" className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <User className="w-[18px] h-[18px] text-gray-900" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-[14px] text-gray-900">For Individuals</div>
                              <div className="text-xs text-gray-500 leading-snug">Personal scheduling</div>
                            </div>
                          </Link>
                          <Link href="#" className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <Users className="w-[18px] h-[18px] text-gray-900" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-[14px] text-gray-900">For Teams</div>
                              <div className="text-xs text-gray-500 leading-snug">Collaborative scheduling</div>
                            </div>
                          </Link>
                          <Link href="/enterprise" className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <Briefcase className="w-[18px] h-[18px] text-gray-900" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-[14px] text-gray-900">For Enterprises</div>
                              <div className="text-xs text-gray-500 leading-snug">Enterprise solutions</div>
                            </div>
                          </Link>
                          <Link href="#" className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <span className="text-base">💻</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-[14px] text-gray-900">For Developers</div>
                              <div className="text-xs text-gray-500 leading-snug">Powerful integrations</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      
                      {/* Second Column - By use case */}
                      <div className="w-[280px]">
                        <h3 className="text-[11px] font-medium text-gray-500 uppercase tracking-wide mb-3">By use case</h3>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                          <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <span className="text-base text-gray-900">▶</span>
                            </div>
                            <span className="text-[13px] text-gray-900 font-medium">Recruiting</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <HeadphonesIcon className="w-[18px] h-[18px] text-gray-900" />
                            </div>
                            <span className="text-[13px] text-gray-900 font-medium">Support</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <span className="text-base">💰</span>
                            </div>
                            <span className="text-[13px] text-gray-900 font-medium">Sales</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <Heart className="w-[18px] h-[18px] text-gray-900" />
                            </div>
                            <span className="text-[13px] text-gray-900 font-medium">Healthcare</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <Users className="w-[18px] h-[18px] text-gray-900" />
                            </div>
                            <span className="text-[13px] text-gray-900 font-medium">HR</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <span className="text-base">💬</span>
                            </div>
                            <span className="text-[13px] text-gray-900 font-medium">Telehealth</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <GraduationCap className="w-[18px] h-[18px] text-gray-900" />
                            </div>
                            <span className="text-[13px] text-gray-900 font-medium">Education</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group/item">
                            <div className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                              <Megaphone className="w-[18px] h-[18px] text-gray-900" />
                            </div>
                            <span className="text-[13px] text-gray-900 font-medium">Marketing</span>
                          </Link>
                        </div>
                      </div>
                      
                      {/* Third Column - Cal.ai Promo */}
                      <div className="w-[340px] flex-shrink-0">
                        <Link href="/cal-ai" className="block relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#6B46C1] via-[#9333EA] to-[#D946EF] p-8 h-full group/promo shadow-lg">
                          <div className="relative z-10 flex flex-col h-full justify-between">
                            {/* Top right button */}
                            <div className="flex justify-end">
                              <button className="bg-gray-900/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full font-semibold flex items-center gap-1.5 hover:bg-gray-900 transition-colors">
                                <span>✨</span>
                                Try Cal.ai now!
                              </button>
                            </div>
                            
                            {/* Center content */}
                            <div className="flex-1 flex flex-col items-center justify-center text-center">
                              <div className="relative mb-6">
                                <h3 className="text-6xl font-bold text-white tracking-tight">Cal.ai</h3>
                                {/* Sparkles around text */}
                                <div className="absolute -top-2 -right-4">
                                  <svg className="w-6 h-6 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                                  </svg>
                                </div>
                                <div className="absolute top-8 -right-8">
                                  <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                                  </svg>
                                </div>
                                <div className="absolute -bottom-1 -left-6">
                                  <svg className="w-3 h-3 text-white/70" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            
                            {/* Bottom text */}
                            <div className="text-center">
                              <p className="text-white text-base font-semibold leading-relaxed">
                                Supercharged scheduling<br />
                                with AI-powered calls
                              </p>
                            </div>
                          </div>
                          
                          {/* Subtle gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/enterprise" className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors">
                Enterprise
              </Link>
              
              <Link href="/cal-ai" className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100/80 transition-all duration-200 font-medium">
                Cal.ai
              </Link>
              
              {/* Developer Dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100/80 transition-all duration-200 flex items-center gap-1 font-medium">
                  Developer
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Developer Dropdown Menu */}
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-200/60 p-4 w-96 backdrop-blur-sm">
                    <div className="space-y-1">
                      <Link href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 transition-all duration-200 group/item hover:shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center flex-shrink-0 group-hover/item:from-blue-50 group-hover/item:to-blue-100 group-hover/item:shadow-md transition-all duration-200">
                          <span className="text-base group-hover/item:scale-110 transition-transform duration-200">📄</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-900 group-hover/item:text-gray-950">Developer Documentation</div>
                          <div className="text-xs text-gray-600 leading-relaxed mt-0.5">Documentation for the Cal.com platform</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 transition-all duration-200 group/item hover:shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center flex-shrink-0 group-hover/item:from-yellow-50 group-hover/item:to-yellow-100 group-hover/item:shadow-md transition-all duration-200">
                          <span className="text-base group-hover/item:scale-110 transition-transform duration-200">⚡</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-900 group-hover/item:text-gray-950">API</div>
                          <div className="text-xs text-gray-600 leading-relaxed mt-0.5">Build your own integrations with our public API</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 transition-all duration-200 group/item hover:shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center flex-shrink-0 group-hover/item:from-purple-50 group-hover/item:to-purple-100 group-hover/item:shadow-md transition-all duration-200">
                          <span className="text-base group-hover/item:scale-110 transition-transform duration-200">📦</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-900 group-hover/item:text-gray-950">Scheduling Components</div>
                          <div className="text-xs text-gray-600 leading-relaxed mt-0.5">Use our react atoms to add scheduling to your app</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 transition-all duration-200 group/item hover:shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center flex-shrink-0 group-hover/item:from-green-50 group-hover/item:to-green-100 group-hover/item:shadow-md transition-all duration-200">
                          <span className="text-base group-hover/item:scale-110 transition-transform duration-200">🔐</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-900 group-hover/item:text-gray-950">Create OAuth Client</div>
                          <div className="text-xs text-gray-600 leading-relaxed mt-0.5">Integrate Cal.com using OAuth</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100/80 transition-all duration-200 flex items-center gap-1 font-medium">
                  Resources
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Resources Dropdown Menu */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200 p-6 w-[900px]">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                      {/* Column 1 */}
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Code className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">API</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Build your own integrations with our public API</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Code2 className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Embed</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Embed Cal.com into your website</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Newspaper className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Blog</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Stay up to date with the latest news and updates</div>
                        </div>
                      </Link>
                      
                      {/* Column 2 */}
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Smartphone className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">App Store</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Integrate with your favorite apps</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Moon className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Out Of Office</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Schedule time off with ease</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Instant Meetings</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Meet with clients in minutes</div>
                        </div>
                      </Link>
                      
                      {/* Column 3 */}
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Collective Events</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Schedule events with multiple participants</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <CreditCard className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Payments</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Accept payments for bookings</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Dynamic Group Links</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Seamlessly book meetings with multiple people</div>
                        </div>
                      </Link>
                      
                      {/* Column 4 */}
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Help Docs</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Need to learn more about our system? Check the help docs</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Link2 className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Workflows</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Automate scheduling and reminders</div>
                        </div>
                      </Link>
                      <Link href="#" className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <Webhook className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[15px] text-gray-900 mb-1">Webhooks</div>
                          <div className="text-[13px] text-gray-500 leading-snug">Get notified when something happens</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/pricing" className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors">
                Pricing
              </Link>
            </nav>
            
            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="hidden md:inline-flex px-3 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Sign in
              </Link>
              <Button onClick={() => setShowPlanModal(true)} className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 h-9 rounded-md transition-colors">
                <span className="flex items-center gap-1">
                  Get started
                  <span className="text-base">→</span>
                </span>
              </Button>
            </div>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600">Enterprise</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Secure scheduling infrastructure for enterprise teams
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Cal.com gives your organization modern scheduling with built-in SOC 2, HIPAA, and ISO 27001, no extra steps.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setShowPlanModal(true)} size="lg" className="bg-black hover:bg-gray-800 text-white">
                  Get started →
                </Button>
                <Button size="lg" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                  Talk to sales →
                </Button>
              </div>
            </div>

            {/* Right Column - Booking Card Preview */}
            <div className="relative">
              <Card className="max-w-md mx-auto shadow-2xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                      MO
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Michael Oliver</p>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Legal Consultation</CardTitle>
                  <CardDescription className="text-base">
                    Discuss your legal matters with our experienced attorneys in a private consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Duration Selector */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-500">⏱️</span>
                    <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500" size="sm">15m</Button>
                    <Button variant="default" size="sm" className="bg-black text-white">30m</Button>
                    <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500" size="sm">45m</Button>
                    <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500" size="sm">1h</Button>
                  </div>
                  
                  {/* Integration */}
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 font-medium">Zoom</span>
                  </div>
                  
                  {/* Timezone */}
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">Europe/London</span>
                  </div>
                  
                  {/* Calendar Preview */}
                  <div className="pt-2">
                    <div className="border rounded-lg p-3">
                      <div className="text-center mb-2 font-semibold">May 2025</div>
                      <div className="grid grid-cols-7 gap-1 text-center text-sm">
                        <div className="text-gray-500 text-xs py-1">SUN</div>
                        <div className="text-gray-500 text-xs py-1">MON</div>
                        <div className="text-gray-500 text-xs py-1">TUE</div>
                        <div className="text-gray-500 text-xs py-1">WED</div>
                        <div className="text-gray-500 text-xs py-1">THU</div>
                        <div className="text-gray-500 text-xs py-1">FRI</div>
                        <div className="text-gray-500 text-xs py-1">SAT</div>
                        {/* Calendar dates */}
                        <div></div><div></div><div></div><div></div>
                        <div className="py-2 rounded hover:bg-gray-100 cursor-pointer">1</div>
                        <div className="py-2 rounded hover:bg-gray-100 cursor-pointer">2</div>
                        <div className="py-2 rounded hover:bg-gray-100 cursor-pointer">3</div>
                        <div className="py-2 rounded hover:bg-gray-100 cursor-pointer">4</div>
                        <div className="py-2 rounded hover:bg-gray-100 cursor-pointer">5</div>
                        <div className="py-2 rounded bg-gray-200 font-semibold cursor-pointer">6</div>
                        <div className="py-2 rounded hover:bg-gray-100 cursor-pointer">7</div>
                        <div className="py-2 rounded hover:bg-gray-100 cursor-pointer">8</div>
                        <div className="py-2 rounded hover:bg-gray-100 cursor-pointer">9</div>
                        <div className="py-2 rounded hover:bg-gray-100 cursor-pointer">10</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-8 mt-8">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-green-500 text-green-500" />
                  <Star className="w-5 h-5 fill-green-500 text-green-500" />
                  <Star className="w-5 h-5 fill-green-500 text-green-500" />
                  <Star className="w-5 h-5 fill-green-500 text-green-500" />
                  <Star className="w-5 h-5 fill-green-500 text-green-500" />
                </div>
                <span className="text-sm text-gray-600">Trustpilot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className="bg-gray-50 py-12 border-t overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-20">
              {/* Left side text */}
              <div className="flex-shrink-0">
                <p className="text-gray-400 text-sm whitespace-nowrap">Trusted by fast-growing</p>
                <p className="text-gray-400 text-sm whitespace-nowrap">companies around the world</p>
              </div>
              
              {/* Scrolling logos container */}
              <div className="flex-1 relative overflow-hidden">
                <div className="flex animate-scroll">
                  {/* First set */}
                  <div className="flex items-center gap-12 px-6">
                    <span className="text-2xl font-bold text-gray-800">Vercel</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 22h20L12 2z"/>
                      </svg>
                      <span className="text-2xl font-semibold text-gray-800">supabase</span>
                    </div>
                    <span className="text-3xl font-bold text-gray-800">Rho</span>
                    <span className="text-2xl font-semibold text-gray-800">deel.</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="4" y="4" width="16" height="16"/>
                      </svg>
                      <span className="text-xl font-bold text-gray-800">Framer</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">ramp</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 rounded-full" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                      <span className="text-2xl font-bold text-gray-800">PlanetScale</span>
                    </div>
                  </div>
                  {/* Second set */}
                  <div className="flex items-center gap-12 px-6">
                    <span className="text-2xl font-bold text-gray-800">Vercel</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 22h20L12 2z"/>
                      </svg>
                      <span className="text-2xl font-semibold text-gray-800">supabase</span>
                    </div>
                    <span className="text-3xl font-bold text-gray-800">Rho</span>
                    <span className="text-2xl font-semibold text-gray-800">deel.</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="4" y="4" width="16" height="16"/>
                      </svg>
                      <span className="text-xl font-bold text-gray-800">Framer</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">ramp</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 rounded-full" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                      <span className="text-2xl font-bold text-gray-800">PlanetScale</span>
                    </div>
                  </div>
                  {/* Third set */}
                  <div className="flex items-center gap-12 px-6">
                    <span className="text-2xl font-bold text-gray-800">Vercel</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 22h20L12 2z"/>
                      </svg>
                      <span className="text-2xl font-semibold text-gray-800">supabase</span>
                    </div>
                    <span className="text-3xl font-bold text-gray-800">Rho</span>
                    <span className="text-2xl font-semibold text-gray-800">deel.</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="4" y="4" width="16" height="16"/>
                      </svg>
                      <span className="text-xl font-bold text-gray-800">Framer</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">ramp</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 rounded-full" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                      <span className="text-2xl font-bold text-gray-800">PlanetScale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-sm mb-6">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-gray-600">Security features</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Designed for smooth rollouts and scalable governance
              </h2>
              
              <p className="text-lg text-gray-600">
                Built for easy organization-wide deployment. Cal.com eliminates patchwork tools and scattered accounts with unified security, consistency, and control.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Get started →
                </Button>
                <Button size="lg" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                  Talk to sales →
                </Button>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    01
                  </div>
                  <CardTitle className="text-2xl mb-3">Domain-wide delegation</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Simplify setup and ensure compliance across your organization. Cal.com gives administrators centralized control over calendars, bookings, and access.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-lg aspect-[2/1]">
                      <img src="/images/google-cal-integration.png" alt="Google Calendar integration with Cal.com" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    02
                  </div>
                  <CardTitle className="text-2xl mb-3">SAML SSO, SCIM provisioning</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    SAML SSO, SCIM provisioning, and automated workflows give admins full visibility and control from one dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-lg aspect-[2/1]">
                      <img src="/images/saml-sso-integration.png" alt="SAML SSO integration with Cal.com" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    03
                  </div>
                  <CardTitle className="text-2xl mb-3">Privacy compliance tools</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Role-based access (RBAC), SAML SSO, and configurable data residency options simplify privacy management across multiple regulatory jurisdictions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <img src="/images/security-ripple.png" alt="Security and privacy protection" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    04
                  </div>
                  <CardTitle className="text-2xl mb-3">Encryption and security monitoring</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Cal.com encrypts data in transit and at rest, with continuous monitoring and vulnerability management for ongoing protection.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <img src="/images/security-shield.png" alt="Encryption and security monitoring" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Information Security Section */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-sm">
                  <Shield className="w-4 h-4" />
                  <span className="text-gray-600">Compliance</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Information security with every booking
                </h2>
                
                <p className="text-lg text-gray-600">
                  Your scheduling system shouldn't be the weakest link in your compliance stack. Cal.com's privacy-by-design architecture gives you the confidence of <strong>HIPAA, SOC 2 Type II, ISO 27001, CCPA</strong>, and <strong>GDPR</strong> compliance, without sacrificing usability.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-black hover:bg-gray-800">
                    Get started →
                  </Button>
                  <Button size="lg" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                    Talk to sales →
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-48 h-48 rounded-full relative">
                    <img src="/images/ccpa-badge.png" alt="CCPA California Consumer Privacy Act" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                    SOC 2
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                    HIPAA
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                    ISO 27001
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    GDPR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-sm mb-6">
                <Star className="w-4 h-4" />
                <span className="text-gray-600">Key benefits</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Achieve your company goals faster with better scheduling
              </h2>
              
              <p className="text-lg text-gray-600">
                Unlock enterprise success with streamlined booking process, actionable meeting insights, and effortless team coordination.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Get started →
                </Button>
                <Button size="lg" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                  Talk to sales →
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    01
                  </div>
                  <CardTitle className="text-2xl mb-3">Create unlimited sub-teams</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Easily organize your teams by creating a parent team and adding unlimited sub-teams, ensuring seamless management and collaboration across your organization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <img src="/images/team-cards.png" alt="Team organization showing Marketing, Sales, Engineering, and Product teams" className="w-full h-auto rounded-lg" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    02
                  </div>
                  <CardTitle className="text-2xl mb-3">Insights dashboard to analyze bookings</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    The Insights dashboard provides a clear overview of booking data, helping you spot opportunities and top performers with ease.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <img src="/images/insights-dashboard.png" alt="Insights dashboard showing booking analytics" className="w-full h-auto rounded-lg" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    03
                  </div>
                  <CardTitle className="text-2xl mb-3">99.9% SLA</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Enjoy guaranteed 99.9% uptime (with an option for 99.99%) with our Service Level Agreement, ensuring your scheduling remains uninterrupted and reliable.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <img src="/images/system-status.png" alt="System status showing 99.9% uptime" className="w-full h-auto rounded-lg" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    04
                  </div>
                  <CardTitle className="text-2xl mb-3">Slack Connect for even faster support</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    We offer Slack Connect support, allowing direct and rapid communication with our team for quicker resolutions and personalized assistance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-sm mb-6">
                <Users className="w-4 h-4" />
                <span className="text-gray-600">Testimonials</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Don't just take our word for it
              </h2>
              
              <p className="text-lg text-gray-600">
                Our users are our best ambassadors. Discover why we're the top choice for scheduling meetings.
              </p>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="flex animate-testimonial-scroll-smooth items-center" style={{ width: 'max-content' }}>
                {/* First set */}
                <div className="flex items-center gap-8">
                  {/* Card 1 */}
                  <div className="flex-shrink-0" style={{ width: '500px' }}>
                    <Card className="border border-gray-200 shadow-lg bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="p-8">
                        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
                          "I think Cal.com has a very good chance of creating a new category around being both great and well designed."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-base text-gray-900">Guillermo Rauch</p>
                            <p className="text-sm text-gray-500">CEO, Vercel</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="flex-shrink-0" style={{ width: '500px' }}>
                    <Card className="border border-gray-200 shadow-lg bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="p-8">
                        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
                          "I just migrated from Calendly to Cal.com."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-base text-gray-900">Kent C. Dodds</p>
                            <p className="text-sm text-gray-500">Founder of EpicWeb.dev</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="flex-shrink-0" style={{ width: '500px' }}>
                    <Card className="border border-gray-200 shadow-lg bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="p-8">
                        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
                          "Just gave it a go and it's definitely the easiest meeting I've ever setup."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-base text-gray-900">Aria Minaei</p>
                            <p className="text-sm text-gray-500">CEO, Theatre.JS</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  {/* Card 4 */}
                  <div className="flex-shrink-0" style={{ width: '500px' }}>
                    <Card className="border border-gray-200 shadow-lg bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="p-8">
                        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
                          "More elegant than Calendly, more open than SavvyCal, Cal.com works perfectly and it feels just right."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-base text-gray-900">Flo Merian</p>
                            <p className="text-sm text-gray-500">Product Marketing, Mintlify</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-8">
                  {/* Card 1 */}
                  <div className="flex-shrink-0" style={{ width: '500px' }}>
                    <Card className="border border-gray-200 shadow-lg bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="p-8">
                        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
                          "I think Cal.com has a very good chance of creating a new category around being both great and well designed."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-base text-gray-900">Guillermo Rauch</p>
                            <p className="text-sm text-gray-500">CEO, Vercel</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="flex-shrink-0" style={{ width: '500px' }}>
                    <Card className="border border-gray-200 shadow-lg bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="p-8">
                        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
                          "I just migrated from Calendly to Cal.com."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-base text-gray-900">Kent C. Dodds</p>
                            <p className="text-sm text-gray-500">Founder of EpicWeb.dev</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="flex-shrink-0" style={{ width: '500px' }}>
                    <Card className="border border-gray-200 shadow-lg bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="p-8">
                        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
                          "Just gave it a go and it's definitely the easiest meeting I've ever setup."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-base text-gray-900">Aria Minaei</p>
                            <p className="text-sm text-gray-500">CEO, Theatre.JS</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  {/* Card 4 */}
                  <div className="flex-shrink-0" style={{ width: '500px' }}>
                    <Card className="border border-gray-200 shadow-lg bg-white rounded-2xl transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="p-8">
                        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
                          "More elegant than Calendly, more open than SavvyCal, Cal.com works perfectly and it feels just right."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-base text-gray-900">Flo Merian</p>
                            <p className="text-sm text-gray-500">Product Marketing, Mintlify</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Gradient overlays for fade effect */}
              <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>

        {/* Team Coordination Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Simplify team coordination and reduce scheduling friction
              </h2>
              
              <p className="text-lg text-gray-600">
                Cal.com simplifies team coordination with automated workflows and secure access. Ensuring efficient scheduling and compliance for small teams and enterprises.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Get started →
                </Button>
                <Button size="lg" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                  Talk to sales →
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    01
                  </div>
                  <CardTitle className="text-xl mb-3">Round-robin and attribute-based routing</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Automatically match bookings to the right person or team by location, specialty, or availability.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    02
                  </div>
                  <CardTitle className="text-xl mb-3">Shared team pages and routing forms</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Manage bookings across distributed teams with centralized control and consistent branding.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    03
                  </div>
                  <CardTitle className="text-xl mb-3">Automated reminders</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Reduce no-shows and maintain HIPAA compliance with automated voice and SMS scheduling updates.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    04
                  </div>
                  <CardTitle className="text-xl mb-3">Centralized admin controls</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Role-based access and sub-teams bring consistency and compliance to every booking and meeting.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    05
                  </div>
                  <CardTitle className="text-xl mb-3">Company subdomain</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Your company.cal.com subdomain unifies branding, permissions, and data policies across every team.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 font-semibold mb-4">
                    06
                  </div>
                  <CardTitle className="text-xl mb-3">Centralized billing</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Streamline reviews, renewals, and access—domain enforcement keeps your workspace secure.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-sm mb-6">
                <Briefcase className="w-4 h-4" />
                <span className="text-gray-600">Use cases</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Proven across teams & industries who can't afford down time
              </h2>
              
              <p className="text-lg text-gray-600">
                Cal.com is compliant with a wide range of industries, including healthcare, sales, service, and SaaS, ensuring secure and compliant scheduling for diverse use cases.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Get started →
                </Button>
                <Button size="lg" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                  Talk to sales →
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Megaphone className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Sales & Marketing</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Healthcare & Wellness</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Users className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Recruiting & HR</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Professional Services</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Customer success</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Higher education</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">C-suite</CardTitle>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                      <HeadphonesIcon className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Support</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-sm mb-6">
                <span className="text-gray-600">FAQ</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                These are some of our most frequently asked questions.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Get started →
                </Button>
                <Button size="lg" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                  Talk to sales →
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold py-4">
                  Is Cal.com HIPAA compliant?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-2 pb-4">
                  Yes. Cal.com offers a HIPAA compliant Enterprise plan that includes a signed Business Associate Agreement (BAA) and features designed to protect PHI, such as encrypted data storage, access logging, and customizable intake workflows.
                </p>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold py-4">
                  Is Cal.com SOC 2 certified?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold py-4">
                  How does Cal.com differ from other scheduling tools?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold py-4">
                  Can I restrict data access by team or department?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold py-4">
                  Can I use my own branding and get a custom subdomain?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold py-4">
                  What support options are available for Enterprise customers?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
              </details>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Simplify scheduling.
            </h2>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Strengthen compliance.
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Cal.com brings modern scheduling to regulated teams with SOC 2, HIPAA, and total admin control, all in one place.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800">
                Get started →
              </Button>
              <Button size="lg" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                Talk to sales →
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Cal.com Column */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-bold">Cal.com</h3>
              <p className="text-xs text-gray-600">
                Cal.com® and Cal® are a registered trademark by Cal.com, Inc. All rights reserved.
              </p>
              
              {/* Certification Badges */}
              <div className="flex flex-wrap gap-2">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-center leading-tight">ISO<br/>27001</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-center leading-tight">AICPA<br/>SOC</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="text-[9px] font-bold">CCPA</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="text-[9px] font-bold">GDPR</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-center leading-tight">HIPAA<br/>COMPLIANT</span>
                </div>
              </div>

              <p className="text-xs text-gray-600">
                Our mission is to connect a billion people by 2031 through calendar scheduling.
              </p>

              {/* Language & Status */}
              <div className="space-y-2">
                <select className="w-full px-3 py-2 border rounded-md text-sm bg-white">
                  <option>English</option>
                </select>
                <div className="flex items-center gap-2 px-3 py-2 border rounded-md text-xs bg-white">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>All Systems Operational</span>
                </div>
              </div>

              {/* Downloads */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Downloads</h4>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <button className="px-2 py-1 border rounded text-[10px] bg-white">🍎 iPhone</button>
                    <button className="px-2 py-1 border rounded text-[10px] bg-white">🤖 Android</button>
                    <button className="px-2 py-1 border rounded text-[10px] bg-white">🌐 Chrome</button>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 border rounded text-[10px] bg-white">🧭 Safari</button>
                    <button className="px-2 py-1 border rounded text-[10px] bg-white">📘 Edge</button>
                    <button className="px-2 py-1 border rounded text-[10px] bg-white">🦊 Firefox</button>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 border rounded text-[10px] bg-white">🍎 MacOS</button>
                    <button className="px-2 py-1 border rounded text-[10px] bg-white">🪟 Windows</button>
                    <button className="px-2 py-1 border rounded text-[10px] bg-white">🐧 Linux</button>
                  </div>
                </div>
              </div>

              {/* Review Badges */}
              <div className="flex gap-2">
                <div className="px-3 py-2 bg-orange-500 text-white rounded text-[10px] font-bold text-center">
                  ★★★★★<br/>Read our<br/>reviews on<br/>G2
                </div>
                <div className="px-3 py-2 bg-teal-500 text-white rounded text-[10px] font-bold text-center">
                  ★★★★★<br/>Read our<br/>reviews on<br/>Trustpilot
                </div>
              </div>

              <p className="text-xs text-gray-600">
                Need Help? <a href="mailto:support@cal.com" className="text-blue-600 underline">support@cal.com</a> or visit{" "}
                <a href="/help" className="text-blue-600 underline">cal.com/help</a>
              </p>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Solutions</h4>
              <ul className="space-y-2.5 text-xs text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">iOS/Android App</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Self-hosted</Link></li>
                <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Docs</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Cal.ai - AI Phone Agent</Link></li>
                <li><Link href="/enterprise" className="hover:text-gray-900">Enterprise</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Platform</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Routing</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Cal.com Atoms</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Desktop App</Link></li>
                <li><Link href="#" className="hover:text-gray-900">FAQ</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Enterprise API</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Github</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Docker</Link></li>
              </ul>
            </div>

            {/* Use Cases Column */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Use Cases</h4>
              <ul className="space-y-2.5 text-xs text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">Sales</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Marketing</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Talent Acquisition</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Customer Support</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Higher Education</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Telehealth</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Professional Services</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Hiring Marketplace</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Human Resources</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Tutoring</Link></li>
                <li><Link href="#" className="hover:text-gray-900">C-suite</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Law</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Resources</h4>
              <ul className="space-y-2.5 text-xs text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">Affiliate Program</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Help Docs</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Blog</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Teams</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Embed</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Recurring events</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Developers</Link></li>
                <li><Link href="#" className="hover:text-gray-900">OOO</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Workflows</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Instant Meetings</Link></li>
                <li><Link href="#" className="hover:text-gray-900">App Store</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Requires confirmation</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Payments</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Video Conferencing</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Cal.com vs Calendly</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2.5 text-xs text-gray-600">
                <li><Link href="#" className="hover:text-gray-900">Jobs</Link></li>
                <li><Link href="#" className="hover:text-gray-900">About</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Open Startup</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Support</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Privacy</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Terms</Link></li>
                <li><Link href="#" className="hover:text-gray-900">License</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Security</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Changelog</Link></li>
                <li><Link href="#" className="hover:text-gray-900">Get a demo</Link></li>
                <li><Link href="/dashboard" className="hover:text-gray-900">Talk to sales</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Plan Selection Modal */}
      {showPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl mx-4 bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Form */}
              <div className="p-12 space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-white text-2xl font-bold mb-2">Cal.com</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">Select plan</h3>
                    <p className="text-gray-400 text-sm">
                      To personalize your experience, what do you plan to use Cal.com for?
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Personal Use Option */}
                    <button
                      onClick={() => setSelectedPlan('personal')}
                      className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                        selectedPlan === 'personal'
                          ? 'border-white bg-white/5'
                          : 'border-gray-700 hover:border-gray-600 bg-transparent'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h4 className="text-white font-semibold text-lg">For personal use</h4>
                          <span className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-md">
                            Free
                          </span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === 'personal' ? 'border-white' : 'border-gray-600'
                        }`}>
                          {selectedPlan === 'personal' && (
                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Good for individuals who are just starting out and simply want the essentials.
                      </p>
                    </button>

                    {/* Team Option */}
                    <button
                      onClick={() => setSelectedPlan('team')}
                      className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                        selectedPlan === 'team'
                          ? 'border-white bg-white/5'
                          : 'border-gray-700 hover:border-gray-600 bg-transparent'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h4 className="text-white font-semibold text-lg">With my team</h4>
                          <span className="text-gray-400 text-sm">$15/user/mo</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === 'team' ? 'border-white' : 'border-gray-600'
                        }`}>
                          {selectedPlan === 'team' && (
                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Highly recommended for small teams who seek to upgrade their time and perform better as a unit.
                      </p>
                    </button>
                  </div>

                  <Button 
                    onClick={() => {
                      setShowPlanModal(false);
                      setShowProfileModal(true);
                    }}
                    className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 rounded-lg"
                  >
                    Continue
                  </Button>
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => setShowPlanModal(false)}
                    className="text-gray-400 hover:text-gray-300 text-sm"
                  >
                    Sign out
                  </button>
                </div>
              </div>

              {/* Right Side - Animated Circles */}
              <div className="hidden md:flex items-center justify-center bg-[#1a1a1a] p-12">
                <div className="relative w-full max-w-md aspect-square">
                  {/* Concentric circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-full h-full border border-gray-700/40 rounded-full animate-ping-slow"></div>
                    <div className="absolute w-[85%] h-[85%] border border-gray-700/40 rounded-full animate-ping-slower"></div>
                    <div className="absolute w-[70%] h-[70%] border border-gray-700/40 rounded-full animate-ping-slowest"></div>
                    <div className="absolute w-[55%] h-[55%] border border-gray-700/40 rounded-full"></div>
                    <div className="absolute w-[40%] h-[40%] border border-gray-700/40 rounded-full"></div>
                    
                    {/* Center icon */}
                    <div className="relative z-10 w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                      <User className="w-10 h-10 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowPlanModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Profile Completion Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl mx-4 bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Form */}
              <div className="p-12 space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-white text-2xl font-bold mb-2">Cal.com</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">Add your details</h3>
                    <p className="text-gray-400 text-sm">
                      Let's set up your personal account
                    </p>
                  </div>

                  {/* Profile Picture */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Profile picture</label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
                        {profileData.name && (
                          <div className="w-full h-full flex items-center justify-center text-white text-2xl font-semibold bg-gradient-to-br from-blue-500 to-purple-600">
                            {profileData.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500">
                        Upload
                      </Button>
                    </div>
                    <p className="text-gray-500 text-xs">Recommended size 64×64px (max 10mb)</p>
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Your name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      placeholder="Praveen Kumar"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400"
                    />
                  </div>

                  {/* Username */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Username</label>
                    <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden focus-within:border-gray-400">
                      <span className="px-4 py-3 bg-transparent text-gray-500 text-sm">cal.com/</span>
                      <input
                        type="text"
                        value={profileData.username}
                        onChange={(e) => setProfileData({ ...profileData, username: e.target.value.toLowerCase().replace(/\s/g, '-') })}
                        placeholder="praveen-kumar-kp9ja6"
                        className="flex-1 px-2 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none border-0"
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Bio</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      placeholder="Add your bio here"
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      onClick={() => {
                        setShowProfileModal(false);
                        setShowPlanModal(true);
                      }}
                      variant="outline"
                      className="flex-1 bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={() => {
                        setShowProfileModal(false);
                        setShowCalendarModal(true);
                      }}
                      className="flex-1 bg-white hover:bg-gray-100 text-black font-semibold"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Side - Preview */}
              <div className="hidden md:block bg-[#0a0a0a] p-12">
                <div className="bg-[#1a1a1a] rounded-xl p-8 h-full">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                    </div>
                    <div className="flex-1 flex items-center gap-2 px-4 py-1.5 bg-[#0a0a0a] rounded-lg ml-4">
                      <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-gray-500 text-xs">
                        app.cal.com/{profileData.username || 'praveen-kumar-kp9ja6'}
                      </span>
                    </div>
                  </div>

                  {/* Profile Preview */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden border-2 border-white">
                        {profileData.name ? (
                          <div className="w-full h-full flex items-center justify-center text-white text-2xl font-semibold bg-gradient-to-br from-blue-500 to-purple-600">
                            {profileData.name.charAt(0).toUpperCase()}
                          </div>
                        ) : (
                          <div className="w-full h-full bg-gray-700"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-semibold">
                          {profileData.name || 'Praveen Kumar'}
                        </h3>
                        <p className="text-gray-500 text-sm italic">
                          {profileData.bio || 'Add your bio here'}
                        </p>
                      </div>
                    </div>

                    {/* Event Types Preview */}
                    <div className="space-y-3">
                      {[
                        { title: 'Demo', duration: '15 mins', description: 'Schedule a demo call with us' },
                        { title: 'Quick meeting', duration: '15 mins', description: 'A quick chat' },
                        { title: 'Longer meeting', duration: '30 mins', description: 'A longer chat' },
                        { title: 'In-person meeting', duration: '120 mins', description: 'Meet in person' },
                        { title: 'Ask a question', duration: '15 mins', description: 'Ask a question' }
                      ].map((event, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg hover:bg-gray-900/50 transition-colors">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-gray-400 text-sm font-medium">{event.title}</h4>
                              <span className="text-gray-600 text-xs">⏱ {event.duration}</span>
                            </div>
                            <p className="text-gray-600 text-xs">{event.description}</p>
                          </div>
                          <Button 
                            size="sm"
                            variant="ghost"
                            className="text-gray-500 hover:text-gray-400 text-xs"
                          >
                            Book now →
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowProfileModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Calendar Connection Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-7xl mx-4 bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-[500px,1fr] gap-0">
              {/* Left Side - Calendar Options */}
              <div className="p-12 space-y-8 border-r border-gray-800">
                <div className="text-center mb-8">
                  <h2 className="text-white text-2xl font-bold mb-2">Cal.com</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">Connect your calendar</h3>
                    <p className="text-gray-400 text-sm">
                      Connect your calendar to prevent double bookings and conflicts
                    </p>
                  </div>

                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {/* Google Calendar */}
                    <div className="p-4 bg-[#0a0a0a] rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <svg className="w-7 h-7" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                          </div>
                          <h4 className="text-white font-semibold">Google Calendar</h4>
                        </div>
                        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 text-sm">
                          Connect
                        </Button>
                      </div>
                    </div>

                    {/* Outlook Calendar */}
                    <div className="p-4 bg-[#0a0a0a] rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#0078D4] rounded-lg flex items-center justify-center">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                              <path d="M7 14h3v3H7v-3zm0-4h3v3H7v-3zm0-4h3v3H7V6zm4 4h3v3h-3v-3zm0 4h3v3h-3v-3zm0-8h3v3h-3V6zm4 4h3v3h-3v-3zm0 4h3v3h-3v-3zm0-8h3v3h-3V6z"/>
                            </svg>
                          </div>
                          <h4 className="text-white font-semibold">Outlook Calendar</h4>
                        </div>
                        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 text-sm">
                          Connect
                        </Button>
                      </div>
                    </div>

                    {/* Apple Calendar */}
                    <div className="p-4 bg-[#0a0a0a] rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <div className="text-3xl">📅</div>
                          </div>
                          <h4 className="text-white font-semibold">Apple Calendar</h4>
                        </div>
                        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 text-sm">
                          Connect
                        </Button>
                      </div>
                    </div>

                    {/* CalDav (Beta) */}
                    <div className="p-4 bg-[#0a0a0a] rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                            <div className="text-2xl">📅</div>
                          </div>
                          <h4 className="text-white font-semibold">CalDav (Beta)</h4>
                        </div>
                        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 text-sm">
                          Connect
                        </Button>
                      </div>
                    </div>

                    {/* Zoho Calendar */}
                    <div className="p-4 bg-[#0a0a0a] rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                              <circle cx="12" cy="12" r="10"/>
                            </svg>
                          </div>
                          <h4 className="text-white font-semibold">Zoho Calendar</h4>
                        </div>
                        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 text-sm">
                          Connect
                        </Button>
                      </div>
                    </div>

                    {/* ICS Feed */}
                    <div className="p-4 bg-[#0a0a0a] rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold">ICS</span>
                          </div>
                          <h4 className="text-white font-semibold">ICS Feed</h4>
                        </div>
                        <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 text-sm">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      onClick={() => {
                        setShowCalendarModal(false);
                        setShowProfileModal(true);
                      }}
                      className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={() => {
                        setShowCalendarModal(false);
                        window.location.href = '/dashboard';
                      }}
                      className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
                    >
                      Skip for now
                    </Button>
                    <Button 
                      onClick={() => {
                        setShowCalendarModal(false);
                        setShowTimezoneModal(true);
                      }}
                      className="flex-1 bg-white hover:bg-gray-100 text-black font-semibold"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Side - Calendar View */}
              <div className="hidden md:block bg-[#0a0a0a] p-8">
                <div className="bg-[#1a1a1a] rounded-xl h-full overflow-hidden">
                  {/* Calendar Header */}
                  <div className="border-b border-gray-800 p-4">
                    <h4 className="text-white text-center font-medium">Jan 11 – Jan 17, 2026</h4>
                  </div>

                  {/* Week Days Header */}
                  <div className="grid grid-cols-7 border-b border-gray-800 bg-[#0a0a0a]">
                    {[
                      { day: 'SUN', date: '11' },
                      { day: 'MON', date: '12' },
                      { day: 'TUE', date: '13' },
                      { day: 'WED', date: '14' },
                      { day: 'THU', date: '15' },
                      { day: 'FRI', date: '16' },
                      { day: 'SAT', date: '17' }
                    ].map((item, index) => (
                      <div key={index} className={`text-center py-3 border-r border-gray-800 ${index === 5 ? 'bg-white/10' : ''}`}>
                        <div className={`text-xs ${index === 5 ? 'text-white' : 'text-gray-500'}`}>{item.day}</div>
                        <div className={`text-sm font-semibold mt-1 ${index === 5 ? 'text-white' : 'text-gray-400'}`}>
                          {index === 5 ? <span className="inline-block bg-white text-black rounded-full w-6 h-6 leading-6">{item.date}</span> : item.date}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Time Slots */}
                  <div className="relative h-[500px] overflow-y-auto">
                    <div className="grid grid-cols-[80px,1fr]">
                      {/* Time Labels */}
                      <div className="border-r border-gray-800">
                        {['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'].map((time, index) => (
                          <div key={index} className="h-16 px-2 py-1 text-xs text-gray-500 text-right border-b border-gray-800">
                            {time}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Grid */}
                      <div className="relative">
                        <div className="grid grid-cols-7 h-full">
                          {Array.from({ length: 7 }).map((_, colIndex) => (
                            <div key={colIndex} className="border-r border-gray-800">
                              {Array.from({ length: 9 }).map((_, rowIndex) => (
                                <div key={rowIndex} className="h-16 border-b border-gray-800"></div>
                              ))}
                            </div>
                          ))}
                        </div>

                        {/* Current Time Indicator (Friday at ~11:53am) */}
                        <div className="absolute left-[71.4%] top-[190px] w-[14.2%] h-0.5 bg-red-500">
                          <div className="absolute -left-2 -top-1.5 w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="absolute -left-16 -top-2 text-xs text-red-500 font-medium whitespace-nowrap">
                            11:53am
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timezone */}
                  <div className="border-t border-gray-800 p-3 text-center">
                    <span className="text-xs text-gray-500">GMT +5.5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowCalendarModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Timezone Update Modal */}
      {showTimezoneModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg mx-4 bg-[#1a1a1a] rounded-2xl shadow-2xl p-8">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-2xl font-bold mb-3">Want to update your timezone?</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    It seems that your computer's timezone has changed to Asia/Calcutta. It's very important to have the correct timezone to prevent bookings at the wrong time. Do you want us to update it?
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={() => {
                    setShowTimezoneModal(false);
                    setShowWelcomeModal(true);
                  }}
                  className="flex-1 bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500"
                >
                  Don't update
                </Button>
                <Button 
                  onClick={() => {
                    setShowTimezoneModal(false);
                    setShowWelcomeModal(true);
                  }}
                  className="flex-1 bg-white hover:bg-gray-100 text-black font-semibold"
                >
                  Update timezone
                </Button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowTimezoneModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Welcome Modal */}
      {showWelcomeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-4 bg-[#1a1a1a] rounded-2xl shadow-2xl p-12">
            <div className="space-y-8">
              {/* Cal.com Logo */}
              <div className="text-center">
                <h1 className="text-white text-3xl font-bold">Cal.com</h1>
              </div>

              {/* User Icon with Circles */}
              <div className="flex justify-center py-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                  {/* Animated circles */}
                  <div className="absolute inset-0 rounded-full border-2 border-gray-700 animate-ping-slow"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-gray-700 animate-ping-slower"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-gray-700 animate-ping-slowest"></div>
                </div>
              </div>

              {/* Welcome Text */}
              <div className="text-center space-y-3">
                <h2 className="text-white text-3xl font-bold">Welcome to Cal.com</h2>
                <p className="text-gray-400 text-base">
                  You&apos;re all set! Start scheduling meetings and managing your calendar.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-3 max-w-md mx-auto">
                <div className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited calendars</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited event types</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Workflows</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integrate with your favorite apps</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accept payments via Stripe</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>HTML & React Embed</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cal.ai phone agent</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cal Video</span>
                </div>
              </div>

              {/* Continue Button */}
              <div className="pt-4">
                <Button
                  onClick={() => window.location.href = '/dashboard'}
                  className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
