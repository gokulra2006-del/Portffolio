import { useState } from 'react';
import { Layers, ArrowRight, ShieldCheck, Database, Cpu, Globe, Server, CheckCircle2 } from 'lucide-react';

export interface ArchitectureNode {
  id: string;
  name: string;
  type: 'frontend' | 'auth' | 'api' | 'ai' | 'database' | 'external' | 'audio';
  description: string;
  details: string[];
}

export interface ArchitectureFlow {
  from: string;
  to: string;
  label: string;
}

export interface ArchitectureSpec {
  title: string;
  summary: string;
  nodes: ArchitectureNode[];
  dataFlow: ArchitectureFlow[];
}

export const ARCHITECTURES: Record<string, ArchitectureSpec> = {
  'agri-bank': {
    title: 'AgriBank System Architecture',
    summary: 'Three-tier architecture with role-enforced REST middleware and isolated credit evaluation service.',
    nodes: [
      {
        id: 'client',
        name: 'React SPA Client',
        type: 'frontend',
        description: 'Multi-role portal for Farmers, Officers, and Admins.',
        details: ['Role-specific views', 'Multi-step loan wizard', 'Multilingual UI support']
      },
      {
        id: 'auth',
        name: 'JWT Auth & RBAC',
        type: 'auth',
        description: 'Cryptographic token verification and permission gate.',
        details: ['HttpOnly cookies', 'Role verification middleware', 'Session expiry handling']
      },
      {
        id: 'api',
        name: 'Express.js API Layer',
        type: 'api',
        description: 'RESTful route orchestration and input sanitization.',
        details: ['JSON schema validation', 'Loan state machine', 'Transactional endpoints']
      },
      {
        id: 'risk',
        name: 'Credit Risk Engine',
        type: 'ai',
        description: 'Evaluation module synthesizing agronomic & financial data.',
        details: ['Crop cycle risk factors', 'Land-to-loan ratios', 'Repayment track records']
      },
      {
        id: 'db',
        name: 'MongoDB Database',
        type: 'database',
        description: 'Document store with compound indexes.',
        details: ['Users & credentials', 'Loan application ledgers', 'Subsidy audit history']
      }
    ],
    dataFlow: [
      { from: 'client', to: 'auth', label: '1. User Action / Request' },
      { from: 'auth', to: 'api', label: '2. Verified Token & Claims' },
      { from: 'api', to: 'risk', label: '3. Risk Parameter Query' },
      { from: 'risk', to: 'api', label: '4. Computed Risk Score' },
      { from: 'api', to: 'db', label: '5. Atomic State Transition' }
    ]
  },
  'dual-enjoy': {
    title: 'Dual-enjoy Low-Latency Audio Pipeline',
    summary: 'Direct Windows WASAPI loopback capture streaming through lock-free ring buffers to dual Bluetooth endpoints with dynamic clock-slip compensation.',
    nodes: [
      {
        id: 'audio-mix',
        name: 'Windows Audio Core',
        type: 'external',
        description: 'System master audio mix from all desktop applications.',
        details: ['Shared mode stream', 'Variable sample rates (44.1/48kHz)']
      },
      {
        id: 'wasapi-cap',
        name: 'WASAPI Loopback Capture',
        type: 'audio',
        description: 'Event-driven uncompressed PCM byte stream capture.',
        details: ['Sub-20ms buffer intervals', 'Low CPU event callbacks']
      },
      {
        id: 'ring-buffer',
        name: 'Lock-Free Ring Buffer',
        type: 'api',
        description: 'Thread-safe circular queue preventing audio glitching.',
        details: ['Zero memory alloc in hot path', 'Thread isolation']
      },
      {
        id: 'dsp-sync',
        name: 'DSP & Drift Corrector',
        type: 'ai',
        description: 'Dynamic delay lines, linear resampling, and independent volume.',
        details: ['Micro-sample clock adjustment', 'Independent L/R gain channels']
      },
      {
        id: 'sinks',
        name: 'Dual Bluetooth Endpoints',
        type: 'external',
        description: 'Simultaneous WASAPI render clients for Device 1 & Device 2.',
        details: ['Independent WASAPI renderers', 'Disconnect recovery handler']
      }
    ],
    dataFlow: [
      { from: 'audio-mix', to: 'wasapi-cap', label: '1. OS Audio Stream' },
      { from: 'wasapi-cap', to: 'ring-buffer', label: '2. Real-time PCM Packets' },
      { from: 'ring-buffer', to: 'dsp-sync', label: '3. Dual Worker Consumer' },
      { from: 'dsp-sync', to: 'sinks', label: '4. Synchronized Playback' }
    ]
  },
  'code-review-assistant': {
    title: 'AI Code Review Assistant Architecture',
    summary: 'Interactive developer workbench routing sanitized code through an Express token budgeter and OpenRouter LLM gateway with strict JSON validation.',
    nodes: [
      {
        id: 'workbench',
        name: 'React Review Workbench',
        type: 'frontend',
        description: 'Syntax-highlighted code editor and categorized feedback viewer.',
        details: ['Line-specific diff viewer', 'Severity filters (Security/Perf/Style)']
      },
      {
        id: 'gateway',
        name: 'Express API & Token Budgeter',
        type: 'api',
        description: 'Input sanitization and token budget estimator.',
        details: ['Credential stripping', 'File truncation boundary checks']
      },
      {
        id: 'router',
        name: 'OpenRouter Gateway',
        type: 'external',
        description: 'Multi-provider model router with automatic fallback.',
        details: ['Provider failover routing', 'Latency & cost optimization']
      },
      {
        id: 'llm',
        name: 'Structured LLM Prompting',
        type: 'ai',
        description: 'Specialized system prompts enforcing JSON output schemas.',
        details: ['Defect categorization', 'Line number anchors', 'Actionable code fixes']
      },
      {
        id: 'validator',
        name: 'JSON Schema Validator',
        type: 'auth',
        description: 'Runtime verification of LLM responses against UI schema.',
        details: ['Strict contract check', 'Fallback recovery for malformed output']
      }
    ],
    dataFlow: [
      { from: 'workbench', to: 'gateway', label: '1. Raw Source Code' },
      { from: 'gateway', to: 'router', label: '2. Sanitized Prompt Payload' },
      { from: 'router', to: 'llm', label: '3. Model Inference Call' },
      { from: 'llm', to: 'validator', label: '4. Structured JSON Response' },
      { from: 'validator', to: 'workbench', label: '5. Render Line-by-Line Diffs' }
    ]
  }
};

