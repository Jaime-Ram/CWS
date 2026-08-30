import Link from "next/link";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {
  ArrowIcon,
  Card,
  CheckList,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHead,
} from "@/components/ui";
import { services } from "@/data/services";
import { branches } from "@/data/branches";
import { faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Legionellapreventie: regels en aanpak",
  description:
    "Alles over legionellapreventie: wanneer een risicoanalyse verplicht is, welke normen gelden, wat een beheersplan inhoudt en wat u doet bij een overschrijding.",
  path: "/legionellapreventie",
  keywords: [
    "legionellapreventie",
    "legionella voorkomen",
    "legionella wetgeving",
    "Drinkwaterbesluit legionella",
    "prioritaire instelling",
    "legionella beheersplan",
  ],
});

const faqs = [
  {
    q: "Wat is legionella precies?",
    a: "Legionella is een bacterie die van nature in kleine aantallen in water voorkomt. In een drinkwaterinstallatie kan de bacterie zich sterk vermeerderen wanneer het water lang stilstaat op een temperatuur tussen ongeveer 25 en 45 graden. Ziek word je niet van het drinken van besmet water, maar van het inademen van kleine waterdruppeltjes, bijvoorbeeld onder de douche.",
  },
  {
    q: "Wat is het verschil tussen de veteranenziekte en legionellagriep?",
    a: "Beide worden veroorzaakt door de legionellabacterie. Legionellagriep, ook wel Pontiac fever, verloopt als een stevige griep en gaat vanzelf over. De veteranenziekte is een longontsteking die ernstig kan verlopen, zeker bij ouderen, rokers en mensen met een verminderde weerstand.",
  },
  {
    q: "Welke temperatuur is veilig?",
    a: "Als vuistregel: koud water blijft onder de 25 graden en warm water is minimaal 60 graden in het toestel en minimaal 55 graden bij het tappunt. De zone tussen 25 en 45 graden is de groeizone die u zoveel mogelijk wilt vermijden.",
  },
  {
    q: "Hoe vaak moet ik tappunten doorspoelen?",
    a: "Weinig gebruikte tappunten spoelt u wekelijks door, tot het water op temperatuur is. Welke punten dat zijn en hoe lang u spoelt, wordt vastgelegd in uw beheersplan op basis van de risicoanalyse.",
  },
  {
    q: "Wie controleert of ik aan de regels voldoe?",
    a: "De Inspectie Leefomgeving en Transport houdt toezicht op de naleving van het Drinkwaterbesluit door prioritaire instellingen. Bij een controle wordt gevraagd naar de risicoanalyse, het beheersplan, het logboek en de monsterresultaten.",
  },
  {
    q: "Ik ben geen prioritaire instelling. Moet ik dan iets doen?",
    a: "U heeft geen verplichte risicoanalyse, maar wel een zorgplicht op grond van de Drinkwaterwet. Als eigenaar van een collectief leidingnet bent u verantwoordelijk voor de kwaliteit van het water dat uit uw kranen komt. Een compacte risicoanalyse met een eenvoudig beheersplan is dan de meest praktische manier om die verantwoordelijkheid in te vullen.",
  },
];

const growthFactors = [
  {
    title: "Stilstand",
    text: "Water dat langer dan een week stilstaat, verliest zijn desinfecterende restwerking en warmt op tot omgevingstemperatuur.",
  },
  {
    title: "Temperatuur",
    text: "Tussen ongeveer 25 en 45 graden vermeerdert legionella zich het snelst. Te koud warm water en te warm koud water zijn beide een probleem.",
  },
  {
    title: "Biofilm en sediment",
    text: "Een laagje biofilm of sediment biedt beschutting en voedingsstoffen. Desinfectiemiddelen bereiken de bacterie daar veel moeilijker.",
  },
  {
    title: "Aerosolvorming",
    text: "Douches, sproeiers, bubbelbaden en hogedrukreinigers verspreiden de bacterie in de lucht. Zonder aerosolen geen besmetting.",
  },
];

