import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

const defaultTitle = "MTX Hosting — Where Great Projects Live";
const defaultDescription =
  "Managed hosting for agencies, developers, and ambitious projects. Fast, secure, EU-hosted — backed by people who actually know code.";

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = title === defaultTitle ? title : `${title} | MTX Hosting`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "MTX Hosting",
      locale: "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export { defaultTitle, defaultDescription, siteUrl };
