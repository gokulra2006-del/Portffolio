import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Search, ArrowUpDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import { ARCHIVE_PROJECTS } from '../data/projects';
import { PROJECTS, type Project } from '../data/projectsData';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { Helmet } from 'react-helmet-async';

export function ProjectArchive() {
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return ARCHIVE_PROJECTS.filter((p) => {
      const matchTitle = p.title.toLowerCase().includes(search.toLowerCase());
      const matchTech = p.builtWith.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchOrg = p.madeAt?.toLowerCase().includes(search.toLowerCase());
      return matchTitle || matchTech || matchOrg;
    }).sort((a, b) => (sortAsc ? a.year - b.year : b.year - a.year));
  }, [search, sortAsc]);

  return (
    <div className="min-h-screen bg-gh-bg text-gh-text px-6 py-12 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <Helmet>
        <title>Project Archive | Gokul Ramachandran</title>
        <meta name="description" content="A complete list of projects built by Gokul Ramachandran over the years." />
      </Helmet>

      <div className="mb-12">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-gh-blue hover:underline font-mono text-sm mb-6 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Gokul Ramachandran
        </a>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Projects</h1>
        <p className="text-gh-text-muted text-lg">A complete list of things I've built and experimented with.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
        <div className="relative w-full sm:w-80">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gh-text-muted" />
          <input
            type="text"
            placeholder="Search title, tech, or org..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gh-bg-secondary border border-gh-border rounded-lg pl-10 pr-4 py-2 text-sm text-gh-text focus:outline-none focus:border-gh-blue transition-colors"
          />
        </div>

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="flex items-center gap-2 px-4 py-2 bg-gh-bg-secondary border border-gh-border rounded-lg text-sm text-gh-text-muted hover:text-gh-text hover:border-gh-blue transition-colors self-end sm:self-auto"
        >
          <ArrowUpDown size={16} />
          Sort by Year ({sortAsc ? 'Oldest first' : 'Newest first'})
        </button>
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto border border-gh-border rounded-xl bg-gh-bg-secondary">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-gh-border text-gh-text-muted font-mono text-xs uppercase tracking-wider bg-gh-bg/50">
              <th className="py-4 px-6 font-medium">Year</th>
              <th className="py-4 px-6 font-medium">Title</th>
              <th className="py-4 px-6 font-medium hidden md:table-cell">Made at</th>
              <th className="py-4 px-6 font-medium">Built with</th>
              <th className="py-4 px-6 font-medium text-right">Links</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gh-border text-sm">
            {filteredProjects.map((project, index) => (
              <motion.tr
                key={project.title + index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="hover:bg-gh-bg/40 transition-colors group"
              >
                <td className="py-4 px-6 font-mono text-gh-blue font-medium">{project.year}</td>
                <td className="py-4 px-6 font-semibold text-gh-text group-hover:text-gh-blue transition-colors">
                  {project.title}
                </td>
                <td className="py-4 px-6 text-gh-text-muted hidden md:table-cell">
                  {project.madeAt || '—'}
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.builtWith.map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-0.5 rounded bg-gh-border/50 text-gh-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-3 text-gh-text-muted">
                    {(() => {
                      const detailedProject = PROJECTS.find(
                        (dp) => dp.title.toLowerCase() === project.title.toLowerCase() ||
                                (project.github && dp.github.toLowerCase() === project.github.toLowerCase())
                      );
                      if (!detailedProject) return null;
                      return (
                        <button
                          type="button"
                          onClick={() => setSelectedCaseStudy(detailedProject)}
                          className="text-xs font-mono text-gh-blue hover:underline bg-gh-blue/10 px-2 py-1 rounded border border-gh-blue/20 mr-1"
                        >
                          Case Study
                        </button>
                      );
                    })()}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gh-blue transition-colors"
                        title="GitHub Repo"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gh-blue transition-colors"
                        title="External Link"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCaseStudy && (
        <CaseStudyModal
          isOpen={!!selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          project={selectedCaseStudy}
        />
      )}
    </div>
  );
}
