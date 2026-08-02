import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gh-bg text-gh-text selection:bg-gh-blue/30 selection:text-gh-blue overflow-x-hidden cursor-default">
      <Helmet>
        <title>Gokul | Software Engineer & AI Developer</title>
        <meta name="description" content="Portfolio of Gokul, a Software Engineer and AI/Full-Stack Developer building scalable web applications and AI-driven platforms." />
        <meta property="og:title" content="Gokul | Software Engineer" />
        <meta property="og:description" content="Portfolio of Gokul, a Software Engineer and AI/Full-Stack Developer building scalable web applications and AI-driven platforms." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Custom Cursor (hidden on small screens) */}
      <div 
        className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ease-out hidden md:block ${isHovering ? 'scale-150 bg-gh-blue' : 'scale-100 bg-white'}`}
        style={{ transform: `translate(${mousePos.x - 12}px, ${mousePos.y - 12}px) ${isHovering ? 'scale(1.5)' : 'scale(1)'}` }}
      />

      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
