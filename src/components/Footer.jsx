import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-ink-900/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono text-[12px] text-ink-500">
          Built by Nirmit Dagli · 2026
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-ink-500">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500" />
          <span>Made with React · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
