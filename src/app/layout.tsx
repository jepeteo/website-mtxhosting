import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/json-ld";
import { buildMetadata, defaultTitle, defaultDescription } from "@/lib/metadata";
import "@/styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const syneDisplay = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${syneDisplay.variable} ${dmMono.variable} dark`}
    >
      <body className="relative min-h-screen overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-ink focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <div className="pointer-events-none fixed inset-0 z-0 bg-grid" aria-hidden />
        <div
          className="pointer-events-none fixed -top-[30%] left-1/2 z-0 h-[600px] w-[900px] -translate-x-1/2 bg-glow"
          aria-hidden
        />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
