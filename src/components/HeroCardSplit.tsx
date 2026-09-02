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
            <div className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-[24px] bg-neutral-800 p-12 max-md:rounded-[18px] max-sm:p-7">
              <HeroBackground variant="contact" />
              <div className="relative">
                {eyebrow && (
                  <div className="mb-3 text-[15px] font-medium text-neutral-300">{eyebrow}</div>
                )}
                <h1 className="text-white">{title}</h1>
                <p className="mt-4 leading-[1.6em] text-neutral-300">{text}</p>
              </div>
              {bottomTitle && (
                <div className="relative rounded-[18px] bg-white p-8 shadow-[0_4px_4px_#9ac4ff0f,0_1px_5px_#05112d0f] max-sm:p-5">
                  <p className="text-[24px] font-semibold text-neutral-800">{bottomTitle}</p>
                  {bottomText && (
                    <p className="mt-2 text-[15px] leading-[1.6em] text-neutral-600">{bottomText}</p>
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
