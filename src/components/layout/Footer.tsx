import Link from "next/link";

const MTX_STUDIO_URL = "https://mtxstudio.co.uk";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12">
        <p className="font-mono text-xs text-muted">
          © 2026 MTX Hosting — a{" "}
          <Link
            href={MTX_STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            MTX Studio
          </Link>{" "}
          product
        </p>
        <p className="font-mono text-xs text-muted">
          Built in Berlin · Hosted in the EU ·{" "}
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
      </div>
    </footer>
  );
}
