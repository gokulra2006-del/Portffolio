import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { ParticleBackground } from '../components/ParticleBackground';
import { Typewriter } from '../components/Typewriter';

export function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <ParticleBackground />
      
      <FadeInStagger className="flex flex-col items-start gap-6 max-w-3xl relative z-10">
        <FadeIn>
          <p className="text-gh-blue font-medium tracking-wide">Hi, my name is</p>
        </FadeIn>
        
        <FadeIn>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gh-text font-mono tracking-tight">
            <Typewriter text="Gokul Ramachandran" delay={100} />
          </h1>
        </FadeIn>
        
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold text-gh-text-muted">
            Software Engineer <span className="text-gh-text/50">|</span> AI & Full-Stack Developer
          </h2>
        </FadeIn>
        
        <FadeIn>
          <p className="text-lg text-gh-text-muted max-w-2xl mt-4 leading-relaxed">
            I build scalable, modern web applications and AI-driven platforms. 
            Currently focused on distributed systems, bridging the gap between machine learning models and seamless user experiences, and have a heavy interest in working in Cloud Computing, Firebase, and Cybersecurity.
          </p>
        </FadeIn>
        
        <FadeIn>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FileText size={20} />
              Download Resume
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://github.com/gokulra2006-del?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gh-text-muted hover:text-gh-blue transition-colors">
                <FaGithub size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/gokul-r-513299327/" target="_blank" rel="noopener noreferrer" className="text-gh-text-muted hover:text-gh-blue transition-colors">
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gokulra2006@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gh-text-muted hover:text-gh-blue transition-colors">
                <SiGmail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </FadeInStagger>
    </Section>
  );
}
