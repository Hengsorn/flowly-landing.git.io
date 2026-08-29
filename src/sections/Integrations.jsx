import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import IntegrationCard from "../components/IntegrationCard";
import { integrations } from "../data/integrations";
import { staggerContainer, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Integrations() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="integrations" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Works with the tools you already use."
          description="Flowly connects to your existing stack, so there's nothing new for your team to learn."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(reduced, 0.06)}
          className="mt-12 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:overflow-visible lg:grid-cols-8"
        >
          {integrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
