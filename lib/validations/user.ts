import { z } from "zod";

export const getUserKissesSchema = z.object({
  userId: z.string(),
});

export const getUserPunchesSchema = z.object({
  userId: z.string(),
});

export const getUserMoodSchema = z.object({
  userId: z.string(),
});

export const increaseKissCountSchema = z.object({
  userId: z.string(),
  count: z.number(),
});

export const increasePunchCountSchema = z.object({
  userId: z.string(),
  count: z.number(),
});

export const resetPunchCountSchema = z.object({
  userId: z.string(),
});
