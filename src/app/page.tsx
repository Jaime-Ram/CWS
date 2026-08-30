import Link from "next/link";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { AccordionTabs, NumberedAccordion } from "@/components/Tabs";
import {
  CardCta,
  DarkCard,
  FeaturedCard,
  ImageLeftItem,
  QuoteCard,
  StatsCard,
  VisualCard,
} from "@/components/blocks";
import {
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHead,
} from "@/components/ui";
import { site } from "@/data/site";
import { services, featuredServices } from "@/data/services";
import { branches } from "@/data/branches";
import { articles } from "@/data/articles";
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

const approach = [
  {
    number: "01",
    title: "Inventarisatie",
    text: "We brengen uw installatie en uw verplichtingen in kaart en bepalen samen wat er werkelijk nodig is. Vooraf vragen we tekeningen en eerdere metingen op.",
    visual: "gebouw" as const,
  },
  {
    number: "02",
    title: "Analyse op locatie",
    text: "Een BRL 6010 adviseur loopt de installatie na, meet temperaturen en legt elk tappunt vast. Bij grotere gebouwen werken we per bouwdeel.",
    visual: "leidingnet" as const,
  },
  {
    number: "03",
    title: "Rapport en beheersplan",
    text: "U krijgt de risico's met een prioritering en per punt een concrete maatregel, plus een spoelschema dat uw technische dienst kan uitvoeren.",
    visual: "logboek" as const,
  },
  {
    number: "04",
    title: "Uitvoering en nazorg",
    text: "Desgewenst voeren wij de maatregelen uit, bemonsteren wij periodiek en actualiseren wij de analyse zodra de installatie wijzigt.",
    visual: "monster" as const,
  },
];

const guarantees = [
  {
    stat: "100%",
    statLabel: "Resultaatgarantie",
    text: "Voldoet uw leidingsysteem aan de eisen uit de BRL 6010, dan geven wij garantie op de desinfectie. Blijkt uit de controlemonsters dat het resultaat niet is behaald, dan komen wij terug.",
    author: "Garantie op desinfectie",
    role: "Bij een systeem conform BRL 6010",
    large: true,
  },
  {
    stat: "24u",
    statLabel: "Responstijd",
    text: "Bij een aangetoonde overschrijding voeren wij indien nodig binnen 24 uur een desinfectie uit, ook in het weekend.",
    author: "Snelle inzet bij een uitbraak",
    role: "Landelijk, ook buiten kantooruren",
  },
  {
    stat: "1-1000",
    statLabel: "Tappunten per opdracht",
    text: "Of het nu om één douche gaat of om een compleet ziekenhuis: wij desinfecteren snel, vakkundig en volledig geregistreerd.",
    author: "Elke schaal",
    role: "Van B&B tot productielocatie",
  },
];

