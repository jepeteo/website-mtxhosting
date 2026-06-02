import type { Metadata } from "next";
import { Suspense } from "react";
import { buildMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with MTX Hosting. Tell us about your project and we'll match you to the right plan. Reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="relative z-10 pb-24 pt-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionLabel>contact</SectionLabel>
          <SectionTitle className="mb-4">Let&apos;s talk hosting.</SectionTitle>
          <p className="mb-6 text-muted">
            No automated checkout — just a real conversation. Tell us what you&apos;re
            building and we&apos;ll handle onboarding manually.
          </p>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <span className="font-bold text-accent" aria-hidden>
                ✓
              </span>
              Reply within one business day
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-accent" aria-hidden>
                ✓
              </span>
              Free migration on every plan
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-accent" aria-hidden>
                ✓
              </span>
              EU data centers, human support
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <Suspense fallback={<p className="text-muted">Loading form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
