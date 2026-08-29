import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./Button";
import { fadeUp } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../utils/cn";

export default function PricingCard({ plan, billing }) {
  const reduced = usePrefersReducedMotion();
  const price = billing === "yearly" ? plan.yearly : plan.monthly;

  return (
    <motion.div
      variants={fadeUp(reduced)}
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-7",
        plan.popular
          ? "border-accent-500 bg-white shadow-card-hover ring-1 ring-accent-500/30 dark:bg-surface-dark"
          : "border-border bg-white dark:border-border-dark dark:bg-surface-dark"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Most Popular
        </span>
      )}

      <h3 className="text-base font-semibold text-ink-900 dark:text-ink-dark-900">{plan.name}</h3>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-dark-500">{plan.description}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-ink-900 dark:text-ink-dark-900">
          ${price}
        </span>
        <span className="text-sm text-ink-500 dark:text-ink-dark-500">/month</span>
      </div>
      {billing === "yearly" && plan.monthly > 0 && (
        <p className="mt-1 text-xs font-medium text-positive-600 dark:text-positive-500">
          Billed annually · Save 20%
        </p>
      )}
      {billing === "monthly" && <p className="mt-1 text-xs text-transparent">placeholder</p>}

      <Button
        variant={plan.popular ? "primary" : "secondary"}
        size="md"
        className="mt-6 w-full"
      >
        {plan.cta}
      </Button>

      <ul className="mt-7 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-dark-500">
            <Check size={16} className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
