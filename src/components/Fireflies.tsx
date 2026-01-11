/* eslint-disable react-hooks/set-state-in-effect */
"use client";

/* eslint-disable react-hooks/purity */
import { useEffect, useMemo, useState } from "react";

type FlyStyle = {
  width: string;
  height: string;
  left: string;
  top: string;
  background: string;
  boxShadow: string;
  animationDelay: string;
  animationDuration: string;
};

export default function Fireflies() {
  const COUNT = 120;

  const boxShadow = useMemo(
    () => `
      0 0 8px rgba(229, 9, 20, 1),
      0 0 22px rgba(255, 60, 60, 0.9)
    `,
    []
  );

  const [flies, setFlies] = useState<FlyStyle[] | null>(null);

  useEffect(() => {
    // generate ONCE on the client so server/client markup matches (server renders nothing)
    const next: FlyStyle[] = Array.from({ length: COUNT }).map(() => ({
      width: Math.random() * 3 + 6 + "px",
      height: Math.random() * 3 + 4 + "px",
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      background: "rgba(229, 9, 20, 1)",
      boxShadow,
      animationDelay: `${Math.random()}s`,
      animationDuration: `${7 + Math.random() * 5}s`,
    }));

    setFlies(next);
  }, [boxShadow]);

  // ✅ prevents hydration mismatch
  if (!flies) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {flies.map((style, i) => (
        <span
          key={i}
          className="
            absolute block rounded-full
            animate-float
            opacity-60
            blink
          "
          style={style}
        />
      ))}
    </div>
  );
}
