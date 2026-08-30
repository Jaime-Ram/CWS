"use client";

import { useState } from "react";
import { ArrowIcon } from "./ui";
import { HeroBackground } from "./Hero";

/** cta-v5-card uit het template: donkere kaart met inline nieuwsbriefformulier. */
export default function Newsletter({
  title = "Praktische kennis over waterveiligheid in uw inbox",
  text = "Een paar keer per jaar een korte update over wijzigingen in de regelgeving en wat wij in de praktijk tegenkomen.",
}: {
  title?: string;
  text?: string;
}) {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          naam: "Nieuwsbriefaanmelding",
          email,
          onderwerp: "Nieuwsbrief",
          bericht: "Aanmelding voor de nieuwsbrief via de website.",
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setStatus("ok");
      setMessage("Bedankt voor uw aanmelding.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Aanmelden is niet gelukt.");
    }
  }

  return (
    <div className="relative flex flex-col justify-end overflow-hidden rounded-[32px] bg-neutral-800 p-12 max-md:rounded-[24px] max-sm:p-6">
      <HeroBackground />
      <div className="relative">
        <div className="text-[15px] text-neutral-400">Nieuwsbrief</div>
        <h2 className="mt-2 max-w-[520px] text-[32px] text-white max-md:text-[24px]">{title}</h2>
        <p className="mt-3 max-w-[505px] leading-[1.6em] text-neutral-300">{text}</p>

        <form onSubmit={onSubmit} className="relative mt-7 max-w-[505px]">
          <input
            type="email"
            name="email"
            required
            placeholder="Uw e-mailadres"
            aria-label="E-mailadres"
            className="h-[58px] w-full rounded-full border border-white/15 bg-white/[0.07] pl-6 pr-[62px] text-[15px] text-white outline-none backdrop-blur-sm transition-colors placeholder:text-neutral-400 focus:border-white/40"
          />
          <button
            type="submit"
            aria-label="Aanmelden"
            className="absolute right-[10px] top-[10px] flex size-[38px] items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 hover:rotate-45"
          >
            <ArrowIcon />
          </button>
        </form>

        {status !== "idle" && (
          <p className="mt-4 max-w-[505px] text-[15px] text-neutral-300">{message}</p>
        )}
      </div>
    </div>
  );
}
