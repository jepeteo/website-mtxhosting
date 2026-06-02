import Link from "next/link";
import type { Plan } from "@/lib/plans";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export interface PricingCardProps {
  plan: Plan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const price = plan.priceAnnual;

  return (
    <Card featured={plan.featured} className="group flex flex-col">
      {plan.featured && (
        <Badge className="absolute right-5 top-5">Popular</Badge>
      )}
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">
        {plan.name}
      </p>
      <p className="text-5xl font-extrabold tracking-tight">
        <sup className="text-2xl">€</sup>
        {price}
      </p>
      <p className="mb-8 mt-1.5 font-mono text-xs text-muted">
        per month / billed annually
      </p>
      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-muted"
          >
            <span className="mt-0.5 shrink-0 font-bold text-accent" aria-hidden>
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={plan.cta.href}
        className={cn(
          "block w-full rounded-lg py-3 text-center text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          plan.featured
            ? "bg-gradient-accent text-black hover:opacity-85"
            : "border border-border text-ink hover:border-accent hover:text-accent",
        )}
      >
        {plan.cta.label}
      </Link>
    </Card>
  );
}
