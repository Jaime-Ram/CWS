import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Media from "@/components/Media";
import JsonLd from "@/components/JsonLd";
import Newsletter from "@/components/Newsletter";
import { Badge, CardCta, ImageLeftItem } from "@/components/blocks";
import { Card, PrimaryButton, Section, SectionHead } from "@/components/ui";
import { articles, getArticle } from "@/data/articles";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/kenniscentrum/${article.slug}`,
    keywords: article.keywords,
  });
}

const dateFormat = new Intl.DateTimeFormat("nl-NL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const suggested = services.slice(0, 3);
  const headings = article.blocks.filter((b) => b.type === "h3");

  return (
    <>
      <Hero
        compact
        eyebrow={`${article.category} · ${article.readingTime} leestijd`}
        title={article.h1}
        text={article.excerpt}
        aside={
          <div className="w-[340px] overflow-hidden rounded-[24px] border border-white/12 max-lg:w-full">
            <Media alt={article.imageAlt} tone="dark" ratio="4/3" className="block aspect-[4/3] w-full" />
          </div>
        }
      />

      <Section>
        <Breadcrumbs
          items={[
            { label: "Kenniscentrum", href: "/kenniscentrum" },
            { label: article.title, href: `/kenniscentrum/${article.slug}` },
          ]}
        />

        <div className="grid grid-cols-[1fr_320px] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <article className="prose-cws max-w-[720px]">
            <div className="mb-8 flex flex-wrap items-center gap-3 not-prose">
              <Badge>{article.category}</Badge>
              <time dateTime={article.date} className="text-[15px] text-neutral-500">
                {dateFormat.format(new Date(article.date))}
              </time>
              <span className="text-[15px] text-neutral-500">· {article.readingTime} leestijd</span>
            </div>
            {article.blocks.map((block, i) => {
              if (block.type === "p") return <p key={i}>{block.text}</p>;
              if (block.type === "h3")
                return (
                  <h3 key={i} id={`kop-${i}`}>
                    {block.text}
                  </h3>
                );
              return (
                <ul key={i}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            })}
          </article>

          <aside className="grid content-start gap-6">
            {headings.length > 0 && (
              <Card className="p-8 max-sm:p-6">
                <h2 className="text-[20px]">In dit artikel</h2>
                <ol className="mt-5 grid gap-2.5">
                  {article.blocks.map((b, i) =>
                    b.type === "h3" ? (
                      <li key={i}>
                        <a
                          href={`#kop-${i}`}
                          className="text-[15px] leading-[1.5em] text-neutral-600 transition-colors hover:text-primary"
                        >
                          {b.text}
                        </a>
                      </li>
                    ) : null,
                  )}
                </ol>
              </Card>
            )}

            <CardCta
              eyebrow="Vraag over uw installatie?"
              title="Wij denken graag mee"
              text="Bel gerust, ook als het niet direct om een opdracht gaat."
              action={
                <a href={site.phoneHref} className="text-[20px] font-semibold text-white">
                  {site.phone}
                </a>
              }
            />

            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Relevante diensten</h2>
              <ul className="mt-5 grid gap-2.5">
                {suggested.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`/diensten/${s.slug}`}
                      className="text-[15px] leading-[1.5em] text-neutral-600 transition-colors hover:text-primary"
                    >
                      {s.navName}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <PrimaryButton href="/contact">Neem contact op</PrimaryButton>
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-[1fr_1.1fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead eyebrow="Kenniscentrum" title="Meer over waterveiligheid" />
            <div className="mt-8 grid gap-7">
              {others.map((a) => (
                <ImageLeftItem
                  key={a.slug}
                  href={`/kenniscentrum/${a.slug}`}
                  imageAlt={a.imageAlt}
                  title={a.title}
                  badge={a.category}
                  meta={a.readingTime}
                />
              ))}
            </div>
          </div>
          <Newsletter />
        </div>
      </Section>

      <CtaSection />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.h1,
          description: article.metaDescription,
          datePublished: article.date,
          dateModified: article.date,
          inLanguage: "nl-NL",
          mainEntityOfPage: `${site.url}/kenniscentrum/${article.slug}`,
          author: { "@id": `${site.url}/#organization` },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
