import HeroSplit from "@/components/HeroSplit";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { NumberedAccordion } from "@/components/Tabs";
import { CardCta, PillNav, StatsCard } from "@/components/blocks";
import { PrimaryButton, SecondaryButton, Section, SectionHead } from "@/components/ui";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Veelgestelde vragen over legionella",
  description:
    "Antwoord op de meestgestelde vragen over legionellapreventie, risicoanalyses, desinfectie, watermonsters, keerklepcontrole en de wettelijke verplichtingen.",
  path: "/veelgestelde-vragen",
  keywords: [
    "veelgestelde vragen legionella",
    "legionella vragen",
    "legionella verplichtingen",
    "legionella norm 100 kve",
  ],
});

const algemeen = [
  {
    q: "Wanneer is een legionella risicoanalyse verplicht?",
    a: "Voor prioritaire instellingen zoals ziekenhuizen, zorginstellingen, hotels, campings, jachthavens, gebouwen met een badinrichting, justitiële inrichtingen en asielzoekerscentra is een risicoanalyse en beheersplan wettelijk verplicht op grond van het Drinkwaterbesluit.",
  },
  {
    q: "Ik ben geen prioritaire instelling. Ben ik dan vrijgesteld?",
    a: "Nee. De zorgplicht uit de Drinkwaterwet geldt voor iedere eigenaar van een collectief leidingnet. U bent verantwoordelijk voor de kwaliteit van het water uit uw kranen, ook zonder verplichte risicoanalyse. Een compacte analyse met een eenvoudig beheersplan is dan de praktische invulling daarvan.",
  },
  {
    q: "Wat is de norm voor legionella in drinkwater?",
    a: "De actiewaarde ligt op 100 kve/l. Daaronder spreken we niet van een overschrijding. Tussen 100 en 1000 kve/l moet u maatregelen nemen en de oorzaak achterhalen. Boven 1000 kve/l geldt voor prioritaire instellingen bovendien een meldplicht bij de Inspectie Leefomgeving en Transport.",
  },
  {
    q: "Wie houdt toezicht?",
    a: "De Inspectie Leefomgeving en Transport houdt toezicht op de naleving van het Drinkwaterbesluit. Bij een controle wordt gevraagd naar de risicoanalyse, het beheersplan, het logboek en de monsterresultaten van de afgelopen periode.",
  },
  {
    q: "Hoe lang is een risicoanalyse geldig?",
    a: "Er geldt geen vaste houdbaarheidsdatum, maar de analyse moet de werkelijke situatie beschrijven. Bij verbouwing, uitbreiding, functiewijziging of een structurele overschrijding actualiseert u de analyse. Veel beheerders laten hem daarnaast elke drie tot vijf jaar herzien.",
  },
];

const praktisch = [
  {
    q: "Welke temperaturen moet ik aanhouden?",
    a: "Koud water blijft onder de 25 graden, warm water is minimaal 60 graden in het toestel en minimaal 55 graden bij het tappunt. De zone tussen 25 en 45 graden is de groeizone die u wilt vermijden.",
  },
  {
    q: "Hoe vaak moet ik tappunten doorspoelen?",
    a: "Weinig gebruikte tappunten spoelt u in de regel wekelijks door, tot het water op temperatuur is. Welke punten dat zijn en hoe lang u spoelt, wordt vastgelegd in uw beheersplan.",
  },
  {
    q: "Hoe vaak moet een keerklep gecontroleerd worden?",
    a: "Waterwerkblad 1.4G gaat uit van een jaarlijkse controle van de terugstroombeveiligingen. Voor bepaalde typen of risicovolle toepassingen kan een kortere interval gelden.",
  },
  {
    q: "Hoe vaak moet sediment uit de boiler?",
    a: "Minimaal één keer per jaar, conform Waterwerkblad 1.4G. Bij hard water of een hoog verbruik kan vaker verstandig zijn.",
  },
  {
    q: "Hoe vaak moet ik bemonsteren?",
    a: "Prioritaire instellingen bemonsteren minimaal twee keer per jaar op de in het beheersplan vastgelegde punten. Voor overige gebouwen is bemonstering niet verplicht, maar wel de enige manier om aan te tonen dat uw beheer werkt.",
  },
];

