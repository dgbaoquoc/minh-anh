"use server";

import { supabase } from "@/lib/supabase";
import {
  getUserKissesSchema,
  getUserMoodSchema,
  getUserPunchesSchema,
} from "@/lib/validations/user";
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";
import { z } from "zod";

export async function getUser(userId: string) {
  try {
    return await cache(
      async () => {
        return supabase.from("users").select("*").eq("id", userId).single();
      },
      [`${userId}`],
      {
        revalidate: 3600,
        tags: [`${userId}`],
      }
    )();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getUserMood(input: z.infer<typeof getUserMoodSchema>) {
  try {
    return await supabase
      .from("mood_tracking")
      .select("*")
      .eq("user_id", input.userId)
      .single();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export type UserMoodPromise = ReturnType<typeof getUserMood>;

export async function getPunchesCount(
  input: z.infer<typeof getUserPunchesSchema>
) {
  noStore();
  try {
    return (
      (await supabase
        .from("mood_tracking")
        .select("punches")
        .eq("user_id", input.userId)
        .single()) ?? 0
    );
  } catch (err) {
    console.error(err);
    return null;
  }
}

export type PunchCountPromise = ReturnType<typeof getPunchesCount>;

export async function getKissesCount(
  input: z.infer<typeof getUserKissesSchema>
) {
  noStore();
  try {
    return (
      (await supabase
        .from("mood_tracking")
        .select("kisses")
        .eq("user_id", input.userId)
        .single()) ?? 0
    );
  } catch (err) {
    console.error(err);
    return null;
  }
}

export type KissCountPromise = ReturnType<typeof getKissesCount>;
