import Timer from "@/components/timer";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Đếm ngược ngày gặp lại nhau",
  description: "Dành cho các cặp đôi đang yêu xa, I feel you...",
};

export default function CountdownPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300">
      <div className="container px-4 md:px-6 min-h-screen">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Chúng ta còn
          </h1>
          <Timer endDate="2024-02-21" endTime="03:30" />
        </div>
      </div>
    </main>
  );
}
