import { notFound } from "next/navigation";
import { HeroPost } from "@/components/heroes";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Newsletter from "@/components/Newsletter";
import { PostCard } from "@/components/blocks";
import { SecondaryButton, Section, SectionHead } from "@/components/ui";
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
      <HeroPost
        badge={article.category}
        meta={`${dateFormat.format(new Date(article.date))} · ${article.readingTime} leestijd`}
        title={article.h1}
        text={article.excerpt}
        image={article.image}
        imageAlt={article.imageAlt}
        card={
          <>
            <span>
              <span className="block text-[15px] text-neutral-500">Geschreven door</span>
              <span className="mt-1 block font-semibold text-neutral-800">{site.legalName}</span>
            </span>
            <span className="text-[15px] text-neutral-500">{site.tagline}</span>
          </>
        }
      />

      <Section className="pt-0">
        <Breadcrumbs
          items={[
            { label: "Kenniscentrum", href: "/kenniscentrum" },
            { label: article.title, href: `/kenniscentrum/${article.slug}` },
          ]}
        />

        <div className="mx-auto max-w-[740px]">
          <article className="prose-cws">
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
        </div>
      </Section>

      <Section className="pt-0">
        <Newsletter />
      </Section>

      <Section className="pt-0">
        <SectionHead
          eyebrow="Kenniscentrum"
          title="Meer over waterveiligheid"
          cta={<SecondaryButton href="/kenniscentrum">Alle artikelen</SecondaryButton>}
        />
        <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {others.map((a) => (
            <PostCard
              key={a.slug}
              href={`/kenniscentrum/${a.slug}`}
              title={a.title}
              category={a.category}
              meta={dateFormat.format(new Date(a.date))}
              image={a.image}
              imageAlt={a.imageAlt}
            />
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
