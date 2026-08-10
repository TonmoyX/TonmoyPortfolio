"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaEye,
  FaGithub,
  FaGlobe,
  FaLock,
  FaNetworkWired,
  FaXmark,
} from "react-icons/fa6";
import { DiCss3Full, DiHtml5 } from "react-icons/di";
import {
  SiDaisyui,
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiRadixui,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";

const TECH_ICON_MAP: Record<string, { Icon: IconType; color: string }> = {
  Html: { Icon: DiHtml5, color: "#E44D26" },
  CSS: { Icon: DiCss3Full, color: "#1572B6" },
  JS: { Icon: SiJavascript, color: "#F7DF1E" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#F7DF1E" },
  "Next.js": { Icon: SiNextdotjs, color: "#E2E8F0" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Node.js": { Icon: SiNodedotjs, color: "#68A063" },
  "Express.js": { Icon: SiExpress, color: "#E2E8F0" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  JWT: { Icon: SiJsonwebtokens, color: "#E2E8F0" },
  "REST API": { Icon: FaNetworkWired, color: "#4299E1" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  DaisyUI: { Icon: SiDaisyui, color: "#A855F7" },
  "Shadcn/ui": { Icon: SiShadcnui, color: "#E2E8F0" },
  "Radix UI": { Icon: SiRadixui, color: "#E2E8F0" },
  "Better Auth": { Icon: FaLock, color: "#4299E1" },
};

const PROJECTS = [
  {
    title: "HyperXion",
    image: "/images/HyperXion_Work.png",
    stack: "Html • CSS • JS",
    description:
      "HyperXion is a comprehensive educational web platform exploring the cosmos, celestial bodies, and space exploration. Our mission is to democratize access to space science education, making complex astronomical concepts accessible to students of all levels. We aspire to inspire the next generation of astronomers and engineers while fostering scientific literacy and a deeper understanding of our place in the universe.",
    live: "https://tonmoyx.github.io/HyperXion",
    github: "https://github.com/TonmoyX/HyperXion",
  },
  {
    title: "Doctor Appointment",
    image: "/images/DocAppoint.png",
    stack:
      "Html • Next.js • React • Node.js • Express.js • MongoDB • JWT • JavaScript (ES6+) • REST API",
    description:
      "DocAppoint is a full-stack doctor appointment booking system where users can search doctors, view profiles, and book/manage appointments online. It is built using Next.js, React, Node.js, Express.js, and MongoDB with secure JWT authentication and a responsive modern UI.",
    live: "https://docappoint-snowy.vercel.app",
    github: "https://github.com/TonmoyX/DocAppoint-client",
  },
  {
    title: "Dragon News",
    image: "/images/DragonNewsWork.png",
    stack:
      "Next.js • React • Tailwind CSS • DaisyUI • Shadcn/ui • Radix UI • MongoDB • Better Auth",
    description:
      "A modern, full-stack news portal application built with cutting-edge web technologies. Dragon News provides a comprehensive platform for discovering, browsing, and reading news articles organized by category with user authentication and personalized content.",
    live: "https://dragon-news-three-xi.vercel.app",
    github: "https://github.com/TonmoyX/Dragon_News",
  },
];

const MORE_PROJECTS = [
  {
    title: "SunCart",
    image: "/images/SunCartWork.png",
    stack: "Next.js • React • Tailwind CSS • DaisyUI • MongoDB • Better Auth",
    description:
      "A modern, full-stack e-commerce application built with Next.js 16 and MongoDB, featuring secure authentication, product management, and user profiles.",
    live: "https://sun-cart-ivory.vercel.app",
    github: "https://github.com/TonmoyX/Sun_Cart",
  },
  {
    title: "Personal Portfolio",
    image: "/images/PortfoliWork.png",
    stack: "Html • CSS • JS",
    description:
      "A responsive website for showcasing my skills, projects, and experience with modern design and smooth animations.",
    live: "https://tonmoyx.netlify.app",
    github: "https://github.com/TonmoyX/Tonmoy.Portfolio",
  },
  {
    title: "Tawsif Trade International",
    image: "/images/TravelWork.png",
    stack: "Html • CSS • JS",
    description:
      "A responsive website for a travel and tours company providing visa processing, flight bookings, and tour planning.",
    live: "https://tonmoyx.github.io/Tawsif-Trade-Ineternational",
    github: "https://github.com/TonmoyX/Tawsif-Trade-Ineternational",
  },
];

type Project = (typeof PROJECTS)[number];

const ALL_PROJECTS = [...PROJECTS, ...MORE_PROJECTS];

function TechBadges({
  stack,
  compact,
}: {
  stack: string;
  compact: boolean;
}) {
  const techs = stack.split("•").map((t) => t.trim());
  const visible = compact ? techs.slice(0, 4) : techs;
  const remaining = techs.length - visible.length;

  return (
    <div className={`mb-3 flex flex-wrap gap-1.5 ${compact ? "" : "gap-2"}`}>
      {visible.map((tech) => {
        const match = TECH_ICON_MAP[tech];
        return (
          <span
            key={tech}
            className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 text-ink-muted ${
              compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
            }`}
          >
            {match && <match.Icon size={compact ? 10 : 12} color={match.color} />}
            {tech}
          </span>
        );
      })}
      {remaining > 0 && (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-ink-faint">
          +{remaining}
        </span>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  onViewDetails,
  compact = false,
}: {
  project: Project;
  onViewDetails: () => void;
  compact?: boolean;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-panel/80 shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_28px_rgba(66,153,225,0.2)]">
      <span className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-accent via-accent-dark to-accent" />
      <div
        className={`relative w-full overflow-hidden bg-border ${
          compact ? "h-[120px]" : "h-[200px]"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} Project`}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live
        </span> */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <FaEye /> Preview
          </span>
        </div>
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-6"}`}>
        <h3
          className={`mb-2 font-bold text-heading ${
            compact ? "text-base" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <TechBadges stack={project.stack} compact={compact} />
        <p
          className={`mb-4 line-clamp-2 flex-1 leading-relaxed text-ink-muted ${
            compact ? "text-[13px]" : "text-[15px]"
          }`}
        >
          {project.description}
        </p>
        <button
          type="button"
          onClick={onViewDetails}
          className={`group/btn mt-auto flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-accent font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_4px_12px_rgba(66,153,225,0.3)] ${
            compact ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm"
          }`}
        >
          View Details
          <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <section id="projects" className="mt-1 px-2.5 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-2.5 py-2">
        <SectionTitle>Featured Projects</SectionTitle>
        <StaggerContainer className="mb-8 grid grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard
                project={project}
                onViewDetails={() => setSelected(project)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="flex justify-center">
          <motion.button
            type="button"
            onClick={() => setShowAllModal(true)}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="rounded-md border border-accent px-6 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white hover:shadow-[0_4px_12px_rgba(66,153,225,0.3)]"
          >
            View More
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showAllModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setShowAllModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="scrollbar-hide relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-accent/30 bg-panel shadow-[0_0_0_1px_rgba(66,153,225,0.1),0_16px_40px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-panel/95 px-5 py-4 backdrop-blur">
                <h2 className="text-lg font-bold text-heading">
                  All Projects
                  <span className="ml-2 text-sm font-normal text-ink-muted">
                    ({ALL_PROJECTS.length})
                  </span>
                </h2>
                <button
                  type="button"
                  onClick={() => setShowAllModal(false)}
                  aria-label="Close"
                  className="text-ink-muted transition-colors hover:text-accent"
                >
                  <FaXmark size={18} />
                </button>
              </div>
              <StaggerContainer className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
                {ALL_PROJECTS.map((project) => (
                  <StaggerItem key={project.title}>
                    <ProjectCard
                      project={project}
                      onViewDetails={() => setSelected(project)}
                      compact
                    />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="scrollbar-hide relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg border border-border bg-panel p-6 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 text-ink-muted transition-colors hover:text-accent"
              >
                <FaXmark size={20} />
              </button>
              <div className="mb-4 h-[200px] w-full overflow-hidden rounded-md bg-border">
                <Image
                  src={selected.image}
                  alt={`${selected.title} Project`}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-heading">
                {selected.title}
              </h3>
              <TechBadges stack={selected.stack} compact={false} />
              <p className="mb-6 text-[15px] leading-relaxed text-ink-muted">
                {selected.description}
              </p>
              <div className="flex gap-3">
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noreferrer"
                  title="Live Demo"
                  className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_4px_12px_rgba(66,153,225,0.3)]"
                >
                  <FaGlobe /> Live
                </a>
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  title="View on GitHub"
                  className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-accent bg-border px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white hover:shadow-[0_4px_12px_rgba(66,153,225,0.3)]"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
