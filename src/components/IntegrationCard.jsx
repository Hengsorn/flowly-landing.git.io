import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { fadeUp } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function IntegrationCard({ integration }) {
  const reduced = usePrefersReducedMotion();
  const Icon = Icons[integration.icon] ?? Icons.Puzzle;

  return (
    <motion.div
      variants={fadeUp(reduced)}
      whileHover={reduced ? undefined : { y: -3, scale: 1.02 }}
      transition={{ duration: 0.15 }}
      className="flex shrink-0 flex-col items-center gap-2.5 rounded-xl border border-border bg-white px-6 py-5 transition-colors hover:border-accent-300 dark:border-border-dark dark:bg-surface-dark dark:hover:border-accent-500/50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-canvas-soft text-ink-700 dark:bg-surface-dark-raised dark:text-ink-dark-500">
        <Icon size={18} />
      </div>
      <span className="text-xs font-medium text-ink-700 dark:text-ink-dark-500">{integration.name}</span>
    </motion.div>
  );
}
