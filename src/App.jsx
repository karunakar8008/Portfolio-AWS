import { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import TechMarquee from "./components/TechMarquee";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { ScrollProgress, ParallaxOrbs } from "./components/Motion";
import { useTheme } from "./hooks";

export default function App() {
  const { theme, toggle } = useTheme();
  const [chatOpen, setChatOpen] = useState(false);
  const openChat = () => setChatOpen(true);

  // Momentum smooth-scrolling (Lenis) + smooth anchor navigation.
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    let raf = 0;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // When the document is hidden (e.g. an embedded preview pane), rAF is
    // throttled — pause Lenis so native scrolling still works; resume when visible.
    const onVisibility = () => (document.hidden ? lenis.stop() : lenis.start());
    document.addEventListener("visibilitychange", onVisibility);
    onVisibility();

    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -72 });
        }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", onVisibility);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <ScrollProgress />
      <ParallaxOrbs />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero onOpenChat={openChat} />
        <Summary />
        <TechMarquee />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Certifications />
        <Education />
        <Contact onOpenChat={openChat} />
      </main>
      <Footer />
      <Chatbot open={chatOpen} onOpen={openChat} onClose={() => setChatOpen(false)} />
    </>
  );
}
