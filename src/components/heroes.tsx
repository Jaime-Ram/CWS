import type { ReactNode } from "react";
import Header from "./Header";
import TopBar from "./TopBar";
import Media from "./Media";
import { Badge } from "./blocks";

/* -------------------------------------------------------------------------- */
/*  HeroCentered — de hero van de About-pagina: donkere kaart, gecentreerde     */
/*  inhoud en de gloed onderaan.                                               */
/* -------------------------------------------------------------------------- */

export function HeroCentered({
  title,
  text,
  actions,
}: {
  title: string;
  text: string;
  actions?: ReactNode;
}) {
  return (
    <>
      <TopBar />
      <div className="relative mx-auto max-w-[1440px] px-5 pt-5 max-lg:px-4 max-lg:pt-4">
        <Header variant="dark" />
        <div className="relative overflow-hidden rounded-[24px] bg-grid-lines bg-contact-glow max-md:rounded-[18px]">
          <div className="container-default relative">
            <div className="mx-auto max-w-[620px] pb-44 pt-32 text-center max-lg:pt-28 max-md:pb-28 max-md:pt-20">
              <h1 className="text-white">{title}</h1>
              <p className="mx-auto mt-4 max-w-[520px] leading-[1.6em] text-neutral-300">{text}</p>
              {actions && (
                <div className="mt-7 flex flex-wrap items-center justify-center gap-5">{actions}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  HeroSmall — de hero van de Portfolio-pagina: compacte donkere kaart met de  */
/*  titel links en de lichtsweep vanaf rechts.                                 */
/* -------------------------------------------------------------------------- */

export function HeroSmall({
  title,
  text,
  actions,
}: {
  title: string;
  text: string;
  actions?: ReactNode;
}) {
  return (
    <>
      <TopBar />
      <div className="relative mx-auto max-w-[1440px] px-5 pt-5 max-lg:px-4 max-lg:pt-4">
        <Header variant="dark" />
        <div className="relative overflow-hidden rounded-[24px] bg-grid-lines bg-hero-sweep max-md:rounded-[18px]">
          <div className="container-default relative">
            <div className="max-w-[420px] pb-16 pt-36 max-lg:pt-32 max-md:pb-12 max-md:pt-28">
              <h1 className="text-white">{title}</h1>
              <p className="mt-4 text-[15px] leading-[1.6em] text-neutral-300">{text}</p>
              {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  HeroLight — de kop van de Blog-pagina: lichte pagina, gecentreerde titel.   */
/* -------------------------------------------------------------------------- */

export function HeroLight({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text: string;
}) {
  return (
    <>
      <TopBar />
      <Header variant="light" />
      <section className="pb-16 pt-16 max-md:pb-10 max-md:pt-10">
        <div className="container-default">
          <div className="mx-auto max-w-[620px] text-center">
            {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
            <h1>{title}</h1>
            <p className="mx-auto mt-4 max-w-[540px] leading-[1.6em]">{text}</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  HeroPost — de hero van de blogpost: tekst links met een metakaart,          */
/*  beeld rechts.                                                              */
/* -------------------------------------------------------------------------- */

export function HeroPost({
  badge,
  meta,
  title,
  text,
  image,
  imageAlt,
  card,
}: {
  badge: string;
  meta?: string;
  title: string;
  text: string;
  image?: string;
  imageAlt: string;
  card?: ReactNode;
}) {
  return (
    <>
      <TopBar />
      <Header variant="light" />
      <section className="pb-20 pt-10 max-lg:pb-14">
        <div className="container-default">
          <div className="grid grid-cols-[1fr_1.05fr] items-start gap-12 max-lg:grid-cols-1 max-lg:gap-8">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <Badge>{badge}</Badge>
                {meta && <span className="text-[15px] text-neutral-500">{meta}</span>}
              </div>
              <h1>{title}</h1>
              <p className="mt-4 max-w-[520px] leading-[1.6em]">{text}</p>
              {card && (
                <div className="card mt-8 flex flex-wrap items-center justify-between gap-6 p-6 max-sm:p-5">
                  {card}
                </div>
              )}
            </div>
            <div className="overflow-hidden rounded-[24px] max-md:rounded-[18px]">
              <Media src={image} alt={imageAlt} ratio="4/3" className="w-full" priority />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  HeroPanel — de hero van de portfolio-detailpagina: licht paneel met         */
/*  gecentreerde titel en een gegevensbalk eronder.                            */
/* -------------------------------------------------------------------------- */

export function HeroPanel({
  eyebrow,
  title,
  text,
  details,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  details: { label: string; value: string }[];
}) {
  return (
    <>
      <TopBar />
      <Header variant="light" />
      <section className="pb-20 pt-6 max-lg:pb-14">
        <div className="container-default">
          <div className="rounded-[24px] bg-neutral-200/70 p-10 max-md:rounded-[18px] max-sm:p-5">
            <div className="mx-auto max-w-[620px] py-12 text-center max-md:py-8">
              {eyebrow && (
                <div className="mb-5 flex justify-center">
                  <Badge>{eyebrow}</Badge>
                </div>
              )}
              <h1>{title}</h1>
              <p className="mx-auto mt-4 max-w-[540px] leading-[1.6em]">{text}</p>
            </div>
            <div className="card flex flex-wrap items-center gap-x-16 gap-y-6 p-8 max-sm:gap-x-10 max-sm:p-6">
              <span className="text-[20px] font-semibold text-neutral-800">Kenmerken</span>
              {details.map((d) => (
                <span key={d.label}>
                  <span className="block text-[14px] text-neutral-500">{d.label}</span>
                  <span className="mt-0.5 block text-[15px] font-semibold text-neutral-800">
                    {d.value}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
