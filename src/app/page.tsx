import Image from "next/image";
import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroVideo";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import Media from "@/components/Media";
import { AccordionTabs, NumberedAccordion } from "@/components/Tabs";
import {
  FeaturedCard,
  ImageLeftItem,
  IndustryCard,
  PortfolioCard,
  TestimonialGrid,
} from "@/components/blocks";
import {
  Eyebrow,
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
  title: "Legionellapreventie & BRL 6010 | Clean Watersystems",
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
    text: "We brengen uw installatie en uw verplichtingen in kaart en bepalen samen wat er werkelijk nodig is.",
    image: "/images/fotos/inspectie-clipboard.jpg",
    imageAlt: "Inventarisatie van een drinkwaterinstallatie",
  },
  {
    number: "02",
    title: "Analyse op locatie",
    text: "Een BRL 6010 adviseur loopt de installatie na, meet temperaturen en legt elk tappunt vast.",
    image: "/images/fotos/keerklep-detail.jpg",
    imageAlt: "Meetopstelling tijdens een analyse op locatie",
  },
  {
    number: "03",
    title: "Rapport en beheersplan",
    text: "U krijgt de risico's met een prioritering en per punt een concrete maatregel, plus een werkbaar spoelschema.",
    image: "/images/fotos/bedieningspaneel.jpg",
    imageAlt: "Registratie van meetwaarden op locatie",
  },
  {
    number: "04",
    title: "Uitvoering en nazorg",
    text: "Desgewenst voeren wij de maatregelen uit, bemonsteren wij periodiek en actualiseren wij de analyse.",
    image: "/images/fotos/watermonster-lab.jpg",
    imageAlt: "Analyse van watermonsters in het laboratorium",
  },
];

