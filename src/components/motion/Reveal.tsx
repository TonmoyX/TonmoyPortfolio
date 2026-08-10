"use client";

import { motion, type Variants } from "framer-motion";

const DIRECTION_OFFSET: Record<"up" | "down" | "left" | "right", object> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: -40 },
  right: { x: 40 },
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...DIRECTION_OFFSET[direction] },
    show: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
