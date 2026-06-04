"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
const navLinks = [
  { label: "Plans", href: "/plans" },
  { label: "WordPress", href: "/managed-wordpress" },
  { label: "Next.js", href: "/managed-nextjs" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-border text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className={cn(
            "block h-0.5 w-5 bg-current transition-transform",
            open && "translate-y-2 rotate-45",
          )}
        />
        <span className={cn("block h-0.5 w-5 bg-current transition-opacity", open && "opacity-0")} />
        <span
          className={cn(
            "block h-0.5 w-5 bg-current transition-transform",
            open && "-translate-y-2 -rotate-45",
          )}
        />
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-0 top-[73px] z-40 bg-bg/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-2 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-gradient-accent py-3.5 text-sm font-bold text-black hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
