import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { Button } from "@/components/ui/button";
import Buttons from "./_components/buttons";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Will you be mine Valentine?",
  description: "Câu hỏi khó nhất trong ngày 14/2...",
};

export default function ValentinePage() {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-500 min-h-screen">
      <Shell>
        <PageHeader>
          <PageHeaderHeading size="lg" className="text-white text-center">
            Would you be mine Valentine?
          </PageHeaderHeading>
        </PageHeader>
        <div className="p-6 flex flex-col items-center justify-center">
          <Buttons />
        </div>
      </Shell>
    </div>
  );
}
