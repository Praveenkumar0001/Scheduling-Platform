"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OutOfOffice } from "@/types";
import { format } from "date-fns";
import { Pencil, Trash2, Calendar } from "lucide-react";

interface OutOfOfficeCardProps {
  entry: OutOfOffice;
  onEdit: (entry: OutOfOffice) => void;
  onDelete: (id: string) => void;
}

export default function OutOfOfficeCard({ entry, onEdit, onDelete }: OutOfOfficeCardProps) {
  const isActive = () => {
    const now = new Date();
    return new Date(entry.startDate) <= now && new Date(entry.endDate) >= now;
  };

  const isUpcoming = () => {
    const now = new Date();
    return new Date(entry.startDate) > now;
  };

  const isPast = () => {
    const now = new Date();
    return new Date(entry.endDate) < now;
  };

  const getStatusBadge = () => {
    if (isActive()) {
      return <Badge variant="default" className="bg-green-500">Active</Badge>;
    } else if (isUpcoming()) {
      return <Badge variant="secondary">Upcoming</Badge>;
    } else {
      return <Badge variant="outline">Past</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {entry.title}
              {getStatusBadge()}
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {format(new Date(entry.startDate), "MMM d, yyyy")} -{" "}
              {format(new Date(entry.endDate), "MMM d, yyyy")}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit(entry)}
              disabled={isPast()}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(entry.id)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        </div>
      </CardHeader>
      {entry.notes && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{entry.notes}</p>
        </CardContent>
      )}
    </Card>
  );
}
