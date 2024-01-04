"use server";
import { followUser } from "@/lib/follow-service";
// it ensure the secuerity so that it dont go in js bundles
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string) => {
  try {
    console.log("I am same as an Api call", id);
  } catch (error) {
    throw new Error("Interal Error");
  }
};
