"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import MinhAnhTypo from "./minh-anh";
import { increasePunch, resetPunch } from "@/lib/action/increase-punch";
import { useToast } from "./ui/use-toast";

export default function PunchingSection({
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
            if (counter > 2) {
              toast({
                title: "🤚 Dừng lại 🤚 ",
                description: "Đấm nhiều quá!!! Anh yêu em",
                action: (
                  <Button
                    variant="destructive"
                    disabled={isPending}
                    onClick={() =>
                      startTransition(async () => {
                        await resetPunch();
                        setCounter(0);
                      })
                    }
                  >
                    Reset cú đấm 💌
                  </Button>
                ),
              });
            }
            await increasePunch();
          }}
        >
          Click để đấm anh 👊
        </Button>
        <Button
          variant="destructive"
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              await resetPunch();
              setCounter(0);
            })
          }
        >
          Reset cú đấm 💌
        </Button>
      </div>

      <div className="mt-4 w-full max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-pink-900">Điểm số:</h2>
        <p className="text-lg text-pink-700 mt-2">
          Anh đã bị <MinhAnhTypo /> 👊{" "}
          <span className="font-bold">{counter}</span> lần.
        </p>
      </div>
    </section>
  );
}
