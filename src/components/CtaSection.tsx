import { site } from "@/data/site";
import { HeroBackground } from "./Hero";
import { PrimaryButton, SecondaryButton } from "./ui";

export default function CtaSection({
  eyebrow = "Direct contact",
  title = "Advies nodig over legionellapreventie?",
  text = "Vertel ons kort om wat voor gebouw en installatie het gaat. U hoort binnen één werkdag wat er nodig is en wat het kost.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="section pt-0">
      <div className="container-default">
        <div className="relative overflow-hidden rounded-[32px] bg-neutral-800 max-md:rounded-[24px]">
          <HeroBackground />
          <div className="relative grid grid-cols-[1.2fr_1fr] items-center gap-12 p-16 max-lg:grid-cols-1 max-lg:gap-8 max-md:p-8">
            <div>
              <div className="eyebrow mb-2 text-neutral-400">{eyebrow}</div>
              <h2 className="max-w-[520px] text-white">{title}</h2>
              <p className="mt-3 max-w-[480px] leading-[1.6em] text-neutral-300">{text}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
                <SecondaryButton href="/diensten" variant="dark">
                  Bekijk onze diensten
                </SecondaryButton>
              </div>
            </div>
            <div className="grid gap-3">
              <ContactTile
                label="Bel direct"
                value={site.phone}
                href={site.phoneHref}
              />
              <ContactTile
                label="Buiten kantooruren"
                value={site.mobile}
                href={site.mobileHref}
              />
              <ContactTile
                label="Mail ons"
                value={site.email}
                href={`mailto:${site.email}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactTile({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between gap-4 rounded-[16px] border border-white/12 bg-white/[0.06] px-6 py-5 backdrop-blur-sm transition-colors hover:border-white/30"
    >
      <span>
        <span className="block text-[13px] uppercase tracking-wide text-neutral-400">
          {label}
        </span>
        <span className="mt-1 block break-all font-semibold text-white">{value}</span>
      </span>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 group-hover:rotate-45">
        <svg width="13" height="12" viewBox="0 0 16 15" fill="none" aria-hidden="true">
          <path
            d="M7.8589 0.996826L14.1772 7.02789M14.1772 7.02789L7.8589 13.059M14.1772 7.02789L1.87854 7.02789"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
