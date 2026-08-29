import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../utils/cn";

export default function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp(reduced)}
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-ink-900 dark:text-ink-dark-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ink-500 dark:text-ink-dark-500 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
