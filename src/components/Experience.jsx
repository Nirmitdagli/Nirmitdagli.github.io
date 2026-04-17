import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience.js';

function ExperienceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className="relative md:pl-12"
    >
      {/* Timeline rail dot (desktop) */}
      <div aria-hidden="true" className="hidden md:block absolute left-4 top-7">
        <span className={`block w-3 h-3 rounded-full ${item.current ? 'bg-teal-500' : 'bg-ink-400'} ring-4 ring-paper-100`}>
          {item.current && (
            <span className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-60" />
          )}
        </span>
      </div>

      <div className="surface surface-hover p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[1.5rem] leading-tight text-ink-900">
              {item.role}
            </h3>
            <div className="mt-1 text-ink-700">
              <span className="font-medium">{item.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {item.current && <span className="pill pill-teal">Current</span>}
            <span className="font-mono text-[12px] text-ink-500">{item.period}</span>
          </div>
        </div>

        <ul className="mt-4 space-y-2.5">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[14.5px] text-ink-700 leading-relaxed">
              <span aria-hidden="true" className="text-teal-600 mt-[8px] shrink-0 w-1 h-1 rounded-full bg-teal-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tech.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <div className="eyebrow">02 · Experience</div>
          <h2 className="h-section mt-2">Where I've Built</h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Four roles across research, enterprise SaaS, and big-bank cloud.
            Common thread: multi-cloud infrastructure, automation, and security at scale.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12 space-y-6">
          {/* Rail (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-teal-600/30 via-ink-900/10 to-transparent"
          />
          {experience.map((item, i) => (
            <ExperienceCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
