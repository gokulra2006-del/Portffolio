import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  number?: string;
}

export function Section({ id, children, className = '', title, number }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full ${className}`}>
      {title && (
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gh-text flex items-center gap-3">
            {number && <span className="font-mono text-gh-blue text-xl md:text-2xl font-normal">{number}.</span>}
            <span>{title}</span>
          </h2>
          <div className="h-[1px] bg-gh-border flex-1 max-w-xs md:max-w-md" />
        </div>
      )}
      {children}
    </section>
  );
}

