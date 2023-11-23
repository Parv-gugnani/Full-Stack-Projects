"use client";
// This is the client component
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Insights, Notes & Strategies. Seamlessly Integrated. Surf into{" "}
        <span className="underline">NoteWave</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Dive into the creativity at NoteWave — where ideas collide and
        innovation takes flight, making work a breeze.
      </h3>
      <Button>
        Dive In
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
