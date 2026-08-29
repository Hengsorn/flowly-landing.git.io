import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { fadeUp } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function FeatureCard({ feature }) {
  const reduced = usePrefersReducedMotion();
  const Icon = Icons[feature.icon] ?? Icons.Sparkles;

  return (
    <motion.div
      variants={fadeUp(reduced)}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="group surface-card relative overflow-hidden p-6 transition-shadow duration-200 hover:shadow-card-hover"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent-500/5 transition-transform duration-300 group-hover:scale-125 dark:bg-accent-500/10" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-500/10 dark:text-accent-300">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="relative mt-4 text-base font-semibold text-ink-900 dark:text-ink-dark-900">
        {feature.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-dark-500">
        {feature.description}
      </p>
    </motion.div>
  );
}
