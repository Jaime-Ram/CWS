import HeroSplit from "@/components/HeroSplit";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Media from "@/components/Media";
import Newsletter from "@/components/Newsletter";
import { Badge, FeaturedCard, ImageLeftItem, PillNav } from "@/components/blocks";
import { Card, PrimaryButton, Section, SectionHead } from "@/components/ui";
import { articles } from "@/data/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kenniscentrum legionella",
  description:
    "Praktische artikelen over legionellapreventie: temperatuurbeheer, dode leidingen, opstarten na leegstand, kosten en het bijhouden van uw logboek.",
  path: "/kenniscentrum",
  keywords: [
    "legionella kennisbank",
    "legionella artikelen",
    "legionella praktijk",
    "waterveiligheid uitleg",
  ],
});

const dateFormat = new Intl.DateTimeFormat("nl-NL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function KenniscentrumPage() {
  const [featured, second, ...rest] = articles;
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <>
      <HeroSplit
        imageAlt="Praktijksituatie in een technische ruimte"
        eyebrow="Kenniscentrum"
        title="Praktische kennis over legionella en waterveiligheid"
        text="Geen theorie uit een handboek, maar wat wij in de praktijk tegenkomen in Nederlandse drinkwaterinstallaties."
        actions={<PrimaryButton href="/contact">Stel uw vraag</PrimaryButton>}
        stats={[
          { value: `${articles.length}`, label: "Artikelen" },
          { value: `${categories.length}`, label: "Onderwerpen" },
        ]}
      />

      <Section className="pt-0">
        <Breadcrumbs items={[{ label: "Kenniscentrum", href: "/kenniscentrum" }]} />

        <PillNav
          active="/kenniscentrum"
          items={[
            { label: "Alles", href: "/kenniscentrum" },
            { label: "Legionellapreventie", href: "/legionellapreventie" },
            { label: "Diensten", href: "/diensten" },
            { label: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
          ]}
        />

        <div className="mt-14 grid grid-cols-[1.2fr_1fr] gap-8 max-lg:grid-cols-1">
          <FeaturedCard
            href={`/kenniscentrum/${featured.slug}`}
            imageAlt={featured.imageAlt}
            title={featured.title}
            badge={featured.category}
            meta={dateFormat.format(new Date(featured.date))}
          />
          <div className="grid content-start gap-7">
            <Card className="flex flex-col overflow-hidden p-3">
              <span className="overflow-hidden rounded-[20px]">
                <Media alt={second.imageAlt} ratio="16/7" className="w-full" />
              </span>
              <span className="p-6 max-sm:p-4">
                <a
                  href={`/kenniscentrum/${second.slug}`}
                  className="block text-[22px] font-semibold leading-[1.3em] text-neutral-800 transition-colors hover:text-primary"
                >
                  {second.title}
                </a>
                <span className="mt-3 block text-[15px] leading-[1.6em] text-neutral-600">
                  {second.excerpt}
                </span>
                <span className="mt-4 flex flex-wrap items-center gap-3">
                  <Badge>{second.category}</Badge>
                  <span className="text-[15px] text-neutral-500">{second.readingTime}</span>
                </span>
              </span>
            </Card>
            {rest.map((a) => (
              <ImageLeftItem
                key={a.slug}
                href={`/kenniscentrum/${a.slug}`}
                imageAlt={a.imageAlt}
                title={a.title}
                badge={a.category}
                meta={dateFormat.format(new Date(a.date))}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Newsletter />
      </Section>

      <CtaSection />
    </>
  );
}
