import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <div className="eyebrow">03 · Projects</div>
          <h2 className="h-section mt-2">What I've Built</h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Click any project to open the case study —
            <span className="text-ink-900 font-medium"> architecture, code, and metrics</span>.
            These are the stories I walk interviewers through.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
