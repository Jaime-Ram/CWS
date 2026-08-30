"use client";

import { useState } from "react";
import Visual, { type VisualName } from "./Visual";
import { Badge } from "./blocks";

/* -------------------------------------------------------------------------- */
/*  AccordionTabs — .features-v2-tabs-wrapper                                  */
/*  Links een uitklapbare tab-lijst, rechts de bijbehorende visual.            */
/* -------------------------------------------------------------------------- */

export function AccordionTabs({
  items,
}: {
  items: { title: string; text: string; visual: VisualName; number?: string }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-2 gap-0 max-lg:grid-cols-1 max-lg:gap-10">
      <div className="grid content-start">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={isActive}
              className={`flex items-start justify-between gap-6 rounded-[32px] border p-8 text-left transition-colors duration-300 max-md:rounded-[24px] max-sm:p-6 ${
                isActive
                  ? "border-neutral-200 bg-white shadow-[0_4px_4px_#9ac4ff0f,0_1px_5px_#05112d0f]"
                  : "border-transparent bg-transparent hover:bg-white/60"
              }`}
            >
              <span className="flex-1">
                <span className="flex items-center gap-3">
                  {item.number && (
                    <span className="text-[15px] font-semibold text-neutral-400 tabular-nums">
                      {item.number}
                    </span>
                  )}
                  <span className="text-[24px] font-semibold leading-[1.25em] text-neutral-800 max-sm:text-[20px]">
                    {item.title}
                  </span>
                </span>
                <span
                  className={`grid transition-all duration-300 ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">
                    <span className="mt-3 block max-w-[340px] text-[15px] leading-[1.6em] text-neutral-600">
                      {item.text}
                    </span>
                  </span>
                </span>
              </span>
              <span
                className={`flex size-[46px] shrink-0 items-center justify-center rounded-full bg-white text-neutral-800 shadow-[0_4px_4px_#9ac4ff0f,0_1px_5px_#05112d0f] transition-transform duration-300 max-sm:size-10 ${
                  isActive ? "rotate-90" : ""
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

      <div className="relative self-center overflow-hidden rounded-[32px] border border-neutral-200 max-md:rounded-[24px]">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`transition-opacity duration-300 ${
              i === active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
            }`}
          >
            <Visual name={item.visual} className="block aspect-[4/3] w-full" />
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
    visual: VisualName;
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
              className={`flex min-h-[122px] flex-col items-start justify-between gap-4 rounded-[16px] border p-5 text-left transition-colors duration-300 max-sm:min-h-0 max-sm:flex-row max-sm:items-center max-sm:justify-start max-sm:gap-3 ${
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
        <div className="overflow-hidden rounded-[24px] border border-neutral-200">
          <Visual name={current.visual} className="block aspect-[4/3] w-full" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  NumberedAccordion — .accordion-item met nummer en achtergrondvisual        */
/* -------------------------------------------------------------------------- */

export function NumberedAccordion({
  items,
  visual = "golven",
}: {
  items: { q: string; a: string }[];
  visual?: VisualName;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`relative overflow-hidden rounded-[32px] border transition-colors duration-300 max-md:rounded-[24px] ${
              isOpen ? "border-neutral-300 bg-white" : "border-neutral-200 bg-white"
            } shadow-[0_4px_4px_#9ac4ff0f,0_1px_5px_#05112d0f]`}
          >
            {isOpen && (
              <span className="pointer-events-none absolute inset-y-0 right-0 w-1/3 max-md:hidden" aria-hidden="true">
                <Visual name={visual} className="size-full opacity-50" />
                <span className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
              </span>
            )}
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="relative flex w-full items-start gap-6 p-8 text-left max-sm:gap-4 max-sm:p-5"
            >
              <span className="mt-1 shrink-0 text-[15px] font-semibold text-neutral-400 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block text-[24px] font-semibold leading-[1.3em] text-neutral-800 max-sm:text-[18px]">
                  {item.q}
                </span>
                <span
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">
                    <span className="mt-4 block max-w-[620px] leading-[1.65em] text-neutral-600">
                      {item.a}
                    </span>
                  </span>
                </span>
              </span>
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-800 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
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
      <div className="rounded-[32px] border border-neutral-200 bg-white p-10 shadow-[0_4px_4px_#9ac4ff0f,0_1px_1px_#05112d0f] max-md:rounded-[24px] max-sm:p-6">
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
