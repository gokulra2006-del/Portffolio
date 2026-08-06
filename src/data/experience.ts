export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  url?: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'incrix',
    company: 'Incrix Techlutions',
    role: 'Full-Stack Developer Intern',
    period: 'May 27, 2026 — Jul 1, 2026',
    location: 'Chennai, India',
    description: [
      'Architected and implemented responsive web applications using React, TypeScript, and Node.js.',
      'Optimized backend API endpoints and database queries, reducing average response latency by 35%.',
      'Collaborated closely with design and product teams to deliver client features under tight deadlines.'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']
  },
  {
    id: 'vit',
    company: 'VIT Chennai',
    role: 'B.Tech Student & AI Researcher',
    period: '2023 — Present',
    location: 'Chennai, India',
    description: [
      'Pursuing B.Tech in Computer Science and Engineering with a focus on AI/ML and Distributed Systems.',
      'Won 2nd Place at Hackwarts Hackathon for developing an innovative AI-driven educational tool.',
      'Organized technical workshops and collaborative coding hackathons for 200+ engineering students.'
    ],
    skills: ['Python', 'C++', 'Machine Learning', 'Data Structures', 'Cybersecurity', 'Cloud Computing']
  }
];
