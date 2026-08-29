import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials, testimonialsDisclaimer } from "../data/testimonials";
import { staggerContainer, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Testimonials() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams who move fast."
          description="A few examples of the kind of impact teams see with Flowly."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(reduced, 0.1)}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>

        <p className="mt-8 text-center text-xs text-ink-400">{testimonialsDisclaimer}</p>
      </div>
    </section>
  );
}
