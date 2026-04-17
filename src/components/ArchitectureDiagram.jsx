import React from 'react';
import { motion } from 'framer-motion';

/**
 * ArchitectureDiagram
 * ------------------------------------------------------------------
 * Pure HTML/CSS — no images, no SVG libraries. Each "layer" is a card
 * that lists its components. Layers are connected visually by a centered
 * vertical rail + caret between them, so the reader sees data flow.
 *
 * Props:
 *   layers: [{ name, accent: 'teal'|'amber'|'red'|'yellow', items: [] }]
 *   phased: boolean — shifts visual language from "stack" to "phases"
 */

const ACCENT = {
  teal:   { bar: 'bg-teal-500',   chip: 'bg-teal-50 text-teal-800 border-teal-200',     dot: 'bg-teal-500'   },
  amber:  { bar: 'bg-amber-500',  chip: 'bg-amber-50 text-amber-800 border-amber-200',  dot: 'bg-amber-500'  },
  red:    { bar: 'bg-red-500',    chip: 'bg-red-50 text-red-800 border-red-200',        dot: 'bg-red-500'    },
  yellow: { bar: 'bg-yellow-500', chip: 'bg-yellow-50 text-yellow-800 border-yellow-200', dot: 'bg-yellow-500' },
};

export default function ArchitectureDiagram({ layers = [], phased = false }) {
  return (
    <div className="relative">
      {/* vertical rail connecting layers (desktop) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-ink-900/10 to-transparent"
      />

      <div className="relative flex flex-col gap-3">
        {layers.map((layer, idx) => {
          const accent = ACCENT[layer.accent] || ACCENT.teal;
          return (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: 'easeOut' }}
                className="surface px-5 py-4 relative"
              >
                {/* accent bar on the left edge */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-3 bottom-3 w-1 rounded-r ${accent.bar} opacity-80`}
                />

                <div className="flex items-start justify-between gap-4 pl-2">
                  <div className="min-w-[140px]">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                      <span className="eyebrow">
                        {phased ? layer.name : `Layer ${idx + 1}`}
                      </span>
                    </div>
                    <h4 className="mt-1 font-display text-[1.25rem] text-ink-900 leading-tight">
                      {phased ? layer.name.replace(/^Phase \d+ · /, '') : layer.name}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-1.5 justify-end flex-1">
                    {layer.items.map((item, i) => (
                      <span
                        key={i}
                        className={`text-[11.5px] px-2.5 py-1 rounded-md border ${accent.chip} font-medium whitespace-nowrap`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* flow caret between layers */}
              {idx < layers.length - 1 && (
                <div className="flex justify-center -my-1" aria-hidden="true">
                  <svg width="18" height="10" viewBox="0 0 18 10" className="text-ink-900/20">
                    <path d="M9 9 L1 1 M9 9 L17 1" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
