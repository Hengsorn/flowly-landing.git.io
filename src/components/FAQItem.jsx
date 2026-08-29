import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../utils/cn";

export default function FAQItem({ faq, open, onToggle }) {
  const reduced = usePrefersReducedMotion();
  const panelId = `faq-panel-${faq.id}`;
  const buttonId = `faq-button-${faq.id}`;

  return (
    <div className="border-b border-border last:border-0 dark:border-border-dark">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-[15px] font-medium text-ink-900 dark:text-ink-dark-900">
            {faq.question}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: reduced ? 0.01 : 0.2 }}
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
              open
                ? "bg-accent-600 text-white"
                : "bg-canvas-soft text-ink-500 dark:bg-surface-dark-raised dark:text-ink-dark-500"
            )}
          >
            <Plus size={15} />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-sm leading-relaxed text-ink-500 dark:text-ink-dark-500">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