const uitvoering = [
  {
    q: "Wat doe ik bij een legionella-overschrijding?",
    a: "Beperk eerst de blootstelling door risicovolle tappunten af te sluiten of te voorzien van een filter. Achterhaal daarna de oorzaak, voer de passende maatregel uit en bemonster opnieuw. Boven 1000 kve/l geldt voor prioritaire instellingen een meldplicht.",
  },
  {
    q: "Hoe lang duurt het voordat ik een uitslag heb?",
    a: "De kweekmethode volgens NEN 6265 vraagt incubatietijd. Reken op tien tot veertien dagen tussen de monstername en de definitieve uitslag.",
  },
  {
    q: "Wat is het verschil tussen chemische en thermische desinfectie?",
    a: "Bij thermische desinfectie spoelt u het net door met heet water, bij chemische desinfectie met een goedgekeurd desinfectiemiddel. Thermisch is minder ingrijpend maar vraagt voldoende capaciteit. Chemisch werkt ook bij grote en complexe installaties.",
  },
  {
    q: "Moet mijn bedrijf dicht tijdens een desinfectie?",
    a: "Meestal niet volledig. Wij werken bij voorkeur in de avond, de nacht of het weekend en faseren waar nodig per bouwdeel, zodat uw bedrijfsvoering doorloopt.",
  },
  {
    q: "Hoe snel kunnen jullie bij een uitbraak ter plaatse zijn?",
    a: "Bij een aangetoonde overschrijding voeren wij indien nodig binnen 24 uur een desinfectie uit. Bel dan direct, ook buiten kantooruren.",
  },
  {
    q: "Werken jullie in heel Nederland?",
    a: "Ja. Vanuit Schoonhoven werken wij landelijk, voor eenmalige opdrachten en voor doorlopende beheercontracten.",
  },
];

const all = [...algemeen, ...praktisch, ...uitvoering, ...services.flatMap((s) => s.faqs)];

export default function FaqPage() {
  return (
    <>
      <HeroSplit
        imageAlt="Beheersplan en logboek op tafel"
        eyebrow="Veelgestelde vragen"
        title="Antwoord op de vragen die wij het vaakst krijgen"
        text="Van wettelijke verplichtingen tot praktische uitvoering. Staat uw vraag er niet bij, bel of mail gerust."
        actions={<PrimaryButton href="/contact">Stel uw vraag</PrimaryButton>}
        stats={[
          { value: `${all.length}`, label: "Beantwoorde vragen" },
          { value: "3", label: "Onderwerpen" },
        ]}
      />

      <Section className="pt-0">
        <Breadcrumbs items={[{ label: "Veelgestelde vragen", href: "/veelgestelde-vragen" }]} />

        <PillNav
          active="/veelgestelde-vragen"
          items={[
            { label: "Alle vragen", href: "/veelgestelde-vragen" },
            { label: "Legionellapreventie", href: "/legionellapreventie" },
            { label: "Kenniscentrum", href: "/kenniscentrum" },
            { label: "Diensten", href: "/diensten" },
          ]}
        />

        <div className="mt-14 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          <StatsCard
            featured
            value="100"
            suffix=" kve/l"
            title="Actiewaarde"
            text="Boven deze waarde spreken we van een overschrijding en moet u maatregelen nemen en de oorzaak achterhalen."
          />
          <StatsCard
            value="1000"
            suffix=" kve/l"
            title="Meldplicht"
            text="Boven deze waarde geldt voor prioritaire instellingen een meldplicht bij de Inspectie Leefomgeving en Transport."
          />
          <StatsCard
            value="2×"
            title="Per jaar bemonsteren"
            text="Prioritaire instellingen bemonsteren minimaal halfjaarlijks op de punten uit het beheersplan."
          />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead eyebrow="Onderwerp 01" title="Wetgeving en verplichtingen" />
        <div className="mt-12">
          <NumberedAccordion items={algemeen} />
        </div>
      </Section>

      <Section className="bg-neutral-200/50 pt-0">
        <div className="pt-24 max-md:pt-16">
          <SectionHead eyebrow="Onderwerp 02" title="Onderhoud en frequenties" />
          <div className="mt-12">
            <NumberedAccordion items={praktisch} />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Onderwerp 03" title="Uitvoering en spoed" />
        <div className="mt-12">
          <NumberedAccordion items={uitvoering} />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <CardCta
            eyebrow="Spoed"
            title="Uw vraag kan niet wachten?"
            text="Bij een aangetoonde overschrijding belt u beter direct, ook 's avonds en in het weekend."
            action={
              <a href={site.mobileHref} className="text-[24px] font-semibold text-white">
                {site.mobile}
              </a>
            }
          />
          <CardCta
            eyebrow="Verdiepen"
            title="Alles over legionellapreventie"
            text="Het complete overzicht van regels, risico's, veelgemaakte fouten en werkende maatregelen."
            action={
              <SecondaryButton href="/legionellapreventie" variant="dark">
                Lees het dossier
              </SecondaryButton>
            }
          />
        </div>
      </Section>

      <CtaSection />
      <JsonLd data={faqSchema(all)} />
    </>
  );
}
