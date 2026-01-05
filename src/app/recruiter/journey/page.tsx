import Fireflies from "@/components/Fireflies";

type JourneyItem = {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  side: "left" | "right";
};

const journey: JourneyItem[] = [
  {
    id: "uts-degree",
    year: "Mar 2020 – Aug 2023",
    title: "UTS Sydney — Bachelor of Engineering (Honours) in Software",
    subtitle: "Built core engineering foundations + product mindset",
    description:
      "Built strong fundamentals in software engineering and shipped multiple front-end and data-focused projects while studying in Sydney.",
    side: "left",
  },
  {
    id: "uts-wefit",
    year: "Mar 2022 – Jun 2022",
    title: "UTS Women in Engineering & IT — Front-End Developer",
    subtitle: "Dashboards + stakeholder collaboration + Agile rituals",
    description:
      "Proposed and executed new dashboard designs, worked with stakeholders, and facilitated weekly scrum/stand-ups for project tracking.",
    side: "right",
  },
  {
    id: "evaheld",
    year: "Nov 2022 – Apr 2023",
    title: "Evaheld — Front-End Developer",
    subtitle: "Tailwind + Next.js + UX testing + mentoring",
    description:
      "Built and improved key pages, trained 3 new team members, ran 100+ usability tests, and produced 20+ UX/UI issue reports.",
    side: "left",
  },
  {
    id: "uts-data-analyst",
    year: "Mar 2023 – Jun 2023",
    title: "UTS — Data Analyst",
    subtitle: "ML modeling + 30k dataset + 95% accuracy (Distinction)",
    description:
      "Applied linear regression, random forest, KNN, and SVM to predict weather trends on a dataset of ~30k records in Python.",
    side: "right",
  },
  {
    id: "aws-deepracer",
    year: "Achievement",
    title: "AWS DeepRacer Student League — Top 10% (Australia)",
    subtitle: "Reinforcement learning reward function (SageMaker)",
    description:
      "Ranked within the top 10% in Australia by designing a reward function for an RL model on Amazon SageMaker.",
    side: "left",
  },
//   {
//     id: "projects",
//     year: "Sept 2023 – Oct 2023",
//     title: "Projects — Hoo Bank App + AI Calendar App (Frontend)",
//     subtitle: "UI builds + scheduling flow foundations",
//     description:
//       "Built a personal finance landing UI (Hoo Bank) and established frontend for an AI calendar app with calendar integration direction.",
//     side: "right",
//   },
{
    id: "optus",
    year: "2024–Now",
    title: "Optus — Retail Associate",
    subtitle: "Customer-first communication under pressure",
    description:
      "Strengthened real-world communication, troubleshooting, and prioritization while continuing to upskill in software engineering.",
    side: "right",
  },
  {
  id: "webto",
  year: "2024",
  title: "Web.to — Dev.to Style Blogging Platform",
  subtitle: "Full-stack product build (Next.js)",
  description:
    "Built a Dev.to-style blogging platform with authentication, user profiles, infinite scrolling, and a clean, production-ready UI using Next.js and modern tooling.",
  side: "left",
},
{
  id: "lamp",
  year: "2024",
  title: "Long-Distance IoT Project",
  subtitle: "Real-time APIs + emotional UX",
  description:
    "Designed and built an IoT-powered lamp that syncs color and brightness between users in real time, focusing on reliability, UX, and meaningful interaction.",
  side: "right",
},
{
  id: "netflix-portfolio",
  year: "2025",
  title: "Netflix-Style Portfolio",
  subtitle: "Recruiter-first UX + product storytelling",
  description:
    "Built a Netflix-inspired portfolio to reduce recruiter friction and present projects like a product experience rather than a traditional portfolio.",
  side: "left",
},

];

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative px-6 sm:px-12 lg:px-20 xl:px-28 pb-20 pt-24 md:pt-28 lg:pt-32 overflow-hidden">
        {/* Background effect only in this black section */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Fireflies />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
            Journey
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70 text-sm sm:text-base leading-relaxed">
            A timeline of how I grew from engineering foundations → real-world delivery → recruiter-first projects.
          </p>

          <div className="relative mt-14">
            {/* ✅ RED center line from top to bottom */}
            <div
              className="
                pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2
                bg-red-600/60
                shadow-[0_0_18px_rgba(229,9,20,0.35)]
              "
            />

            <div className="space-y-10">
              {journey.map((item) => (
                <div key={item.id} className="relative">
                  {/* node */}
                  <div
                    className="
                      absolute left-1/2 top-6 -translate-x-1/2
                      h-3 w-3 rounded-full
                      bg-red-600
                      shadow-[0_0_0_4px_rgba(229,9,20,0.15)]
                    "
                  />

                  <div
                    className={[
                      "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start",
                      item.side === "left" ? "" : "md:[&>div:first-child]:order-2",
                    ].join(" ")}
                  >
                    {/* spacer column for symmetry on desktop */}
                    <div className="hidden md:block" />

                    {/* card column */}
                    <div
                      className={[
                        "relative",
                        item.side === "left" ? "md:pr-10" : "md:pl-10",
                      ].join(" ")}
                    >
                      <div
  className="
    group relative
    transition duration-200 ease-out
    hover:scale-[1.02]
  "
>
  {/* ✅ Outer glow (same as Skills) */}
  <div
    className="
      pointer-events-none absolute -inset-1.5
      opacity-60 group-hover:opacity-100
      transition-opacity duration-300
      blur-[10px]
      bg-linear-to-r from-red-600/55 via-red-400/25 to-red-600/55
    "
  />

  {/* ✅ Card (same vibe as Skills) */}
  <div
    className="
      relative rounded-lg
      border border-white/10
      bg-linear-to-b from-neutral-800 to-neutral-900
      p-6
      transition duration-200 ease-out
      group-hover:border-red-600/50
      group-hover:shadow-[0_0_0_1px_rgba(229,9,20,0.25),0_16px_40px_-18px_rgba(229,9,20,0.55)]
      overflow-hidden
    "
  >
    {/* inner dark overlay (same as Skills) */}
    <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent opacity-50 group-hover:opacity-100 transition" />

    {/* content */}
    <div className="relative z-10">
      <div className="text-xs uppercase tracking-widest text-white/50">
        {item.year}
      </div>

      <h2 className="mt-2 text-xl font-semibold">
        {item.title}
      </h2>

      {item.subtitle ? (
        <div className="mt-1 text-sm text-white/70">
          {item.subtitle}
        </div>
      ) : null}

      <p className="mt-4 text-sm leading-relaxed text-white/75">
        {item.description}
      </p>
    </div>
  </div>
</div>

                    </div>
                  </div>

                  {/* mobile connector hint */}
                  <div className="md:hidden mt-3 flex justify-center">
                    <div className="h-6 w-px bg-red-600/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center text-white/70 text-sm">
            Want the details? Jump to <span className="text-white">Experience</span> or{" "}
            <span className="text-white">Projects</span>.
          </div>
        </div>
      </section>
    </main>
  );
}
