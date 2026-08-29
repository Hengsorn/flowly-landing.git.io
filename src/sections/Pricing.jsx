import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import PricingCard from "../components/PricingCard";
import { pricingPlans } from "../data/pricing";
import { staggerContainer, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../utils/cn";

export default function Pricing() {
  const reduced = usePrefersReducedMotion();
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="section-padding bg-canvas-soft dark:bg-canvas-dark-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you."
          description="Start for free. Upgrade when you're ready."
        />

        {/* Monthly / yearly toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={cn("text-sm font-medium", billing === "monthly" ? "text-ink-900 dark:text-ink-dark-900" : "text-ink-400")}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={billing === "yearly"}
            aria-label="Toggle yearly billing"
            onClick={() => setBilling((b) => (b === "monthly" ? "yearly" : "monthly"))}
            className="relative h-7 w-13 rounded-full bg-accent-600 transition-colors"
            style={{ width: "3.25rem" }}
          >
            <motion.span
              layout
              transition={{ duration: reduced ? 0.01 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm"
              style={{ left: billing === "yearly" ? "calc(100% - 1.5rem)" : "0.25rem" }}
            />
          </button>
          <span className={cn("text-sm font-medium", billing === "yearly" ? "text-ink-900 dark:text-ink-dark-900" : "text-ink-400")}>
            Yearly
          </span>
          <span className="rounded-full bg-positive-50 px-2.5 py-1 text-xs font-semibold text-positive-600 dark:bg-positive-500/10 dark:text-positive-500">
            Save 20%
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(reduced, 0.1)}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
