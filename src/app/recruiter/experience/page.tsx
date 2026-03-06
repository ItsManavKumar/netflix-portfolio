/* eslint-disable @next/next/no-img-element */
"use client";

import Fireflies from "@/components/Fireflies";
import { useEffect, useMemo, useRef, useState } from "react";

type ExperienceItem = {
  id: string;
  title: string;
  subtitle?: string;
  bg?: string;
  badge?: string;
  highlights: string[];
  tech?: string[];
  links?: { label: string; href: string }[];
};

type Shelf = {
  title: string;
  items: ExperienceItem[];
};

export default function ExperiencePage() {
  const shelves: Shelf[] = useMemo(
    () => [
      {
        title: "Professional Experience",
        items: [
          {
            id: "colossal-bet",
            title: "Colossal Bet",
            subtitle: "Data Analyst Intern · May 2025 – Oct 2025",
            bg: "/posters/colossal.jpg",
            badge: "Internship",
            highlights: [
              "Developed and maintained 10+ SQL scripts to automate daily betting transaction reports, reducing manual processing time by ~4 hours per week.",
              "Built 2 interactive Tableau dashboards to track weekly wagering KPIs, enabling clear visibility into user activity across thousands of daily bets.",
              "Performed user segmentation analysis to classify active vs inactive bettors, supporting targeted email campaigns to re-engage lapsed users.",
            ],
            tech: ["SQL", "Tableau", "Data Analysis", "User Segmentation", "KPI Dashboards"],
          },
          {
            id: "evaheld",
            title: "Evaheld",
            subtitle: "Software Engineering Intern · Nov 2022 – Apr 2023",
            bg: "/posters/evaheld.png",
            badge: "Internship",
            highlights: [
              "Built and launched homepage + contact page, reducing UI inconsistencies by 30%.",
              "Completed 100+ QA/usability tests and produced 20+ reports highlighting UX/navigation issues.",
              "Increased Lighthouse performance score by 20 points through asset and layout optimisation.",
              "Implemented Stripe payment forms enabling safe online payments for future users.",
            ],
            tech: ["Next.js", "TypeScript", "Tailwind", "React", "Stripe"],
          },
          {
            id: "optus",
            title: "Optus",
            subtitle: "Retail Associate · Jan 2024 – Present",
            bg: "/posters/optus.webp",
            badge: "Work",
            highlights: [
              "Ranked #1 for in-store sales consistently for 6 months, exceeding targets across mobile and NBN.",
              "Maintained 95% monthly NPS and 90% 12-month average, resolving customer issues efficiently.",
              "Troubleshot NBN, mobile, 5G, and device connectivity issues in a high-pressure retail environment.",
            ],
            tech: ["Customer Communication", "KPI-driven Delivery", "Troubleshooting"],
          },
          {
            id: "uts",
            title: "UTS Sydney",
            subtitle: "Bachelor of Software Engineering (Honours) 2020-2023",
            bg: "/posters/uts.png",
            badge: "Education",
            highlights: [
              "Built strong foundations in software engineering, systems design, and collaborative delivery.",
              "Shipped multiple frontend and data-focused projects in structured team environments.",
              "Developed systems thinking around building maintainable, scalable software.",
            ],
            tech: ["Software Engineering", "Data Analytics", "Git", "Team Projects"],
          },
        ],
      },
      {
        title: "Projects",
        items: [
          {
            id: "devto",
            title: "Dev.to Clone",
            subtitle: "Full-stack blogging platform · 2024",
            bg: "/backdrops/dev.to_.png",
            badge: "Project",
            highlights: [
              "Built a full-stack blogging platform with Google OAuth, user profiles, and CRUD posts.",
              "Designed a relational PostgreSQL schema and implemented secure data operations using Prisma.",
              "Implemented infinite scroll feed and caching to reduce repeat loading and improve UX speed.",
            ],
            tech: ["Next.js", "TypeScript", "Tailwind", "React Query", "NextAuth", "Prisma", "PostgreSQL", "Vercel"],
            links: [
              { label: "Live", href: "https://blog-project-tau-eight.vercel.app" },
              { label: "GitHub", href: "https://github.com/ItsManavKumar/blog_project" },
            ],
          },
          {
            id: "love-lamp",
            title: "Lamp IoT App",
            subtitle: "React Native + LIFX API · 2025",
            bg: "/posters/lamp.jpg",
            badge: "Project",
            highlights: [
              "Implemented device pairing logic to synchronise dual IoT lamps via the LIFX API.",
              "Built real-time remote light control functionality across devices with colour and brightness controls.",
              "Developed secure API request handling for multi-device state management.",
            ],
            tech: ["React Native", "Expo", "Node.js", "LIFX API", "Railway"],
          },
          {
            id: "schedule-maker",
            title: "Schedule Maker",
            subtitle: "Roster automation + calendar export · 2026",
            bg: "/posters/schedule-maker.png",
            badge: "Project",
            highlights: [
              "Automated roster parsing from PDFs into structured weekly shifts.",
              "Focused on reliability: handles edge cases, formatting differences, and export-ready output.",
              "Saves real time weekly — built for actual use, not just a demo.",
            ],
            tech: ["Next.js", "TypeScript", "PDF Parsing", "ICS Export"],
            links: [
              { label: "Live", href: "https://schedule-maker-five.vercel.app" },
            ],
          },
          {
            id: "application-tracker",
            title: "Application Tracker",
            subtitle: "Job application management · 2023",
            bg: "/posters/application-tracker.png",
            badge: "Project",
            highlights: [
              "Built a personal tool to track job applications, statuses, and follow-ups in one place.",
              "Designed a clean, minimal UI focused on fast data entry and easy scanning.",
              "Solved a real pain point from the job hunt — built and used personally.",
            ],
            tech: ["React", "TypeScript", "Tailwind"],
            links: [
              { label: "Live", href: "https://application-tracker-self.vercel.app" },
            ],
          },
          {
            id: "hoobank",
            title: "Frontend Bank Website",
            subtitle: "UI landing page · 2023",
            bg: "/posters/hoobank.png",
            badge: "Project",
            highlights: [
              "Built a polished fintech-style landing page focused on component structure and visual design.",
              "Practised clean layout systems, responsive design, and reusable section components.",
              "One of the early projects that sharpened frontend fundamentals.",
            ],
            tech: ["React", "Tailwind CSS", "Vite"],
            links: [
              { label: "Live", href: "https://itsmanavkumar.github.io/Hoobank/" },
            ],
          },
          {
            id: "weather-app",
            title: "Weather App",
            subtitle: "Live weather lookup · 2023",
            bg: "/posters/weather.png",
            badge: "Project",
            highlights: [
              "Fetches real-time weather data from a public API by city name.",
              "Displays temperature, conditions, and location with a clean minimal UI.",
              "One of the first projects involving live API integration and async data handling.",
            ],
            tech: ["JavaScript", "OpenWeather API", "HTML & CSS"],
            links: [
              { label: "Live", href: "https://itsmanavkumar.github.io/WeatherApp/" },
            ],
          },
          {
            id: "netflix-portfolio",
            title: "Netflix Portfolio",
            subtitle: "Recruiter-first UI experience · 2026",
            bg: "/posters/netflix-portfolio.png",
            badge: "Project",
            highlights: [
              "Designed a recruiter-first portfolio with a familiar Netflix browsing metaphor.",
              "Built reusable UI shelves, hover states, page transitions, and responsive layouts.",
              "Prioritised clarity: fast scanning at a glance with deeper drill-down when clicked.",
            ],
            tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
          },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState<ExperienceItem | null>(null);
  const [activeShelf, setActiveShelf] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const activeIdRef = useRef<string | null>(null);

  function openInline(item: ExperienceItem, shelfTitle: string) {
    setActive(item);
    setActiveShelf(shelfTitle);

    requestAnimationFrame(() => {
      const el = document.getElementById(`expand-${shelfTitle}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function closeInline() {
    setActive(null);
    setActiveShelf(null);
  }

  useEffect(() => {
    activeIdRef.current = active ? active.id : null;
  }, [active]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeInline();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!active) return;

    function onPointerDown(e: PointerEvent) {
      const target = e.target as Node;
      const el = target instanceof Element ? target : null;
      if (el?.closest?.("[data-exp-card='true']")) return;
      if (panelRef.current?.contains(target)) return;
      closeInline();
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [active]);

  return (
    <section className="relative px-6 sm:px-12 lg:px-20 xl:px-28 pb-16 pt-24 md:pt-28 lg:pt-32">
      <Fireflies />

      <div className="relative z-10 text-center pb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Experience
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm sm:text-base leading-relaxed">
          Here are some things I have a little experience with :)
        </p>
      </div>

      {shelves.map((shelf, idx) => (
        <div key={shelf.title} className="mb-14 md:mb-16">
          <h2 className="mb-6 text-3xl font-semibold">
            <span className="relative inline-block pb-2">
              <span
                className={[
                  "pointer-events-none absolute z-0 top-1/2 -translate-y-1/2",
                  "h-10 w-24 blur-[14px] opacity-60",
                  "bg-linear-to-r from-red-600/60 via-red-400/25 to-transparent",
                  idx % 2 === 0 ? "-left-10" : "-right-10 scale-x-[-1]",
                ].join(" ")}
              />
              <span className="relative z-10 inline-block border-b-2 border-red-600 pb-2">
                {shelf.title}
              </span>
            </span>
          </h2>

          <div className="-mx-2 px-2 pt-2 flex gap-6 overflow-x-auto pb-2">
            {shelf.items.map((item) => {
              const isOpen =
                active?.id === item.id && activeShelf === shelf.title;

              return (
                <button
                  key={item.id}
                  type="button"
                  data-exp-card="true"
                  onClick={() => openInline(item, shelf.title)}
                  className={[
                    `
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
                    `,
                    isOpen ? "border-red-600/70" : "",
                  ].join(" ")}
                >
                  <div className="
                    pointer-events-none absolute -inset-[6px]
                    opacity-50 group-hover:opacity-100
                    transition-opacity duration-300
                    blur-[10px]
                    bg-linear-to-r from-red-600/55 via-red-400/25 to-red-600/55
                  " />

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

                  {item.badge ? (
                    <span className="absolute left-3 top-3 z-10 rounded-full border border-white/10 bg-black/50 px-2 py-1 text-[11px] text-white/80">
                      {item.badge}
                    </span>
                  ) : null}

                  <div className="relative z-10 flex h-full w-full flex-col justify-end p-4 text-left">
                    <div className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </div>
                    {item.subtitle ? (
                      <div className="mt-1 text-sm text-white/70">
                        {item.subtitle}
                      </div>
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>

          <div id={`expand-${shelf.title}`} className="scroll-mt-28">
            {active && activeShelf === shelf.title ? (
              <div
                ref={panelRef}
                className="
                  mt-6 relative overflow-hidden rounded-xl
                  border border-white/10 bg-neutral-900
                  shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_-25px_rgba(0,0,0,0.9)]
                "
              >
                <div className="relative h-[180px] sm:h-[220px]">
                  {active.bg ? (
                    <img
                      src={active.bg}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-85"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-800" />
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-black/40 to-transparent" />

                  <button
                    onClick={closeInline}
                    className="
                      absolute right-3 top-3 z-10
                      rounded-md border border-white/10 bg-black/50
                      px-3 py-2 text-sm text-white/80
                      hover:bg-black/70 hover:text-white
                    "
                  >
                    Close ✕
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    {active.badge ? (
                      <div className="mb-2 inline-flex rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/80">
                        {active.badge}
                      </div>
                    ) : null}

                    <h3 className="text-2xl sm:text-3xl font-semibold">
                      {active.title}
                    </h3>

                    {active.subtitle ? (
                      <p className="mt-2 text-white/75">{active.subtitle}</p>
                    ) : null}

                    {active.links?.length ? (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {active.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              inline-flex items-center gap-2 rounded-md
                              bg-white px-4 py-2 text-sm font-semibold text-black
                              hover:bg-white/90
                            "
                          >
                            {l.label} →
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="max-h-[340px] overflow-y-auto overscroll-auto p-5 sm:p-6">
                  <h4 className="text-lg font-semibold">What I did</h4>

                  <ul className="mt-3 space-y-2 text-white/80">
                    {active.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600 shadow-[0_0_12px_rgba(229,9,20,0.65)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {active.tech?.length ? (
                    <>
                      <h4 className="mt-6 text-lg font-semibold">Tech / Skills</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {active.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
}