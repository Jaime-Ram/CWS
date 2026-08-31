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
        image="/images/fotos/meetapparatuur-registratie.jpg"
        imageAlt="Praktijksituatie in een technische ruimte"
        eyebrow="Kenniscentrum"
        title="Praktische kennis over legionella en waterveiligheid"
        text="Geen theorie uit een handboek, maar wat wij in de praktijk tegenkomen in Nederlandse drinkwaterinstallaties."
        actions={<PrimaryButton href="/contact">Stel uw vraag</PrimaryButton>}
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
            image={featured.image}
                imageAlt={featured.imageAlt}
            title={featured.title}
            badge={featured.category}
            meta={dateFormat.format(new Date(featured.date))}
          />
          <div className="grid content-start gap-7">
            {[second, ...rest].map((a) => (
              <ImageLeftItem
                key={a.slug}
                href={`/kenniscentrum/${a.slug}`}
                title={a.title}
                badge={a.category}
                meta={dateFormat.format(new Date(a.date))}
                image={a.image}
                imageAlt={a.imageAlt}
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
