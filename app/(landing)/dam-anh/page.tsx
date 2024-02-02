import MinhAnhTypo from "@/components/minh-anh";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "@/components/page-header";
import PunchingSection from "@/components/punch-section";
import { Shell } from "@/components/shells/shell";
import { userId } from "@/config/site";
import { getPunchesCount } from "@/lib/fetcher/user";
import { supabase } from "@/lib/supabase";
import { type Metadata } from "next";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Đấm anh à???",
  description: "Dù em có đấm anh bao nhiêu lần, anh vẫn sẽ yêu em.",
};
export default async function DamAnhPage() {
  unstable_noStore();
  const punchPromise = await getPunchesCount({ userId });
  const punch = punchPromise?.data?.punches ?? 0;

  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-500 min-h-screen">
      <Shell>
        <PageHeader>
          <PageHeaderHeading size="sm">Đấm anh 👊</PageHeaderHeading>
          <PageHeaderDescription size="sm">
            Nay <MinhAnhTypo /> muốn đấm anh à?
          </PageHeaderDescription>
        </PageHeader>
        <div className="p-6 flex flex-col items-center justify-center">
          <Image
            priority
            alt="Minh Anh"
            className="text-balance rounded-full hover:scale-110 transition-transform duration-300"
            width={200}
            height={200}
            src="/minh-anh.webp"
          />
          <h1 className="text-justify text-2xl md:text-4xl font-bold text-white mt-4">
            <MinhAnhTypo /> đang <span className="text-primary">dỗi 💢 </span>{" "}
            anh, anh sẽ bị <MinhAnhTypo /> đấm
          </h1>
          <PunchingSection initialCounter={punch} />
        </div>
      </Shell>
    </div>
  );
}
