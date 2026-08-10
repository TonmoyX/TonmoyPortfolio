import Image from "next/image";
import { FaGraduationCap, FaLocationDot, FaRegCalendar } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";

const EDUCATION = [
  {
    image: "/images/IUS.png",
    title: "University Of Scholars",
    institute: "Bachelor of Science in Computer Science and Engineering",
    period: "June 2023 - Present",
    location: "Dhaka, Bangladesh",
  },
  // {
  //   image: "/images/GKHHUC.png",
  //   title: "Gridkalindia Hazera Hasmat University College",
  //   institute: "Higher Secondary",
  //   period: "January 2019 - December 2021",
  //   location: "Chandpur, Bangladesh",
  // },
];

export default function Education() {
  return (
    <section id="education" className="mt-1 px-2.5 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-2.5 py-2">
        <SectionTitle>Education</SectionTitle>
        <StaggerContainer className="mx-2.5 flex flex-col gap-5">
          {EDUCATION.map((edu) => {
            const isOngoing = edu.period.toLowerCase().includes("present");
            return (
              <StaggerItem key={edu.title}>
                <div className="group relative font-extrabold flex flex-col gap-5 overflow-hidden rounded-xl border border-border bg-panel/80 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_28px_rgba(66,153,225,0.2)] md:flex-row md:p-6">
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-dark to-accent" />
                  <FaGraduationCap className="pointer-events-none absolute -right-6 -bottom-6 text-[140px] text-accent/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

                  <div className="relative flex h-[200px] flex-none items-center justify-center overflow-hidden rounded-lg bg-white shadow-[0_2px_10px_rgba(66,153,225,0.15)] md:h-auto md:w-[260px]">
                    <Image
                      src={edu.image}
                      alt="Education Photo"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative flex-1 md:flex md:flex-col md:justify-center">
                    <h3 className="mb-3 text-xl text-accent md:text-2xl">
                      {edu.title}
                    </h3>
                    <h4 className="mb-4 text-lg text-ink-muted">
                      {edu.institute}
                    </h4>
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 text-sm text-ink-faint">
                        <FaRegCalendar className="text-accent" />
                        {edu.period}
                      </span>
                      {isOngoing && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                          </span>
                          Ongoing
                        </span>
                      )}
                    </div>
                    <p className="inline-flex items-center gap-2 text-base leading-relaxed text-ink-muted">
                      <FaLocationDot className="text-accent" />
                      {edu.location}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
