import { HeroCentered } from "@/components/heroes";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CardTabs } from "@/components/Tabs";
import { FeatureCard, MilestoneList, StatsCard } from "@/components/blocks";
import { PrimaryButton, SecondaryButton, Section, SectionHead } from "@/components/ui";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Over ons",
  description:
    "Clean Watersystems is sinds 2008 adviesbureau voor waterinstallaties. Specialist in legionellapreventie, BRL 6010 risicoanalyses en desinfectie.",
  path: "/over-ons",
  keywords: [
    "Clean Watersystems",
    "adviesbureau waterinstallaties",
    "legionella specialist Nederland",
  ],
});

const values = [
  {
    title: "Eerlijk advies",
    text: "Een bureau dat overal een risico ziet, verkoopt meer. Wij zeggen het ook als u minder nodig heeft dan u dacht.",
    image: "/images/fotos/inspectie-clipboard.jpg",
    imageAlt: "Adviseur legt bevindingen vast op locatie",
  },
  {
    title: "Alleen ons vak",
    text: "Wij zijn geen installateur die er legionella bij doet. Daardoor doorgronden wij een installatie sneller.",
    image: "/images/fotos/leidingnet-manifold.jpg",
    imageAlt: "Leidingwerk van een drinkwaterinstallatie",
  },
  {
    title: "Werkbaar in de praktijk",
    text: "Een beheersplan dat te veel vraagt, wordt niet uitgevoerd. Wij schrijven ze zo dat uw eigen mensen ermee vooruit kunnen.",
    image: "/images/fotos/bedieningspaneel.jpg",
    imageAlt: "Beheer en registratie van een installatie",
  },
  {
    title: "Bereikbaar buiten kantooruren",
    text: "Desinfecties in de avond, de nacht of het weekend. En bij een overschrijding wilt u niet tot maandag wachten.",
    image: "/images/fotos/monteur-gereedschap.jpg",
    imageAlt: "Monteur aan het werk aan een leidingnet",
  },
];

const locations = [
  {
    key: "vestiging",
    label: "Vestiging Schoonhoven",
    badge: "NL",
    heading: `${site.address.street}, ${site.address.city}`,
    text: "Vanuit Schoonhoven rijden wij door heel Nederland. Voor locaties verder weg plannen wij meerdere aaneengesloten dagen in, zodat reistijd niet in uw offerte terechtkomt.",
    bullets: [
      `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
      `Telefoon ${site.phone}`,
      `Buiten kantooruren ${site.mobile}`,
      site.email,
    ],
    image: "/images/fotos/laptop-werkplek.jpg",
    imageAlt: "Werkplek van Clean Watersystems",
  },
  {
    key: "werkgebied",
    label: "Werkgebied Nederland",
    badge: "24u",
    heading: "Landelijke dekking, ook met spoed",
    text: "Bij een aangetoonde overschrijding voeren wij indien nodig binnen 24 uur een desinfectie uit, ook in het weekend.",
    bullets: [
      "Losse opdrachten en doorlopende beheercontracten",
      "Werk in de avond, de nacht en het weekend",
      "Grotere projecten gefaseerd per bouwdeel",
      "Samenwerking met uw eigen installateur mogelijk",
    ],
    image: "/images/fotos/waterstraal.jpg",
    imageAlt: "Doorspoelen van een leidingnet",
  },
  {
    key: "normen",
    label: "Normen en keurmerken",
    badge: "BRL",
    heading: "Waarbinnen wij werken",
    text: "Legionellabeheer is genormeerd werk. Dit is het kader waarbinnen elke opdracht wordt uitgevoerd.",
    bullets: [
      "BRL 6010 voor risicoanalyses en beheersplannen",
      "BRL-K14032 voor reiniging en desinfectie",
      "NEN 1006 en de waterwerkbladen, waaronder 1.4G",
      "NEN 6265 voor monsterneming en analyse",
    ],
    image: "/images/fotos/watermonster-lab.jpg",
    imageAlt: "Laboratoriumanalyse van een watermonster",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <HeroCentered
        title="Adviesbureau voor waterinstallaties"
        text={`Sinds ${site.founded} gespecialiseerd in legionellapreventie. Geen aannemer die er legionella bij doet, maar een bureau dat niets anders doet.`}
        actions={
          <>
            <PrimaryButton href="/contact">Neem contact op</PrimaryButton>
            <a href={site.phoneHref} className="font-semibold text-white">
              {site.phone}
            </a>
          </>
        }
      />

      <Section>
        <Breadcrumbs items={[{ label: "Over ons", href: "/over-ons" }]} />
        <SectionHead
          center
          eyebrow="Onze cijfers"
          title="Waarom voor ons kiezen?"
          text="Veilig en schoon drinkwater is vanzelfsprekend, tot het dat niet meer is. Wij zorgen dat uw installatie die belofte waarmaakt en dat u dat kunt aantonen."
        />
        <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          <StatsCard
            value={site.founded}
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

      <Section className="pt-0">
        <div className="rounded-[32px] bg-neutral-200/60 p-12 max-md:rounded-[24px] max-sm:p-6">
          <div className="grid grid-cols-[1.6fr_1fr] gap-12 max-lg:grid-cols-1">
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              {values.map((v) => (
                <FeatureCard key={v.title} {...v} />
              ))}
            </div>
            <div>
              <SectionHead
                eyebrow="Waar wij voor staan"
                title="Vier dingen waar wij ons aan houden"
                text="Drinkwaterinstallaties moeten volgens de geldende regels worden aangelegd, onderhouden en beheerd. Zodra daar iets in schuift, verandert een installatie van nutsvoorziening in risicofactor."
              />
              <div className="mt-8">
                <PrimaryButton href="/diensten">Bekijk onze diensten</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead center eyebrow="Vestiging" title="Waar u ons vindt" />
        <div className="mt-12">
          <CardTabs items={locations} />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-[1fr_1.15fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead
              eyebrow="Het traject"
              title="Wat er gebeurt nadat u belt"
              text="Van het eerste telefoontje tot doorlopend beheer. Elke stap levert iets op dat u kunt overleggen."
            />
            <div className="mt-8">
              <SecondaryButton href="/contact">Begin met een gesprek</SecondaryButton>
            </div>
          </div>
          <MilestoneList
            items={[
              {
                badge: "Stap 1",
                title: "Inventarisatie en vaste prijs",
                text: "Een kort gesprek over uw gebouw, uw installatie en uw verplichtingen. Daarna een vaste prijs, geen nacalculatie.",
                image: "/images/fotos/laptop-werkplek.jpg",
                imageAlt: "Inventarisatie van de opdracht",
              },
              {
                badge: "Stap 2",
                title: "Onderzoek op locatie",
                text: "Een BRL 6010 adviseur loopt de installatie na, meet temperaturen en legt elk tappunt vast met foto's.",
                image: "/images/fotos/inspectie-clipboard.jpg",
                imageAlt: "Onderzoek van de installatie op locatie",
              },
              {
                badge: "Stap 3",
                title: "Rapport, beheersplan en logboek",
                text: "Risico's met prioritering, per punt een maatregel en een logboekopzet die bij een controle voldoet.",
                image: "/images/fotos/bedieningspaneel.jpg",
                imageAlt: "Beheersplan en registratie",
              },
              {
                badge: "Stap 4",
                title: "Uitvoering, meting en nazorg",
                text: "Beheersmaatregelen, periodieke monstername en actualisatie zodra er iets aan de installatie wijzigt.",
                image: "/images/fotos/watermonster-lab.jpg",
                imageAlt: "Monstername en analyse",
              },
            ]}
          />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
