import Fireflies from "@/components/Fireflies";
import { skillIconMap } from "@/components/SkillIcons";

const skillShelves = [
  {
    title: "Frontend Stack",
    items: [
      { name: "TypeScript", logo: "/icons/typescript.svg" },
      { name: "React", logo: "/icons/react.svg" },
      { name: "Next.js", logo: "/icons/nextdotjs.svg" },
      { name: "Tailwind", logo: "/icons/tailwindcss.svg" },
      { name: "Bootstrap", logo: "/icons/tailwindcss.svg" },
      { name: "Sass", logo: "/icons/tailwindcss.svg" },
      { name: "HTML & CSS", logo: "/icons/html5.svg" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", logo: "/icons/nodedotjs.svg" },
      { name: "REST APIs", logo: "/icons/fastapi.svg" },
      { name: "NextAuth", logo: "/icons/betterauth.svg" },
      { name: "Prisma", logo: "/icons/prisma.svg" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", logo: "/icons/postgresql.svg" },
      { name: "MySQL", logo: "/icons/mysql.svg" },
    ],
  },
  {
    title: "Cloud + Deploy",
    items: [
      { name: "Vercel", logo: "/icons/vercel.svg" },
      { name: "Railway", logo: "/icons/railway.svg" },
      { name: "Docker (basic)", logo: "/icons/docker.svg" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", logo: "/icons/git.svg" },
      { name: "Postman", logo: "/icons/postman.svg" },
      { name: "Figma", logo: "/icons/figma.svg" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <>
      <section className="relative px-6 sm:px-12 lg:px-20 xl:px-28 pb-16">
        <Fireflies />
        <section className="px-6 sm:px-12 lg:px-20 xl:px-28 pb-16 pt-24 md:pt-28 lg:pt-32 text-center">
          <section className="relative z-10 text-center  pb-10">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Skills
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-white/70 text-sm sm:text-base leading-relaxed">
              Frontend-focused, product-minded engineer. I build modern Next.js
              apps with clean UI systems, production-ready auth, and scalable
              data flows.
            </p>

            <div
              className=" mt-6 flex gap-4 sm:gap-5 md:gap-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-2 -mx-2
                          md:flex-wrap md:justify-center md:overflow-visible md:snap-none md:px-0 md:mx-0 scrollbar-none"
            >
              {[
                "UI Systems",
                "Auth + NextAuth",
                "API Integration",
                "Performance",
                "Accessibility",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {chip}
                </span>
              ))}
            </div>
          </section>

          {skillShelves.map((row, idx) => (
            <div key={row.title} className="mb-16 md:mb-16">
              <h2 className="mb-8 text-3xl font-semibold">
                <span className="relative inline-block pb-2">
                  {/* semicircle glow (alternating sides) */}
                  <span
                    className={[
                      "pointer-events-none absolute z-0 top-1/2 -translate-y-1/2",
                      "h-10 w-24 blur-[14px] opacity-60",
                      "bg-linear-to-r from-red-600/60 via-red-400/25 to-transparent",
                      idx % 2 === 0 ? "-left-10" : "-right-10 scale-x-[-1]",
                    ].join(" ")}
                  />

                  {/* title text */}
                  <span className="inline-block border-b-2 border-red-600 pb-2">
                    {row.title}
                  </span>
                </span>
              </h2>

              <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-10">
                {row.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      group relative shrink-0 snap-start
                      w-35 h-42.5
                      sm:w-37.5 sm:h-46.25
                      md:w-40 md:h-50
                      lg:w-42.5 lg:h-52.5
                      transition duration-200 ease-out
                      hover:scale-[1.04]
                    "
                  >
                    {/* Outer glow */}
                    <div
                      className="
                      pointer-events-none absolute -inset-1.5
                      opacity-60 group-hover:opacity-100
                      transition-opacity duration-300
                      blur-[10px]
                      bg-linear-to-r from-red-600/55 via-red-400/25 to-red-600/55
                    "
                    />

                    {/* Card */}
                    <div
                      className="
                        relative flex h-full w-full flex-col
                        items-center justify-center gap-3
                        bg-linear-to-b from-neutral-800 to-neutral-900 border border-white/10
                      "
                    >
                      <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent opacity-50 group-hover:opacity-100 transition" />

                      {(() => {
                        const Icon = skillIconMap[skill.name];

                        return Icon ? (
                          <Icon
                            className="
                          relative z-10 h-9 w-9
                          text-[#b51b23]
                          drop-shadow-[0_0_6px_rgba(229,9,20,0.45)]
                          transition duration-300
                          group-hover:drop-shadow-[0_0_14px_rgba(229,9,20,0.75)]
                        "
                          />
                        ) : null;
                      })()}

                      <p className="relative z-10 text-xl font-semibold text-white text-center px-2">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
