import React from "react";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

interface LandingLayoutProps extends React.PropsWithChildren {}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 ">{children}</main>
      <SiteFooter />
    </div>
  );
}
