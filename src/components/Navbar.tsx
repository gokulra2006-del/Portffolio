import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useRecruiterMode } from '../context/RecruiterContext';

const NAV_ITEMS = [
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.to));
      let current = '';

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            current = section.id;
          }
        }
      }

      if (window.scrollY < 300) {
        current = ''; // Hero section
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 }
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          aria-label="Main Navigation"
          className={`pointer-events-auto flex items-center justify-between px-5 py-2 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-gh-bg/90 backdrop-blur-md border border-gh-border shadow-xl'
              : 'bg-transparent'
          }`}
        >
          {/* Logo / Initials */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="text-base font-bold text-gh-text hover:text-gh-blue transition-colors mr-6 font-mono p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue rounded-lg"
            aria-label="Go to top / Hero section"
          >
            GR
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`#${item.to}`}
                onClick={(e) => handleNavClick(e, item.to)}
                className="relative px-3.5 py-2 text-xs font-mono font-medium transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue rounded-lg"
              >
                <span
                  className={`relative z-10 transition-colors ${
                    activeSection === item.to
                      ? 'text-gh-blue font-semibold'
                      : 'text-gh-text-muted group-hover:text-gh-text'
                  }`}
                >
                  {item.name}
                </span>
                {activeSection === item.to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gh-blue/10 rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Recruiter Mode Toggle */}
            <button
              type="button"
              onClick={toggleRecruiterMode}
              className={`ml-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 border ${
                isRecruiterMode
                  ? 'bg-amber-400/10 text-amber-400 border-amber-400/30'
                  : 'text-gh-text-muted hover:text-gh-text border-gh-border/60 hover:border-gh-blue/40'
              }`}
              title="Toggle concise, recruiter-scannable portfolio view"
            >
              <span className={`w-2 h-2 rounded-full ${isRecruiterMode ? 'bg-amber-400' : 'bg-gh-text-muted'}`} />
              <span>{isRecruiterMode ? 'Recruiter Mode (On)' : 'Recruiter View'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gh-text-muted hover:text-gh-text hover:bg-gh-border/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Resume Action */}
            <a
              href="/resume"
              className="ml-2 text-xs font-mono font-semibold text-gh-bg bg-gh-text hover:opacity-90 transition-opacity px-3.5 py-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue"
            >
              Resume
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg text-gh-text-muted hover:text-gh-text transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="text-gh-text p-2.5 rounded-lg hover:bg-gh-border/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            id="mobile-navigation"
            role="menu"
            aria-label="Mobile Navigation"
            className="fixed top-20 left-4 right-4 z-40 bg-gh-bg-secondary/95 backdrop-blur-xl border border-gh-border rounded-2xl p-4 flex flex-col gap-1.5 shadow-2xl md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`#${item.to}`}
                onClick={(e) => handleNavClick(e, item.to)}
                role="menuitem"
                className={`text-sm font-medium py-3 px-4 rounded-xl transition-colors min-h-[44px] flex items-center ${
                  activeSection === item.to
                    ? 'bg-gh-blue/10 text-gh-blue font-semibold'
                    : 'text-gh-text-muted hover:text-gh-text hover:bg-gh-border/20'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleRecruiterMode();
                setIsMobileMenuOpen(false);
              }}
              role="menuitem"
              className={`text-sm font-medium py-3 px-4 rounded-xl transition-colors min-h-[44px] flex items-center justify-between border ${
                isRecruiterMode
                  ? 'bg-amber-400/10 text-amber-400 border-amber-400/30'
                  : 'text-gh-text-muted hover:text-gh-text border-gh-border/60'
              }`}
            >
              <span>Recruiter Mode</span>
              <span className="font-mono text-xs">{isRecruiterMode ? 'ON' : 'OFF'}</span>
            </button>
            <a
              href="/resume"
              role="menuitem"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-1 text-center text-sm font-medium text-gh-bg bg-gh-text hover:opacity-90 transition-opacity py-3 rounded-xl min-h-[44px] flex items-center justify-center font-mono"
            >
              Print-Friendly Resume Page
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
