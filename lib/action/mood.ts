"use server";

import { supabase } from "@/lib/supabase";
import {
  increaseKissCountSchema,
  increasePunchCountSchema,
  resetPunchCountSchema,
} from "@/lib/validations/user";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function increaseKissCount(
  input: z.infer<typeof increaseKissCountSchema>
) {
  const mood = await supabase
    .from("mood_tracking")
    .select("*")
    .eq("user_id", input.userId)
    .single();

  if (!mood) {
    throw new Error("Mood not found.");
  }

  await supabase
    .from("mood_tracking")
    .update({ kisses: input.count })
    .eq("user_id", input.userId);

  revalidatePath(`/hon-anh`);
}

export async function increasePunchCount(
  input: z.infer<typeof increasePunchCountSchema>
) {
  const mood = await supabase
    .from("mood_tracking")
    .select("*")
    .eq("user_id", input.userId)
    .single();

  if (!mood) {
    throw new Error("Mood not found.");
  }

  await supabase
    .from("mood_tracking")
    .update({ punches: input.count })
    .eq("user_id", input.userId);

  revalidatePath(`/dam-anh`);
}

export async function resetPunch(input: z.infer<typeof resetPunchCountSchema>) {
  const mood = await supabase
    .from("mood_tracking")
    .select("*")
    .eq("user_id", input.userId)
    .single();

  if (!mood) {
    throw new Error("Mood not found.");
  }

  await supabase
    .from("mood_tracking")
    .update({ punches: 0 })
    .eq("user_id", input.userId);

  revalidatePath("/dam-anh");
}
