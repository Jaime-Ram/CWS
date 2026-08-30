import HeroSplit from "@/components/HeroSplit";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CardTabs } from "@/components/Tabs";
import { CardCta, PortfolioCard, VisualCard } from "@/components/blocks";
import { PrimaryButton, SecondaryButton, Section, SectionHead } from "@/components/ui";
import { branches } from "@/data/branches";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Legionellapreventie per branche",
  description:
    "Legionellabeheer voor hotels, campings, zorginstellingen, zwembaden, scholen, VvE's, sport en industrie. Elke branche zijn eigen risicoprofiel.",
  path: "/branches",
  keywords: [
    "legionella hotel",
    "legionella zorginstelling",
    "legionella camping",
    "legionella zwembad",
    "legionella VvE",
  ],
});

const regimes = [
  {
    key: "prioritair",
    label: "Prioritaire instelling",
    badge: "A",
    heading: "U valt onder het zware regime",
    text: "Het Drinkwaterbesluit wijst uw type locatie aan als prioritaire instelling. Dat betekent harde, controleerbare verplichtingen waar de Inspectie Leefomgeving en Transport op toeziet.",
    bullets: [
      "Risicoanalyse door een BRL 6010 gecertificeerd bureau",
      "Beheersplan met per tappunt een maatregel",
      "Aantoonbare uitvoering in een logboek",
      "Minimaal twee keer per jaar geaccrediteerde monstername",
      "Melding bij de ILT boven 1000 kve/l",
    ],
    visual: "logboek" as const,
  },
  {
    key: "zorgplicht",
    label: "Zorgplicht",
    badge: "B",
    heading: "Geen verplichte analyse, wel verantwoordelijk",
    text: "Kantoren, scholen, VvE's, sportclubs en industriële locaties zijn geen prioritaire instelling. De zorgplicht uit de Drinkwaterwet maakt u wel verantwoordelijk voor de kwaliteit van het water uit uw kranen.",
    bullets: [
      "Installatie moet voldoen aan NEN 1006 en de waterwerkbladen",
      "Periodieke controle van terugstroombeveiliging",
      "Aantoonbaar beheer wordt sterk aangeraden",
      "Een compacte risicoanalyse is doorgaans voldoende",
    ],
    visual: "gebouw" as const,
  },
  {
    key: "seizoen",
    label: "Seizoensgebruik",
    badge: "C",
    heading: "Uw gebouw staat een deel van het jaar stil",
    text: "Campings, sportclubs, scholen en vakantieparken hebben periodes van weken tot maanden zonder gebruik. Stilstand is de grootste risicofactor die er is.",
    bullets: [
      "Spoelregime tijdens de sluitingsperiode",
      "Volledige opstartspoeling voor heropening",
      "Bemonstering twee weken voor de eerste gebruiker",
      "Vastgelegd protocol dat uw eigen mensen kunnen uitvoeren",
    ],
    visual: "kaart" as const,
  },
  {
    key: "kwetsbaar",
    label: "Kwetsbare gebruikers",
    badge: "D",
    heading: "Uw gebruikers hebben een verhoogd risico",
    text: "In de zorg leidt blootstelling eerder tot ziekte. Beheersmaatregelen worden daarom conservatiever ingesteld dan het wettelijk minimum.",
    bullets: [
      "Strikter spoel- en meetregime op kwetsbare afdelingen",
      "Aandacht voor lauwwatermenging bij thermostatische kranen",
      "Endpoint-filters als tijdelijke maatregel bij overschrijding",
      "Afstemming met de technische dienst en infectiepreventie",
    ],
    visual: "douche" as const,
  },
];

export default function BranchesPage() {
  const priority = branches.filter((b) => b.priority);
  const duty = branches.filter((b) => !b.priority);

  return (
    <>
      <HeroSplit
        reverse
        eyebrow="Branches"
        title="De wet is voor iedereen gelijk, de praktijk niet"
        text="Een camping vraagt een andere aanpak dan een verpleeghuis of een productiehal. Wij vertalen de regels naar uw gebouw en uw gebruikspatroon."
        visual="kaart"
        actions={<PrimaryButton href="/contact">Vrijblijvend advies</PrimaryButton>}
      />

      <Section className="pt-0">
        <Breadcrumbs items={[{ label: "Branches", href: "/branches" }]} />

        <SectionHead
          eyebrow="Welk regime geldt voor u?"
          title="Vier situaties die uw verplichtingen bepalen"
          text="Uw type gebouw bepaalt of u een wettelijke plicht heeft of alleen een zorgplicht, en hoe zwaar het beheer moet zijn."
        />
        <div className="mt-10">
          <CardTabs items={regimes} />
        </div>
      </Section>

      <Section className="bg-neutral-200/50 pt-0">
        <div className="pt-24 max-md:pt-16">
          <SectionHead
            eyebrow="Prioritaire instellingen"
            title="Hier is een risicoanalyse wettelijk verplicht"
          />
          <div className="mt-10 grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {priority.map((b) => (
              <PortfolioCard
                key={b.slug}
                href={`/branches/${b.slug}`}
                visual={b.visual}
                badge="Prioritaire instelling"
                title={b.name}
                text={b.intro}
                meta="Bekijk verplichtingen"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Zorgplicht"
          title="Geen verplichte analyse, wel verantwoordelijk"
          text="Voor deze branches geldt geen verplichte risicoanalyse. De zorgplicht uit de Drinkwaterwet blijft onverkort gelden."
        />
        <div className="mt-10 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {duty.map((b) => (
            <VisualCard
              key={b.slug}
              href={`/branches/${b.slug}`}
              visual={b.visual}
              title={b.shortName}
              subtitle={b.name}
              badge="Zorgplicht"
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <CardCta
            visual="waarschuwing"
            eyebrow="Spoed"
            title="Overschrijding of uitbraak?"
            text="Ongeacht uw branche geldt: eerst blootstelling beperken, dan de oorzaak achterhalen. Wij komen indien nodig binnen 24 uur."
            action={<SecondaryButton href="/diensten/legionella-uitbraak" variant="dark">Wat te doen</SecondaryButton>}
          />
          <CardCta
            visual="leidingnet"
            eyebrow="Niet zeker"
            title="Staat uw branche er niet bij?"
            text="Heeft u een collectief leidingnet, dan geldt de zorgplicht. Bel gerust, dan bepalen we samen wat er nodig is."
            action={<SecondaryButton href="/contact" variant="dark">Neem contact op</SecondaryButton>}
          />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
