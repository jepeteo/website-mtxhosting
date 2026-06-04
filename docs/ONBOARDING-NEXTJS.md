# Next.js hosting onboarding — MTX Hosting

Internal runbook for managed Next.js. Public summary lives on `/managed-nextjs`.

## Choose model at kickoff

| Model | Who owns Vercel | Client Vercel login | Billing |
|-------|-----------------|---------------------|---------|
| **A — Fully managed** | MTX Studio team | Usually no | Client → MTX Hosting; MTX pays Vercel |
| **B — Client Vercel** | Client team | Yes (they invite MTX) | Client → Vercel + MTX management fee |

Default to **Model A** unless the client requires their own billing entity or existing Vercel Pro.

## Model A checklist

1. Confirm plan tier (projects, preview envs, support SLA).
2. Create Vercel project under **MTX team** (not personal account).
3. Connect GitHub/GitLab repo; set production branch.
4. Add staging + production env vars in Vercel (never in repo).
5. Configure preview deployments for PRs.
6. Add custom domain(s); document DNS records for client.
7. Enable uptime/error monitoring; note escalation contact.
8. Send handoff: production URL, preview pattern, support channel.

## Model B checklist

1. Client creates or confirms Vercel team.
2. Client invites MTX email as Member/Developer.
3. Same steps 3–8 as Model A inside **their** team.
4. Confirm management fee vs pass-through Vercel invoice.

## What we need from the client (both models)

- Repository access or export to import
- DNS (registrar or Cloudflare access)
- Secrets for staging and production
- No Vercel password — invites only for Model B

## Offboarding

- Export env var list (redact values in docs; store secrets securely).
- Offer Vercel project transfer to client team or repo + deployment guide.
- Confirm final invoice and DNS cutover date.

## EU expectations

- Document chosen Vercel region / features; “EU-friendly” must match actual config.
- If client rejects Vercel, scope EU Node/Docker alternative and adjust plan copy internally.
