import { ArrowLeft, Download, Printer, Mail, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

export function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gh-bg text-gh-text selection:bg-gh-blue/30 py-8 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Resume | Gokul Ramachandran — Junior Full-Stack Engineer</title>
        <meta
          name="description"
          content="Print-ready engineering resume for Gokul Ramachandran, Junior Full-Stack Engineer specializing in web products and practical AI systems."
        />
      </Helmet>

      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gh-blue hover:underline"
        >
          <ArrowLeft size={14} /> Back to Portfolio
        </a>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-gh-text-muted">
            Version: Q1 2025 / Updated Recently
          </span>

          <button
            type="button"
            onClick={handlePrint}
            className="btn-outline text-xs font-medium py-1.5 px-3 inline-flex items-center gap-1.5"
          >
            <Printer size={13} />
            <span>Print / Save as PDF</span>
          </button>

          <a
            href="/Gokul_Resume.pdf"
            download="Gokul_Ramachandran_Resume.pdf"
            className="btn-primary text-xs font-medium py-1.5 px-3 inline-flex items-center gap-1.5"
          >
            <Download size={13} />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {/* Resume Document Paper Container */}
      <div className="max-w-4xl mx-auto bg-gh-bg-secondary print:bg-white print:text-black border border-gh-border print:border-none rounded-2xl print:rounded-none p-6 sm:p-10 shadow-2xl print:shadow-none space-y-6">
        {/* Header */}
        <header className="border-b border-gh-border print:border-gray-300 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gh-text print:text-black">
                Gokul Ramachandran
              </h1>
              <p className="text-base sm:text-lg font-semibold text-gh-blue print:text-blue-700 mt-1">
                Junior Full-Stack Engineer • AI & Systems Focus
              </p>
              <p className="text-xs sm:text-sm text-gh-text-muted print:text-gray-600 mt-1">
                Chennai, India • Open for Full-Time Roles & Internships
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 text-gh-text-muted print:text-gray-700 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail size={12} className="text-gh-blue print:text-black" />
                <a href="mailto:gokulra2006@gmail.com" className="hover:underline">gokulra2006@gmail.com</a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <FaGithub size={12} className="text-gh-blue print:text-black" />
                <a href="https://github.com/gokulra2006-del" target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/gokulra2006-del
                </a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <FaLinkedin size={12} className="text-gh-blue print:text-black" />
                <a href="https://www.linkedin.com/in/gokul-r-513299327/" target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/gokul-r-513299327
                </a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Globe size={12} className="text-gh-blue print:text-black" />
                <span>gokulramachandran.com</span>
              </p>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-gh-blue print:text-blue-700 mb-2">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-gh-text print:text-gray-800 leading-relaxed">
            Junior Full-Stack Engineer with practical experience designing typed REST APIs, modular React applications, and low-latency systems. Proven record building complex end-to-end platforms including an agricultural banking system (AgriBank), a real-time Windows audio synchronizer (Dual-enjoy), and an LLM-orchestrated code review developer tool. Committed to clean architecture, type safety, and measurable software reliability.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-gh-blue print:text-blue-700 mb-2.5">
            Education
          </h2>
          <div className="flex justify-between items-start text-xs sm:text-sm">
            <div>
              <p className="font-bold text-gh-text print:text-black">Vellore Institute of Technology (VIT), Chennai</p>
              <p className="text-gh-text-muted print:text-gray-600">Bachelor of Technology in Computer Science & Engineering</p>
              <p className="text-[11px] font-mono text-gh-text-muted print:text-gray-500 mt-0.5">
                Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering.
              </p>
            </div>
            <span className="font-mono text-xs text-gh-text-muted print:text-gray-600 shrink-0">
              2023 — 2027
            </span>
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-gh-blue print:text-blue-700 mb-2.5">
            Work Experience
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <p className="font-bold text-gh-text print:text-black">Full-Stack Developer Intern</p>
                  <p className="text-gh-blue print:text-blue-800 font-medium">Incrix Techlutions • Chennai, India</p>
                </div>
                <span className="font-mono text-xs text-gh-text-muted print:text-gray-600 shrink-0">
                  May 2024 — July 2024
                </span>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-gh-text print:text-gray-800 leading-relaxed">
                <li>Built REST APIs with Node.js and MongoDB for multi-role workflows, reducing repeated manual processing across the main user flow.</li>
                <li>Refactored frontend state management and data fetching in React and TypeScript, eliminating redundant re-renders across heavy tabular dashboard views.</li>
                <li>Collaborated in Agile sprint cycles with senior engineers, participating in daily standups, API contract reviews, and bug triage.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-gh-blue print:text-blue-700 mb-2.5">
            Key Engineering Projects
          </h2>
          <div className="space-y-4 text-xs sm:text-sm">
            {/* AgriBank */}
            <div>
              <div className="flex justify-between items-baseline">
                <p className="font-bold text-gh-text print:text-black">
                  AgriBank — Agriculture Banking & Subsidy Platform
                </p>
                <span className="font-mono text-[11px] text-gh-blue print:text-gray-600">
                  React.js, Node.js, Express, MongoDB, JWT, REST APIs
                </span>
              </div>
              <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-gh-text print:text-gray-800 leading-relaxed">
                <li>Architected full-stack agriculture finance platform connecting farmers, credit officers, and admins for loan origination, credit evaluation, and subsidy tracking.</li>
                <li>Enforced route-level JWT authentication and strict Role-Based Access Control (RBAC) middleware across multi-user endpoints.</li>
                <li>Designed credit-risk assessment scoring logic synthesizing farmer, crop cycle, land size, and repayment history parameters.</li>
              </ul>
            </div>

            {/* Dual-enjoy */}
            <div>
              <div className="flex justify-between items-baseline">
                <p className="font-bold text-gh-text print:text-black">
                  Dual-enjoy — Dual Bluetooth Headphone Synchronizer for Windows
                </p>
                <span className="font-mono text-[11px] text-gh-blue print:text-gray-600">
                  C#, .NET 8, Windows CoreAudio, WASAPI, WPF
                </span>
              </div>
              <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-gh-text print:text-gray-800 leading-relaxed">
                <li>Engineered a Windows desktop application capturing system audio via WASAPI loopback, routing synchronized streams to two Bluetooth devices simultaneously.</li>
                <li>Implemented lock-free circular audio buffers, sample-rate linear conversion, and independent per-device volume channels.</li>
                <li>Built dynamic delay lines and continuous clock drift correction to eliminate audio echo and desynchronization over long playback sessions.</li>
              </ul>
            </div>

            {/* AI Code Review Assistant */}
            <div>
              <div className="flex justify-between items-baseline">
                <p className="font-bold text-gh-text print:text-black">
                  AI Code Review Assistant — Developer Quality & Security Workbench
                </p>
                <span className="font-mono text-[11px] text-gh-blue print:text-gray-600">
                  React, TypeScript, Node.js, Express, OpenRouter LLM API
                </span>
              </div>
              <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-gh-text print:text-gray-800 leading-relaxed">
                <li>Built full-stack developer tool that analyzes source code and generates categorized, line-specific quality and security recommendations.</li>
                <li>Constructed Express backend with token budgeting and OpenRouter routing for model failover and latency optimization.</li>
                <li>Enforced strict JSON schema parsers on model completions to guarantee reproducible line-diff rendering.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-gh-blue print:text-blue-700 mb-2.5">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <p>
              <strong className="text-gh-text print:text-black font-semibold">Languages: </strong>
              <span className="text-gh-text-muted print:text-gray-700">TypeScript, JavaScript (ES6+), Python, C#, C++, SQL, Java</span>
            </p>
            <p>
              <strong className="text-gh-text print:text-black font-semibold">Frontend: </strong>
              <span className="text-gh-text-muted print:text-gray-700">React.js, Tailwind CSS, HTML5 / Semantic Web, Responsive UI</span>
            </p>
            <p>
              <strong className="text-gh-text print:text-black font-semibold">Backend & Systems: </strong>
              <span className="text-gh-text-muted print:text-gray-700">Node.js, Express.js, RESTful APIs, .NET 8, CoreAudio WASAPI, JWT RBAC</span>
            </p>
            <p>
              <strong className="text-gh-text print:text-black font-semibold">Databases & Tools: </strong>
              <span className="text-gh-text-muted print:text-gray-700">MongoDB, PostgreSQL, Git, GitHub Actions (CI/CD), Vitest, Postman</span>
            </p>
            <p className="sm:col-span-2">
              <strong className="text-gh-text print:text-black font-semibold">AI & LLM Systems: </strong>
              <span className="text-gh-text-muted print:text-gray-700">Structured Prompt Engineering, OpenRouter Gateway, RAG Architecture, Vector DBs</span>
            </p>
          </div>
        </section>

        {/* Honors & Hackathons */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-gh-blue print:text-blue-700 mb-2">
            Achievements
          </h2>
          <p className="text-xs text-gh-text print:text-gray-800">
            <strong>2nd Place Finalist — Hackwarts Hackathon (AI Track):</strong> Developed and demonstrated Friday AI, an intelligent RAG learning assistant querying technical syllabi in real time under a 24-hour sprint.
          </p>
        </section>

        {/* PDF Fallback Preview Notice (Hidden when printing) */}
        <div className="pt-6 border-t border-gh-border/60 print:hidden text-center text-xs font-mono text-gh-text-muted">
          <p>
            Need the official PDF format?{' '}
            <a href="/Gokul_Resume.pdf" target="_blank" rel="noreferrer" className="text-gh-blue hover:underline">
              Download or view Gokul_Resume.pdf
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
