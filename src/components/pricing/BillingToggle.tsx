"use client";

import { cn } from "@/lib/utils";

export function BillingToggle() {
  return (
    <div className="mb-10 flex flex-col items-center gap-3">
      <div
        className="inline-flex items-center rounded-full border border-border bg-surface p-1"
        role="group"
        aria-label="Billing cycle"
      >
        <button
          type="button"
          className={cn(
            "rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
            "bg-accent text-black",
          )}
          aria-pressed="true"
        >
          Annual
        </button>
        <button
          type="button"
          className="cursor-not-allowed rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider text-muted opacity-50"
          disabled
          aria-pressed="false"
          title="Monthly billing coming soon"
        >
          Monthly
        </button>
      </div>
      <p className="font-mono text-xs text-muted">
        Prices shown per month, billed annually
      </p>
    </div>
  );
}
