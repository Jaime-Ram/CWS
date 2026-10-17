import { NextResponse } from "next/server";
import { site } from "@/data/site";

/**
 * Verstuurt het contactformulier via de eigen Microsoft 365-mailbox (Graph sendMail).
 * Zonder app-registratie wordt de aanvraag geweigerd met een duidelijke melding, zodat er
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

  const tenant = process.env.MS_TENANT_ID;
  const clientId = process.env.MS_CLIENT_ID;
  const secret = process.env.MS_CLIENT_SECRET;
  const sender = process.env.CONTACT_SENDER ?? site.email;

  if (!tenant || !clientId || !secret) {
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

  // Token voor de eigen Microsoft 365-omgeving (app-registratie met Mail.Send).
  const tokenRes = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: secret,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });
  const token = tokenRes.ok ? ((await tokenRes.json()) as { access_token?: string }).access_token : undefined;

  const res = token
    ? await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          message: {
            subject: `Website-aanvraag: ${body.onderwerp || "Contact"} (${naam})`,
            body: { contentType: "Text", content: lines.join("\n") },
            toRecipients: [{ emailAddress: { address: site.email } }],
            replyTo: [{ emailAddress: { address: email, name: naam } }],
          },
          saveToSentItems: false,
        }),
      })
    : tokenRes;

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
