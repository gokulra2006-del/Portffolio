import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

      if (window.scrollY < 400) {
        current = ''; // Hero section
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between px-6 py-2 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0d1117]/70 backdrop-blur-lg border border-white/10 shadow-2xl'
              : 'bg-transparent'
          }`}
        >
          <a
            href="#hero"
            className="flex items-center gap-2 text-lg font-bold cursor-pointer text-white hover:opacity-80 transition-opacity mr-8 font-mono"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 13 4 H 26 L 17 14 H 27 L 11 28 L 16 17 H 5 L 13 4 Z" fill="url(#logo-gradient)" />
              <defs>
                <linearGradient id="logo-gradient" x1="5" y1="4" x2="27" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a855f7" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <span>GR</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`#${item.to}`}
                className="relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer group"
              >
                <span
                  className={`relative z-10 transition-colors ${
                    activeSection === item.to
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  {item.name}
                </span>
                {activeSection === item.to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="/Gokul_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-sm font-medium text-black bg-white hover:bg-gray-200 transition-colors px-4 py-2 rounded-lg"
            >
              Resume
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-white ml-8 p-1 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
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
            className="fixed top-24 left-4 right-4 z-40 bg-[#0d1117]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`#${item.to}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium cursor-pointer transition-colors py-3 px-4 rounded-xl ${
                  activeSection === item.to
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Gokul_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center text-sm font-medium text-black bg-white hover:bg-gray-200 transition-colors py-3 rounded-xl"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
