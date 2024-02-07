"use client";

import useTimer from "@/hooks/use-timer";

export default function Timer({
  endDate,
  endTime = "00:00",
}: {
  endDate: string;
  endTime?: string;
}) {
  const { days, hours, minutes, seconds } = useTimer({
    endDate,
    endTime,
  });

  return (
    <div className="flex items-center justify-center w-full">
      <div className="grid w-full max-w-3xl grid-cols-4 items-center justify-center rounded-lg border border-gray-200 bg-gray-50/90 backdrop-blur-md px-4 py-3 gap-4 text-sm sm:text-base dark:border-gray-800 dark:bg-gray-950/90">
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-base font-semibold">Ngày</span>
          <span className="text-lg font-semibold">{days}</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-base font-semibold">Giờ</span>
          <span className="text-lg font-semibold">{hours}</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-base font-semibold">Phút</span>
          <span className="text-lg font-semibold">{minutes}</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-base font-semibold">Giây</span>
          <span className="text-lg font-semibold">{seconds}</span>
        </div>
      </div>
    </div>
  );
}
