import { Suspense } from "react";

import { Navbar } from "./_components/navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">{/*  */}</div>
    </>
  );
};

export default BrowseLayout;
