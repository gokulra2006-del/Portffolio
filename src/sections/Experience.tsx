import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { TIMELINE_ENTRIES, type TimelineType } from '../data/experience';
import { Calendar, MapPin, ChevronRight, Briefcase, Award, GraduationCap, Code2, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

const TYPE_CONFIG: Record<TimelineType, { label: string; icon: typeof Briefcase; color: string }> = {
  internship: { label: 'Internship', icon: Briefcase, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  project: { label: 'Major Project', icon: Code2, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
  hackathon: { label: 'Hackathon', icon: Award, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  education: { label: 'Education', icon: GraduationCap, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  opensource: { label: 'Open Source', icon: Sparkles, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
  learning: { label: 'Learning Focus', icon: BookOpen, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' }
};

function getHighlightsLabel(type: TimelineType): string {
  switch (type) {
    case 'education':
      return 'Academic Focus & Core Coursework:';
    case 'internship':
      return 'Key Responsibilities & Engineering Impact:';
    case 'hackathon':
      return 'Hackathon Deliverables & Outcomes:';
    case 'opensource':
      return 'Open-Source Contributions & System Design:';
    case 'project':
      return 'Technical Architecture & Implementation:';
    case 'learning':
      return 'Current Research & Engineering Focus:';
    default:
      return 'Key Highlights:';
  }
}

export function Experience() {
  const [selectedFilter, setSelectedFilter] = useState<TimelineType | 'all'>('all');

  const filteredEntries = selectedFilter === 'all'
    ? TIMELINE_ENTRIES
    : TIMELINE_ENTRIES.filter((e) => e.type === selectedFilter);

  return (
    <Section id="experience" title="Experience & Education" number="04">
      <FadeInStagger>
        <FadeIn>
          <div className="flex flex-col gap-5 mb-8">
            <p className="text-gh-text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
              Chronological engineering milestones spanning full-stack industry internship, degree coursework at VIT Chennai, hackathon achievements, and systems research.
            </p>

            {/* Timeline Filter Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-gh-bg-secondary border border-gh-border w-fit max-w-full">
              <button
                type="button"
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                All Milestones
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter('internship')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedFilter === 'internship'
                    ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                Internship
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter('education')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedFilter === 'education'
                    ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                Education
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter('hackathon')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedFilter === 'hackathon'
                    ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                Hackathons
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter('project')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedFilter === 'project'
                    ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                Projects
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Vertical Timeline Track */}
        <div className="relative border-l-2 border-gh-border/60 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8 my-4">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry) => {
              const meta = TYPE_CONFIG[entry.type];
              const Icon = meta.icon;

              return (
                <motion.div
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Dot Indicator */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-gh-bg border-2 border-gh-blue group-hover:scale-125 transition-transform" />

                  {/* Card Container */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gh-bg-secondary border border-gh-border hover:border-gh-border-hover transition-colors shadow-sm space-y-3.5">
                    {/* Header Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${meta.color}`}>
                          <Icon size={12} />
                          {meta.label}
                        </span>
                        <span className="text-sm font-semibold text-gh-blue">
                          {entry.organization}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-gh-text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} /> {entry.period}
                        </span>
                        <span className="hidden sm:flex items-center gap-1">
                          <MapPin size={13} /> {entry.location}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gh-text flex items-center justify-between gap-2">
                      <span>{entry.title}</span>
                      {entry.link && (
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-gh-blue hover:underline inline-flex items-center gap-1 shrink-0 font-normal"
                        >
                          <span>Repository</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-gh-text-muted leading-relaxed">
                      {entry.summary}
                    </p>

                    {/* Highlights & Bullet Outcomes */}
                    <div className="pt-1">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-gh-blue mb-2 font-semibold">
                        {getHighlightsLabel(entry.type)}
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-gh-text leading-relaxed">
                        {entry.actionBullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <ChevronRight size={15} className="text-gh-blue shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {entry.skills.map((skill, i) => (
                        <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gh-bg border border-gh-border text-gh-text-muted">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </FadeInStagger>
    </Section>
  );
}
