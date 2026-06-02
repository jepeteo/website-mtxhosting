import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "MTX Hosting privacy policy — coming soon.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="relative z-10 px-6 pb-24 pt-32 md:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel>legal</SectionLabel>
        <SectionTitle className="mb-4">Privacy Policy</SectionTitle>
        <p className="mb-8 text-muted">
          Our privacy policy is being finalised. Check back soon, or contact us if
          you have questions in the meantime.
        </p>
        <Button href="/contact" variant="ghost">
          Contact us
        </Button>
        <p className="mt-8 font-mono text-xs text-muted">
          <Link href="/" className="text-accent hover:opacity-80">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
