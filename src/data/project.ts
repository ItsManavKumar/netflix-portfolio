export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  category: "Featured" | "Full-Stack" | "Frontend" | "Tools";
  liveUrl?: string;
  githubUrl?: string;
  poster: string;      // /public/posters/...
  backdrop?: string;   // /public/backdrops/...
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "blog-platform",
    title: "Blog Platform (Dev.to-style)",
    tagline: "Tweet-style posts • profiles • search • auth",
    description:
      "A full-stack blogging platform with infinite scrolling feeds, user profiles, and responsive UI.",
    tech: ["Next.js", "TypeScript", "Tailwind", "NextAuth", "React Query"],
    category: "Featured",
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-repo",
    poster: "/posters/blog.png",
    backdrop: "/backdrops/blog.jpg",
    featured: true,
  },
  {
    slug: "love-lamp",
    title: "Love Lamp",
    tagline: "Long-distance IoT lamp control",
    description:
      "An IoT-style experience that lets couples control lamp colors/brightness remotely with a clean mobile-first UI.",
    tech: ["React Native", "Expo", "Node.js", "API"],
    category: "Full-Stack",
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-repo",
    poster: "/posters/lamp.png",
  },
  {
    slug: "schedule-maker",
    title: "Schedule Maker",
    tagline: "Roster parsing + clean schedule output",
    description:
      "A utility that helps turn roster data into structured schedules for quick planning and exports.",
    tech: ["TypeScript", "Parsing", "Next.js"],
    category: "Tools",
    githubUrl: "https://github.com/your-repo",
    poster: "/posters/schedule.png",
  },
];
