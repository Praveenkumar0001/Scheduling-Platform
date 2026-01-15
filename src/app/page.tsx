import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Schedule Meetings
              <span className="block text-primary">Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The modern way to schedule meetings. Share your availability,
              let others book time with you effortlessly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Calendar className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Easy Scheduling</h3>
              <p className="text-muted-foreground">
                Set your availability and share your booking link
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Time Zone Support</h3>
              <p className="text-muted-foreground">
                Automatic time zone detection for seamless booking
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Manage Bookings</h3>
              <p className="text-muted-foreground">
                View and manage all your appointments in one place
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>&copy; 2026 Cal Clone. Built with Next.js and Prisma.</p>
      </footer>
    </div>
  );
}
