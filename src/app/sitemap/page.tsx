import Link from "next/link";
import { HeroSmall } from "@/components/heroes";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Section } from "@/components/ui";
import { landingTopics, pages, products, shortName, type ContentPage } from "@/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sitemap | Clean Water Systems",
  description: "Overzicht van alle pagina's op de website van Clean Water Systems.",
  path: "/sitemap",
  absolute: true,
});

const general = pages.filter((p) => ["home", "page", "form", "legal", "reviews"].includes(p.kind));

function LinkList({ items }: { items: ContentPage[] }) {
  return (
    <ul className="grid gap-1.5">
      {items.map((p) => (
        <li key={p.slug}>
          <Link href={`/${p.slug}`} className="text-[15px] text-neutral-600 transition-colors hover:text-primary">
            {p.slug ? shortName(p) : "Home"}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  return (
    <>
      <HeroSmall title="Sitemap" text="Alle pagina's van Clean Water Systems op een rij." />
      <Section className="pt-12">
        <Breadcrumbs items={[{ label: "Sitemap", href: "/sitemap" }]} />
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="card p-8">
            <h2 className="mb-4 text-[20px]">Algemeen</h2>
            <LinkList items={general} />
          </div>
          <div className="card p-8">
            <h2 className="mb-4 text-[20px]">Legionella douchekoppen</h2>
            <LinkList items={products} />
          </div>
          {landingTopics.map(({ topic, children }) => (
            <div key={topic.slug} className="card p-8">
              <h2 className="mb-4 text-[20px]">
                <Link href={`/${topic.slug}`} className="hover:text-primary">
                  {shortName(topic)}
                </Link>
              </h2>
              {children.length > 0 && <LinkList items={children} />}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
