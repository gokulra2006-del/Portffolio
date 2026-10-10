export type TimelineType =
  | 'internship'
  | 'project'
  | 'hackathon'
  | 'education'
  | 'opensource'
  | 'learning';

export interface TimelineEntry {
  id: string;
  type: TimelineType;
  title: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  actionBullets: string[]; // Action + Technology + Result
  skills: string[];
  link?: string;
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'incrix-internship',
    type: 'internship',
    title: 'Full-Stack Developer Intern',
    organization: 'Incrix Techlutions',
    period: 'May 2024 — July 2024',
    location: 'Chennai, India',
    summary: 'Contributed to client-facing web applications and internal administrative dashboards.',
    actionBullets: [
      'Built REST APIs with Node.js and MongoDB for multi-role workflows, reducing repeated manual processing across the main user flow.',
      'Refactored frontend state management and data fetching in React and TypeScript, eliminating redundant re-renders across heavy tabular dashboard views.',
      'Participated in daily Agile standups and sprint reviews, collaborating with senior developers on API contracts and bug triage.'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    id: 'dual-enjoy-systems',
    type: 'project',
    title: 'Dual-enjoy Windows Audio Synchronizer',
    organization: 'Independent Systems Project',
    period: 'Jan 2025 — Feb 2025',
    location: 'Open Source',
    summary: 'Engineered a Windows CoreAudio WASAPI desktop utility for dual Bluetooth playback.',
    actionBullets: [
      'Captured uncompressed system audio using Windows CoreAudio WASAPI loopback, routing synchronized streams to two Bluetooth headphones simultaneously.',
      'Designed lock-free circular audio buffers in C# and .NET 8, preventing thread contention between the high-priority real-time audio thread and the WPF UI.',
      'Implemented dynamic sample-rate conversion and linear clock drift compensation, maintaining synchronized dual-device playback across long listening sessions.'
    ],
    skills: ['C#', '.NET 8', 'Windows CoreAudio', 'WASAPI', 'WPF', 'Audio DSP'],
    link: 'https://github.com/gokulra2006-del/Dual-enjoy'
  },
  {
    id: 'hackwarts-hackathon',
    type: 'hackathon',
    title: '2nd Place Finalist (AI Track)',
    organization: 'Hackwarts Hackathon',
    period: 'October 2024',
    location: 'VIT Chennai',
    summary: 'Engineered an intelligent retrieval-augmented assistant under a 24-hour sprint.',
    actionBullets: [
      'Engineered a RAG-based question-answering prototype connecting student queries directly to curriculum materials using vector embeddings.',
      'Implemented multi-document parsing and semantic text chunking in Python, providing grounded citations with generated responses.',
      'Delivered a live technical demo and architectural presentation before a panel of industry judges, securing 2nd Place out of competing university teams.'
    ],
    skills: ['Python', 'Vector DB', 'RAG Architecture', 'LLM Prompting', 'FastAPI'],
    link: 'https://github.com/gokulra2006-del/Ai-Learning-Platform'
  },
  {
    id: 'agribank-platform',
    type: 'project',
    title: 'AgriBank Agriculture Finance Platform',
    organization: 'Independent FinTech Project',
    period: 'Nov 2024 — Dec 2024',
    location: 'Open Source',
    summary: 'Full-stack agricultural loan origination, credit evaluation, and subsidy management portal.',
    actionBullets: [
      'Designed role-based authorization pipelines with Node.js and JWT middleware, enforcing strict privilege boundaries between farmers, bank officers, and administrators.',
      'Developed credit-risk assessment scoring logic synthesizing farmer profiles, land size, crop cycles, and repayment histories to support transparent loan evaluation.',
      'Constructed MongoDB document schemas with compound indexing and audit trails, tracking multi-stage approval lifecycles from submission to disbursement.'
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
    link: 'https://github.com/gokulra2006-del/agri-bank'
  },
  {
    id: 'vit-chennai',
    type: 'education',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Vellore Institute of Technology (VIT), Chennai',
    period: '2023 — Present (Expected May 2027)',
    location: 'Chennai, India',
    summary: 'Undergraduate engineering program focusing on computer systems, algorithmic foundations, database design, and software engineering.',
    actionBullets: [
      'Completed foundational coursework with strong academic standing: Data Structures & Algorithms, Operating Systems, Database Management Systems (DBMS), Object-Oriented Programming, and Computer Networks.',
      'Constructed practical engineering assignments including multi-threaded CPU schedulers, socket-level networking protocols, and normalized SQL database schemas.',
      'Active participant in campus technical clubs, peer developer workshops, and university-level hackathon teams.'
    ],
    skills: ['Data Structures & Algorithms', 'C++', 'Java', 'Operating Systems', 'DBMS', 'Computer Networks']
  },
  {
    id: 'ai-codereview-oss',
    type: 'opensource',
    title: 'AI Code Review Assistant Tooling',
    organization: 'Open Source Developer Tool',
    period: 'Feb 2025 — Present',
    location: 'Open Source',
    summary: 'Static analysis and LLM orchestration gateway automating code hygiene and security triage.',
    actionBullets: [
      'Constructed an Express.js backend gateway with token estimation and OpenRouter model routing, providing automated multi-category code quality critiques.',
      'Enforced structured JSON output schemas on LLM completions, guaranteeing consistent line-specific findings for security, performance, and style issues.',
      'Built interactive React diff viewer with severity filtering, giving developers immediate actionable suggestions before pull request creation.'
    ],
    skills: ['TypeScript', 'React.js', 'Node.js', 'LLM Gateway', 'JSON Schema', 'OpenRouter API'],
    link: 'https://github.com/gokulra2006-del/codereview-ai'
  },
  {
    id: 'current-learning',
    type: 'learning',
    title: 'Edge AI & Distributed Systems Focus',
    organization: 'Self-Directed Engineering Specialization',
    period: 'Present Focus',
    location: 'Continuous Learning',
    summary: 'Focusing on low-latency inference near data sources and scalable backend event architecture.',
    actionBullets: [
      'Benchmarking quantized neural network runtimes (ONNX Runtime, TensorRT) on constrained edge devices for computer vision anomaly detection.',
      'Studying event-driven streaming and caching patterns with Redis and Kafka for resilient asynchronous backend pipelines.',
      'Deepening knowledge of Linux systems programming, memory management, and concurrent computing.'
    ],
    skills: ['Edge AI', 'ONNX Runtime', 'Redis', 'System Architecture', 'Linux Internals']
  }
];
