import { Container } from "@/components/layout/Container";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";

const features = [
  {
    icon: "⚡",
    title: "NVMe Speed",
    description:
      "Storage that's 10x faster than standard SSD. Your site loads before they blink.",
  },
  {
    icon: "🛡️",
    title: "Zero-trust Security",
    description:
      "WAF, DDoS protection, malware scanning. Your project stays safe by default.",
  },
  {
    icon: "🔁",
    title: "Auto Backups",
    description:
      "Daily or hourly snapshots. Restore any version in one click, no panic needed.",
  },
  {
    icon: "🧑‍💻",
    title: "Dev-Ready",
    description:
      "Staging environments, Git deploy, SSH access. We speak your language.",
  },
];

export function FeatureGrid() {
  return (
    <section className="relative z-10 pb-24">
      <Container>
        <SectionLabel>why mtx</SectionLabel>
        <SectionTitle className="mb-10">Built different.</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-accent/20"
            >
              <p className="mb-3.5 text-2xl" aria-hidden>
                {feature.icon}
              </p>
              <h3 className="mb-2 font-heading text-base font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
