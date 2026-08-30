import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Newsletter from "@/components/Newsletter";
import Visual from "@/components/Visual";
import { NumberedAccordion } from "@/components/Tabs";
import { Badge, CardCta, ImageLeftItem, VisualCard } from "@/components/blocks";
import {
  Card,
  CheckList,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHead,
} from "@/components/ui";
import { getService, services } from "@/data/services";
import { branches } from "@/data/branches";
import { site } from "@/data/site";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/diensten/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((r) => getService(r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relevantBranches = branches
    .filter((b) => b.services.includes(service.slug))
    .slice(0, 4);

  return (
    <>
      <Hero
        compact
        eyebrow={service.eyebrow}
        title={service.h1}
        text={service.intro}
        actions={
          <>
            <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
            <SecondaryButton href={site.phoneHref} variant="dark">
              Bel {site.phone}
            </SecondaryButton>
          </>
        }
        aside={
          <div className="w-[320px] overflow-hidden rounded-[24px] border border-white/12 max-lg:w-full">
            <Visual name={service.visual} tone="dark" className="block aspect-[4/3] w-full" />
          </div>
        }
      />

      <Section>
        <Breadcrumbs
          items={[
            { label: "Diensten", href: "/diensten" },
            { label: service.name, href: `/diensten/${service.slug}` },
          ]}
        />

        <div className="grid grid-cols-[1fr_360px] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <article className="prose-cws max-w-[720px]">
            {service.sections.map((section) => (
              <section key={section.h2}>
                <h2>{section.h2}</h2>
                {section.blocks.map((block, i) => {
                  if (block.type === "p") return <p key={i}>{block.text}</p>;
                  if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
                  return (
                    <ul key={i}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                })}
              </section>
            ))}
          </article>

          <aside className="grid content-start gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            <Card className="p-8 max-sm:p-6">
              <Badge>Inbegrepen</Badge>
              <h2 className="mt-4 text-[20px]">Wat u krijgt</h2>
              <CheckList items={service.usps} className="mt-5 text-[15px]" />
              <div className="divider my-6" />
              <PrimaryButton href="/contact">Vrijblijvend advies</PrimaryButton>
            </Card>

            <CardCta
              visual={service.visual}
              eyebrow="Direct contact"
              title="Liever eerst even overleggen?"
              text="Bel gerust, ook als u nog niet precies weet wat u nodig heeft. Wij denken mee zonder verplichting."
              action={
                <div className="grid gap-1.5">
                  <a href={site.phoneHref} className="text-[20px] font-semibold text-white">
                    {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="break-all text-[15px] text-neutral-300">
                    {site.email}
                  </a>
                </div>
              }
            />
          </aside>
        </div>
      </Section>

      {relevantBranches.length > 0 && (
        <Section className="bg-neutral-200/50 pt-0">
          <div className="pt-24 max-md:pt-16">
            <SectionHead
              eyebrow="Per branche"
              title={`${service.navName} in uw situatie`}
              text="De uitvoering verschilt per type gebouw. Bekijk wat er specifiek voor uw branche geldt."
              cta={<SecondaryButton href="/branches">Alle branches</SecondaryButton>}
            />
            <div className="mt-10 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {relevantBranches.map((b) => (
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
          </div>
        </Section>
      )}

      <Section>
        <SectionHead
              eyebrow="Veelgestelde vragen"
              title={`Over ${service.navName.toLowerCase()}`}
              cta={<SecondaryButton href="/veelgestelde-vragen">Alle vragen</SecondaryButton>}
            />
            <div className="mt-12">
              <NumberedAccordion items={service.faqs} />
            </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-[1fr_1.1fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHead eyebrow="Ook interessant" title="Gerelateerde diensten" />
            <div className="mt-8 grid gap-7">
              {related.map((r) => (
                <ImageLeftItem
                  key={r.slug}
                  href={`/diensten/${r.slug}`}
                  visual={r.visual}
                  title={r.name}
                  badge={r.eyebrow}
                />
              ))}
            </div>
          </div>
          <Newsletter />
        </div>
      </Section>

      <CtaSection />

      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path: `/diensten/${service.slug}`,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
    </>
  );
}
