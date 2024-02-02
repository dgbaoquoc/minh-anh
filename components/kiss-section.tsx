"use client";
import { Button } from "@/components/ui/button";
import { userId } from "@/config/site";
import { increaseKissCount } from "@/lib/action/mood";
import React from "react";
import MinhAnhTypo from "./minh-anh";
import { useToast } from "./ui/use-toast";

export default function KissSection({
  initialCounter,
}: {
  initialCounter: number;
}) {
  const [isPending, startTransition] = React.useTransition();
  const { toast } = useToast();

  return (
    <section className="max-w-screen-xl text-center">
      <div className="mt-6 space-x-4 space-y-4">
        <Button
          variant="default"
          disabled={isPending}
          onClick={() => {
            startTransition(async () => {
              await increaseKissCount({
                userId,
                count: initialCounter + 1,
              });

              toast({
                title: "💟 Yêu em 💟 ",
                description: "Many months baby 🏩 ",
              });
            });
          }}
        >
          Click để thơm anh 👊
        </Button>
      </div>

      <div className="mt-4 w-full max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-pink-900">Điểm số:</h2>
        <p className="text-lg text-pink-700 mt-2">
          Anh đã được <MinhAnhTypo /> 💋{" "}
          <span className="font-bold">{initialCounter}</span> lần.
        </p>
      </div>
    </section>
  );
}
