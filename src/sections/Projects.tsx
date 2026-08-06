import { useState } from 'react';
import { Section } from '../components/Section';
import { Folder, ChevronRight, Star, GitFork, ExternalLink } from 'lucide-react';

import { FaGithub } from 'react-icons/fa';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { TiltCard } from '../components/TiltCard';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { PROJECTS } from '../data/projectsData';

function FeaturedProjectCard({ project, onOpenModal }: { project: typeof PROJECTS[0]; onOpenModal: () => void }) {
  const { stats } = useGitHubStats(project.github);

  return (
    <FadeIn className="w-full">
      <TiltCard>
        <div className="card-base card-hover p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Folder size={120} className="text-gh-blue group-hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="flex-1 z-10 w-full">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gh-blue font-medium tracking-wider text-sm uppercase">Featured Project</p>
              <div className="flex items-center gap-4">
                {stats && (
                  <div className="flex items-center gap-3 text-xs font-mono text-gh-text-muted">
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" /> {stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} /> {stats.forks}
                    </span>
                  </div>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gh-text-muted hover:text-gh-blue transition-colors"
                  >
                    <FaGithub size={22} />
                    <span className="sr-only">GitHub</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gh-text-muted hover:text-gh-blue transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={22} />
                    <span className="sr-only">Live Demo</span>
                  </a>
                )}
              </div>
            </div>


            <h3 className="text-3xl font-bold text-gh-text mb-6 group-hover:text-gh-blue transition-colors">
              {project.title}
            </h3>

            <div className="bg-gh-bg/50 backdrop-blur-sm p-6 rounded-lg border border-gh-border/50 mb-6 text-sm">
              <p className="text-gh-text-muted mb-4"><span className="text-gh-text font-medium">Problem:</span> {project.caseStudy.problem}</p>
              <p className="text-gh-text-muted mb-4"><span className="text-gh-text font-medium">Approach:</span> {project.caseStudy.approach}</p>
              <p className="text-gh-text-muted mb-4"><span className="text-gh-text font-medium">Architecture:</span> {project.caseStudy.architecture}</p>
              <p className="text-gh-text-muted"><span className="text-gh-text font-medium text-green-400">Outcome:</span> {project.caseStudy.outcomes}</p>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4">
              <ul className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <li key={i} className="badge px-3 py-1 text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenModal}
                className="text-xs font-mono text-gh-blue hover:underline flex items-center gap-1"
              >
                Full Case Study <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </TiltCard>
    </FadeIn>
  );
}

function ExpandableProjectCard({ project, onOpenModal }: { project: typeof PROJECTS[0]; onOpenModal: () => void }) {
  const { stats } = useGitHubStats(project.github);

  return (
    <FadeIn>
      <TiltCard className="h-full">
        <div className="card-base card-hover p-6 flex flex-col h-full group">
          <div className="flex justify-between items-center mb-6">
            <Folder size={40} className="text-gh-blue" />
            <div className="flex items-center gap-3">
              {stats && (
                <div className="flex items-center gap-2 text-xs font-mono text-gh-text-muted">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-400" /> {stats.stars}
                  </span>
                </div>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-text-muted hover:text-gh-blue transition-colors"
                >
                  <FaGithub size={20} />
                  <span className="sr-only">GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-text-muted hover:text-gh-blue transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={20} />
                  <span className="sr-only">Live Demo</span>
                </a>
              )}

            </div>
          </div>

          <h3 className="text-xl font-bold text-gh-text mb-3 group-hover:text-gh-blue transition-colors">
            {project.title}
          </h3>

          <p className="text-gh-text-muted text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mt-auto pt-4 flex flex-col gap-4">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <li key={i} className="text-xs font-medium text-gh-text-muted bg-gh-border/50 px-2.5 py-1 rounded-md">
                  {tech}
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenModal}
              className="flex items-center gap-1 text-xs font-medium text-gh-blue hover:text-gh-blue-hover transition-colors self-start"
            >
              <ChevronRight size={14} /> Read case study
            </button>
          </div>
        </div>
      </TiltCard>
    </FadeIn>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const regularProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Featured Work" number="03">
      <FadeInStagger>
        <div className="flex flex-col gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={index}
              project={project}
              onOpenModal={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <FadeIn>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gh-text">Other Noteworthy Projects</h3>
            <a
              href="/archive"
              className="text-sm font-mono text-gh-blue hover:underline flex items-center gap-1"
            >
              View full project archive <ChevronRight size={16} />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {regularProjects.map((project, index) => (
            <ExpandableProjectCard
              key={index}
              project={project}
              onOpenModal={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* View Archive CTA */}
        <FadeIn className="mt-16 text-center">
          <a
            href="/archive"
            className="btn-outline px-8 py-3 font-mono text-sm inline-flex items-center gap-2"
          >
            View Full Project Archive
          </a>
        </FadeIn>
      </FadeInStagger>

      {selectedProject && (
        <CaseStudyModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </Section>
  );
}

