import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import { features } from "../data/features";
import { staggerContainer, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Features() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="features" className="section-padding bg-canvas-soft dark:bg-canvas-dark-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything your team needs to move forward."
          description="One platform for planning, automating, and understanding your team's work."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(reduced, 0.1)}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
