// ---------------------------------------------------------------------------
// Shared animation variants. Every section imports these instead of
// hand-rolling its own transitions, so entrance timing/easing feels
// consistent site-wide. `reduced` collapses everything to an instant,
// no-motion fade for prefers-reduced-motion users.
// ---------------------------------------------------------------------------

export const EASE = [0.16, 1, 0.3, 1];

export function fadeUp(reduced, delay = 0) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.01 } },
    };
  }
  return {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE, delay },
    },
  };
}

export function fadeIn(reduced, delay = 0) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.01 } },
    };
  }
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: EASE, delay } },
  };
}

export function staggerContainer(reduced, stagger = 0.1, delayChildren = 0) {
  return {
    hidden: {},
    show: {
      transition: reduced
        ? { staggerChildren: 0 }
        : { staggerChildren: stagger, delayChildren },
    },
  };
}

export const viewportOnce = { once: true, amount: 0.2 };
