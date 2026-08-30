import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { branches } from "@/data/branches";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/legionellapreventie`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/diensten`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/branches`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/kenniscentrum`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/veelgestelde-vragen`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/over-ons`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ];

  return [
    ...staticPages,
    ...services.map((s) => ({
      url: `${site.url}/diensten/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...branches.map((b) => ({
      url: `${site.url}/branches/${b.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/kenniscentrum/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ].map((entry) => ({ lastModified: now, ...entry }));
}
