export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "For individuals getting started.",
    monthly: 0,
    yearly: 0,
    popular: false,
    cta: "Get Started",
    features: ["3 projects", "Basic analytics", "1 workspace", "Community support"],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams.",
    monthly: 19,
    yearly: 15, // effective per-month price when billed yearly (20% off)
    popular: true,
    cta: "Start Free Trial",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Workflow automation",
      "Team collaboration",
      "Priority support",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "For larger teams and orgs.",
    monthly: 49,
    yearly: 39,
    popular: false,
    cta: "Contact Sales",
    features: [
      "Everything in Pro",
      "Advanced permissions",
      "Enterprise analytics",
      "Custom workflows",
      "Priority support",
    ],
  },
];
