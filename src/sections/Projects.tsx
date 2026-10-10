import { useState, useMemo } from 'react';
import { Section } from '../components/Section';
import { Folder, ChevronRight, Star, GitFork, ExternalLink, User, Wrench, AlertCircle, CheckCircle, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { TiltCard } from '../components/TiltCard';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { ProjectEvidence } from '../components/ProjectEvidence';
import { PROJECTS, type Project, type ProjectDomain } from '../data/projectsData';

type FilterCategory = 'all' | ProjectDomain;

function FeaturedProjectCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: () => void;
}) {
  const { stats } = useGitHubStats(project.github);
  const [showHighlights, setShowHighlights] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      <TiltCard>
        <article className="card-base card-hover p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden group mb-8 border border-gh-border hover:border-gh-blue/50 transition-all">
          {/* Background Decorative Folder */}
          <div aria-hidden="true" className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Folder size={120} className="text-gh-blue group-hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="z-10 w-full">
            {/* Header / Meta */}
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-medium text-gh-blue uppercase tracking-wider bg-gh-blue/10 px-2.5 py-0.5 rounded-md flex items-center gap-1.5">
                  <Sparkles size={12} /> Featured Case Study
                </span>
                <span className="text-xs font-mono text-gh-text-muted flex items-center gap-1">
                  <User size={12} /> {project.role}
                </span>
              </div>

              {/* Action Links & Stars */}
              <div className="flex items-center gap-3">
                {stats && (
                  <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-gh-text-muted">
                    <span className="flex items-center gap-1">
                      <Star size={13} className="text-yellow-400" /> {stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={13} /> {stats.forks}
                    </span>
                  </div>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gh-text-muted hover:text-gh-blue transition-colors p-1.5 rounded-lg hover:bg-gh-border/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue inline-flex items-center"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gh-text-muted hover:text-gh-blue transition-colors p-1.5 rounded-lg hover:bg-gh-border/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue inline-flex items-center"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gh-text mb-1 group-hover:text-gh-blue transition-colors">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-gh-text-muted mb-4">
              {project.tagline}
            </p>

            {/* Structured Engineering Spec Grid */}
            <div className="bg-gh-bg/70 p-5 rounded-xl border border-gh-border/60 mb-5 space-y-3.5 text-xs sm:text-sm">
              <div>
                <p className="text-gh-text font-semibold flex items-center gap-1.5 mb-1 text-red-400">
                  <AlertCircle size={14} /> Problem & Target Users:
                </p>
                <p className="text-gh-text-muted leading-relaxed pl-5">
                  {project.problem} <span className="text-gh-text font-mono text-[11px] block mt-1">Users: {project.targetUsers}</span>
                </p>
              </div>

              <div>
                <p className="text-gh-text font-semibold flex items-center gap-1.5 mb-1 text-gh-blue">
                  <Wrench size={14} /> Technical Approach:
                </p>
                <p className="text-gh-text-muted leading-relaxed pl-5">{project.approach}</p>
              </div>

              <div>
                <p className="text-gh-text font-semibold flex items-center gap-1.5 mb-1 text-purple-400">
                  <Layers size={14} /> Core Engineering Challenge:
                </p>
                <p className="text-gh-text-muted leading-relaxed pl-5">{project.challenge}</p>
              </div>

              <div>
                <p className="text-gh-text font-semibold flex items-center gap-1.5 mb-1 text-emerald-400">
                  <CheckCircle size={14} /> Measurable Impact / Outcome:
                </p>
                <p className="text-gh-text font-mono text-xs leading-relaxed pl-5">{project.outcome}</p>
              </div>
            </div>

            {/* Expandable Key Contributions Drawer */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-5">
                <button
                  type="button"
                  onClick={() => setShowHighlights(!showHighlights)}
                  className="text-xs font-mono text-gh-blue hover:underline flex items-center gap-1 mb-2.5 focus-visible:outline-none"
                  aria-expanded={showHighlights}
                >
                  <Layers size={13} />
                  {showHighlights ? 'Hide technical implementation details' : 'Preview key architectural highlights'}
                </button>

                <AnimatePresence>
                  {showHighlights && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden space-y-1.5 p-3 rounded-lg bg-gh-bg/50 border border-gh-border/40 text-xs text-gh-text-muted"
                    >
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-gh-blue font-bold font-mono">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Evidence & Verification Area */}
            <div className="mb-5">
              <ProjectEvidence evidence={project.evidence} />
            </div>

            {/* Tech Badges & Full Case Study CTA */}
            <div className="flex flex-wrap justify-between items-center gap-4 pt-3 border-t border-gh-border/40">
              <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="badge text-xs px-2.5 py-1 cursor-default"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={onOpenModal}
                className="btn-outline text-xs sm:text-sm font-medium py-2 px-4 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue active:scale-95 transition-transform"
              >
                Read full case study <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}

function RegularProjectCard({ project, onOpenModal }: { project: Project; onOpenModal: () => void }) {
  const { stats } = useGitHubStats(project.github);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <TiltCard className="h-full">
        <article className="card-base card-hover p-6 flex flex-col h-full group border border-gh-border hover:border-gh-blue/40 transition-all">
          <div className="flex justify-between items-center mb-3">
            <Folder size={30} className="text-gh-blue" />
            <div className="flex items-center gap-2">
              {stats && (
                <span className="flex items-center gap-1 text-xs font-mono text-gh-text-muted mr-1">
                  <Star size={12} className="text-yellow-400" /> {stats.stars}
                </span>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-text-muted hover:text-gh-blue transition-colors p-1"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub size={17} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-text-muted hover:text-gh-blue transition-colors p-1"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>

          <h4 className="text-lg font-bold text-gh-text mb-1 group-hover:text-gh-blue transition-colors">
            {project.title}
          </h4>
          <p className="text-xs font-mono text-gh-blue mb-2.5">
            {project.role}
          </p>

          <p className="text-gh-text-muted text-xs sm:text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="mt-auto pt-4 flex flex-col gap-3">
            <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
              {project.tech.slice(0, 4).map((tech, i) => (
                <li key={i} className="text-[11px] font-mono text-gh-text-muted bg-gh-border/50 px-2 py-0.5 rounded">
                  {tech}
                </li>
              ))}
              {project.tech.length > 4 && (
                <li className="text-[11px] font-mono text-gh-text-muted px-1.5 py-0.5">
                  +{project.tech.length - 4}
                </li>
              )}
            </ul>

            <button
              type="button"
              onClick={onOpenModal}
              className="flex items-center gap-1 text-xs font-mono text-gh-blue hover:underline self-start pt-1"
            >
              Case study details <ChevronRight size={13} />
            </button>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredFeaturedProjects = useMemo(() => {
    const featured = PROJECTS.filter((p) => p.featured);
    if (activeFilter === 'all') return featured;
    return featured.filter((p) => p.domains.includes(activeFilter as ProjectDomain));
  }, [activeFilter]);

  const regularProjects = useMemo(() => {
    const regular = PROJECTS.filter((p) => !p.featured);
    if (activeFilter === 'all') return regular;
    return regular.filter((p) => p.domains.includes(activeFilter as ProjectDomain));
  }, [activeFilter]);

  const filterButtons = useMemo(() => {
    const counts: Record<FilterCategory, number> = {
      all: PROJECTS.length,
      'Full-stack': PROJECTS.filter((p) => p.domains.includes('Full-stack')).length,
      'AI/ML': PROJECTS.filter((p) => p.domains.includes('AI/ML')).length,
      Systems: PROJECTS.filter((p) => p.domains.includes('Systems')).length,
      Desktop: PROJECTS.filter((p) => p.domains.includes('Desktop')).length,
      'Developer tools': PROJECTS.filter((p) => p.domains.includes('Developer tools')).length,
    };

    return [
      { label: 'All', value: 'all' as FilterCategory, count: counts.all },
      { label: 'Full-stack', value: 'Full-stack' as FilterCategory, count: counts['Full-stack'] },
      { label: 'AI/ML', value: 'AI/ML' as FilterCategory, count: counts['AI/ML'] },
      { label: 'Systems', value: 'Systems' as FilterCategory, count: counts.Systems },
      { label: 'Desktop', value: 'Desktop' as FilterCategory, count: counts.Desktop },
      { label: 'Developer tools', value: 'Developer tools' as FilterCategory, count: counts['Developer tools'] },
    ];
  }, []);

  return (
    <Section id="projects" title="Selected Projects" number="02">
      <FadeInStagger>
        {/* Intro & Domain Filter Toolbar */}
        <FadeIn>
          <div className="flex flex-col gap-5 mb-8">
            <p className="text-gh-text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
              In-depth engineering case studies showcasing full-stack platform architecture, low-latency Windows audio DSP, and practical AI systems.
            </p>

            {/* Interactive Domain Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-gh-bg-secondary border border-gh-border/70 w-fit max-w-full">
              {filterButtons.map((btn) => (
                <button
                  key={btn.value}
                  type="button"
                  aria-label={btn.label}
                  onClick={() => setActiveFilter(btn.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                    activeFilter === btn.value
                      ? 'bg-gh-blue text-gh-bg font-semibold shadow-sm'
                      : 'text-gh-text-muted hover:text-gh-text'
                  }`}
                >
                  <span>{btn.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      activeFilter === btn.value
                        ? 'bg-gh-bg/25 text-gh-bg font-bold'
                        : 'bg-gh-border text-gh-text-muted'
                    }`}
                  >
                    {btn.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Top Featured Work Cards */}
        <div className="flex flex-col gap-2 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredFeaturedProjects.length > 0 ? (
              filteredFeaturedProjects.map((project) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={() => setSelectedProject(project)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-8 text-center bg-gh-bg-secondary rounded-xl border border-gh-border text-sm font-mono text-gh-text-muted"
              >
                No featured case studies found for {activeFilter}. Review additional projects below.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Secondary Substantial Projects Grid */}
        <AnimatePresence mode="popLayout">
          {regularProjects.length > 0 && (
            <motion.div
              key={`regular-${activeFilter}`}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-base font-bold text-gh-text flex items-center gap-2">
                  <span>
                    {activeFilter === 'all'
                      ? 'Other Substantial Engineering Projects'
                      : `Additional ${activeFilter} Projects (${regularProjects.length})`}
                  </span>
                </h4>
                <a
                  href="/projects"
                  className="text-xs font-mono text-gh-blue hover:underline inline-flex items-center gap-1"
                >
                  View all projects archive <ArrowUpRight size={13} />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {regularProjects.map((project) => (
                  <RegularProjectCard
                    key={project.id}
                    project={project}
                    onOpenModal={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Projects CTA Banner */}
        <FadeIn>
          <div className="p-6 rounded-2xl bg-gh-bg-secondary/60 border border-gh-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-gh-text">Looking for the complete repository archive?</p>
              <p className="text-xs text-gh-text-muted mt-0.5">
                Explore course assignments, prototypes, utility scripts, and hackathon repositories.
              </p>
            </div>
            <a
              href="/projects"
              className="btn-outline text-xs sm:text-sm py-2 px-4 inline-flex items-center gap-2 shrink-0"
            >
              <span>View All Projects Page</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>

        {/* Global Case Study Modal */}
        {selectedProject && (
          <CaseStudyModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </FadeInStagger>
    </Section>
  );
}
