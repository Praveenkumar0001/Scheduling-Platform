"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Edit, Trash2, Copy, ExternalLink } from "lucide-react";

interface EventTypeCardProps {
  id: string;
  title: string;
  slug: string;
  description?: string;
  duration: number;
  color: string;
  isActive: boolean;
}

export default function EventTypeCard({
  id,
  title,
  slug,
  description,
  duration,
  color,
  isActive,
}: EventTypeCardProps) {
  const bookingUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/demo/${slug}`;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{duration} minutes</CardDescription>
            </div>
          </div>
          <Badge variant={isActive ? "default" : "secondary"}>
            {isActive ? "Active" : "Inactive"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ExternalLink className="h-4 w-4" />
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">{bookingUrl}</code>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => navigator.clipboard.writeText(bookingUrl)}
          >
            <Copy className="h-3 w-3" />
          </Button>
        </div>

        <div className="flex gap-2">
          <Button asChild className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500" size="sm">
            <Link href={`/event-types/${id}/edit`}>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Link>
          </Button>
          <Button asChild className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500" size="sm">
            <Link href={`/event-types/${id}/delete`}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
