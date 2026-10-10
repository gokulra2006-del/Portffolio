import { useState } from 'react';
import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type SkillProficiency = 'strongest' | 'working' | 'learning';

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'AI/ML' | 'Tooling';
  tier: SkillProficiency;
  projects: { name: string; url?: string }[];
  applicationEvidence: string;
}

export const SKILLS_DATA: SkillItem[] = [
  // Strongest
  {
    name: 'TypeScript',
    category: 'Languages',
    tier: 'strongest',
    projects: [
      { name: 'Portfolio', url: '#hero' },
      { name: 'AI Code Review Assistant', url: '#projects' },
      { name: 'Incrix Techlutions Internship', url: '#experience' }
    ],
    applicationEvidence: 'Enforced strict types across REST request contracts, AST parser schemas, and client state machines to eliminate runtime null pointer faults.'
  },
  {
    name: 'React.js',
    category: 'Frontend',
    tier: 'strongest',
    projects: [
      { name: 'AgriBank', url: '#projects' },
      { name: 'AI Code Review Assistant', url: '#projects' },
      { name: 'Organic Store', url: '#projects' }
    ],
    applicationEvidence: 'Built accessible, modular UI component libraries, managed complex multi-step form workflows, and optimized virtual DOM rendering.'
  },
  {
    name: 'Node.js & Express.js',
    category: 'Backend',
    tier: 'strongest',
    projects: [
      { name: 'AgriBank', url: '#projects' },
      { name: 'AI Code Review Assistant', url: '#projects' },
      { name: 'Incrix Internship', url: '#experience' }
    ],
    applicationEvidence: 'Engineered high-throughput REST APIs, route-level JWT authentication middleware, and input sanitization layers against NoSQL injections.'
  },
  {
    name: 'C# / .NET 8',
    category: 'Backend',
    tier: 'strongest',
    projects: [{ name: 'Dual-enjoy', url: '#projects' }],
    applicationEvidence: 'Utilized Windows CoreAudio WASAPI COM interop, lock-free circular ring buffers, and event-driven buffer loops for sub-20ms audio synchronization.'
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    tier: 'strongest',
    projects: [
      { name: 'AgriBank', url: '#projects' },
      { name: 'Organic Store', url: '#projects' }
    ],
    applicationEvidence: 'Designed document schemas with compound indexes on query-heavy fields (category, price, role), reducing retrieval latency.'
  },
  {
    name: 'REST API Design & RBAC',
    category: 'Backend',
    tier: 'strongest',
    projects: [
      { name: 'AgriBank', url: '#projects' },
      { name: 'Incrix Techlutions', url: '#experience' }
    ],
    applicationEvidence: 'Architected granular role-based authorization pipelines separating farmer, credit officer, and administrative privilege boundaries.'
  },

  // Working Knowledge
  {
    name: 'Python',
    category: 'Languages',
    tier: 'working',
    projects: [
      { name: 'Edge AI Detection', url: '#projects' },
      { name: 'Hackwarts AI Prototype', url: '#experience' }
    ],
    applicationEvidence: 'Developed lightweight computer vision detection scripts and prototype vector embedding ingestion chains.'
  },
  {
    name: 'LLM Orchestration & Prompting',
    category: 'AI/ML',
    tier: 'working',
    projects: [
      { name: 'AI Code Review Assistant', url: '#projects' },
      { name: 'Friday AI Learning', url: '#projects' }
    ],
    applicationEvidence: 'Constructed multi-turn prompt schemas enforcing structured JSON output for automated security and performance code critiques.'
  },
  {
    name: 'Tailwind CSS & Semantic HTML',
    category: 'Frontend',
    tier: 'working',
    projects: [
      { name: 'Portfolio', url: '#hero' },
      { name: 'AgriBank', url: '#projects' }
    ],
    applicationEvidence: 'Built responsive, high-contrast layouts conforming to WCAG 2.1 AA standards and keyboard navigation semantics.'
  },
  {
    name: 'Git & GitHub Actions (CI/CD)',
    category: 'Tooling',
    tier: 'working',
    projects: [
      { name: 'Portfolio CI Suite', url: 'https://github.com/gokulra2006-del/portfolio' },
      { name: 'Dual-enjoy', url: '#projects' }
    ],
    applicationEvidence: 'Automated typecheck, lint, and test execution pipelines across feature branches to prevent regression merges.'
  },
  {
    name: 'PostgreSQL & SQL',
    category: 'Databases',
    tier: 'working',
    projects: [{ name: 'VIT Database Coursework', url: '#experience' }],
    applicationEvidence: 'Designed 3NF normalized relational schemas, foreign key constraints, and transactional queries for database lab benchmarks.'
  },
  {
    name: 'Vitest & Testing Library',
    category: 'Tooling',
    tier: 'working',
    projects: [{ name: 'Portfolio', url: '#hero' }],
    applicationEvidence: 'Implemented unit and integration tests covering navigation, form validation, theme switching, and case study dialog states.'
  },

  // Currently Learning
  {
    name: 'Redis Caching & Queues',
    category: 'Databases',
    tier: 'learning',
    projects: [{ name: 'Distributed Systems Study', url: '#experience' }],
    applicationEvidence: 'Exploring memory-tier caching and distributed pub/sub queues for high-velocity telemetry event streams.'
  },
  {
    name: 'ONNX Runtime & Edge Inference',
    category: 'AI/ML',
    tier: 'learning',
    projects: [{ name: 'Edge AI Optimization', url: '#projects' }],
    applicationEvidence: 'Benchmarking INT8 quantized computer vision models for low-power edge compute boards.'
  },
  {
    name: 'Docker & Containerization',
    category: 'Tooling',
    tier: 'learning',
    projects: [{ name: 'Full-Stack Deployment Pipeline', url: '#projects' }],
    applicationEvidence: 'Configuring multi-stage Dockerfiles to containerize Node.js backends and isolate local testing services.'
  }
];

