import { useState } from 'react';
import { Section } from '../components/Section';
import { Folder, ChevronDown, ChevronUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FadeIn, FadeInStagger } from '../components/FadeIn';

const PROJECTS = [
  {
    title: 'Ai-Learning-Platform',
    featured: true,
    description: 'An AI-powered learning platform integrating Friday AI, an intelligent assistant feature that answers student queries and personalizes learning paths in real time.',
    tech: ['React', 'Node.js', 'Vector DB', 'OpenAI API'],
    github: 'https://github.com/Gokul/Ai-Learning-Platform',
    caseStudy: {
      problem: 'Traditional learning platforms provide a one-size-fits-all experience, leaving students without personalized guidance.',
      approach: 'Integrated "Friday AI", an LLM-backed assistant that uses Retrieval-Augmented Generation (RAG) to answer course-specific queries.',
      architecture: 'React frontend, Node.js backend, Vector database for embeddings, and OpenAI API.',
      challenges: 'Minimizing LLM hallucinations and reducing response latency below 800ms.',
      outcomes: 'Processed over 5,000 queries with a 95% satisfaction rate.'
    }
  },
  {
    title: 'Sentinel-ai',
    featured: true,
    description: 'An intelligent threat detection and security monitoring system leveraging machine learning to identify anomalies in network traffic.',
    tech: ['TypeScript', 'Python', 'Machine Learning'],
    github: 'https://github.com/Gokul/Sentinel-ai',
    caseStudy: {
      problem: 'Signature-based Intrusion Detection Systems (IDS) struggle to identify zero-day network threats.',
      approach: 'Developed an unsupervised machine learning model to cluster and flag anomalous network traffic in real-time.',
      architecture: 'Python for model training/inference, TypeScript for the real-time dashboard visualization.',
      challenges: 'Handling high-throughput packet data without dropping frames.',
      outcomes: 'Achieved a 92% anomaly detection accuracy on test datasets.'
    }
  },
  {
    title: 'Alert-System',
    featured: false,
    description: 'A robust, highly-available distributed alerting service designed to process and route critical system notifications efficiently.',
    tech: ['TypeScript', 'Node.js', 'Redis', 'WebSockets'],
    github: 'https://github.com/Gokul/Alert-System',
    caseStudy: {
      problem: 'Critical system alerts were getting lost or delayed during traffic spikes.',
      approach: 'Built a highly-available distributed queuing system to reliably process and route notifications.',
      architecture: 'Node.js worker pool, Redis for distributed queuing and rate-limiting, WebSockets for real-time client delivery.',
      challenges: 'Ensuring exactly-once delivery semantics across distributed nodes.',
      outcomes: 'System can sustain 10k+ events/sec with sub-50ms p99 latency.'
    }
  },
  {
    title: 'codereview-ai',
    featured: false,
    description: 'An AI-powered code review and execution platform that provides automated feedback on code quality, security vulnerabilities, and performance optimizations.',
    tech: ['JavaScript', 'OpenAI API', 'Docker'],
    github: 'https://github.com/Gokul/codereview-ai',
    caseStudy: {
      problem: 'Manual code reviews are time-consuming and prone to missing subtle security flaws.',
      approach: 'Automated the PR review process using static analysis combined with AI-driven contextual feedback.',
      architecture: 'JavaScript, OpenAI API, and a secure Dockerized sandbox for executing untrusted code snippets.',
      challenges: 'Safely executing untrusted user code without compromising host systems.',
      outcomes: 'Reduced average initial review cycle time by 60%.'
    }
  },
  {
    title: 'organic-store',
    featured: false,
    description: 'A full-stack e-commerce web application for organic products featuring a custom shopping cart, payment gateway integration, and admin dashboard.',
    tech: ['React', 'Express', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/Gokul/organic-store',
    caseStudy: {
      problem: 'A local organic business needed an end-to-end digital storefront with seamless payment integration.',
      approach: 'Built a full MERN stack application with custom state management for the shopping cart.',
      architecture: 'MongoDB, Express, React, Node.js, Stripe API.',
      challenges: 'Managing complex cart state and securely integrating payment gateways.',
      outcomes: 'Handled complete checkout flows safely with JWT-based authentication.'
    }
  },
  {
    title: 'Deliver-Landing-Page',
    featured: false,
    description: 'A modern, responsive, and conversion-optimized landing page designed for a logistics and delivery startup.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Gokul/Deliver-Landing-Page',
    caseStudy: {
      problem: 'A logistics startup\'s legacy site had high bounce rates and poor mobile performance.',
      approach: 'Redesigned from the ground up focusing on Core Web Vitals and conversion optimization.',
      architecture: 'Pure HTML/CSS/JS (zero heavy frameworks) to guarantee maximum performance.',
      challenges: 'Achieving perfect performance scores while maintaining rich visual assets.',
      outcomes: 'Scored 100 on Lighthouse Performance and Accessibility metrics.'
    }
  },
];

function FeaturedProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <FadeIn className="w-full">
      <div className="card-base card-hover p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group mb-12">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Folder size={120} className="text-gh-blue group-hover:scale-110 transition-transform duration-500" />
        </div>
        
        <div className="flex-1 z-10 w-full">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gh-blue font-medium tracking-wider text-sm uppercase">Featured Project</p>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gh-text-muted hover:text-gh-blue transition-colors"
            >
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
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
          
          <ul className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <li key={i} className="badge px-3 py-1 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}

function ExpandableProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeIn>
      <div className="card-base card-hover p-6 flex flex-col h-full group">
        <div className="flex justify-between items-center mb-6">
          <Folder size={40} className="text-gh-blue" />
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gh-text-muted hover:text-gh-blue transition-colors"
          >
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        
        <h3 className="text-xl font-bold text-gh-text mb-3 group-hover:text-gh-blue transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gh-text-muted text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        {expanded && (
          <div className="mb-6 text-sm border-l-2 border-gh-blue/50 pl-4 space-y-3">
            <p className="text-gh-text-muted"><strong className="text-gh-text">Problem:</strong> {project.caseStudy.problem}</p>
            <p className="text-gh-text-muted"><strong className="text-gh-text">Approach:</strong> {project.caseStudy.approach}</p>
            <p className="text-gh-text-muted"><strong className="text-green-400">Outcome:</strong> {project.caseStudy.outcomes}</p>
          </div>
        )}
        
        <div className="mt-auto pt-4 flex flex-col gap-4">
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <li key={i} className="text-xs font-medium text-gh-text-muted bg-gh-border/50 px-2.5 py-1 rounded-md">
                {tech}
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-xs font-medium text-gh-blue hover:text-gh-blue-hover transition-colors"
          >
            {expanded ? (
              <><ChevronUp size={16} /> Hide details</>
            ) : (
              <><ChevronDown size={16} /> Read case study</>
            )}
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export function Projects() {
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const regularProjects = PROJECTS.filter(p => !p.featured);

  return (
    <Section id="projects">
      <FadeInStagger>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gh-text mb-12 flex items-center gap-4">
            <span className="text-gh-blue">02.</span> Featured Work
            <div className="h-px bg-gh-border flex-grow ml-4 max-w-[200px]"></div>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={index} project={project} />
          ))}
        </div>

        <FadeIn>
          <h3 className="text-2xl font-bold text-gh-text mb-8">Other Noteworthy Projects</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project, index) => (
            <ExpandableProjectCard key={index} project={project} />
          ))}
        </div>
      </FadeInStagger>
    </Section>
  );
}
