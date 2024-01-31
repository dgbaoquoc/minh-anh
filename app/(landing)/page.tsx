import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-primary text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Ngày hôm nay của Minh Anh như thế nào?
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Nay Minh Anh của anh muốn làm gì? <br />
            Chọn 1 trong 2 nhé baby 👇
          </p>
        </div>
        <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Link href="/hon-anh">
            <Card className="flex flex-col items-center justify-center space-y-4 text-center hover:scale-110 transition-transform duration-300 ">
              <CardHeader>
                <CardTitle>
                  Hôn Anh <span className="text-4xl">💋</span>{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-4xl">
                <Image
                  priority
                  alt="Minh Anh hôn anh"
                  className="text-balance rounded-full"
                  width={200}
                  height={200}
                  src="/minh-anh-hon-anh.webp"
                />
              </CardContent>
            </Card>
          </Link>
          <Link href="/dam-anh">
            <Card className="flex flex-col items-center justify-center space-y-4 text-center hover:scale-110 transition-transform duration-300">
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
          </Link>
        </div>
      </div>
    </main>
  );
}
