import { motion } from "framer-motion";
import { FolderPlus, UserPlus, Rocket } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const STEPS = [
  {
    number: "01",
    icon: FolderPlus,
    title: "Create your workspace",
    description: "Set up your team's workspace in under a minute — no setup calls required.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Invite your team",
    description: "Bring your teammates in, assign roles, and connect the tools you already use.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start getting things done",
    description: "Create projects, automate the busywork, and track progress from day one.",
  },
];

export default function HowItWorks() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-padding bg-canvas-soft dark:bg-canvas-dark-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How it works" title="Get started in minutes." />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(reduced, 0.15)}
          className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6"
        >
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-border dark:bg-border-dark sm:block"
            style={{ marginInline: "16.66%" }}
          />

          {STEPS.map((step) => (
            <motion.div key={step.number} variants={fadeUp(reduced)} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white shadow-card dark:border-border-dark dark:bg-surface-dark">
                <step.icon size={24} className="text-accent-600 dark:text-accent-400" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent-600 text-[10px] font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900 dark:text-ink-dark-900">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-ink-500 dark:text-ink-dark-500">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
