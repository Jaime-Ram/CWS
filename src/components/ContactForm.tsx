"use client";

import { useState } from "react";
import { ArrowIcon } from "./ui";

type Status = "idle" | "sending" | "ok" | "error";

const subjects = [
  "Risicoanalyse en beheersplan (BRL 6010)",
  "Reiniging en desinfectie",
  "Keerklepcontrole",
  "Watermonsters",
  "Boiler of sediment",
  "Spoed: legionella-overschrijding",
  "Anders",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot tegen spam
    if (data.website) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Er ging iets mis.");
      setStatus("ok");
      setMessage(json.message ?? "Bedankt, wij nemen zo snel mogelijk contact op.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Versturen is niet gelukt. Bel ons gerust op 0182-607675.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        <Field label="Naam" name="naam" required autoComplete="name" />
        <Field label="Organisatie" name="organisatie" autoComplete="organization" />
      </div>
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        <Field label="E-mailadres" name="email" type="email" required autoComplete="email" />
        <Field label="Telefoonnummer" name="telefoon" type="tel" autoComplete="tel" />
      </div>

      <label className="grid gap-2">
        <span className="text-[15px] font-medium text-neutral-800">Onderwerp</span>
        <select
          name="onderwerp"
          className="h-[52px] rounded-[12px] border border-neutral-200 bg-white px-4 text-[15px] text-neutral-800 outline-none transition-colors focus:border-primary"
          defaultValue={subjects[0]}
        >
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-[15px] font-medium text-neutral-800">
          Uw vraag of situatie
        </span>
        <textarea
          name="bericht"
          rows={5}
          required
          placeholder="Om wat voor gebouw gaat het, hoeveel tappunten ongeveer, en wat is uw vraag?"
          className="rounded-[12px] border border-neutral-200 bg-white px-4 py-3 text-[15px] leading-[1.6em] text-neutral-800 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary"
        />
      </label>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center rounded-[300px] bg-primary py-2 pl-6 pr-2 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
        >
          <span className="text-[15px]">
            {status === "sending" ? "Versturen..." : "Verstuur aanvraag"}
          </span>
          <span className="ml-4 flex size-[38px] shrink-0 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:rotate-45">
            <ArrowIcon />
          </span>
        </button>
        <p className="text-[14px] text-neutral-500">
          Wij reageren binnen één werkdag.
        </p>
      </div>

      {status === "ok" && (
        <p className="rounded-[12px] bg-system-green-100 px-4 py-3 text-[15px] text-neutral-700">
          {message}
        </p>
      )}
      {status === "error" && (
        <p className="rounded-[12px] bg-system-red-100 px-4 py-3 text-[15px] text-neutral-700">
          {message}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[15px] font-medium text-neutral-800">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="h-[52px] rounded-[12px] border border-neutral-200 bg-white px-4 text-[15px] text-neutral-800 outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}
