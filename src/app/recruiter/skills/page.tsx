const skillShelves = [
  {
    title: "Frontend Stack",
    items: [
      { name: "TypeScript", logo: "/icons/typescript.svg" },
      { name: "React", logo: "/icons/react.svg" },
      { name: "Next.js", logo: "/icons/nextdotjs.svg" },
      { name: "Tailwind CSS", logo: "/icons/tailwindcss.svg" },
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
      <section className="px-6 sm:px-12 lg:px-20 xl:px-28 pb-16 pt-24 md:pt-28 lg:pt-32 text-center">
        {skillShelves.map((row) => (
          <div key={row.title} className="mb-16 md:mb-20">
            <h2 className="mb-8 text-2xl font-semibold">
              <span className="inline-block border-b-2 border-red-600 pb-2">
                {row.title}
              </span>
            </h2>

            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">

              {row.items.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    group relative
                    h-[130px] sm:h-[150px] md:h-[170px]
                    transition duration-200 ease-out
                    hover:scale-[1.04]
                  "
                >
                  {/* OUTSIDE glow (no animation) */}
                  <div
                    className="
                      pointer-events-none absolute -inset-[3px]
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
                      bg-neutral-800 border border-white/10
                    "
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent opacity-50 group-hover:opacity-100 transition" />

                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="
                        relative z-10 h-8 w-8 object-contain
                        opacity-25 saturate-0
                        transition duration-300
                        group-hover:opacity-70 group-hover:saturate-100
                        group-hover:[filter:drop-shadow(0_0_10px_rgba(229,9,20,0.55))]
                      "
                    />

                    <p className="relative z-10 text-sm font-semibold text-white text-center px-2">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
