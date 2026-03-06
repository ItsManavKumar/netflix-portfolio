"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { defaultAnimation } from "../lib/animations";

export default function RecruiterTemplate({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultAnimation.variants}
        transition={defaultAnimation.transition}
        className="relative w-full overflow-hidden"
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}