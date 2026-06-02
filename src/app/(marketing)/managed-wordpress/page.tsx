import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { managedWordPress } from "@/lib/services";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceFeatures } from "@/components/sections/ServiceFeatures";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: managedWordPress.title,
  description: managedWordPress.metaDescription,
  path: "/managed-wordpress",
});

export default function ManagedWordPressPage() {
  return (
    <>
      <ServiceHero service={managedWordPress} />
      <ServiceHighlights service={managedWordPress} />
      <ServiceFeatures service={managedWordPress} />
      <CTASection
        title="Ready for managed WordPress?"
        description="Tell us about your sites and traffic. We'll recommend a plan and migrate you for free."
        primaryLabel="Get in touch"
        primaryHref="/contact?plan=pro"
      />
    </>
  );
}
