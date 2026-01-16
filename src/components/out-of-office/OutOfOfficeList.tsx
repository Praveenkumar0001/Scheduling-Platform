"use client"

import { OutOfOffice } from "@/types";
import OutOfOfficeCard from "./OutOfOfficeCard";
import EmptyState from "@/components/shared/EmptyState";

interface OutOfOfficeListProps {
  entries: OutOfOffice[];
  onEdit: (entry: OutOfOffice) => void;
  onDelete: (id: string) => void;
}

export default function OutOfOfficeList({ entries, onEdit, onDelete }: OutOfOfficeListProps) {
  if (entries.length === 0) {
    return (
      <EmptyState
        title="No out-of-office entries"
        description="You haven't created any out-of-office entries yet."
      />
    );
  }

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <OutOfOfficeCard
          key={entry.id}
          entry={entry}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
