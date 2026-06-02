import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-body text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-accent text-black hover:opacity-90 hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5",
        ghost:
          "border border-border bg-transparent font-semibold text-ink hover:border-accent hover:-translate-y-0.5",
        nav: "border border-accent bg-transparent px-5 py-2 text-xs uppercase tracking-wider text-accent hover:bg-accent hover:text-black",
      },
      size: {
        default: "px-8 py-3.5",
        sm: "px-5 py-2.5 text-xs",
        lg: "px-8 py-4 text-base",
        full: "w-full px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn(buttonVariants({ variant, size, className }))}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
}

export { buttonVariants };
