import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { ThemeProvider } from "./context/ThemeContext";
import { RecruiterProvider, useRecruiterMode } from "./context/RecruiterContext";
import { useKonamiCode } from "./hooks/useKonamiCode";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Navbar } from "./components/Navbar";
import { CommandPalette } from "./components/CommandPalette";
import { Footer } from "./components/Footer";
import { SpotlightCursor } from "./components/SpotlightCursor";
import { Hero } from "./sections/Hero";
import { ProofStrip } from "./components/ProofStrip";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { ProjectArchive } from "./pages/ProjectArchive";
import { ResumePage } from "./pages/ResumePage";
import { NotFound } from "./pages/NotFound";

function MainSite() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gh-blue origin-left z-[60]"
        style={{ scaleX }}
      />
      <Navbar />
      {isRecruiterMode && (
        <div className="w-full bg-amber-500/15 border-b border-amber-500/30 pt-20 pb-2.5 px-4 text-xs font-mono text-amber-300 relative z-30">
          <div className="flex flex-wrap items-center justify-between gap-2 max-w-5xl mx-auto">
            <span>⚡ <strong>Recruiter View Active:</strong> Concise 2-screen engineering qualifications and direct project artifacts.</span>
            <button
              type="button"
              onClick={toggleRecruiterMode}
              className="underline hover:text-amber-100 font-semibold cursor-pointer"
            >
              Exit Recruiter View (Show Full Site)
            </button>
          </div>
        </div>
      )}
      <main id="main-content" className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <ProofStrip />
        {!isRecruiterMode && <About />}
        <Projects />
        <Skills />
        <Experience />
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
    url: 'https://portffolio-p0zdfx9af-gokulra2006-dels-projects.vercel.app',
    jobTitle: 'Junior Full-Stack Engineer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'VIT Chennai',
    },
    sameAs: [
      'https://github.com/gokulra2006-del',
      'https://www.linkedin.com/in/gokul-r-513299327/',
    ],
    knowsAbout: ['TypeScript', 'React', 'Node.js', 'Express', 'Python', 'C#', '.NET 8', 'MongoDB', 'REST APIs', 'LLMs'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gokul Ramachandran Portfolio',
    url: 'https://portffolio-p0zdfx9af-gokulra2006-dels-projects.vercel.app',
  };

  return (
    <div className="relative min-h-screen bg-gh-bg text-gh-text selection:bg-gh-blue/30 selection:text-gh-blue overflow-x-hidden cursor-default transition-colors duration-300">
      <SpotlightCursor />
      <Helmet>
        <title>Gokul Ramachandran | Junior Full-Stack Engineer (AI Systems Focus)</title>
        <meta
          name="description"
          content="Junior Full-Stack Engineer building reliable web products and practical AI systems from API design to polished user experience."
        />
        <link rel="canonical" href="https://portffolio-p0zdfx9af-gokulra2006-dels-projects.vercel.app/" />

        {/* OpenGraph Meta */}
        <meta property="og:title" content="Gokul Ramachandran | Junior Full-Stack Engineer" />
        <meta
          property="og:description"
          content="Junior Full-Stack Engineer building reliable web products and practical AI systems from API design to polished user experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portffolio-p0zdfx9af-gokulra2006-dels-projects.vercel.app/" />
        <meta property="og:image" content="https://portffolio-p0zdfx9af-gokulra2006-dels-projects.vercel.app/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gokul Ramachandran | Junior Full-Stack Engineer" />
        <meta
          name="twitter:description"
          content="Junior Full-Stack Engineer building reliable web products and practical AI systems from API design to polished user experience."
        />
        <meta name="twitter:image" content="https://portffolio-p0zdfx9af-gokulra2006-dels-projects.vercel.app/og.png" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>

      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/projects" element={<ProjectArchive />} />
        <Route path="/archive" element={<ProjectArchive />} />
        <Route path="/resume" element={<ResumePage />} />
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
        <RecruiterProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </RecruiterProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
