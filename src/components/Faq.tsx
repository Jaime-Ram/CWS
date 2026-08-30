"use client";

import { useState } from "react";

export default function Faq({
  items,
  className = "",
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`grid gap-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-5 p-6 text-left max-sm:p-5"
            >
              <span className="mt-0.5 w-7 shrink-0 font-semibold text-neutral-400 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[18px] font-semibold leading-[1.35em] text-neutral-800 max-sm:text-[16px]">
                {item.q}
              </span>
              <span
                className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-800 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pl-[72px] leading-[1.65em] max-sm:px-5 max-sm:pb-5 max-sm:pl-5">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
