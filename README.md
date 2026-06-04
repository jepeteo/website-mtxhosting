# MTX Hosting

Marketing and sales site for **MTX Hosting** — the managed hosting arm of [MTX Studio](https://www.mtxstudio.com).

A static marketing site (no backend) that presents hosting plans, service detail pages, and a contact path. Hosting is resold/managed on top of existing infrastructure (SiteGround, Vercel, etc.), so this site is presentation + lead capture only.

**Production:** [https://www.mtxhosting.com](https://www.mtxhosting.com)  
`mtxhosting.co.uk` and apex `mtxhosting.com` redirect to `www` (configured in Vercel).

---

## Stack

| Layer        | Choice                          |
|--------------|---------------------------------|
| Framework    | Next.js 15 (App Router)         |
| Language     | TypeScript                      |
| Styling      | Tailwind CSS                    |
| Fonts        | Syne (body + headings), DM Mono |
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
RESEND_FROM_EMAIL=MTX Hosting <hosting@mtxstudio.com>
CONTACT_TO_EMAIL=hosting@mtxstudio.com
NEXT_PUBLIC_SITE_URL=https://www.mtxhosting.com
NEXT_PUBLIC_MTX_STUDIO_URL=https://www.mtxstudio.com
```

Use the same Resend API key as other MTX Studio apps. Canonical URLs must have **no trailing slash**.

---

## SEO & deploy

See [docs/DEPLOY-SEO.md](docs/DEPLOY-SEO.md) for domain redirects, Search Console, and post-deploy checks.

**Cross-site:** Add a link on [www.mtxstudio.com](https://www.mtxstudio.com) to `https://www.mtxhosting.com` (nav or footer). This repo links back to Studio in the footer.

---

## Project docs

| File                | Purpose                                       |
|---------------------|-----------------------------------------------|
| `docs/PRD.md`       | What we're building, pages, scope, roadmap    |
| `docs/SKILLS.md`    | Conventions, patterns, component rules        |
| `docs/DEPLOY-SEO.md`| Vercel domains, env, verification checklist   |
| `BRIEF.md`          | Brand, colors, fonts, design reference        |
| `.cursor/rules/`    | Context rules Cursor applies automatically    |
| `.cursor/agents/`   | Specialized agent definitions                 |

---

## Deploy

Push to `main` → Vercel auto-deploys. Primary domain: **www.mtxhosting.com**.

---

© 2026 MTX Hosting — a MTX Studio product. Hosted in the EU.
