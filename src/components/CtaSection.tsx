import { site } from "@/data/site";
import { HeroBackground } from "./Hero";
import { PrimaryButton } from "./ui";

/**
 * CTA v1 uit het template: donkere band met een lichtsweep vanaf links en de
 * inhoud rechts uitgelijnd.
 */
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
        <div className="relative overflow-hidden rounded-[24px] max-md:rounded-[18px]">
          <HeroBackground variant="cta" />
          <div className="relative flex justify-end px-16 py-24 max-lg:px-10 max-lg:py-16 max-md:px-7 max-md:py-12">
            <div className="max-w-[460px] max-lg:max-w-none">
              <div className="text-[15px] text-neutral-300">{eyebrow}</div>
              <h2 className="mt-2 text-white">{title}</h2>
              <p className="mt-3 leading-[1.6em] text-neutral-300">{text}</p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <PrimaryButton href="/contact">Offerte aanvragen</PrimaryButton>
                <a href={site.phoneHref} className="font-semibold text-white">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
