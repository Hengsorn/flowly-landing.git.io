import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, Zap } from "lucide-react";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../data/navLinks";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/cn";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled || mobileOpen
            ? "border-b border-border bg-white/80 backdrop-blur-md dark:border-border-dark dark:bg-canvas-dark/80"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <a href="#top" className="flex items-center gap-2" aria-label="Flowly home">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 text-white">
              <Zap size={16} strokeWidth={2.5} fill="currentColor" />
            </div>
            <span className="font-display text-lg font-bold text-ink-900 dark:text-ink-dark-900">
              Flowly
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="relative px-3.5 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-ink-900 dark:text-ink-dark-500 dark:hover:text-ink-dark-900"
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-600"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-canvas-soft dark:text-ink-dark-500 dark:hover:bg-surface-dark-raised"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Log in
            </Button>
            <Button variant="primary" size="sm" className="hidden sm:inline-flex" onClick={() => scrollToSection("pricing")}>
              Get Started
            </Button>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-700 hover:bg-canvas-soft dark:text-ink-dark-500 dark:hover:bg-surface-dark-raised md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeId={activeId}
        onNavigate={(id) => {
          setMobileOpen(false);
          setTimeout(() => scrollToSection(id), 150);
        }}
      />
    </>
  );
}
