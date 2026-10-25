# Clean Water Systems, website

Website voor Clean Water Systems B.V. (adviesbureau voor waterinstallaties): de teksten,
foto's en paginastructuur van de oude cleanwatersystems.nl in het visuele systeem van het
Investflow Webflow-template.

## Stack

- Next.js 15 (App Router) met React 19
- Tailwind CSS v4 (design-tokens uit het Investflow-template in `src/app/globals.css`)
- TypeScript
- Volledig statisch gegenereerd, behalve `/api/contact`

## Aan de slag

```bash
npm install
npm run dev      # http://localhost:3111
npm run build
npm run start
```

## Structuur

```
src/
  content/                 inhoud van de oude site (gegenereerd, niet met de hand bewerken)
    pages.json             117 pagina's: diensten, producten, 80 landingspagina's, juridisch
    shared.json            gedeelde blokken, reviews, homepagekaarten
    redirects.json         oude adressen (.html, /sitemap/lp/...) naar nieuwe paden
    fixes.ts               handmatige tekstcorrecties, elk met reden
    index.ts               types en helpers (getPage, landingTopics, products)
  app/
    page.tsx               homepage, opgebouwd uit de oude homepagetekst
    [...slug]/page.tsx     alle overige pagina's, opmaak per soort (dienst, product, formulier, ...)
    sitemap/page.tsx       HTML-sitemap met alle landingspagina's
    api/contact            formulier via Microsoft 365 (Graph)
  components/content.tsx   tekstweergave, zijbalk, gedeelde blokken, reviews
  data/site.ts             bedrijfsgegevens en hoofdmenu
scripts/
  extract-oude-site.py     zet het archief om naar src/content en public/images/oud
```

### Inhoud opnieuw genereren

Het archief (`Clean Water Systems bestanden`, Melange Design, 3 sep 2026) staat niet in de repo.

```bash
python3 -I scripts/extract-oude-site.py "<pad naar Clean Water Systems bestanden>" .
```

Tekstcorrecties horen in `src/content/fixes.ts`, niet in de JSON, zodat ze een nieuwe
extractie overleven.

## Componenten uit het template

Overgenomen uit Investflow: hero v1 (donker, afgerond), hero v2 (split met beeld),
contact-hero (donkere kaart + formulier), notification bar, logo-marquee, stats-cards
met accentcijfer, portfolio-cards v1 en v3 (donkere kaarten met visual), team-card v2,
features-v2 tabs, genummerde accordion, office-tabs, featured blog v1 met image-left
items, milestone-timeline, testimonial-cards v1 en slider v2, card-cta, cta-v5
nieuwsbrief en de blog-categorie-pills.

Elke paginasoort gebruikt een andere combinatie, zodat home, overzichten, detailpagina's,
artikelen, contact en FAQ visueel van elkaar verschillen.

## Design-tokens

De kleuren, radii, spacing en typeschaal komen uit het Investflow-template en staan
in het `@theme`-blok van `src/app/globals.css`.

| Token | Waarde |
| --- | --- |
| Primair | `#2365ff` |
| Primair donker | `#1d36b6` |
| Accent (water) | `#2db2ff` |
| Donker vlak | `#001035` |
| Lichte vlakken | `#f1f4ff` |
| Font | Inter Tight |
| Container | 1208 px |
| Hoekradii | 3 / 6 / 12 / 18 / 24 / 36 px |
| Sectiepadding | 100 px |

## SEO

- Per pagina een eigen `title` (max 63 tekens incl. merknaam) en `description` (80-160 tekens)
- Canonical URL op elke pagina
- `sitemap.xml` en `robots.txt` worden gegenereerd uit `src/content`
- Previews en het testdomein krijgen `noindex` en een blokkerende `robots.txt`;
  alleen productie (`VERCEL_ENV=production`) is indexeerbaar
- Oude adressen sturen permanent door (`next.config.ts`, uit `redirects.json`)
- Schema.org: `ProfessionalService`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`
- Landingspagina's linken naar hun onderwerp en hun buren; `/sitemap` linkt naar alles
- Kruimelpaden met gestructureerde data op alle onderliggende pagina's

## Contactformulier

`/api/contact` verstuurt via de eigen Microsoft 365-omgeving van Clean Water Systems
(Graph `sendMail`, app-registratie in Entra met applicatierecht `Mail.Send`). Zet in Vercel:

```
MS_TENANT_ID=...
MS_CLIENT_ID=...
MS_CLIENT_SECRET=...
CONTACT_SENDER=info@cleanwatersystems.nl   # mailbox die verstuurt, optioneel
```

Zonder deze variabelen weigert de route de aanvraag met een duidelijke melding
(telefoonnummer en e-mailadres), zodat er nooit stilzwijgend een aanvraag verdwijnt.

## Video

De bedrijfsimpressie draait als achtergrond in de hero (`HeroVideo`). De poster
staat er direct, de YouTube-iframe schuift daar overheen zodra hij geladen is.
Op schermen smaller dan 992px en bij "beperk beweging" blijft het bij de poster:
dat scheelt data en batterij, en de uitsnede van een 16:9 video werkt daar niet.

De twee andere video's van hun kanaal staan op de bijbehorende dienstpagina's
(keerklepcontrole en reiniging en desinfectie), daar als klik-om-te-spelen
voorvertoning via `VideoEmbed`. Beide gebruiken `youtube-nocookie.com`.

Beter zou zijn om het MP4-bestand zelf te hosten: dat is sneller en er komt geen
derde partij aan te pas. Vraag daarvoor het originele bestand op bij de klant.

## Logo

Het originele klantlogo, als witte (`logo-cws-light.png`) en navy versie
(`logo-cws-dark.png`) in `public/images/brand`, via `src/components/Logo.tsx`.

## Beoordelingen

Score en aantal (4,9 uit 7) en de vier reviews komen van de oude reviewpagina.

## Beeldmateriaal

Alle foto's komen uit het archief van de oude site (`public/images/oud`). Van vijf
productfoto's was het origineel niet bewaard; daar is de grootste verkleinde versie
gebruikt. De keurmerken (Kiwa, CE, NEN-EN 1112) staan in `public/images/fotos`.

## Nog te doen

- Microsoft 365-gegevens in Vercel zetten zodat het formulier verstuurt
- Google Search Console verifiëren en de sitemap indienen
- Productfoto's in hoge resolutie opvragen (zie Beeldmateriaal)
