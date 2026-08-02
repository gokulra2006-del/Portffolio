import { useState } from 'react';
import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText('gokulra2006@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    // Open Gmail directly in a new tab instead of relying on default mail client
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gokulra2006@gmail.com', '_blank');
  };

  return (
    <Section id="contact" className="pb-32 pt-32 text-center flex flex-col items-center">
      <FadeInStagger className="flex flex-col items-center">
        <FadeIn>
          <p className="text-gh-blue font-medium mb-4">04. What's Next?</p>
        </FadeIn>
        
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-gh-text mb-6">
            Get In Touch
          </h2>
        </FadeIn>
        
        <FadeIn>
          <p className="text-gh-text-muted text-lg max-w-lg mb-10 leading-relaxed">
            I'm currently looking for Software Engineering internship opportunities. 
            Whether you have a question or just want to say hi, my inbox is always open. 
            I'll try my best to get back to you!
          </p>
        </FadeIn>

        <FadeIn>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gokulra2006@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCopyEmail}
            className="btn-primary px-8 py-4 text-lg min-w-[200px]"
          >
            {copied ? 'Email Copied!' : 'Say Hello'}
          </a>
        </FadeIn>
      </FadeInStagger>
    </Section>
  );
}
