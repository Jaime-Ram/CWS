import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { pages } from "@/content";

const priority = { home: 1, page: 0.9, product: 0.7, landing: 0.6, form: 0.8, reviews: 0.6, legal: 0.2 } as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map((p) => ({
      url: p.slug ? `${site.url}/${p.slug}` : site.url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: priority[p.kind],
    })),
    { url: `${site.url}/sitemap`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.3 },
  ];
}
