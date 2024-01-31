import KissSection from "@/components/kiss-section";
import MinhAnhTypo from "@/components/minh-anh";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { supabase } from "@/lib/supabase";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lại gần hôn anh",
  description: "Anh sẽ vẽ em mặt trời 🎵🎵🎵 ",
};

export default async function HonAnhPage() {
  let { data: kisses } = await supabase.from("punch").select("*").eq("id", 1);

  const kissOnly = kisses![0];
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-500 min-h-screen">
      <Shell>
        <PageHeader>
          <PageHeaderHeading size="sm">Hôn anh 💋 </PageHeaderHeading>
          <PageHeaderDescription size="sm">
            Nay Minh Anh muốn hôn anh 💏
          </PageHeaderDescription>
        </PageHeader>
        <div className="p-6 flex flex-col items-center justify-center ">
          <Image
            priority
            alt="Minh Anh hôn anh"
            className="text-balance rounded-full"
            width={200}
            height={200}
            src="/minh-anh-hon-anh.webp"
          />
          <h1 className="text-justify text-2xl md:text-4xl font-bold text-white mt-4">
            <MinhAnhTypo className="text-white" /> đang cảm thấy{" "}
            <span className="text-primary">yêu 💝 </span> anh, <br /> anh sẽ
            được Minh Anh hôn
          </h1>
          <KissSection initialCounter={kissOnly.kisses} />
        </div>
      </Shell>
    </div>
  );
}