import type { ReactNode } from "react";
import Header from "./Header";
import TopBar from "./TopBar";

/**
 * Hero in de opzet van het Investflow-template: een afgerond, donker vlak binnen
 * een 20px marge, met de header absoluut daaroverheen.
 */
export default function Hero({
  eyebrow,
  title,
  text,
  actions,
  aside,
  background,
  footnote,
  compact = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  background?: ReactNode;
  footnote?: ReactNode;
  compact?: boolean;
}) {
  return (
    <>
      <TopBar />
      <div className="relative mx-auto max-w-[1440px] px-5 pt-5 max-lg:px-4 max-lg:pt-4">
      <Header variant="dark" />
      <div className="relative overflow-hidden rounded-[24px] bg-neutral-800 max-md:rounded-[18px] max-sm:rounded-[12px]">
        {background ?? <HeroBackground />}
        <div className="container-default relative">
          <div
            className={`${
              aside ? "pb-24 pt-36" : footnote ? "pb-14 pt-36" : compact ? "pb-20 pt-36" : "pb-[190px] pt-36"
            } max-lg:pb-20 max-lg:pt-32 max-md:pb-14 max-md:pt-28`}
          >
            <div className={aside ? "grid grid-cols-[1fr_auto] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-10" : ""}>
              <div className="max-w-[560px]">
                {eyebrow && (
                  <div className="mb-3 text-[15px] font-medium text-neutral-300">{eyebrow}</div>
                )}
                <h1 className="text-white">{title}</h1>
                {text && (
                  <div className="mt-3 max-w-[470px] leading-[1.6em] text-neutral-300">
                    {text}
                  </div>
                )}
                {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
              </div>
              {aside}
            </div>
            {footnote && (
              <div className="mt-24 flex justify-end max-lg:mt-12 max-lg:justify-start">
                {footnote}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

/** Achtergrond van de template-hero: donkere navy met lichtsweep en rasterlijnen. */
export function HeroBackground({
  variant = "hero",
}: {
  variant?: "hero" | "cta" | "contact";
}) {
  const cls =
    variant === "cta" ? "bg-cta-sweep" : variant === "contact" ? "bg-contact-glow" : "bg-hero-sweep";
  return (
    <div className={`pointer-events-none absolute inset-0 bg-grid-lines ${cls}`} aria-hidden="true" />
  );
}
