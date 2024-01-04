"use client";

import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`Your are now Following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  //
  //
  return (
    <Button
      disabled={isFollowing || isPending} //give it isfollwing or isPending
      onClick={onClick}
      variant="primary"
    >
      Follow
    </Button>
  );
};
/** 
 * 
 * 
 * 
// actions are build in rpc and they allow use to do api less mutattion
same way server components aloow use to do api

we dont need to create post route for this
*/
