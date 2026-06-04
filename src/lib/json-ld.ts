import { plans, planFaqs } from "@/lib/plans";
import type { ServicePage } from "@/lib/services";
import { mtxStudioUrl, siteUrl } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MTX Hosting",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description:
      "Managed hosting for agencies, developers, and ambitious projects. EU infrastructure with expert support.",
    parentOrganization: {
      "@type": "Organization",
      name: "MTX Studio",
      url: mtxStudioUrl,
    },
    areaServed: [
      { "@type": "Place", name: "European Union" },
      { "@type": "Country", name: "United Kingdom" },
    ],
  };
}

export function plansProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": plans.map((plan) => ({
      "@type": "Product",
      name: `${plan.name} Hosting Plan`,
      description: plan.features.join(". "),
      brand: {
        "@type": "Brand",
        name: "MTX Hosting",
      },
      offers: {
        "@type": "Offer",
        price: plan.priceAnnual,
        priceCurrency: "EUR",
        description: "Per month, billed annually",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}${plan.cta.href}`,
      },
    })),
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: planFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd(service: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${siteUrl}/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "MTX Hosting",
      url: siteUrl,
    },
    areaServed: [
      { "@type": "Place", name: "European Union" },
      { "@type": "Country", name: "United Kingdom" },
    ],
  };
}
