"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ExplorerLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  function goBack() {
    // router.back() is ideal, but if user lands directly it might do nothing useful.
    // So we provide a guaranteed escape hatch to Profiles.
    router.back();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            {/* Back: behaves like history back */}
            <button
              onClick={goBack}
              className="text-md font-semibold tracking-wide text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Go back"
              title="Back"
            >
              ←
            </button>

            {/* Middle label */}
            <div className="text-sm font-semibold tracking-wide text-white/80">
              Explorer
            </div>

            {/* Always-works escape to Profiles */}
            <Link
              href="/"
              className="text-sm text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Profiles
            </Link>
          </div>
        </div>
      </header>

      {/* push content below fixed header */}
      <div className="pt-16">{children}</div>
    </main>
  );
}
