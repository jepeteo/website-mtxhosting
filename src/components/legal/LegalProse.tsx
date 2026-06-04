import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SectionLabel, SectionTitle } from "@/components/ui/Badge";
import { legalLastUpdated } from "@/lib/legal";

export function LegalProse({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative z-10 pb-24 pt-32">
      <Container className="max-w-3xl">
        <SectionLabel>legal</SectionLabel>
        <SectionTitle className="mb-2">{title}</SectionTitle>
        <p className="mb-10 font-mono text-xs text-muted">Last updated: {legalLastUpdated}</p>
        <div className="prose-legal space-y-6 text-sm leading-relaxed text-muted">{children}</div>
      </Container>
    </div>
  );
}
