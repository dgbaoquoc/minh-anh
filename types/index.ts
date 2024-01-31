import { Database } from "@/types/database/supabase";

export type User = Database["public"]["Tables"]["users"]["Row"];

export type MoodTracking = Database["public"]["Tables"]["mood_tracking"]["Row"];
