import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";
import { managedNextJs, managedWordPress } from "@/lib/services";

const offerings = [
  {
    service: managedWordPress,
    href: "/managed-wordpress",
    label: "Managed WordPress",
  },
  {
    service: managedNextJs,
    href: "/managed-nextjs",
    label: "Managed Next.js",
  },
];

export function ServiceOfferings() {
  return (
    <section className="relative z-10 py-24">
      <Container>
        <SectionLabel>services</SectionLabel>
        <SectionTitle className="mb-10">Pick your stack.</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map(({ service, href, label }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/30"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {service.eyebrow}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-ink group-hover:text-accent">
                {label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.subhead}</p>
              <span className="mt-6 inline-block text-sm font-bold text-accent">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
