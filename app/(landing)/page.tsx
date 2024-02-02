import MinhAnhTypo from "@/components/minh-anh";
import Title from "@/components/title";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userId } from "@/config/site";
import { getUser, getUserMood } from "@/lib/fetcher/user";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function IndexPage() {
  const user = await getUser(userId);

  if (!user) notFound();
  const userMood = await getUserMood({
    userId: user.data?.id as string,
  });

  return (
    <main className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            {user?.data?.message}
          </h1>
          <p className="t mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Nay <Title title={user.data?.name as string} /> của anh muốn làm gì?{" "}
            <br />
            Chọn 1 trong 2 nhé baby 👇
          </p>
        </div>
        <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Link href="/hon-anh">
            <Card className="flex flex-col items-center justify-center space-y-4 text-center hover:scale-110 transition-transform duration-300 ">
              <CardHeader>
                <CardTitle className="text-primary">
                  Hôn Anh <span className="text-4xl">💋</span> (
                  {userMood?.data?.kisses})
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Card className="hover:cursor-pointer flex flex-col items-center justify-center space-y-4 text-center hover:scale-110 transition-transform duration-300">
                <CardHeader>
                  <CardTitle>
                    Đấm Anh <span className="text-4xl">👊</span> (
                    {userMood?.data?.punches})
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
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>STOP!!! ✋✋✋</AlertDialogTitle>
                <AlertDialogDescription>
                  Chắc nay tâm trạng em không tốt. Em chắc chắn muốn đấm anh à?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Em bấm nhầm</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Link href="/dam-anh">Vâng em rất muốn 😠</Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </main>
  );
}
