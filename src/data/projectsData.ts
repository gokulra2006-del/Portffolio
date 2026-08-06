export interface Project {
  title: string;
  featured: boolean;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  caseStudy: {
    problem: string;
    approach: string;
    architecture: string;
    outcomes: string;
  };
}

export const PROJECTS: Project[] = [
  {
    title: 'Ai-Learning-Platform',
    featured: true,
    description: 'An AI-powered learning platform integrating Friday AI, an intelligent assistant feature that answers student queries and personalizes learning paths in real time.',
    tech: ['React', 'Node.js', 'Vector DB', 'OpenAI API'],
    github: 'https://github.com/gokulra2006-del/Ai-Learning-Platform',
    caseStudy: {
      problem: 'Traditional learning platforms provide a one-size-fits-all experience, leaving students without personalized guidance.',
      approach: 'Integrated "Friday AI", an LLM-backed assistant that uses Retrieval-Augmented Generation (RAG) to answer course-specific queries.',
      architecture: 'React frontend, Node.js backend, Vector database for embeddings, and OpenAI API.',
      outcomes: 'Currently in active development, focusing on integrating RAG capabilities into a functional MVP.'
    }
  },
  {
    title: 'Sentinel-ai',
    featured: true,
    description: 'An intelligent threat detection and security monitoring system leveraging machine learning to identify anomalies in network traffic.',
    tech: ['TypeScript', 'Python', 'Machine Learning'],
    github: 'https://github.com/gokulra2006-del/Sentinel-ai',
    caseStudy: {
      problem: 'Signature-based Intrusion Detection Systems (IDS) struggle to identify zero-day network threats.',
      approach: 'Developed an unsupervised machine learning model to cluster and flag anomalous network traffic in real-time.',
      architecture: 'Python for model training/inference, TypeScript for the real-time dashboard visualization.',
      outcomes: 'Currently in active development, focusing on building and evaluating the initial machine learning prototype.'
    }
  },
  {
    title: 'Alert-System',
    featured: false,
    description: 'A robust, highly-available distributed alerting service designed to process and route critical system notifications efficiently.',
    tech: ['TypeScript', 'Node.js', 'Redis', 'WebSockets'],
    github: 'https://github.com/gokulra2006-del/Alert-System',
    caseStudy: {
      problem: 'Critical system alerts were getting lost or delayed during traffic spikes.',
      approach: 'Built a highly-available distributed queuing system to reliably process and route notifications.',
      architecture: 'Node.js worker pool, Redis for distributed queuing and rate-limiting, WebSockets for real-time client delivery.',
      outcomes: 'Currently in active development, focusing on building a reliable distributed queuing system.'
    }
  },
  {
    title: 'codereview-ai',
    featured: false,
    description: 'An AI-powered code review and execution platform that provides automated feedback on code quality, security vulnerabilities, and performance optimizations.',
    tech: ['JavaScript', 'OpenAI API', 'Docker'],
    github: 'https://github.com/gokulra2006-del/codereview-ai',
    caseStudy: {
      problem: 'Manual code reviews are time-consuming and prone to missing subtle security flaws.',
      approach: 'Automated the PR review process using static analysis combined with AI-driven contextual feedback.',
      architecture: 'JavaScript, OpenAI API, and a secure Dockerized sandbox for executing untrusted code snippets.',
      outcomes: 'Currently in active development, focusing on building a functional proof-of-concept for automated review workflows.'
    }
  },
  {
    title: 'organic-store',
    featured: false,
    description: 'A full-stack e-commerce web application for organic products featuring a custom shopping cart, payment gateway integration, and admin dashboard.',
    tech: ['React', 'Express', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/gokulra2006-del/organic-store',
    caseStudy: {
      problem: 'A local organic business needed an end-to-end digital storefront with seamless payment integration.',
      approach: 'Built a full MERN stack application with custom state management for the shopping cart.',
      architecture: 'MongoDB, Express, React, Node.js, Stripe API.',
      outcomes: 'Currently in active development, focusing on building the core shopping cart and checkout flows.'
    }
  },
  {
    title: 'Deliver-Landing-Page',
    featured: false,
    description: 'A modern, responsive, and conversion-optimized landing page designed for a logistics and delivery startup.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/gokulra2006-del/Deliver-Landing-Page',
    caseStudy: {
      problem: 'A logistics startup\'s legacy site had high bounce rates and poor mobile performance.',
      approach: 'Redesigned from the ground up focusing on Core Web Vitals and conversion optimization.',
      architecture: 'Pure HTML/CSS/JS (zero heavy frameworks) to guarantee maximum performance.',
      outcomes: 'Currently in active development, focusing on achieving high performance and excellent Lighthouse scores.'
    }
  },
];

