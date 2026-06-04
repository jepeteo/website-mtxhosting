export interface Plan {
  id: "starter" | "pro" | "agency";
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  sites: string;
  storage: string;
  featured?: boolean;
  features: string[];
  cta: { label: string; href: string };
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 9,
    priceAnnual: 9,
    sites: "1",
    storage: "10 GB SSD",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Free SSL Certificate",
      "Daily Backups",
      "Email Support",
    ],
    cta: { label: "Get Started", href: "/contact?plan=starter" },
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 24,
    priceAnnual: 24,
    sites: "5",
    storage: "50 GB NVMe",
    featured: true,
    features: [
      "5 Websites",
      "50 GB NVMe Storage",
      "Free SSL + CDN",
      "Hourly Backups",
      "Priority Support",
      "Staging Environment",
    ],
    cta: { label: "Get Started", href: "/contact?plan=pro" },
  },
  {
    id: "agency",
    name: "Agency",
    priceMonthly: 79,
    priceAnnual: 79,
    sites: "Unlimited",
    storage: "200 GB NVMe",
    features: [
      "Unlimited Websites",
      "200 GB NVMe Storage",
      "Full CDN + WAF",
      "Real-time Backups",
      "Dedicated Account Manager",
      "White-label Option",
    ],
    cta: { label: "Talk to Us", href: "/contact?plan=agency" },
  },
];

export const planComparisonRows = [
  { label: "Websites", key: "sites" as const },
  { label: "Storage", key: "storage" as const },
  { label: "SSL", values: ["Free", "Free + CDN", "Free + CDN + WAF"] },
  { label: "Backups", values: ["Daily", "Hourly", "Real-time"] },
  { label: "Support", values: ["Email", "Priority", "Account Manager"] },
  { label: "Staging", values: ["—", "Included", "Included"] },
  { label: "Malware scanning", values: ["Included", "Included", "Included"] },
  { label: "Free migration", values: ["Included", "Included", "Included"] },
  { label: "EU data centers", values: ["Included", "Included", "Included"] },
  { label: "99.9% uptime SLA", values: ["Included", "Included", "Included"] },
];

export const planFaqs = [
  {
    question: "What does “billed annually” mean?",
    answer:
      "Prices shown are the monthly equivalent when you pay for a full year upfront. All plans are annual billing for now — simple and predictable.",
  },
  {
    question: "Can you migrate my existing site?",
    answer:
      "Yes. Free migration is included on every plan. We handle the move and verify everything works before you switch DNS.",
  },
  {
    question: "Where is my data hosted?",
    answer:
      "All plans run in EU data centers. Your data stays in the EU — no surprise US transfers.",
  },
  {
    question: "What’s included in managed hosting?",
    answer:
      "We handle updates, security patches, backups, SSL, and monitoring. You focus on your product; we keep the lights on.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. Move between Starter, Pro, and Agency as your needs grow. We’ll prorate and migrate resources with zero downtime where possible.",
  },
  {
    question: "How do I get started?",
    answer:
      "Pick a plan and send us a message via the contact form. We’ll reply within one business day to onboard you manually.",
  },
  {
    question: "WordPress vs Next.js — what’s different on the same plans?",
    answer:
      "Plans are managed service tiers, not one-size-fits-all disk quotas. WordPress sites typically use EU shared hosting with storage and staging as listed. Next.js apps use Git-based deploys (often on our Vercel team or yours) — we align project count, preview environments, and support to your tier instead of raw GB.",
  },
  {
    question: "Do I need my own Vercel account for Next.js?",
    answer:
      "Not necessarily. Most clients use fully managed hosting on the MTX Studio Vercel team with a single MTX invoice. If you need your own Vercel billing entity, we join your team as collaborators — same managed playbook, different ownership.",
  },
];

export function getPlanById(id: string): Plan | undefined {
  return plans.find((plan) => plan.id === id);
}
