import Link from "next/link";
import { site } from "@/data/site";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Kruimelpad" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-[14px] text-neutral-500">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span className="text-neutral-600">{c.label}</span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-primary">
                  {c.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: all.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.label,
              item: `${site.url}${c.href === "/" ? "" : c.href}`,
            })),
          }),
        }}
      />
    </>
  );
}
