import React from 'react';
const WORK = [
  { label: 'AI platform in production', title: 'AI gateway', subtitle: 'plus MCP and SRE agents, in production', detail: 'Built at Sidecoach Sports: a gateway in front of LLM APIs (Entra ID, per-team keys, PII redaction, OpenTelemetry), an MCP agent service, and an SRE agent suite that triages alerts and opens Jira tickets.' },
  { label: 'LLM serving', title: '2.3x', subtitle: 'faster decode with AWQ int4', detail: 'Measured with llm-serving-bench on a Tesla T4: vLLM per-token decode went from 20.0 to 8.5 ms, and vLLM served 609 vs SGLang 384 tok/s at 64 users.' },
  { label: 'Reliability at scale', title: '1,500+', subtitle: 'servers restored in 7 days', detail: 'Led recovery across 7 environments (4 production) after a ransomware attack at Zycus, on a fleet of 50+ Kubernetes clusters.' },
];
export default function Impact() {
  return <section id="impact" className="impact-section">
    <div className="site-container">
      <div className="section-heading"><div><div className="eyebrow">Real work / Measured results</div><h2 className="h-section">Built into production.</h2></div><p>Production systems and published benchmarks,<br />each one traceable to the work.</p></div>
      <div className="impact-grid">{WORK.map(item => <article key={item.label} className="impact-card"><div className="eyebrow">{item.label}</div><h3>{item.title}</h3><p className="impact-subtitle">{item.subtitle}</p><p className="impact-detail">{item.detail}</p></article>)}</div>
    </div>
  </section>;
}
