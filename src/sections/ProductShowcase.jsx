import { motion } from "framer-motion";
import {
  Plus,
  MoreHorizontal,
  Zap,
  ArrowRight,
  Filter,
  CheckSquare,
  DollarSign,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";
import { fadeUp, viewportOnce } from "../utils/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../utils/cn";

const KANBAN_COLUMNS = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      { title: "Design onboarding flow", tag: "Design", tagColor: "bg-violet-500" },
      { title: "Write release notes", tag: "Content", tagColor: "bg-warning-500" },
    ],
  },
  {
    id: "progress",
    title: "In Progress",
    cards: [
      { title: "API integration tests", tag: "Engineering", tagColor: "bg-accent-500" },
      { title: "Landing page copy", tag: "Marketing", tagColor: "bg-positive-500" },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [{ title: "User research interviews", tag: "Research", tagColor: "bg-ink-400" }],
  },
];

function KanbanMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-popover dark:border-border-dark dark:bg-surface-dark sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckSquare size={16} className="text-accent-600 dark:text-accent-400" />
          <span className="text-sm font-semibold text-ink-900 dark:text-ink-dark-900">Product Launch</span>
        </div>
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-ink-400" />
          <MoreHorizontal size={16} className="text-ink-400" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {KANBAN_COLUMNS.map((col) => (
          <div key={col.id} className="rounded-xl bg-canvas-soft p-2.5 dark:bg-surface-dark-raised">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[11px] font-semibold text-ink-500 dark:text-ink-dark-500">{col.title}</span>
              <span className="text-[10px] text-ink-400">{col.cards.length}</span>
            </div>
            <div className="flex flex-col gap-2">
              {col.cards.map((card) => (
                <div key={card.title} className="rounded-lg border border-border bg-white p-2.5 dark:border-border-dark dark:bg-surface-dark">
                  <span className={cn("mb-1.5 inline-block rounded px-1.5 py-0.5 text-[9px] font-medium text-white", card.tagColor)}>
                    {card.tag}
                  </span>
                  <p className="text-[11px] font-medium leading-snug text-ink-700 dark:text-ink-dark-500">
                    {card.title}
                  </p>
                </div>
              ))}
              <button className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-[11px] text-ink-400 hover:bg-white dark:hover:bg-surface-dark">
                <Plus size={12} /> Add card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationMockup() {
  const steps = [
    { icon: Zap, label: "Trigger", detail: "New form submitted", color: "bg-accent-500" },
    { icon: Filter, label: "Condition", detail: "Priority is High", color: "bg-warning-500" },
    { icon: CheckSquare, label: "Action", detail: "Assign to team lead", color: "bg-positive-500" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-popover dark:border-border-dark dark:bg-surface-dark sm:p-8">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-1 items-center gap-3">
            <div className="flex flex-1 flex-col gap-2 rounded-xl border border-border p-4 dark:border-border-dark">
              <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg text-white", step.color)}>
                <step.icon size={16} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{step.label}</p>
                <p className="mt-0.5 text-sm font-medium text-ink-900 dark:text-ink-dark-900">{step.detail}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight size={18} className="hidden shrink-0 text-ink-300 sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const bars = [40, 65, 50, 78, 60, 88, 72, 95];
  const cards = [
    { icon: DollarSign, label: "Revenue", value: "$128.4k" },
    { icon: Users, label: "Users", value: "24.9k" },
    { icon: Target, label: "Conversion", value: "4.82%" },
    { icon: TrendingUp, label: "Growth", value: "+24.5%" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-popover dark:border-border-dark dark:bg-surface-dark sm:p-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-lg border border-border p-3 dark:border-border-dark">
            <c.icon size={14} className="text-accent-500" />
            <p className="mt-2 text-[11px] text-ink-400">{c.label}</p>
            <p className="text-sm font-bold text-ink-900 dark:text-ink-dark-900">{c.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-28 items-end gap-2 rounded-lg border border-border p-3 dark:border-border-dark">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-600 to-violet-400" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

const SHOWCASE_ITEMS = [
  {
    id: "projects",
    eyebrow: "Project Management",
    title: "Manage projects without the chaos.",
    description:
      "Break work into clear stages, track progress at a glance, and keep every teammate looking at the same source of truth.",
    bullets: ["Drag-and-drop kanban boards", "Custom workflows per team", "Real-time progress tracking"],
    Mockup: KanbanMockup,
  },
  {
    id: "automation",
    eyebrow: "Workflow Automation",
    title: "Automate repetitive work.",
    description:
      "Set a trigger, define a condition, and let Flowly handle the action — so your team can focus on what actually matters.",
    bullets: ["No-code automation builder", "Hundreds of pre-built templates", "Runs reliably in the background"],
    Mockup: AutomationMockup,
  },
  {
    id: "analytics-showcase",
    eyebrow: "Advanced Analytics",
    title: "Understand your business.",
    description:
      "See revenue, users, conversion, and growth in dashboards that update in real time — no spreadsheets required.",
    bullets: ["Live, shareable dashboards", "Custom reports in seconds", "Export to CSV or PDF"],
    Mockup: AnalyticsMockup,
  },
];

export default function ProductShowcase() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="showcase" className="section-padding">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 sm:px-6 lg:px-8">
        {SHOWCASE_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
              index % 2 === 1 && "lg:[&>*:first-child]:order-2"
            )}
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp(reduced)}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                {item.eyebrow}
              </span>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-ink-900 dark:text-ink-dark-900 sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base text-ink-500 dark:text-ink-dark-500">{item.description}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-ink-700 dark:text-ink-dark-500">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp(reduced, 0.1)}
            >
              <item.Mockup />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
