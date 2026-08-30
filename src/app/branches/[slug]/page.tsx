import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
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
        <div className="mt-10 grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {branch.risks.map((r) => (
            <Card key={r.title} className="p-8 max-sm:p-6">
              <h3 className="text-[20px]">{r.title}</h3>
              <p className="mt-3 leading-[1.6em]">{r.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
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
            <div className="eyebrow text-primary">Onze aanpak</div>
            <h2 className="mt-2 text-[24px]">Hoe wij dit in uw branche oppakken</h2>
            <p className="mt-4 leading-[1.65em]">{branch.approach}</p>
            <div className="divider my-7" />
            <PrimaryButton href="/contact">Plan een inventarisatie</PrimaryButton>
          </Card>
        </div>
      </Section>

      <Section className="pt-0">
        <h2>Relevante diensten voor {branch.shortName.toLowerCase()}</h2>
        <div className="mt-8 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {linkedServices.map((s) => (
            <Link key={s.slug} href={`/diensten/${s.slug}`} className="group">
              <Card className="flex h-full flex-col p-6 transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(31,47,84,0.25)]">
                <h3 className="text-[18px] leading-[1.3em]">{s.navName}</h3>
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
