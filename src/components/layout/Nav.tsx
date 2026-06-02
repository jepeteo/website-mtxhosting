import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Plans", href: "/plans" },
  { label: "WordPress", href: "/managed-wordpress" },
  { label: "Next.js", href: "/managed-nextjs" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl">
      <Container>
        <nav
          className="flex items-center justify-between py-5"
          aria-label="Main navigation"
        >
          <Logo />
          <div className="flex items-center gap-3 md:gap-6">
            <ul className="hidden items-center gap-7 lg:flex">
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
            </ul>
            <ThemeToggle />
            <Button href="/contact" variant="nav" size="sm">
              Get Started
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
