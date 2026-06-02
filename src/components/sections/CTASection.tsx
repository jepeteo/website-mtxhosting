import { Button } from "@/components/ui/Button";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";

export interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Ready to host somewhere better?",
  description = "Tell us about your project. We'll match you to the right plan and handle migration for free.",
  primaryLabel = "Get in touch",
  primaryHref = "/contact",
  secondaryLabel = "Compare plans",
  secondaryHref = "/plans",
}: CTASectionProps) {
  return (
    <section className="relative z-10 px-6 pb-24 md:px-12">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card px-8 py-14 text-center md:px-16">
        <SectionLabel>get started</SectionLabel>
        <SectionTitle className="mb-4">{title}</SectionTitle>
        <p className="mx-auto mb-8 max-w-lg text-muted">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={primaryHref}>{primaryLabel}</Button>
          <Button href={secondaryHref} variant="ghost">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
