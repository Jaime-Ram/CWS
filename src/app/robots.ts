import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Alleen productie mag geïndexeerd worden; previews en het testdomein niet.
const isProduction = process.env.VERCEL_ENV === "production" || !process.env.VERCEL_ENV;

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
