import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absolute?: boolean;
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.legalName,
      locale: "nl_NL",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: site.description,
  foundingDate: site.founded,
  slogan: site.tagline,
  email: site.email,
  telephone: site.phone,
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "Nederland" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  sameAs: [site.socials.linkedin, site.socials.youtube],
  knowsAbout: [
    "Legionellapreventie",
    "BRL 6010 risicoanalyse",
    "Legionella beheersplan",
    "Keerklepcontrole",
    "Reiniging en desinfectie van drinkwaterinstallaties",
    "Legionella watermonsters",
    "NEN 1006",
    "Drinkwaterbesluit",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "NL",
      availableLanguage: "Dutch",
      email: site.email,
    },
  ],
};

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Nederland" },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
