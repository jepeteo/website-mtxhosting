import { plans } from "@/lib/plans";
import { PricingCard } from "@/components/pricing/PricingCard";
import { Container } from "@/components/layout/Container";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function PricingSection() {
  return (
    <section className="relative z-10 py-24">
      <Container>
        <SectionLabel>pricing</SectionLabel>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle>Simple, honest pricing.</SectionTitle>
          <Button href="/plans" variant="ghost" size="sm" className="shrink-0 self-start md:self-auto">
            Full comparison →
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
