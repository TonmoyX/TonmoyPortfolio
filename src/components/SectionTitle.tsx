"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mx-2.5 mb-8 flex items-center text-2xl text-ink md:text-3xl"
    >
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="ml-4 block h-px max-w-[80px] flex-1 bg-accent sm:ml-5 sm:max-w-[300px]"
      />
    </motion.h2>
  );
}
