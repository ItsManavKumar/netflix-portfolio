"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "animating";

export default function PageCubeTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  const [front, setFront] = useState<React.ReactNode>(children);
  const [right, setRight] = useState<React.ReactNode | null>(null);

  const [phase, setPhase] = useState<Phase>("idle");
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    setFront(children);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (prevPath.current === pathname) {
      setFront(children);
      return;
    }

    // Put next page on RIGHT face
    setRight(children);
    setPhase("animating");

    const rAF = requestAnimationFrame(() => setRotating(true));

    const t = window.setTimeout(() => {
      setFront(children);
      setRight(null);
      setRotating(false);
      setPhase("idle");
      prevPath.current = pathname;
    }, 650);

    return () => {
      cancelAnimationFrame(rAF);
      window.clearTimeout(t);
    };
  }, [pathname, children]);

  return (
    <div className="cube-root">
      <div
        className={[
          "cube-stage",
          phase === "animating" ? "is-animating" : "",
          rotating ? "is-rotating" : "",
        ].join(" ")}
      >
        {/* FRONT FACE (current page) */}
        <div className="cube-face cube-front">{front}</div>

        {/* RIGHT FACE (next page) */}
        {right ? <div className="cube-face cube-right">{right}</div> : null}
      </div>

      <style jsx global>{`
        .cube-root {
          perspective: 1400px;
          transform-style: preserve-3d;
        }

        .cube-stage {
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .cube-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        /* Current page on the front */
        .cube-front {
          transform: rotateY(0deg);
        }

        /* Next page sits on the RIGHT face of the cube */
        .cube-right {
          transform-origin: right center;
          transform: rotateY(-90deg);
        }

        /*
          KEY CHANGE:
          Pivot the cube around the RIGHT edge
          and rotate +90deg so motion starts on the right and sweeps left.
        */
        .cube-stage.is-animating {
          transform-origin: right center;
          transition: transform 650ms cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        .cube-stage.is-animating.is-rotating {
          transform: rotateY(90deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .cube-stage.is-animating {
            transition: none !important;
          }
          .cube-stage.is-animating.is-rotating {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
