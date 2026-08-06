import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { ThemeProvider } from "./context/ThemeContext";
import { useKonamiCode } from "./hooks/useKonamiCode";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Navbar } from "./components/Navbar";
import { CommandPalette } from "./components/CommandPalette";
import { Footer } from "./components/Footer";
import { SpotlightCursor } from "./components/SpotlightCursor";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { ProjectArchive } from "./pages/ProjectArchive";
import { NotFound } from "./pages/NotFound";

import { Testimonials } from "./sections/Testimonials";

function MainSite() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gh-blue origin-left z-[60]"
        style={{ scaleX }}
      />
      <Navbar />
      <main id="main-content" className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


function AppContent() {
  useKonamiCode();

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gokul Ramachandran',
    url: 'https://gokulramachandran.com',
    jobTitle: 'Software Engineer & AI Developer',
    almaMater: 'VIT Chennai',
    sameAs: [
      'https://github.com/gokulra2006-del',
      'https://www.linkedin.com/in/gokul-r-513299327/',
    ],
    knowsAbout: ['React', 'TypeScript', 'Node.js', 'Python', 'Machine Learning', 'Cybersecurity', 'Cloud Computing'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gokul Ramachandran Portfolio',
    url: 'https://gokulramachandran.com',
  };

  return (
    <div className="relative min-h-screen bg-gh-bg text-gh-text selection:bg-gh-blue/30 selection:text-gh-blue overflow-x-hidden cursor-default transition-colors duration-300">
      <SpotlightCursor />
      <Helmet>
        <title>Gokul Ramachandran | Software Engineer & AI Developer</title>
        <meta name="description" content="Portfolio of Gokul Ramachandran, a Software Engineer and AI/Full-Stack Developer building scalable web applications and AI-driven platforms." />
        <link rel="canonical" href="https://gokulramachandran.com/" />
        
        {/* OpenGraph Meta */}
        <meta property="og:title" content="Gokul Ramachandran | Software Engineer & AI Developer" />
        <meta property="og:description" content="Software Engineer & AI Developer building scalable web applications, RAG agents, and cloud platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gokulramachandran.com/" />
        <meta property="og:image" content="https://gokulramachandran.com/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gokul Ramachandran | Software Engineer & AI Developer" />
        <meta name="twitter:description" content="Software Engineer & AI Developer building scalable web applications, RAG agents, and cloud platforms." />
        <meta name="twitter:image" content="https://gokulramachandran.com/og.png" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>

      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/archive" element={<ProjectArchive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <CommandPalette />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}


function App() {
  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen bg-gh-bg text-gh-text flex flex-col items-center justify-center gap-4 p-8 font-mono">
          <p className="text-lg">Something went wrong.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-lg border border-gh-blue/50 text-gh-blue hover:bg-gh-blue/10 transition-colors"
          >
            Reload page
          </button>
        </div>
      }
    >
      <ThemeProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;



