import HeroSplit from "@/components/HeroSplit";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Visual from "@/components/Visual";
import { CardTabs, QuoteSlider } from "@/components/Tabs";
import { Badge, MilestoneList, QuoteCard, StatsCard } from "@/components/blocks";
import { Card, PrimaryButton, SecondaryButton, Section, SectionHead } from "@/components/ui";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Over ons",
  description:
    "Clean Water Systems is sinds 2008 adviesbureau voor waterinstallaties. Specialist in legionellapreventie, BRL 6010 risicoanalyses en desinfectie.",
  path: "/over-ons",
  keywords: [
    "Clean Water Systems",
    "adviesbureau waterinstallaties",
    "legionella specialist Nederland",
  ],
});

const werkwijze = [
  {
    key: "eerlijk",
    label: "Eerlijk advies",
    badge: "01",
    heading: "Wij zeggen het ook als u minder nodig heeft",
    text: "Een adviesbureau dat overal een risico ziet, verkoopt meer. Wij werken liever met klanten die over vijf jaar nog klant zijn. Dus als een compacte analyse volstaat, adviseren wij die.",
    bullets: [
      "Vaste prijs op basis van een korte inventarisatie vooraf",
      "Onderscheid tussen wat wettelijk moet en wat verstandig is",
      "Doorverwijzing als een andere partij beter past",
    ],
    visual: "logboek" as const,
  },
  {
    key: "specialisatie",
    label: "Specialisatie",
    badge: "02",
    heading: "Alleen opdrachten waar wij in gespecialiseerd zijn",
    text: "Wij zijn geen installateur die er legionella bij doet. Doordat wij dagelijks in drinkwaterinstallaties zitten, doorgronden wij een installatie sneller en zien wij patronen die intern niet opvallen.",
    bullets: [
      "Legionellapreventie en waterveiligheid als enige werkterrein",
      "Ervaring van kleine B&B's tot ziekenhuizen",
      "Samenwerking met uw vaste installateur waar dat handiger is",
    ],
    visual: "leidingnet" as const,
  },
  {
    key: "praktisch",
    label: "Praktisch",
    badge: "03",
    heading: "Een beheersplan dat daadwerkelijk wordt uitgevoerd",
    text: "In de praktijk sneuvelt het spoelregime als eerste. Daarom schrijven wij beheersplannen die passen bij de mensen die ze moeten uitvoeren, met een spoelroute die in een vaste ronde te lopen is.",
    bullets: [
      "Spoelschema van één A4 op de plek waar gespoeld wordt",
      "Aftekenlijsten die de drempel verlagen",
      "Uitvoering geheel of gedeeltelijk over te nemen",
    ],
    visual: "gebouw" as const,
  },
  {
    key: "bereikbaar",
    label: "Bereikbaar",
    badge: "04",
    heading: "Ook 's avonds, 's nachts en in het weekend",
    text: "Uw bedrijfsvoering hoeft niet stil te liggen voor onze werkzaamheden. En bij een overschrijding wilt u niet tot maandag wachten.",
    bullets: [
      "Desinfecties buiten openingstijden uitvoerbaar",
      "Indien nodig binnen 24 uur ter plaatse bij een uitbraak",
      "Vast aanspreekpunt gedurende de opdracht",
    ],
    visual: "waarschuwing" as const,
  },
];

