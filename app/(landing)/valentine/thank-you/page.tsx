"use client";

import Confetti from "@/components/confetti";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";

export default function ThankYouPage() {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-500 min-h-screen">
      <Shell>
        <PageHeader>
          <PageHeaderHeading size="lg" className="text-white text-center">
            Thank you for being my wonderful girlfriend 💝
          </PageHeaderHeading>
        </PageHeader>
        <Confetti />
      </Shell>
    </div>
  );
}