const TYPE_ICONS: Record<string, typeof Server> = {
  frontend: Globe,
  auth: ShieldCheck,
  api: Server,
  ai: Cpu,
  database: Database,
  external: Layers,
  audio: Cpu,
};

const TYPE_COLORS: Record<string, string> = {
  frontend: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
  auth: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
  api: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
  ai: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
  database: 'border-rose-500/40 text-rose-400 bg-rose-500/10',
  external: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
  audio: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
};

export function ArchitectureDiagram({ projectId }: { projectId: string }) {
  const spec = ARCHITECTURES[projectId];
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  if (!spec) return null;

  const activeNode = spec.nodes.find((n) => n.id === selectedNodeId) || spec.nodes[0];

  return (
    <div className="rounded-xl border border-gh-border bg-gh-bg-secondary/70 p-4 sm:p-5 my-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gh-border/60">
        <div className="flex items-center gap-2">
          <Layers size={18} className="text-gh-blue" />
          <h4 className="text-sm sm:text-base font-bold text-gh-text">{spec.title}</h4>
        </div>
        <span className="text-[11px] font-mono text-gh-text-muted bg-gh-bg px-2.5 py-1 rounded border border-gh-border">
          Interactive Diagram (Click node to inspect)
        </span>
      </div>

      <p className="text-xs text-gh-text-muted mb-4 leading-relaxed">
        {spec.summary}
      </p>

      {/* Nodes Flow Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-5">
        {spec.nodes.map((node, index) => {
          const Icon = TYPE_ICONS[node.type] || Server;
          const isSelected = activeNode.id === node.id;
          const colorClass = TYPE_COLORS[node.type];

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNodeId(node.id)}
              className={`text-left p-3 rounded-lg border transition-all relative ${
                isSelected
                  ? 'border-gh-blue bg-gh-blue/10 shadow-md ring-1 ring-gh-blue'
                  : 'border-gh-border bg-gh-bg hover:border-gh-border-hover hover:bg-gh-bg-secondary'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`p-1.5 rounded-md ${colorClass}`}>
                  <Icon size={14} />
                </span>
                <span className="text-[10px] font-mono text-gh-text-muted">
                  0{index + 1}
                </span>
              </div>
              <p className="text-xs font-semibold text-gh-text truncate">{node.name}</p>
              <p className="text-[10px] text-gh-text-muted line-clamp-2 mt-0.5 leading-snug">
                {node.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Node Deep Dive */}
      <div className="p-3.5 rounded-lg bg-gh-bg border border-gh-border mb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-mono text-gh-blue font-semibold uppercase tracking-wider">
            Active Node Detail:
          </span>
          <span className="text-xs font-bold text-gh-text">{activeNode.name}</span>
        </div>
        <p className="text-xs text-gh-text-muted mb-2.5">{activeNode.description}</p>
        <div className="flex flex-wrap gap-2">
          {activeNode.details.map((detail, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-gh-bg-secondary border border-gh-border text-gh-text"
            >
              <CheckCircle2 size={11} className="text-emerald-400" />
              {detail}
            </span>
          ))}
        </div>
      </div>

      {/* Data Flow Trace */}
      <div className="p-3 rounded-lg bg-gh-bg/50 border border-gh-border/50">
        <p className="text-[11px] font-mono text-gh-text-muted uppercase tracking-wider mb-2 font-semibold">
          Data Flow Sequence:
        </p>
        <div className="space-y-1.5 text-xs font-mono text-gh-text-muted">
          {spec.dataFlow.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2 flex-wrap">
              <span className="text-gh-blue font-semibold">{step.label}</span>
              <span className="text-gh-border-hover">•</span>
              <span className="text-gh-text bg-gh-bg px-1.5 py-0.5 rounded text-[11px]">
                {step.from}
              </span>
              <ArrowRight size={12} className="text-gh-text-muted" />
              <span className="text-gh-text bg-gh-bg px-1.5 py-0.5 rounded text-[11px]">
                {step.to}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
