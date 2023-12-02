"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { Popover, PopoverTrigger, pop } from "@radix-ui/react-popover";
interface PublishProps {
  initialData: Doc<"documents">;
}

export const Publish = ({ initialData }: PublishProps) => {
  return <div>Publish </div>;
};
