import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d1117]/80 backdrop-blur-md border-b border-gh-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#hero"
          className="text-xl font-bold cursor-pointer hover:text-gh-blue transition-colors"
        >
          GK.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={`#${item.to}`}
              className="text-sm font-medium text-gh-text-muted hover:text-gh-text cursor-pointer transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-4 py-2 text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gh-text hover:text-gh-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d1117] border-b border-gh-border py-4 px-6 flex flex-col gap-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={`#${item.to}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gh-text-muted hover:text-gh-text cursor-pointer transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full text-center py-2"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
