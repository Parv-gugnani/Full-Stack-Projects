"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/user-sidebar";
import { ArrowLeftFromLine } from "lucide-react";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full ">
          <p className="font-semibold text-primary">For your</p>
          <Button>
            <ArrowLeftFromLine />
          </Button>
        </div>
      )}
    </>
  );
};

export default Toggle;
