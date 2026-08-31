import HeroCardSplit from "@/components/HeroCardSplit";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { CardTabs, NumberedAccordion } from "@/components/Tabs";
import { Badge, CardCta } from "@/components/blocks";
import { Card, SecondaryButton, Section, SectionHead } from "@/components/ui";
import { site } from "@/data/site";
import { faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact en offerte aanvragen",
  description:
    "Neem contact op met Clean Watersystems in Schoonhoven. Bel 0182-607675, mail ons of vraag direct een offerte aan voor legionellapreventie.",
  path: "/contact",
  keywords: ["contact legionella specialist", "offerte legionella", "Clean Watersystems contact"],
});

const contactFaqs = [
  {
    q: "Hoe snel krijg ik antwoord?",
    a: "Op berichten via het formulier en per e-mail reageren wij binnen één werkdag. Bij een spoedmelding over een overschrijding kunt u beter direct bellen, ook buiten kantooruren.",
  },
  {
    q: "Wat heeft u van mij nodig voor een offerte?",
    a: "Het type gebouw, het aantal tappunten bij benadering, het aantal bouwlagen en of u prioritaire instelling bent. Heeft u tekeningen, een eerdere risicoanalyse of monsterresultaten, stuur die dan mee. Dan kunnen wij vrijwel altijd direct een vaste prijs geven.",
  },
  {
    q: "Komen jullie ook langs voor een kennismaking?",
    a: "Bij grotere of complexe installaties komen wij graag eerst kijken. Voor kleinere opdrachten kunnen wij op basis van een telefonisch gesprek en wat foto's meestal al een goed beeld vormen.",
  },
  {
    q: "Werken jullie samen met mijn eigen installateur?",
    a: "Graag. Wij leveren dan het advies, de analyse en de controle achteraf, en uw vaste installateur voert de technische aanpassingen uit. Dat werkt goed omdat die het gebouw al kent.",
  },
];

const routes = [
  {
    key: "offerte",
    label: "Offerte aanvragen",
    badge: "01",
    heading: "U weet wat u nodig heeft",
    text: "Beschrijf de opdracht zo concreet mogelijk. Wij komen binnen één werkdag terug met een vaste prijs of met de vragen die we nog nodig hebben.",
    bullets: [
      "Type gebouw en aantal tappunten bij benadering",
      "Bent u prioritaire instelling?",
      "Bestaande risicoanalyse of monsterresultaten meesturen",
      "Gewenste planning of deadline",
    ],
    image: "/images/fotos/bedieningspaneel.jpg",
    imageAlt: "Legionella-logboek met beheersplan",
  },
  {
    key: "spoed",
    label: "Spoed bij overschrijding",
    badge: "02",
    heading: "Er is legionella aangetoond",
    text: "Bel direct, ook 's avonds en in het weekend. Wij bespreken telefonisch welke maatregelen u nu al kunt nemen om de blootstelling te beperken.",
    bullets: [
      "Risicovolle tappunten buiten gebruik stellen",
      "Aerosolvorming vermijden tot wij er zijn",
      "Indien nodig binnen 24 uur ter plaatse",
      "Ondersteuning bij de melding richting de ILT",
    ],
    image: "/images/fotos/waterstraal.jpg",
    imageAlt: "Buiten gebruik gesteld tappunt na een overschrijding",
  },
  {
    key: "advies",
    label: "Alleen een vraag",
    badge: "03",
    heading: "U weet nog niet wat u nodig heeft",
    text: "Dat is prima. Bel gerust, ook als u alleen wilt weten of u wel of niet onder de verplichtingen valt. Daar rekenen wij niets voor.",
    bullets: [
      "Uitleg over uw verplichtingen in uw situatie",
      "Second opinion op een bestaand rapport",
      "Advies over een klacht aan het water",
      "Doorverwijzing als een andere partij beter past",
    ],
    image: "/images/fotos/handen-onder-kraan.jpg",
    imageAlt: "Watermonster uit een leidingnet",
  },
  {
    key: "werkgebied",
    label: "Werkgebied",
    badge: "04",
    heading: "Vanuit Schoonhoven door heel Nederland",
    text: "Wij rijden landelijk. Voor locaties verder weg plannen wij meerdere aaneengesloten dagen in, zodat reistijd niet in uw offerte terechtkomt.",
    bullets: [
      `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
      "Landelijke dekking voor losse en doorlopende opdrachten",
      "Werk in de avond, nacht en het weekend mogelijk",
      "Grotere projecten gefaseerd per bouwdeel",
    ],
    image: "/images/fotos/leidingnet-manifold.jpg",
    imageAlt: "Werkgebied door heel Nederland",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroCardSplit
        eyebrow="Contact"
        title="Vertel ons kort wat er speelt"
        text="Of het nu gaat om een verplichte risicoanalyse, een overschrijding of een vraag waarvan u nog niet weet bij wie u moet zijn: bel of mail gerust."
        bottomTitle="Spoed bij een uitbraak"
        bottomText="Bij een aangetoonde overschrijding voeren wij indien nodig binnen 24 uur een desinfectie uit. Bel dan direct, ook buiten kantooruren."
        bottomAction={
          <a href={site.mobileHref} className="text-[24px] font-semibold text-primary">
            {site.mobile}
          </a>
        }
      >
        <div className="pl-2 max-lg:pl-0">
          <Badge>Binnen één werkdag antwoord</Badge>
          <h2 className="mt-4">Stuur ons een bericht</h2>
          <p className="mt-3 max-w-[520px] leading-[1.6em]">
            Hoe concreter uw omschrijving, hoe scherper wij kunnen antwoorden. Vermeld bij
            voorkeur het type gebouw, het aantal tappunten en of u prioritaire instelling
            bent.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </HeroCardSplit>

      <Section className="bg-neutral-200/50 pt-0">
        <div className="pt-24 max-md:pt-16">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
          <SectionHead
            eyebrow="Waar gaat het over?"
            title="Kies waarvoor u contact opneemt"
            text="Dan weet u meteen wat wij van u nodig hebben en wat u van ons kunt verwachten."
          />
          <div className="mt-10">
            <CardTabs items={routes} />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
              eyebrow="Voordat u belt"
              title="Vragen over het contact zelf"
              cta={<SecondaryButton href="/veelgestelde-vragen">Alle veelgestelde vragen</SecondaryButton>}
            />
            <div className="mt-12">
              <NumberedAccordion items={contactFaqs} />
            </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <CardCta
            eyebrow="Nog aan het oriënteren"
            title="Wat geldt er voor uw type gebouw?"
            text="Per branche zetten wij op een rij welke verplichtingen gelden en waar het in de praktijk misgaat."
            action={<SecondaryButton href="/branches" variant="dark">Bekijk uw branche</SecondaryButton>}
          />
          <CardCta
            eyebrow="Diensten"
            title="Bekijk eerst wat wij doen"
            text="Van risicoanalyse tot desinfectie en periodieke monstername, met per dienst wat er precies bij inbegrepen zit."
            action={<SecondaryButton href="/diensten" variant="dark">Alle diensten</SecondaryButton>}
          />
        </div>
      </Section>

      <JsonLd data={faqSchema(contactFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Clean Watersystems",
          url: `${site.url}/contact`,
          mainEntity: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
