import SocialLinks from "./SocialLinks";
import Reveal from "./motion/Reveal";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-panel/95 py-8">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-2.5">
        <h2 className="mb-2.5 text-xl text-accent font-extrabold">Contact Me</h2>
        <div className="mb-2 text-center text-base text-white">
          Phone:{" "}
          <a href="tel:01739348696" className="text-accent no-underline">
            017 3934-8696
          </a>
          <br />
          Email:{" "}
          <a
            href="mailto:morshed0173@gmail.com"
            className="text-accent no-underline"
          >
            morshed0173@gmail.com
          </a>
        </div>
        <SocialLinks className="mb-2.5" />
        <div className="mt-2.5 text-sm text-white">
          &copy; Morshed Alam Tonmoy | All rights reserved 2026
        </div>
      </Reveal>
    </footer>
  );
}
