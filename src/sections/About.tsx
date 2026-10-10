import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { GithubStats } from '../components/GithubStats';
import { Terminal } from '../components/Terminal';
import { ShieldCheck, Flame, Code2, Compass, Target, MapPin } from 'lucide-react';

export function About() {
  return (
    <Section id="about" title="About" number="01">
      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Bio & Philosophy Card (2 cols) */}
          <FadeIn className="md:col-span-2">
            <div className="card-base p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-gh-blue font-semibold">
                  <Code2 size={20} />
                  <span className="text-sm font-mono uppercase tracking-wider">Engineering Background</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gh-text mb-4">
                  Full-stack engineering grounded in systems and applied AI.
                </h3>
                <p className="text-gh-text-muted text-sm sm:text-base leading-relaxed mb-4">
                  I am a Computer Science & Engineering student at <strong className="text-gh-text font-medium">VIT Chennai</strong> (Class of 2027). I focus on building reliable software across the stack: architecting typed REST APIs, implementing deterministic data models, and delivering accessible, responsive user interfaces.
                </p>
                <p className="text-gh-text-muted text-sm sm:text-base leading-relaxed">
                  Beyond web applications, I explore systems-level challenges like low-latency audio capture with Windows WASAPI and applied LLM workflows using structured output validation and model gateway routing.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gh-border/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gh-text-muted">
                <span className="flex items-center gap-1.5 text-gh-text">
                  <MapPin size={14} className="text-gh-blue" /> Chennai, India • Open to remote & on-site
                </span>
                <span className="text-gh-blue font-semibold">Available for 2025/2026 roles</span>
              </div>
            </div>
          </FadeIn>

          {/* Engineering Standards Card */}
          <FadeIn>
            <div className="card-base p-6 h-full flex flex-col justify-between bg-gh-bg-secondary/60">
              <div>
                <span className="text-xs font-mono text-gh-blue uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <ShieldCheck size={16} /> Engineering Standards
                </span>
                <h4 className="text-base font-bold text-gh-text mb-3">How I build software</h4>
                <ul className="space-y-2.5 text-xs text-gh-text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-gh-blue font-bold font-mono">›</span>
                    <span><strong className="text-gh-text">Type Safety:</strong> Strict contracts across client state, REST boundaries, and data schemas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gh-blue font-bold font-mono">›</span>
                    <span><strong className="text-gh-text">Defensive Design:</strong> Input sanitization, route-level RBAC, and predictable error handling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gh-blue font-bold font-mono">›</span>
                    <span><strong className="text-gh-text">Code Hygiene:</strong> Atomic Git commits, automated test coverage, and documented trade-offs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Engineering Interests */}
          <FadeIn>
            <div className="card-base p-6 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-gh-blue uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <Compass size={16} /> Engineering Interests
                </span>
                <h4 className="text-base font-bold text-gh-text mb-3">What I enjoy building</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gh-text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-gh-blue font-bold font-mono">›</span>
                    <span><strong className="text-gh-text">API & System Design:</strong> Structured REST endpoints, RBAC middleware, and predictable data schemas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gh-blue font-bold font-mono">›</span>
                    <span><strong className="text-gh-text">Practical AI Systems:</strong> RAG pipelines, LLM gateway routing, and deterministic JSON schemas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gh-blue font-bold font-mono">›</span>
                    <span><strong className="text-gh-text">Media & Desktop Systems:</strong> Low-latency audio buffer routing and drift correction.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Target Roles */}
          <FadeIn>
            <div className="card-base p-6 h-full flex flex-col justify-between bg-gh-blue/5 border-gh-blue/20">
              <div>
                <span className="text-xs font-mono text-gh-blue uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <Target size={16} /> Target Opportunities
                </span>
                <h4 className="text-base font-bold text-gh-text mb-2">Roles I am seeking</h4>
                <p className="text-xs sm:text-sm text-gh-text-muted mb-4 leading-relaxed">
                  Seeking junior or internship engineering roles where code quality, reliable backend design, and thoughtful UX are valued:
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="badge">Junior Full-Stack Engineer</span>
                  <span className="badge">Software Engineer Intern</span>
                  <span className="badge">Backend Engineer (Node/Python)</span>
                  <span className="badge">AI Application Engineer</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Currently Building */}
          <FadeIn>
            <div className="card-base p-6 h-full flex flex-col justify-between border-gh-border">
              <div>
                <span className="text-xs font-mono text-gh-blue uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <Flame size={16} className="text-amber-400" /> Currently Building
                </span>
                <h4 className="text-base font-bold text-gh-text mb-2">Climatic Twin & Edge AI</h4>
                <p className="text-xs sm:text-sm text-gh-text-muted leading-relaxed">
                  Developing an edge-focused detection pipeline for real-time anomaly analysis, paired with Climatic Twin simulations for environmental data modeling.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* GitHub Activity & Stats Card */}
          <FadeIn className="md:col-span-2 lg:col-span-3">
            <div className="card-base p-6">
              <GithubStats />
            </div>
          </FadeIn>

          {/* Interactive Developer Terminal */}
          <FadeIn className="md:col-span-2 lg:col-span-3">
            <div className="pt-2">
              <div className="text-center sm:text-left mb-1">
                <span className="text-xs font-mono text-gh-blue uppercase tracking-wider">
                  Interactive Developer Shell
                </span>
                <p className="text-xs text-gh-text-muted mt-0.5">
                  Type <code className="text-gh-blue bg-gh-blue/10 px-1 py-0.5 rounded font-mono">help</code>, <code className="text-gh-blue bg-gh-blue/10 px-1 py-0.5 rounded font-mono">projects</code>, or <code className="text-gh-blue bg-gh-blue/10 px-1 py-0.5 rounded font-mono">skills</code> in the prompt below:
                </p>
              </div>
              <Terminal />
            </div>
          </FadeIn>
        </div>
      </FadeInStagger>
    </Section>
  );
}
