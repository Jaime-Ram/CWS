import { notFound } from "next/navigation";
import HeroSplit from "@/components/HeroSplit";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Newsletter from "@/components/Newsletter";
import { NumberedAccordion } from "@/components/Tabs";
import { ImageLeftItem, VisualCard } from "@/components/blocks";
import {
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
      <HeroSplit
        eyebrow={service.eyebrow}
        title={service.h1}
        text={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        actions={
          <>
            <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
            <SecondaryButton href={site.phoneHref}>Bel {site.phone}</SecondaryButton>
          </>
        }
      />

      <Section>
        <Breadcrumbs
          items={[
            { label: "Diensten", href: "/diensten" },
            { label: service.name, href: `/diensten/${service.slug}` },
          ]}
        />

        <div className="mx-auto max-w-[740px]">
          <article className="prose-cws">
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

            <h2>Wat u van ons krijgt</h2>
            <ul>
              {service.usps.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </article>
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
                  image={b.image}
                imageAlt={b.imageAlt}
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
                  image={r.image}
                imageAlt={r.imageAlt}
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
