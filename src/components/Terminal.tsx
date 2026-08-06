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
        <li><strong className="text-gh-text font-mono">contact</strong> — Get contact email & links</li>
        <li><strong className="text-gh-text font-mono">resume</strong> — Download resume</li>
        <li><strong className="text-gh-text font-mono">clear</strong> — Clear terminal screen</li>
      </ul>
    </div>
  ),
  about: () => (
    <p>
      Gokul Ramachandran — B.Tech CSE student at VIT Chennai. Passionate about AI/ML integrations, Cloud Computing, Cybersecurity, and building scalable web applications.
    </p>
  ),
  projects: () => (
    <ul className="list-disc list-inside space-y-1">
      <li><strong className="text-gh-blue">Ai-Learning-Platform:</strong> RAG-based Friday AI assistant</li>
      <li><strong className="text-gh-blue">Sentinel-ai:</strong> ML network threat detection</li>
      <li><strong className="text-gh-blue">Alert-System:</strong> Distributed queuing service</li>
      <li><strong className="text-gh-blue">codereview-ai:</strong> Automated code review & execution</li>
    </ul>
  ),
  skills: () => (
    <p>
      React, TypeScript, Python, Node.js, Express, MongoDB, Redis, Docker, Firebase, Cybersecurity, Cloud Computing.
    </p>
  ),
  contact: () => (
    <p>
      Email: <a href="mailto:gokulra2006@gmail.com" className="text-gh-blue underline">gokulra2006@gmail.com</a> | GitHub: <a href="https://github.com/gokulra2006-del" target="_blank" rel="noopener noreferrer" className="text-gh-blue underline">gokulra2006-del</a> | LinkedIn: <a href="https://www.linkedin.com/in/gokul-r-513299327/" target="_blank" rel="noopener noreferrer" className="text-gh-blue underline">Gokul R</a>
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
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    <FadeIn>
      <div className="w-full max-w-3xl mt-16 rounded-xl overflow-hidden border border-gh-border shadow-2xl bg-gh-bg-secondary font-mono text-sm">
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

