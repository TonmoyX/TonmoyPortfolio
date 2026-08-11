"use client";

import { useState } from "react";
import { FaBriefcase, FaBuilding, FaRegCalendar } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";

const EXPERIENCE = [
  {
    title: "Junior Software Engineer",
    company: "Dream Prospects",
    date: "July 2026 - Present",
    bullets: [
      "Developed and maintained web applications using Django, Next.js, DotNet, and PostgreSQL, resulting in a 60% increase in user engagement.",
      "Implemented RESTful APIs and integrated third-party services, enhancing application functionality and user experience.",
      "Collaborated with cross-functional teams to design and implement new features, improving overall product quality and performance.",
    ],
  },
  {
    title: "Web Developer As An Intern",
    company: "Digi5 LTD.",
    date: "September 2025 - January 2026",
    bullets: [
      "Architected and implemented scalable frontend services using React, Tailwind CSS.",
      "Optimized backend services with Node.js and Express, improving response times by 40%.",
      "Led development of key features that increased user engagement by 65%",
    ],
  },
  // {
  //   title: "Head Of Management & Visa Processing Officer",
  //   company: "Belal Travels",
  //   date: "May 2023 - June 2025",
  //   bullets: [
  //     "Completed over 50+ Europe Schengen and Non-Schengen visa processing successfully.",
  //     "Support client 24/7 for Air ticketing, Hotel booking and Tour plan.",
  //   ],
  // },
];

type ExperienceItem = (typeof EXPERIENCE)[number];

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false);
  const bullets = expanded ? item.bullets : item.bullets.slice(0, 1);

  return (
    <div className="group relative mb-7 overflow-hidden rounded-xl border border-border bg-panel/80 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_28px_rgba(66,153,225,0.2)] md:p-7">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-dark to-accent" />
      <FaBriefcase className="pointer-events-none absolute -right-6 -bottom-6 text-[140px] text-accent/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

      <div className="relative flex items-start gap-4">
        <span className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
          <FaBriefcase size={18} />
        </span>
        <div>
          <h3 className="mb-1.5 text-xl text-heading md:text-2xl">
            {item.title}
          </h3>
          <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-base text-accent">
              <FaBuilding size={14} />
              {item.company}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-ink-faint">
              <FaRegCalendar size={13} />
              {item.date}
            </span>
          </div>
          <ul className="space-y-1.5 text-base text-ink-muted">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                {bullet}
              </li>
            ))}
          </ul>
          {item.bullets.length > 1 && (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="mt-2 text-sm font-semibold text-accent"
            >
              {expanded ? "See less" : "See more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mt-1 px-2.5 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-2.5 py-2">
        <SectionTitle>Experience</SectionTitle>
        <StaggerContainer>
          {EXPERIENCE.map((item) => (
            <StaggerItem key={item.title}>
              <ExperienceCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
