import type { ServicePage } from "@/lib/services";
import { Container } from "@/components/layout/Container";

export function ServiceHighlights({ service }: { service: ServicePage }) {
  return (
    <section className="relative z-10 pb-24">
      <Container>
        <ul className="flex flex-wrap gap-3">
          {service.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-surface/50 px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
