import type { ProjectEvidenceData } from '../components/ProjectEvidence';

export interface CaseStudyDetails {
  context: string;
  problem: string;
  users: string;
  responsibilities: string;
  architecture: string;
  technicalDecisions: string[];
  securityConsiderations: string;
  testingStrategy: string;
  metrics: string;
  tradeoffs: string;
  futureImprovements: string;
}

export type ProjectDomain = 'Full-stack' | 'AI/ML' | 'Systems' | 'Desktop' | 'Developer tools';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  featured: boolean;
  role: string;
  domains: ProjectDomain[];
  description: string;
  problem: string;
  targetUsers: string;
  approach: string;
  outcome: string; // Action + Technology + Measurable Impact (or placeholder)
  challenge: string; // Main engineering challenge
  tech: string[];
  github: string;
  live?: string;
  highlights?: string[];
  evidence: ProjectEvidenceData;
  mediaPlaceholder?: {
    type: 'screenshot' | 'architecture' | 'demo';
    caption: string;
  };
  caseStudy: CaseStudyDetails;
}

export const PROJECTS: Project[] = [
  {
    id: 'agri-bank',
    title: 'AgriBank',
    tagline: 'Agriculture Banking & Subsidy Platform',
    featured: true,
    role: 'Full-Stack Developer (End-to-End Design & Implementation)',
    domains: ['Full-stack', 'AI/ML'],
    description: 'A full-stack agriculture finance platform connecting farmers, credit officers, and branch administrators for loan origination, credit evaluation, repayments, and government subsidy management.',
    problem: 'Rural agricultural borrowers encounter severe friction accessing institutional credit and tracking government subsidies, while bank officers struggle with fragmented, manual paper-based credit evaluations.',
    targetUsers: 'Smallholder farmers seeking seasonal crop loans; rural bank loan officers; branch administrators auditing disbursement records.',
    approach: 'Architected a multi-role web platform with automated loan application lifecycles, JWT-based role access control (RBAC), credit-risk scoring modules, and transparent subsidy audit tracking.',
    outcome: 'Engineered role-based loan workflows connecting farmers, loan officers, and admins; add measured impact: [benchmark approval cycle time reduction and credit-risk scoring precision on test dataset].',
    challenge: 'Enforcing strict role-based access control and transactional state transitions across multi-role approval lifecycles without data inconsistencies.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Machine Learning'],
    github: 'https://github.com/gokulra2006-del/agri-bank',
    highlights: [
      'Built multi-role portals for farmers, loan officers, and administrators with strict JWT-authenticated RBAC middleware.',
      'Designed credit-risk scoring logic synthesizing farmer profile, crop cycle, land size, and repayment history.',
      'Implemented transactional loan records, audit histories, and status notifications across approval stages.',
      'Added multilingual interface assistance for non-English-speaking rural farming communities.'
    ],
    evidence: {
      github: 'https://github.com/gokulra2006-del/agri-bank',
      ciStatus: 'verified',
      securityChecks: ['Bcrypt (12 rounds)', 'JWT RBAC Middleware', 'NoSQL Sanitization'],
      privatePlaceholders: [
        '[Add benchmark: median loan evaluation response time under concurrent loads]',
        '[Add benchmark: credit risk scoring precision vs baseline manual approvals]'
      ]
    },
    mediaPlaceholder: {
      type: 'screenshot',
      caption: 'AgriBank loan application & multi-role evaluation dashboard'
    },
    caseStudy: {
      context: 'Independent FinTech prototype engineered to bridge agricultural funding barriers and formalize credit assessment in rural banking.',
      problem: 'Smallholder farmers face multi-week delays in seasonal crop loan approvals due to manual documentation and fragmented subsidy status visibility. Lenders face elevated default risks without consolidated farm risk parameters.',
      users: 'Smallholder farmers applying for crop loans and subsidies; bank credit officers evaluating financial viability; bank administrators overseeing disbursement ledgers and audit records.',
      responsibilities: 'Single-handedly designed the data schemas, backend REST APIs, authentication security, loan status state machine, and React UI dashboards.',
      architecture: 'Three-tier architecture: React Single Page Application (SPA) communicating over REST with an Express/Node.js service layer, backed by MongoDB with indexed collections for users, loan applications, and subsidy ledgers.',
      technicalDecisions: [
        'Enforced Role-Based Access Control (RBAC) via route-level JWT middleware rather than client-side UI hiding.',
        'Structured loan applications as a finite state machine (Draft -> Submitted -> Under Review -> Approved/Rejected -> Disbursed -> Repaid) to prevent illegal workflow jumps.',
        'Isolated credit risk calculation as an independent evaluation service module for future model retraining.'
      ],
      securityConsiderations: 'Bcrypt password hashing (12 salt rounds), httpOnly cookie token handling, input validation with strict JSON schemas against NoSQL injection, and sanitized query params.',
      testingStrategy: 'Unit tests for risk-scoring boundary values; integration testing across auth and loan approval endpoints; manual validation of edge states (duplicate submissions, unauthorized role requests).',
      metrics: 'Deterministic API response turnaround under 120ms locally; add measured impact: [profile p95 endpoint latency under concurrent loan application load].',
      tradeoffs: 'Chose MongoDB for schema flexibility during iterative field modeling over relational PostgreSQL, requiring application-level data integrity checks for financial constraints.',
      futureImprovements: 'Introduce double-entry ledger bookkeeping with PostgreSQL ACID transactions, integrate automated land record verification APIs, and implement idempotency keys for repayment calls.'
    }
  },
  {
    id: 'dual-enjoy',
    title: 'Dual-enjoy',
    tagline: 'Dual Bluetooth Headphone Synchronizer for Windows',
    featured: true,
    role: 'Systems & Audio Developer',
    domains: ['Systems', 'Desktop'],
    description: 'A Windows desktop application that captures system audio and streams it to two Bluetooth headphones simultaneously with independent volume control, low-latency buffering, and automated drift compensation.',
    problem: 'Windows OS does not natively route system audio to two independent Bluetooth headphones simultaneously, causing severe latency drift, device desynchronization, and audio echo for co-listeners.',
    targetUsers: 'People sharing laptop movies during flights/commutes; video editors reviewing footage jointly; gamers co-listening on a single machine.',
    approach: 'Developed a C# .NET 8 desktop engine utilizing WASAPI loopback capture, lock-free circular audio buffers, sample-rate conversion, dynamic delay compensation, and continuous drift correction.',
    outcome: 'Engineered a real-time WASAPI audio pipeline with circular buffers and dynamic drift compensation across dual Bluetooth sinks; add measured impact: [measure steady-state audio drift delta in ms and CPU utilization over a 60-minute session].',
    challenge: 'Eliminating clock drift between separate hardware DACs while keeping buffer latency imperceptible (sub-20ms) without audio clicks or pitch distortions.',
    tech: ['C#', '.NET 8', 'Windows CoreAudio', 'WASAPI', 'Bluetooth', 'WPF/XAML'],
    github: 'https://github.com/gokulra2006-del/Dual-enjoy',
    highlights: [
      'Captured system master audio using Windows CoreAudio WASAPI loopback in low-latency event-driven mode.',
      'Implemented circular audio buffering, linear interpolation sample-rate conversion, and independent per-device volume channels.',
      'Engineered automatic Bluetooth disconnect recovery, device polling hooks, and real-time buffer diagnostics.',
      'Built automated synchronization and latency measurement test utilities.'
    ],
    evidence: {
      github: 'https://github.com/gokulra2006-del/Dual-enjoy',
      ciStatus: 'verified',
      securityChecks: ['User-space execution (No kernel driver requirement)', 'Boundary-checked pointer safety in C# unsafe blocks'],
      privatePlaceholders: [
        '[Add benchmark: steady-state sync offset in milliseconds over 60-min continuous playback]',
        '[Add benchmark: CPU & RAM consumption on dual Bluetooth audio streams]'
      ]
    },
    mediaPlaceholder: {
      type: 'screenshot',
      caption: 'Dual-enjoy device routing and real-time buffer diagnostic UI'
    },
    caseStudy: {
      context: 'Personal systems engineering utility solving an unaddressed OS limitation for shared multimedia listening (travelers, co-workers, and gamers).',
      problem: 'Windows CoreAudio treats each Bluetooth device as an isolated playback endpoint. When attempting to duplicate audio using virtual cables, clock drift between different Bluetooth device chipsets causes the two streams to drift out of sync within minutes.',
      users: 'People watching movies together on a single laptop in public or transit; co-workers reviewing video/audio content simultaneously; gamers co-listening to game sound.',
      responsibilities: 'Researched Windows CoreAudio APIs, implemented the audio DSP pipeline in C# and .NET 8, designed buffer management and drift compensation algorithms, and created the WPF interface.',
      architecture: 'System Mix -> WASAPI Loopback Capture Client -> Ring Buffer -> Dual Audio Worker Threads (Per-device volume gain & resampler) -> Dynamic Delay Line & Drift Adjuster -> Dual WASAPI Render Clients.',
      technicalDecisions: [
        'Utilized WASAPI event-driven capture mode rather than polling to achieve sub-20ms audio buffer windows without high CPU usage.',
        'Designed lock-free circular audio buffers to avoid thread contention between the high-priority real-time audio thread and UI polling.',
        'Implemented dynamic sample insertion/dropping algorithm for subtle clock drift correction without perceptible pitch distortion.'
      ],
      securityConsiderations: 'Operates entirely in user space without requiring custom signed kernel audio drivers, reducing system crash risk; memory boundary safety enforced during raw audio byte pointer manipulation.',
      testingStrategy: 'Simulated dual-device capture using loopback audio pulses recorded via virtual audio cables; automated reconnect testing by programmatically toggling Bluetooth radio adapters.',
      metrics: 'Continuous synchronization achieved without process crashes; add measured impact: [quantify steady-state drift delta in milliseconds across varied Bluetooth hardware pairs].',
      tradeoffs: 'Built on WPF, restricting deployment strictly to Windows platforms, but enabling direct access to native Windows CoreAudio COM interfaces with zero runtime interop bridges.',
      futureImprovements: 'Port the audio processing core to a cross-platform Rust audio library (CPAL), integrate acoustic auto-calibration using microphone feedback, and package as an MSIX installer.'
    }
  },
  {
    id: 'code-review-assistant',
    title: 'AI Code Review Assistant',
    tagline: 'Developer Productivity & Code Quality Analysis Tool',
    featured: true,
    role: 'Full-Stack & AI Systems Developer',
    domains: ['AI/ML', 'Developer tools', 'Full-stack'],
    description: 'A full-stack developer tool that inspects source code in real time and generates structured, actionable feedback on code quality, security vulnerabilities, and maintainability using OpenRouter-routed LLM APIs.',
    problem: 'Manual code reviews are time-consuming and often miss subtle code smells, anti-patterns, and security regressions before production deployments.',
    targetUsers: 'Individual software engineers sanity-checking code prior to PR submission; engineering leads enforcing code cleanliness standards.',
    approach: 'Built an interactive developer workbench that parses source files and leverages structured LLM prompting via OpenRouter to deliver categorized, line-specific code improvement recommendations.',
    outcome: 'Built an automated review pipeline utilizing structured LLM prompt schemas and model routing; add measured impact: [evaluate review generation latency, token cost, and defect detection agreement on a 50-sample code evaluation set].',
    challenge: 'Guaranteeing consistent, schema-validated JSON outputs from non-deterministic LLM responses to render interactive line-specific code diffs reliably.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'LLM APIs via OpenRouter', 'REST APIs'],
    github: 'https://github.com/gokulra2006-del/codereview-ai',
    highlights: [
      'Designed an interactive review workbench with file inputs, severity filters, and line-specific feedback diffs.',
      'Implemented an Express.js orchestration backend with token estimation and OpenRouter API routing.',
      'Enforced structured JSON responses for predictable categorizations (Security, Performance, Maintainability).',
      'Engineered error handling and fallback routing across multiple LLM model providers.'
    ],
    evidence: {
      github: 'https://github.com/gokulra2006-del/codereview-ai',
      ciStatus: 'verified',
      securityChecks: ['Zero persistent code storage', 'Regex credential and API key sanitization before dispatch'],
      privatePlaceholders: [
        '[Add benchmark: median review generation latency across varied file sizes]',
        '[Add benchmark: LLM token expenditure cost per average review session]'
      ]
    },
    mediaPlaceholder: {
      type: 'screenshot',
      caption: 'AI Code Review Assistant line diff analysis & severity inspector'
    },
    caseStudy: {
      context: 'Developer tool created to automate initial PR sanitation, catch basic security flaws, and enforce clean coding conventions before peer review.',
      problem: 'Engineering teams lose hours reviewing trivial syntax, style, and basic security issues, fatiguing reviewers and bottlenecking deployment cycles.',
      users: 'Software engineers preparing pull requests; engineering teams seeking consistent code quality checklists; students and junior developers learning clean code conventions.',
      responsibilities: 'Built the React frontend, designed the prompt engineering templates, implemented the backend API gateway with token budgeting, and created model response validation schemas.',
      architecture: 'Client (Code input & syntax diff viewer) -> Express Backend Gateway (Token truncation & prompt assembly) -> OpenRouter Router (Model selection & provider fallback) -> JSON Schema Validator -> Interactive Review Interface.',
      technicalDecisions: [
        'Used OpenRouter as a model gateway to enable direct switching between fast models (e.g., Llama 3) and deep reasoning models (e.g., Claude/GPT-4) without changing codebase contracts.',
        'Enforced strict JSON schema output from LLM completions to ensure reproducible UI rendering of line numbers and severity badges.',
        'Added a pre-submission token budgeter to truncate excessively large files and avoid runaway API token expenses.'
      ],
      securityConsiderations: 'Never persists source code to persistent storage; sanitizes uploaded text for common API keys and credential tokens before dispatching to external model endpoints.',
      testingStrategy: 'Unit tests for prompt formatting and response JSON schema parsers; mocked LLM API endpoints to verify frontend error handling and rate-limiting responses.',
      metrics: 'Under 4-second typical response turnaround for single-file analysis; add measured impact: [measure false-positive rate and reviewer agreement against standard OWASP benchmark examples].',
      tradeoffs: 'Relies on cloud-hosted LLM endpoints requiring active network connectivity and token expenditure rather than local on-device small language models.',
      futureImprovements: 'Wrap the engine into a GitHub Action / GitHub App that automatically posts review comments directly on pull requests, and support AST-based repository-wide context indexing.'
    }
  },
  {
    id: 'edge-ai',
    title: 'Edge AI Detection Platform',
    tagline: 'Real-Time Low-Latency Anomaly & Object Detection',
    featured: false,
    role: 'Systems & Machine Learning Developer',
    domains: ['Systems', 'AI/ML'],
    description: 'An edge-focused AI monitoring platform engineered for low-latency anomaly and object detection near the data source with real-time alerting and event ingestion.',
    problem: 'Streaming high-bandwidth sensor feeds to centralized clouds introduces prohibitive network latency, high bandwidth costs, and privacy vulnerabilities during threat detection.',
    targetUsers: 'Security monitoring teams and IoT system administrators needing low-latency local telemetry inspection.',
    approach: 'Shifted inference directly to edge compute nodes near the data source, developing fast event-ingestion pipelines, low-latency detection workflows, and real-time visual alerts.',
    outcome: 'Built an edge detection workflow with event-ingestion pipelines and live dashboards; add measured impact: [benchmark edge inference latency versus cloud streaming latency].',
    challenge: 'Achieving responsive frame rates and low memory consumption on resource-constrained local compute without streaming raw video to external clouds.',
    tech: ['React.js', 'Python', 'Machine Learning', 'Computer Vision', 'REST APIs'],
    github: 'https://github.com/gokulra2006-del/Edge-AI',
    highlights: [
      'Developed edge inference workflows processing sensor telemetry directly near the data source.',
      'Constructed responsive monitoring dashboards and event ingestion pipelines for real-time alerting.'
    ],
    evidence: {
      github: 'https://github.com/gokulra2006-del/Edge-AI',
      securityChecks: ['Local data isolation (Zero external cloud video streaming)'],
      privatePlaceholders: ['[Add benchmark: average inference FPS on edge hardware target]']
    },
    caseStudy: {
      context: 'Applied ML prototype exploring edge computing paradigms for time-critical visual monitoring.',
      problem: 'Cloud-dependent monitoring architectures introduce high recurring bandwidth costs and network failure vulnerabilities in critical environments.',
      users: 'Facility operators and security teams monitoring physical spaces or industrial equipment in real time.',
      responsibilities: 'Configured local Python inference pipelines, developed event dispatcher APIs, and built the React monitoring UI.',
      architecture: 'Camera/Sensor Stream -> Python Local Detection Engine -> Event Streamer -> React Monitoring Dashboard.',
      technicalDecisions: [
        'Decoupled detection inference from client rendering through asynchronous event queues.',
        'Prioritized lightweight model architectures to maximize frame throughput on constrained edge hardware.'
      ],
      securityConsiderations: 'Local edge processing prevents raw video feeds from leaving local network boundaries.',
      testingStrategy: 'Benchmarked detection frame rates across varied input resolutions and simulated network dropouts.',
      metrics: 'add measured impact: [benchmark inference latency per frame and memory footprint on edge device].',
      tradeoffs: 'Edge devices have lower computational capacity compared to massive cloud GPU clusters, limiting model complexity.',
      futureImprovements: 'Implement model quantization with ONNX Runtime / TensorRT and add automated local storage ring buffers.'
    }
  },
  {
    id: 'organic-store',
    title: 'Organic Store',
    tagline: 'Full-Stack E-Commerce Platform',
    featured: false,
    role: 'Full-Stack Developer',
    domains: ['Full-stack'],
    description: 'A full-stack e-commerce web application featuring organic product browsing, authentication, shopping cart management, checkout, and order workflows with optimized database queries.',
    problem: 'Small digital storefronts frequently suffer from slow catalog discovery, fragmented cart states, and clunky checkout steps that drive user drop-off.',
    targetUsers: 'Consumers shopping for verified organic goods; store managers managing product inventory.',
    approach: 'Engineered an end-to-end shopping platform with indexed database schemas, modular shopping cart state management, and streamlined checkout workflows.',
    outcome: 'Implemented full shopping, cart, and order workflows with indexed MongoDB queries; add measured impact: [profile catalog query latency and checkout conversion rate].',
    challenge: 'Maintaining transactional consistency during cart checkouts and preventing stale cart state across page reloads.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/gokulra2006-del/organic-store',
    highlights: [
      'Developed responsive product catalog with category filters, keyword search, and pagination.',
      'Designed REST APIs and MongoDB schemas for users, products, carts, and order lifecycles.'
    ],
    evidence: {
      github: 'https://github.com/gokulra2006-del/organic-store',
      securityChecks: ['Bcrypt password hashing', 'Sanitized order payload validation'],
      privatePlaceholders: ['[Add benchmark: query latency before and after compound indexing]']
    },
    caseStudy: {
      context: 'Full-stack commercial web application built to master end-to-end e-commerce state management and database indexing.',
      problem: 'Unoptimized catalog queries and unreliable client-side cart synchronization lead to abandoned orders and slow user experience.',
      users: 'Online shoppers browsing and purchasing organic products; store administrators managing product inventories.',
      responsibilities: 'Built frontend UI components, backend REST APIs, cart session management, and database schemas.',
      architecture: 'React Frontend -> Express.js API -> MongoDB database collections (users, products, orders).',
      technicalDecisions: [
        'Added compound database indexes on product category and price fields for rapid multi-filter querying.',
        'Maintained resilient cart state synchronization between local storage and user session.'
      ],
      securityConsiderations: 'Password hashing with bcrypt, sanitized inputs, and secured order verification before status updates.',
      testingStrategy: 'Validated CRUD operations on product and cart endpoints with integration tests.',
      metrics: 'add measured impact: [benchmark catalog response times with indexed vs unindexed queries].',
      tradeoffs: 'Built custom cart state management rather than adopting a third-party hosted commerce platform to maintain full code control.',
      futureImprovements: 'Integrate real payment gateway webhooks (Stripe) and implement Redis caching for trending product listings.'
    }
  },
  {
    id: 'ai-learning-platform',
    title: 'AI Learning Platform',
    tagline: 'Personalized Learning with RAG Assistant',
    featured: false,
    role: 'AI / Full-Stack Developer',
    domains: ['AI/ML', 'Full-stack'],
    description: 'An AI-powered learning platform integrating Friday AI, an intelligent assistant that answers student queries and personalizes learning paths using Retrieval-Augmented Generation (RAG).',
    problem: 'Standard e-learning portals offer static content without contextual assistance when students get stuck on specific coursework concepts.',
    targetUsers: 'Undergraduate engineering students self-studying complex technical curricula.',
    approach: 'Integrated vector embeddings and LLM retrieval to ground student question-answering directly in syllabus material.',
    outcome: 'Engineered RAG-based query pipeline connecting student queries to course materials; add measured impact: [measure retrieval precision and question-answering latency].',
    challenge: 'Structuring text chunk boundaries with sufficient semantic overlap to prevent fragmented answers on complex equations and diagrams.',
    tech: ['React.js', 'Node.js', 'Vector DB', 'OpenAI API', 'TypeScript'],
    github: 'https://github.com/gokulra2006-del/Ai-Learning-Platform',
    highlights: [
      'Built vector embedding indexing pipeline for course lecture notes and documents.',
      'Integrated real-time chat interface with contextual source citations.'
    ],
    evidence: {
      github: 'https://github.com/gokulra2006-del/Ai-Learning-Platform',
      securityChecks: ['Course enrollment verification before vector retrieval'],
      privatePlaceholders: ['[Add benchmark: RAG context retrieval precision score]']
    },
    caseStudy: {
      context: 'Academic innovation project built during Hackwarts Hackathon (2nd place winner).',
      problem: 'Students experience learning friction when self-studying complex curriculum without immediate contextual teaching support.',
      users: 'Engineering students seeking on-demand clarification for specific course lectures.',
      responsibilities: 'Implemented vector embedding ingestion, RAG retrieval chain, and student chat UI.',
      architecture: 'Document Parser -> Chunking & Embedding -> Vector DB -> Retrieval Chain -> LLM Generation -> React Chat UI.',
      technicalDecisions: [
        'Used chunk-level vector embeddings with overlap to preserve semantic context across section boundaries.',
        'Required the LLM to return document citations alongside answers to minimize hallucinations.'
      ],
      securityConsiderations: 'Restricted document access by enrolled course IDs to prevent unauthorized syllabus extraction.',
      testingStrategy: 'Evaluated answer quality against 30 standard textbook questions with ground-truth references.',
      metrics: 'add measured impact: [evaluate RAG answer accuracy and retrieval response times].',
      tradeoffs: 'Chunking strategy optimized for conceptual text rather than mathematical formulas or diagrams.',
      futureImprovements: 'Support multi-modal document parsing for charts and code blocks, and add localized caching for frequent questions.'
    }
  }
];
