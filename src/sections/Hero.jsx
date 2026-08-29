import { motion } from "framer-motion";
import { Sparkles, ArrowRight, PlayCircle, CheckCircle2, TrendingUp, Gauge } from "lucide-react";
import Button from "../components/Button";
import ProductMockup from "../components/ProductMockup";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { EASE } from "../utils/motion";

const floatCard = (reduced, delay) => ({
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: reduced ? 0.01 : 0.6, ease: EASE, delay },
  },
});

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent-200/40 blur-3xl dark:bg-accent-900/30 animate-blob" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-900/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.5, ease: EASE }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-ink-700 shadow-sm dark:border-border-dark dark:bg-surface-dark dark:text-ink-dark-500"
          >
            <Sparkles size={13} className="text-accent-500" />
            The smarter way to work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.6, ease: EASE, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-ink-dark-900 sm:text-5xl md:text-6xl"
          >
            Work <span className="text-gradient">smarter</span>.
            <br />
            Move faster.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.6, ease: EASE, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base text-ink-500 dark:text-ink-dark-500 sm:text-lg"
          >
            Flowly brings your projects, workflows, analytics, and team collaboration together in one simple platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.6, ease: EASE, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button variant="primary" size="lg" icon={ArrowRight}>
              Start Free
            </Button>
            <Button variant="secondary" size="lg" icon={PlayCircle} iconPosition="left">
              Watch Demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0.01 : 0.6, delay: 0.4 }}
            className="mt-4 text-xs text-ink-400"
          >
            No credit card required
          </motion.p>
        </div>

        {/* Hero visual: dashboard mockup + floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0.01 : 0.7, ease: EASE, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="relative">
            <ProductMockup />

            <motion.div
              variants={floatCard(reduced, 0.9)}
              initial="hidden"
              animate="show"
              className={
                "absolute -left-4 top-8 hidden items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-popover dark:border-border-dark dark:bg-surface-dark sm:-left-8 sm:flex " +
                (reduced ? "" : "sm:animate-float")
              }
            >
              <CheckCircle2 size={16} className="text-positive-500" />
              <span className="text-xs font-medium text-ink-900 dark:text-ink-dark-900">
                Project completed
              </span>
            </motion.div>

            <motion.div
              variants={floatCard(reduced, 1.1)}
              initial="hidden"
              animate="show"
              className={
                "absolute -right-4 top-1/3 hidden items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-popover dark:border-border-dark dark:bg-surface-dark sm:-right-8 sm:flex " +
                (reduced ? "" : "sm:animate-float-slow")
              }
            >
              <Gauge size={16} className="text-accent-500" />
              <span className="text-xs font-medium text-ink-900 dark:text-ink-dark-900">98% uptime</span>
            </motion.div>

            <motion.div
              variants={floatCard(reduced, 1.3)}
              initial="hidden"
              animate="show"
              className={
                "absolute -bottom-6 left-1/4 hidden items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-popover dark:border-border-dark dark:bg-surface-dark sm:flex " +
                (reduced ? "" : "sm:animate-float")
              }
            >
              <TrendingUp size={16} className="text-violet-500" />
              <span className="text-xs font-medium text-ink-900 dark:text-ink-dark-900">
                +24.8% growth
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
