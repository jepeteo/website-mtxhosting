import type { ServicePage } from "@/lib/services";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ServiceHero({ service }: { service: ServicePage }) {
  return (
    <section className="relative z-10 pb-16 pt-36">
      <Container>
        <SectionLabel>{service.eyebrow}</SectionLabel>
        <h1 className="max-w-3xl font-heading text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          {service.headline}
          <br />
          <span className="text-gradient">{service.headlineAccent}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{service.subhead}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{service.intro}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={service.cta.href}>{service.cta.label}</Button>
          <Button href="/plans" variant="ghost">
            See plans
          </Button>
        </div>
      </Container>
    </section>
  );
}
