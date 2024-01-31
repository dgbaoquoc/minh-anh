"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PunchCard() {
  const router = useRouter();

  function handleOnClick() {
    const answer = window.confirm(
      "Chắc nay tâm trạng em không tốt\nEm chắc chắn muốn đấm anh à?"
    );

    if (answer) {
      router.push("/dam-anh");
    }
  }

  return (
    <Card
      className="hover:cursor-pointer flex flex-col items-center justify-center space-y-4 text-center hover:scale-110 transition-transform duration-300"
      onClick={handleOnClick}
    >
      <CardHeader>
        <CardTitle>
          Đấm Anh <span className="text-4xl">👊</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-4xl">
        <Image
          priority
          alt="Minh Anh hôn anh"
          className="text-balance rounded-full"
          width={200}
          height={200}
          src="/minh-anh.webp"
        />
      </CardContent>
    </Card>
  );
}
