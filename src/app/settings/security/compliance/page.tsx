"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CompliancePage() {
  const handleDownload = (docType: string) => {
    // In a real app, this would trigger a PDF download
    console.log(`Downloading ${docType}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Compliance</h1>
        <p className="text-sm text-gray-500 mt-1">
          Access compliance documents, certifications, and data protection agreements
        </p>
      </div>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <CardTitle className="text-base font-semibold text-gray-900">Data privacy</CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-500 mt-1">
            Download and sign data protection agreements
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-gray-100 p-2.5">
                <FileText className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Data Protection Agreement (DPA)</div>
                <div className="text-sm text-gray-500">
                  Sign our Data Processing Agreement for GDPR compliance
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleDownload("DPA")}
              className="border-gray-300 hover:bg-gray-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-base font-semibold text-gray-900">Compliance reports</CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-500 mt-1">
            Access our security and compliance certifications
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-3">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
            <div className="flex items-center gap-3 flex-1">
              <div className="rounded-md bg-blue-50 p-2.5">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-900">SOC 2 Type II report</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                    Enterprise
                  </Badge>
                </div>
                <div className="text-sm text-gray-500">
                  System and Organization Controls report for security and availability
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              disabled
              className="border-gray-300 bg-gray-50 text-gray-500"
            >
              <Lock className="h-4 w-4 mr-2" />
              Upgrade
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
            <div className="flex items-center gap-3 flex-1">
              <div className="rounded-md bg-purple-50 p-2.5">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-900">ISO 27001 Certification</span>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                    Enterprise
                  </Badge>
                </div>
                <div className="text-sm text-gray-500">
                  Information security management system certification
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              disabled
              className="border-gray-300 bg-gray-50 text-gray-500"
            >
              <Lock className="h-4 w-4 mr-2" />
              Upgrade
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
            <div className="flex items-center gap-3 flex-1">
              <div className="rounded-md bg-green-50 p-2.5">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-900">HIPAA Compliance</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                    Enterprise
                  </Badge>
                </div>
                <div className="text-sm text-gray-500">
                  Health Insurance Portability and Accountability Act compliance
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              disabled
              className="border-gray-300 bg-gray-50 text-gray-500"
            >
              <Lock className="h-4 w-4 mr-2" />
              Upgrade
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 shadow-sm bg-white">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-base font-semibold text-gray-900">Other documents</CardTitle>
          <CardDescription className="text-sm text-gray-500 mt-1">
            Additional security and audit reports
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-gray-100 p-2.5">
                <FileText className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Penetration test report</div>
                <div className="text-sm text-gray-500">
                  Annual third-party security assessment
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleDownload("Pentest")}
              className="border-gray-300 hover:bg-gray-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
