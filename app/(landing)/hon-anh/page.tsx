import KissSection from "@/components/kiss-section";
import MinhAnhTypo from "@/components/minh-anh";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { userId } from "@/config/site";
import { getKissesCount } from "@/lib/fetcher/user";
import { supabase } from "@/lib/supabase";
import { type Metadata } from "next";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lại gần hôn anh",
  description: "Anh sẽ vẽ em mặt trời 🎵🎵🎵 ",
};

export default async function HonAnhPage() {
  const kissPromise = await getKissesCount({ userId });
  const kiss = kissPromise?.data?.kisses ?? 0;

  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-500 min-h-screen">
      <Shell>
        <PageHeader>
          <PageHeaderHeading size="sm" className="text-white">
            Hôn anh 💋{" "}
          </PageHeaderHeading>
          <PageHeaderDescription size="sm" className="text-white">
            Nay <MinhAnhTypo /> muốn hôn anh 💏
          </PageHeaderDescription>
        </PageHeader>
        <div className="p-6 flex flex-col items-center justify-center ">
          <Image
            priority
            alt="Kiss image"
            className="text-balance rounded-full hover:scale-110 transition-transform duration-300"
            width={200}
            height={200}
            src="/minh-anh-hon-anh.webp"
          />
          <h1 className="text-justify text-2xl md:text-4xl font-bold text-white mt-4">
            <MinhAnhTypo /> đang cảm thấy{" "}
            <span className="text-primary">yêu 💝 </span> anh, <br /> anh sẽ
            được <MinhAnhTypo /> hôn
          </h1>
          <KissSection initialCounter={kiss} />
        </div>
      </Shell>
    </div>
  );
}
