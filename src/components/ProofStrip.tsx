import { GraduationCap, Briefcase, Award, Code2, Clock, FileText, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FadeIn } from './FadeIn';

export function ProofStrip() {
  const proofItems = [
    {
      icon: GraduationCap,
      label: 'Degree & University',
      headline: 'VIT Chennai',
      subtext: 'B.Tech Computer Science (2023–2027)',
    },
    {
      icon: Briefcase,
      label: 'Internship Experience',
      headline: 'Incrix Techlutions',
      subtext: 'Full-Stack Developer Intern',
    },
    {
      icon: Award,
      label: 'Hackathon Achievement',
      headline: '2nd Place Finalist',
      subtext: 'Hackwarts Hackathon (AI Track)',
    },
    {
      icon: Clock,
      label: 'Development Track',
      headline: '2+ Years Active Dev',
      subtext: '5+ Substantial Projects Built',
    },
    {
      icon: Code2,
      label: 'Main Core Stack',
      headline: 'TypeScript & Systems',
      subtext: 'React, Node.js, C#/.NET 8, Python',
    },
  ];

  return (
    <section aria-label="Key Engineering Credentials" className="w-full max-w-5xl mx-auto px-6 -mt-8 mb-16 relative z-20">
      <FadeIn>
        <div className="p-5 sm:p-6 rounded-2xl bg-gh-bg-secondary/95 backdrop-blur-md border border-gh-border shadow-xl">
          {/* Main Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-4">
            {proofItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gh-bg/60 border border-gh-border/50 hover:border-gh-blue/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-gh-blue/10 text-gh-blue shrink-0 mt-0.5">
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-gh-text-muted truncate">
                      {item.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-gh-text mt-0.5 truncate">
                      {item.headline}
                    </p>
                    <p className="text-[11px] text-gh-text-muted mt-0.5 line-clamp-1">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Credibility Links */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gh-border/50 text-xs font-mono">
            <span className="text-gh-text-muted">
              Verified GitHub repositories and live engineering case studies.
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/gokulra2006-del"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gh-blue hover:underline inline-flex items-center gap-1.5"
              >
                <FaGithub size={13} />
                <span>github.com/gokulra2006-del</span>
                <ExternalLink size={11} />
              </a>
              <span className="text-gh-border-hover">•</span>
              <a
                href="/Gokul_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gh-blue hover:underline inline-flex items-center gap-1.5"
              >
                <FileText size={13} />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
