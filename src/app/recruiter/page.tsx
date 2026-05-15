/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type ShelfItem = {
  label: string;
  href: string;
  bg: string;
  date?: string;
  external?: boolean;
};

const recruiterShelves: { title: string; items: ShelfItem[] }[] = [
  {
    title: "Today's Top Picks for Recruiters",
    items: [
      {
        label: "Skills",
        href: "/recruiter/skills",
        bg: "/posters/icon1.png",
      },
      {
        label: "Experience",
        href: "/recruiter/experience",
        bg: "/posters/icon2.png",
      },
      {
        label: "Journey",
        href: "/recruiter/journey",
        bg: "/posters/icon3.png",
      },
      {
        label: "Contact Me",
        href: "/recruiter/contact",
        bg: "/posters/icon4.png",
      },
    ],
  },
  {
    title: "Continue Watching for Recruiters",
    items: [
      {
        label: "AnalyzeBets",
        href: "https://odds-dashboard-iota.vercel.app/",
        bg: "/posters/AnalyzeBets.png",
        date: "2026",
        external: true,
      },
      {
        label: "Dev.to Blog Platform",
        href: "https://blog-project-tau-eight.vercel.app/",
        bg: "/backdrops/dev.to_.png",
        date: "2025",
        external: true,
      },
      
      {
        label: "Schedule Maker",
        href: "https://schedule-maker-five.vercel.app",
        bg: "/posters/schedule-maker.png",
        date: "2026",
        external: true,
      },
      {
        label: "Application Tracker",
        href: "https://application-tracker-self.vercel.app",
        bg: "/posters/application-tracker.png",
        date: "2023",
        external: true,
      },
      {
        label: "Frontend Bank Website",
        href: "https://itsmanavkumar.github.io/Hoobank/",
        bg: "/posters/hoobank.png",
        date: "2023",
        external: true,
      },
      {
        label: "Weather App",
        href: "https://itsmanavkumar.github.io/WeatherApp/",
        bg: "/posters/weather.png",
        date: "2023",
        external: true,
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
          <div className="absolute inset-0 z-0 overflow-hidden">
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
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          <div className="relative z-10 flex h-full items-end pb-48 px-6 sm:px-12 lg:px-20 xl:px-20 2xl:px-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                MANAV KUMAR
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                Software Engineering graduate with a background in Full-Stack
                development and Data Analytics. Strong in API integration,
                database design, and performance optimisation.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/resume/Manav_Kumar_SoftwareDeveloper_CV.pdf"
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

        {/* Shelves */}
        <section
          id="projects"
          className="relative z-20 -mt-40 px-6 sm:px-12 lg:px-20 xl:px-28 pb-2"
        >
          {recruiterShelves.map((row) => (
            <div key={row.title} className="relative mb-12">
              <h2 className="mb-4 text-3xl font-semibold">{row.title}</h2>

              <div className="-mx-2 px-2 pt-3 flex gap-6 overflow-x-auto pb-2">
                {row.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
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
                    {item.bg ? (
                      <img
                        src={item.bg}
                        alt=""
                        className="
                          pointer-events-none absolute inset-0 h-full w-full object-cover
                          opacity-80 transition duration-300
                          group-hover:opacity-95 group-hover:scale-[1.03]
                        "
                      />
                    ) : (
                      <div className="absolute inset-0 bg-neutral-800" />
                    )}

                    <div className="
                      pointer-events-none absolute inset-0
                      bg-linear-to-t from-black/60 via-black/20 to-transparent
                      opacity-70 group-hover:opacity-90 transition duration-300
                    " />

                    {item.date && (
                      <span className="
                        absolute top-2.5 right-2.5 z-10
                        rounded px-2 py-0.5
                        bg-black/60 border border-white/15
                        text-[11px] font-medium tracking-wide text-white/70
                        group-hover:text-white/90 transition
                      ">
                        {item.date}
                      </span>
                    )}

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