export function Skills() {
  const [activeTier, setActiveTier] = useState<SkillProficiency | 'all'>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(SKILLS_DATA[0]);

  const filteredSkills = activeTier === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.tier === activeTier);

  return (
    <Section id="skills" title="Technical Skills" number="03">
      <FadeInStagger>
        <FadeIn>
          <div className="flex flex-col gap-5 mb-8">
            <p className="text-gh-text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
              Honest technical inventory backed by code artifacts. Click any skill to inspect where and how it was applied in real software.
            </p>

            {/* Tier Filters */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-gh-bg-secondary border border-gh-border w-fit max-w-full">
              <button
                type="button"
                onClick={() => setActiveTier('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTier === 'all'
                    ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                All ({SKILLS_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTier('strongest')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTier === 'strongest'
                    ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                Strongest
              </button>
              <button
                type="button"
                onClick={() => setActiveTier('working')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTier === 'working'
                    ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                Working Knowledge
              </button>
              <button
                type="button"
                onClick={() => setActiveTier('learning')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTier === 'learning'
                    ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                Currently Learning
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Two-Column Layout: Skills Badges Grid + Active Skill Evidence Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Skills Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill?.name === skill.name;
                const tierColor =
                  skill.tier === 'strongest'
                    ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
                    : skill.tier === 'working'
                    ? 'text-gh-blue bg-gh-blue/10 border-gh-blue/20'
                    : 'text-amber-400 bg-amber-400/10 border-amber-400/20';

                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setSelectedSkill(skill)}
                    className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-gh-bg-secondary border-gh-blue ring-1 ring-gh-blue shadow-md'
                        : 'bg-gh-bg-secondary/60 border-gh-border hover:border-gh-border-hover hover:bg-gh-bg-secondary'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-sm font-bold text-gh-text">{skill.name}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${tierColor}`}>
                        {skill.tier === 'strongest' ? 'Strongest' : skill.tier === 'working' ? 'Working' : 'Learning'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gh-text-muted font-mono">
                      <span className="truncate">
                        {skill.projects.map((p) => p.name).join(' • ')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Skill Evidence & Details Inspector Panel */}
          <div className="lg:col-span-5 sticky top-24">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="p-6 rounded-2xl bg-gh-bg-secondary border border-gh-border shadow-xl space-y-4"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-gh-border pb-3">
                    <div>
                      <span className="text-[11px] font-mono text-gh-blue uppercase tracking-wider font-semibold">
                        {selectedSkill.category} • {selectedSkill.tier.toUpperCase()}
                      </span>
                      <h3 className="text-xl font-bold text-gh-text mt-0.5">
                        {selectedSkill.name}
                      </h3>
                    </div>
                    <span className="p-2 rounded-lg bg-gh-blue/10 text-gh-blue">
                      <Layers size={18} />
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-gh-text-muted mb-1.5 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400" /> Real-World Application:
                    </h4>
                    <p className="text-xs sm:text-sm text-gh-text leading-relaxed">
                      {selectedSkill.applicationEvidence}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-gh-text-muted mb-2 font-semibold">
                      Demonstrated in Projects:
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedSkill.projects.map((proj, idx) => (
                        <li key={idx}>
                          <a
                            href={proj.url || '#projects'}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-gh-blue hover:underline bg-gh-bg px-2.5 py-1.5 rounded-lg border border-gh-border/70 hover:border-gh-blue transition-colors w-full justify-between"
                          >
                            <span>{proj.name}</span>
                            <ChevronRight size={13} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <div className="p-6 rounded-2xl bg-gh-bg-secondary border border-gh-border text-center text-xs font-mono text-gh-text-muted">
                  Select a skill to inspect project application details.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </FadeInStagger>
    </Section>
  );
}
