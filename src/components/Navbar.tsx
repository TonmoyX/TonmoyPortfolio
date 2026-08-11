"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const PRIMARY_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const MORE_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
];

function NavLink({
  href,
  children,
  onClick,
  large,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  large?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative flex items-center pb-1 text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:after:w-full ${
        large ? "justify-center py-3 text-xl" : "text-base"
      }`}
    >
      {children}
    </a>
  );
}

function MoreDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="group relative">
      <button
        className="relative flex items-center gap-1 pb-1 bg-transparent text-base text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:after:w-full"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        More
        <IoIosArrowDown
          className={`transition-transform group-hover:rotate-180 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`absolute right-0 top-full z-[100] mt-1 flex min-w-[160px] flex-col gap-1 rounded-md bg-panel/[.99] py-2 shadow-[0_2px_8px_rgba(0,0,0,0.3)] opacity-0 invisible pointer-events-none transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto ${
          open ? "visible opacity-100 pointer-events-auto" : ""
        }`}
      >
        {MORE_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-white transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

const menuLinks: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const menuLink: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(72);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const update = () => setNavHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 z-[100] w-full bg-panel/50 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.3)] backdrop-blur-md"
      >
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-2.5 py-2">
          <div>
            <Image
              src="/images/tonmoyy.png"
              alt="logo"
              width={220}
              height={60}
              className="mt-1 h-auto w-[clamp(130px,38vw,350px)]"
            />
          </div>
          <button
            className="relative z-[101] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-[2px] w-5 rounded-full bg-accent"
            />
            <motion.span
              animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute h-[2px] w-5 rounded-full bg-accent"
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-[2px] w-5 rounded-full bg-accent"
            />
          </button>
          <div className="hidden items-center gap-7 md:flex">
            {PRIMARY_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <MoreDropdown />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <div
            style={{ top: navHeight }}
            className="fixed inset-x-0 bottom-0 z-[150] bg-black/50 md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-4 mt-3 max-h-[70vh] overflow-y-auto rounded-2xl border border-border bg-panel shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={menuLinks}
                className="flex flex-col items-center gap-1 px-4 py-4"
              >
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.href} variants={menuLink} className="w-full">
                    <NavLink href={link.href} onClick={() => setOpen(false)} large>
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
