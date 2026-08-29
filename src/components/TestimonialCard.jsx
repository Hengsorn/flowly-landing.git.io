import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function TestimonialCard({ testimonial }) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.figure
      variants={fadeUp(reduced)}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="surface-card flex h-full flex-col p-6 transition-shadow hover:shadow-card-hover"
    >
      <div className="mb-3 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < testimonial.rating ? "fill-warning-500 text-warning-500" : "text-border-strong"}
          />
        ))}
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-ink-700 dark:text-ink-dark-500">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-violet-500 text-xs font-semibold text-white">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900 dark:text-ink-dark-900">{testimonial.name}</p>
          <p className="text-xs text-ink-500 dark:text-ink-dark-500">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
