import { ShieldCheck, GitBranch, ExternalLink, PlayCircle, Activity, CheckCircle, Clock } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export interface ProjectEvidenceData {
  github: string;
  live?: string;
  demoVideo?: string;
  ciStatus?: 'passing' | 'verified' | 'in-progress';
  testCoverage?: string;
  apiResponseTime?: string;
  securityChecks?: string[];
  privatePlaceholders?: string[]; // Internal metrics to collect; only shown in dev
}

interface ProjectEvidenceProps {
  evidence: ProjectEvidenceData;
  showDevPlaceholders?: boolean;
}

export function ProjectEvidence({ evidence, showDevPlaceholders = false }: ProjectEvidenceProps) {
  // Check if running in development mode
  const isDevMode = showDevPlaceholders || (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV);

  return (
    <div className="space-y-3 pt-3 border-t border-gh-border/50">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] font-mono text-gh-text-muted uppercase tracking-wider font-semibold">
          Engineering Evidence & Artifacts
        </p>
        {isDevMode && evidence.privatePlaceholders && evidence.privatePlaceholders.length > 0 && (
          <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            Internal Metric TODOs ({evidence.privatePlaceholders.length})
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2 text-xs font-mono">
        {/* Verified GitHub Repository */}
        {evidence.github && (
          <a
            href={evidence.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-gh-bg border border-gh-border hover:border-gh-blue hover:text-gh-blue text-gh-text transition-colors"
          >
            <FaGithub size={13} />
            <span>Repository</span>
            <ExternalLink size={11} className="opacity-70" />
          </a>
        )}

        {/* Verified Live Demo if exists */}
        {evidence.live && (
          <a
            href={evidence.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-gh-blue/10 border border-gh-blue/30 text-gh-blue hover:bg-gh-blue/20 transition-colors"
          >
            <ExternalLink size={12} />
            <span>Live System</span>
          </a>
        )}

        {/* Video Demo if exists */}
        {evidence.demoVideo && (
          <a
            href={evidence.demoVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-gh-bg border border-gh-border text-gh-text hover:text-gh-blue transition-colors"
          >
            <PlayCircle size={13} className="text-gh-blue" />
            <span>Demo Walkthrough</span>
          </a>
        )}

        {/* CI Status */}
        {evidence.ciStatus && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <CheckCircle size={12} />
            <span>CI: Automated Tests Passing</span>
          </span>
        )}

        {/* Test Suite / Coverage if verified */}
        {evidence.testCoverage && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-gh-bg border border-gh-border text-gh-text">
            <GitBranch size={12} className="text-purple-400" />
            <span>{evidence.testCoverage}</span>
          </span>
        )}

        {/* API Latency if verified */}
        {evidence.apiResponseTime && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-gh-bg border border-gh-border text-gh-text">
            <Activity size={12} className="text-cyan-400" />
            <span>{evidence.apiResponseTime}</span>
          </span>
        )}

        {/* Security / Verification */}
        {evidence.securityChecks && evidence.securityChecks.map((check, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-gh-bg border border-gh-border text-gh-text"
          >
            <ShieldCheck size={12} className="text-emerald-400" />
            <span>{check}</span>
          </span>
        ))}
      </div>

      {/* Internal Placeholders (Dev Flag Only - Hidden in production) */}
      {isDevMode && evidence.privatePlaceholders && evidence.privatePlaceholders.length > 0 && (
        <div className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20 text-amber-400/90 text-[11px] font-mono space-y-1">
          <p className="font-semibold flex items-center gap-1">
            <Clock size={12} /> Missing Benchmarks to Collect Manually:
          </p>
          <ul className="list-disc list-inside space-y-0.5 text-gh-text-muted">
            {evidence.privatePlaceholders.map((ph, idx) => (
              <li key={idx}>{ph}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
