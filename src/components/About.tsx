"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Reveal from "./motion/Reveal";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="mt-1 px-2.5 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-2.5 py-2">
        <SectionTitle>About Me</SectionTitle>
        <div className="flex flex-col items-center gap-10 p-5 text-center md:flex-row md:text-left">
          <Reveal direction="left" className="max-w-[500px] flex-1">
            <Image
              src="/images/cod.gif"
              alt="Coding Animation"
              width={500}
              height={300}
              unoptimized
              className="h-auto w-full rounded-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
            />
          </Reveal>
          <Reveal direction="right" delay={0.15} className="flex-1">
            <p
              className={`text-base leading-relaxed text-ink ${
                expanded ? "" : "line-clamp-2 md:line-clamp-none"
              }`}
            >
              I started coding in 2022 and have been consistently building and
              improving my skills in web and software development. I enjoy
              creating dynamic, user-focused applications using modern
              technologies like React, Node.js, and MongoDB.
              <br />
              <br />
              Alongside development, I&apos;m deeply interested in space
              technology and the future of space exploration. My long-term
              goal is to combine software engineering with space-focused
              innovation, and I&apos;m actively working toward that by
              strengthening my technical foundation and building real-world
              projects.
            </p>
            <motion.button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="mt-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-accent shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-white/20 md:hidden"
            >
              {expanded ? "See less" : "See more"}
            </motion.button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
