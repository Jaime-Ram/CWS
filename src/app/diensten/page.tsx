import HeroSplit from "@/components/HeroSplit";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CardTabs } from "@/components/Tabs";
import { CardCta, PortfolioCard, VisualCard } from "@/components/blocks";
import { PrimaryButton, SecondaryButton, Section, SectionHead } from "@/components/ui";
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

const situations = [
  {
    key: "verplicht",
    label: "Ik moet aan de regels voldoen",
    badge: "01",
    heading: "U bent prioritaire instelling en heeft een dossier nodig",
    text: "Het Drinkwaterbesluit vraagt om een risicoanalyse, een beheersplan, een bijgehouden logboek en halfjaarlijkse monsters. Wij leveren dat pakket compleet en houden het actueel.",
    bullets: [
      "Risicoanalyse en beheersplan volgens BRL 6010",
      "Halfjaarlijkse geaccrediteerde monstername",
      "Logboek dat bij een ILT-controle direct te overleggen is",
      "Actualisatie zodra de installatie wijzigt",
    ],
    image: "/images/fotos/meetapparatuur-registratie.jpg",
    imageAlt: "Legionella-logboek met beheersplan",
  },
  {
    key: "overschrijding",
    label: "Ik heb een overschrijding",
    badge: "02",
    heading: "De meting is boven de 100 kve/l uitgekomen",
    text: "Eerst blootstelling beperken, dan de oorzaak achterhalen en pas daarna behandelen. Blind desinfecteren levert vrijwel altijd een herhaling op.",
    bullets: [
      "Inspectie en bronopsporing ter plaatse",
      "Chemische of thermische desinfectie, indien nodig binnen 24 uur",
      "Hercontrole om het resultaat aan te tonen",
      "Ondersteuning bij de melding richting de toezichthouder",
    ],
    image: "/images/fotos/spoelen-leidingnet.jpg",
    imageAlt: "Buiten gebruik gesteld tappunt na een overschrijding",
  },
  {
    key: "onderhoud",
    label: "Ik wil het jaarlijks op orde",
    badge: "03",
    heading: "Terugkerend onderhoud aan uw installatie",
    text: "De jaarlijkse verplichtingen laten zich prima combineren in één of twee bezoeken per jaar. Dat scheelt bezoeken, kosten en agenda-gedoe.",
    bullets: [
      "Keerklep- en appendagecontrole conform Waterwerkblad 1.4G",
      "Sediment verwijderen uit boilers en voorraadvaten",
      "Temperatuurmetingen op de vastgelegde punten",
      "Uitvoering van het spoelregime, geheel of gedeeltelijk",
    ],
    image: "/images/fotos/keerklepcontrole.jpg",
    imageAlt: "Keerklepcontrole in een technische ruimte",
  },
  {
    key: "klacht",
    label: "Er is iets mis met het water",
    badge: "04",
    heading: "Geur, kleur of smaak klopt niet",
    text: "Een klacht over het water is een signaal dat de installatie aandacht nodig heeft. Wij achterhalen of het probleem bij de aansluiting begint of in uw eigen leidingnet ontstaat.",
    bullets: [
      "Bemonstering op meerdere punten in het net",
      "Beoordeling van materialen, temperaturen en doorstroming",
      "Onderscheid tussen installatie- en leveringsprobleem",
      "Structurele oplossing in plaats van herhaald spoelen",
    ],
    image: "/images/fotos/monstername-tappunt.jpg",
    imageAlt: "Watermonster uit een leidingnet",
  },
];

export default function DienstenPage() {
  const [first, second, ...rest] = services;

  return (
    <>
      <HeroSplit
        image="/images/fotos/inspectie-installatie.jpg"
        imageAlt="Adviseur bij een drinkwaterinstallatie"
        eyebrow="Diensten"
        title="Alles voor waterveiligheid onder één dak"
        text="Analyse, plan, uitvoering en controle. Los af te nemen of als doorlopend contract, altijd met een rapportage die u kunt overleggen."
        actions={
          <>
            <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
            <SecondaryButton href={site.phoneHref}>Bel {site.phone}</SecondaryButton>
          </>
        }
      />

      <Section className="pt-0">
        <Breadcrumbs items={[{ label: "Diensten", href: "/diensten" }]} />

        <SectionHead
          eyebrow="Waar begint u?"
          title="Kies de situatie die op u van toepassing is"
          text="De meeste vragen die wij krijgen vallen in een van deze vier categorieën."
        />
        <div className="mt-10">
          <CardTabs items={situations} />
        </div>
      </Section>

      <Section className="bg-neutral-200/50 pt-0">
        <div className="pt-24 max-md:pt-16">
          <SectionHead
            eyebrow="Het complete aanbod"
            title="Alle diensten op een rij"
          />
          <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <PortfolioCard
              href={`/diensten/${first.slug}`}
              image={first.image}
                imageAlt={first.imageAlt}
              badge={first.eyebrow}
              title={first.name}
              text={first.summary}
              meta="Meest gevraagd"
            />
            <PortfolioCard
              href={`/diensten/${second.slug}`}
              image={second.image}
                imageAlt={second.imageAlt}
              badge={second.eyebrow}
              title={second.name}
              text={second.summary}
              meta="Bij overschrijding"
            />
            <CardCta
              eyebrow="Landelijk"
              title="Werkgebied heel Nederland"
              text="Vanuit Schoonhoven rijden wij door het hele land. Voor grotere projecten plannen we aaneengesloten dagen in."
              action={<SecondaryButton href="/contact" variant="dark">Plan een bezoek</SecondaryButton>}
            />
          </div>

          <div className="mt-5 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {rest.map((s) => (
              <VisualCard
                key={s.slug}
                href={`/diensten/${s.slug}`}
                image={s.image}
                imageAlt={s.imageAlt}
                title={s.navName}
                subtitle={s.eyebrow}
              />
            ))}
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
