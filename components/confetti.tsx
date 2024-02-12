import React from "react";
import { useCallback, useEffect, useRef } from "react";

import ReactConfetti from "react-confetti";

export default function Confetti() {
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });
  const [isClient, setClient] = React.useState(false);
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
    setClient(true);
  }, []);
  return <ReactConfetti width={dimensions.width} height={dimensions.height} />;
}
