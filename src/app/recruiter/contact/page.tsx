import Link from "next/link";
import Fireflies from "@/components/Fireflies";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 sm:px-12 lg:px-20 xl:px-28 pb-20 pt-24 md:pt-28 lg:pt-32">
        {/* Background effect only in this black section */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Fireflies />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
  {/* ===== Netflix-style "Title Details" card ===== */}
  <div
    className="
      group relative
      transition duration-200 ease-out
      hover:scale-[1.01]
    "
  >
    {/* ✅ Outer glow (same as Skills cards) */}
    <div
      className="
        pointer-events-none absolute -inset-1.5msm:-inset-1.5
        opacity-60 group-hover:opacity-100
        transition-opacity duration-300
        blur-[14px] sm:blur-lg
        bg-linear-to-r from-red-600/55 via-red-400/25 to-red-600/55
      "
    />

    {/* Card */}
    <div
      className="
        relative overflow-hidden rounded-xl
        border border-white/10
        bg-linear-to-b from-neutral-800 to-neutral-900
        transition duration-200 ease-out
        group-hover:border-red-600/50
        group-hover:shadow-[0_0_0_1px_rgba(229,9,20,0.25),0_18px_46px_-20px_rgba(229,9,20,0.60)]
      "
    >
      {/* ✅ Inner overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 to-transparent opacity-60 group-hover:opacity-100 transition" />

      <div className="relative z-10 p-6 sm:p-8 md:p-10">
        {/* metadata line */}
        <div className="text-xs sm:text-sm text-white/70">
          <span className="hidden sm:inline">•</span>{" "}
          <span className="block sm:inline">
            Frontend / Full-stack • Sydney / Melbourne • Open to interview
          </span>
        </div>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Hire Manav Kumar
        </h1>

        <p className="mt-4 max-w-2xl text-white/75 leading-relaxed text-sm sm:text-base">
          I build clean, thoughtful web products — the kind that feel good to use
          and easy to maintain. I care about UI details, performance, and clear
          communication. If you want someone who takes ownership and ships, I’d
          love to chat.
        </p>

        {/* ✅ CTAs: mobile-friendly layout */}
        <div
          className="
            mt-7 grid grid-cols-1 gap-3
            sm:grid-cols-2 sm:gap-3
            lg:flex lg:flex-wrap
          "
        >
          <a
            href="mailto:manav.kumar2108@gmail.com?subject=Interview%20-%20Manav%20Kumar"
            className="
              inline-flex items-center justify-center gap-2 rounded
              bg-white px-5 py-2.5 text-sm font-semibold text-black
              hover:bg-white/90
            "
          >
            ▶ Email Me
          </a>

          <a
            href="https://linkedin.com/in/contact-manav"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center gap-2 rounded
              bg-white/15 px-5 py-2.5 text-sm font-semibold text-white
              hover:bg-white/20
            "
          >
            ＋ LinkedIn
          </a>

          <a
            href="/resume.pdf"
            className="
              inline-flex items-center justify-center gap-2 rounded
              bg-white/15 px-5 py-2.5 text-sm font-semibold text-white
              hover:bg-white/20
            "
          >
            ⬇ Resume
          </a>

          <a
            href="https://github.com/ItsManavKumar"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center gap-2 rounded
              bg-white/15 px-5 py-2.5 text-sm font-semibold text-white
              hover:bg-white/20
            "
          >
            ＋ GitHub
          </a>
        </div>

        {/* Quick facts: more readable on mobile */}
        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2 text-sm text-white/70">
          <span>Stack: Next.js • React • TypeScript • Tailwind</span>
          <span>Strengths: UI Systems • Auth • API Integration</span>
          <span className="sm:col-span-2">
            Work rights: Graduate visa (valid to 2027)
          </span>
        </div>
      </div>
    </div>


  {/* keep your scrollable “More Like This” shelf under this */}
</div>


          {/* ===== More Like This ===== */}
          <div className="mt-14">
  <h2 className="text-2xl font-semibold">More Like This</h2>

  <div
    className="
      mt-5 flex gap-4
      overflow-x-auto overflow-y-hidden
      snap-x snap-mandatory
      -mx-2 px-2 pb-2
      md:flex-wrap md:justify-start md:overflow-visible md:snap-none md:mx-0 md:px-0
      scrollbar-none
    "
  >
    {[
      { label: "Skills", href: "/recruiter/skills" },
      { label: "Journey", href: "/recruiter/journey" },
      { label: "Experience", href: "/recruiter/experience" },
      { label: "Projects", href: "/recruiter/experience" },
    ].map((item) => (
      <div
        key={item.label}
        className="
          group relative shrink-0 snap-start
          w-42.5 h-27.5
          transition duration-200 ease-out
          hover:scale-[1.03]
        "
      >
        {/* Outer glow (same as contact + skills) */}
        <div
          className="
            pointer-events-none absolute -inset-2
            opacity-60 group-hover:opacity-100
            transition-opacity duration-300
            blur-md
            bg-linear-to-r from-red-600/55 via-red-400/25 to-red-600/55
          "
        />

        {/* Card */}
        <Link
          href={item.href}
          className="
            relative z-10 flex h-full w-full items-center justify-center
            overflow-hidden rounded-lg
            border border-white/10
            bg-linear-to-b from-neutral-800 to-neutral-900
            transition duration-200 ease-out
            group-hover:border-red-600/50
            group-hover:shadow-[0_0_0_1px_rgba(229,9,20,0.25),0_12px_30px_-14px_rgba(229,9,20,0.55)]
          "
        >
          {/* inner overlay */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 to-transparent opacity-60 group-hover:opacity-100 transition" />

          <div className="relative z-10 text-lg font-semibold">
            {item.label}
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>


          <p className="mt-14 text-center text-white/50 text-sm">
            Fastest response: Email • Happy to share code samples and walk
            through projects.
          </p>
        </div>
      </section>
    </main>
  );
}
