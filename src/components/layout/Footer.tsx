import Link from "next/link";
import { Apple, Chrome, Github, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Section - Brand & Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Cal.com</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Cal.com® and Cal® are a registered trademark by Cal.com, Inc. All rights reserved.
              </p>
              
              {/* Certifications */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white shadow-sm">
                  <span className="text-[9px] font-bold text-gray-800 text-center leading-[10px]">ISO<br/>27001</span>
                </div>
                <div className="w-14 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white shadow-sm">
                  <span className="text-[8px] font-bold text-gray-800 text-center leading-[9px]">SOC 2<br/>TYPE II</span>
                </div>
                <div className="px-2">
                  <span className="text-[11px] font-extrabold text-gray-800">GDPR</span>
                </div>
                <div className="px-2">
                  <span className="text-[11px] font-extrabold text-gray-800">CCPA</span>
                </div>
                <div className="px-1">
                  <span className="text-[9px] font-extrabold text-gray-800 text-center leading-[11px]">HIPAA<br/>COMPLIANT</span>
                </div>
              </div>
              
              <p className="text-[15px] text-gray-700 mb-8 leading-relaxed font-medium">
                Our mission is to connect a billion people by 2031 through calendar scheduling.
              </p>
              
              {/* Language Selector & Status */}
              <div className="space-y-3 mb-8">
                <button className="w-full px-4 py-2.5 text-sm text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700 shadow-sm">
                  English
                </button>
                <button className="w-full px-4 py-2.5 text-sm text-left bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between font-medium text-gray-700 shadow-sm">
                  <span>All Systems Operational</span>
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-sm"></span>
                </button>
              </div>
            </div>
            
            {/* Downloads Section */}
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-4">Downloads</h4>
              <div className="grid grid-cols-3 gap-2 mb-6">
                <button className="px-2.5 py-2.5 text-[11px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium shadow-sm">
                  <Apple className="w-4 h-4" />
                  <span>iPhone</span>
                </button>
                <button className="px-2.5 py-2.5 text-[11px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium shadow-sm">
                  <Smartphone className="w-4 h-4" />
                  <span>Android</span>
                </button>
                <button className="px-2.5 py-2.5 text-[11px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium shadow-sm">
                  <Chrome className="w-4 h-4" />
                  <span>Chrome</span>
                </button>
                <button className="px-2.5 py-2.5 text-[11px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
                  </svg>
                  <span>Safari</span>
                </button>
                <button className="px-2.5 py-2.5 text-[11px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                  <span>Edge</span>
                </button>
                <button className="px-2.5 py-2.5 text-[11px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
                  </svg>
                  <span>Firefox</span>
                </button>
                <button className="px-2.5 py-2.5 text-[11px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium shadow-sm">
                  <Apple className="w-4 h-4" />
                  <span>MacOS</span>
                </button>
                <button className="px-2.5 py-2.5 text-[11px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                  <span>Windows</span>
                </button>
                <button className="px-2.5 py-2.5 text-[11px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.504 0c-.155 0-.315.008-.480.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.12 1.884.817 2.147 1.858.52 2.75-3.4 2.75-3.4.208-.61.394-1.086.69-1.675l.498-.997c.313-.627.616-1.232.918-1.837 1.558-3.117 2.62-6.026 2.62-6.026-.075-.12-.12-.21-.135-.24zM7.473 11.5c-.465.89-.977 1.875-1.638 2.833-1.063 1.54-2.365 2.833-4.835 2.833-1.275 0-2 1-2 2s.725 2 2 2c3.38 0 5.555-1.667 7.5-4.167.68-.873 1.215-1.873 1.755-2.873l-2.782-.626zm13.547-3.828c-.285-1.396-1.215-2.226-2.18-2.672-1.575-.728-3.705-.623-5.79.135l1.32 2.97c1.29-.48 2.49-.645 3.39-.36.675.216 1.065.645 1.155 1.29.12.885-.36 2.085-1.275 3.165-.36.42-.765.84-1.185 1.26l2.19 4.95c1.38-1.44 2.55-3 3.375-4.575.915-1.755 1.395-3.795 1.005-5.7z"/>
                  </svg>
                  <span>Linux</span>
                </button>
              </div>
              
              {/* Review Badges */}
              <div className="flex gap-3 mb-8">
                <div className="flex-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-4 text-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">⭐</span>
                    ))}
                  </div>
                  <p className="text-[11px] font-semibold leading-tight mb-1">Read our<br/>reviews on</p>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                    <p className="text-xl font-bold">G2</p>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl p-4 text-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">⭐</span>
                    ))}
                  </div>
                  <p className="text-[11px] font-semibold leading-tight mb-1">Read our<br/>reviews on</p>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <p className="text-lg font-bold">Trustpilot</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-gray-600 leading-relaxed">
              Need Help? <Link href="/support" className="text-blue-600 hover:text-blue-700 underline font-medium">support@cal.com</Link> or visit{" "}
              <Link href="/help" className="text-blue-600 hover:text-blue-700 underline font-medium">cal.com/help</Link>
            </p>
          </div>
          
          {/* Solutions Column */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">iOS/Android App</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Self-hosted</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Docs</Link></li>
              <li><Link href="/cal-ai" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Cal.ai - AI Phone Agent</Link></li>
              <li><Link href="/enterprise" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Enterprise</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Platform</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Routing</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Cal.com Atoms</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Desktop App</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Enterprise API</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                Github
              </Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Docker</Link></li>
            </ul>
          </div>
          
          {/* Use Cases Column */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Use Cases</h4>
            <ul className="space-y-2.5">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sales</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Marketing</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Talent Acquisition</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Customer Support</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Higher Education</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Telehealth</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Professional Services</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Hiring Marketplace</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Human Resources</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Tutoring</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">C-suite</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Law</Link></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Affiliate Program</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help Docs</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Teams</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Embed</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Recurring events</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Developers</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">OOO</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Workflows</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Instant Meetings</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">App Store</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Requires confirmation</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Payments</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Video Conferencing</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Cal.com vs Calendly</Link></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Jobs</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Open Startup</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Support</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">License</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Security</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Changelog</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Get a demo</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Talk to sales</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
