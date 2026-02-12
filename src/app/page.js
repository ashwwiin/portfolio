import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"; // New Import
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <ThemeToggle />
      <Navbar />
      
      <div id="about"><Reveal><Hero /></Reveal></div>
      
      <div id="experience"><Reveal> <Experience /></Reveal></div>
      <div id="education"><Reveal><Education /></Reveal></div>
      <div id="projects"><Reveal><Projects /></Reveal></div>
      <div id="skills"><Reveal><Skills /></Reveal></div>
      {/* Contact is the final goal of the user's visit */}
      <Reveal><Contact /></Reveal>
      
      <Footer />
    </main>
  );
}