import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { FadeInStagger } from '../components/FadeIn';
import { EXPERIENCES } from '../data/experience';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';


export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="experience" title="Where I've Worked" number="02">
      <FadeInStagger>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 min-h-[320px]">
          {/* Tab Navigation */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-gh-border relative no-scrollbar min-w-[180px]">
            {EXPERIENCES.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-3 text-left font-mono text-sm transition-colors duration-200 relative whitespace-nowrap md:whitespace-normal ${
                    isActive ? 'text-gh-blue font-medium' : 'text-gh-text-muted hover:text-gh-text hover:bg-gh-bg-secondary/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 md:bottom-auto md:left-0 md:top-0 h-[2px] md:h-full w-full md:w-[2px] bg-gh-blue -ml-5 md:ml-0"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.company}
                </button>
              );
            })}
          </div>

          {/* Active Experience Panel */}
          <div className="flex-1">
            {EXPERIENCES.map((item, index) => {
              if (index !== activeTab) return null;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gh-text flex flex-wrap items-center gap-2">
                    <span>{item.role}</span>
                    <span className="text-gh-blue">@ {item.company}</span>
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gh-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {item.location}
                    </span>
                  </div>

                  <ul className="space-y-3 pt-2 text-gh-text-muted text-sm md:text-base leading-relaxed">
                    {item.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-gh-blue shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </FadeInStagger>
    </Section>
  );
}
