import Link from "next/link";
import { notFound } from "next/navigation";
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
} from "@/components/ui";
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

          <aside className="grid content-start gap-6">
            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Wat u krijgt</h2>
              <CheckList items={service.usps} className="mt-5 text-[15px]" />
              <div className="divider my-6" />
              <PrimaryButton href="/contact">Vrijblijvend advies</PrimaryButton>
            </Card>

            <Card className="p-8 max-sm:p-6">
              <h2 className="text-[20px]">Direct contact</h2>
              <p className="mt-3 text-[15px] leading-[1.6em]">
                Liever even overleggen voordat u iets aanvraagt? Bel gerust, ook als u nog
                niet precies weet wat u nodig heeft.
              </p>
              <div className="mt-5 grid gap-2 text-[15px]">
                <a href={site.phoneHref} className="font-semibold text-primary">
                  {site.phone}
                </a>
                <a href={site.mobileHref} className="font-semibold text-primary">
                  {site.mobile}
                </a>
                <a href={`mailto:${site.email}`} className="break-all font-semibold text-primary">
                  {site.email}
                </a>
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-[860px]">
          <h2 className="text-center">Veelgestelde vragen over {service.navName.toLowerCase()}</h2>
          <Faq items={service.faqs} className="mt-10" />
        </div>
      </Section>

      <Section className="pt-0">
        <h2>Ook interessant</h2>
        <div className="mt-8 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {related.map((r) => (
            <Link key={r.slug} href={`/diensten/${r.slug}`} className="group">
              <Card className="flex h-full flex-col p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(31,47,84,0.25)]">
                <h3 className="text-[20px]">{r.name}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-[1.6em]">{r.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-primary">
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
          name: service.name,
          description: service.metaDescription,
          path: `/diensten/${service.slug}`,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
    </>
  );
}
