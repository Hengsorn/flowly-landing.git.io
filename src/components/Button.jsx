import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const VARIANTS = {
  primary:
    "bg-accent-600 text-white shadow-sm hover:bg-accent-700 border border-transparent",
  secondary:
    "bg-white text-ink-900 border border-border hover:border-border-strong hover:bg-canvas-soft dark:bg-surface-dark dark:text-ink-dark-900 dark:border-border-dark dark:hover:bg-surface-dark-raised",
  ghost:
    "bg-transparent text-ink-700 border border-transparent hover:bg-canvas-soft dark:text-ink-dark-500 dark:hover:bg-surface-dark-raised",
};

const SIZES = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-[15px] gap-2",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const MotionTag = motion[Tag] ?? motion.button;

  return (
    <MotionTag
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "group inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon size={16} className="shrink-0 transition-transform group-hover:-translate-x-0.5" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
      )}
    </MotionTag>
  );
}
