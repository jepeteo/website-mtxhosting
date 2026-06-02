export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServicePage {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subhead: string;
  intro: string;
  features: ServiceFeature[];
  highlights: string[];
  cta: { label: string; href: string };
}

export const managedWordPress: ServicePage = {
  slug: "managed-wordpress",
  title: "Managed WordPress Hosting",
  metaDescription:
    "Managed WordPress hosting in the EU. Updates, security, backups, and expert support — we handle the ops so you can ship.",
  eyebrow: "managed wordpress",
  headline: "WordPress,",
  headlineAccent: "fully managed.",
  subhead:
    "Updates, security, and performance handled by people who build WordPress sites for a living.",
  intro:
    "Whether you run a client site or your own product, we keep WordPress patched, backed up, and fast — on EU infrastructure with human support when you need it.",
  features: [
    {
      title: "Core & plugin updates",
      description:
        "Tested updates on a schedule you approve. No surprise breakages on Friday afternoon.",
    },
    {
      title: "Hardened by default",
      description:
        "Malware scanning, WAF, and SSL included. Your install stays locked down without extra plugins.",
    },
    {
      title: "Staging included",
      description:
        "Push changes to staging first. Pro and Agency plans include one-click promote to production.",
    },
    {
      title: "Real backups",
      description:
        "Daily or hourly snapshots with restore in minutes. Sleep through deploy day.",
    },
  ],
  highlights: [
    "PHP 8.x tuned stacks",
    "WP-CLI & SSH on Pro+",
    "Free migration from any host",
    "EU data residency",
  ],
  cta: { label: "Talk about WordPress hosting", href: "/contact?plan=pro" },
};

export const managedNextJs: ServicePage = {
  slug: "managed-nextjs",
  title: "Managed Next.js Hosting",
  metaDescription:
    "Managed Next.js hosting and Vercel deployments. Git-based workflows, preview URLs, and EU-friendly infrastructure with expert support.",
  eyebrow: "managed next.js",
  headline: "Next.js,",
  headlineAccent: "deployed right.",
  subhead:
    "From Vercel to your own stack — we manage builds, previews, and production so you stay in flow.",
  intro:
    "Built for agencies and product teams shipping on the App Router. We handle hosting, env config, and monitoring while you keep shipping features.",
  features: [
    {
      title: "Git-native deploys",
      description:
        "Push to main, get production. Every PR gets a preview URL. No manual FTP ever again.",
    },
    {
      title: "Edge-ready performance",
      description:
        "CDN, image optimisation, and caching configured for Next.js — not generic shared hosting.",
    },
    {
      title: "Environment management",
      description:
        "Staging and production env vars managed securely. No secrets in the repo.",
    },
    {
      title: "Observability",
      description:
        "Uptime checks and error alerts. We catch issues before your clients do.",
    },
  ],
  highlights: [
    "Next.js 15 App Router",
    "Preview deployments",
    "Node & edge runtimes",
    "EU-friendly hosting",
  ],
  cta: { label: "Talk about Next.js hosting", href: "/contact?plan=pro" },
};

export const services = [managedWordPress, managedNextJs];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}
