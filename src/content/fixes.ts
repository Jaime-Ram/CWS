import type { ContentPage } from "./index";

/**
 * Evidente fouten uit de oude teksten, bewust klein gehouden: de klant wil de
 * teksten zoals ze waren. Elke correctie staat hier zodat hij herleidbaar is.
 */
type Fix = { slug: string | RegExp; find: string | RegExp; replace: string; why: string };

export const fixes: Fix[] = [
  {
    slug: "lp/douchekop-met-legionella-filter/utrecht",
    find: /Rotterdam/g,
    replace: "Utrecht",
    why: "Pagina was een kopie van de Rotterdam-pagina; kop en tekst noemden Rotterdam.",
  },
  {
    slug: /^(?!reviews$)/,
    find: /Clean Water System(?!s)/g,
    replace: "Clean Water Systems",
    why: "Bedrijfsnaam zonder s (niet in klantreviews aangepast).",
  },
  {
    slug: "lp/legionella-adviesbureau/gorinchem",
    find: "Clean Water Systems</a>s",
    replace: "Clean Water Systems</a>",
    why: "Losse s achter de link (volgt uit de naamcorrectie hierboven).",
  },
  {
    slug: /^lp\/desinfectie-drinkwaterinstallatie\//,
    find: /raakt (Clean Water Systems u) aan/g,
    replace: "raadt $1 aan",
    why: "Tikfout: raakt in plaats van raadt.",
  },
  {
    slug: "cookieverklaring",
    find: "website. .",
    replace: "website.",
    why: "Dubbele punt.",
  },
];

/** Correcties op gedeelde blokken (Waar staan wij voor, enz.). */
export const sharedFixes: [string | RegExp, string][] = [
  ["Dit bied u", "Dit biedt u"],
  ["vanzelf sprekend", "vanzelfsprekend"],
];

function matches(slug: string, target: string | RegExp) {
  return typeof target === "string" ? slug === target : target.test(slug);
}

function fixString(s: string, slug: string) {
  for (const f of fixes) {
    if (!matches(slug, f.slug)) continue;
    s = typeof f.find === "string" ? s.split(f.find).join(f.replace) : s.replace(f.find, f.replace);
  }
  return s;
}

export function applyFixes(pages: ContentPage[]): ContentPage[] {
  return pages.map((p) => ({
    ...p,
    title: fixString(p.title, p.slug),
    description: fixString(p.description, p.slug),
    h1: fixString(p.h1, p.slug),
    blocks: p.blocks.map((b) => (b.type === "html" ? { ...b, html: fixString(b.html, p.slug) } : b)),
  }));
}

export function fixShared(html: string) {
  for (const [find, replace] of sharedFixes) {
    html = typeof find === "string" ? html.split(find).join(replace) : html.replace(find, replace);
  }
  return html;
}
