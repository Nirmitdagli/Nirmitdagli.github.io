import React from 'react';
import { motion } from 'framer-motion';
import { certifications, publications } from '../data/certifications.js';
import Education from './Education.jsx';

const BADGE_GRADIENT = {
  teal:  'from-teal-500 to-teal-700',
  amber: 'from-amber-400 to-amber-600',
  red:   'from-rose-500 to-rose-700',
};

function CertBadge({ cert, index }) {
  const grad = BADGE_GRADIENT[cert.accent] || BADGE_GRADIENT.teal;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="surface surface-hover p-5 flex items-center gap-4"
    >
      <div
        className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${grad} grid place-items-center text-white font-display shadow-soft relative`}
        aria-hidden="true"
      >
        <span className="text-[1.05rem] leading-none px-1 text-center">
          {cert.short}
        </span>
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/25" />
      </div>
      <div>
        <div className="font-display text-[1.15rem] leading-tight text-ink-900">{cert.name}</div>
        <div className="mt-1 font-mono text-[11.5px] uppercase tracking-wider text-ink-500">
          {cert.issuer}
        </div>
      </div>
    </motion.div>
  );
}

function PublicationRow({ pub, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3 border-b border-ink-900/5 last:border-b-0"
    >
      <span className="font-display text-[1.05rem] text-ink-900">{pub.title}</span>
      <span className="text-ink-500 font-mono text-[11px]">—</span>
      <span className="text-ink-700 text-[13.5px]">{pub.venue}</span>
      {pub.location && (
        <>
          <span className="text-ink-400">·</span>
          <span className="text-ink-600 text-[13.5px]">{pub.location}</span>
        </>
      )}
      <span className="ml-auto pill">{pub.date}</span>
    </motion.li>
  );
}

export default function Credentials() {
  return (
    <section id="credentials" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <div className="eyebrow">04 · Credentials</div>
          <h2 className="h-section mt-2">Certifications & Publications</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Certifications: wider column */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow mb-4">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((c, i) => (
                <CertBadge key={c.short} cert={c} index={i} />
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-4">Publications</h3>
            <div className="surface p-5">
              <ul>
                {publications.map((p, i) => (
                  <PublicationRow key={p.title} pub={p} index={i} />
                ))}
              </ul>
            </div>

            <Education />
          </div>
        </div>
      </div>
    </section>
  );
}
