import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiHtml5,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiPostman,
  SiFigma,
  SiVercel,
  SiRailway,
  SiPrisma,
} from "react-icons/si";

import { FaServer } from "react-icons/fa";

export const skillIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  "Sass": SiSass,
  "HTML & CSS": SiHtml5,

  "Node.js": SiNodedotjs,
  "REST APIs": FaServer,
  "NextAuth": SiNextdotjs,
  "Prisma": SiPrisma,

  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,

  "Docker (basic)": SiDocker,
  "Git": SiGit,
  "Postman": SiPostman,
  "Figma": SiFigma,

  "Vercel": SiVercel,
  "Railway": SiRailway,
};
