import { useState } from 'react';
import { FileText, ArrowDown, Mail, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { EngineeringBackground } from '../components/EngineeringBackground';
import { Magnetic } from '../components/Magnetic';

export function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gokulra2006@gmail.com');
    setCopiedEmail(true);
    toast.success('Email copied to clipboard (gokulra2006@gmail.com)');
    setTimeout(() => setCopiedEmail(false), 2000);
  };
  return (
    <Section id="hero" className="min-h-[85vh] flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      <EngineeringBackground />

      <FadeInStagger className="flex flex-col items-start gap-5 max-w-3xl relative z-10 w-full">
        {/* Availability & Location Bar */}
        <FadeIn>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Currently Available</span>
              <span className="text-emerald-500/50">•</span>
              <span>Open to junior software engineering opportunities</span>
            </div>
            <div className="text-xs font-mono text-gh-text-muted flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gh-bg-secondary border border-gh-border">
              <span>📍 Chennai, India</span>
              <span className="text-gh-border-hover">•</span>
              <span>UTC+5:30 (IST)</span>
            </div>
          </div>
        </FadeIn>

        {/* Name */}
        <FadeIn>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gh-text tracking-tight">
            Gokul Ramachandran
          </h1>
        </FadeIn>

        {/* Clear Headline */}
        <FadeIn>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gh-text-muted leading-tight">
            Aspiring AWS Cloud Security Analyst <br className="hidden sm:inline" />
            <span className="text-gh-text font-bold">building detection, IAM, and DevSecOps labs</span>
          </h2>
        </FadeIn>

        {/* Supporting Statement */}
        <FadeIn>
          <p className="text-base sm:text-lg text-gh-text-muted max-w-2xl leading-relaxed">
            I engineer production-minded full-stack web applications and low-latency audio/ML systems—from schema design and type-safe APIs to responsive, accessible client interfaces.
          </p>
        </FadeIn>

        {/* CTAs & Links */}
        <FadeIn>
          <div className="flex flex-wrap items-center gap-4 mt-3">
            {/* Primary CTA */}
            <Magnetic strength={0.2}>
              <a
                href="#projects"
                className="btn-primary flex items-center gap-2 text-sm font-medium px-5 py-3 transition-transform active:scale-95"
              >
                View selected work <ArrowDown size={16} />
              </a>
            </Magnetic>

            {/* Secondary CTA */}
            <Magnetic strength={0.2}>
              <a
                href="/Gokul_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 text-sm font-medium px-5 py-3 transition-transform active:scale-95"
              >
                <FileText size={16} />
                Download resume
              </a>
            </Magnetic>

            {/* Social & Contact Icons */}
            <div className="flex items-center gap-2 ml-1 sm:ml-2">
              <Magnetic strength={0.3}>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/gokulra2006-del"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-text-muted hover:text-gh-blue transition-colors p-2.5 rounded-lg hover:bg-gh-border/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue inline-flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={20} />
                </motion.a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/gokul-ramachandran-513299327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-text-muted hover:text-gh-blue transition-colors p-2.5 rounded-lg hover:bg-gh-border/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue inline-flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:gokulra2006@gmail.com"
                  className="text-gh-text-muted hover:text-gh-blue transition-colors p-2.5 rounded-lg hover:bg-gh-border/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue inline-flex items-center justify-center"
                  aria-label="Email Gokul"
                >
                  <Mail size={20} />
                </motion.a>
              </Magnetic>

              {/* One-click email copy pill */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-gh-text-muted hover:text-gh-blue transition-colors px-2.5 py-1.5 rounded-lg hover:bg-gh-border/20 border border-gh-border/70 hover:border-gh-blue/40"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedEmail ? 'Copied to clipboard' : 'gokulra2006@gmail.com'}</span>
              </button>
            </div>
          </div>
        </FadeIn>
      </FadeInStagger>
    </Section>
  );
}
