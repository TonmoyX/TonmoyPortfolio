"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import RoleRotator from "./motion/RoleRotator";

const ease = [0.22, 1, 0.36, 1] as const;

const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Competitive Programmer",
];

const MAX_ROLE_CHARS = Math.max(...ROLES.map((role) => role.length));

export default function Header() {
  return (
    <header className="relative flex min-h-[60vh] items-center overflow-hidden px-0 py-2.5 pt-24">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-2.5 py-4 text-center md:flex-row md:justify-between md:gap-10 md:text-left">
        <div className="min-w-0 flex-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-5 flex items-center justify-center gap-2 text-base text-ink-muted md:justify-start"
          >
            <motion.span
              animate={{ rotate: [0, 18, -10, 18, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="animate-gradient-x mb-3 bg-gradient-to-r from-heading via-accent to-heading bg-clip-text text-2xl font-bold text-transparent sm:whitespace-nowrap sm:text-5xl md:text-4xl lg:text-5xl xl:text-[60px]"
          >
            Morshed Alam Tonmoy
          </motion.h1>
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mb-5 flex justify-center md:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-base text-accent shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md sm:text-lg md:text-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span
                className="inline-block overflow-hidden whitespace-nowrap text-left"
                style={{ width: `${MAX_ROLE_CHARS}ch` }}
              >
                <RoleRotator words={ROLES} />
              </span>
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="mx-auto mb-7 max-w-[540px] text-sm leading-relaxed text-ink sm:text-base md:mx-0 md:text-lg"
          >
            I&apos;m a web design and developer specializing in building
            exceptional digital experiences. Currently, I&apos;m focused on
            building accessible, human-centered products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            <SocialLinks className="justify-center md:justify-start" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="relative flex-none md:ml-auto mt-5"
        >
          <div className="animate-float relative mx-auto h-[280px] w-[280px] sm:h-[220px] sm:w-[220px] md:h-[240px] md:w-[240px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px]">
            <div className="animate-spin-slow absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,var(--color-accent),transparent_40%,var(--color-accent))] opacity-70" />
            <div className="absolute inset-0 overflow-hidden rounded-full border-[3px] border-ink bg-slate-50 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/Tonmoy.jpg"
                alt="Morshed Alam Tonmoy"
                width={350}
                height={350}
                priority
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
