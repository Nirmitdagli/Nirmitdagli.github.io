import React from 'react';

const FOCUS = ['Azure & AWS', 'Terraform & IaC', 'Kubernetes', 'DevOps', 'Zero Trust', 'Network Security'];

export default function Hero() {
  return (
    <section id="about" className="relative pt-28 md:pt-36 pb-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="eyebrow">Platform · Infrastructure · Security</div>
            <h1 className="font-display mt-5 text-ink-900 text-[4rem] sm:text-[5.5rem] leading-[0.95] tracking-tight">
              Nirmit <span className="relative whitespace-nowrap">Dagli<span aria-hidden="true" className="absolute left-0 right-0 bottom-1 h-4 bg-yellow-300/50 -z-10" /></span>
            </h1>
            <h2 className="mt-6 text-xl md:text-2xl font-medium text-teal-800">Platform & Cloud Security Engineer</h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-700">
              I build and secure cloud infrastructure, automate how teams ship,
              and reduce the cost of running it.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-700">
              Currently at <strong className="text-ink-900">Sidecoach Sports</strong>,
              working across Azure, Terraform, DevOps, and platform security.
              I cut cloud costs by <strong className="text-ink-900">50%</strong> through
              resource resizing and environment separation, and implemented controls
              supporting FERPA and COPPA compliance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#impact" className="inline-flex px-5 py-3 rounded-full bg-teal-700 text-white font-medium hover:bg-teal-800 transition-colors">Explore my work ↓</a>
              <a href="mailto:daglinirmit@gmail.com" className="inline-flex px-5 py-3 rounded-full border border-ink-900/15 bg-white/70 font-medium hover:border-teal-700 transition-colors">Get in touch ↗</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-700">
              <a className="underline underline-offset-4 hover:text-teal-700" href="https://github.com/Nirmitdagli" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="underline underline-offset-4 hover:text-teal-700" href="https://www.linkedin.com/in/nirmit-dagli-62857916a/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <span>Open to opportunities across the US</span>
            </div>
          </div>
          <div className="relative max-w-sm w-full mx-auto">
            <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-yellow-200/35 blur-2xl" />
            <img src="/portrait.jpg" alt="Nirmit Dagli" width="440" height="440" fetchPriority="high" className="relative aspect-square w-full object-cover rounded-full border-8 border-white/80 shadow-lift" />
            <div className="relative surface mt-[-24px] mx-4 px-6 py-5">
              <div className="eyebrow">Current role · Since August 2026</div>
              <div className="mt-2 font-display text-2xl">Cybersecurity & Platform Engineer</div>
              <div className="mt-1 text-ink-700">Sidecoach Sports</div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-7 border-t border-ink-900/10 flex flex-wrap items-center gap-2">
          <span className="eyebrow mr-3">Engineering focus</span>
          {FOCUS.map((item) => <span key={item} className="pill">{item}</span>)}
        </div>
      </div>
    </section>
  );
}
