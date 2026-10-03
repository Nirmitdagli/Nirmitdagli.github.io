import React from 'react';
const WORK = [
  { label: 'Cloud efficiency', title: '50%', subtitle: 'reduction in Azure cloud costs', detail: 'Resource resizing and environment separation at Sidecoach Sports.' },
  { label: 'Infrastructure & delivery', title: 'Terraform + Git', subtitle: 'from manual changes to IaC', detail: 'Introduced infrastructure as code and Git-based workflows, helping establish a DevOps culture.' },
  { label: 'Security & privacy', title: 'Defense in depth', subtitle: 'controls across the platform', detail: 'Implemented Zero Trust principles, firewall controls, and technical controls supporting FERPA and COPPA compliance.' },
];
export default function Impact() {
  return <section id="impact" className="impact-section">
    <div className="site-container">
      <div className="section-heading"><div><div className="eyebrow">Real work / Measurable impact</div><h2 className="h-section">Built into production.</h2></div><p>Current work at Sidecoach Sports,<br />since August 2026.</p></div>
      <div className="impact-grid">{WORK.map(item => <article key={item.label} className="impact-card"><div className="eyebrow">{item.label}</div><h3>{item.title}</h3><p className="impact-subtitle">{item.subtitle}</p><p className="impact-detail">{item.detail}</p></article>)}</div>
    </div>
  </section>;
}
