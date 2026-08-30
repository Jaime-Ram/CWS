import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CheckList, PrimaryButton, Section, SectionHead } from "@/components/ui";
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

export default function OverOnsPage() {
  return (
    <>
      <Hero
        compact
        eyebrow={`Sinds ${site.founded}`}
        title="Adviesbureau voor waterinstallaties"
        text="Wij zijn een gespecialiseerd bureau, geen aannemer die er legionella bij doet. Dat verschil merkt u aan het advies dat u krijgt."
        actions={<PrimaryButton href="/contact">Neem contact op</PrimaryButton>}
      />

      <Section>
        <Breadcrumbs items={[{ label: "Over ons", href: "/over-ons" }]} />

        <div className="grid grid-cols-[1fr_360px] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <article className="prose-cws max-w-[720px]">
            <h2>Waar wij voor staan</h2>
            <p>
              Veilig en schoon drinkwater is in Nederland vanzelfsprekend. Er zijn maar
              weinig mensen die weten wat er allemaal bij komt kijken om elk moment van de
              dag betrouwbaar drinkwater uit de kraan te laten komen. Drinkwaterinstallaties
              moeten volgens de daarvoor geldende regels worden aangelegd, onderhouden en
              beheerd. Zodra daar iets in schuift, verandert een installatie van
              nutsvoorziening in risicofactor.
            </p>
            <p>
              Clean Water Systems houdt zich sinds {site.founded} bezig met
              legionellapreventie en heeft ruime ervaring met en deskundigheid van
              drinkwaterinstallaties. Dat biedt u de garantie dat wij snel en discreet
              professioneel advies kunnen geven, ook bij een legionella-uitbraak, met een
              blijvend resultaat als doel.
            </p>

            <h2>Hoe wij werken</h2>
            <p>
              Wij nemen alleen opdrachten aan waarin wij zijn gespecialiseerd. Dat klinkt
              beperkend, maar het is precies de reden dat wij een installatie sneller
              doorgronden dan een partij die van alles een beetje doet. Waar wij niet de
              juiste partij voor zijn, zeggen we dat en verwijzen we door.
            </p>
            <h3>Wat u van ons mag verwachten</h3>
            <ul>
              <li>Snelle en deskundige uitvoering, ook buiten kantooruren</li>
              <li>Werken volgens de normen van BRL 6010 en BRL-K14032</li>
              <li>Heldere rapportages met een prioritering, geen lijst zonder duiding</li>
              <li>Praktische oplossingen die uw technische dienst kan uitvoeren</li>
              <li>Landelijke dekking vanuit {site.address.city}</li>
              <li>Eerlijk advies, ook als de conclusie is dat u minder nodig heeft dan u dacht</li>
            </ul>

            <h2>Onze garanties</h2>
            <h3>Garantie op desinfectie</h3>
            <p>
              Voldoet uw leidingsysteem aan de eisen uit de BRL 6010, dan geven wij
              garantie op de desinfectie. Blijkt uit de controlemonsters dat het resultaat
              niet is behaald, dan komen wij terug.
            </p>
            <h3>Tevredenheidsgarantie</h3>
            <p>
              Clean Water Systems is pas tevreden als u dat ook bent. Is er iets niet
              gegaan zoals afgesproken, dan lossen we dat op zonder discussie over de
              factuur.
            </p>
            <h3>Snelle reactie bij een uitbraak</h3>
            <p>
              Bij een aangetoonde legionella-overschrijding voeren wij indien nodig binnen
              24 uur een desinfectie uit. Bel in dat geval direct het mobiele nummer, ook
              in het weekend.
            </p>
          </article>

          <aside className="grid content-start gap-6">
            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Bedrijfsgegevens</h2>
              <dl className="mt-5 grid gap-4 text-[15px]">
                <div>
                  <dt className="text-neutral-500">Naam</dt>
                  <dd className="mt-0.5 font-medium text-neutral-800">{site.legalName}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Vestiging</dt>
                  <dd className="mt-0.5 leading-[1.6em] text-neutral-800">
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Actief sinds</dt>
                  <dd className="mt-0.5 font-medium text-neutral-800">{site.founded}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Werkgebied</dt>
                  <dd className="mt-0.5 font-medium text-neutral-800">Heel Nederland</dd>
                </div>
              </dl>
            </Card>
            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Normen waarmee wij werken</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {site.certifications.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-neutral-200 px-3.5 py-1.5 text-[14px] font-medium text-neutral-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <SectionHead
            eyebrow="Resultaat"
            title="Wij leveren de kwaliteit die u verwacht"
            text="En nemen alleen opdrachten aan waar we in gespecialiseerd zijn. Dat is de kortste weg naar een installatie die daadwerkelijk veilig is."
          />
          <Card className="p-10 max-sm:p-6">
            <CheckList
              items={[
                "Kiwa-ATA goedgekeurde reinigings- en desinfectiemiddelen",
                "Desinfectie altijd via de wettelijk voorgeschreven fysieke onderbreking",
                "Van 1 tot 1000 tappunten, snel en vakkundig",
                "Volledige registratie voor uw logboek",
              ]}
            />
          </Card>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
