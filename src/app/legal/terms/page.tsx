import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "MTX Hosting terms of service — coming soon.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <div className="relative z-10 pb-24 pt-32">
      <Container className="max-w-2xl text-center">
        <SectionLabel>legal</SectionLabel>
        <SectionTitle className="mb-4">Terms of Service</SectionTitle>
        <p className="mb-8 text-muted">
          Our terms of service are being finalised. Check back soon, or contact us
          if you need anything clarified.
        </p>
        <Button href="/contact" variant="ghost">
          Contact us
        </Button>
        <p className="mt-8 font-mono text-xs text-muted">
          <Link href="/" className="text-accent hover:opacity-80">
            ← Back to home
          </Link>
        </p>
      </Container>
    </div>
  );
}
