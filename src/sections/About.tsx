import { useState, useEffect } from 'react';
import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { GithubStats } from '../components/GithubStats';
import { MapPin, Clock, GraduationCap, Flame, Code2 } from 'lucide-react';
import { SiReact, SiTypescript, SiPython, SiNodedotjs, SiMongodb, SiRedis, SiDocker, SiFirebase, SiTailwindcss, SiGit } from 'react-icons/si';

const TECH_TOOLS = [
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-400' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Git', icon: SiGit, color: 'text-orange-400' },
];

export function About() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLocalTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="about" title="About Me" number="01">
      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Bio Card (2 columns, 2 rows) */}
          <FadeIn className="md:col-span-2 lg:col-span-2">
            <div className="card-base p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gh-text mb-4 flex items-center gap-2">
                  <Code2 className="text-gh-blue" size={22} />
                  Hi, I'm Gokul
                </h3>
                <p className="text-gh-text-muted text-sm md:text-base leading-relaxed mb-4">
                  B.Tech Computer Science student at VIT Chennai passionate about engineering high-performance web systems and AI integrations.
                </p>
                <p className="text-gh-text-muted text-sm md:text-base leading-relaxed">
                  I enjoy architecting robust backend APIs, fine-tuning LLM agent workflows using RAG, and creating slick developer-first user interfaces. Recently won <span className="text-gh-blue font-medium">2nd Place at Hackwarts Hackathon</span>.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gh-border/50 flex flex-wrap gap-2 text-xs font-mono text-gh-blue">
                <span>#FullStack</span>
                <span>#AI-ML</span>
                <span>#Cloud</span>
                <span>#Cybersecurity</span>
              </div>
            </div>
          </FadeIn>

          {/* Location & Timezone Clock Card */}
          <FadeIn className="md:col-span-1 lg:col-span-2">
            <div className="card-base p-6 h-full flex flex-col justify-between bg-gradient-to-br from-gh-bg-secondary to-gh-blue/5">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-gh-blue uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin size={14} /> Location & Timezone
                  </span>
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gh-text mb-1">Chennai, India</h4>
                <p className="text-xs text-gh-text-muted font-mono mb-4">IST (UTC +5:30)</p>
              </div>

              <div className="bg-gh-bg/70 p-4 rounded-xl border border-gh-border/60 font-mono text-center">
                <p className="text-xs text-gh-text-muted mb-1 flex items-center justify-center gap-1.5">
                  <Clock size={14} className="text-gh-blue" /> Local Time
                </p>
                <p className="text-2xl font-bold text-gh-text">{localTime || '12:00:00 PM'}</p>
              </div>
            </div>
          </FadeIn>

          {/* Tech Stack Infinite Marquee Card */}
          <FadeIn className="md:col-span-3 lg:col-span-4">
            <div className="card-base p-6 overflow-hidden">
              <h4 className="text-xs font-mono text-gh-text-muted uppercase tracking-wider mb-4">
                Core Technologies & Tools
              </h4>
              <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee flex items-center gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]">
                  {TECH_TOOLS.concat(TECH_TOOLS).map((tool, index) => {
                    const Icon = tool.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-gh-bg border border-gh-border/60 rounded-xl shrink-0"
                      >
                        <Icon size={18} className={tool.color} />
                        <span className="text-sm font-medium text-gh-text">{tool.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Education Card */}
          <FadeIn className="md:col-span-1 lg:col-span-2">
            <div className="card-base p-6 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-gh-blue uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <GraduationCap size={16} /> Education
                </span>
                <h4 className="text-lg font-bold text-gh-text">VIT Chennai</h4>
                <p className="text-sm text-gh-text-muted">B.Tech Computer Science & Engineering</p>
              </div>
              <p className="text-xs font-mono text-gh-text-muted mt-4">2023 — 2027</p>
            </div>
          </FadeIn>

          {/* Currently Building Card */}
          <FadeIn className="md:col-span-2 lg:col-span-2">
            <div className="card-base p-6 h-full flex flex-col justify-between border-gh-blue/30 bg-gh-blue/5">
              <div>
                <span className="text-xs font-mono text-gh-blue uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <Flame size={16} className="text-amber-400" /> Currently Building
                </span>
                <h4 className="text-lg font-bold text-gh-text mb-2">Friday AI & Sentinel-ai</h4>
                <p className="text-xs text-gh-text-muted leading-relaxed">
                  Integrating Retrieval-Augmented Generation into custom learning workflows & training unsupervised machine learning models for low-latency network intrusion detection.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* GitHub Stats Card */}
          <FadeIn className="md:col-span-3 lg:col-span-4">
            <div className="card-base p-6">
              <GithubStats />
            </div>
          </FadeIn>

        </div>
      </FadeInStagger>
    </Section>
  );
}
