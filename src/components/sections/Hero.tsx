import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { StatsBar } from "@/components/sections/StatsBar";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center pb-20 pt-32 text-center">
      <Container className="flex flex-col items-center">
        <div
          className="mb-9 inline-flex animate-fade-up items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-widest text-accent"
          style={{ animationDelay: "0s" }}
        >
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
            aria-hidden
          />
          Powered by MTX Studio Infrastructure
        </div>

        <h1
          className="animate-fade-up max-w-4xl font-heading text-balance text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          Where Great
          <br />
          <span className="text-gradient">Projects Live.</span>
        </h1>

        <p
          className="animate-fade-up mt-7 max-w-lg text-lg font-normal leading-relaxed text-muted"
          style={{ animationDelay: "0.2s" }}
        >
          Managed hosting built for agencies, developers, and ambitious projects.
          Fast. Secure. Backed by people who actually know code.
        </p>

        <div
          className="animate-fade-up mt-12 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Button href="/contact">Start Hosting →</Button>
          <Button href="/plans" variant="ghost">
            See Plans
          </Button>
        </div>

        <div
          className="animate-fade-up mt-20 w-full max-w-3xl"
          style={{ animationDelay: "0.4s" }}
        >
          <StatsBar />
        </div>
      </Container>
    </section>
  );
}
