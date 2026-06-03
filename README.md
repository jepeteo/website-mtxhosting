# MTX Hosting

Marketing and sales site for **MTX Hosting** — the managed hosting arm of [MTX Studio](https://mtxstudio.co.uk).

A static marketing site (no backend) that presents hosting plans, service detail pages, and a contact path. Hosting is resold/managed on top of existing infrastructure (SiteGround, Vercel, etc.), so this site is presentation + lead capture only.

---

## Stack

| Layer        | Choice                          |
|--------------|---------------------------------|
| Framework    | Next.js 15 (App Router)         |
| Language     | TypeScript                      |
| Styling      | Tailwind CSS                    |
| Fonts        | Syne (display), DM Mono (mono)  |
| Forms        | Resend via `/api/contact`       |
| Analytics    | Vercel Analytics                |
| Deploy       | Vercel                          |

---

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Build:

```bash
pnpm build
pnpm start
```

---

## Environment variables

Copy `.env.example` to `.env.local`:

```
RESEND_API_KEY=re_xxxxxxx
RESEND_FROM_EMAIL=MTX Hosting <hosting@ops.mtxstudio.com>
CONTACT_TO_EMAIL=hosting@ops.mtxstudio.com
NEXT_PUBLIC_SITE_URL=https://mtxhosting.com
```

Use the same Resend API key and verified `ops.mtxstudio.com` domain as other MTX Studio apps.

---

## Project docs

| File                | Purpose                                       |
|---------------------|-----------------------------------------------|
| `docs/PRD.md`       | What we're building, pages, scope, roadmap    |
| `docs/SKILLS.md`    | Conventions, patterns, component rules        |
| `BRIEF.md`          | Brand, colors, fonts, design reference        |
| `.cursor/rules/`    | Context rules Cursor applies automatically    |
| `.cursor/agents/`   | Specialized agent definitions                 |

---

## Deploy

Push to `main` → Vercel auto-deploys. Production domain: `mtxhosting.com`.

---

© 2026 MTX Hosting — a MTX Studio product. Built in Berlin, hosted in the EU.
