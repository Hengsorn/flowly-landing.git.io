import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import FAQItem from "../components/FAQItem";
import { faqs } from "../data/integrations";
import { fadeUp, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function FAQ() {
  const reduced = usePrefersReducedMotion();
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions." />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp(reduced)}
          className="mt-12 divide-y divide-border rounded-2xl border border-border bg-white px-6 dark:divide-border-dark dark:border-border-dark dark:bg-surface-dark"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              open={openId === faq.id}
              onToggle={() => setOpenId((current) => (current === faq.id ? null : faq.id))}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
