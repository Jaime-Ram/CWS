import Link from "next/link";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import {
  Card,
  CheckList,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHead,
  ArrowIcon,
} from "@/components/ui";
import { site } from "@/data/site";
import { services, featuredServices } from "@/data/services";
import { branches } from "@/data/branches";
import { faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Legionellapreventie & BRL 6010 | Clean Water Systems",
  description:
    "Specialist in legionellapreventie en BRL 6010 risicoanalyses. Inspectie, beheersplannen, desinfectie en watermonsters. Landelijk, sinds 2008.",
  path: "/",
  absolute: true,
  keywords: [
    "legionellapreventie",
    "BRL 6010 risicoanalyse",
    "legionella beheersplan",
    "keerklepcontrole",
    "reiniging en desinfectie drinkwaterinstallatie",
    "legionella watermonsters",
    "adviesbureau waterinstallaties",
  ],
});

const homeFaqs = [
  {
    q: "Wanneer is een legionella risicoanalyse verplicht?",
    a: "Voor prioritaire instellingen zoals ziekenhuizen, zorginstellingen, hotels, campings, jachthavens, zwembaden, justitiële inrichtingen en asielzoekerscentra is een risicoanalyse en beheersplan wettelijk verplicht. Andere gebouweigenaren vallen onder de zorgplicht uit de Drinkwaterwet en zijn ook verantwoordelijk voor de waterkwaliteit.",
  },
  {
    q: "Wat doe ik bij een legionella-overschrijding?",
    a: "Beperk eerst de blootstelling door risicovolle tappunten buiten gebruik te stellen. Achterhaal daarna de oorzaak en voer een beheersmaatregel uit, zoals spoelen, temperatuurcorrectie of desinfectie. Bemonster vervolgens opnieuw. Boven 1000 kve/l geldt voor prioritaire instellingen een meldplicht bij de Inspectie Leefomgeving en Transport.",
  },
  {
    q: "Hoe vaak moet een keerklep gecontroleerd worden?",
    a: "Waterwerkblad 1.4G gaat uit van een jaarlijkse controle van de terugstroombeveiligingen. Voor bepaalde typen beveiliging of risicovolle toepassingen kan een kortere interval gelden. Dit wordt vastgelegd in uw beheersplan.",
  },
  {
    q: "Hoe snel kunnen jullie ter plaatse zijn bij een uitbraak?",
    a: "Bij een aangetoonde overschrijding of uitbraak voeren wij indien nodig binnen 24 uur een desinfectie uit. Bel in dat geval direct, ook buiten kantooruren.",
  },
  {
    q: "Werken jullie in heel Nederland?",
    a: "Ja. Vanuit Schoonhoven werken wij landelijk, voor zowel eenmalige opdrachten als doorlopende beheercontracten.",
  },
  {
    q: "Wat kost een risicoanalyse en beheersplan?",
    a: "Dat hangt af van het aantal tappunten, de bouwlagen en de complexiteit van de installatie. Wij maken op basis van een korte inventarisatie vooraf een vaste prijs, zodat u niet voor verrassingen komt te staan.",
  },
];

