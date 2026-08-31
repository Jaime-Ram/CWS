import { HeroSmall } from "@/components/heroes";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PortfolioCard } from "@/components/blocks";
import { PrimaryButton, Section } from "@/components/ui";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Diensten voor legionellapreventie",
  description:
    "Van BRL 6010 risicoanalyse en beheersplan tot desinfectie, keerklepcontrole, boilerreiniging en geaccrediteerde watermonsters. Bekijk alle diensten.",
  path: "/diensten",
  keywords: [
    "legionella diensten",
    "BRL 6010 risicoanalyse",
    "desinfectie waterleiding",
    "keerklepcontrole",
    "legionella watermonsters",
  ],
});

export default function DienstenPage() {
  return (
    <>
      <HeroSmall
        title="Diensten"
        text="Analyse, plan, uitvoering en controle voor uw drinkwaterinstallatie. Los af te nemen of als doorlopend contract, altijd met een rapportage die u kunt overleggen."
        actions={<PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>}
      />

      <Section>
        <Breadcrumbs items={[{ label: "Diensten", href: "/diensten" }]} />
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map((s) => (
            <PortfolioCard
              key={s.slug}
              href={`/diensten/${s.slug}`}
              title={s.name}
              text={s.summary}
              badge={s.eyebrow}
              image={s.image}
              imageAlt={s.imageAlt}
            />
          ))}
        </div>
      </Section>

      <CtaSection
        eyebrow="Niet zeker wat u nodig heeft?"
        title="Bel gerust, ook zonder concrete opdracht"
        text={`Beschrijf uw gebouw en installatie, dan zeggen wij wat er wettelijk moet en wat verstandig is. Bel ${site.phone}.`}
      />
    </>
  );
}
