import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, Terminal, User, Briefcase, Code, Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#0d1117] border border-gh-border shadow-2xl rounded-2xl overflow-hidden z-[101]"
          >
            <Command
              className="w-full flex flex-col bg-transparent text-gh-text"
              shouldFilter={true}
            >
              <div className="flex items-center px-4 py-3 border-b border-gh-border/50">
                <Search size={20} className="text-gh-text-muted mr-3" />
                <Command.Input 
                  autoFocus
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-base placeholder:text-gh-text-muted/50 focus:ring-0" 
                />
                <div className="text-xs bg-gh-border/30 px-2 py-1 rounded text-gh-text-muted">ESC</div>
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto p-2 hide-scrollbar">
                <Command.Empty className="py-6 text-center text-gh-text-muted text-sm">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="px-2 py-3 text-xs text-gh-text-muted font-semibold [&_[cmdk-group-heading]]:mb-2">
                  <Command.Item 
                    onSelect={() => runCommand(() => jumpTo('hero'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer aria-selected:bg-gh-blue/10 aria-selected:text-gh-blue hover:bg-gh-blue/10 hover:text-gh-blue text-sm text-gh-text font-normal transition-colors"
                  >
                    <User size={16} /> Home
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => jumpTo('about'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer aria-selected:bg-gh-blue/10 aria-selected:text-gh-blue hover:bg-gh-blue/10 hover:text-gh-blue text-sm text-gh-text font-normal transition-colors"
                  >
                    <User size={16} /> About Me
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => jumpTo('projects'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer aria-selected:bg-gh-blue/10 aria-selected:text-gh-blue hover:bg-gh-blue/10 hover:text-gh-blue text-sm text-gh-text font-normal transition-colors"
                  >
                    <Briefcase size={16} /> Featured Work
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => jumpTo('skills'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer aria-selected:bg-gh-blue/10 aria-selected:text-gh-blue hover:bg-gh-blue/10 hover:text-gh-blue text-sm text-gh-text font-normal transition-colors"
                  >
                    <Code size={16} /> Skills & Impact
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => jumpTo('contact'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer aria-selected:bg-gh-blue/10 aria-selected:text-gh-blue hover:bg-gh-blue/10 hover:text-gh-blue text-sm text-gh-text font-normal transition-colors"
                  >
                    <Mail size={16} /> Contact
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="h-px bg-gh-border/50 mx-2" />

                <Command.Group heading="Social & Links" className="px-2 py-3 text-xs text-gh-text-muted font-semibold [&_[cmdk-group-heading]]:mb-2">
                  <Command.Item 
                    onSelect={() => runCommand(() => window.open('https://github.com/gokulra2006-del', '_blank'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer aria-selected:bg-gh-blue/10 aria-selected:text-gh-blue hover:bg-gh-blue/10 hover:text-gh-blue text-sm text-gh-text font-normal transition-colors"
                  >
                    <FaGithub size={16} /> GitHub Profile
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => window.open('https://www.linkedin.com/in/gokul-r-513299327/', '_blank'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer aria-selected:bg-gh-blue/10 aria-selected:text-gh-blue hover:bg-gh-blue/10 hover:text-gh-blue text-sm text-gh-text font-normal transition-colors"
                  >
                    <FaLinkedin size={16} /> LinkedIn
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => window.open('/resume.pdf', '_blank'))}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer aria-selected:bg-gh-blue/10 aria-selected:text-gh-blue hover:bg-gh-blue/10 hover:text-gh-blue text-sm text-gh-text font-normal transition-colors"
                  >
                    <FileText size={16} /> Download Resume
                  </Command.Item>
                </Command.Group>
                
                <Command.Separator className="h-px bg-gh-border/50 mx-2" />
                
                <Command.Group heading="Easter Eggs" className="px-2 py-3 text-xs text-gh-text-muted font-semibold [&_[cmdk-group-heading]]:mb-2">
                  <Command.Item 
                    onSelect={() => runCommand(() => {
                      jumpTo('about');
                      setTimeout(() => document.getElementById('terminal-input')?.focus(), 500);
                    })}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer aria-selected:bg-gh-blue/10 aria-selected:text-gh-blue hover:bg-gh-blue/10 hover:text-gh-blue text-sm text-gh-text font-normal transition-colors"
                  >
                    <Terminal size={16} /> Open Developer Terminal
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
