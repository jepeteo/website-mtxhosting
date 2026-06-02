import Link from "next/link";
import { plans, planComparisonRows, type Plan } from "@/lib/plans";
import { cn } from "@/lib/utils";

export function PricingTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-surface">
            <th scope="col" className="p-4 font-mono text-xs uppercase tracking-wider text-muted">
              Feature
            </th>
            {plans.map((plan) => (
              <th
                key={plan.id}
                scope="col"
                className={cn(
                  "p-4 text-center",
                  plan.featured && "bg-accent/[0.04]",
                )}
              >
                <span className="block font-bold text-ink">{plan.name}</span>
                <span className="mt-1 block font-mono text-xs text-muted">
                  €{plan.priceAnnual}/mo
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planComparisonRows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-0">
              <th scope="row" className="p-4 font-medium text-muted">
                {row.label}
              </th>
              {plans.map((plan, planIndex) => {
                const value =
                  "key" in row
                    ? String(plan[row.key as keyof Pick<Plan, "sites" | "storage">])
                    : row.values[planIndex];
                return (
                  <td
                    key={plan.id}
                    className={cn(
                      "p-4 text-center text-ink",
                      plan.featured && "bg-accent/[0.04]",
                    )}
                  >
                    {value === "Included" ? (
                      <span className="font-bold text-accent" aria-label="Included">
                        ✓
                      </span>
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr>
            <td className="p-4" />
            {plans.map((plan) => (
              <td
                key={plan.id}
                className={cn("p-4 text-center", plan.featured && "bg-accent/[0.04]")}
              >
                <Link
                  href={plan.cta.href}
                  className="inline-block rounded-lg border border-border px-4 py-2 text-xs font-bold transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {plan.cta.label}
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
