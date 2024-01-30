import MinhAnhTypo from "@/components/minh-anh";
import PunchingSection from "@/components/punch-section";
import { supabase } from "@/lib/supabase";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

export default async function Home() {
  unstable_noStore();
  let { data: punches } = await supabase.from("punch").select("*").eq("id", 1);

  const punchOnly = punches![0];

  return (
    <main className="bg-gradient-to-r from-pink-300 to-pink-500">
      <div className="p-6 flex flex-col items-center justify-center min-h-screen">
        <Image
          priority
          alt="Minh Anh"
          className="text-balance rounded-full hover:scale-110 transition-transform duration-300"
          width={200}
          height={200}
          src="/minh-anh.webp"
        />
        <h1 className="text-justify text-2xl md:text-4xl font-bold text-white mt-4">
          <MinhAnhTypo className="text-white" /> đang{" "}
          <span className="text-primary">dỗi 💢 </span> anh, anh sẽ bị Minh Anh
          đấm
        </h1>
        <PunchingSection initialCounter={punchOnly.punches} />
      </div>
    </main>
  );
}
