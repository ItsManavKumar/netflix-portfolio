/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useMemo, useState } from "react";

type GameKey = "home" | "rapid" | "deep" | "photo";
type Q = { id: string; text: string };

const RAPID_FIRE: Q[] = [
  { id: "p1", text: "Morning cuddles or night cuddles?" },
  { id: "p2", text: "Movies together or long drives together?" },
  { id: "p3", text: "Cute photos or cute videos?" },
  { id: "p4", text: "Flirty teasing or soft romance?" },
  { id: "p5", text: "Hoodie stealing or hand holding?" },
  { id: "p6", text: "Beach sunset or city night?" },
  { id: "p7", text: "Lazy date at home or going out dressed up?" },
  { id: "p8", text: "Matching outfits or matching playlists?" },
  { id: "p9", text: "Surprise gift or surprise visit?" },
  { id: "p10", text: "Soft love or chaotic love?" },
  { id: "p11", text: "“I miss you” texts or “call me” texts?" },
  { id: "p12", text: "Forehead kiss or cheek kiss?" },
  { id: "p13", text: "Cute nicknames or real names?" },
  { id: "p14", text: "Deep talks at night or deep talks on walks?" },
  { id: "p15", text: "One big trip or many small dates?" },
  { id: "p16", text: "Cooking together or ordering together?" },
  { id: "p17", text: "Pictures together or memories without phones?" },
  { id: "p18", text: "Early sleep or late nights?" },
  { id: "p19", text: "Simple love or dramatic love?" },
  { id: "p20", text: "Rewatch comfort movies or try new ones?" },
  { id: "p21", text: "Spontaneous plan or planned date?" },
  { id: "p22", text: "Compliments or physical affection?" },
  { id: "p23", text: "Shopping date or café hopping?" },
  { id: "p24", text: "Staying in the same city or travelling somewhere new together?" },
  { id: "p25", text: "Coffee date or dessert date?" },
];

const DEEP_QUESTIONS: Q[] = [
  { id: "d1", text: "What’s your favourite version of us — lazy, adventurous, romantic, chaotic?" },
  { id: "d2", text: "What’s one small thing that instantly puts you in a good mood?" },
  { id: "d3", text: "What’s one thing you love doing together that we don’t do enough?" },
  { id: "d4", text: "What’s something silly about me that secretly makes you smile? (Manav reserves 😌)" },
  { id: "d5", text: "When do you feel most emotionally close to me?" },
  { id: "d6", text: "What’s something I do that makes you feel safe?" },
  { id: "d7", text: "What’s your favourite memory of us that you revisit in your head?" },
  { id: "d8", text: "What’s one thing about our relationship you’re proud of?" },
  { id: "d9", text: "What’s a moment where you felt “yeah… this is my person”?" },
  { id: "d10", text: "What’s one habit of mine you’d actually miss if it disappeared?" },
  { id: "d11", text: "How do you usually know I’m there for you?" },
  { id: "d12", text: "What’s something you’ve learned about yourself while being with me? (Mona reserves 👀)" },
  { id: "d13", text: "What helps you calm down when life feels overwhelming?" },
  { id: "d14", text: "What’s something you wish people understood about you better?" },
  { id: "d15", text: "When you’re quiet, what’s usually going on inside your head?" },
  { id: "d16", text: "What kind of support feels best for you — words, presence, actions?" },
  { id: "d17", text: "What makes a day feel “good” to you, even if nothing special happens?" },
  { id: "d18", text: "What’s something I do that you find unintentionally attractive?" },
  { id: "d19", text: "When do you feel most desired by me?" },
  { id: "d20", text: "What’s something you look forward to doing together again?" },
  { id: "d21", text: "What kind of trips do you think we’d enjoy most together?" },
  { id: "d22", text: "What’s something you want us to experience for the first time together?" },
  { id: "d23", text: "What’s something you don’t say often but feel?" },
  { id: "d24", text: "What’s one small thing I do that you notice?" },
  { id: "d25", text: "What’s one word you’d use to describe “your partner” right now?" },
  { id: "d26", text: "What’s something about you that you only show to people you trust deeply?" },
  { id: "d27", text: "What’s something you’re afraid of losing?" },
  { id: "d28", text: "What helps you open up when you’re feeling guarded?" },
  { id: "d29", text: "What’s something you’ve wanted to tell me but didn’t know how to say?" },
  { id: "d30", text: "When you’re overwhelmed, how do you wish I’d show up for you?" },
  { id: "d31", text: "What’s something you’re still learning to accept about yourself?" },
  { id: "d32", text: "What’s something that hurts more than you usually admit? (It can be something I do)" },
  { id: "d33", text: "What’s one thing that helps you feel less alone?" },
  { id: "d34", text: "What kind of closeness feels the most intimate to you?" },
  { id: "d35", text: "What’s something about us that feels uniquely ours?" },
  { id: "d36", text: "What’s a way I care for you that you don’t always say out loud?" },
  { id: "d37", text: "What’s something you want us to protect no matter what?" },
];

