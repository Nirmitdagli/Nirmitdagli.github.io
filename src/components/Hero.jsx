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
            <p className="hero-lead">GPU clusters. LLM serving.<br className="hidden sm:block" /> Secure platforms that stay up.</p>
            <p className="hero-description">I run Kubernetes GPU clusters, benchmark and serve LLMs with vLLM, SGLang and TensorRT-LLM, and secure the platforms they run on: Zero Trust access, DevSecOps pipelines, AI gateways and incident response. Currently Founding Platform Engineer at Sidecoach Sports.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
              <a className="button-secondary" href="mailto:daglinirmit@gmail.com">Let’s talk</a>
            </div>
            
          </div>
          <aside className="profile-panel" aria-label="About Nirmit Dagli">
            <div className="profile-photo"><img src="/portrait.jpg" alt="Nirmit Dagli at a conference" width="440" height="440" fetchPriority="high" /><span className="photo-caption">Engineer. Researcher. Builder.</span></div>
            <div className="profile-details">
              <div><span className="eyebrow">Currently</span><p>Sidecoach Sports</p><span className="profile-role">Founding Platform Engineer</span></div>
              <div className="profile-links"><a href="https://github.com/Nirmitdagli" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/nirmit-dagli-62857916a/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
            </div>
          </aside>
        </div>
        <div className="role-intro"><span className="eyebrow">AI infrastructure, end to end</span><span>Three layers, one job</span></div>
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
