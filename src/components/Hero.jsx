import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp.js';
import { useInView } from '../hooks/useInView.js';

// Role reel — cycles through the full polymath surface. Cloud-infra first
// because it's the anchor, but everything else gets a turn so the reader
// sees the range before they scroll.
const SUBTITLES = [
  'Cloud Infrastructure & Security Engineer',
  'DevOps + Platform Engineer',
  'Network & Zero-Trust Architect',
  'AI Engineer \u2014 LLMs, RAG, Agents',
  'Quantum Computing Researcher (IEEE)',
];

// Premium easing — borrowed from findworkhappiness.com's slow, considered feel.
const EASE = [0.19, 1, 0.22, 1];

// Hook: cycles through an array of phrases, typing each one out and then
// backspacing before the next. If given a single string, acts like a plain
// typewriter. Pauses after each phrase is fully typed so the reader can
// actually read it — these are role titles, not flavor text.
function useTypewriter(phrases, { speed = 55, deleteSpeed = 28, holdMs = 1800, startDelay = 400 } = {}) {
  const list = Array.isArray(phrases) ? phrases : [phrases];
  const [out, setOut]   = useState('');
  const [idx, setIdx]   = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timer;
    let i = 0;
    let deleting = false;
    const current = list[idx];

    const kickoff = setTimeout(function tick() {
      if (!deleting) {
        i += 1;
        setOut(current.slice(0, i));
        if (i >= current.length) {
          // Full phrase — if only one phrase, stop here. Otherwise hold, then delete.
          if (list.length === 1) { setDone(true); return; }
          timer = setTimeout(() => { deleting = true; tick(); }, holdMs);
          return;
        }
        timer = setTimeout(tick, speed);
      } else {
        i -= 1;
        setOut(current.slice(0, i));
        if (i <= 0) {
          setIdx((n) => (n + 1) % list.length);
          return;
        }
        timer = setTimeout(tick, deleteSpeed);
      }
    }, startDelay);

    return () => { clearTimeout(kickoff); clearTimeout(timer); };
  }, [idx]); // eslint-disable-line react-hooks/exhaustive-deps

  return { out, done: done || list.length > 1 };
}

function StatTile({ end, suffix = '', label, start, delay = 0 }) {
  const value = useCountUp(end, { start, duration: 1400 + delay });
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000, ease: EASE }}
      className="surface px-4 py-4 text-center"
    >
      <div className="font-display text-[2rem] leading-none text-ink-900 tabular-nums">
        {value}
        <span className="text-teal-600">{suffix}</span>
      </div>
      <div className="mt-1.5 text-[11px] uppercase tracking-wider text-ink-500 font-medium">
        {label}
      </div>
    </motion.div>
  );
}

function ContactPill({ href, label, external, children }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="pill hover:pill-teal group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-ink-400 group-hover:bg-teal-600 transition-colors" />
      <span>{label}</span>
      {children}
    </a>
  );
}

/**
 * Portrait — circular photo with a sun-like yellow halo, dashed orbit,
 * and mouse-tilt interactivity. Falls back to a monogram if /portrait.jpg
 * is missing.
 */
