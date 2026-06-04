import { Hero } from "@/components/sections/Hero";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServiceOfferings } from "@/components/sections/ServiceOfferings";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceOfferings />
      <PricingSection />
      <FeatureGrid />
      <CTASection />
    </>
  );
}
