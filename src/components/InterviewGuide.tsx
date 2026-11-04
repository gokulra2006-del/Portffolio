import { Link } from 'react-router-dom';

export function InterviewGuide() {
  return (
    <section aria-labelledby="interview-guide" className="w-full max-w-5xl mx-auto px-6 mb-16">
      <div className="border-y border-gh-border py-8">
        <p className="text-xs font-mono text-gh-blue uppercase tracking-widest mb-3">Start here</p>
        <h2 id="interview-guide" className="text-2xl font-semibold mb-3">A quick guide to my work</h2>
        <p className="text-gh-text-muted max-w-2xl mb-6">Review the resume for context, explore a project for technical depth, then use the repository to inspect the implementation.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          <Link to="/resume" className="block rounded-lg border border-gh-border p-5 hover:border-gh-blue">
            <h3 className="font-semibold mb-2">01 / Resume</h3>
            <p className="text-sm text-gh-text-muted">Education, experience, skills, and contact details in a printable view.</p>
          </Link>
          <a href="#projects" className="block rounded-lg border border-gh-border p-5 hover:border-gh-blue">
            <h3 className="font-semibold mb-2">02 / Technical discussion</h3>
            <p className="text-sm text-gh-text-muted">Explore architecture, implementation choices, limitations, and next steps.</p>
          </a>
          <Link to="/projects" className="block rounded-lg border border-gh-border p-5 hover:border-gh-blue">
            <h3 className="font-semibold mb-2">03 / Project archive</h3>
            <p className="text-sm text-gh-text-muted">Search projects by technology and follow the links to their source code.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
