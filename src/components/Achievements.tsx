"use client";

import Image from "next/image";
import { FaTrophy } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";

const ACHIEVEMENTS = [
  {
    image: "/images/PH_Certificate.png",
    title: "Programming Hero",
    description: "[Complete Web Development Course Certificate]",
  },
  {
    image: "/images/5th.jpg",
    title: "University Of Scholars (IUPC)",
    description: "[5th Intra University Programming Contest]",
  },
  {
    image: "/images/4th.jpg",
    title: "University Of Scholars (IUPC)",
    description: "[4th Intra University Programming Contest]",
  },
  {
    image: "/images/PH1st.jpg",
    title: "Programming Hero",
    description: "[Web Development Contest]",
  },
  // {
  //   image: "/images/parjatan.JPG",
  //   title: "Ministry Of Civil Aviation & Tourism",
  //   description:
  //     "[National Hotel And Tourism Training Institute Bangladesh Parjatan Corporation]",
  // },
  // {
  //   image: "/images/inoglove.jpg",
  //   title: "InnoGlove",
  //   description: "[Tour Planners Limited Intership Certificate]",
  // },
];

export default function Achievements() {
  return (
    <section id="achievements" className="mt-1 px-2.5 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-2.5 py-2">
        <SectionTitle>Achievements</SectionTitle>
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item) => (
            <StaggerItem key={item.title + item.image}>
              <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-xl border border-border bg-panel/80 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_28px_rgba(66,153,225,0.2)] md:p-6">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-dark to-accent" />
                <div className="relative mb-4 aspect-[4/3] w-full max-w-[420px] overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_2px_10px_rgba(66,153,225,0.15)]">
                  <Image
                    src={item.image}
                    alt="Achievement Photo"
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 768px) 45vw, 420px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="absolute -left-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-panel bg-accent text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                    <FaTrophy size={14} />
                  </span>
                </div>
                <h3 className="mb-1 text-center text-base font-medium text-heading sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-center text-xs text-ink-muted sm:text-sm">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
