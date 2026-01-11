/* eslint-disable @next/next/no-img-element */
"use client";

import Fireflies from "@/components/Fireflies";
import { useEffect, useMemo, useRef, useState } from "react";

type ExperienceItem = {
  id: string;
  title: string;
  subtitle?: string;
  bg?: string; // e.g. "/backdrops/IMG_1243.JPG" (match exact casing)
  badge?: string; // e.g. "Work", "Project"
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
            id: "uts",
            title: "UTS Sydney",
            subtitle: "Bachelor of Software Engineering (Honours)",
            bg: "/backdrops/IMG_6421.JPG",
            badge: "Education",
            highlights: [
              "Strong engineering foundation: software design, problem-solving, and team delivery.",
              "Built projects in structured environments using version control and iterative development.",
              "Developed systems thinking around building maintainable, scalable software.",
            ],
            tech: ["Software Engineering", "Team Projects", "Git"],
          },
          {
            id: "optus",
            title: "Optus",
            subtitle: "Customer Technology Specialist (Retail)",
            bg: "/backdrops/IMG_1920.JPG",
            badge: "Work",
            highlights: [
              "Troubleshot NBN, mobile, 5G, device setup, and connectivity issues in a high-pressure environment.",
              "Worked with KPIs and customer outcomes — translating complex tech into clear, human explanations.",
              "Built strong diagnostic habits: isolate variables, reproduce issues, test fixes, and confirm resolution.",
            ],
            tech: [
              "Troubleshooting",
              "Customer Communication",
              "KPI-driven delivery",
            ],
          },
          {
            id: "evaheld",
            title: "Evaheld",
            subtitle: "Internship - Front-End Developer",
            bg: "/backdrops/IMG_6421.JPG",
            badge: "Internship",
            highlights: [
              "Developed and constructed a highly functional homepage and improved the contact page, boosting it's performance.",
              "Conducted 100+ usability tests on each independent page on website, designed 20+ reports showcasing UX/UI design issues, navigation bugs and improvement areas.",
              "Developed systems thinking around building maintainable, scalable software.",
            ],
            tech: ["Tailwind", "TypeScript", "NextJS", "React"],
          },
        ],
      },
      {
        title: "Product & Engineering Experience",
        items: [
          {
            id: "devto",
            title: "<Dev.to/>",
            subtitle: "Full-stack content platform (clone)",
            bg: "/backdrops/blog.png",
            badge: "Project",
            highlights: [
              "Built a production-style web app with authentication, feeds, and user profiles.",
              "Implemented modern data flows and UX patterns (infinite scroll, delete/edit, responsive UI).",
              "Designed it like a real product: clean UI, scalable structure, deployment-ready.",
            ],
            tech: ["Next.js", "TypeScript", "Prisma", "Postgres", "Auth"],
            links: [
              {
                label: "Live",
                href: "https://blog-project-tau-eight.vercel.app",
              },
              {
                label: "GitHub",
                href: "https://github.com/ItsManavKumar/blog_project",
              },
            ],
          },
          {
            id: "love-lamp",
            title: "Love Lamp",
            subtitle: "IoT + Mobile app (LIFX API)",
            bg: "/backdrops/IMG_1243.JPG",
            badge: "Project",
            highlights: [
              "Built a mobile experience that controls smart lights via an API (real-world hardware integration).",
              "Designed interactions: color picker, brightness, state sync, safe token handling.",
              "Shipped as a real product-use case — built for someone, not just a demo.",
            ],
            tech: ["React Native", "Expo", "Node/Backend", "APIs", "Railway"],
          },
          {
            id: "schedule-maker",
            title: "Schedule Maker",
            subtitle: "Roster automation + calendar export",
            bg: "/backdrops/IMG_2152.jpg",
            badge: "Project",
            highlights: [
              "Automated roster parsing from PDFs into structured shifts.",
              "Focused on reliability: edge cases, formatting differences, export-ready output.",
              "Product thinking: saves time weekly, reduces manual errors.",
            ],
            tech: ["Next.js", "Parsing", "TypeScript", "ICS export"],
          },
          {
            id: "netflix-portfolio",
            title: "Netflix Portfolio",
            subtitle: "Recruiter-first UI experience",
            bg: "/backdrops/IMG_2325.JPG",
            badge: "Project",
            highlights: [
              "Designed a recruiter-first portfolio with a familiar browsing metaphor.",
              "Built reusable UI shelves, hover states, and responsive layouts.",
              "Prioritized clarity: fast scanning + deeper drill-down when clicked.",
            ],
            tech: ["Next.js", "Tailwind", "UI Systems"],
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
    // IMPORTANT: if a panel is open and you click another card, we should switch
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

  // keep a ref to the currently open card id so outside-click handler doesn't use stale state
  useEffect(() => {
    activeIdRef.current = active ? active.id : null;
  }, [active]);

  // Esc to close
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeInline();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Click outside panel closes it — BUT allow clicking another card to switch
  useEffect(() => {
    if (!active) return;

    function onPointerDown(e: PointerEvent) {
      const target = e.target as Node;

      // If user clicked a card button, do NOT close here (the button's onClick will switch)
      const el = target instanceof Element ? target : null;
      if (el?.closest?.("[data-exp-card='true']")) return;

      // If click was inside expanded panel, do nothing
      if (panelRef.current?.contains(target)) return;

      // Otherwise close
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

          {/* Shelf row (match Recruiter page behaviour) */}
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
                  {/* Outer glow (outside the box, not tinting the whole card) */}
                  <div
                    className="
                      pointer-events-none absolute -inset-[6px]
                      opacity-50 group-hover:opacity-100
                      transition-opacity duration-300
                      blur-[10px]
                      bg-linear-to-r from-red-600/55 via-red-400/25 to-red-600/55
                    "
                  />

                  {/* Background image */}
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

                  {/* Dark gradient for legibility */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-linear-to-t from-black/60 via-black/20 to-transparent
                      opacity-70 group-hover:opacity-90
                      transition duration-300
                    "
                  />

                  {/* Badge */}
                  {item.badge ? (
                    <span className="absolute left-3 top-3 z-10 rounded-full border border-white/10 bg-black/50 px-2 py-1 text-[11px] text-white/80">
                      {item.badge}
                    </span>
                  ) : null}

                  {/* Text */}
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

          {/* Inline expanded panel (anchored to this shelf) */}
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
                {/* Top image */}
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

                {/* Body (scrollable inside) */}
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
                      <h4 className="mt-6 text-lg font-semibold">
                        Tech / Skills
                      </h4>
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
