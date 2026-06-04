import { Container } from "@/components/layout/Container";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";
import type { HowItWorksModel } from "@/lib/nextjs-hosting";
import { nextJsWhatWeNeed } from "@/lib/nextjs-hosting";

export function ServiceHowItWorks({ models }: { models: HowItWorksModel[] }) {
  return (
    <section className="relative z-10 py-20">
      <Container>
        <SectionLabel>how it works</SectionLabel>
        <SectionTitle className="mb-4">How we work with your codebase.</SectionTitle>
        <p className="mb-12 max-w-2xl text-muted">
          Two setup options — same managed support. Pick what fits your team; we handle the rest
          after kickoff.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {models.map((model) => (
            <article
              key={model.id}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">{model.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{model.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {model.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="font-bold text-accent" aria-hidden>
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface/50 p-8">
          <h3 className="font-heading text-lg font-semibold text-ink">What we need from you</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {nextJsWhatWeNeed.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono text-accent" aria-hidden>
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
