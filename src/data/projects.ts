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
    year: 2024,
    title: 'Ai-Learning-Platform',
    madeAt: 'VIT Chennai',
    builtWith: ['React', 'Node.js', 'Vector DB', 'OpenAI API', 'TypeScript'],
    github: 'https://github.com/gokulra2006-del/Ai-Learning-Platform',
    featured: true,
  },
  {
    year: 2024,
    title: 'Sentinel-ai',
    madeAt: 'Personal Project',
    builtWith: ['TypeScript', 'Python', 'Scikit-Learn', 'Machine Learning'],
    github: 'https://github.com/gokulra2006-del/Sentinel-ai',
    featured: true,
  },
  {
    year: 2024,
    title: 'Alert-System',
    madeAt: 'Personal Project',
    builtWith: ['TypeScript', 'Node.js', 'Redis', 'WebSockets'],
    github: 'https://github.com/gokulra2006-del/Alert-System',
    featured: false,
  },
  {
    year: 2024,
    title: 'codereview-ai',
    madeAt: 'Incrix Techlutions',
    builtWith: ['JavaScript', 'OpenAI API', 'Docker', 'Node.js'],
    github: 'https://github.com/gokulra2006-del/codereview-ai',
    featured: false,
  },
  {
    year: 2023,
    title: 'organic-store',
    madeAt: 'Personal Project',
    builtWith: ['React', 'Express', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/gokulra2006-del/organic-store',
    featured: false,
  },
  {
    year: 2023,
    title: 'Deliver-Landing-Page',
    madeAt: 'Personal Project',
    builtWith: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/gokulra2006-del/Deliver-Landing-Page',
    featured: false,
  },
];

