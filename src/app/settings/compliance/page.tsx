"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Lock } from "lucide-react";

export default function CompliancePage() {
  const handleDownload = (docType: string) => {
    // In a real app, this would trigger a PDF download
    console.log(`Downloading ${docType}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Compliance</h1>
        <p className="text-muted-foreground">
          Access compliance documents, certifications, and data protection agreements
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-muted p-2">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">Data Protection Agreement</div>
                <div className="text-sm text-muted-foreground">
                  Sign our Data Processing Agreement for GDPR compliance
                </div>
              </div>
            </div>
            <Button variant="outline" onClick={() => handleDownload("DPA")}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compliance reports</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-muted p-2">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">SOC 2 Type II report</div>
                <div className="text-sm text-muted-foreground">
                  System and Organization Controls report for security and availability
                </div>
              </div>
            </div>
            <Button variant="outline" disabled>
              <Lock className="h-4 w-4 mr-2" />
              Upgrade to access
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-muted p-2">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">ISO 27001 Certification</div>
                <div className="text-sm text-muted-foreground">
                  Information security management system certification
                </div>
              </div>
            </div>
            <Button variant="outline" disabled>
              <Lock className="h-4 w-4 mr-2" />
              Upgrade to access
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-muted p-2">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">Penetration test report</div>
                <div className="text-sm text-muted-foreground">
                  Latest security penetration test results and findings
                </div>
              </div>
            </div>
            <Button variant="outline" disabled>
              <Lock className="h-4 w-4 mr-2" />
              Upgrade to access
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
