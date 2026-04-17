import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArchitectureDiagram from './ArchitectureDiagram.jsx';
import CodeBlock from './CodeBlock.jsx';

const TAG_ACCENT = {
  teal:   'pill-teal',
  amber:  'pill-amber',
  yellow: 'pill-yellow',
  red:    'pill-red',
};

function MetricTile({ label, value, sub }) {
  return (
    <div className="surface px-4 py-3 text-center">
      <div className="font-display text-[1.9rem] leading-none text-ink-900">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-ink-500 font-medium">{label}</div>
      {sub && <div className="text-[10px] text-ink-500/80 mt-0.5 font-mono">{sub}</div>}
    </div>
  );
}

/**
 * Normalize the project shape so ProjectCard renders the same way regardless
 * of whether a project declares a single architecture/code or arrays of them.
 */
function normalize(project) {
  const architectures = project.architectures
    ? project.architectures
    : project.architecture
    ? [{ title: null, layers: project.architecture, phased: project.architecturePhased }]
    : [];
  const codeBlocks = project.codeBlocks
    ? project.codeBlocks
    : project.code
    ? [project.code]
    : [];
  return { architectures, codeBlocks };
}

/**
 * ProjectCard — collapsed header always visible; expands on click.
 * Expanded view shows: metrics → architecture(s) → code(s).
 */
export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const [activeArch, setActiveArch] = useState(0);
  const [activeCode, setActiveCode] = useState(0);
  const tagClass = TAG_ACCENT[project.tag?.accent] || 'pill-teal';
  const { architectures, codeBlocks } = normalize(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      className={`surface ${open ? 'shadow-lift' : 'surface-hover'}`}
      style={{ borderRadius: 20 }}
      aria-expanded={open}
    >
      {/* Collapsed header — acts as the toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-6 md:p-7"
      >
        <div className="flex items-start gap-4 flex-wrap">
          <div className="flex-1 min-w-[260px]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`pill ${tagClass}`}>{project.tag.label}</span>
              <span className="font-mono text-[11px] text-ink-500">0{index + 1}</span>
            </div>
            <h3 className="mt-3 font-display text-[1.85rem] md:text-[2.1rem] leading-tight text-ink-900">
              {project.title}
              <span className="text-ink-500"> — </span>
              <span className="text-ink-700 italic">{project.subtitle}</span>
            </h3>
            <p className="mt-3 text-ink-700 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Expand indicator */}
          <div className="flex items-center gap-2 self-start md:self-center">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
              {open ? 'Collapse' : 'Explore'}
            </span>
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-ink-900/10 text-ink-800"
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.span>
          </div>
        </div>
      </button>

      {/* Expanded case study */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 md:px-7 pb-7 pt-1">
              <div className="sep mb-6" />

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <MetricTile key={m.label} {...m} />
                ))}
              </div>

              {/* Architecture + Code — stacked on mobile, side-by-side on wide screens */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Architecture column — supports multiple views via tabs */}
                <div>
                  <div className="flex items-center justify-between mb-3 gap-3">
                    <div className="eyebrow">
                      {architectures.length > 1 ? 'Architecture Views' : 'Architecture'}
                    </div>
                    {architectures.length > 1 && (
                      <div className="flex gap-1.5" role="tablist" aria-label="Architecture views">
                        {architectures.map((a, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setActiveArch(i); }}
                            role="tab"
                            aria-selected={activeArch === i}
                            className={`px-3 py-1 rounded-full text-[11.5px] font-mono border transition-colors ${
                              activeArch === i
                                ? 'bg-teal-600 text-white border-teal-600'
                                : 'bg-white/70 border-ink-900/10 text-ink-700 hover:border-teal-600/40'
                            }`}
                          >
                            {a.title ? a.title.split('\u2014')[0].trim() : `View ${i + 1}`}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {architectures[activeArch]?.title && architectures.length > 1 && (
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                      {architectures[activeArch].title}
                    </p>
                  )}
                  {architectures[activeArch] && (
                    <ArchitectureDiagram
                      layers={architectures[activeArch].layers}
                      phased={!!architectures[activeArch].phased}
                    />
                  )}
                </div>

                {/* Code column — supports multiple files via tabs */}
                <div>
                  <div className="flex items-center justify-between mb-3 gap-3">
                    <div className="eyebrow">
                      {codeBlocks.length > 1 ? 'Representative Code' : 'Representative Code'}
                    </div>
                    {codeBlocks.length > 1 && (
                      <div className="flex gap-1.5 flex-wrap" role="tablist" aria-label="Code files">
                        {codeBlocks.map((c, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setActiveCode(i); }}
                            role="tab"
                            aria-selected={activeCode === i}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono border transition-colors truncate max-w-[180px] ${
                              activeCode === i
                                ? 'bg-ink-900 text-white border-ink-900'
                                : 'bg-white/70 border-ink-900/10 text-ink-700 hover:border-ink-900/30'
                            }`}
                            title={c.filename}
                          >
                            {c.filename.split('/').pop()}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {codeBlocks[activeCode] && (
                    <CodeBlock
                      filename={codeBlocks[activeCode].filename}
                      language={codeBlocks[activeCode].language}
                      lines={codeBlocks[activeCode].lines}
                    />
                  )}
                  <p className="mt-3 text-xs text-ink-500 font-mono">
                    Excerpt — not the full source.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
