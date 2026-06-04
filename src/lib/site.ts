/** Normalize site URL: no trailing slash. */
function normalizeUrl(url: string): string {
  return url.replace(/\/$/, "");
}

export const siteUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mtxhosting.com",
);

export const mtxStudioUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_MTX_STUDIO_URL ?? "https://www.mtxstudio.com",
);
