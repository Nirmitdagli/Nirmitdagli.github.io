import { useEffect, useState } from 'react';

/**
 * Returns the id of whichever section is currently most-in-view.
 * Uses IntersectionObserver on the section elements, then picks the one with
 * the largest intersection ratio.
 */
export function useScrollSpy(sectionIds, { rootMargin = '-40% 0px -55% 0px' } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] || null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (els.length === 0) return;

    const ratios = new Map(sectionIds.map((id) => [id, 0]));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        });
        // Pick the one with the max ratio; if all zero, keep current.
        let bestId = null;
        let bestRatio = 0;
        ratios.forEach((r, id) => {
          if (r > bestRatio) { bestRatio = r; bestId = id; }
        });
        if (bestId) setActiveId(bestId);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds.join('|'), rootMargin]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
}
