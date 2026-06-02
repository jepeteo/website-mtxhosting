import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="MTX Hosting home"
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-accent text-[0.75rem] font-extrabold text-black"
        aria-hidden
      >
        MTX
      </span>
      <span>
        <span className="text-accent">MTX</span>Hosting
      </span>
    </Link>
  );
}
