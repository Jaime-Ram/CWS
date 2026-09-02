"use client";

import { useState } from "react";

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
    <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-[24px] bg-newsletter p-12 max-md:rounded-[18px] max-sm:p-6">
      <div className="relative">
        <div className="text-[15px] text-white/70">Nieuwsbrief</div>
        <h2 className="mt-2 max-w-[440px] text-[32px] text-white max-md:text-[24px]">{title}</h2>
        <p className="mt-3 max-w-[440px] leading-[1.6em] text-white/80">{text}</p>

        <form onSubmit={onSubmit} className="relative mt-7 max-w-[505px]">
          <input
            type="email"
            name="email"
            required
            placeholder="Uw e-mailadres"
            aria-label="E-mailadres"
            className="h-[58px] w-full rounded-full border border-white/25 bg-white/10 pl-6 pr-[150px] text-[15px] text-white outline-none backdrop-blur-sm transition-colors placeholder:text-white/60 focus:border-white/60 max-sm:pr-[124px]"
          />
          <button
            type="submit"
            className="absolute right-[7px] top-[7px] h-[44px] rounded-full bg-white px-7 text-[15px] font-semibold text-primary transition-opacity hover:opacity-90 max-sm:px-5"
          >
            Aanmelden
          </button>
        </form>

        {status !== "idle" && (
          <p className="mt-4 max-w-[505px] text-[15px] text-white/85">{message}</p>
        )}
      </div>
    </div>
  );
}