const STORAGE_KEY = "kuchu_answered_v1";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function randomIndex(len: number, avoid?: number) {
  if (len <= 1) return 0;
  let idx = Math.floor(Math.random() * len);
  if (avoid !== undefined && idx === avoid) idx = (idx + 1) % len;
  return idx;
}

function Tile({
  title,
  subtitle,
  onClick,
}: {
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group rounded-2xl border border-white/25 bg-slate-950/60 p-5 text-left shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl hover:bg-slate-950/70 transition"
    >
      <div className="text-lg font-semibold tracking-wide">{title}</div>
      <div className="mt-1 text-sm text-white/70">{subtitle}</div>
      <div className="mt-4 text-xs text-white/50 group-hover:text-white/70">
        Tap to open →
      </div>
    </button>
  );
}


// Bright-friendly glass card (looks good on your pink gradient bg)
function NetflixCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-slate-950/60 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      {/* soft glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-rose-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );

}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/35 bg-white/20 px-3 py-1 text-xs text-white/90 backdrop-blur">
      {children}
    </span>
  );
}

function Divider() {
  return <div className="my-4 h-px w-full bg-red-500/30" />;
}

export default function KuchuPage() {
  const [view, setView] = useState<GameKey>("home");
  const [rapidIdx, setRapidIdx] = useState(0);
  const [deepIdx, setDeepIdx] = useState(0);

  // Mona movie: draft + confirmed
  const [monaMovieDraft, setMonaMovieDraft] = useState<string>("");
  const [monaMovieFinal, setMonaMovieFinal] = useState<string>("");

  // answered map by question id
  const [answered, setAnswered] = useState<Record<string, boolean>>({});

  function confirmMonaMovie() {
    const v = monaMovieDraft.trim();
    if (!v) return;
    setMonaMovieFinal(v);
  }

  function resetMonaMovie() {
    setMonaMovieFinal("");
    setMonaMovieDraft("");
  }

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setAnswered(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answered));
    } catch {
      // ignore
    }
  }, [answered]);

  const title = useMemo(() => {
    switch (view) {
      case "rapid":
        return "Rapid Fire ⚡️";
      case "deep":
        return "Questions 🤯❤️";
      case "photo":
        return "Photo Hunt 📸";
      default:
        return "Kuchu Day 💛";
    }
  }, [view]);

  const rapid = RAPID_FIRE;
  const deep = DEEP_QUESTIONS;

  const currentRapid = rapid[rapidIdx];
  const currentDeep = deep[deepIdx];

  const rapidAnsweredCount = useMemo(
    () => rapid.reduce((acc, q) => acc + (answered[q.id] ? 1 : 0), 0),
    [answered, rapid]
  );
  const deepAnsweredCount = useMemo(
    () => deep.reduce((acc, q) => acc + (answered[q.id] ? 1 : 0), 0),
    [answered, deep]
  );

  function toggleAnswered(id: string) {
    setAnswered((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function resetAnswered() {
    setAnswered({});
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide">{title}</h1>
            <p className="mt-1 text-sm text-white/70">Answer any skip any hehe!!</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={resetAnswered}
              className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
              title="Clear answered marks"
            >
              Reset
            </button>

            {view !== "home" && (
              <button
                onClick={() => setView("home")}
                className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
              >
                ← Back
              </button>
            )}
          </div>
        </div>

        <Divider />

        {/* Home */}
        {view === "home" && (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Tile
                title="Rapid Fire ⚡️"
                subtitle="Fast this-or-that vibes"
                onClick={() => setView("rapid")}
              />
              <Tile
                title="Questions 🤯❤️"
                subtitle="Soft + intimate questions"
                onClick={() => setView("deep")}
              />
              <Tile
                title="Photo Hunt 📸"
                subtitle="Red vs Blue challenge"
                onClick={() => setView("photo")}
              />
            </div>

            {/* Movie Selection - ONLY on home */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* Kuchu's pick (locked) */}
              <NetflixCard>
                <div className="text-lg font-semibold">Mona's pick 🎬</div>
                <div className="mt-1 text-sm text-white/70">Locked in.</div>
                <Divider />
                <div className="text-2xl font-semibold text-white">Klaus</div>
              </NetflixCard>

              {/* Mona's pick (confirm -> reset) */}
              <NetflixCard>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold">Kuchu's pick 🎬</div>
                    <div className="mt-1 text-sm text-white/70">
                      Type it in and confirm.
                    </div>
                  </div>
                  {monaMovieFinal ? <Pill>Confirmed ✅</Pill> : <Pill>Pending</Pill>}
                </div>

                <Divider />

                {!monaMovieFinal ? (
                  <>
                    <label className="block text-sm text-white/90">
                      Movie name
                      <input
                        value={monaMovieDraft}
                        onChange={(e) => setMonaMovieDraft(e.target.value)}
                        placeholder="Type your movie pick…"
                        className="mt-2 w-full rounded-xl border border-white/35 bg-white/20 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:border-white/70 backdrop-blur"
                      />
                    </label>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        onClick={confirmMonaMovie}
                        disabled={!monaMovieDraft.trim()}
                        className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur disabled:opacity-50 disabled:hover:bg-white/20"
                      >
                        Confirm
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-semibold text-white">{monaMovieFinal}</div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        onClick={resetMonaMovie}
                        className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
                      >
                        Reset
                      </button>
                    </div>
                  </>
                )}
              </NetflixCard>
            </div>
          </>
        )}

        {/* Rapid Fire */}
        {view === "rapid" && currentRapid && (
          <div className="space-y-3">
            <NetflixCard>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  <Pill>
                    {rapidIdx + 1} / {rapid.length}
                  </Pill>
                  <Pill>Answered: {rapidAnsweredCount}</Pill>
                  <Pill>Both answer</Pill>
                </div>

                {answered[currentRapid.id] ? <Pill>Answered ✅</Pill> : <Pill>Not answered</Pill>}
              </div>

              <div className="mt-4 text-2xl leading-snug">{currentRapid.text}</div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={() => setRapidIdx((i) => clamp(i - 1, 0, rapid.length - 1))}
                  className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
                >
                  Prev
                </button>
                <button
                  onClick={() => setRapidIdx((i) => clamp(i + 1, 0, rapid.length - 1))}
                  className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
                >
                  Next
                </button>
                <button
                  onClick={() => setRapidIdx((i) => randomIndex(rapid.length, i))}
                  className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
                >
                  Random
                </button>

                <button
                  onClick={() => toggleAnswered(currentRapid.id)}
                  className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
                >
                  {answered[currentRapid.id] ? "Undo" : "Answered ✅"}
                </button>
              </div>
            </NetflixCard>

            <NetflixCard>
              <div className="text-sm text-white/85">
                <div className="font-semibold text-white">Mini rules</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Take turns asking.</li>
                  <li>fast answers only</li>
                </ul>
              </div>
            </NetflixCard>
          </div>
        )}

        {/* Deep Questions */}
        {view === "deep" && currentDeep && (
          <div className="space-y-3">
            <NetflixCard>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  <Pill>
                    {deepIdx + 1} / {deep.length}
                  </Pill>
                  <Pill>Answered: {deepAnsweredCount}</Pill>
                  <Pill>Ask or skip 🥰</Pill>
                </div>

                {answered[currentDeep.id] ? <Pill>Answered ✅</Pill> : <Pill>Not answered</Pill>}
              </div>

              <div className="mt-4 text-2xl leading-snug">{currentDeep.text}</div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={() => setDeepIdx((i) => clamp(i - 1, 0, deep.length - 1))}
                  className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
                >
                  Prev
                </button>
                <button
                  onClick={() => setDeepIdx((i) => clamp(i + 1, 0, deep.length - 1))}
                  className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
                >
                  Next
                </button>
                <button
                  onClick={() => setDeepIdx((i) => randomIndex(deep.length, i))}
                  className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
                >
                  Random
                </button>

                <button
                  onClick={() => toggleAnswered(currentDeep.id)}
                  className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition backdrop-blur"
                >
                  {answered[currentDeep.id] ? "Undo" : "Answered ✅"}
                </button>
              </div>
            </NetflixCard>

            <NetflixCard>
              <div className="text-sm text-white/85">
                <div className="font-semibold text-white">Rules</div>
                <div className="mt-2">
                  Ask any. Skip any. No pressure. If a question feels heavy, you can say:
                  <div className="mt-3 rounded-xl border border-white/35 bg-white/20 p-3 text-white/95 backdrop-blur">
                    “We can skip this one. No explanation needed. I just want us happy.”
                  </div>
                </div>
              </div>
            </NetflixCard>
          </div>
        )}

        {/* Photo Hunt */}
        {view === "photo" && (
          <div className="space-y-3">
            <NetflixCard>
              <div className="flex flex-wrap items-center gap-2">
                <Pill>THE PHOTO HUNT BEGINS</Pill>
                <Pill>Pick a color: RED or BLUE</Pill>
              </div>

              <Divider />

              <div className="text-lg font-semibold">Rules</div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-white/90">
                <li>
                  Pick one colour: <b>Red</b> or <b>Blue</b>.
                </li>
                <li>
                  Take <b>5 photos</b> of your chosen colour throughout the day.
                </li>
                <li>
                  The <b>last photo</b> should be:{" "}
                  <b>something that reminds you of me 🤗</b>
                </li>
              </ul>

              <Divider />

              <div className="font-semibold">And it begins!!!</div>
            </NetflixCard>
          </div>
        )}
      </div>
    </main>
  );
}
