import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center pb-24 pt-32 text-center">
      <Container>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          That route doesn&apos;t exist. Head back to plans or tell us what you&apos;re looking
          for.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/">Home</Button>
          <Button href="/plans" variant="ghost">
            See plans
          </Button>
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </div>
        <p className="mt-8">
          <Link href="/managed-nextjs" className="text-sm text-accent hover:opacity-80">
            Managed Next.js →
          </Link>
        </p>
      </Container>
    </div>
  );
}
