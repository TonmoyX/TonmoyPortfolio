"use client";

import { motion } from "framer-motion";
import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SOCIALS = [
  { href: "https://github.com/TonmoyX", title: "GitHub", Icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/morshed-alam-237214279/",
    title: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  { href: "https://x.com/Morshed652", title: "Twitter", Icon: FaXTwitter },
  // { href: "mailto:morshed0173@gmail.com", title: "Gmail", Icon: MdEmail },
  // {
  //   href: "https://www.facebook.com/morshed.allam.50",
  //   title: "Facebook",
  //   Icon: FaFacebookF,
  // },
  // { href: "https://discord.gg/yhRtpSg5", title: "Discord", Icon: FaDiscord },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-6 ${className}`}>
      {SOCIALS.map(({ href, title, Icon }) => (
        <motion.a
          key={title}
          href={href}
          target="_blank"
          rel="noreferrer"
          title={title}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md transition-colors duration-300 hover:border-accent/40 hover:bg-white/20 hover:text-accent hover:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(255,255,255,0.05)]"
        >
          <Icon size={22} />
        </motion.a>
      ))}
    </div>
  );
}
