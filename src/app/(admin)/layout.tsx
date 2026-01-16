import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <div className="md:pl-64">
        <main className="p-8 bg-black min-h-screen">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
}
