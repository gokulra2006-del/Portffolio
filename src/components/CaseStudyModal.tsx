import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';


import type { Project } from '../data/projectsData';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl bg-gh-bg-secondary border border-gh-border rounded-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden max-h-[85vh] flex flex-col"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs font-mono text-gh-blue uppercase tracking-wider mb-1">
                Case Study
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gh-text">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gh-text-muted hover:text-gh-text rounded-lg hover:bg-gh-bg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto space-y-6 pr-2 text-sm sm:text-base">
            <div>
              <p className="text-gh-text-muted leading-relaxed">{project.description}</p>
            </div>

            <div className="space-y-4 bg-gh-bg/60 p-5 rounded-xl border border-gh-border/50">
              <div>
                <h4 className="font-semibold text-gh-text mb-1">The Problem</h4>
                <p className="text-gh-text-muted text-sm">{project.caseStudy.problem}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gh-text mb-1">Our Approach</h4>
                <p className="text-gh-text-muted text-sm">{project.caseStudy.approach}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gh-text mb-1">Architecture</h4>
                <p className="text-gh-text-muted text-sm">{project.caseStudy.architecture}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gh-text mb-1 text-green-400">Key Outcomes</h4>
                <p className="text-gh-text-muted text-sm">{project.caseStudy.outcomes}</p>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs text-gh-text-muted uppercase mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gh-border flex justify-between items-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs sm:text-sm py-2 px-4 flex items-center gap-2"
            >
              <FaGithub size={16} />
              View on GitHub
            </a>

            <button
              onClick={onClose}
              className="text-xs sm:text-sm text-gh-text-muted hover:text-gh-text"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
