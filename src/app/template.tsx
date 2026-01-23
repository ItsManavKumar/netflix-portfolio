/* eslint-disable react-hooks/refs */
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { defaultAnimation } from "./lib/animations";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Always keep the latest children in a ref (but don't render them immediately)
  const latestChildrenRef = useRef<ReactNode>(children);
  latestChildrenRef.current = children;

  // This is the children we actually render (controlled swap)
  const [renderedChildren, setRenderedChildren] = useState<ReactNode>(children);
  const [routeKey, setRouteKey] = useState(pathname);

  // ✅ Only swap the rendered children when pathname changes
  useEffect(() => {
    setRenderedChildren(latestChildrenRef.current);
    setRouteKey(pathname);
  }, [pathname]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
        <AnimatePresence mode="popLayout" initial={false}>
          <m.div
            key={routeKey + defaultAnimation.name}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={defaultAnimation.variants}
            transition={defaultAnimation.transition}
            className="absolute inset-0 bg-black"
            style={{ transformOrigin: "center" }}
          >
            <div className="h-screen overflow-y-auto">{renderedChildren}</div>
          </m.div>
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
}
