import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import {
  ransomwareDiagram,
  sparkDiagram,
  zycusDiagram,
} from '../data/reactFlowDiagrams.js';

// React Flow lives in its own chunk (~50KB gzip) — only loads when this
// section is viewed. The Suspense boundary shows a quiet placeholder while
// the bundle streams in.
const ReactFlowDiagram = lazy(() => import('./ReactFlowDiagram.jsx'));

/**
 * Architectures
 * ------------------------------------------------------------------
 * Dedicated section between Projects and Credentials. Tabs across the
 * top let the reader switch between interactive React Flow diagrams —
 * one per major system (Zycus platform, SPARK tutoring, ransomware
 * hardening). The diagram itself is full-width, draggable, zoomable.
 *
 * Why its own section (not embedded in project cards):
 *   1. Diagrams want real estate — cramped inside a card it's noise,
 *      here it breathes.
 *   2. A hiring manager scanning by nav link can jump straight to
 *      "Architectures" and skim three real systems back-to-back.
 *   3. Keeps the project cards focused on narrative + code.
 */

const TABS = [
  {
    id: 'zycus',
    label: 'Zycus · Multi-Cloud SaaS',
    subtitle: 'Multi-cloud Kubernetes · delivery pipelines · monitoring',
    accent: 'teal',
    diagram: zycusDiagram,
  },
  {
    id: 'ransomware',
    label: 'Ransomware · Defense in Depth',
    subtitle: 'Akamai + Zscaler + Palo Alto + CyberArk + CrowdStrike + AWS Control Tower',
    accent: 'red',
    diagram: ransomwareDiagram,
  },
  {
    id: 'spark',
    label: 'SPARK · AI Tutoring',
    subtitle: 'Kubernetes microservices · RAG · multi-LLM orchestration',
    accent: 'amber',
    diagram: sparkDiagram,
  },
];

const ACCENT_PILL = {
  teal:   'pill-teal',
  amber:  'pill-amber',
  yellow: 'pill-yellow',
  red:    'pill-red',
};

export default function Architectures() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeId) || TABS[0];

  return (
    <section id="architectures" className="relative pt-10 md:pt-14 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <div className="eyebrow">Systems & architecture</div>
          <h2 className="h-section mt-2">Systems I've Built</h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Explore architecture overviews from my cloud, security, and AI work.
            Select a system, then drag, pan, and zoom to inspect the components and flows.
          </p>
        </motion.div>

        {/* Tab row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Architecture diagrams"
        >
          {TABS.map((t) => {
            const isActive = t.id === activeId;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(t.id)}
                className={`group text-left px-4 py-3 rounded-xl border transition-all ${
                  isActive
                    ? 'bg-white border-teal-600/40 shadow-[0_2px_12px_rgba(13,148,136,0.12)]'
                    : 'bg-white/60 border-ink-900/8 hover:border-teal-600/30 hover:bg-white/85'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      t.accent === 'teal'
                        ? 'bg-teal-600'
                        : t.accent === 'red'
                        ? 'bg-red-500'
                        : t.accent === 'amber'
                        ? 'bg-amber-500'
                        : 'bg-yellow-500'
                    }`}
                  />
                  <span
                    className={`font-display text-[15px] leading-tight ${
                      isActive ? 'text-ink-900' : 'text-ink-800'
                    }`}
                  >
                    {t.label}
                  </span>
                </div>
                <div className="mt-1 font-mono text-[10.5px] tracking-wide text-ink-500 max-w-xs">
                  {t.subtitle}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Meta row — small label + "React Flow" chip */}
        <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
          <div className="font-mono text-[11px] text-ink-500 uppercase tracking-wider">
            drag · zoom · pan · click to highlight
          </div>
          <span className={`pill ${ACCENT_PILL[active.accent] || 'pill-teal'} font-mono text-[10.5px]`}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <circle cx="5" cy="5" r="2.5" fill="currentColor" opacity="0.85" />
            </svg>
            React Flow · {active.id}
          </span>
        </div>

        {/* Diagram canvas — keyed remount on tab change so React Flow's
            ResizeObserver re-attaches cleanly. No AnimatePresence wrapper:
            RF measures handles via ResizeObserver, and any enclosing
            transform/opacity animation races with its mount-time measure. */}
        <div key={active.id} className="mt-4">
          <Suspense
            fallback={
              <div
                className="surface flex items-center justify-center"
                style={{ height: active.diagram.height || 620 }}
              >
                <span className="font-mono text-[11px] text-ink-500">
                  Loading interactive diagram…
                </span>
              </div>
            }
          >
            <ReactFlowDiagram
              nodes={active.diagram.nodes}
              edges={active.diagram.edges}
              height={active.diagram.height}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
