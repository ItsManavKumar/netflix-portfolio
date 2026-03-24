// app/recruiter/skills/page.tsx  (or pages/recruiter/skills.tsx)

type Skill = {
  name: string;
  level: number; // 1–5 bars
};

type SkillCategory = {
  title: string;
  icon: string;
  color: string; // tailwind accent for the category badge
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    title: "Data & Analytics",
    icon: "📊",
    color: "bg-red-700",
    skills: [
      { name: "SQL", level: 5 },
      { name: "Tableau", level: 4 },
      { name: "Power BI", level: 4 },
      { name: "Excel / Google Sheets", level: 4 },
      { name: "Python (Pandas, NumPy)", level: 3 },
      { name: "Data Visualisation", level: 4 },
      { name: "ETL / Data Pipelines", level: 3 },
      { name: "A/B Testing & Analysis", level: 3 },
    ],
  },
  {
    title: "Frontend",
    icon: "🖥️",
    color: "bg-blue-700",
    skills: [
      { name: "React / Next.js", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "JavaScript (ES6+)", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "HTML / CSS", level: 5 },
      { name: "Responsive Design", level: 4 },
    ],
  },
  {
    title: "Backend & Databases",
    icon: "⚙️",
    color: "bg-green-700",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "REST APIs", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "MySQL", level: 4 },
      { name: "Firebase", level: 3 },
      { name: "Supabase", level: 3 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    color: "bg-yellow-700",
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "Vercel", level: 4 },
      { name: "Jira / Agile", level: 4 },
      { name: "Figma", level: 3 },
      { name: "IoT / Raspberry Pi", level: 3 },
      { name: "Generative AI / LLMs", level: 3 },
    ],
  },
];

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-[3px] w-5 rounded-full transition-all ${
            i < level ? "bg-red-500" : "bg-white/15"
          }`}
        />
      ))}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-12 lg:px-20 xl:px-28 py-24">
      {/* Header */}
      <div className="mb-12">
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Skills & Expertise
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          What I Bring to the Table
        </h1>
        <p className="mt-4 text-white/60 max-w-xl text-sm sm:text-base leading-relaxed">
          A blend of full-stack development and data analytics — built through
          internships, projects, and a Software Engineering degree at UTS.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition duration-200"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <span
                className={`${cat.color} px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider`}
              >
                {cat.title}
              </span>
            </div>

            {/* Skills List */}
            <ul className="space-y-4">
              {cat.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-sm text-white/80">{skill.name}</span>
                  <SkillBar level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 flex flex-wrap gap-4">
        <a
          href="/recruiter/experience"
          className="inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition"
        >
          ▶ View Experience
        </a>
        <a
          href="/resume/Manav_Kumar_SoftwareDeveloper_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-white/10 border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15 transition"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </main>
  );
}