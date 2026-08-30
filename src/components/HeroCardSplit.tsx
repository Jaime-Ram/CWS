import type { ReactNode } from "react";
import Header from "./Header";
import TopBar from "./TopBar";
import { HeroBackground } from "./Hero";

/**
 * Contact-hero uit het template: donkere kaart links, formulier of inhoud rechts.
 */
export default function HeroCardSplit({
  eyebrow,
  title,
  text,
  bottomTitle,
  bottomText,
  bottomAction,
  children,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  bottomTitle?: string;
  bottomText?: string;
  bottomAction?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <TopBar />
      <Header variant="light" />
      <section className="pb-24 pt-10 max-lg:pb-16">
        <div className="container-default">
          <div className="grid grid-cols-[1fr_1.15fr] items-stretch gap-12 max-lg:grid-cols-1 max-lg:gap-8">
            <div className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-[32px] bg-neutral-800 p-12 max-md:rounded-[24px] max-sm:p-7">
              <HeroBackground />
              <div className="relative">
                {eyebrow && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[14px] font-medium text-white/90">
                    <span className="size-1.5 rounded-full bg-secondary-200" />
                    {eyebrow}
                  </div>
                )}
                <h1 className="text-white">{title}</h1>
                <p className="mt-4 leading-[1.6em] text-neutral-300">{text}</p>
              </div>
              {bottomTitle && (
                <div className="relative rounded-[24px] border border-white/12 bg-white/[0.07] p-8 backdrop-blur-sm max-sm:p-5">
                  <p className="text-[20px] font-semibold text-white">{bottomTitle}</p>
                  {bottomText && (
                    <p className="mt-2 text-[15px] leading-[1.6em] text-neutral-300">{bottomText}</p>
                  )}
                  {bottomAction && <div className="mt-5">{bottomAction}</div>}
                </div>
              )}
            </div>
            <div>{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
