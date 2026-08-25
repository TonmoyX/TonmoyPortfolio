"use client";

import { useEffect, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMusic } from "react-icons/fa6";

const AUDIO_SRC = "/audio/theme.m4a";
const STORAGE_KEY = "bg-music-playing";

let audio: HTMLAudioElement | null = null;
let playing = false;
let initialized = false;
const listeners = new Set<() => void>();

function getAudio() {
  if (!audio && typeof window !== "undefined") {
    audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0.35;
  }
  return audio;
}

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return playing;
}

function getServerSnapshot() {
  return false;
}

function setPlaying(next: boolean) {
  playing = next;
  notify();
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
  }
}

async function togglePlay() {
  const el = getAudio();
  if (!el) return;
  if (playing) {
    el.pause();
    setPlaying(false);
    return;
  }
  try {
    await el.play();
    setPlaying(true);
  } catch {
    setPlaying(false);
  }
}

function initFromStorage() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  if (localStorage.getItem(STORAGE_KEY) === "1") {
    const el = getAudio();
    el?.play().then(
      () => setPlaying(true),
      () => setPlaying(false)
    );
  }
}

function EqualizerBars() {
  const bars = [0.9, 1.2, 0.75];
  return (
    <div className="flex h-4 items-end justify-center gap-[3px]">
      {bars.map((delay, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-accent"
          animate={{ height: ["35%", "100%", "45%", "85%", "35%"] }}
          transition={{
            duration: 0.9 + delay * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}
    </div>
  );
}

export default function AudioToggle({ className = "" }: { className?: string }) {
  const isPlaying = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    initFromStorage();
  }, []);

  return (
    <motion.button
      type="button"
      onClick={togglePlay}
      aria-label={isPlaying ? "Mute background music" : "Play background music"}
      title={isPlaying ? "Mute music" : "Play music"}
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`relative flex h-10 w-10 flex-none items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-300 ${
        isPlaying
          ? "border-accent/60 bg-accent/20 text-accent shadow-[0_0_18px_rgba(66,153,225,0.55)]"
          : "border-accent/30 bg-accent/10 text-accent shadow-[0_0_10px_rgba(66,153,225,0.25)] hover:border-accent/50 hover:bg-accent/20"
      } ${className}`}
    >
      <span
        className="absolute -inset-1 -z-10 animate-ping rounded-full bg-accent/25"
        style={{ animationDuration: isPlaying ? "1.4s" : "2.6s" }}
      />
      {isPlaying && (
        <span className="absolute -inset-2 -z-10 rounded-full bg-accent/20 blur-md" />
      )}
      <AnimatePresence mode="wait" initial={false}>
        {isPlaying ? (
          <motion.span
            key="bars"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            <EqualizerBars />
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -3, 0],
              rotate: [0, -10, 8, 0],
            }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
              y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="flex items-center justify-center"
          >
            <FaMusic size={15} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
