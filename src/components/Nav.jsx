import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy.js';

const LINKS = [
  { id: 'about',          label: 'About'         },
  { id: 'impact',         label: 'Impact'        },
  { id: 'experience',     label: 'Experience'    },
  { id: 'projects',       label: 'Projects'      },
  { id: 'architectures',  label: 'Architectures' },
  { id: 'credentials',    label: 'Credentials'   },
  { id: 'contact',        label: 'Contact'       },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-paper-100/75 border-b border-ink-900/5 shadow-[0_1px_12px_rgba(20,20,20,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#about"
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="relative w-9 h-9 grid place-items-center rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 text-white font-display text-lg shadow-soft">
            ND
            <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" aria-hidden="true" />
          </span>
          <div className="hidden xl:block leading-tight">
            <div className="font-display text-[15px] text-ink-900">Nirmit Dagli</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
              Cloud · Security · Platform
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {LINKS.map((l) => {
            const active = activeId === l.id;
            useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative px-3 py-2 text-[13.5px] font-medium transition-colors ${
                  active ? 'text-teal-700' : 'text-ink-700 hover:text-ink-900'
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-teal-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="mailto:daglinirmit@gmail.com?subject=Resume%20request"
            target="_blank"
            rel="noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 pill pill-teal"
          >
            Request résumé
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M2 9 L9 2 M4 2 H9 V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden w-10 h-10 grid place-items-center rounded-lg border border-ink-900/10 bg-white/70"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <div className="flex flex-col gap-1">
            <span className={`block w-4 h-px bg-ink-800 transition-transform ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`block w-4 h-px bg-ink-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-4 h-px bg-ink-800 transition-transform ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden border-t border-ink-900/5 bg-paper-100/95 backdrop-blur-md overflow-hidden"
          aria-label="Mobile"
          id="mobile-navigation"
        >
          <div className="px-5 py-3 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                className={`px-2 py-2.5 rounded-md text-[14px] ${
                  activeId === l.id ? 'text-teal-700 bg-teal-50' : 'text-ink-800 hover:bg-paper-200'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:daglinirmit@gmail.com?subject=Resume%20request"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="px-2 py-2.5 rounded-md text-[14px] text-teal-700 font-medium"
            >
              Request résumé ↗
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
