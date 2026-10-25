import Link from "next/link";
import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroVideo";
import GoogleReviews from "@/components/GoogleReviews";
import Certifications from "@/components/Certifications";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { NumberedAccordion } from "@/components/Tabs";
import {
  ImageCard,
  Quote,
  ReasonsWhy,
  Results,
  ReviewsSection,
  ServiceGuarantees,
  StandingFor,
} from "@/components/content";
import { PrimaryButton, SecondaryButton, Section, SectionHead } from "@/components/ui";
import { home, shared } from "@/content";
import { faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: home.title,
  description: home.description,
  path: "/",
  absolute: true,
});

/** De oude homepagetekst opgeknipt per h2, zodat elk deel een eigen sectie krijgt. */
const html = home.blocks.map((b) => (b.type === "html" ? b.html : "")).join("");
const [introHtml, ...rest] = html.split(/(?=<h2>)/);
const sections = Object.fromEntries(
  rest.map((s) => {
    const title = s.match(/<h2>(.*?)<\/h2>/)?.[1].replace(/<[^>]+>/g, "") ?? "";
    return [title.replace(/\.$/, ""), { title: title.replace(/\.$/, ""), body: s.replace(/<h2>.*?<\/h2>/, "") }];
  }),
);
const strip = (s: string) => s.replace(/<[^>]+>/g, "").trim();
const intro = [...introHtml.matchAll(/<h3>(.*?)<\/h3>/g)].map((m) => strip(m[1]));
const items = (body: string) => [...body.matchAll(/<li>(.*?)<\/li>/g)].map((m) => m[1]);
const lead = (body: string) => strip(body.match(/<p>(.*?)<\/p>/)?.[1] ?? "");

const faqs = (() => {
  const body = sections["Veelgestelde vragen"]?.body ?? "";
  const ps = [...body.matchAll(/<p>(.*?)<\/p>/g)].map((m) => strip(m[1]));
  const out: { q: string; a: string }[] = [];
  for (let i = 0; i + 1 < ps.length; i += 2) out.push({ q: ps[i], a: ps[i + 1] });
  return out;
})();

const projects = [...(sections["Projecten"]?.body ?? "").matchAll(/<a href="([^"]+)">(.*?)<\/a>/g)].map((m) => ({
  href: m[1],
  title: strip(m[2]).replace(/\.$/, ""),
}));

function Prose({ body }: { body: string }) {
  return <div className="prose-cws" dangerouslySetInnerHTML={{ __html: body }} />;
}

export default function HomePage() {
  const diensten = sections["Onze diensten"];
  const voorWie = sections["Voor wie werken wij?"];
  const verwachten = sections["Wat u van ons mag verwachten?"];
  const aanpak = sections["Wat te doen bij legionellarisico of overschrijding?"];
  const contact = sections["Contact"];

  return (
    <>
      <Hero
        eyebrow="Adviesbureau voor waterinstallaties sinds 2008"
        title={home.h1}
        text={intro[0]}
        actions={
          <>
            <PrimaryButton href="/offerte-aanvragen">Offerte aanvragen</PrimaryButton>
            <GoogleReviews />
          </>
        }
        footnote={<Certifications scale={1.1} />}
        background={
          <HeroVideo
            videoId="iE9gWUet-lM"
            poster="/images/oud/clean-water-systems-slide.webp"
            posterAlt="Clean Water Systems aan het werk aan een drinkwaterinstallatie"
          />
        }
      />

      {/* Intro en uitgelichte diensten */}
      <Section>
        <div className="grid grid-cols-[1.3fr_1fr] gap-14 max-lg:grid-cols-1 max-lg:gap-6">
          <p className="text-[26px] font-semibold leading-[1.35em] text-neutral-800 max-md:text-[20px]">
            {intro.slice(1, 3).join(" ")}
          </p>
          <div className="flex flex-col items-start justify-end gap-5">
            <p className="leading-[1.65em]">{intro[3]}</p>
            <SecondaryButton href="/contact">Neem contact op</SecondaryButton>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {shared.homeServices.map((c) => (
            <ImageCard key={c.title} card={c} cta="Meer info" />
          ))}
        </div>
      </Section>

      {/* Onze diensten + producten */}
      {diensten && (
        <Section className="pt-0">
          <div className="grid grid-cols-[1fr_1.2fr] gap-14 max-lg:grid-cols-1 max-lg:gap-10">
            <div>
              <SectionHead title={diensten.title} text={lead(diensten.body)} />
              <ul className="mt-8 grid gap-2">
                {items(diensten.body).map((li) => {
                  const m = li.match(/<a href="([^"]+)">(.*?)<\/a>/);
                  return m ? (
                    <li key={m[1]}>
                      <Link
                        href={m[1]}
                        className="group flex items-center justify-between gap-4 border-b border-neutral-200 py-3 text-[17px] font-medium text-neutral-800 transition-colors hover:text-primary"
                      >
                        {strip(m[2])}
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
            <div className="grid grid-cols-2 content-start gap-5 max-sm:grid-cols-1">
              {shared.homeProducts.map((c) => (
                <ImageCard key={c.title} card={c} cta="Meer info" />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Voor wie + wat u mag verwachten */}
      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {[voorWie, verwachten].filter(Boolean).map((s) => (
            <div key={s!.title} className="card p-10 max-sm:p-6">
              <h2 className="text-[28px]">{s!.title}</h2>
              <div className="mt-5">
                <Prose body={s!.body} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Aanpak bij een overschrijding */}
      {aanpak && (
        <Section className="pt-0">
          <div className="rounded-[24px] bg-primary-dark p-12 text-white max-lg:p-8 max-md:rounded-[18px] max-sm:p-6">
            <div className="max-w-[640px]">
              <h2 className="text-white">{aanpak.title}</h2>
              <p className="mt-3 leading-[1.6em] text-neutral-300">{lead(aanpak.body)}</p>
            </div>
            <ol className="mt-10 grid grid-cols-5 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {items(aanpak.body).map((step, i) => (
                <li key={step} className="rounded-[16px] border border-white/12 bg-white/5 p-5">
                  <span className="text-[14px] font-semibold text-secondary-200">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 font-medium leading-[1.45em] text-white">{strip(step)}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <PrimaryButton href="/contact">Direct contact</PrimaryButton>
              <a href="tel:+31644948799" className="font-semibold text-white">06 44 94 87 99</a>
            </div>
          </div>
        </Section>
      )}

      <StandingFor />
      <ReasonsWhy />
      <ServiceGuarantees />
      <Results />

      {/* Projecten */}
      {projects.length > 0 && (
        <Section className="pt-0">
          <SectionHead title="Projecten" />
          <div className="mt-10 grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {projects.map((p) => (
              <ImageCard key={p.title} card={{ title: p.title, text: "", image: null, href: p.href }} cta="Bekijk" />
            ))}
          </div>
        </Section>
      )}

      {faqs.length > 0 && (
        <Section className="pt-0">
          <SectionHead
            title="Veelgestelde vragen"
            cta={<SecondaryButton href="/veelgestelde-vragen">Alle vragen</SecondaryButton>}
          />
          <div className="mt-12">
            <NumberedAccordion items={faqs} />
          </div>
        </Section>
      )}

      <ReviewsSection />
      <Quote />

      <CtaSection
        eyebrow="Direct contact"
        title="Contact"
        text={contact ? strip(contact.body) : undefined}
      />

      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
    </>
  );
}