const guarantees = [
  {
    stat: "100%",
    statLabel: "Resultaatgarantie",
    text: "Voldoet uw leidingsysteem aan de eisen uit de BRL 6010, dan geven wij garantie op de desinfectie. Blijkt uit de controlemonsters dat het resultaat niet is behaald, dan komen wij terug.",
    author: "Garantie op desinfectie",
    role: "Bij een systeem conform BRL 6010",
  },
  {
    stat: "24u",
    statLabel: "Responstijd",
    text: "Bij een aangetoonde overschrijding voeren wij indien nodig binnen 24 uur een desinfectie uit, ook in het weekend.",
    author: "Snelle inzet",
    role: "Landelijk, buiten kantooruren",
  },
  {
    stat: "1-1000",
    statLabel: "Tappunten",
    text: "Of het nu om één douche gaat of om een compleet ziekenhuis: snel, vakkundig en volledig geregistreerd.",
    author: "Elke schaal",
    role: "Van B&B tot productielocatie",
  },
  {
    stat: "100%",
    statLabel: "Tevredenheid",
    text: "Is iets niet gegaan zoals afgesproken, dan lossen wij dat op zonder discussie over de factuur.",
    author: "Tevredenheidsgarantie",
    role: "Op elke opdracht",
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
        actions={<PrimaryButton href="/contact">Vrijblijvend advies</PrimaryButton>}
        background={
          <HeroVideo
            videoId="iE9gWUet-lM"
            poster="/images/fotos/video-bedrijfsimpressie.jpg"
            posterAlt="Clean Watersystems aan het werk aan een drinkwaterinstallatie"
          />
        }
      />

      {/* Logostrook met de keurmerken van de bestaande site */}
      <section className="border-b border-neutral-200 py-12">
        <div className="container-default">
          <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-10 max-md:gap-x-14">
            {[
              { src: "keurmerk-kiwa", alt: "Kiwa gecertificeerd, BRL-K14010 deel 1", h: "h-[76px]" },
              { src: "keurmerk-ce", alt: "CE-markering", h: "h-[46px]" },
              { src: "keurmerk-nen-en-1112", alt: "NEN-EN 1112, CE Medical klasse 2A", h: "h-[54px]" },
            ].map((l) => (
              <Image
                key={l.src}
                src={`/images/fotos/${l.src}.jpg`}
                alt={l.alt}
                width={400}
                height={400}
                className={`${l.h} w-auto`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Over ons */}
      <Section>
        <SectionHead
          eyebrow="Over Clean Watersystems"
          title="Veilig drinkwater vraagt meer dan een vinkje op papier"
          cta={<SecondaryButton href="/over-ons">Over ons</SecondaryButton>}
        />
        <div className="divider my-10" />
        <div className="overflow-hidden rounded-[32px] max-md:rounded-[24px]">
          <Media
            src="/images/fotos/leidingnet-manifold.jpg"
            alt="Clean Watersystems aan het werk aan een drinkwaterinstallatie"
            ratio="21/10"
            className="w-full max-md:aspect-[16/9]"
            priority
          />
        </div>
        <div className="mt-10 grid grid-cols-[1fr_1fr_auto_auto] gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8">
          <p className="leading-[1.65em]">
            Tussen de watermeter en de kraan ligt een installatie die volgens de geldende
            regels aangelegd, onderhouden en beheerd moet worden. Gaat daar iets mis, dan
            merkt u dat pas als de meting binnenkomt.
          </p>
          <p className="leading-[1.65em]">
            Clean Watersystems houdt zich sinds {site.founded} bezig met
            legionellapreventie en kent drinkwaterinstallaties van binnenuit. Dat geeft u
            snel en onderbouwd advies, met een blijvend resultaat als doel.
          </p>
          <div>
            <div className="text-[48px] font-semibold leading-none text-primary max-md:text-[36px]">
              {site.founded}
            </div>
            <div className="mt-2 text-[15px] text-neutral-600">Actief sinds</div>
          </div>
          <div>
            <div className="text-[48px] font-semibold leading-none text-primary max-md:text-[36px]">
              24u
            </div>
            <div className="mt-2 text-[15px] text-neutral-600">Respons bij een uitbraak</div>
          </div>
        </div>
      </Section>

      {/* Diensten, in de opzet van de portfolio-sectie */}
      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Onze diensten"
          title="Complete ondersteuning op het gebied van waterveiligheid"
          text="Van de verplichte risicoanalyse tot de uitvoering van de beheersmaatregelen. U kunt bij ons terecht voor het hele traject of voor precies dat ene onderdeel."
          cta={
            <>
              <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
              <SecondaryButton href="/diensten">Alle diensten</SecondaryButton>
            </>
          }
        />
        <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {featuredServices.slice(0, 3).map((s) => (
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

      {/* Aanpak */}
      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Onze aanpak"
          title="Van eerste inventarisatie tot aantoonbaar beheer"
        />
        <div className="mt-12">
          <AccordionTabs items={approach} />
        </div>
      </Section>

      {/* Branches, in de opzet van de industries-sectie */}
      <Section className="pt-0">
        <div className="grid grid-cols-[1fr_1.6fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead
              eyebrow="Voor wie werken wij"
              title="Elke branche heeft een eigen risicoprofiel"
              text="Wij vertalen de regels naar maatregelen die passen bij uw gebouw en uw gebruikspatroon."
            />
            <div className="mt-8">
              <SecondaryButton href="/branches">Alle branches</SecondaryButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            {branches.slice(0, 4).map((b) => (
              <IndustryCard
                key={b.slug}
                href={`/branches/${b.slug}`}
                title={b.shortName}
                text={b.name}
                badge={b.priority ? "Prioritair" : "Zorgplicht"}
              />
            ))}
          </div>
        </div>
      </Section>

      <CtaSection />

      {/* Garanties, in de testimonial-opzet */}
      <Section className="pt-0">
        <div className="rounded-[32px] bg-neutral-200/60 p-12 max-md:rounded-[24px] max-sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <Eyebrow>Onze garanties</Eyebrow>
              <h2>Waar u ons aan mag houden</h2>
            </div>
            <p className="max-w-[380px] leading-[1.6em]">
              Geen kleine lettertjes. Dit leggen wij vast in elke opdracht, ongeacht de
              omvang van uw installatie.
            </p>
          </div>
          <div className="mt-10">
            <TestimonialGrid items={guarantees} />
          </div>
        </div>
      </Section>

      {/* Kenniscentrum */}
      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Kenniscentrum"
          title="Praktische kennis uit Nederlandse installaties"
        />
        <div className="mt-12 grid grid-cols-[1.2fr_1fr] gap-8 max-lg:grid-cols-1">
          <FeaturedCard
            href={`/kenniscentrum/${featuredArticle.slug}`}
            title={featuredArticle.title}
            badge={featuredArticle.category}
            meta={dateFormat.format(new Date(featuredArticle.date))}
            image={featuredArticle.image}
            imageAlt={featuredArticle.imageAlt}
          />
          <div className="grid content-start gap-7">
            {restArticles.map((a) => (
              <ImageLeftItem
                key={a.slug}
                href={`/kenniscentrum/${a.slug}`}
                title={a.title}
                badge={a.category}
                meta={a.readingTime}
                image={a.image}
                imageAlt={a.imageAlt}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Veelgestelde vragen */}
      <Section className="pt-0">
        <SectionHead
          eyebrow="Veelgestelde vragen"
          title="De vragen die wij het vaakst krijgen"
          cta={<SecondaryButton href="/veelgestelde-vragen">Alle vragen</SecondaryButton>}
        />
        <div className="mt-12">
          <NumberedAccordion items={homeFaqs} />
        </div>
      </Section>

      <JsonLd data={faqSchema(homeFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Diensten van Clean Watersystems",
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
