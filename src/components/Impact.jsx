import React from 'react';

const WORK = [
  { label: 'Cloud efficiency', title: '50% lower cloud costs', detail: 'Resized Azure resources and separated environments to reduce cloud spending.' },
  { label: 'Infrastructure & delivery', title: 'Terraform + Git', detail: 'Introduced infrastructure as code and Git-based workflows, helping establish a DevOps culture.' },
  { label: 'Platform protection', title: 'Defense in depth', detail: 'Implemented Zero Trust principles and layered cloud, platform, and network security, including firewall controls.' },
  { label: 'Privacy & compliance', title: 'FERPA & COPPA controls', detail: 'Personally implemented technical controls supporting student and child privacy requirements.' },
];

export default function Impact() {
  return (
    <section id="impact" className="relative py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow">01 · Current work</div>
          <h2 className="h-section mt-3">Secure platforms. Practical outcomes.</h2>
          <p className="mt-5 text-ink-700 leading-relaxed">At Sidecoach Sports, my work connects infrastructure, delivery, security, and cost. These are the changes I have put into practice.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WORK.map((item) => (
            <article key={item.label} className="surface p-7">
              <div className="eyebrow">{item.label}</div>
              <h3 className="font-display text-[1.8rem] mt-3 text-ink-900">{item.title}</h3>
              <p className="mt-3 text-ink-700 leading-relaxed">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
