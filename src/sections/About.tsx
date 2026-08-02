import { lazy, Suspense } from 'react';
import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { Terminal } from '../components/Terminal';

export function About() {
  return (
    <Section id="about">
      <FadeInStagger className="max-w-3xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gh-text mb-8 flex items-center gap-4">
            <span className="text-gh-blue">01.</span> About Me
            <div className="h-px bg-gh-border flex-grow ml-4 max-w-[200px]"></div>
          </h2>
        </FadeIn>
        
        <div className="text-gh-text-muted text-lg leading-relaxed space-y-6">
          <FadeIn>
            <p>
              Hello! I'm Gokul, a B.Tech Computer Science and Engineering student at VIT Chennai. 
              I have a strong passion for building software that lives on the internet, from robust backend systems to intuitive, beautifully designed user interfaces.
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              My current interests lie heavily in <span className="text-gh-blue font-medium">AI/ML integration</span>, <span className="text-gh-blue font-medium">Cloud Computing</span>, <span className="text-gh-blue font-medium">Cybersecurity</span>, and building <span className="text-gh-blue font-medium">scalable web platforms</span> using technologies like <span className="text-gh-blue font-medium">Firebase</span>. I enjoy the challenge of architecting systems that can handle real-world scale while maintaining a seamless user experience and robust security.
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              Whether it's developing AI assistants that personalize learning experiences or building robust code review platforms, I am driven by the impact software can have on solving complex problems. I recently won <span className="text-gh-blue font-medium">2nd Place at the Hackwarts Hackathon</span> and completed a <span className="text-gh-blue font-medium">Full-Stack Internship at Incrix Techlutions</span>, showcasing my ability to build and deliver innovative solutions under pressure. I'm actively seeking opportunities to apply my skills in a fast-paced, engineering-focused environment.
            </p>
          </FadeIn>

          
          <Terminal />
        </div>
      </FadeInStagger>
    </Section>
  );
}