const dateFormat = new Intl.DateTimeFormat("nl-NL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function HomePage() {
  const [featuredArticle, ...restArticles] = articles;

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

      {/* Kerncijfers als stats-cards */}
      <Section>
        <SectionHead
          eyebrow="Over Clean Water Systems"
          title="Veilig drinkwater vraagt meer dan een vinkje op papier"
          text="Tussen de watermeter en de kraan ligt een installatie die volgens de regels aangelegd, onderhouden en beheerd moet worden. Gaat daar iets mis, dan merkt u dat pas als de meting binnenkomt."
          cta={<SecondaryButton href="/over-ons">Over ons</SecondaryButton>}
        />
        <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          <StatsCard
            featured
            value="2008"
            title="Actief sinds 2008"
            text="Ruim vijftien jaar ervaring met Nederlandse drinkwaterinstallaties, van kleine B&B's tot ziekenhuizen."
          />
          <StatsCard
            value="100"
            suffix="%"
            title="Landelijke dekking"
            text="Vanuit Schoonhoven werken wij in heel Nederland, voor losse opdrachten en doorlopende contracten."
          />
          <StatsCard
            value="24"
            suffix="u"
            title="Respons bij een uitbraak"
            text="Bij een aangetoonde overschrijding voeren wij indien nodig binnen 24 uur een desinfectie uit."
          />
        </div>
      </Section>

      {/* Diensten als donkere kaarten */}
      <Section className="bg-neutral-200/50 pt-0">
        <div className="pt-24 max-md:pt-16">
          <SectionHead
            eyebrow="Onze diensten"
            title="Complete ondersteuning op het gebied van waterveiligheid"
            cta={<PrimaryButton href="/diensten">Alle diensten</PrimaryButton>}
          />
          <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {featuredServices.slice(0, 3).map((s) => (
              <DarkCard
                key={s.slug}
                href={`/diensten/${s.slug}`}
                visual={s.visual}
                eyebrow={s.eyebrow}
                title={s.name}
                text={s.summary}
                meta="Meer info"
              />
            ))}
            {featuredServices.slice(3).map((s) => (
              <VisualCard
                key={s.slug}
                href={`/diensten/${s.slug}`}
                visual={s.visual}
                title={s.name}
                subtitle={s.eyebrow}
              />
            ))}
            <CardCta
              visual="waarschuwing"
              eyebrow="Spoed"
              title="Overschrijding gemeten?"
              text="Wij komen indien nodig binnen 24 uur langs voor inspectie en desinfectie."
              action={
                <a href={site.mobileHref} className="text-[20px] font-semibold text-white">
                  {site.mobile}
                </a>
              }
            />
          </div>
        </div>
      </Section>

      {/* Aanpak als tabs met beeld */}
      <Section>
        <SectionHead
          center
          eyebrow="Onze aanpak"
          title="Van eerste inventarisatie tot aantoonbaar beheer"
          text="Vier stappen die elkaar opvolgen. Klik een stap aan om te zien wat er gebeurt."
        />
        <div className="mt-12">
          <AccordionTabs items={approach} />
        </div>
      </Section>

      {/* Branches */}
      <Section className="pt-0">
        <SectionHead
          eyebrow="Voor wie werken wij"
          title="Elke branche heeft een eigen risicoprofiel"
          cta={<SecondaryButton href="/branches">Alle branches</SecondaryButton>}
        />
        <div className="mt-12 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {branches.slice(0, 4).map((b) => (
            <VisualCard
              key={b.slug}
              href={`/branches/${b.slug}`}
              visual={b.visual}
              title={b.shortName}
              subtitle={b.name}
              badge={b.priority ? "Prioritair" : "Zorgplicht"}
            />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {branches.slice(4).map((b) => (
            <Link
              key={b.slug}
              href={`/branches/${b.slug}`}
              className="rounded-full border border-neutral-200 px-5 py-2.5 text-[15px] font-medium text-neutral-600 transition-colors hover:border-primary hover:text-primary"
            >
              {b.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* Garanties in testimonial-opmaak */}
      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Onze garanties"
          title="Waar u ons aan mag houden"
          text="Geen kleine lettertjes. Dit is wat wij vastleggen in elke opdracht."
        />
        <div className="mt-12 grid grid-cols-[1.4fr_1fr_1fr] gap-5 max-lg:grid-cols-1">
          {guarantees.map((g) => (
            <QuoteCard key={g.author} {...g} />
          ))}
        </div>
      </Section>

      {/* Kenniscentrum */}
      <Section className="pt-0">
        <SectionHead
          eyebrow="Kenniscentrum"
          title="Praktische kennis uit Nederlandse installaties"
          cta={<SecondaryButton href="/kenniscentrum">Alle artikelen</SecondaryButton>}
        />
        <div className="mt-12 grid grid-cols-[1.2fr_1fr] gap-8 max-lg:grid-cols-1">
          <FeaturedCard
            href={`/kenniscentrum/${featuredArticle.slug}`}
            visual={featuredArticle.visual}
            title={featuredArticle.title}
            badge={featuredArticle.category}
            meta={dateFormat.format(new Date(featuredArticle.date))}
          />
          <div className="grid content-start gap-7">
            {restArticles.map((a) => (
              <ImageLeftItem
                key={a.slug}
                href={`/kenniscentrum/${a.slug}`}
                visual={a.visual}
                title={a.title}
                badge={a.category}
                meta={a.readingTime}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pt-0">
        <div className="grid grid-cols-[380px_1fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div className="max-lg:max-w-[560px]">
            <SectionHead
              eyebrow="Veelgestelde vragen"
              title="De vragen die wij het vaakst krijgen"
              text="Staat uw vraag er niet bij? Bel gerust, ook als u nog niet weet wat u precies nodig heeft."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Stel uw vraag</PrimaryButton>
              <SecondaryButton href="/veelgestelde-vragen">Alle vragen</SecondaryButton>
            </div>
          </div>
          <NumberedAccordion items={homeFaqs} visual="golven" />
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
