import { notFound } from "next/navigation";
import { HeroPanel } from "@/components/heroes";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { NumberedAccordion } from "@/components/Tabs";
import { PortfolioCard } from "@/components/blocks";
import { PrimaryButton, SecondaryButton, Section, SectionHead } from "@/components/ui";
import { getService, services } from "@/data/services";
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

  return (
    <>
      <HeroPanel
        eyebrow={service.eyebrow}
        title={service.h1}
        text={service.intro}
        details={[
          { label: "Dienst", value: service.navName },
          { label: "Norm", value: service.eyebrow },
          { label: "Werkgebied", value: "Heel Nederland" },
          { label: "Uitvoering", value: "Ook buiten kantooruren" },
        ]}
      />

      <Section className="pt-0">
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

          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
            <SecondaryButton href={site.phoneHref}>Bel {site.phone}</SecondaryButton>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
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
        <SectionHead
          eyebrow="Ook interessant"
          title="Gerelateerde diensten"
          cta={<SecondaryButton href="/diensten">Alle diensten</SecondaryButton>}
        />
        <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {related.map((r) => (
            <PortfolioCard
              key={r.slug}
              href={`/diensten/${r.slug}`}
              title={r.name}
              text={r.summary}
              badge={r.eyebrow}
              image={r.image}
              imageAlt={r.imageAlt}
            />
          ))}
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
