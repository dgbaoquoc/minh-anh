"use server";

import { supabase } from "../supabase";

export async function increasePunch() {
  await supabase.rpc("increment", {
    value: 1,
    row_id: 1,
  });
}

export async function resetPunch() {
  await supabase.from("punch").update({ punches: 0 }).eq("id", 1);
}
