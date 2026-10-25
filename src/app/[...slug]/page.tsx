import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSmall } from "@/components/heroes";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import {
  ContentBlocks,
  ImageCard,
  ReasonsWhy,
  ReviewGrid,
  ReviewSummary,
  ServiceGuarantees,
  SideNav,
  StandingFor,
} from "@/components/content";
import {
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHead,
} from "@/components/ui";
import {
  childrenOf,
  excerpt,
  getPage,
  pages,
  parentOf,
  products,
  shortName,
  siblingsOf,
  type ContentPage,
} from "@/content";
import { site } from "@/data/site";
import { pageMetadata, serviceSchema } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.filter((p) => p.slug).map((p) => ({ slug: p.slug.split("/") }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    absolute: true,
  });
}

function crumbsFor(page: ContentPage): Crumb[] {
  const trail: Crumb[] = [];
  let p: ContentPage | undefined = page;
  while (p) {
    trail.unshift({ label: shortName(p), href: `/${p.slug}` });
    p = parentOf(p);
  }
  if (page.kind === "landing")
    trail.unshift({ label: "Sitemap", href: "/sitemap" });
  return trail;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) notFound();

  const href = `/${page.slug}`;

  return (
    <>
      <HeroSmall
        title={page.h1}
        text={page.description}
        actions={
          <>
            <PrimaryButton href="/offerte-aanvragen">
              Offerte aanvragen
            </PrimaryButton>
            <SecondaryButton href={site.phoneHref} variant="dark">
              Bel {site.phone}
            </SecondaryButton>
          </>
        }
      />

      <Section className="pt-12">
        <Breadcrumbs items={crumbsFor(page)} />
        {page.kind === "product" ? (
          <ProductBody page={page} />
        ) : page.kind === "form" ? (
          <FormBody page={page} />
        ) : page.kind === "reviews" ? (
          <ReviewsBody page={page} />
        ) : (
          <div className="grid grid-cols-[minmax(0,1fr)_320px] gap-14 max-lg:grid-cols-1 max-lg:gap-10">
            <article className="min-w-0">
              <ContentBlocks blocks={page.blocks} poster={page.image} />
            </article>
            <SideNav current={href} />
          </div>
        )}
      </Section>

      {page.slug === "legionella-douchekoppen" && <ProductGrid />}
      <RelatedLanding page={page} />

      {page.kind !== "legal" && page.kind !== "form" && (
        <>
          <StandingFor />
          <ReasonsWhy />
          <ServiceGuarantees />
        </>
      )}
      <CtaSection />

      {(page.kind === "page" || page.kind === "landing") && (
        <JsonLd
          data={serviceSchema({
            name: page.h1,
            description: page.description,
            path: href,
          })}
        />
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */

function ProductBody({ page }: { page: ContentPage }) {
  const p = page.product!;
  return (
    <div className="grid grid-cols-[1fr_1fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-10">
      <div className="grid gap-4">
        {p.images.map((src, i) => (
          <div
            key={src}
            className="card relative aspect-square overflow-hidden bg-white p-6"
          >
            <Image
              src={src}
              alt={`${page.h1}${i ? ` (${i + 1})` : ""}`}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-contain p-6"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="card p-8 max-sm:p-6">
          <h2 className="text-[26px]">{page.h1}</h2>
          {p.articleNumber && (
            <p className="mt-2 text-[15px] text-neutral-500">
              Artikelnummer: {p.articleNumber}
            </p>
          )}
          {p.price && (
            <p className="mt-5 flex items-baseline gap-2">
              <span className="text-[34px] font-semibold leading-none text-neutral-800">
                € {p.price}
              </span>
              <span className="text-[15px] text-neutral-500">Excl. BTW</span>
            </p>
          )}
          {p.shipping && (
            <p className="mt-3 text-[15px] text-neutral-600">{p.shipping}</p>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryButton href="/offerte-aanvragen">
              Offerte aanvragen
            </PrimaryButton>
            <SecondaryButton href="/contact">Direct contact</SecondaryButton>
          </div>
        </div>
        <div className="mt-10">
          <ContentBlocks blocks={page.blocks} poster={page.image} />
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <Section className="pt-0">
      <SectionHead title="Onze legionella douchekoppen" />
      <div className="mt-10 grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/${p.slug}`}
            className="card group block p-3"
          >
            <div className="relative aspect-square overflow-hidden rounded-[14px] bg-white">
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.h1}
                  fill
                  sizes="(max-width: 639px) 100vw, 25vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              )}
            </div>
            <div className="p-2 pt-4">
              <h3 className="text-[17px]">{p.h1}</h3>
              {p.product?.price && (
                <p className="mt-1 text-[15px] text-neutral-600">
                  € {p.product.price}{" "}
                  <span className="text-neutral-500">excl. btw</span>
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

const subjectFor: Record<string, string> = {
  "offerte-aanvragen": "Offerte aanvragen",
  "afspraak-maken": "Afspraak maken",
  contact: "Contact",
};

function FormBody({ page }: { page: ContentPage }) {
  const hasAddress = page.blocks.some(
    (b) => b.type === "html" && b.html.includes(site.address.street),
  );
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_1.2fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-10">
      <div>
        <ContentBlocks blocks={page.blocks} />
        {!hasAddress && (
          <div className="card mt-8 p-6">
            <h2 className="mb-3 text-[18px]">{site.legalName}</h2>
            <p className="text-[15px] leading-[1.7em]">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
              <br />
              <a href={site.phoneHref} className="font-semibold text-primary">
                {site.phone}
              </a>{" "}
              of{" "}
              <a href={site.mobileHref} className="font-semibold text-primary">
                {site.mobile}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="text-primary">
                {site.email}
              </a>
            </p>
          </div>
        )}
      </div>
      <div className="card p-8 max-sm:p-5">
        <ContactForm defaultSubject={subjectFor[page.slug]} />
      </div>
    </div>
  );
}

function ReviewsBody({ page }: { page: ContentPage }) {
  return (
    <div>
      <ReviewSummary />
      <div className="mt-10">
        <ReviewGrid />
      </div>
      {page.blocks.length > 0 && (
        <div className="mt-12 max-w-[760px]">
          <ContentBlocks blocks={page.blocks} />
        </div>
      )}
    </div>
  );
}

/** Onderwerp-landingspagina's tonen hun steden/branches, kinderen hun buren. */
function RelatedLanding({ page }: { page: ContentPage }) {
  if (page.kind !== "landing") return null;
  const kids = childrenOf(page);
  const list = kids.length ? kids : siblingsOf(page);
  if (!list.length) return null;
  const parent = parentOf(page);
  return (
    <Section className="pt-0">
      <SectionHead
        title="Lees ook"
        cta={
          parent ? (
            <SecondaryButton href={`/${parent.slug}`}>
              {shortName(parent)}
            </SecondaryButton>
          ) : undefined
        }
      />
      <div className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {list.map((c) => (
          <ImageCard
            key={c.slug}
            card={{
              title: c.h1,
              text: excerpt(c, 120),
              image: null,
              href: `/${c.slug}`,
            }}
            cta="Lees meer"
          />
        ))}
      </div>
    </Section>
  );
}
