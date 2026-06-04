# Deploy & SEO checklist

Production canonical: **https://www.mtxhosting.com**

## Vercel domains

- [ ] Production primary: `www.mtxhosting.com`
- [ ] Redirect `mtxhosting.com` → `https://www.mtxhosting.com`
- [ ] Redirect `mtxhosting.co.uk` → `https://www.mtxhosting.com`
- [ ] Redirect `www.mtxhosting.co.uk` → `https://www.mtxhosting.com` (if added)

## Environment (Production + Preview)

```
NEXT_PUBLIC_SITE_URL=https://www.mtxhosting.com
NEXT_PUBLIC_MTX_STUDIO_URL=https://www.mtxstudio.com
```

Redeploy after changing env or domains.

## Post-deploy verification

- [ ] View source: canonical URLs use `https://www.mtxhosting.com`
- [ ] `https://www.mtxhosting.com/sitemap.xml` — all entries use `www`
- [ ] `curl -I https://mtxhosting.co.uk` — redirects to `www`
- [ ] `curl -I https://mtxhosting.com` — redirects to `www`
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) on `/` and `/plans`
- [ ] Contact form delivers to `hosting@mtxstudio.com`
- [ ] Google Search Console: add `https://www.mtxhosting.com`, submit sitemap

## MTX Studio (separate repo)

- [ ] Add nav/footer link: **MTX Hosting** → `https://www.mtxhosting.com`
