"use client"

import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const router = useRouter();
  const { toast } = useToast();

  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "No new notifications",
    });
  };

  const handleSettings = () => {
    router.push("/availability/edit");
  };

  const handleProfile = () => {
    toast({
      title: "Profile",
      description: "Profile settings coming soon",
    });
  };

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b md:ml-64">
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex items-center">
          <h2 className="text-xl font-semibold text-gray-900 md:hidden">Cal Clone</h2>
        </div>
        <div className="ml-4 flex items-center md:ml-6 gap-2">
          <Button variant="ghost" size="icon" onClick={handleNotifications}>
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleSettings}>
            <Settings className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Demo User</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfile}>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={handleSettings}>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/")}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
