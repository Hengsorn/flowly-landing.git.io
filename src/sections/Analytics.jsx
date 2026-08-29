import { motion } from "framer-motion";
import { DollarSign, Users, FolderKanban, Target, TrendingUp } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const METRICS = [
  { icon: DollarSign, label: "Revenue", value: "$128,430", change: "+18.4%" },
  { icon: Users, label: "Active Users", value: "24,892", change: "+12.8%" },
  { icon: FolderKanban, label: "Projects", value: "1,284", change: "+24.5%" },
  { icon: Target, label: "Conversion", value: "4.82%", change: "+2.1%" },
];

const CHART_POINTS = [30, 45, 38, 55, 48, 62, 58, 72, 65, 80, 76, 92];

export default function Analytics() {
  const reduced = usePrefersReducedMotion();

  // Build a smooth SVG path from the mock points for a lightweight,
  // dependency-free line chart (no charting library needed here).
  const width = 600;
  const height = 180;
  const max = Math.max(...CHART_POINTS);
  const stepX = width / (CHART_POINTS.length - 1);
  const points = CHART_POINTS.map((p, i) => [i * stepX, height - (p / max) * (height - 20) - 10]);
  const linePath = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <section id="analytics-preview" className="section-padding bg-canvas-soft dark:bg-canvas-dark-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Analytics"
          title="See what's happening at a glance."
          description="Every metric that matters, updated in real time — no spreadsheets, no waiting."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(reduced, 0.08)}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5"
        >
          <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-1">
            {METRICS.map((m) => (
              <motion.div key={m.label} variants={fadeUp(reduced)} className="surface-card p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-300">
                  <m.icon size={16} />
                </div>
                <p className="mt-3 text-xs text-ink-500 dark:text-ink-dark-500">{m.label}</p>
                <p className="mt-0.5 text-xl font-bold text-ink-900 dark:text-ink-dark-900">{m.value}</p>
                <p className="mt-1 flex items-center gap-1 text-xs font-medium text-positive-600 dark:text-positive-500">
                  <TrendingUp size={12} />
                  {m.change}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp(reduced, 0.1)} className="surface-card p-6 lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-ink-900 dark:text-ink-dark-900">Revenue trend</p>
                <p className="text-xs text-ink-500 dark:text-ink-dark-500">Last 12 months</p>
              </div>
              <span className="rounded-full bg-positive-50 px-2.5 py-1 text-xs font-medium text-positive-600 dark:bg-positive-500/10 dark:text-positive-500">
                +18.4%
              </span>
            </div>
            <svg viewBox={`0 0 ${width} ${height}`} className="h-48 w-full" preserveAspectRatio="none" role="img" aria-label="Revenue trend chart trending upward over 12 months">
              <defs>
                <linearGradient id="analyticsFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-accent-500)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="var(--color-accent-500)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={areaPath} fill="url(#analyticsFill)" />
              <path d={linePath} fill="none" stroke="var(--color-accent-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
