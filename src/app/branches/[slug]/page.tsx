import { notFound } from "next/navigation";
import { HeroPost } from "@/components/heroes";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { MilestoneList, PortfolioCard, TeamCard } from "@/components/blocks";
import { Card, CheckList, PrimaryButton, SecondaryButton, Section, SectionHead } from "@/components/ui";
import { branches, getBranch } from "@/data/branches";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata, serviceSchema } from "@/lib/seo";

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = getBranch(slug);
  if (!branch) return {};
  return pageMetadata({
    title: branch.metaTitle,
    description: branch.metaDescription,
    path: `/branches/${branch.slug}`,
    keywords: branch.keywords,
  });
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = getBranch(slug);
  if (!branch) notFound();

  const linkedServices = branch.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const others = branches.filter((b) => b.slug !== branch.slug).slice(0, 4);

  return (
    <>
      <HeroPost
        badge={branch.priority ? "Prioritaire instelling" : "Zorgplicht"}
        title={branch.h1}
        text={branch.intro}
        image={branch.image}
        imageAlt={branch.imageAlt}
        card={
          <>
            <span>
              <span className="block text-[15px] text-neutral-500">Direct advies</span>
              <a href={site.phoneHref} className="mt-1 block text-[20px] font-semibold text-primary">
                {site.phone}
              </a>
            </span>
            <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
          </>
        }
      />

      <Section className="pt-0">
        <Breadcrumbs
          items={[
            { label: "Branches", href: "/branches" },
            { label: branch.shortName, href: `/branches/${branch.slug}` },
          ]}
        />

        <SectionHead
          eyebrow="Risicopunten"
          title={`Waar het misgaat bij ${branch.shortName.toLowerCase()}`}
          text="Dit zijn de plekken waar wij in deze branche het vaakst een overschrijding zien ontstaan."
        />
        <div className="mt-10 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {branch.risks.map((r) => (
            <Card key={r.title} className="p-8 max-sm:p-6">
              <h3 className="text-[20px] leading-[1.25em]">{r.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6em]">{r.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-[24px] bg-neutral-200/60 p-12 max-md:rounded-[18px] max-sm:p-6">
          <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <div>
              <SectionHead
                eyebrow={branch.priority ? "Wettelijk verplicht" : "Uw verantwoordelijkheid"}
                title="Wat er van u wordt verwacht"
                text={
                  branch.priority
                    ? "Als prioritaire instelling gelden voor u de eisen uit het Drinkwaterbesluit. De Inspectie Leefomgeving en Transport houdt daar toezicht op."
                    : "U bent geen prioritaire instelling, maar de zorgplicht uit de Drinkwaterwet geldt onverkort. U bent verantwoordelijk voor het water uit uw kranen."
                }
              />
              <div className="mt-8">
                <CheckList items={branch.obligations} />
              </div>
            </div>
            <Card className="p-10 max-sm:p-6">
              <h2 className="text-[24px]">Hoe wij dit in uw branche oppakken</h2>
              <p className="mt-4 leading-[1.65em]">{branch.approach}</p>
              <div className="divider my-7" />
              <PrimaryButton href="/contact">Plan een inventarisatie</PrimaryButton>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-[1fr_1.15fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead
              eyebrow="Het traject"
              title="Van eerste bezoek tot doorlopend beheer"
              text="Zo verloopt een opdracht bij ons, ongeacht de omvang van uw installatie."
            />
            <div className="mt-8">
              <SecondaryButton href="/contact">Start met stap 1</SecondaryButton>
            </div>
          </div>
          <MilestoneList
            items={[
              {
                badge: "Stap 1",
                title: "Inventarisatie en offerte",
                text: "Een korte inventarisatie van uw gebouw en installatie, met daarna een vaste prijs zonder verrassingen.",
                image: "/images/fotos/laptop-werkplek.jpg",
                imageAlt: "Inventarisatie van de opdracht",
              },
              {
                badge: "Stap 2",
                title: "Analyse op locatie",
                text: "Een adviseur loopt de installatie na, meet temperaturen en legt elk tappunt fotografisch vast.",
                image: "/images/fotos/inspectie-clipboard.jpg",
                imageAlt: "Analyse van de installatie op locatie",
              },
              {
                badge: "Stap 3",
                title: "Rapport en beheersplan",
                text: "Een rapport met prioritering en een beheersplan dat uw eigen mensen kunnen uitvoeren.",
                image: "/images/fotos/bedieningspaneel.jpg",
                imageAlt: "Beheersplan en registratie",
              },
              {
                badge: "Stap 4",
                title: "Uitvoering en controle",
                text: "Beheersmaatregelen, monstername en actualisatie zodra de installatie wijzigt.",
                image: "/images/fotos/watermonster-lab.jpg",
                imageAlt: "Monstername en analyse",
              },
            ]}
          />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead
          eyebrow="Relevante diensten"
          title={`Wat wij doen voor ${branch.shortName.toLowerCase()}`}
          cta={<SecondaryButton href="/diensten">Alle diensten</SecondaryButton>}
        />
        <div className="mt-12 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {linkedServices.map((s) => (
            <PortfolioCard
              key={s.slug}
              href={`/diensten/${s.slug}`}
              title={s.navName}
              text={s.summary}
              badge={s.eyebrow}
              image={s.image}
              imageAlt={s.imageAlt}
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead
          center
          eyebrow="Andere branches"
          title="Werkt u ook op een andere locatie?"
        />
        <div className="mt-12 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {others.map((b) => (
            <TeamCard
              key={b.slug}
              href={`/branches/${b.slug}`}
              name={b.shortName}
              role={b.priority ? "Prioritaire instelling" : "Zorgplicht"}
              image={b.image}
              imageAlt={b.imageAlt}
            />
          ))}
        </div>
      </Section>

      <CtaSection />

      <JsonLd
        data={serviceSchema({
          name: `Legionellapreventie voor ${branch.name}`,
          description: branch.metaDescription,
          path: `/branches/${branch.slug}`,
        })}
      />
    </>
  );
}
