import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'Java', 'C++', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    title: 'Databases & APIs',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'REST APIs', 'API Integration', 'GraphQL'],
  },
  {
    title: 'Cloud, Tools & Security',
    skills: ['Git & GitHub', 'Docker', 'Firebase', 'Cloud Computing', 'Cybersecurity', 'SOC (Security Operations)', 'Vite'],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <FadeInStagger>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gh-text mb-12 flex items-center gap-4">
            <span className="text-gh-blue">03.</span> Technical Skills & Impact
            <div className="h-px bg-gh-border flex-grow ml-4 max-w-[200px]"></div>
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="mb-12 bg-gh-blue/5 border border-gh-blue/20 rounded-xl p-6 text-gh-text-muted leading-relaxed">
            <h3 className="text-gh-text font-bold text-lg mb-4">Engineering Impact</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-gh-text">Performance:</strong> Maintained 100 Lighthouse scores and reduced API response times across projects by ~40% using Redis caching and optimized queries.</li>
              <li><strong className="text-gh-text">Scale:</strong> Built highly-available services capable of sustaining 10,000+ events/sec with sub-50ms latency.</li>
              <li><strong className="text-gh-text">AI Integration:</strong> Successfully deployed production-ready LLM agents using RAG, handling 5,000+ real-time queries with minimal hallucination.</li>
            </ul>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <FadeIn key={index}>
              <div className="bg-gh-bg-secondary p-6 rounded-xl border border-gh-border h-full">
                <h3 className="text-lg font-semibold text-gh-text mb-6 pb-2 border-b border-gh-border">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="badge">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </Section>
  );
}
