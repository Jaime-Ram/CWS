import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { ArrowIcon, Card, PrimaryButton, Section } from "@/components/ui";
import { articles, getArticle } from "@/data/articles";
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

  return (
    <>
      <Hero
        compact
        eyebrow={`${article.category} · ${article.readingTime} leestijd`}
        title={article.h1}
        text={article.excerpt}
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
            <p className="text-[14px] text-neutral-500">
              Gepubliceerd op{" "}
              <time dateTime={article.date}>{dateFormat.format(new Date(article.date))}</time>
            </p>
            {article.blocks.map((block, i) => {
              if (block.type === "p") return <p key={i}>{block.text}</p>;
              if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
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
            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Vraag over uw installatie?</h2>
              <p className="mt-3 text-[15px] leading-[1.6em]">
                Bel gerust even. Wij denken graag mee, ook als het niet direct om een
                opdracht gaat.
              </p>
              <div className="mt-5 grid gap-2 text-[15px]">
                <a href={site.phoneHref} className="font-semibold text-primary">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="break-all font-semibold text-primary">
                  {site.email}
                </a>
              </div>
              <div className="mt-6">
                <PrimaryButton href="/contact">Neem contact op</PrimaryButton>
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <h2>Meer uit het kenniscentrum</h2>
        <div className="mt-8 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {others.map((a) => (
            <Link key={a.slug} href={`/kenniscentrum/${a.slug}`} className="group">
              <Card className="flex h-full flex-col p-7">
                <span className="text-[14px] text-neutral-500">{a.category}</span>
                <h3 className="mt-2 text-[19px] leading-[1.3em]">{a.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-[1.55em]">{a.excerpt}</p>
                <ArrowIcon className="mt-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </Card>
            </Link>
          ))}
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
