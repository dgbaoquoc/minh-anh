"use server";

import { supabase } from "../supabase";

export async function increaseKiss() {
  await supabase.rpc("increment_kiss", {
    value: 1,
    row_id: 1,
  });
}
