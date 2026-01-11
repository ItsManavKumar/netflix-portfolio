/* eslint-disable @next/next/no-img-element */
"use client";

import Fireflies from "@/components/Fireflies";
import { useEffect, useMemo, useRef, useState } from "react";

type ExperienceItem = {
  id: string;
  title: string;
  subtitle?: string;
  bg?: string; // optional
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
        title: "Activities",
        items: [
          {
            id: "activity-football",
            title: "Football",
            badge: "Activity",
            bg: "/explorer/football.jpg",
            highlights: [
              "Competitive + team energy.",
              "Good mix of endurance, sprinting, and strategy.",
              "Best with mates — pure vibe.",
            ],
          },
          {
            id: "activity-pool",
            title: "Pool",
            badge: "Activity",
            bg: "/explorer/pool.jpg",
            highlights: [
              "Focus + patience game.",
              "Feels like chess with angles.",
              "Perfect for chill nights out.",
            ],
          },
          {
            id: "activity-badminton",
            title: "Badminton",
            badge: "Activity",
            bg: "/explorer/badminton.jpg",
            highlights: [
              "Underrated fun.",
              "Easy to start, hard to master.",
              "Elite for group hangouts.",
            ],
          },
          {
            id: "activity-lawn-bowling",
            title: "Lawn Bowling",
            badge: "Activity",
            bg: "/explorer/lawnbowling.jpg",
            highlights: [
              "Underrated fun.",
              "Easy to start, hard to master.",
              "Elite for group hangouts.",
            ],
          },
        ],
      },
      {
        title: "Music",
        items: [
          {
            id: "song-ode-to-the-mets",
            title: "Ode to the Mets",
            subtitle: "The Strokes",
            badge: "Song",
            bg: "/explorer/ode.jpg",
            highlights: [
              "Late-night nostalgia energy.",
              "One of those songs you replay when you’re thinking too much.",
            ],
          },
          {
            id: "song-messenger",
            title: "Messenger",
            subtitle: "Linkin Park",
            badge: "Song",
            bg: "/explorer/messenger.jpg",
            highlights: ["Comfort song.", "Simple but heavy in a good way."],
          },
          {
            id: "song-there-is-a-light",
            title: "There Is a Light That Never Goes Out",
            subtitle: "The Smiths",
            badge: "Song",
            bg: "/explorer/smith.jpg",
            highlights: ["Iconic melancholy.", "Romantic in the saddest way."],
          },
          {
            id: "song-let-down",
            title: "Let Down",
            subtitle: "Radiohead",
            badge: "Song",
            bg: "/explorer/letdown.jpg",
            highlights: ["Floating sadness.", "Perfect for reflective walks."],
          },
          {
            id: "song-sovereign-light-cafe",
            title: "Sovereign Light Café",
            subtitle: "Keane",
            badge: "Song",
            bg: "/explorer/keane.jpg",
            highlights: ["Warm nostalgia.", "Feels like a memory montage."],
          },
          {
            id: "song-photograph",
            title: "Photograph",
            subtitle: "Ed Sheeran",
            badge: "Song",
            bg: "/explorer/photograph.jpg",
            highlights: [
              "Sentimental classic.",
              "Hits hardest when you miss someone.",
            ],
          },
          {
            id: "song-selfless",
            title: "Selfless",
            subtitle: "The Strokes",
            bg: "/explorer/ode.jpg",
            badge: "Song",
            highlights: [
              "Dreamy, soft, and cinematic.",
              "Hits different on headphones.",
            ],
          },
          {
            id: "song-line-without-a-hook",
            title: "Line Without a Hook",
            subtitle: "Ricky Montgomery",
            badge: "Song",
            bg: "/explorer/line.jpg",
            highlights: ["Soft + punchy.", "Sad lyrics, catchy delivery."],
          },
          {
            id: "song-on-melancholy-hill",
            title: "On Melancholy Hill",
            subtitle: "Gorillaz",
            badge: "Song",
            bg: "/explorer/melancholy.jpg",
            highlights: [
              "Sunny-sad vibe.",
              "Feels like a retro road trip scene.",
            ],
          },
          {
            id: "song-jiya-laage-na",
            title: "Jiya Laage Na",
            subtitle: "—",
            badge: "Song",
            bg: "/explorer/jiya.jpg",
            highlights: ["That emotional Bollywood ache.", "Pure feels."],
          },
        ],
      },
      {
        title: "TV Shows",
        items: [
          {
            id: "tv-himym",
            title: "How I Met Your Mother",
            badge: "TV Show",
            bg: "/explorer/himym.jpg",
            highlights: ["Comfort show.", "Funny + emotional = perfect combo."],
          },
          {
            id: "tv-suits",
            title: "Suits",
            badge: "TV Show",
            bg: "/explorer/suits.jpg",
            highlights: ["Confidence fuel.", "Style, dialogue, swagger."],
          },
          {
            id: "tv-peaky",
            title: "Peaky Blinders",
            badge: "TV Show",
            bg: "/explorer/peaky.jpg",
            highlights: ["Cold aura.", "Cinematic + intense."],
          },
          {
            id: "tv-got",
            title: "Game of Thrones",
            badge: "TV Show",
            bg: "/explorer/got.jpg",
            highlights: [
              "Big world, big stakes.",
              "Classic epic fantasy addiction.",
            ],
          },
          {
            id: "tv-sherlock",
            title: "Sherlock",
            badge: "TV Show",
            bg: "/explorer/sherlock.jpg",
            highlights: ["Fast brain show.", "Mood + mystery + genius."],
          },
          {
            id: "tv-gossip",
            title: "Gossip Girl",
            badge: "TV Show",
            bg: "/explorer/gossip.jpg",
            highlights: ["Guilty pleasure energy.", "Drama + style."],
          },
          {
            id: "tv-originals",
            title: "The Originals",
            badge: "TV Show",
            bg: "/explorer/originals.jpg",
            highlights: ["Dark family politics.", "Vampire world done right."],
          },
        ],
      },
      {
        title: "Movies",
        items: [
          {
            id: "movie-good-will-hunting",
            title: "Good Will Hunting",
            badge: "Movie",
            bg: "/explorer/goodwillhunting.jpg",
            highlights: [
              "Raw + motivating.",
              "That ‘you can be more’ feeling.",
            ],
          },
          {
            id: "movie-shawshank",
            title: "The Shawshank Redemption",
            badge: "Movie",
            bg: "/explorer/shawshank.jpg",
            highlights: [
              "Hope. Patience. Payoff.",
              "One of the greatest ever.",
            ],
          },
          {
            id: "movie-la-la-land",
            title: "La La Land",
            badge: "Movie",
            bg: "/explorer/lalaland.jpg",
            highlights: ["Dreams vs reality.", "Beautiful and painful."],
          },
          {
            id: "movie-fight-club",
            title: "Fight Club",
            badge: "Movie",
            bg: "/explorer/fightclub.jpg",
            highlights: ["Chaos philosophy.", "Iconic tone + messaging."],
          },
          {
            id: "movie-munna-bhai",
            title: "Munna Bhai",
            badge: "Movie",
            bg: "/explorer/munna.jpg",
            highlights: ["Heart + humor.", "Feel-good with meaning."],
          },
          {
            id: "movie-phir-hera-pheri",
            title: "Phir Hera Pheri",
            badge: "Movie",
            bg: "/explorer/phirherapheri.jpg",
            highlights: ["Comedy gold.", "Timeless rewatch."],
          },
        ],
      },
      {
        title: "Anime",
        items: [
          {
            id: "anime-aot",
            title: "Attack on Titan",
            badge: "Anime",
            bg: "/explorer/aot.jpg",
            highlights: [
              "Peak storytelling.",
              "Insane plot twists and themes.",
            ],
          },
          {
            id: "anime-gintama",
            title: "Gintama",
            badge: "Anime",
            bg: "/explorer/gintama.jpg",
            highlights: ["Comedy + feels + action.", "GOAT mix."],
          },
          {
            id: "anime-one-piece",
            title: "One Piece",
            badge: "Anime",
            bg: "/explorer/onepiece.jpg",
            highlights: [
              "Adventure addiction.",
              "Worldbuilding on another level.",
            ],
          },
          {
            id: "anime-naruto",
            title: "Naruto",
            badge: "Anime",
            bg: "/explorer/naruto.jpg",
            highlights: ["Childhood classic.", "Motivation + bonds."],
          },
          {
            id: "anime-bleach",
            title: "Bleach",
            badge: "Anime",
            bg: "/explorer/bleach.jpg",
            highlights: ["Style + hype fights.", "Soundtrack is elite."],
          },
          {
            id: "anime-made-in-abyss",
            title: "Made in Abyss",
            badge: "Anime",
            bg: "/explorer/madeinabyss.jpg",
            highlights: [
              "Beautiful but dark.",
              "That haunting adventure vibe.",
            ],
          },
          {
            id: "anime-tokyo-ghoul",
            title: "Tokyo Ghoul",
            badge: "Anime",
            bg: "/explorer/tokyoghoul.jpg",
            highlights: ["Dark identity themes.", "Iconic moments."],
          },
          {
            id: "anime-oregairu",
            title: "Oregairu",
            badge: "Anime",
            bg: "/explorer/oregairu.jpg",
            highlights: ["Sharp dialogue.", "Real emotions, slow burn."],
          },
          {
            id: "anime-kimi-no-nawa",
            title: "Kimi no Na wa",
            subtitle: "Your Name",
            badge: "Anime",
            bg: "/explorer/kiminonawa.jpg",
            highlights: [
              "Beautiful story.",
              "One of the best anime films ever.",
            ],
          },
          {
            id: "anime-hxh",
            title: "Hunter x Hunter",
            badge: "Anime",
            bg: "/explorer/hxh.jpg",
            highlights: ["Smart arcs.", "Power system + writing = top tier."],
          },
          {
            id: "anime-fma",
            title: "Fullmetal Alchemist",
            badge: "Anime",
            bg: "/explorer/fmab.jpg",
            highlights: [
              "Classic masterpiece.",
              "Perfect balance of everything.",
            ],
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
           Casual fun stuff
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm sm:text-base leading-relaxed">
         
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

          {/* Shelf row (UNCHANGED sizing/behavior) */}
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
                  {/* Outer glow */}
                  <div
                    className="
                      pointer-events-none absolute -inset-[6px]
                      opacity-50 group-hover:opacity-100
                      transition-opacity duration-300
                      blur-[10px]
                      bg-linear-to-r from-red-600/55 via-red-400/25 to-red-600/55
                    "
                  />

                  {/* Background image (optional) */}
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

                  {/* Dark gradient */}
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

          {/* Inline expanded panel */}
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
                  </div>
                </div>

                {/* Body */}
                <div className="max-h-[340px] overflow-y-auto overscroll-auto p-5 sm:p-6">
                  <h4 className="text-lg font-semibold">Notes</h4>

                  <ul className="mt-3 space-y-2 text-white/80">
                    {active.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600 shadow-[0_0_12px_rgba(229,9,20,0.65)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
}
