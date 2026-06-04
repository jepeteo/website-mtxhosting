import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { LegalProse } from "@/components/legal/LegalProse";
import { legalContactEmail, legalEntity } from "@/lib/legal";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How MTX Hosting collects and uses your data. UK-based service with EU-hosted infrastructure.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalProse title="Privacy Policy">
      <p>
        {legalEntity} operates MTX Hosting ({` `}
        <Link href="/" className="text-accent hover:opacity-80">
          mtxhosting.com
        </Link>
        ). This policy explains what we collect when you use our website or enquire about hosting,
        and how we use it.
      </p>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Who we are</h2>
        <p>
          MTX Hosting is a managed hosting offering of MTX Studio, a UK company. Hosting
          infrastructure for customer sites may run in EU data centers or on third-party platforms
          (for example Vercel) as described at onboarding.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Data we collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink">Contact form:</strong> name, email, optional plan and
            hosting type, message, and optional repository URL you provide.
          </li>
          <li>
            <strong className="text-ink">Technical data:</strong> IP address and browser metadata
            in server logs when you submit the form or browse the site.
          </li>
          <li>
            <strong className="text-ink">Analytics:</strong> if enabled, anonymous usage metrics
            via Vercel Analytics on this marketing site only.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">How we use your data</h2>
        <p>
          We use enquiry data to respond to you, provide quotes, and onboard hosting. We do not sell
          your personal data. Email delivery is handled by Resend; hosting operations may use
          additional processors named in your service agreement.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Legal basis (UK GDPR)</h2>
        <p>
          We process enquiry data on the basis of legitimate interests (responding to business
          enquiries) and, if you become a customer, contract performance. You may request access,
          correction, or deletion of your data where applicable law allows.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Retention</h2>
        <p>
          Contact enquiries are kept as long as needed for sales and support follow-up, then deleted
          or archived according to our internal retention schedule unless we have a legal obligation
          to retain them longer.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Contact</h2>
        <p>
          Privacy questions:{" "}
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
