import React from 'react';
import { motion } from 'framer-motion';

const CHANNELS = [
  {
    label: 'Email',
    value: 'ndagli@quinnipiac.edu',
    href: 'mailto:ndagli@quinnipiac.edu',
  },
  {
    label: 'Phone',
    value: '475.317.4538',
    href: 'tel:+14753174538',
  },
  {
    label: 'GitHub',
    value: 'github.com/Nirmitdagli',
    href: 'https://github.com/Nirmitdagli',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nirmitdagli',
    href: 'https://linkedin.com/in/nirmitdagli',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="surface px-8 py-14 md:px-16 md:py-20 relative overflow-hidden">
          {/* subtle teal/amber glow in the corner */}
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgba(13,148,136,0.10), transparent 70%)' }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgba(245,158,11,0.08), transparent 70%)' }}
          />

          <div className="relative max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45 }}
            >
              <div className="eyebrow">05 · Contact</div>
              <h2 className="h-section mt-2">Let's Build Something</h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-700">
                Open to infrastructure, security, and platform engineering roles.
                Available <span className="text-ink-900 font-medium">May 2026</span>.
                Willing to relocate anywhere.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noreferrer' : undefined}
                  className="group surface surface-hover px-5 py-4 flex items-center gap-4"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-teal-700">
                    {c.label}
                  </span>
                  <span className="flex-1 text-ink-900 text-[14.5px] font-medium truncate">
                    {c.value}
                  </span>
                  <span className="text-ink-400 group-hover:text-teal-600 transition-colors" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="mailto:ndagli@quinnipiac.edu"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal-600 text-white text-[14px] font-medium shadow-soft hover:shadow-lift hover:bg-teal-700 transition-all"
              >
                Say hello →
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-ink-900/10 text-ink-900 text-[14px] font-medium hover:border-teal-600 transition-colors"
              >
                Download résumé
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v8m0 0l3-3m-3 3l-3-3M2 11h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
