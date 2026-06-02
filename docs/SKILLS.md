# Skills & Conventions — MTX Hosting

Reusable patterns and rules so every agent and contributor stays consistent. Cursor agents should read this before generating code.

## Folder structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # home
│   │   ├── plans/page.tsx
│   │   ├── managed-wordpress/page.tsx
│   │   ├── managed-nextjs/page.tsx
│   │   └── contact/page.tsx
│   ├── legal/
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/        # Nav, Footer
│   ├── sections/      # Hero, StatsBar, FeatureGrid, CTASection
│   ├── pricing/       # PricingCard, PricingTable, BillingToggle
│   ├── forms/         # ContactForm
│   └── ui/            # Button, Badge, Card primitives
├── lib/
│   ├── plans.ts       # single source of truth for pricing data
│   └── metadata.ts    # shared SEO helpers
└── styles/
    └── globals.css
```

## Naming

- Components: `PascalCase`, one component per file, named to match file.
- Files: component files `PascalCase.tsx`; everything else `kebab-case.ts`.
- Props interfaces: `ComponentNameProps`.
- No default exports for components (named exports), except Next.js `page.tsx`/`layout.tsx`.

## Server vs client components

- Default to **server components**.
- Add `"use client"` only when needed: `BillingToggle`, `ContactForm`, the custom cursor effect, anything with `useState`/`onClick`.
- Keep client components small and leaf-level.

## Styling

- Tailwind only. No CSS-in-JS, no inline style objects except dynamic positioning (e.g. cursor).
- Use design tokens via Tailwind config (see brand colors below), not raw hex in markup.
- Mobile-first: base styles for mobile, `md:`/`lg:` for larger.
- Spacing scale: stick to Tailwind defaults (4px base).
- Reusable variants via `cva` (class-variance-authority) for `Button`, `PricingCard`.

## Brand tokens (add to tailwind.config.ts)

```ts
colors: {
  bg:      '#080c10',
  surface: '#0d1318',
  accent:  '#00e5ff',
  accent2: '#0077ff',
  ink:     '#e8edf2',
  muted:   '#5a6a7a',
}
```

Fonts via `next/font`:
- `Syne` → `--font-display` (headings)
- `DM_Mono` → `--font-mono` (labels, code, prices cycle text)

## Data

- All pricing/plan data lives in `lib/plans.ts` as a typed array. Components read from it. **Never hardcode prices in JSX.**

```ts
export interface Plan {
  id: 'starter' | 'pro' | 'agency';
  name: string;
  priceMonthly: number;   // monthly billing
  priceAnnual: number;    // monthly equivalent when billed annually
  featured?: boolean;
  features: string[];
  cta: { label: string; href: string };
}
```

## Forms

- `ContactForm` posts to Formspree via `fetch`, no native `<form>` server action in V1.
- Validate on client: required name, valid email, message length.
- Show success/error states inline. No external toast lib needed.
- Never put user data in URL params.

## SEO helper pattern

Each page exports `generateMetadata` using a shared `buildMetadata({ title, description, path })` helper from `lib/metadata.ts`. Keep titles under 60 chars, descriptions under 155.

## Accessibility

- Semantic HTML: `nav`, `main`, `section`, `footer`, real `button`/`a`.
- All interactive elements keyboard-reachable, visible focus rings.
- Color contrast AA minimum (check accent on dark bg for text use; prefer accent for borders/large text, ink for body).
- `alt` on all images; `aria-label` on icon-only buttons.

## Performance

- Images via `next/image`.
- No heavy animation libs; CSS transitions + a tiny rAF loop for the cursor only.
- Lazy-load below-the-fold sections if they pull weight.

## Commits

Conventional commits: `feat:`, `fix:`, `chore:`, `style:`, `docs:`, `refactor:`.
