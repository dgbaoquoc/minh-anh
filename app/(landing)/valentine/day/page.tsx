"use client";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function DayPage() {
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-500 min-h-screen">
      <Shell>
        <PageHeader>
          <PageHeaderHeading size="lg" className="text-white ">
            Chọn ngày date
          </PageHeaderHeading>
          <PageHeaderDescription size="sm" className="text-white ">
            Vì ngày 21/02 anh mới quay lại nên em hãy chọn ngày date bù nhé
          </PageHeaderDescription>
        </PageHeader>
        <div className="p-6 flex space-y-4 flex-col items-center justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) =>
              date < new Date("2024-02-22") || date < new Date("1900-01-01")
            }
            initialFocus
            className="rounded-md border shadow text-white"
          />
          <Button
            disabled={
              date &&
              (date < new Date("2024-02-22") || date < new Date("1900-01-01"))
            }
            onClick={() =>
              router.push(
                `/valentine/food?day=${dayjs(date).format("DD-MM-YYYY")}`
              )
            }
          >
            Tiếp tục
          </Button>
        </div>
      </Shell>
    </div>
  );
}
