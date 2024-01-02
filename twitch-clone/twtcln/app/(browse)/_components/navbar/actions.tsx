import { Button } from "@/components/ui/button";
import { SignInButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { Clapperboard } from "lucide-react";

export const Actions = async () => {
  const user = await currentUser();

  //
  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-2">
      {!user && (
        <SignInButton>
          <Button>Login</Button>
        </SignInButton>
      )}
      {/* user  */}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard />
              <span>DashBoard</span>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};
