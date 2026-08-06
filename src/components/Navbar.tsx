import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90;
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
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -120, opacity: 0 }
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className={`pointer-events-auto flex items-center justify-between px-6 py-2 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-gh-bg/80 backdrop-blur-lg border border-gh-border shadow-2xl'
              : 'bg-transparent'
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="text-lg font-bold cursor-pointer text-gh-text hover:text-gh-blue transition-colors mr-8 font-mono"
          >
            GR
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`#${item.to}`}
                onClick={(e) => handleNavClick(e, item.to)}
                className="relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer group"
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

            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-gh-text-muted hover:text-gh-text hover:bg-gh-border/30 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="/Gokul_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-sm font-medium text-gh-bg bg-gh-text hover:opacity-90 transition-colors px-4 py-2 rounded-lg"
            >
              Resume
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gh-text-muted hover:text-gh-text transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="text-gh-text ml-4 p-1 rounded-md hover:bg-gh-border/30 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 bg-gh-bg-secondary/95 backdrop-blur-xl border border-gh-border rounded-2xl p-4 flex flex-col gap-2 shadow-2xl md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`#${item.to}`}
                onClick={(e) => handleNavClick(e, item.to)}
                className={`text-sm font-medium cursor-pointer transition-colors py-3 px-4 rounded-xl ${
                  activeSection === item.to
                    ? 'bg-gh-blue/10 text-gh-blue font-semibold'
                    : 'text-gh-text-muted hover:text-gh-text hover:bg-gh-border/20'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Gokul_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center text-sm font-medium text-gh-bg bg-gh-text hover:opacity-90 transition-colors py-3 rounded-xl"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


