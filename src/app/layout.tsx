import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata, defaultTitle, defaultDescription } from "@/lib/metadata";
import "@/styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
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
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 z-0 bg-grid" aria-hidden />
        <div
          className="pointer-events-none fixed -top-[30%] left-1/2 z-0 h-[600px] w-[900px] -translate-x-1/2 bg-glow"
          aria-hidden
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
