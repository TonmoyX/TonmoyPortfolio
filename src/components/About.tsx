import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Reveal from "./motion/Reveal";

export default function About() {
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
            <p className="text-base leading-relaxed text-ink">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
