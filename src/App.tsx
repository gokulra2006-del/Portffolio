import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from "./components/Navbar";
import { CommandPalette } from "./components/CommandPalette";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-gh-bg text-gh-text selection:bg-gh-blue/30 selection:text-gh-blue overflow-x-hidden cursor-default">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gh-blue origin-left z-[60]"
        style={{ scaleX }}
      />
      <Helmet>
        <title>Gokul Ramachandran | Software Engineer & AI Developer</title>
        <meta name="description" content="Portfolio of Gokul Ramachandran, a Software Engineer and AI/Full-Stack Developer building scalable web applications and AI-driven platforms." />
        <meta property="og:title" content="Gokul Ramachandran | Software Engineer" />
        <meta property="og:description" content="Portfolio of Gokul Ramachandran, a Software Engineer and AI/Full-Stack Developer building scalable web applications and AI-driven platforms." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>



      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
      <CommandPalette />
      <Analytics />
    </div>
  );
}

export default App;