export default function OverOnsPage() {
  return (
    <>
      <HeroSplit
        eyebrow={`Sinds ${site.founded}`}
        title="Adviesbureau voor waterinstallaties"
        text="Wij zijn een gespecialiseerd bureau, geen aannemer die er legionella bij doet. Dat verschil merkt u aan het advies dat u krijgt."
        visual="golven"
        actions={
          <>
            <PrimaryButton href="/contact">Neem contact op</PrimaryButton>
            <SecondaryButton href="/diensten">Onze diensten</SecondaryButton>
          </>
        }
        stats={[
          { value: site.founded, label: "Actief sinds" },
          { value: "100%", label: "Landelijke dekking" },
          { value: "24u", label: "Spoedrespons" },
        ]}
      />

      <Section className="pt-0">
        <Breadcrumbs items={[{ label: "Over ons", href: "/over-ons" }]} />

        <div className="grid grid-cols-[1fr_1fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead
              eyebrow="Waar wij voor staan"
              title="Veilig drinkwater is vanzelfsprekend, tot het dat niet meer is"
            />
            <div className="prose-cws mt-8">
              <p>
                Er zijn maar weinig mensen die weten wat er allemaal bij komt kijken om elk
                moment van de dag betrouwbaar drinkwater uit de kraan te laten komen.
                Drinkwaterinstallaties moeten volgens de daarvoor geldende regels worden
                aangelegd, onderhouden en beheerd. Zodra daar iets in schuift, verandert
                een installatie van nutsvoorziening in risicofactor.
              </p>
              <p>
                Clean Water Systems houdt zich sinds {site.founded} bezig met
                legionellapreventie en heeft ruime ervaring met en deskundigheid van
                drinkwaterinstallaties. Dat biedt u de garantie dat wij snel en discreet
                professioneel advies kunnen geven, ook bij een legionella-uitbraak, met een
                blijvend resultaat als doel.
              </p>
            </div>
          </div>
          <div className="grid content-start gap-5">
            <StatsCard
              featured
              value={site.founded}
              title="Ruim vijftien jaar praktijk"
              text="Van kleine logiesverstrekkers tot ziekenhuizen en productielocaties. Die ervaring zit in elk advies dat wij geven."
            />
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <Card className="p-8 max-sm:p-6">
                <h3 className="text-[20px]">Vestiging</h3>
                <p className="mt-3 text-[15px] leading-[1.6em]">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </p>
                <a
                  href={site.routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[15px] font-semibold text-primary"
                >
                  Route plannen
                </a>
              </Card>
              <Card className="overflow-hidden p-3">
                <Visual name="kaart" className="block aspect-square w-full rounded-[18px]" />
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-200/50 pt-0">
        <div className="pt-24 max-md:pt-16">
          <SectionHead
            eyebrow="Hoe wij werken"
            title="Vier dingen waar wij ons aan houden"
          />
          <div className="mt-10">
            <CardTabs items={werkwijze} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-[1fr_1.15fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead
              eyebrow="Het traject"
              title="Wat er gebeurt nadat u belt"
              text="Van het eerste telefoontje tot doorlopend beheer. Elke stap levert iets op dat u kunt overleggen."
            />
            <div className="mt-8">
              <PrimaryButton href="/contact">Begin met een gesprek</PrimaryButton>
            </div>
          </div>
          <MilestoneList
            items={[
              {
                badge: "Stap 1",
                visual: "gebouw",
                title: "Inventarisatie en vaste prijs",
                text: "Een kort gesprek over uw gebouw, uw installatie en uw verplichtingen. Daarna een vaste prijs, geen nacalculatie.",
              },
              {
                badge: "Stap 2",
                visual: "leidingnet",
                title: "Onderzoek op locatie",
                text: "Een BRL 6010 adviseur loopt de installatie na, meet temperaturen en legt elk tappunt vast met foto's.",
              },
              {
                badge: "Stap 3",
                visual: "logboek",
                title: "Rapport, beheersplan en logboek",
                text: "Risico's met prioritering, per punt een maatregel en een logboekopzet die bij een controle voldoet.",
              },
              {
                badge: "Stap 4",
                visual: "monster",
                title: "Uitvoering, meting en nazorg",
                text: "Beheersmaatregelen, periodieke monstername en actualisatie zodra er iets aan de installatie wijzigt.",
              },
            ]}
          />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Onze garanties"
          title="Waar u ons aan mag houden"
        />
        <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          <QuoteCard
            large
            stat="100%"
            statLabel="Resultaatgarantie"
            text="Voldoet uw leidingsysteem aan de eisen uit de BRL 6010, dan geven wij garantie op de desinfectie. Is het resultaat niet behaald, dan komen wij terug."
            author="Garantie op desinfectie"
            role="Bij een systeem conform BRL 6010"
          />
          <QuoteCard
            stat="24u"
            statLabel="Responstijd"
            text="Bij een aangetoonde overschrijding voeren wij indien nodig binnen 24 uur een desinfectie uit, ook in het weekend."
            author="Snelle inzet"
            role="Landelijk, buiten kantooruren"
          />
          <QuoteCard
            stat="100%"
            statLabel="Tevredenheid"
            text="Clean Water Systems is pas tevreden als u dat ook bent. Is iets niet gegaan zoals afgesproken, dan lossen wij dat op zonder discussie over de factuur."
            author="Tevredenheidsgarantie"
            role="Op elke opdracht"
          />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-[1fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead
              eyebrow="Normen en richtlijnen"
              title="Waar wij volgens werken"
              text="Legionellabeheer is genormeerd werk. Dit is het kader waarbinnen elke opdracht wordt uitgevoerd."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {site.certifications.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </div>
          <QuoteSlider
            items={[
              {
                badge: "BRL 6010",
                text: "Beoordelingsrichtlijn voor legionellapreventie-advisering bij collectieve leidingwaterinstallaties. Bepaalt hoe een risicoanalyse en beheersplan tot stand komen.",
                author: "Risicoanalyse",
                role: "Verplicht voor prioritaire instellingen",
              },
              {
                badge: "BRL-K14032",
                text: "Richtlijn voor het reinigen en desinfecteren van leidingwaterinstallaties. Legt vast hoe een desinfectie veilig en aantoonbaar wordt uitgevoerd.",
                author: "Desinfectie",
                role: "Met Kiwa-ATA goedgekeurde middelen",
              },
              {
                badge: "NEN 1006",
                text: "Algemene voorschriften voor leidingwaterinstallaties, met de waterwerkbladen als praktische uitwerking. Waterwerkblad 1.4G gaat over het beheer.",
                author: "Installatie en beheer",
                role: "Basis voor keerklep- en boilercontrole",
              },
              {
                badge: "NEN 6265",
                text: "Voorschrift voor monsterneming en analyse op legionella. Bepaalt hoe een monster genomen moet worden om bewijskracht te hebben.",
                author: "Monstername",
                role: "Door een geaccrediteerde partij",
              },
            ]}
          />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
