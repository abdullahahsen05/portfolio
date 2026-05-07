import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SkillsStrip from "@/components/SkillsStrip";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <SkillsStrip />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
