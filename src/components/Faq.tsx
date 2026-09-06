"use client";

import { useId, useState } from "react";

export default function Faq({ items, className = "", defaultOpen = null }: {
  items: { q: string; a: string }[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const id = useId();
  return <div className={`faq-list ${className}`}>
    {items.map((item, i) => {
      const expanded = open === i;
      return <div key={item.q} className="faq-item">
        <h3>
          <button id={`${id}-question-${i}`} type="button" className="faq-question"
            aria-expanded={expanded} aria-controls={`${id}-answer-${i}`}
            onClick={() => setOpen(expanded ? null : i)}>
            <span className="faq-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <span className="min-w-0 flex-1">{item.q}</span>
            <svg className={`faq-plus ${expanded ? "rotate-45" : ""}`} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </h3>
        <div id={`${id}-answer-${i}`} aria-labelledby={`${id}-question-${i}`} role="region"
          className="faq-answer" data-open={expanded} aria-hidden={!expanded} inert={!expanded}>
          <div className="overflow-hidden"><p>{item.a}</p></div>
        </div>
      </div>;
    })}
  </div>;
}
