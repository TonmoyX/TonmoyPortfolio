import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSublimetext,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { DiCss3Full, DiHtml5, DiJava, DiVisualstudio } from "react-icons/di";
import { FaCode, FaDatabase, FaLayerGroup, FaToolbox } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";

type Skill = { name: string; Icon: IconType; color: string };

const CATEGORIES: { title: string; icon: IconType; skills: Skill[] }[] = [
  {
    title: "Languages",
    icon: FaCode,
    skills: [
      { name: "C", Icon: SiC, color: "#283593" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Java", Icon: DiJava, color: "#EA2D2E" },
      { name: "Python", Icon: SiPython, color: "#306998" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Frontend & Framework",
    icon: FaLayerGroup,
    skills: [
      { name: "HTML", Icon: DiHtml5, color: "#E44D26" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "CSS", Icon: DiCss3Full, color: "#1572B6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#212121" },
    ],
  },
  {
    title: "Backend & Database",
    icon: FaDatabase,
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#388E3C" },
      { name: "Express.js", Icon: SiExpress, color: "#212121" },
      { name: "MongoDB", Icon: SiMongodb, color: "#03F602" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    title: "Tools",
    icon: FaToolbox,
    skills: [
      { name: "Git", Icon: SiGit, color: "#F34F29" },
      { name: "GitHub", Icon: SiGithub, color: "#181616" },
      { name: "VsCode", Icon: DiVisualstudio, color: "#0065A9" },
      { name: "Sublime Text", Icon: SiSublimetext, color: "#F89820" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", Icon: SiVercel, color: "#000000" },
      // { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-1 px-2.5 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-2.5 py-2">
        <SectionTitle>Skills</SectionTitle>
        <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {CATEGORIES.map((category) => (
            <StaggerItem key={category.title}>
              <div className="group relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-border bg-panel/80 p-5 pt-6 shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_28px_rgba(66,153,225,0.2)] md:p-6">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-dark to-accent" />
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <category.icon size={18} />
                  </span>
                  <h3 className="text-lg font-semibold text-accent md:text-xl">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(({ name, Icon, color }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2.5 rounded-md border border-border bg-slate-800/95 px-4 py-2 text-xs text-ink shadow-[0_1px_4px_rgba(66,153,225,0.15)] transition-all hover:-translate-y-0.5 hover:scale-[1.03] hover:border-accent/40 hover:shadow-[0_4px_12px_rgba(66,153,225,0.2)] sm:text-base"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink">
                        <Icon size={18} color={color} />
                      </span>
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
