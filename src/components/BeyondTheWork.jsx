import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.19, 1, 0.22, 1];

/**
 * Passions — teaching is the eight-year standout, the rest are honest hobbies.
 * Each card has a short narrative so the section earns its place.
 */
const PASSIONS = [
  {
    icon: '✎',
    title: 'Teaching',
    meta: '8 yrs · SSC & HSC',
    body:
      'Senior Lecturer at PPT, Mumbai — 2016 to 2024. Science, IT, English, and Math to 9th-through-12th graders. Lesson plans, progress tracking, curriculum help. Teaching taught me to pace an idea.',
    accent: 'teal',
  },
  {
    icon: '⎙',
    title: 'Poetry',
    meta: 'ghazals · couplets · drafts',
    body:
      'I write in Hindi, Urdu, and English — mostly at night when the clusters are quiet. Poetry is the other half of the discipline: knowing what to leave out.',
    accent: 'amber',
  },
  {
    icon: '⚽',
    title: 'Soccer',
    meta: 'midfield · five-a-side',
    body:
      "A pitch is a live system. Spacing, timing, who's overloaded, who's free. I play to stay sharp on reading state.",
    accent: 'yellow',
  },
  {
    icon: '🏏',
    title: 'Cricket',
    meta: 'batter · opening order',
    body:
      'Grew up on Mumbai maidans. Cricket is a long game — you read the pitch, you build an innings. Runbooks feel familiar.',
    accent: 'teal',
  },
];

const ACCENT_BORDER = {
  teal:   'border-teal-600/30',
  amber:  'border-amber-500/30',
  yellow: 'border-yellow-500/30',
};
const ACCENT_GLYPH = {
  teal:   'text-teal-700 bg-teal-50',
  amber:  'text-amber-700 bg-amber-50',
  yellow: 'text-yellow-700 bg-yellow-50',
};

function PassionCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: EASE }}
      className={`surface surface-hover p-5 border-t-2 ${ACCENT_BORDER[p.accent]}`}
    >
      <div className="flex items-center gap-3">
        <span className={`w-9 h-9 rounded-lg grid place-items-center font-mono text-[15px] ${ACCENT_GLYPH[p.accent]}`}>
          {p.icon}
        </span>
        <div>
          <div className="font-display text-[1.2rem] leading-none text-ink-900">{p.title}</div>
          <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
            {p.meta}
          </div>
        </div>
      </div>
      <p className="mt-4 text-[13.5px] leading-relaxed text-ink-700">{p.body}</p>
    </motion.div>
  );
}

export default function BeyondTheWork() {
  return (
    <section id="beyond" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: EASE }}
          className="max-w-2xl"
        >
          <div className="eyebrow">Off the clock</div>
          <h2 className="h-section mt-2">Beyond the Terminal</h2>
        </motion.div>

        {/* Pull quote — editorial, large serif, yellow highlight under a key phrase */}
        <motion.figure
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mt-10 md:mt-14 max-w-4xl"
        >
          <div className="flex gap-4 md:gap-6">
            <span
              aria-hidden="true"
              className="font-display text-teal-600/40 select-none leading-none"
              style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}
            >
              &ldquo;
            </span>
            <blockquote
              className="font-display italic text-ink-900 leading-[1.12]"
              style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', letterSpacing: '-0.005em' }}
            >
              I&rsquo;ve taught Science to teenagers, debugged ransomware at 2 AM,
              played midfield in monsoon rain, and written poetry to stay honest. The{' '}
              <span className="relative inline-block">
                through-line
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-[0.12em] h-[0.3em] -z-0"
                  style={{ background: '#ffeb35', mixBlendMode: 'multiply', opacity: 0.7 }}
                />
              </span>{' '}
              is the same — patience, pattern, and the long game.
            </blockquote>
          </div>
          <figcaption className="mt-5 pl-10 md:pl-14 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-500">
            — Nirmit
          </figcaption>
        </motion.figure>

        {/* Passion cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PASSIONS.map((p, i) => (
            <PassionCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
