"use client";

import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

interface ActionsProps {
  isFollowing: boolean;
}

export const Actions = ({ isFollowing }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onFollow("123");
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
