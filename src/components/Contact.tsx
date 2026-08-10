"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Reveal from "./motion/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message."
      );
    }
  }

  return (
    <section id="contact" className="mt-1 px-2.5 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-2.5 py-2">
        <SectionTitle>Get In Touch</SectionTitle>
        <Reveal>
          <form className="mx-auto max-w-[600px]" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="mb-2.5 block text-ink">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded border border-border bg-slate-800/95 p-3 text-ink focus:border-accent focus:shadow-[0_0_0_3px_rgba(66,153,225,0.1)] focus:outline-none"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="mb-2.5 block text-ink">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded border border-border bg-slate-800/95 p-3 text-ink focus:border-accent focus:shadow-[0_0_0_3px_rgba(66,153,225,0.1)] focus:outline-none"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="mb-2.5 block text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded border border-border bg-slate-800/95 p-3 text-ink focus:border-accent focus:shadow-[0_0_0_3px_rgba(66,153,225,0.1)] focus:outline-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="rounded-lg border border-white/20 bg-white/10 px-8 py-3 text-white shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>
            {status === "success" && (
              <p className="mt-4 text-sm text-emerald-400">
                Thanks! Your message has been sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
