export interface ArchiveProject {
  year: number;
  title: string;
  madeAt?: string;
  builtWith: string[];
  github?: string;
  link?: string;
  featured?: boolean;
}

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    year: 2025,
    title: 'AgriBank — Agriculture Banking & Subsidy Platform',
    madeAt: 'Capstone Project',
    builtWith: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Machine Learning'],
    github: 'https://github.com/gokulra2006-del/agri-bank',
    featured: true,
  },
  {
    year: 2025,
    title: 'Dual-enjoy — Dual Bluetooth Headphone Synchronizer',
    madeAt: 'Systems Project',
    builtWith: ['C#', '.NET 8', 'Windows CoreAudio', 'WASAPI', 'Bluetooth', 'WPF/XAML'],
    github: 'https://github.com/gokulra2006-del/Dual-enjoy',
    featured: true,
  },
  {
    year: 2025,
    title: 'AI Code Review Assistant',
    madeAt: 'Developer Tool',
    builtWith: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'LLM APIs via OpenRouter'],
    github: 'https://github.com/gokulra2006-del/codereview-ai',
    featured: true,
  },
  {
    year: 2024,
    title: 'Edge AI — Real-Time Intelligent Detection Platform',
    madeAt: 'Systems & ML',
    builtWith: ['React.js', 'Python', 'Machine Learning', 'Computer Vision'],
    github: 'https://github.com/gokulra2006-del/Edge-AI',
    featured: false,
  },
  {
    year: 2024,
    title: 'Organic Store — Full-Stack E-Commerce Platform',
    madeAt: 'Commercial Web App',
    builtWith: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/gokulra2006-del/organic-store',
    featured: false,
  },
  {
    year: 2024,
    title: 'AI Learning Platform (Friday AI)',
    madeAt: 'VIT Chennai (Hackathon)',
    builtWith: ['React', 'Node.js', 'Vector DB', 'OpenAI API', 'TypeScript'],
    github: 'https://github.com/gokulra2006-del/Ai-Learning-Platform',
    featured: false,
  },
  {
    year: 2024,
    title: 'Distributed Alert Notification Service',
    madeAt: 'Systems Project',
    builtWith: ['TypeScript', 'Node.js', 'Redis', 'WebSockets'],
    github: 'https://github.com/gokulra2006-del/Alert-System',
    featured: false,
  },
  {
    year: 2023,
    title: 'Deliver — Logistics Startup Landing Page',
    madeAt: 'Web Project',
    builtWith: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/gokulra2006-del/Deliver-Landing-Page',
    featured: false,
  },
];
