import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const COMMANDS: Record<string, () => React.ReactNode> = {
  whoami: () => "gokul - Software Engineer & AI Developer. Currently learning how to exit Vim.",
  projects: () => "Type 'cat projects.txt' to see my featured work.",
  "cat projects.txt": () => (
    <ul className="list-disc list-inside">
      <li>Ai-Learning-Platform</li>
      <li>Sentinel-ai</li>
      <li>Alert-System</li>
    </ul>
  ),
  skills: () => "React, TypeScript, Python, Node.js, Cloud Computing, Cybersecurity.",
  clear: () => "CLEAR_SCREEN",
  "sudo rm -rf /": () => <span className="text-red-400">Nice try! You don't have sudo privileges here.</span>,
  date: () => new Date().toString(),
  help: () => (
    <div className="text-gh-blue">
      Available commands:
      <ul className="list-disc list-inside ml-2 mt-1 text-gh-text-muted">
        <li>whoami</li>
        <li>projects</li>
        <li>skills</li>
        <li>date</li>
        <li>clear</li>
      </ul>
    </div>
  )
};

export function Terminal() {
  const [history, setHistory] = useState<CommandOutput[]>([
    { command: '', output: "Welcome to Gokul's terminal. Type 'help' to see available commands." }
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

      let output: React.ReactNode = `Command not found: ${cmd}. Type 'help' for a list of commands.`;

      if (COMMANDS[cmd]) {
        output = COMMANDS[cmd]();
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
      <div className="w-full max-w-3xl mt-16 rounded-xl overflow-hidden border border-gh-border shadow-2xl bg-[#0d1117] font-mono text-sm">
        {/* Terminal Header */}
        <div className="bg-gh-bg-secondary px-4 py-2 border-b border-gh-border flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <div className="flex-1 flex justify-center items-center gap-2 text-gh-text-muted text-xs">
            <TerminalIcon size={14} />
            gokul@portfolio:~
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-64 overflow-y-auto" onClick={() => document.getElementById('terminal-input')?.focus()}>
          {history.map((item, i) => (
            <div key={i} className="mb-2">
              {item.command && (
                <div className="flex gap-2 text-gh-text">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span>{item.command}</span>
                </div>
              )}
              <div className="text-gh-text-muted mt-1 ml-4">{item.output}</div>
            </div>
          ))}
          
          <div className="flex gap-2 text-gh-text mt-2">
            <span className="text-green-400">➜</span>
            <span className="text-blue-400">~</span>
            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-gh-text focus:ring-0 p-0"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </FadeIn>
  );
}
