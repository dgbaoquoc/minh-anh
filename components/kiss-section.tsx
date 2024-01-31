"use client";
import { Button } from "@/components/ui/button";
import { increaseKiss } from "@/lib/action/kiss";
import React from "react";
import MinhAnhTypo from "./minh-anh";
import { useToast } from "./ui/use-toast";

export default function KissSection({
  initialCounter,
}: {
  initialCounter: number;
}) {
  const [isPending, startTransition] = React.useTransition();
  const [counter, setCounter] = React.useState<number>(initialCounter);
  const { toast } = useToast();

  return (
    <section className="max-w-screen-xl text-center">
      <div className="mt-6 space-x-4 space-y-4">
        <Button
          variant="default"
          onClick={async () => {
            setCounter(counter + 1);
            toast({
              title: "💟 Yêu em 💟 ",
              description: "Many months baby 🏩 ",
            });
            await increaseKiss();
          }}
        >
          Click để thơm anh 👊
        </Button>
      </div>

      <div className="mt-4 w-full max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-pink-900">Điểm số:</h2>
        <p className="text-lg text-pink-700 mt-2">
          Anh đã được <MinhAnhTypo /> 💋{" "}
          <span className="font-bold">{counter}</span> lần.
        </p>
      </div>
    </section>
  );
}