function Portrait() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const hasPhoto = loaded && !errored;
  const wrapRef = useRef(null);

  // Mouse-tracked tilt, softened with a spring so it feels physical.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 14 });
  const tx = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 });
  const ty = useSpring(useTransform(my, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 });

  function handleMove(e) {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full aspect-square max-w-[440px] mx-auto"
      style={{ perspective: 1000 }}
    >
      {/* Big yellow SUN halo — the "fun yellow light" — sits behind everything */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,235,53,0.55) 0%, rgba(253,224,71,0.35) 35%, transparent 72%)',
          filter: 'blur(6px)',
        }}
        animate={{ scale: [1, 1.07, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Sun rays — subtle yellow spokes */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-32px] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-55">
          {Array.from({ length: 18 }).map((_, i) => {
            const angle = (i / 18) * 360;
            const long = i % 2 === 0;
            return (
              <line
                key={i}
                x1="100" y1={long ? 6 : 12}
                x2="100" y2={long ? 22 : 20}
                stroke="#fde047"
                strokeWidth={long ? 2.4 : 1.4}
                strokeLinecap="round"
                transform={`rotate(${angle} 100 100)`}
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Dashed orbit */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-14px] rounded-full border border-dashed border-ink-900/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      />

      {/* Soft teal shadow echo */}
      <div
        aria-hidden="true"
        className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(13,148,136,0.28), transparent 70%)', filter: 'blur(2px)' }}
      />

      {/* Interactive tilting stage */}
      <motion.div
        style={{
          rotateX: rx,
          rotateY: ry,
          x: tx,
          y: ty,
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0"
      >
        {/* The photo ring */}
        <motion.div
          initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
          animate={{ clipPath: 'circle(55% at 50% 50%)', opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          className="absolute inset-3 rounded-full overflow-hidden bg-paper-200 shadow-[0_30px_80px_-20px_rgba(161,98,7,0.25),0_12px_32px_-12px_rgba(20,20,20,0.25)] ring-2 ring-yellow-300/70"
        >
          {/* Monogram fallback */}
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-teal-600 to-teal-800 text-white">
            <div className="text-center">
              <div className="font-display text-7xl tracking-tight">ND</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] mt-2 opacity-70">
                portrait coming soon
              </div>
            </div>
          </div>

          {/* Real photo */}
          <img
            src="/portrait.jpg"
            alt="Nirmit Dagli"
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            draggable={false}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hasPhoto ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Warm light overlay that follows the mouse */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: useTransform(
                [mx, my],
                ([x, y]) =>
                  `radial-gradient(closest-side at ${50 + x * 80}% ${50 + y * 80}%, rgba(255,235,53,0.28), transparent 55%)`
              ),
              mixBlendMode: 'screen',
            }}
          />
        </motion.div>

        {/* Tilted caption chip — floats in 3D */}
        <motion.div
          style={{ transform: 'translateZ(40px)' }}
          className="absolute -bottom-3 -left-2 rotate-[-6deg]"
        >
          <span className="pill pill-amber font-mono text-[10px] shadow-soft">
            Based in CT · from Mumbai
          </span>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default function Hero() {
  // Pass the full role reel \u2014 the hook cycles through each phrase, types, holds, deletes.
  const { out: typed, done: typedDone } = useTypewriter(SUBTITLES);
  const [statsRef, statsInView] = useInView({ threshold: 0.35 });

  return (
    <section id="about" className="relative pt-28 md:pt-36 pb-20 md:pb-24">
      {/* Sunny parallax glows — yellow top-right, teal bottom-left */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute -top-10 right-[-12%] w-[640px] h-[640px] rounded-full"
        style={{
          background: 'radial-gradient(closest-side, rgba(255,235,53,0.28), rgba(253,224,71,0.12) 45%, transparent 72%)',
          filter: 'blur(6px)',
        }}
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute top-60 left-[-10%] w-[460px] h-[460px] rounded-full"
        style={{
          background: 'radial-gradient(closest-side, rgba(13,148,136,0.10), transparent 70%)',
          filter: 'blur(4px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Two-column split on desktop: copy + portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
          {/* LEFT — the copy */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 pill pill-teal"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
              </span>
              Cloud \u00b7 DevOps \u00b7 Security \u00b7 Network \u00b7 AI \u00b7 Quantum
              <span className="text-ink-400">\u2014</span>
              <span className="font-semibold">one engineer, full stack of the stack</span>
            </motion.div>

            {/* Name — extreme scale, tight leading (editorial nod to findworkhappiness) */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="font-display mt-6 text-ink-900"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 5.75rem)',
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
              }}
            >
              Nirmit
              <br />
              <span className="relative inline-block">
                Dagli
                {/* Highlighter stroke 1 — fat yellow */}
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
                  className="absolute left-[-0.06em] right-[-0.06em] bottom-[0.10em] h-[0.36em] -z-0"
                  style={{
                    background: '#ffeb35',
                    mixBlendMode: 'multiply',
                    opacity: 0.85,
                    borderRadius: '2px',
                  }}
                />
                {/* Highlighter stroke 2 — slightly offset amber for depth */}
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
                  className="absolute left-[-0.04em] right-[0.02em] bottom-[0.05em] h-[0.14em] -z-0"
                  style={{
                    background: '#fbbf24',
                    mixBlendMode: 'multiply',
                    opacity: 0.4,
                    borderRadius: '2px',
                  }}
                />
                <span className="relative">&nbsp;</span>
              </span>
            </motion.h1>

            {/* Subtitle — condensed-feel via tighter tracking, small caps rhythm */}
            <div className="mt-5 min-h-[2.4rem]">
              <h2
                className="font-sans inline-flex items-baseline flex-wrap text-ink-800"
                style={{
                  fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                }}
              >
                <span className="font-mono text-teal-700 text-[0.7em] uppercase tracking-[0.2em] mr-3">
                  Eng.
                </span>
                {typed}
                {/* Cursor blinks forever when reel is cycling; steady-on during the delay. */}
                <span className="w-[2px] h-[1.1em] bg-teal-600 ml-1 inline-block animate-blink" />
              </h2>
            </div>

            {/* Bio \u2014 told as a story: infra spine \u2192 AI brain \u2192 quantum edge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="mt-6 max-w-xl text-[1rem] md:text-[1.05rem] leading-relaxed text-ink-700"
            >
              I build the <span className="font-semibold text-ink-900">spine</span> most apps sit on \u2014
              multi-cloud Kubernetes, Terraform, zero-trust networks, CI/CD with OIDC,
              and the security posture that lets you sleep at 2 AM.
              Then I bolt on the <span className="font-semibold text-ink-900">brain</span>:
              LLM agents, RAG pipelines, threat-modeling copilots.
              Then, because the academic in me won\u2019t let it go, a little
              <span className="font-semibold text-ink-900"> quantum on the edge</span> \u2014
              Grover\u2019s Algorithm as an honest-to-goodness retrieval layer.
              MS CS @ Quinnipiac (3.9 GPA) \u00b7
              <span className="text-ink-900 font-semibold"> CKA \u00b7 AWS SAA \u00b7 IEEE-published \u00d73.</span>
            </motion.p>

            {/* Contact pills */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 1.35 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              <ContactPill href="mailto:ndagli@quinnipiac.edu" label="ndagli@quinnipiac.edu" />
              <ContactPill href="tel:+14753174538" label="475.317.4538" />
              <ContactPill href="https://github.com/Nirmitdagli" external label="GitHub">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="opacity-60">
                  <path d="M2 9 L9 2 M4 2 H9 V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </ContactPill>
              <ContactPill href="https://linkedin.com/in/nirmitdagli" external label="LinkedIn">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="opacity-60">
                  <path d="M2 9 L9 2 M4 2 H9 V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </ContactPill>
            </motion.div>
          </div>

          {/* RIGHT — the portrait */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            <Portrait />
          </motion.div>
        </div>

        {/* Quiet eyebrow linking to Beyond section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.55 }}
          className="mt-12 flex flex-wrap items-center gap-x-3 text-[12px] font-mono text-ink-500"
        >
          <span className="text-teal-600">◆</span>
          <span>Cloud-native by day · LLM-wrangler by evening · Grover's oracle by midnight —</span>
          <a href="#beyond" className="text-teal-700 hover:text-teal-800 underline underline-offset-4 decoration-teal-600/40 hover:decoration-teal-600">
            and a teacher, poet & midfielder underneath it all ↓
          </a>
        </motion.div>

        {/* Stats row */}
        <div ref={statsRef} className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
          <StatTile end={3}   suffix=".5+"  label="Years Experience"   start={statsInView} delay={0} />
          <StatTile end={50}  suffix="+"    label="K8s Clusters"       start={statsInView} delay={100} />
          <StatTile end={200} suffix="+"    label="Servers @ 99.9%"    start={statsInView} delay={200} />
          <StatTile end={3}   suffix=""     label="Publications"       start={statsInView} delay={300} />
          <StatTile end={5}   suffix=""     label="Certifications"     start={statsInView} delay={400} />
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
