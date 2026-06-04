import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { mtxStudioUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <Container className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-muted">
          © 2026 MTX Hosting — a{" "}
          <Link
            href={mtxStudioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            MTX Studio
          </Link>{" "}
          product
        </p>
        <p className="font-mono text-xs text-muted">
          Hosted in the EU ·{" "}
          <Link
            href="/legal/privacy"
            className="text-accent transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Privacy
          </Link>{" "}
          ·{" "}
          <Link
            href="/legal/terms"
            className="text-accent transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Terms
          </Link>
        </p>
      </Container>
    </footer>
  );
}
