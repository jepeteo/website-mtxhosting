import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export function Card({ children, className, featured }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/25",
        featured && "border-accent/30 bg-accent/[0.04]",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent transition-opacity",
          featured ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
        aria-hidden
      />
      {children}
    </div>
  );
}
