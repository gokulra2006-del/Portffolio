import { Section } from '../components/Section';
import { FadeIn, FadeInStagger } from '../components/FadeIn';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <Section id="testimonials" className="py-20">
      <FadeInStagger>
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gh-text flex items-center gap-3">
              <span className="font-mono text-gh-blue text-xl md:text-2xl font-normal">05.</span>
              <span>Testimonials & Recommendations</span>
            </h2>
            <div className="h-[1px] bg-gh-border flex-1 max-w-xs md:max-w-md" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <FadeIn key={item.id}>
              <div className="card-base card-hover p-6 md:p-8 flex flex-col justify-between h-full relative">
                <Quote size={32} className="text-gh-blue/20 absolute top-6 right-6" />
                <p className="text-gh-text-muted text-sm md:text-base leading-relaxed mb-6 relative z-10 italic">
                  "{item.content}"
                </p>
                <div className="pt-4 border-t border-gh-border/50">
                  <h3 className="font-bold text-gh-text text-base">{item.name}</h3>
                  <p className="text-gh-blue text-xs font-mono">{item.role} @ {item.company}</p>
                  <p className="text-gh-text-muted/60 text-xs mt-1">{item.relationship}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </Section>
  );
}