const process = [
  {
    step: "01",
    title: "Inventarisatie",
    text: "We brengen uw installatie en uw verplichtingen in kaart en bepalen samen wat er werkelijk nodig is.",
  },
  {
    step: "02",
    title: "Analyse en plan",
    text: "Een BRL 6010 adviseur inspecteert ter plaatse en levert een rapport met een werkbaar beheersplan.",
  },
  {
    step: "03",
    title: "Uitvoering",
    text: "Beheersmaatregelen, reiniging, desinfectie en monstername, gepland rond uw bedrijfsvoering.",
  },
  {
    step: "04",
    title: "Nazorg",
    text: "Controlemetingen, actueel logboek en bijsturing zodra iets structureel afwijkt.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={`Adviesbureau waterinstallaties sinds ${site.founded}`}
        title="Legionellapreventie en BRL 6010 risicoanalyse in heel Nederland"
        text="Wij helpen bedrijven en instellingen aan een veilige drinkwaterinstallatie en een aantoonbaar legionellabeheer dat de inspectie doorstaat."
        actions={
          <>
            <PrimaryButton href="/contact">Vrijblijvend advies</PrimaryButton>
            <SecondaryButton href="/diensten/legionella-uitbraak" variant="dark">
              Spoed bij een uitbraak
            </SecondaryButton>
          </>
        }
      />

      {/* Normen en certificeringen */}
      <section className="border-b border-neutral-200 py-9">
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-8 pr-8">
                {site.certifications.map((c) => (
                  <span
                    key={`${dup}-${c}`}
                    className="whitespace-nowrap rounded-full border border-neutral-200 px-5 py-2 text-[15px] font-medium text-neutral-500"
                  >
                    {c}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Over ons + kerncijfers */}
      <Section>
        <SectionHead
          eyebrow="Over Clean Water Systems"
          title="Veilig drinkwater vraagt meer dan een vinkje op papier"
          cta={<SecondaryButton href="/over-ons">Over ons</SecondaryButton>}
        />
        <div className="divider my-10" />
        <div className="grid grid-cols-[1fr_1fr_auto] gap-10 max-lg:grid-cols-1 max-lg:gap-8">
          <p className="leading-[1.65em]">
            Veilig en schoon drinkwater is in Nederland vanzelfsprekend. Maar tussen de
            watermeter en de kraan ligt een installatie die aangelegd, onderhouden en
            beheerd moet worden volgens de geldende regels. Gaat daar iets mis, dan merkt
            u dat pas als de meting binnenkomt.
          </p>
          <p className="leading-[1.65em]">
            Clean Water Systems houdt zich sinds {site.founded} bezig met
            legionellapreventie en kent drinkwaterinstallaties van binnenuit. Dat geeft u
            de zekerheid dat wij snel, discreet en onderbouwd advies geven, met een
            blijvend resultaat als doel in plaats van een tijdelijke schoonmaakactie.
          </p>
          <div className="grid content-start gap-8 max-lg:grid-cols-3 max-sm:grid-cols-1">
            {site.stats.map((s) => (
              <div key={s.label}>
                <div className="text-[48px] font-semibold leading-none text-primary max-md:text-[40px]">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="mt-2 text-[15px] text-neutral-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Diensten */}
      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Onze diensten"
          title="Complete ondersteuning op het gebied van waterveiligheid"
          text="Van de verplichte risicoanalyse tot de uitvoering van de beheersmaatregelen. U kunt bij ons terecht voor het hele traject of voor precies dat ene onderdeel."
          cta={<PrimaryButton href="/diensten">Alle diensten bekijken</PrimaryButton>}
        />
        <div className="mt-12 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {featuredServices.map((s) => (
            <Link key={s.slug} href={`/diensten/${s.slug}`} className="group">
              <Card className="flex h-full flex-col p-8 transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(31,47,84,0.25)] max-sm:p-6">
                <div className="eyebrow text-primary">{s.eyebrow}</div>
                <h3 className="mt-3">{s.name}</h3>
                <p className="mt-3 flex-1 leading-[1.6em]">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
                  Meer info
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Werkwijze */}
      <Section className="pt-0">
        <SectionHead
          eyebrow="Onze aanpak"
          title="Zo pakken wij het aan"
          cta={<SecondaryButton href="/legionellapreventie">Over legionellapreventie</SecondaryButton>}
        />
        <div className="mt-12 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {process.map((p) => (
            <Card key={p.step} className="p-8 max-sm:p-6">
              <div className="text-[15px] font-semibold text-neutral-400">{p.step}</div>
              <h3 className="mt-4 text-[20px]">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6em]">{p.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Branches */}
      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Voor wie werken wij"
          title="Organisaties waar waterveiligheid essentieel is"
          text="Elke branche heeft een eigen risicoprofiel. Wij vertalen de regels naar maatregelen die passen bij uw gebouw en uw gebruikspatroon."
        />
        <div className="mt-12 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {branches.map((b) => (
            <Link key={b.slug} href={`/branches/${b.slug}`} className="group">
              <Card className="flex h-full flex-col p-6 transition-colors duration-300 hover:border-primary/30">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[18px] leading-[1.3em]">{b.shortName}</h3>
                  {b.priority && (
                    <span className="shrink-0 rounded-full bg-secondary-100 px-2.5 py-1 text-[12px] font-semibold text-primary-dark">
                      Prioritair
                    </span>
                  )}
                </div>
                <p className="mt-2 flex-1 text-[15px] leading-[1.55em] text-neutral-600">
                  {b.name}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-primary">
                  Meer info
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Waarom wij */}
      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead
              eyebrow="Redenen om voor ons te kiezen"
              title="Wat u van ons mag verwachten"
              text="Geen dikke rapporten die in de kast belanden, maar maatregelen die uw technische dienst morgen kan uitvoeren."
            />
            <div className="mt-8">
              <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
            </div>
          </div>
          <Card className="p-10 max-sm:p-6">
            <CheckList
              items={[
                "Wij hanteren de normen van de BRL 6010 en gebruiken Kiwa-ATA goedgekeurde reinigings- en desinfectiemiddelen",
                "Reiniging en desinfectie altijd via de wettelijk voorgeschreven fysieke onderbreking",
                "Uitvoering in de avond, 's nachts of in het weekend, zodat uw bedrijfsvoering doorloopt",
                "Of het nu gaat om 1 of 1000 tappunten: snel, vakkundig en volledig geregistreerd",
                "Heldere rapportages met een prioritering, niet alleen een lijst met bevindingen",
                "Landelijke dekking en indien nodig binnen 24 uur ter plaatse bij een uitbraak",
              ]}
            />
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Veelgestelde vragen"
          title="De vragen die wij het vaakst krijgen"
        />
        <div className="mx-auto mt-12 max-w-[860px]">
          <Faq items={homeFaqs} />
          <div className="mt-8 text-center">
            <SecondaryButton href="/veelgestelde-vragen">
              Alle veelgestelde vragen
            </SecondaryButton>
          </div>
        </div>
      </Section>

      <CtaSection />

      <JsonLd data={faqSchema(homeFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Diensten van Clean Water Systems",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `${site.url}/diensten/${s.slug}`,
          })),
        }}
      />
    </>
  );
}
