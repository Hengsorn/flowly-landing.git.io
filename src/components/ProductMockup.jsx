import {
  LayoutGrid,
  CheckCircle2,
  Users,
  BarChart3,
  Circle,
  TrendingUp,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "overview", icon: LayoutGrid, label: "Overview" },
  { id: "tasks", icon: CheckCircle2, label: "Tasks" },
  { id: "team", icon: Users, label: "Team" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
];

const PROJECTS = [
  { name: "Website Redesign", progress: 78, color: "bg-accent-500" },
  { name: "Mobile App v2", progress: 45, color: "bg-violet-500" },
  { name: "Q3 Marketing Plan", progress: 92, color: "bg-positive-500" },
];

const TEAM = [
  { initials: "AK", color: "bg-accent-500" },
  { initials: "JM", color: "bg-violet-500" },
  { initials: "RS", color: "bg-warning-500" },
  { initials: "TL", color: "bg-positive-500" },
];

const BARS = [38, 52, 44, 68, 58, 74, 62, 80];

/**
 * A fully hand-built dashboard mockup — no screenshots. Used in the hero
 * and reused (scaled) inside the "Manage projects without the chaos"
 * showcase section so the product feels consistent across the page.
 */
export default function ProductMockup({ compact = false }) {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-border bg-white shadow-popover dark:border-border-dark dark:bg-surface-dark"
      role="img"
      aria-label="Preview of the Flowly project dashboard showing active projects, team members, and analytics"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-canvas-soft px-4 py-3 dark:border-border-dark dark:bg-surface-dark-raised">
        <span className="h-2.5 w-2.5 rounded-full bg-negative-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-positive-500/70" />
        <span className="ml-3 text-xs font-medium text-ink-400">app.flowly.com</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-40 shrink-0 border-r border-border p-3 dark:border-border-dark sm:block">
          <div className="mb-4 flex items-center gap-2 px-1">
            <div className="h-6 w-6 rounded-md bg-accent-600" />
            <span className="text-sm font-bold text-ink-900 dark:text-ink-dark-900">Flowly</span>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <div
                key={item.id}
                className={
                  "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-medium " +
                  (i === 0
                    ? "bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"
                    : "text-ink-500 dark:text-ink-dark-500")
                }
              >
                <item.icon size={13} />
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className={compact ? "flex-1 p-4" : "flex-1 p-4 sm:p-5"}>
          {/* Top row: title + team */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-ink-900 dark:text-ink-dark-900">Product workspace</p>
              <p className="text-xs text-ink-400">3 active projects</p>
            </div>
            <div className="flex -space-x-2">
              {TEAM.map((member, i) => (
                <div
                  key={i}
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white ring-2 ring-white dark:ring-surface-dark ${member.color}`}
                >
                  {member.initials}
                </div>
              ))}
            </div>
          </div>

          {/* KPI row */}
          <div className="mb-4 grid grid-cols-3 gap-2.5">
            <div className="rounded-lg border border-border p-2.5 dark:border-border-dark">
              <p className="text-[10px] text-ink-400">Revenue</p>
              <p className="text-sm font-bold text-ink-900 dark:text-ink-dark-900">$128.4k</p>
            </div>
            <div className="rounded-lg border border-border p-2.5 dark:border-border-dark">
              <p className="text-[10px] text-ink-400">Uptime</p>
              <p className="text-sm font-bold text-ink-900 dark:text-ink-dark-900">98%</p>
            </div>
            <div className="rounded-lg border border-border p-2.5 dark:border-border-dark">
              <p className="text-[10px] text-ink-400">Growth</p>
              <p className="text-sm font-bold text-positive-600 dark:text-positive-500">+24.8%</p>
            </div>
          </div>

          {/* Project progress list */}
          <div className="mb-4 space-y-2.5">
            {PROJECTS.map((project) => (
              <div key={project.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium text-ink-700 dark:text-ink-dark-500">{project.name}</span>
                  <span className="text-ink-400">{project.progress}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-canvas-soft dark:bg-surface-dark-raised">
                  <div
                    className={`h-full rounded-full ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mini chart */}
          <div className="rounded-lg border border-border p-3 dark:border-border-dark">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-medium text-ink-700 dark:text-ink-dark-500">
                <TrendingUp size={12} className="text-positive-500" />
                Weekly activity
              </span>
              <Circle size={6} className="fill-positive-500 text-positive-500" />
            </div>
            <div className="flex h-14 items-end gap-1.5">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-accent-500/80 dark:bg-accent-500"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
