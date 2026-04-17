import React from 'react';
import { motion } from 'framer-motion';

/**
 * Education renders as a sub-block inside the Credentials column.
 * Kept as its own file for import hygiene and matches the spec's file layout.
 */
export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      id="education"
      className="mt-8"
    >
      <h3 className="eyebrow mb-4">Education</h3>
      <div className="surface p-5 space-y-5">
        <div>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="font-display text-[1.1rem] text-ink-900">M.S. Computer Science</span>
            <span className="pill pill-teal">GPA 3.9</span>
          </div>
          <div className="mt-1 text-ink-700 text-[13.5px]">
            Quinnipiac University, Hamden CT
            <span className="text-ink-400"> · </span>
            <span className="font-mono text-[12px]">May 2026</span>
          </div>
          <div className="mt-2 text-ink-600 text-[13px]">
            <span className="text-ink-500 font-mono text-[11px] uppercase tracking-wider">Coursework</span>{' '}
            Computer Networks · Operating Systems · Generative AI · DSA
          </div>
          <div className="mt-1 text-ink-600 text-[13px]">
            <span className="text-ink-500 font-mono text-[11px] uppercase tracking-wider">Research</span>{' '}
            GenAI · Quantum Computing
          </div>
        </div>

        <div className="sep" />

        <div>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="font-display text-[1.1rem] text-ink-900">B.E. Information Technology</span>
            <span className="pill">GPA 3.1</span>
          </div>
          <div className="mt-1 text-ink-700 text-[13.5px]">
            University of Mumbai, India
            <span className="text-ink-400"> · </span>
            <span className="font-mono text-[12px]">May 2020</span>
          </div>
          <div className="mt-2 text-ink-600 text-[13px]">
            <span className="text-ink-500 font-mono text-[11px] uppercase tracking-wider">Coursework</span>{' '}
            Cloud Computing · Distributed Databases · DevOps · Software Engineering
          </div>
        </div>
      </div>
    </motion.div>
  );
}
