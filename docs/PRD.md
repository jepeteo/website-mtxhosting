# Product Requirements — MTX Hosting

## 1. Overview

MTX Hosting is the managed hosting offering of MTX Studio. The site's job is to convert MTX Studio's existing and prospective clients into recurring hosting customers, and to give the studio a credible "where your site lives" product page.

**This is a marketing site, not a control panel.** No account dashboards, no provisioning, no billing logic in V1. Sign-ups route to a contact form or external checkout link. Provisioning is handled manually behind the scenes (reseller model).

## 2. Goals

- Present hosting plans clearly and build trust.
- Capture leads (contact form + plan CTAs).
- Reinforce the MTX Studio brand as parent.
- Differentiate on managed service + EU hosting + dev expertise, not on price.

## 3. Non-goals (V1)

- No user accounts or login.
- No automated provisioning.
- No payment processing on-site (link out or contact-to-onboard).
- No blog (can come in V2).

## 4. Audience

1. **Existing MTX Studio clients** — already have a built site, need it hosted/managed.
2. **Indie devs / small agencies** — want managed Next.js or WordPress without the ops overhead.
3. **Greek/EU SMBs** — value EU data residency and human support.

## 5. Pages

| Route                  | Purpose                                                        | Priority |
|------------------------|----------------------------------------------------------------|----------|
| `/`                    | Hero, stats, plans summary, features, CTA                      | P0       |
| `/plans`               | Full pricing comparison table, FAQ                             | P0       |
| `/managed-wordpress`   | Service detail: managed WP hosting + support                   | P1       |
| `/managed-nextjs`      | Service detail: managed Next.js / Vercel deployments           | P1       |
| `/contact`             | Lead form (Resend), expectations on response time              | P0       |
| `/legal/privacy`       | Privacy policy                                                 | P2       |
| `/legal/terms`         | Terms of service                                               | P2       |

## 6. Plans

| Plan    | Price       | Sites      | Storage     | Key features                                          |
|---------|-------------|------------|-------------|-------------------------------------------------------|
| Starter | €9/mo*      | 1          | 10 GB SSD   | Free SSL, daily backups, email support                |
| Pro     | €24/mo*     | 5          | 50 GB NVMe  | CDN, hourly backups, staging, priority support        |
| Agency  | €79/mo*     | Unlimited  | 200 GB NVMe | WAF, real-time backups, account manager, white-label  |

*Billed annually. Show monthly equivalent. Annual/monthly toggle on `/plans`.

All plans: free SSL, EU data centers, 99.9% uptime SLA, malware scanning, free migration.

## 7. Core components

- `Hero` — headline, sub, dual CTA, animated badge.
- `StatsBar` — uptime / response / support / EU.
- `PricingCard` — name, price, cycle, feature list, CTA; `featured` variant.
- `PricingTable` — full comparison (on `/plans`).
- `FeatureGrid` — 4-up feature cards.
- `BillingToggle` — annual/monthly switch (client component).
- `ContactForm` — Resend via `/api/contact`, client component, validation.
- `Nav` / `Footer` — shared, sticky nav, MTX Studio attribution in footer.
- `CTASection` — reusable bottom-of-page conversion block.

## 8. Conversion flow

Plan CTA → `/contact?plan=pro` (prefill plan) → form submit → Resend email to ops → manual onboarding follow-up.

## 9. SEO

- Per-page metadata via Next.js `generateMetadata`.
- OG image per page.
- `sitemap.ts` + `robots.ts`.
- JSON-LD: `Organization` + `Product`/`Offer` on plan pages.
- Target terms: "managed WordPress hosting EU", "managed Next.js hosting", "managed hosting UK", "EU web hosting with support".

## 10. Performance targets

- Lighthouse 95+ across the board.
- LCP < 1.5s, CLS < 0.05.
- Fonts via `next/font`, no layout shift.
- Static export where possible; minimal client JS.

## 11. Roadmap (post-V1)

- V2: Blog/docs, live chat, customer testimonials, status page link.
- V3: Self-serve checkout (Stripe), basic client dashboard.
