import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "../components/Button";
import { fadeUp, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function CTA() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-700 via-accent-600 to-violet-600"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp(reduced)}
        className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to work smarter?</h2>
        <p className="mt-4 text-base text-accent-100 sm:text-lg">
          Join teams using Flowly to simplify their work and move faster.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            className="border-transparent bg-white text-accent-700 hover:bg-accent-50"
          >
            Start Free
          </Button>
          <Button
            variant="ghost"
            size="lg"
            icon={PhoneCall}
            iconPosition="left"
            className="border border-white/30 text-white hover:bg-white/10"
          >
            Talk to Sales
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
