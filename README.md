# Clean Watersystems — SEO-website

Nieuwe, SEO-gerichte website voor Clean Watersystems B.V. (adviesbureau voor
waterinstallaties), gebouwd op het visuele systeem van het Investflow Webflow-template.

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
  app/                     routes (App Router)
    diensten/[slug]        12 dienstpagina's
    branches/[slug]        8 branchepagina's
    kenniscentrum/[slug]   5 kennisartikelen
    api/contact            formulierafhandeling
    sitemap.ts robots.ts   automatisch gegenereerd
  components/
    Media.tsx              beeldslot: toont de foto zodra `src` gevuld is
    blocks.tsx             kaarten, badges, stats, milestones, featured/CTA-blokken
    Tabs.tsx               accordion-tabs, kaart-tabs, genummerde accordion, slider
    Hero / HeroSplit / HeroCardSplit   drie hero-varianten uit het template
    Header, TopBar, Footer, ContactForm, Newsletter, Faq, CtaSection, ui.tsx
  data/                    site.ts, services.ts, branches.ts, articles.ts  <- alle content
  lib/seo.ts               metadata-helpers en schema.org
```

Alle teksten staan in `src/data/`. Een nieuwe dienst, branche of artikel toevoegen
betekent één object toevoegen aan de betreffende array; de pagina, de navigatie, de
footer, de interne links en de sitemap volgen automatisch.

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
- `sitemap.xml` en `robots.txt` worden gegenereerd uit de datalaag
- Schema.org: `ProfessionalService`, `WebSite`, `Service`, `FAQPage`, `Article`,
  `BreadcrumbList`, `ContactPage`, `ItemList`
- Interne linkstructuur: pillar (`/legionellapreventie`) → diensten → branches → artikelen
- Kruimelpaden met gestructureerde data op alle onderliggende pagina's

## Contactformulier

`/api/contact` verstuurt via Resend. Zet in `.env.local`:

```
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=website@cleanwatersystems.nl
```

Zonder deze variabelen weigert de route de aanvraag met een duidelijke melding
(telefoonnummer en e-mailadres), zodat er nooit stilzwijgend een aanvraag verdwijnt.

## Paginaopbouw per template-pagina

Elke pagina is nagebouwd op de template-pagina die er qua functie bij hoort:

| Onze pagina | Template-pagina |
| --- | --- |
| Home | Home V1 |
| Diensten | Portfolio V1 |
| Dienst (detail) | Portfolio single |
| Branches | Investors |
| Branche (detail) | Blog post + About-onderdelen |
| Kenniscentrum | Blog V1 |
| Artikel | Blog post |
| Legionellapreventie | Blog post |
| Over ons | About |
| Contact | Contact |
| Veelgestelde vragen | Portfolio-hero + FAQ-sectie |

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

## Logo en favicon

Het beeldmerk is een monogram-C met een druppelpunt in de opening, met een verloop
van cyaan (#6ccfff) via het merkblauw (#2365ff) naar diepblauw (#102e97). Het woordmerk zet "Clean" groot
met "watersystems" eronder. Beide regels staan op een vaste breedte via
`textLength` in SVG, waardoor ze exact op elkaar uitlijnen ongeacht of het
lettertype al geladen is. Alles staat in `src/components/Logo.tsx`.

- `LogoMark` levert alleen het merk, met een `size` in pixels
- `Logo` levert het volledige lockup, met `variant="light"` of `"dark"`
- `public/images/logo-mark.svg` is het losse merk voor extern gebruik
- `src/app/icon.png` en `apple-icon.png` zijn de favicon en het app-icoon

Alle veertien onderzochte richtingen staan als specimenblad op
https://claude.ai/code/artifact/44b27853-29fa-4f97-913f-668abbdd5f4f

## Google-beoordelingen

De reviewknop uit de bestaande site staat in de hero (`GoogleReviews`). Score en
aantal komen uit `site.reviews` en zijn nog leeg: zolang dat zo is toont de badge
alleen de vijf sterren, precies zoals de huidige site doet. Vul `rating` en
`count` in zodra de actuele cijfers bekend zijn, dan verschijnen ze automatisch.

## Beeldmateriaal

De keurmerken (Kiwa, CE, NEN-EN 1112) komen van de bestaande site en zijn uit de
gecombineerde afbeelding gesneden. De overige fotografie bestaat uit stockfoto's
van Pexels (Pexels-licentie: vrij te gebruiken, ook commercieel, zonder
naamsvermelding). De herkomst per bestand staat in
`public/images/fotos/BRONNEN.json`, met het Pexels-nummer en de bron-URL.

Beelden worden gerenderd via `<Media>`, dat de verhouding vasthoudt en op
`next/image` draait. Koppelingen staan als `image` en `imageAlt` in
`src/data/services.ts`, `branches.ts` en `articles.ts`.

## Nog te doen voor livegang

- Eigen fotografie aanleveren ter vervanging van de stockfoto's
- Content juridisch laten toetsen door de eigenaar (normen, frequenties, verplichtingen)
- Google Analytics / Tag Manager plus cookiebanner koppelen indien gewenst
- 301-redirects instellen vanaf de oude `.html`-URL's naar de nieuwe structuur
- Google Search Console verifiëren en de sitemap indienen
