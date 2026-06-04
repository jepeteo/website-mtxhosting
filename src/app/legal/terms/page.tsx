import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { LegalProse } from "@/components/legal/LegalProse";
import { legalContactEmail, legalEntity } from "@/lib/legal";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms for MTX Hosting managed hosting services. UK-based provider, EU infrastructure options.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <LegalProse title="Terms of Service">
      <p>
        These terms apply to managed hosting services offered by {legalEntity} as MTX Hosting.
        By submitting an enquiry or accepting a service agreement, you agree to these terms unless
        a signed contract states otherwise.
      </p>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Services</h2>
        <p>
          We provide managed hosting for WordPress and Next.js applications, including setup,
          monitoring, backups where applicable, and human support. Specific inclusions depend on
          your plan tier and stack (shared hosting vs Vercel-managed Next.js).
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Billing</h2>
        <p>
          Plans are billed annually unless agreed otherwise in writing. Fees are quoted in EUR on
          the website; invoices may be issued in GBP or EUR per your agreement. Failure to pay may
          result in suspension after reasonable notice.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Uptime and SLA</h2>
        <p>
          We target 99.9% uptime on managed infrastructure under our control. Scheduled maintenance
          is communicated in advance where possible. Credits or remedies for downtime, if any, are
          defined in your plan or master service agreement.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Backups and your content</h2>
        <p>
          We run backups according to your plan (daily, hourly, or real-time where offered). You
          remain responsible for your application code and content. Maintain your own off-site
          backups for business-critical data.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Acceptable use</h2>
        <p>
          You may not use our hosting for unlawful content, bulk spam, cryptocurrency mining without
          approval, or activities that harm network security. We may suspend service for material
          breaches after notice where practicable.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by UK law, our liability for any claim arising from these
          services is limited to fees paid by you for the affected service in the twelve months
          before the claim. We are not liable for indirect or consequential losses except where
          liability cannot be excluded by law.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Termination</h2>
        <p>
          Either party may terminate per the notice period in your agreement. On termination we will
          provide reasonable assistance to export data and transfer DNS or hosting where you have
          paid outstanding fees.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Governing law</h2>
        <p>
          These terms are governed by the laws of England and Wales. Courts in England and Wales have
          exclusive jurisdiction, subject to mandatory consumer protections in your country of
          residence where applicable.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Contact</h2>
        <p>
          Questions:{" "}
          <a href={`mailto:${legalContactEmail}`} className="text-accent hover:opacity-80">
            {legalContactEmail}
          </a>
          .
        </p>
      </section>

      <p>
        <Link href="/" className="font-mono text-xs text-accent hover:opacity-80">
          ← Back to home
        </Link>
      </p>
    </LegalProse>
  );
}
