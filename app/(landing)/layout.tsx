import React from "react";
import SiteFooter from "@/components/layout/site-footer";

interface LandingLayoutProps extends React.PropsWithChildren {}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1 ">{children}</main>
      <SiteFooter />
    </div>
  );
}