export default function LegionellapreventiePage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Kennisdossier"
        title="Legionellapreventie: van wettelijke plicht naar werkende praktijk"
        text="Wat de regels van u vragen, waar het in de praktijk misgaat en welke maatregelen daadwerkelijk effect hebben. Het complete overzicht."
        actions={
          <>
            <PrimaryButton href="/contact">Vrijblijvend advies</PrimaryButton>
            <SecondaryButton href="/diensten/risicoanalyse-en-beheersplan" variant="dark">
              Risicoanalyse aanvragen
            </SecondaryButton>
          </>
        }
      />

      <Section>
        <Breadcrumbs items={[{ label: "Legionellapreventie", href: "/legionellapreventie" }]} />

        <div className="grid grid-cols-[1fr_320px] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <article className="prose-cws max-w-[720px]">
            <h2>Waarom legionellapreventie ertoe doet</h2>
            <p>
              Het drinkwater dat uw pand binnenkomt is veilig. Wat daarna gebeurt, is uw
              verantwoordelijkheid. In het leidingnet achter de watermeter kan de
              legionellabacterie zich onder de juiste omstandigheden in korte tijd
              vermeerderen tot aantallen die een gezondheidsrisico opleveren.
            </p>
            <p>
              In Nederland worden jaarlijks enkele honderden gevallen van
              legionellalongontsteking gemeld. Een deel daarvan is te herleiden tot
              installaties in gebouwen: hotels, zorginstellingen, sportaccommodaties,
              zwembaden en industriële locaties. Voor de eigenaar van zo'n installatie is
              dat niet alleen een gezondheidskwestie, maar ook een juridische en
              reputatiekwestie.
            </p>

            <h2>De vier factoren waar het om draait</h2>
            <p>
              Legionellapreventie klinkt ingewikkeld, maar draait in de kern om vier
              factoren. Haal er één weg en het risico daalt drastisch.
            </p>
            <ul>
              <li>Stilstand: zorg voor doorstroming op elk tappunt</li>
              <li>Temperatuur: houd koud water koud en warm water warm</li>
              <li>Voedingsbodem: verwijder sediment en biofilm</li>
              <li>Blootstelling: beperk aerosolvorming waar dat kan</li>
            </ul>

            <h2>Wat de wet van u vraagt</h2>
            <p>
              De basis ligt in de Drinkwaterwet en het Drinkwaterbesluit. Daarin staat de
              zorgplicht: wie een collectief leidingnet bezit, moet ervoor zorgen dat het
              water deugdelijk is. Voor een aangewezen groep locaties, de prioritaire
              instellingen, is dat uitgewerkt in concrete verplichtingen.
            </p>
            <h3>Verplichtingen voor prioritaire instellingen</h3>
            <ul>
              <li>Een legionella risicoanalyse door een BRL 6010 gecertificeerd bureau</li>
              <li>Een beheersplan met per risicopunt een concrete beheersmaatregel</li>
              <li>Aantoonbare uitvoering van dat beheersplan, vastgelegd in een logboek</li>
              <li>Minimaal twee keer per jaar geaccrediteerde monstername op legionella</li>
              <li>Maatregelen bij overschrijding en melding bij de ILT boven 1000 kve/l</li>
            </ul>
            <h3>Normen en richtlijnen die daarbij horen</h3>
            <ul>
              <li>NEN 1006: algemene voorschriften voor leidingwaterinstallaties</li>
              <li>Waterwerkbladen, waaronder 1.4G voor het beheer van installaties</li>
              <li>BRL 6010: legionellapreventie-advisering voor collectieve installaties</li>
              <li>BRL-K14032: reiniging en desinfectie van leidingwaterinstallaties</li>
              <li>ISSO 55.1: praktijkrichtlijn voor legionellapreventie in leidingwater</li>
              <li>NEN 6265: monsterneming en analyse op legionella</li>
            </ul>

            <h2>De meest voorkomende tekortkomingen</h2>
            <p>
              In de installaties die wij inspecteren komen steeds dezelfde punten terug.
              Herkent u er één, dan is de kans groot dat er meer speelt.
            </p>
            <ul>
              <li>Dode leidingen die na een verbouwing zijn blijven zitten</li>
              <li>Koudwaterleidingen die naast of onder warmwaterleidingen liggen</li>
              <li>Warmwatertoestellen die op 55 graden staan in plaats van 60</li>
              <li>Tappunten die maandenlang niet worden gebruikt en niet worden gespoeld</li>
              <li>Boilers waar het sediment jarenlang niet uit is verwijderd</li>
              <li>Keerkleppen die nooit zijn gecontroleerd sinds de oplevering</li>
              <li>Een logboek dat alleen wordt bijgewerkt vlak voor de inspectie</li>
            </ul>

            <h2>Van analyse naar aantoonbaar beheer</h2>
            <p>
              Een risicoanalyse is de foto, het beheersplan is de film. De analyse laat
              zien hoe uw installatie er nu voor staat en waar de risico's zitten. Het
              beheersplan beschrijft wat er structureel moet gebeuren om die risico's
              beheerst te houden: welke tappunten wanneer worden gespoeld, welke
              temperaturen worden gemeten, wanneer de keerkleppen worden gecontroleerd en
              waar de monsters worden genomen.
            </p>
            <p>
              De praktijk laat zien dat het beheersplan vaker faalt op uitvoering dan op
              inhoud. Een plan dat te veel vraagt van een technische dienst die het al
              druk heeft, wordt na een paar maanden niet meer gevolgd. Wij schrijven
              beheersplannen daarom bewust compact en concreet, met een spoelroute die in
              een vaste ronde te lopen is.
            </p>

            <h2>Wat te doen bij een overschrijding</h2>
            <p>
              Een uitslag boven de 100 kve/l vraagt om actie. Handel dan in deze volgorde:
            </p>
            <ul>
              <li>Beperk de blootstelling: sluit risicovolle tappunten af of plaats filters</li>
              <li>Achterhaal de oorzaak in plaats van meteen te desinfecteren</li>
              <li>Voer de passende maatregel uit: spoelen, temperatuurcorrectie of desinfectie</li>
              <li>Bemonster opnieuw om aan te tonen dat het resultaat is behaald</li>
              <li>Werk de risicoanalyse en het beheersplan bij zodat het niet terugkomt</li>
              <li>Meld bij de ILT wanneer de waarde boven 1000 kve/l uitkomt</li>
            </ul>
            <p>
              Blind desinfecteren zonder de oorzaak aan te pakken levert vrijwel altijd een
              herhaling op, meestal binnen een half jaar. Dat kost uiteindelijk meer dan
              het in één keer goed oplossen.
            </p>
          </article>

          <aside className="grid content-start gap-6">
            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Kort samengevat</h2>
              <CheckList
                className="mt-5 text-[15px]"
                items={[
                  "Koud water onder 25 °C, warm water minimaal 60 °C",
                  "Wekelijks spoelen van weinig gebruikte tappunten",
                  "Jaarlijks sediment uit boilers en keerkleppen controleren",
                  "Prioritair? Twee keer per jaar bemonsteren",
                  "Boven 1000 kve/l: melden bij de ILT",
                ]}
              />
            </Card>
            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Hulp nodig?</h2>
              <p className="mt-3 text-[15px] leading-[1.6em]">
                Wij voeren de risicoanalyse uit, schrijven het beheersplan en kunnen de
                uitvoering volledig overnemen.
              </p>
              <div className="mt-5">
                <PrimaryButton href="/contact">Neem contact op</PrimaryButton>
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Groeifactoren"
          title="Waarom legionella juist in gebouwen een kans krijgt"
        />
        <div className="mt-12 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {growthFactors.map((f) => (
            <Card key={f.title} className="p-8 max-sm:p-6">
              <h3 className="text-[20px]">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6em]">{f.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead
          eyebrow="Diensten"
          title="Zo pakken wij legionellapreventie voor u op"
          cta={<SecondaryButton href="/diensten">Alle diensten</SecondaryButton>}
        />
        <div className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} href={`/diensten/${s.slug}`} className="group">
              <Card className="flex h-full flex-col p-7">
                <h3 className="text-[19px] leading-[1.3em]">{s.name}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-[1.55em]">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-primary">
                  Meer info
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Per branche"
          title="Wat geldt er voor uw type gebouw?"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {branches.map((b) => (
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

      <Section className="pt-0">
        <div className="mx-auto max-w-[860px]">
          <h2 className="text-center">Veelgestelde vragen over legionella</h2>
          <Faq items={faqs} className="mt-10" />
        </div>
      </Section>

      <CtaSection />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
