/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const recruiterShelves = [
  {
    title: "Today’s Top Picks for Recruiters",
    items: [
      {
        label: "Skills",
        href: "/recruiter/skills",
        bg: "/backdrops/IMG_6421.JPG",
      },
      {
        label: "Experience",
        href: "/recruiter/experience",
        bg: "/backdrops/IMG_1629.JPG",
      },
      {
        label: "Journey",
        href: "/recruiter/journey",
        bg: "/backdrops/IMG_1243.JPG",
      },
      {
        label: "Contact Me",
        href: "/recruiter/contact",
        bg: "/backdrops/IMG_1920.JPG",
      },
    ],
  },
  {
    title: "Continue Watching for Recruiters",
    items: [
      {
        label: "<Dev.to/>",
        href: "https://blog-project-tau-eight.vercel.app/",
        bg: "/backdrops/dev.to_.png",
      },
      {
        label: "Lamp",
        href: "/recruiter/reading",
      },
      {
        label: "Schedule Maker",
        href: "/recruiter/movies",
        bg: "/backdrops/IMG_2152.jpg",
      },
    ],
  },
];

export default function RecruiterPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative h-screen min-h-155 w-full">
          {/* Background layers */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* MP4 background */}
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/backdrops/the-office-intro.mp4" type="video/mp4" />
            </video>

            {/* Overlays */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex h-full items-end pb-48 px-6 sm:px-12 lg:px-20 xl:px-20 2xl:px-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                MANAV KUMAR
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                Frontend-focused Software Engineer building modern,
                product-ready web apps. Experienced with React, Next.js, and
                TypeScript, I’ve built full-stack projects featuring
                authentication, scalable UI patterns, and clean, user-centric
                design.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/resume/resume-manav_kumar.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
                >
                  ⬇️ Resume
                </a>

                <a
                  href="https://linkedin.com/in/contact-manav"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                >
                  🔗 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="relative z-20 -mt-40 px-6 sm:px-12 lg:px-20 xl:px-28 pb-2"
        >
          {recruiterShelves.map((row) => (
            <div key={row.title} className="relative mb-12 ">
              <h2 className="mb-4 text-3xl font-semibold">{row.title}</h2>

              <div className="-mx-2 px-2 pt-3 flex gap-6 overflow-x-auto pb-2">
                {row.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    group relative flex
                    min-w-55 h-32.5
                    sm:min-w-65 sm:h-37.5
                    md:min-w-75 md:h-42.5
                    lg:min-w-85 lg:h-47.5
                    items-center justify-center
                    overflow-hidden rounded-md
                    border border-white/10
                    transition duration-200 ease-out
                    hover:scale-[1.04]
                    hover:border-red-600/60
                    hover:shadow-[0_0_0_1px_rgba(229,9,20,0.35),0_10px_30px_-10px_rgba(229,9,20,0.45)]
                  "
                  >
                    {/* ✅ Card background image */}
                    {item.bg ? (
                      <img
                        src={item.bg}
                        alt=""
                        className="
        pointer-events-none absolute inset-0 h-full w-full object-cover
        opacity-80
        transition duration-300
        group-hover:opacity-95 group-hover:scale-[1.03]
      "
                      />
                    ) : (
                      <div className="absolute inset-0 bg-neutral-800" />
                    )}

                    {/* ✅ Dark gradient so text stays readable */}
                    <div
                      className="
      pointer-events-none absolute inset-0
      bg-linear-to-t from-black/60 via-black/20 to-transparent
      opacity-70 group-hover:opacity-90
      transition duration-300
    "
                    />

                    <h3 className="relative z-10 text-2xl font-semibold tracking-tight">
                      {item.label}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
