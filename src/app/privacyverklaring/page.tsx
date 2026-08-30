import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Section } from "@/components/ui";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Privacyverklaring",
    description:
      "Hoe Clean Water Systems omgaat met persoonsgegevens die via deze website worden verzameld.",
    path: "/privacyverklaring",
  }),
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Hero compact title="Privacyverklaring" text="Hoe wij omgaan met uw gegevens." />
      <Section>
        <Breadcrumbs items={[{ label: "Privacyverklaring", href: "/privacyverklaring" }]} />
        <article className="prose-cws max-w-[720px]">
          <h2>Wie wij zijn</h2>
          <p>
            {site.legalName}, gevestigd aan {site.address.street},{" "}
            {site.address.postalCode} {site.address.city}, is verwerkingsverantwoordelijke
            voor de persoonsgegevens die via deze website worden verzameld.
          </p>

          <h2>Welke gegevens wij verwerken</h2>
          <p>
            Wij verwerken uitsluitend de gegevens die u zelf aan ons verstrekt via het
            contactformulier, per e-mail of telefonisch. Het gaat om uw naam, uw
            organisatie, uw e-mailadres, uw telefoonnummer en de inhoud van uw bericht.
          </p>

          <h2>Waarvoor wij die gegevens gebruiken</h2>
          <ul>
            <li>Het beantwoorden van uw vraag of het uitbrengen van een offerte</li>
            <li>Het uitvoeren van een overeenkomst en de daaruit volgende administratie</li>
            <li>Het voldoen aan wettelijke bewaar- en rapportageverplichtingen</li>
          </ul>

          <h2>Bewaartermijn</h2>
          <p>
            Wij bewaren uw gegevens niet langer dan nodig is voor het doel waarvoor ze zijn
            verzameld. Voor offerteaanvragen die niet tot een opdracht leiden, hanteren wij
            een termijn van maximaal twee jaar. Voor administratie geldt de wettelijke
            bewaarplicht van zeven jaar.
          </p>

          <h2>Delen met derden</h2>
          <p>
            Wij verstrekken uw gegevens niet aan derden, tenzij dit nodig is voor de
            uitvoering van de opdracht, bijvoorbeeld bij het laten analyseren van
            watermonsters door een geaccrediteerd laboratorium, of wanneer wij daartoe
            wettelijk verplicht zijn.
          </p>

          <h2>Uw rechten</h2>
          <p>
            U heeft het recht om uw gegevens in te zien, te laten corrigeren of te laten
            verwijderen. Ook kunt u bezwaar maken tegen de verwerking. Stuur daarvoor een
            bericht naar <a href={`mailto:${site.email}`}>{site.email}</a>. Bent u het
            oneens met hoe wij met uw gegevens omgaan, dan kunt u een klacht indienen bij
            de Autoriteit Persoonsgegevens.
          </p>

          <h2>Cookies</h2>
          <p>
            Deze website plaatst uitsluitend functionele cookies die noodzakelijk zijn voor
            de werking van de site. Er worden geen tracking- of marketingcookies geplaatst
            zonder uw toestemming.
          </p>

          <h2>Contact</h2>
          <p>
            Vragen over deze privacyverklaring? Mail naar{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> of bel{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </article>
      </Section>
    </>
  );
}
