import Link from "next/link";
import type { ReactNode } from "react";

export default function RecruiterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-linear-to-b from-black/80 via-black/40 to-transparent">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/recruiter"
              className="text-md font-semibold tracking-wide text-white/90 hover:text-white"
            >
              ←
            </Link>
            <nav className="hidden gap-8 text-md text-white/70 sm:flex">
              <Link href="/recruiter/skills" className="hover:text-white">Skills</Link>
              <Link href="/recruiter/experience" className="hover:text-white">Experience</Link>
              <Link href="/recruiter/journey" className="hover:text-white">Journey</Link>
              <Link href="/recruiter/contact" className="hover:text-white">Hire me</Link>
            </nav>
          </div>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}