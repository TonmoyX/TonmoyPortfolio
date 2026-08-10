import StarCanvas from "@/components/StarCanvas";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StarCanvas />
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}
