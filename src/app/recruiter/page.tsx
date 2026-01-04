import Link from "next/link";

const recruiterShelves = [
  {
    title: "Today’s Top Picks for Recruiters",
    items: [
      {
        label: "Skills",
        href: "/recruiter/skills",
      },
      {
        label: "Projects",
        href: "/recruiter/projects",
      },
      {
        label: "Experience",
        href: "/recruiter/experience",
      },
      {
        label: "Work Permit",
        href: "/recruiter/workpermit",
      },
    ],
  },
  {
    title: "Continue Watching for Recruiters",
    items: [
      { label: "Music", href: "/recruiter/music", icon: "/posters/icon5.png" },
      {
        label: "Reading",
        href: "/recruiter/reading",
        icon: "/posters/icon6.png",
      },
      {
        label: "Movies",
        href: "/recruiter/movies",
        icon: "/posters/icon7.png",
      },
      {
        label: "Contact Me",
        href: "/recruiter/contact",
        icon: "/posters/icon8.png",
      },
    ],
  },
];

export default function RecruiterPage() {
  return (
    <>
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen min-h-[620px] w-full">
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
              Frontend-focused Software Engineer building modern, product-ready
              web apps. Experienced with React, Next.js, and TypeScript, I’ve
              built full-stack projects featuring authentication, scalable UI
              patterns, and clean, user-centric design.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
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
          <div key={row.title} className="mb-12">
            <h2 className="mb-4 text-3xl font-semibold">{row.title}</h2>

            <div className="-mx-2 px-2 pt-3 flex gap-6 overflow-x-auto pb-2">
              {row.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                 className="
                  group relative flex
                  min-w-[220px] h-[130px]
                  sm:min-w-[260px] sm:h-[150px]
                  md:min-w-[300px] md:h-[170px]
                  lg:min-w-[300px] lg:h-[170px]
                  items-center justify-center
                  bg-neutral-800 border border-white/10
                  transition duration-200 ease-out
                  hover:scale-[1.04]
                  hover:border-red-600/60
                  hover:shadow-[0_0_0_1px_rgba(229,9,20,0.35),0_10px_30px_-10px_rgba(229,9,20,0.45)]
                "

                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-50 
                   group-hover:opacity-100 group-hover:text-white transition" />

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
