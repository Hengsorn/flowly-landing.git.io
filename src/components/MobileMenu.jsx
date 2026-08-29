import { AnimatePresence, motion } from "framer-motion";
import { X, Zap } from "lucide-react";
import Button from "./Button";
import { navLinks } from "../data/navLinks";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../utils/cn";

export default function MobileMenu({ open, onClose, activeId, onNavigate }) {
  const reduced = usePrefersReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.01 : 0.2 }}
            className="fixed inset-0 z-50 bg-ink-900/40 backdrop-blur-[2px] dark:bg-black/60 md:hidden"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: reduced ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-white shadow-popover dark:bg-surface-dark md:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-border px-5 dark:border-border-dark">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white">
                  <Zap size={16} fill="currentColor" />
                </div>
                <span className="font-display text-lg font-bold text-ink-900 dark:text-ink-dark-900">
                  Flowly
                </span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 hover:bg-canvas-soft dark:text-ink-dark-500 dark:hover:bg-surface-dark-raised"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-5 py-6" aria-label="Mobile primary">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-left text-base font-medium transition-colors",
                    activeId === link.id
                      ? "bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"
                      : "text-ink-700 hover:bg-canvas-soft dark:text-ink-dark-500 dark:hover:bg-surface-dark-raised"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5 border-t border-border p-5 dark:border-border-dark">
              <Button variant="secondary" size="md" className="w-full">
                Log in
              </Button>
              <Button variant="primary" size="md" className="w-full" onClick={() => onNavigate("pricing")}>
                Get Started
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
