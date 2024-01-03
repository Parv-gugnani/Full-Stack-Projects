"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/user-sidebar";
import { Skeleton } from "@/components/ui/skeleton";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

export const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  return <div>User Item</div>;
};
