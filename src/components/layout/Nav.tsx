import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Plans", href: "/plans" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12"
        aria-label="Main navigation"
      >
        <Logo />
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button href="/contact" variant="nav" size="sm">
              Get Started
            </Button>
          </li>
        </ul>
        <Button href="/contact" variant="nav" size="sm" className="md:hidden">
          Get Started
        </Button>
      </nav>
    </header>
  );
}
