"use client";

import { useState } from "react";
import Media from "./Media";
import Faq from "./Faq";
import { Badge } from "./blocks";

/* -------------------------------------------------------------------------- */
/*  AccordionTabs — .features-v2-tabs-wrapper                                  */
/*  Links een uitklapbare tab-lijst, rechts de bijbehorende visual.            */
/* -------------------------------------------------------------------------- */

export function AccordionTabs({
  items,
}: {
  items: { title: string; text: string; imageAlt: string; image?: string; number?: string }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-2 items-center gap-10 rounded-[24px] bg-neutral-200/60 p-10 max-lg:grid-cols-1 max-md:rounded-[18px] max-sm:p-5">
      <div className="grid content-start gap-2">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={isActive}
              className={`flex items-start justify-between gap-6 rounded-[18px] px-7 py-6 text-left transition-colors duration-300 max-sm:px-5 max-sm:py-4 ${
                isActive ? "bg-white shadow-[0_4px_4px_#9ac4ff0f,0_1px_5px_#05112d0f]" : "hover:bg-white/60"
              }`}
            >
              <span className="flex-1">
                <span className="block text-[20px] font-semibold leading-[1.25em] text-neutral-800">
                  {item.title}
                </span>
                <span
                  className={`grid transition-all duration-300 ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">
                    <span className="mt-2 block max-w-[300px] text-[15px] leading-[1.6em] text-neutral-600">
                      {item.text}
                    </span>
                  </span>
                </span>
              </span>
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  isActive ? "bg-neutral-800 text-white" : "bg-white text-neutral-600"
                }`}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M5.63068 12.4001L10.3691 8.0001L5.63068 3.6001"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-[18px] border border-neutral-200 bg-white">
        <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[14px] font-medium text-primary shadow-[0_4px_4px_#9ac4ff1f]">
          Stap {items[active].number ?? String(active + 1).padStart(2, "0")}
        </span>
        {items.map((item, i) => (
          <div
            key={item.title}
            className={i === active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"}
          >
            <Media src={item.image} alt={item.imageAlt} ratio="4/3" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  CardTabs — .office-tabs: kaartjes als tabmenu, inhoud eronder              */
/* -------------------------------------------------------------------------- */

export function CardTabs({
  items,
}: {
  items: {
    key: string;
    label: string;
    badge: string;
    heading: string;
    text: string;
    bullets: string[];
    imageAlt: string;
    image?: string;
  }[];
}) {
  const [active, setActive] = useState(items[0]?.key);
  const current = items.find((i) => i.key === active) ?? items[0];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2">
        {items.map((i) => {
          const isActive = i.key === active;
          return (
            <button
              key={i.key}
              type="button"
              onClick={() => setActive(i.key)}
              aria-pressed={isActive}
              className={`flex min-h-[122px] flex-col items-start justify-between gap-4 rounded-[12px] border p-5 text-left transition-colors duration-300 max-sm:min-h-0 max-sm:flex-row max-sm:items-center max-sm:justify-start max-sm:gap-3 ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-neutral-200 bg-white text-neutral-600 shadow-[0_4px_5px_#9ac4ff0f,0_1px_5px_#05112d0f] hover:border-primary/30"
              }`}
            >
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-[14px] font-semibold ${
                  isActive ? "bg-white/15 text-white" : "bg-neutral-200 text-primary"
                }`}
              >
                {i.badge}
              </span>
              <span className="text-[16px] font-medium">{i.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 items-center gap-10 max-md:grid-cols-1">
        <div>
          <h3 className="text-[28px] leading-[1.25em] max-sm:text-[22px]">{current.heading}</h3>
          <p className="mt-4 leading-[1.65em]">{current.text}</p>
          <ul className="mt-6 grid gap-3">
            {current.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-[7px] size-[7px] shrink-0 rounded-full bg-primary" />
                <span className="text-[15px] leading-[1.6em]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-[18px] border border-neutral-200">
          <Media src={current.image} alt={current.imageAlt} ratio="4/3" className="w-full" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  NumberedAccordion — .accordion-item met nummer en achtergrondvisual        */
/* -------------------------------------------------------------------------- */

export function NumberedAccordion({ items }: { items: { q: string; a: string }[] }) {
  return <Faq items={items} defaultOpen={null} />;
}

/* -------------------------------------------------------------------------- */
/*  QuoteSlider — .testimonial-v2-slider                                       */
/* -------------------------------------------------------------------------- */

export function QuoteSlider({
  items,
}: {
  items: { text: string; author: string; role: string; badge: string }[];
}) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  return (
    <div>
      <div className="rounded-[24px] border border-neutral-200 bg-white p-10 shadow-[0_4px_4px_#9ac4ff0f,0_1px_1px_#05112d0f] max-md:rounded-[18px] max-sm:p-6">
        <Badge>{item.badge}</Badge>
        <p className="mt-6 text-[24px] font-semibold leading-[1.4em] text-neutral-800 max-sm:text-[19px]">
          {item.text}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-white bg-secondary-100 text-[15px] font-semibold text-primary shadow-[0_4px_4px_#9ac4ff0f]">
            {item.author.slice(0, 2).toUpperCase()}
          </span>
          <span>
            <span className="block text-[15px] font-semibold text-neutral-800">{item.author}</span>
            <span className="block text-[15px] text-neutral-500">{item.role}</span>
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <SliderButton
          label="Vorige"
          onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
          rotate
        />
        <SliderButton label="Volgende" onClick={() => setIndex((i) => (i + 1) % items.length)} />
        <div className="ml-3 flex gap-2">
          {items.map((it, i) => (
            <button
              key={it.author}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ga naar item ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-7 bg-primary" : "w-1.5 bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SliderButton({
  label,
  onClick,
  rotate = false,
}: {
  label: string;
  onClick: () => void;
  rotate?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition-colors hover:border-primary hover:text-primary"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className={rotate ? "rotate-180" : ""}
      >
        <path
          d="M5.63068 12.4001L10.3691 8.0001L5.63068 3.6001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
