"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface EventTypeFormProps {
  eventTypeId?: string;
}

export default function EventTypeForm({ eventTypeId }: EventTypeFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    duration: "30",
    color: "#3b82f6",
    isActive: true,
    bufferTime: "0",
    customQuestions: [] as Array<{ question: string; required: boolean }>,
  });

  const addCustomQuestion = () => {
    setFormData({
      ...formData,
      customQuestions: [...formData.customQuestions, { question: "", required: false }],
    });
  };

  const updateCustomQuestion = (index: number, field: string, value: any) => {
    const updated = [...formData.customQuestions];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, customQuestions: updated });
  };

  const removeCustomQuestion = (index: number) => {
    setFormData({
      ...formData,
      customQuestions: formData.customQuestions.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = eventTypeId 
        ? `/api/event-types/${eventTypeId}` 
        : "/api/event-types";
      
      const method = eventTypeId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save event type");

      toast({
        title: "Success",
        description: `Event type ${eventTypeId ? "updated" : "created"} successfully`,
      });

      router.push("/event-types");
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save event type",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (value: string) => {
    setFormData({
      ...formData,
      title: value,
      slug: generateSlug(value),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Event Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="30 Minute Meeting"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">URL Slug</Label>
        <Input
          id="slug"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          placeholder="30-min-meeting"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="A quick 30-minute meeting to discuss..."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration">Duration (minutes)</Label>
        <Select
          value={formData.duration}
          onValueChange={(value) => setFormData({ ...formData, duration: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15">15 minutes</SelectItem>
            <SelectItem value="30">30 minutes</SelectItem>
            <SelectItem value="45">45 minutes</SelectItem>
            <SelectItem value="60">60 minutes</SelectItem>
            <SelectItem value="90">90 minutes</SelectItem>
            <SelectItem value="120">120 minutes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="color">Color</Label>
        <div className="flex gap-2">
          <Input
            id="color"
            type="color"
            value={formData.color}
            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
            className="w-20 h-10"
          />
          <Input
            value={formData.color}
            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
            placeholder="#3b82f6"
            className="flex-1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bufferTime">Buffer Time (minutes)</Label>
        <Select
          value={formData.bufferTime}
          onValueChange={(value) => setFormData({ ...formData, bufferTime: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">No buffer</SelectItem>
            <SelectItem value="5">5 minutes</SelectItem>
            <SelectItem value="10">10 minutes</SelectItem>
            <SelectItem value="15">15 minutes</SelectItem>
            <SelectItem value="30">30 minutes</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">
          Time to add before/after each booking
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label>Custom Booking Questions</Label>
            <p className="text-sm text-muted-foreground">
              Ask additional questions when booking
            </p>
          </div>
          <Button type="button" variant="outline" size="sm" onClick={addCustomQuestion}>
            Add Question
          </Button>
        </div>
        
        {formData.customQuestions.map((q, index) => (
          <div key={index} className="flex gap-2 items-start p-4 border rounded-lg">
            <div className="flex-1 space-y-2">
              <Input
                value={q.question}
                onChange={(e) => updateCustomQuestion(index, "question", e.target.value)}
                placeholder="What would you like to discuss?"
              />
              <div className="flex items-center gap-2">
                <Switch
                  checked={q.required}
                  onCheckedChange={(checked) => updateCustomQuestion(index, "required", checked)}
                />
                <Label className="text-sm">Required</Label>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeCustomQuestion(index)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Label htmlFor="isActive">Active</Label>
          <p className="text-sm text-muted-foreground">
            Allow bookings for this event type
          </p>
        </div>
        <Switch
          id="isActive"
          checked={formData.isActive}
          onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : eventTypeId ? "Update" : "Create"} Event Type
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/event-types")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
