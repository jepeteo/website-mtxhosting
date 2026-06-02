import type { ServicePage } from "@/lib/services";
import { Container } from "@/components/layout/Container";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";

export function ServiceFeatures({ service }: { service: ServicePage }) {
  return (
    <section className="relative z-10 pb-20">
      <Container>
        <SectionLabel>what you get</SectionLabel>
        <SectionTitle className="mb-12 max-w-xl">Everything handled.</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          {service.features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/20"
            >
              <h3 className="mb-3 font-heading text-xl font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
