import Image from "next/image";
import Link from "next/link";
import VideoEmbed from "./VideoEmbed";
import { Badge } from "./blocks";
import { PrimaryButton, SecondaryButton, Section, SectionHead } from "./ui";
import { serviceLinks, site } from "@/data/site";
import { shared, type Block, type Card } from "@/content";

const DEFAULT_POSTER = "/images/oud/clean-water-systems-slide.webp";

/* -------------------------------------------------------------------------- */
/*  Tekst van de oude site: html-blokken in de prose-stijl, video's los        */
/* -------------------------------------------------------------------------- */

export function ContentBlocks({ blocks, poster }: { blocks: Block[]; poster?: string | null }) {
  return (
    <div className="prose-cws">
      {blocks.map((b, i) =>
        b.type === "youtube" ? (
          <div key={i} className="not-prose my-8">
            <VideoEmbed videoId={b.id} title={b.title || "Video"} poster={poster || DEFAULT_POSTER} />
          </div>
        ) : (
          <div key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
        ),
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Zijbalk zoals op de oude site: diensten, direct contact, offerte           */
/* -------------------------------------------------------------------------- */

export function SideNav({ current }: { current?: string }) {
  return (
    <aside className="grid content-start gap-5 lg:sticky lg:top-8">
      <nav aria-label="Onze diensten" className="card p-6">
        <h2 className="mb-3 text-[18px]">Onze diensten</h2>
        <ul className="grid gap-0.5">
          {serviceLinks.map((l) => {
            const active = current === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-[6px] px-3 py-[5px] text-[14px] transition-colors ${
                    active
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-neutral-600 hover:bg-neutral-200 hover:text-neutral-800"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/veelgestelde-vragen"
              className="block rounded-[6px] px-3 py-[5px] text-[14px] text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-800"
            >
              Veelgestelde vragen
            </Link>
          </li>
        </ul>
      </nav>

      <div className="card p-6">
        <h2 className="mb-3 text-[18px]">Direct contact</h2>
        <ul className="grid gap-2 text-[15px]">
          <li>
            <a href={site.phoneHref} className="font-semibold text-primary">
              {site.phone}
            </a>
          </li>
          <li>
            <a href={site.mobileHref} className="font-semibold text-primary">
              {site.mobile}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="break-all text-neutral-600 hover:text-primary">
              {site.email}
            </a>
          </li>
        </ul>
      </div>

      <div className="rounded-[18px] bg-primary-dark p-6 text-white">
        <h2 className="text-[18px] text-white">Offerte aanvragen?</h2>
        <p className="mt-2 text-[15px] leading-[1.6em] text-neutral-300">
          Vraag nu een offerte aan bij {site.legalName}
        </p>
        <PrimaryButton href="/offerte-aanvragen" className="mt-5">
          Offerte aanvragen
        </PrimaryButton>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/*  Gedeelde blokken van de oude site                                          */
/* -------------------------------------------------------------------------- */

const standingForLinks: Record<string, string> = {
  "Risico inventarisatie": "/risico-inventarisatie-en-beheersplan",
  "Desinfectie waterleidingsystemen": "/reiniging-en-desinfectie-van-een-drinkwaterleidingsysteem",
  "Keerklep controle": "/keerklepcontrole",
};

export function StandingFor() {
  const { blocks, image, points } = shared.standingFor;
  return (
    <Section className="pt-0">
      <div className="grid grid-cols-[1.1fr_1fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] max-md:rounded-[18px]">
          {image && (
            <Image src={image} alt="Waar staan wij voor" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
          )}
        </div>
        <div>
          <ContentBlocks blocks={blocks} />
          <div className="mt-8 flex flex-wrap gap-3">
            {points.map((p) => (
              <Link key={p.title} href={standingForLinks[p.title] ?? "/diensten"} className="group">
                <Badge>
                  {p.title}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ReasonsWhy() {
  return (
    <Section className="pt-0">
      <div className="rounded-[24px] bg-neutral-200/60 p-12 max-lg:p-8 max-md:rounded-[18px] max-sm:p-6">
        <div className="mx-auto max-w-[760px]">
          <ContentBlocks blocks={shared.reasonsWhy} />
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/offerte-aanvragen">Vraag een offerte aan</PrimaryButton>
            <SecondaryButton href="/contact">Neem contact op</SecondaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ServiceGuarantees() {
  const { title, cards } = shared.services;
  return (
    <Section className="pt-0">
      <SectionHead title={title} />
      <div className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
        {cards.map((c) => (
          <ImageCard key={c.title} card={c} />
        ))}
      </div>
    </Section>
  );
}

export function ImageCard({ card, cta }: { card: Card; cta?: string }) {
  const inner = (
    <>
      {card.image && (
        <div className="relative aspect-[3/2] overflow-hidden rounded-[14px]">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 1023px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-2 pt-5">
        <h3 className="text-[20px]">{card.title}</h3>
        {card.text && <p className="mt-2 text-[15px] leading-[1.6em]">{card.text}</p>}
        {cta && <span className="mt-4 inline-block text-[15px] font-semibold text-primary">{cta} →</span>}
      </div>
    </>
  );
  const href = card.href && card.href !== "/" ? card.href : null;
  return href ? (
    <Link href={href} className="card group block p-3">
      {inner}
    </Link>
  ) : (
    <div className="card p-3">{inner}</div>
  );
}

export function Results() {
  const { title, images } = shared.results;
  return (
    <Section className="pt-0">
      <SectionHead title={title} />
      <div className="mt-10 grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        {images.map((src, i) => (
          <figure key={src} className="card overflow-hidden p-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px]">
              <Image src={src} alt={i === 0 ? "Watermonster voor de behandeling" : "Watermonster na de behandeling"} fill sizes="(max-width: 639px) 100vw, 50vw" className="object-cover" />
            </div>
            <figcaption className="p-2 pt-4 text-[15px] font-semibold text-neutral-800">
              {i === 0 ? "Voor" : "Na"}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Quote() {
  return (
    <Section className="pt-0">
      <blockquote className="mx-auto max-w-[820px] text-center text-[30px] font-semibold leading-[1.3em] text-neutral-800 max-md:text-[22px]">
        “{shared.quote}”
      </blockquote>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reviews                                                                    */
/* -------------------------------------------------------------------------- */

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-[3px] text-[#fbbc05]" aria-label={`${n} van 5 sterren`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`size-4 ${i < n ? "" : "opacity-25"}`} fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export function ReviewSummary() {
  const t = shared.reviewTotal;
  if (!t) return null;
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Stars n={5} />
      <span className="text-[18px] font-semibold text-neutral-800">{t.rating.replace(".", ",")}</span>
      <span className="text-[15px] text-neutral-500">({t.count} beoordelingen)</span>
    </div>
  );
}

export function ReviewGrid() {
  return (
    <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
      {shared.reviews.map((r) => (
        <figure key={r.name + r.date} className="card flex flex-col p-8 max-sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <Stars n={r.rating} />
            <span className="text-[14px] text-neutral-500">{r.date}</span>
          </div>
          <blockquote className="mt-5 flex-1 leading-[1.65em]">{r.text}</blockquote>
          <figcaption className="mt-6 font-semibold text-neutral-800">{r.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <Section className="pt-0">
      <SectionHead
        title="Reviews"
        cta={<SecondaryButton href="/reviews">Alle reviews</SecondaryButton>}
      />
      <div className="mt-4">
        <ReviewSummary />
      </div>
      <div className="mt-10">
        <ReviewGrid />
      </div>
    </Section>
  );
}
