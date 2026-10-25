import pagesJson from "./pages.json";
import sharedJson from "./shared.json";
import { applyFixes, fixShared } from "./fixes";

/**
 * Inhoud van de oude cleanwatersystems.nl, één op één overgenomen uit het
 * archief van Melange Design (3 sep 2026). Gegenereerd met het extractiescript;
 * handmatige tekstcorrecties staan in ./fixes.ts zodat ze herleidbaar blijven.
 */

export type Block =
  | { type: "html"; html: string }
  | { type: "youtube"; id: string; title: string };

export type PageKind = "home" | "page" | "landing" | "product" | "form" | "legal" | "reviews";

export type Product = {
  images: string[];
  articleNumber: string;
  price: string;
  shipping: string;
};

export type ContentPage = {
  oldPath: string;
  slug: string;
  kind: PageKind;
  title: string;
  description: string;
  h1: string;
  navName: string;
  image: string | null;
  product: Product | null;
  blocks: Block[];
};

export type Card = { title: string; text: string; image: string | null; href: string | null };

export const pages = applyFixes(pagesJson as ContentPage[]);

const fixBlocks = (blocks: Block[]) =>
  blocks.map((b) => (b.type === "html" ? { ...b, html: fixShared(b.html) } : b));

const sharedRaw = sharedJson as {
  reviews: { name: string; date: string; rating: number; text: string }[];
  reviewTotal: { rating: string; count: number } | null;
  standingFor: { blocks: Block[]; image: string | null; points: Card[] };
  reasonsWhy: Block[];
  contactUs: string;
  services: { title: string; cards: Card[] };
  results: { title: string; images: string[] };
  quote: string;
  homeServices: Card[];
  homeProducts: Card[];
};

export const shared = {
  ...sharedRaw,
  standingFor: { ...sharedRaw.standingFor, blocks: fixBlocks(sharedRaw.standingFor.blocks) },
  reasonsWhy: fixBlocks(sharedRaw.reasonsWhy),
};

const bySlug = new Map(pages.map((p) => [p.slug, p]));

export function getPage(slug: string) {
  return bySlug.get(slug);
}

export const home = bySlug.get("")!;

export const products = pages.filter((p) => p.kind === "product");

/** Landingspagina's per onderwerp: /lp/<onderwerp> met eronder steden of branches. */
export const landingTopics = pages
  .filter((p) => p.kind === "landing" && p.slug.split("/").length === 2)
  .map((topic) => ({
    topic,
    children: pages.filter((c) => c.slug.startsWith(`${topic.slug}/`)),
  }));

/** Ouder in de URL-structuur, voor kruimelpad en "meer in deze regio". */
export function parentOf(page: ContentPage) {
  const parts = page.slug.split("/");
  if (parts.length < 2) return undefined;
  return bySlug.get(parts.slice(0, -1).join("/"));
}

export function childrenOf(page: ContentPage) {
  const depth = page.slug.split("/").length + 1;
  return pages.filter((p) => p.slug.startsWith(`${page.slug}/`) && p.slug.split("/").length === depth);
}

export function siblingsOf(page: ContentPage) {
  const parent = parentOf(page);
  return parent ? childrenOf(parent).filter((p) => p.slug !== page.slug) : [];
}

/** Korte naam voor menu's en kaarten. */
export function shortName(page: ContentPage) {
  return page.navName || page.h1;
}

/** Eerste alinea als platte tekst, voor kaarten en de hero. */
export function excerpt(page: ContentPage, max = 180) {
  for (const b of page.blocks) {
    if (b.type !== "html") continue;
    const m = b.html.match(/<p>(.*?)<\/p>/);
    if (!m) continue;
    const text = m[1].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
    if (text.length < 40) continue;
    return text.length > max ? `${text.slice(0, max).replace(/\s+\S*$/, "")}…` : text;
  }
  return page.description;
}
