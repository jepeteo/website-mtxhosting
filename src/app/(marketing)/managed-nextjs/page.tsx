import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/json-ld";
import { managedNextJs } from "@/lib/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceFeatures } from "@/components/sections/ServiceFeatures";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { ServiceHowItWorks } from "@/components/sections/ServiceHowItWorks";
import { CTASection } from "@/components/sections/CTASection";
import { nextJsHowItWorks } from "@/lib/nextjs-hosting";

export const metadata: Metadata = buildMetadata({
  title: managedNextJs.title,
  description: managedNextJs.metaDescription,
  path: "/managed-nextjs",
});

export default function ManagedNextJsPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd(managedNextJs)} />
      <ServiceHero service={managedNextJs} />
      <ServiceHighlights service={managedNextJs} />
      <ServiceFeatures service={managedNextJs} />
      <ServiceHowItWorks models={nextJsHowItWorks} />
      <CTASection
        title="Ready for managed Next.js?"
        description="Share your stack and deploy workflow. We'll set up hosting and previews on the right plan."
        primaryLabel="Get in touch"
        primaryHref="/contact?plan=pro&type=nextjs"
      />
    </>
  );
}
