"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Buttons() {
  const [scaleYes, setScaleYes] = React.useState(1);
  const [scaleNo, setScaleNo] = React.useState(1);

  function handleClickNoButton() {
    setScaleYes(scaleYes * 1.2);
    setScaleNo(scaleNo * 0.8);
  }

  return (
    <div className="space-x-2 lg:space-x-6">
      <Button
        id="yes-btn"
        size="lg"
        variant="outline"
        style={{
          transform: `scale(${scaleYes})`,
        }}
        asChild
      >
        <Link href="/valentine/day">Yes</Link>
      </Button>
      <Button
        id="no-btn"
        size="icon"
        onClick={handleClickNoButton}
        style={{
          transform: `scale(${scaleNo})`,
        }}
      >
        No
      </Button>
    </div>
  );
}
