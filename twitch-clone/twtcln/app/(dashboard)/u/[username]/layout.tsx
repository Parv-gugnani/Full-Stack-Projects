import { getSelfByUsername } from "@/lib/auth-service";
import { Divide } from "lucide-react";
import { redirect } from "next/navigation";
import { Navbar } from "./_components/navbar";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }

  //
  //
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
};

export default CreatorLayout;
