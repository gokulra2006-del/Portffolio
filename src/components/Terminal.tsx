import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const COMMANDS: Record<string, () => React.ReactNode> = {
  help: () => (
    <div className="text-gh-blue">
      Available commands:
      <ul className="list-disc list-inside ml-2 mt-1 text-gh-text-muted space-y-1">
        <li><strong className="text-gh-text font-mono">about</strong> — Brief summary about me</li>
        <li><strong className="text-gh-text font-mono">projects</strong> — View featured projects</li>
        <li><strong className="text-gh-text font-mono">skills</strong> — List technical skills</li>
        <li><strong className="text-gh-text font-mono">experience</strong> — Work history & milestones</li>
        <li><strong className="text-gh-text font-mono">education</strong> — Degree & university credentials</li>
        <li><strong className="text-gh-text font-mono">contact</strong> — Get contact email & links</li>
        <li><strong className="text-gh-text font-mono">resume</strong> — Download resume</li>
        <li><strong className="text-gh-text font-mono">clear</strong> — Clear terminal screen</li>
      </ul>
    </div>
  ),
  about: () => (
    <p>
      Gokul Ramachandran — Junior Full-Stack Engineer and B.Tech CSE student at VIT Chennai. Building reliable web products, API architectures, and practical AI systems.
    </p>
  ),
  projects: () => (
    <ul className="list-disc list-inside space-y-1">
      <li><strong className="text-gh-blue">AgriBank:</strong> Full-stack agriculture banking platform with ML credit-risk assessment</li>
      <li><strong className="text-gh-blue">Dual-enjoy:</strong> Dual Bluetooth headphone synchronizer in C# / .NET 8 / WASAPI</li>
      <li><strong className="text-gh-blue">Edge AI:</strong> Real-time low-latency anomaly and object detection platform</li>
      <li><strong className="text-gh-blue">AI Code Review Assistant:</strong> LLM-powered code review tool via OpenRouter APIs</li>
      <li><strong className="text-gh-blue">Organic Store:</strong> High-performance full-stack e-commerce platform</li>
      <li><strong className="text-gh-blue">Ai-Learning-Platform:</strong> RAG-based Friday AI assistant</li>
    </ul>
  ),
  skills: () => (
    <p>
      React, TypeScript, Python, C#, .NET 8, Node.js, Express, MongoDB, Redis, Docker, WASAPI, Machine Learning, Cloud Computing, Cybersecurity.
    </p>
  ),
  experience: () => (
    <ul className="list-disc list-inside space-y-1">
      <li><strong className="text-gh-blue">Incrix Techlutions:</strong> Full-Stack Developer Intern (React, TypeScript, Node.js, MongoDB)</li>
      <li><strong className="text-gh-blue">Hackwarts Hackathon:</strong> 2nd Place Finalist (RAG-based AI Learning Platform)</li>
      <li><strong className="text-gh-blue">Open Source:</strong> Dual-enjoy audio DSP & AI Code Review tooling</li>
    </ul>
  ),
  education: () => (
    <p>
      <strong className="text-gh-blue">Vellore Institute of Technology (VIT), Chennai</strong> — B.Tech in Computer Science & Engineering (2023 — 2027). Core curriculum: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks.
    </p>
  ),
  contact: () => (
    <p>
      Email: <a href="mailto:gokulra2006@gmail.com" className="text-gh-blue underline">gokulra2006@gmail.com</a> | GitHub: <a href="https://github.com/gokulra2006-del" target="_blank" rel="noopener noreferrer" className="text-gh-blue underline">gokulra2006-del</a> | LinkedIn: <a href="https://www.linkedin.com/in/gokul-ramachandran-513299327/" target="_blank" rel="noopener noreferrer" className="text-gh-blue underline">Gokul R</a>
    </p>
  ),
  resume: () => (
    <p>
      Opening resume... <a href="/Gokul_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gh-blue underline">Click here if PDF doesn't open automatically.</a>
    </p>
  ),
  clear: () => "CLEAR_SCREEN",
  sudo: () => <span className="text-red-400">Nice try! Permission denied: Gokul is in the sudoers file. This incident will be reported. 🚨</span>,
  "sudo rm -rf /": () => <span className="text-red-400">Nice try! You don't have root privileges on this portfolio.</span>,
};

export function Terminal() {
  const [history, setHistory] = useState<CommandOutput[]>([
    { command: '', output: "Welcome to Gokul's interactive shell. Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView?.({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      
      if (!cmd) return;

      if (cmd === 'resume') {
        window.open('/Gokul_Resume.pdf', '_blank');
      }

      let output: React.ReactNode = `Command not found: ${cmd}. Type 'help' for a list of commands.`;

      if (COMMANDS[cmd]) {
        output = COMMANDS[cmd]();
      } else if (cmd.startsWith('sudo')) {
        output = COMMANDS['sudo']();
      }

      if (output === "CLEAR_SCREEN") {
        setHistory([]);
      } else {
        setHistory(prev => [...prev, { command: cmd, output }]);
      }
      
      setInput('');
    }
  };

  return (
    <FadeIn className="w-full flex justify-center">
      <div className="w-full max-w-3xl mt-4 rounded-xl overflow-hidden border border-gh-border shadow-2xl bg-gh-bg-secondary font-mono text-sm">
        {/* Terminal Header */}
        <div className="bg-gh-bg px-4 py-2.5 border-b border-gh-border flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex justify-center items-center gap-2 text-gh-text-muted text-xs">
            <TerminalIcon size={14} />
            gokul@portfolio:~
          </div>
          <div className="w-12"></div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-72 overflow-y-auto" onClick={() => document.getElementById('terminal-input')?.focus()}>
          {history.map((item, i) => (
            <div key={i} className="mb-3">
              {item.command && (
                <div className="flex gap-2 text-gh-text font-semibold">
                  <span className="text-green-400">➜</span>
                  <span className="text-gh-blue">~</span>
                  <span>{item.command}</span>
                </div>
              )}
              <div className="text-gh-text-muted mt-1 ml-4 leading-relaxed">{item.output}</div>
            </div>
          ))}
          
          <div className="flex gap-2 text-gh-text mt-2">
            <span className="text-green-400">➜</span>
            <span className="text-gh-blue">~</span>
            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-gh-text focus:ring-0 p-0 font-mono"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </FadeIn>
  );
}

