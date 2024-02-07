import React from "react";
import dayjs from "dayjs";

export default function useTimer({
  endDate,
  endTime,
}: {
  endDate: string; // format: YYYY-MM-DD
  endTime: string; // format: HH:mm:ss
}) {
  const [remainingTime, setRemainingTime] = React.useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const calculateTimeRemaining = () => {
      const endTimeFormatted = dayjs(`${endDate} ${endTime}`);
      const currentTime = dayjs();
      const difference = endTimeFormatted.diff(currentTime, "seconds");

      const days = Math.floor(difference / (60 * 60 * 24));
      const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((difference % (60 * 60)) / 60);
      const seconds = Math.floor(difference % 60);

      setRemainingTime({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    calculateTimeRemaining(); // Calculate initially
    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [endDate, endTime]);

  return remainingTime;
}
