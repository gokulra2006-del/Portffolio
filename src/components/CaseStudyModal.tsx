import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Cpu, Terminal, CheckCircle2, AlertTriangle, Lightbulb, Image } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projectsData';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { ProjectEvidence } from './ProjectEvidence';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-gh-bg-secondary border border-gh-border rounded-2xl shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-start p-5 sm:p-6 border-b border-gh-border bg-gh-bg/60">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-medium text-gh-blue uppercase tracking-wider bg-gh-blue/10 px-2.5 py-0.5 rounded-full">
                  Engineering Case Study
                </span>
                <span className="text-xs text-gh-text-muted font-mono">
                  • {project.role}
                </span>
              </div>
              <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-gh-text">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-gh-text-muted mt-1">
                {project.tagline}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gh-text-muted hover:text-gh-text rounded-lg hover:bg-gh-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gh-blue"
              aria-label="Close case study"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-5 sm:p-7 space-y-6 text-sm text-gh-text-muted leading-relaxed">
            {/* Overview / Context */}
            <div className="p-4 rounded-xl bg-gh-bg border border-gh-border/60">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gh-blue mb-1 font-semibold">
                01. Context & Overview
              </h3>
              <p className="text-gh-text text-sm mb-2">{project.description}</p>
              <p className="text-xs text-gh-text-muted font-mono">{caseStudy.context}</p>
            </div>

            {/* Problem & Users Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 mb-1.5 font-semibold flex items-center gap-1.5">
                  <AlertTriangle size={14} /> 02. The Problem
                </h4>
                <p className="text-xs sm:text-sm text-gh-text-muted">{caseStudy.problem}</p>
              </div>

              <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
                <h4 className="text-xs font-mono uppercase tracking-wider text-green-400 mb-1.5 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> 03. Target Users & Workflows
                </h4>
                <p className="text-xs sm:text-sm text-gh-text-muted">{caseStudy.users}</p>
              </div>
            </div>

            {/* My Responsibilities */}
            <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gh-blue mb-1.5 font-semibold">
                04. My Responsibilities
              </h4>
              <p className="text-xs sm:text-sm text-gh-text-muted">{caseStudy.responsibilities}</p>
            </div>

            {/* Architecture & Interactive Diagram */}
            <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gh-text mb-2 font-semibold flex items-center gap-1.5">
                <Cpu size={14} className="text-gh-blue" /> 05. Architecture & Component Flow
              </h4>
              <div className="p-3 bg-gh-bg rounded-lg border border-gh-border/40 font-mono text-xs text-gh-text break-words mb-3">
                {caseStudy.architecture}
              </div>

              {/* Interactive Architecture Diagram */}
              <ArchitectureDiagram projectId={project.id} />
            </div>

            {/* Key Technical Decisions */}
            <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gh-blue mb-2.5 font-semibold flex items-center gap-1.5">
                <Terminal size={14} /> 06. Key Technical Decisions
              </h4>
              <ul className="space-y-2">
                {caseStudy.technicalDecisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-gh-blue font-mono font-bold">›</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security & Testing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1.5 font-semibold flex items-center gap-1.5">
                  <ShieldCheck size={14} /> 07. Security Considerations
                </h4>
                <p className="text-xs text-gh-text-muted">{caseStudy.securityConsiderations}</p>
              </div>

              <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-1.5 font-semibold">
                  08. Testing Strategy
                </h4>
                <p className="text-xs text-gh-text-muted">{caseStudy.testingStrategy}</p>
              </div>
            </div>

            {/* Metrics & Trade-offs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gh-blue/5 border border-gh-blue/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gh-blue mb-1.5 font-semibold">
                  09. Performance & Metrics
                </h4>
                <p className="text-xs sm:text-sm text-gh-text font-medium">{caseStudy.metrics}</p>
              </div>

              <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
                <h4 className="text-xs font-mono uppercase tracking-wider text-orange-400 mb-1.5 font-semibold">
                  10. Engineering Trade-offs
                </h4>
                <p className="text-xs text-gh-text-muted">{caseStudy.tradeoffs}</p>
              </div>
            </div>

            {/* Future Improvements */}
            <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1.5 font-semibold flex items-center gap-1.5">
                <Lightbulb size={14} /> 11. What I Would Improve Next
              </h4>
              <p className="text-xs sm:text-sm text-gh-text-muted">{caseStudy.futureImprovements}</p>
            </div>

            {/* Media / Interface Visual Placeholder */}
            {project.mediaPlaceholder && (
              <div className="p-4 rounded-xl bg-gh-bg/50 border border-gh-border/50">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gh-text-muted mb-2 font-semibold flex items-center gap-1.5">
                  <Image size={14} className="text-gh-blue" /> Verified Interface Capture
                </h4>
                <div className="h-32 sm:h-40 rounded-lg bg-gh-bg border border-dashed border-gh-border flex flex-col items-center justify-center p-4 text-center">
                  <Image size={28} className="text-gh-text-muted/60 mb-2" />
                  <p className="text-xs font-mono text-gh-text font-medium">{project.mediaPlaceholder.caption}</p>
                  <p className="text-[11px] text-gh-text-muted mt-1">
                    Recorded during active development & testing phase.
                  </p>
                </div>
              </div>
            )}

            {/* Tech Badges */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-gh-text-muted mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="badge text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Evidence & Verification Strip */}
            <ProjectEvidence evidence={project.evidence} />
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-gh-border bg-gh-bg/80 flex flex-wrap justify-between items-center gap-3">
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs sm:text-sm py-2 px-4 flex items-center gap-2"
                >
                  <FaGithub size={16} />
                  View GitHub Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs sm:text-sm py-2 px-4 flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-gh-text-muted hover:text-gh-text py-2 px-3 rounded-lg hover:bg-gh-bg transition-colors"
            >
              Close [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
