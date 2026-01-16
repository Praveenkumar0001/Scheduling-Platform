"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, HelpCircle, CreditCard, FileText, DollarSign } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function BillingPage() {
  const { toast } = useToast();
  const [credits, setCredits] = useState(50);
  const [selectedMonth, setSelectedMonth] = useState("January 2026");

  const handleBuyCredits = () => {
    toast({
      title: "Feature coming soon",
      description: "Credit purchase functionality will be available soon",
    });
  };

  const handleDownloadLog = () => {
    toast({
      title: "Downloading",
      description: `Expense log for ${selectedMonth}`,
    });
  };

  const handleContactSupport = () => {
    window.open("mailto:support@cal.com", "_blank");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Billing</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage all things billing
        </p>
      </div>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-gray-600" />
            <CardTitle className="text-base font-semibold text-gray-900">Manage billing</CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-500 mt-1">
            View and manage your billing details
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gradient-to-br from-gray-50 to-white">
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">Billing Portal</div>
                <div className="text-sm text-gray-500">
                  Manage subscriptions, payment methods, and invoices
                </div>
              </div>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open portal
              </Button>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-semibold text-gray-900">Need help?</span>
              </div>
              <Button 
                variant="outline" 
                onClick={handleContactSupport}
                className="border-gray-300 hover:bg-gray-50"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Contact support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            <CardTitle className="text-base font-semibold text-gray-900">Credits</CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-500 mt-1">
            Purchase and manage credits for sending SMS messages
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Current balance</span>
                <span className="text-2xl font-bold text-gray-900">0 ⭕</span>
              </div>
              <p className="text-xs text-gray-500">
                Credits are used for SMS notifications. Each SMS costs approximately 1 credit.
              </p>
            </div>
            
            <div>
              <Label htmlFor="credits" className="text-sm font-medium text-gray-900">
                Purchase additional credits
              </Label>
              <div className="flex items-center gap-4 mt-2">
                <Input
                  id="credits"
                  type="number"
                  value={credits}
                  onChange={(e) => setCredits(Number(e.target.value))}
                  className="max-w-[200px] border-gray-300"
                  min={1}
                />
                <span className="text-sm text-gray-500">Credits (~${(credits * 0.02).toFixed(2)})</span>
                <Button onClick={handleBuyCredits} className="bg-black hover:bg-gray-800">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Buy credits
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Credits never expire and can be used for all your scheduling needs
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-gray-600" />
              <Label htmlFor="expense-log" className="text-sm font-medium text-gray-900">
                Download Expense Log
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[200px] border-gray-300">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="January 2026">January 2026</SelectItem>
                  <SelectItem value="December 2025">December 2025</SelectItem>
                  <SelectItem value="November 2025">November 2025</SelectItem>
                  <SelectItem value="October 2025">October 2025</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                onClick={handleDownloadLog}
                className="border-gray-300 hover:bg-gray-50"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              View detailed breakdown of your monthly usage and charges
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
