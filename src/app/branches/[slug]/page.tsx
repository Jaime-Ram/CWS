import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Media from "@/components/Media";
import JsonLd from "@/components/JsonLd";
import { MilestoneList, Badge, CardCta, ImageLeftItem, VisualCard } from "@/components/blocks";
import {
  Card,
  CheckList,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHead,
} from "@/components/ui";
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
      <Hero
        compact
        eyebrow={branch.priority ? "Prioritaire instelling" : "Zorgplicht"}
        title={branch.h1}
        text={branch.intro}
        actions={
          <>
            <PrimaryButton href="/contact">Vrijblijvend advies</PrimaryButton>
            <SecondaryButton href={site.phoneHref} variant="dark">
              Bel {site.phone}
            </SecondaryButton>
          </>
        }
        aside={
          <div className="w-[320px] overflow-hidden rounded-[24px] border border-white/12 max-lg:w-full">
            <Media alt={branch.imageAlt} tone="dark" ratio="4/3" className="block aspect-[4/3] w-full" />
          </div>
        }
      />

      <Section>
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
            <Card key={r.title} className="flex flex-col overflow-hidden p-3">
              <span className="overflow-hidden rounded-[20px]">
                <Media alt={`Risicopunt: ${r.title.toLowerCase()}`} ratio="4/3" className="w-full" />
              </span>
              <span className="flex flex-1 flex-col p-5 pt-6 max-sm:p-4">
                <span className="text-[20px] font-semibold leading-[1.25em] text-neutral-800">
                  {r.title}
                </span>
                <span className="mt-3 text-[15px] leading-[1.6em] text-neutral-600">{r.text}</span>
              </span>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-200/50 pt-0">
        <div className="grid grid-cols-2 gap-16 pt-24 max-lg:grid-cols-1 max-lg:gap-10 max-md:pt-16">
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
            <Badge>Onze aanpak</Badge>
            <h2 className="mt-4 text-[24px]">Hoe wij dit in uw branche oppakken</h2>
            <p className="mt-4 leading-[1.65em]">{branch.approach}</p>
            <div className="divider my-7" />
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Plan een inventarisatie</PrimaryButton>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-[1fr_1.15fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead
              eyebrow="Het traject"
              title="Van eerste bezoek tot doorlopend beheer"
              text="Zo verloopt een opdracht bij ons, ongeacht de omvang van uw installatie."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Start met stap 1</PrimaryButton>
            </div>
          </div>
          <MilestoneList
            items={[
              {
                badge: "Stap 1",
                imageAlt: "",
                title: "Inventarisatie en offerte",
                text: "Een korte inventarisatie van uw gebouw en installatie, met daarna een vaste prijs zonder verrassingen.",
              },
              {
                badge: "Stap 2",
                imageAlt: "",
                title: "Analyse op locatie",
                text: "Een adviseur loopt de installatie na, meet temperaturen en legt elk tappunt fotografisch vast.",
              },
              {
                badge: "Stap 3",
                imageAlt: "",
                title: "Rapport en beheersplan",
                text: "Een rapport met prioritering en een beheersplan dat uw eigen mensen kunnen uitvoeren.",
              },
              {
                badge: "Stap 4",
                imageAlt: "",
                title: "Uitvoering en controle",
                text: "Beheersmaatregelen, monstername en actualisatie zodra de installatie wijzigt.",
              },
            ]}
          />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-[1fr_1fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead
              eyebrow="Relevante diensten"
              title={`Wat wij doen voor ${branch.shortName.toLowerCase()}`}
            />
            <div className="mt-8 grid gap-7">
              {linkedServices.map((s) => (
                <ImageLeftItem
                  key={s.slug}
                  href={`/diensten/${s.slug}`}
                  imageAlt={s.imageAlt}
                  title={s.name}
                  badge={s.eyebrow}
                />
              ))}
            </div>
          </div>
          <CardCta
            eyebrow="Direct schakelen"
            title={`Vraag over uw ${branch.shortName.toLowerCase()}?`}
            text="Bel gerust. Wij kennen de praktijk in deze branche en zeggen eerlijk wat er wel en niet nodig is."
            action={
              <div className="grid gap-2">
                <a href={site.phoneHref} className="text-[24px] font-semibold text-white">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="break-all text-[15px] text-neutral-300">
                  {site.email}
                </a>
              </div>
            }
          />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead
          eyebrow="Andere branches"
          title="Werkt u ook op een andere locatie?"
          cta={<SecondaryButton href="/branches">Alle branches</SecondaryButton>}
        />
        <div className="mt-10 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {others.map((b) => (
            <VisualCard
              key={b.slug}
              href={`/branches/${b.slug}`}
              imageAlt={b.imageAlt}
              title={b.shortName}
              subtitle={b.name}
              badge={b.priority ? "Prioritair" : "Zorgplicht"}
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
