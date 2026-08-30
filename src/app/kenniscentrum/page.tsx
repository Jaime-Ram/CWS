import Link from "next/link";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowIcon, Card, PrimaryButton, Section } from "@/components/ui";
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
  return (
    <>
      <Hero
        compact
        eyebrow="Kenniscentrum"
        title="Praktische kennis over legionella en waterveiligheid"
        text="Geen theorie uit een handboek, maar wat wij in de praktijk tegenkomen in Nederlandse drinkwaterinstallaties."
        actions={<PrimaryButton href="/contact">Stel uw vraag</PrimaryButton>}
      />

      <Section>
        <Breadcrumbs items={[{ label: "Kenniscentrum", href: "/kenniscentrum" }]} />
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {articles.map((a) => (
            <Link key={a.slug} href={`/kenniscentrum/${a.slug}`} className="group">
              <Card className="flex h-full flex-col p-8 transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(31,47,84,0.25)] max-sm:p-6">
                <div className="flex items-center gap-3 text-[14px] text-neutral-500">
                  <span className="rounded-full bg-neutral-200 px-3 py-1 font-medium text-neutral-600">
                    {a.category}
                  </span>
                  <span>{a.readingTime}</span>
                </div>
                <h2 className="mt-4 text-[22px] leading-[1.3em]">{a.title}</h2>
                <p className="mt-3 flex-1 text-[15px] leading-[1.6em]">{a.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <time dateTime={a.date} className="text-[14px] text-neutral-500">
                    {dateFormat.format(new Date(a.date))}
                  </time>
                  <ArrowIcon className="text-primary transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
