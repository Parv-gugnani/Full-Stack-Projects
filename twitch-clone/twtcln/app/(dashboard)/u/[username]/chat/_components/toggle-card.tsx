"use client";

import { Switch } from "@/components/ui/switch";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

export const ToggleCard = ({
  label,
  value = false,
  field,
}: ToggleCardProps) => {
  return (
    <div className="rounded-xl bg-muted pt-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch checked={value}>{value ? "On" : "Off"}</Switch>
        </div>
      </div>
    </div>
  );
};
