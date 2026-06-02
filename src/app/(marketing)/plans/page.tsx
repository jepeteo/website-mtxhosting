import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { planFaqs } from "@/lib/plans";
import { BillingToggle } from "@/components/pricing/BillingToggle";
import { PricingTable } from "@/components/pricing/PricingTable";
import { Container } from "@/components/layout/Container";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";

export const metadata: Metadata = buildMetadata({
  title: "Hosting Plans",
  description:
    "Compare MTX Hosting plans — Starter, Pro, and Agency. EU data centers, managed support, free migration. Billed annually.",
  path: "/plans",
});

export default function PlansPage() {
  return (
    <div className="relative z-10 pb-24 pt-32">
      <Container>
        <SectionLabel>pricing</SectionLabel>
        <SectionTitle className="mb-4">Compare plans.</SectionTitle>
        <p className="mb-10 max-w-xl text-muted">
          Every plan includes free SSL, EU hosting, malware scanning, and free migration.
          Pick what fits — upgrade anytime.
        </p>

        <BillingToggle />
        <PricingTable />

        <section className="mt-20" aria-labelledby="faq-heading">
          <SectionLabel>faq</SectionLabel>
          <h2 id="faq-heading" className="mb-8 font-heading text-3xl font-semibold tracking-tight">
            Common questions
          </h2>
          <dl className="divide-y divide-border rounded-2xl border border-border">
            {planFaqs.map((faq) => (
              <div key={faq.question} className="p-6">
                <dt className="font-bold text-ink">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Container>
    </div>
  );
}
