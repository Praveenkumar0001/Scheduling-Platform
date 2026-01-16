"use client"

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { OutOfOffice } from "@/types";
import OutOfOfficeDialog from "@/components/out-of-office/OutOfOfficeDialog";
import OutOfOfficeList from "@/components/out-of-office/OutOfOfficeList";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { Plus, Search, Filter, Calendar, Clock } from "lucide-react";

export default function OutOfOfficePage() {
  const { toast } = useToast();
  const [entries, setEntries] = useState<OutOfOffice[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<OutOfOffice | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("my-ooo");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/out-of-office");
      if (!response.ok) throw new Error("Failed to fetch entries");
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load out-of-office entries",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this out-of-office entry?")) {
      return;
    }

    try {
      const response = await fetch(`/api/out-of-office/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete entry");

      toast({
        title: "Success",
        description: "Out-of-office entry deleted successfully",
      });

      fetchEntries();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete out-of-office entry",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (entry: OutOfOffice) => {
    setSelectedEntry(entry);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedEntry(null);
  };

  const handleDialogSuccess = () => {
    fetchEntries();
  };

  const filterEntries = (entries: OutOfOffice[]) => {
    if (!searchQuery) return entries;
    return entries.filter((entry) =>
      entry.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const getMyOOOEntries = () => {
    const now = new Date();
    return filterEntries(
      entries.filter(
        (entry) =>
          new Date(entry.startDate) <= now && new Date(entry.endDate) >= now
      )
    );
  };

  const getUpcomingEntries = () => {
    const now = new Date();
    return filterEntries(
      entries.filter((entry) => new Date(entry.startDate) > now)
    );
  };

  const getPastEntries = () => {
    const now = new Date();
    return filterEntries(
      entries.filter((entry) => new Date(entry.endDate) < now)
    );
  };

  const getAllEntries = () => {
    return filterEntries(entries);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Out of office</h1>
          <p className="text-muted-foreground">
            Let your bookers know when you're OOO.
          </p>
        </div>
        {activeTab !== "holidays" && (
          <Button onClick={() => setDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add
          </Button>
        )}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="my-ooo">My OOO</TabsTrigger>
          <TabsTrigger value="team-ooo">Team OOO</TabsTrigger>
          <TabsTrigger value="holidays">Holidays</TabsTrigger>
        </TabsList>

        {activeTab !== "holidays" && (
          <div className="mt-4 flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500" size="sm">
              <span className="mr-2">🔖</span>
              Save
            </Button>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Saved filters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All entries</SelectItem>
                <SelectItem value="active">Active only</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <TabsContent value="my-ooo" className="mt-6">
          {getMyOOOEntries().length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="rounded-full bg-muted p-6 mb-6">
                    <Clock className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Create an OOO</h3>
                  <p className="text-muted-foreground text-center mb-6 max-w-md">
                    Communicate to your bookers when you're not available to take bookings. They can still book you upon your return or you can forward them to a team member.
                  </p>
                  <Button size="lg" onClick={() => setDialogOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>My Out-of-Office</CardTitle>
                <CardDescription>
                  Your personal out-of-office periods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <OutOfOfficeList
                  entries={getMyOOOEntries()}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="team-ooo" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12">
                <div className="rounded-full bg-muted p-6 mb-6">
                  <Clock className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create OOO for your team</h3>
                <p className="text-muted-foreground text-center mb-6 max-w-md">
                  Communicate to bookers when your team members are not available to take bookings. They can still be booked upon their return or you can forward them to another team member.
                </p>
                <Button size="lg" onClick={() => setDialogOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="holidays" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Holidays</CardTitle>
                  <CardDescription>
                    We will automatically mark you as unavailable for the selected holidays
                  </CardDescription>
                </div>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="es">Spain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed rounded-lg">
                <div className="rounded-full bg-muted p-6 mb-4">
                  <Calendar className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No holidays selected</h3>
                <p className="text-muted-foreground text-center">
                  Select a country to see available holidays
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <OutOfOfficeDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        onSuccess={handleDialogSuccess}
        entry={selectedEntry}
      />
    </div>
  );
}
