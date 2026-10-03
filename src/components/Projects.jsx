import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';
import { roles } from '../data/roles.js';
export default function Projects({ selectedRole, onSelectRole }) {
  const role = roles.find(item => item.id === selectedRole);
  const selected = role ? role.projects.map(id => projects.find(p => p.id === id)) : ['spark', 'azure-saas-blueprint', 'ransomware', 'qgpt', 'zycus', 'privaitect'].map(id => projects.find(p => p.id === id));
  return <section id="projects" className="work-section">
    <div className="site-container">
      <div className="section-heading"><div><div className="eyebrow">Selected work</div><h2 className="h-section">From infrastructure to intelligence.</h2></div><p>Explore the architecture, implementation,<br />and engineering decisions behind the work.</p></div>
      <div className="project-filters" role="group" aria-label="Filter projects by target role">
        <button type="button" aria-pressed={selectedRole === 'all'} onClick={() => onSelectRole('all')}>All work</button>
        {roles.map(item => <button key={item.id} type="button" aria-pressed={selectedRole === item.id} onClick={() => onSelectRole(item.id)}>{item.label}</button>)}
      </div>
      <p className="project-count" role="status">{selected.length} projects{role ? ' · ' + role.title : ' across AI, platforms, and security'}</p>
      <div className="project-list">{selected.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      <a className="architecture-link" href="#architectures">Explore interactive system diagrams <span aria-hidden="true">→</span></a>
    </div>
  </section>;
}
