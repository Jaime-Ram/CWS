import { HeroLight } from "@/components/heroes";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Newsletter from "@/components/Newsletter";
import { FeaturedCard, ImageLeftItem, PillNav, PostCard } from "@/components/blocks";
import { Section } from "@/components/ui";
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
  const [featured, ...rest] = articles;

  return (
    <>
      <HeroLight
        eyebrow="Kenniscentrum"
        title="Praktische kennis over legionella"
        text="Geen theorie uit een handboek, maar wat wij in de praktijk tegenkomen in Nederlandse drinkwaterinstallaties."
      />

      {/* Uitgelicht: grote kaart links, twee items en de nieuwsbrief rechts */}
      <section className="pb-20 max-md:pb-12">
        <div className="container-default">
          <Breadcrumbs items={[{ label: "Kenniscentrum", href: "/kenniscentrum" }]} />
          <div className="grid grid-cols-[1.2fr_1fr] gap-6 max-lg:grid-cols-1">
            <FeaturedCard
              href={`/kenniscentrum/${featured.slug}`}
              title={featured.title}
              badge={featured.category}
              meta={dateFormat.format(new Date(featured.date))}
              image={featured.image}
              imageAlt={featured.imageAlt}
            />
            <div className="grid content-start gap-6">
              {rest.slice(0, 2).map((a) => (
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
              <Newsletter
                title="Praktische kennis in uw inbox"
                text="Een paar keer per jaar een korte update over wijzigingen in de regelgeving."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alle artikelen */}
      <Section className="pt-0">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2>Alle artikelen</h2>
          <PillNav
            active="/kenniscentrum"
            items={[
              { label: "Alles", href: "/kenniscentrum" },
              { label: "Legionellapreventie", href: "/legionellapreventie" },
              { label: "Diensten", href: "/diensten" },
              { label: "Vragen", href: "/veelgestelde-vragen" },
            ]}
          />
        </div>
        <div className="mt-12 grid grid-cols-3 gap-x-5 gap-y-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {articles.map((a) => (
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
    </>
  );
}
