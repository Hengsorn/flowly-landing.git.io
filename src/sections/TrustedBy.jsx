import { motion } from "framer-motion";
import { fadeIn, staggerContainer, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { trustedCompanies } from "../data/integrations";

export default function TrustedBy() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeIn(reduced)}
          className="text-center text-xs font-medium uppercase tracking-wider text-ink-400"
        >
          Trusted by teams at
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(reduced, 0.08)}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14"
        >
          {trustedCompanies.map((name) => (
            <motion.span
              key={name}
              variants={fadeIn(reduced)}
              className="font-display text-xl font-bold text-ink-400 opacity-60 transition-opacity hover:opacity-100 dark:text-ink-dark-500"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
