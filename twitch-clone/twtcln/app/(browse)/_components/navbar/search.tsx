"use client";
import qs from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Search = () => {
  return (
    <form
      onSubmit={() => {}}
      className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input placeholder="search..." />
      <Button>
        <SearchIcon />
      </Button>
    </form>
  );
};
