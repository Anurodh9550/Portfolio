import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import EducationSection from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Marquee from "@/components/marquee";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <EducationSection />
      <Contact />
      <Footer />
    </main>
  );
}
