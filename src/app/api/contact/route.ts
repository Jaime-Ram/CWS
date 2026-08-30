import { NextResponse } from "next/server";
import { site } from "@/data/site";

/**
 * Verstuurt het contactformulier via Resend wanneer RESEND_API_KEY is ingesteld.
 * Zonder key wordt de aanvraag geweigerd met een duidelijke melding, zodat er
 * nooit stilzwijgend een aanvraag verloren gaat.
 */
export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  if (body.website) {
    // Honeypot gevuld: stil laten mislukken richting bots.
    return NextResponse.json({ message: "Bedankt voor uw bericht." });
  }

  const naam = (body.naam ?? "").trim();
  const email = (body.email ?? "").trim();
  const bericht = (body.bericht ?? "").trim();

  if (!naam || !email || !bericht) {
    return NextResponse.json(
      { error: "Vul uw naam, e-mailadres en vraag in." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "Dit e-mailadres lijkt niet te kloppen." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error: `Het formulier is nog niet gekoppeld aan een mailserver. Mail uw vraag naar ${site.email} of bel ${site.phone}.`,
      },
      { status: 503 },
    );
  }

  const lines = [
    `Naam: ${naam}`,
    `Organisatie: ${body.organisatie || "-"}`,
    `E-mail: ${email}`,
    `Telefoon: ${body.telefoon || "-"}`,
    `Onderwerp: ${body.onderwerp || "-"}`,
    "",
    bericht,
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [site.email],
      reply_to: email,
      subject: `Website-aanvraag: ${body.onderwerp || "Contact"} (${naam})`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: `Versturen is niet gelukt. Bel ons gerust op ${site.phone}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Bedankt. Wij nemen binnen één werkdag contact met u op.",
  });
}
