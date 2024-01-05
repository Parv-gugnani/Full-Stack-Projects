import { blockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";
import { unblockUser } from "@/lib/block-service";
import { getSelf } from "@/lib/auth-service";

export const onBlock = async (id: string) => {
  // adapt to disc from livestream
  // allow ability to kick the gues
  const blockedUser = await blockUser(id);

  if (blockedUser) {
    revalidatePath(`/${blockedUser.blocked.username}`);
  }

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  const self = await getSelf();
  const unblockedUser = await unblockUser(id);

  revalidatePath(`/u/${self.username}/community`);
  return unblockedUser;
};
