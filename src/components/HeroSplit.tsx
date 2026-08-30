import type { ReactNode } from "react";
import Header from "./Header";
import TopBar from "./TopBar";
import Media from "./Media";
import { Badge } from "./blocks";

/**
 * Hero v2 uit het template: lichte pagina-hero met een grid van tekst en beeld,
 * bovenop een lichte header. Gebruikt op de overzichtspagina's.
 */
export default function HeroSplit({
  eyebrow,
  title,
  text,
  actions,
  imageAlt,
  image,
  stats,
  reverse = false,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  actions?: ReactNode;
  imageAlt: string;
  image?: string;
  stats?: { value: string; label: string }[];
  reverse?: boolean;
}) {
  return (
    <>
      <TopBar />
      <Header variant="light" />
      <section className="pb-24 pt-14 max-lg:pb-16 max-lg:pt-10">
        <div className="container-default">
          <div
            className={`grid grid-cols-[1.3fr_1fr] items-end gap-12 max-lg:grid-cols-1 max-lg:gap-8 ${
              reverse ? "[&>*:first-child]:order-2 max-lg:[&>*:first-child]:order-1" : ""
            }`}
          >
            <div>
              {eyebrow && (
                <div className="mb-5">
                  <Badge>{eyebrow}</Badge>
                </div>
              )}
              <h1 className="max-w-[620px]">{title}</h1>
              <p className="mt-4 max-w-[520px] leading-[1.6em]">{text}</p>
              {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
              {stats && (
                <div className="mt-10 flex flex-wrap gap-10 border-t border-neutral-200 pt-8">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-[32px] font-semibold leading-none text-primary">
                        {s.value}
                      </div>
                      <div className="mt-1.5 text-[15px] text-neutral-600">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="overflow-hidden rounded-[32px] border border-neutral-200 max-md:rounded-[24px]">
              <Media src={image} alt={imageAlt} ratio="4/3" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
