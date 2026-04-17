import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 → `end` when `start` flips true.
 * Uses requestAnimationFrame with an ease-out curve — feels natural, not robotic.
 */
export function useCountUp(end, { duration = 1500, start = false, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    let raf = 0;

    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const v = ease(p) * end;
      setValue(decimals > 0 ? Number(v.toFixed(decimals)) : Math.round(v));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration, decimals]);

  return value;
}
