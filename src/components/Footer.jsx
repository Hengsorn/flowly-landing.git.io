import { Code2, Hash, Briefcase, MessageCircle, Zap } from "lucide-react";

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Solutions",
    links: ["Startups", "Agencies", "Enterprise", "Remote Teams"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Blog", "Help Center", "Community"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Privacy"],
  },
];

// Icon-based placeholders — lucide-react no longer ships literal brand
// marks, so these are generic stand-ins labeled by platform name.
const SOCIALS = [
  { icon: Code2, label: "GitHub" },
  { icon: Hash, label: "Twitter / X" },
  { icon: Briefcase, label: "LinkedIn" },
  { icon: MessageCircle, label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white dark:border-border-dark dark:bg-canvas-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <a href="#top" className="flex items-center gap-2" aria-label="Flowly home">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white">
                <Zap size={16} fill="currentColor" />
              </div>
              <span className="font-display text-lg font-bold text-ink-900 dark:text-ink-dark-900">
                Flowly
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-500 dark:text-ink-dark-500">
              The modern productivity and collaboration platform for teams that move fast.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink-900 dark:text-ink-dark-900">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    {/* TODO: wire up real routes once pages exist */}
                    <a href="#" className="text-sm text-ink-500 transition-colors hover:text-accent-600 dark:text-ink-dark-500 dark:hover:text-accent-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 dark:border-border-dark sm:flex-row">
          <p className="text-xs text-ink-400">© 2026 Flowly. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-canvas-soft hover:text-ink-900 dark:text-ink-dark-500 dark:hover:bg-surface-dark-raised dark:hover:text-ink-dark-900"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
