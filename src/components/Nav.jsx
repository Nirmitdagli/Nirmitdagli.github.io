import React, { useEffect, useRef, useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy.js';

const LINKS = [
  { id: 'projects', label: 'Selected work' },
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Research' },
];
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef(null);
  const active = useScrollSpy(['about', ...LINKS.map((l) => l.id), 'architectures', 'beyond', 'contact']);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); toggle.current?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);
  return <header className="site-header">
    <div className="site-container nav-inner">
      <a href="#about" className="brand" aria-label="Nirmit Dagli, back to top"><span className="brand-mark">nd<span>.</span></span><span className="brand-name">Nirmit Dagli</span></a>
      <nav className="desktop-nav" aria-label="Primary">
        {LINKS.map((link) => <a key={link.id} href={'#' + link.id} aria-current={active === link.id ? 'location' : undefined}>{link.label}</a>)}
        <a className="nav-contact" href="#contact">Get in touch ↗</a>
      </nav>
      <button ref={toggle} className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
    </div>
    {menuOpen && <nav className="mobile-nav site-container" id="mobile-navigation" aria-label="Mobile">
      {[...LINKS, { id: 'contact', label: 'Get in touch' }].map((link) => <a key={link.id} href={'#' + link.id} onClick={() => setMenuOpen(false)}>{link.label} <span aria-hidden="true">↗</span></a>)}
    </nav>}
  </header>;
}
