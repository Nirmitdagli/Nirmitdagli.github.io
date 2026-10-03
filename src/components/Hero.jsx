import React from 'react';
import { roles } from '../data/roles.js';

export default function Hero({ onSelectRole }) {
  return (
    <section id="about" className="hero-shell">
      <div className="site-container">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">Nirmit Dagli / Engineering portfolio</div>
            <h1>Building what<br /><span>AI runs on.</span></h1>
            <p className="hero-lead">Cloud infrastructure. Reliable platforms.<br className="hidden sm:block" /> Security at every layer.</p>
            <p className="hero-description">I connect infrastructure, automation, and cybersecurity to help teams build and run intelligent products. Currently Cybersecurity & Platform Engineer at Sidecoach Sports.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
              <a className="button-secondary" href="mailto:daglinirmit@gmail.com">Let’s talk</a>
            </div>
            <div className="hero-availability"><span className="status-dot" aria-hidden="true" /> Open to opportunities across the United States</div>
          </div>
          <aside className="profile-panel" aria-label="About Nirmit Dagli">
            <div className="profile-photo"><img src="/portrait.jpg" alt="Nirmit Dagli at a conference" width="440" height="440" fetchPriority="high" /><span className="photo-caption">Engineer. Researcher. Builder.</span></div>
            <div className="profile-details">
              <div><span className="eyebrow">Currently</span><p>Sidecoach Sports</p><span className="profile-role">Cybersecurity & Platform Engineer</span></div>
              <div className="profile-links"><a href="https://github.com/Nirmitdagli" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/nirmit-dagli-62857916a/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
            </div>
          </aside>
        </div>
        <div className="role-intro"><span className="eyebrow">Three areas of focus</span><span>Explore the work behind each role</span></div>
        <div className="role-grid">
          {roles.map((role) => <a key={role.id} href="#projects" className="role-card" onClick={() => onSelectRole(role.id)}>
            <div className="role-card-top"><span>{role.number}</span><span aria-hidden="true">↗</span></div>
            <h2>{role.title}</h2><p>{role.description}</p><div className="role-proof">{role.proof}</div>
          </a>)}
        </div>
      </div>
    </section>
  );
}
