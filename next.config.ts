import type { NextConfig } from "next";

/** Oude URL's van de vorige cleanwatersystems.nl, permanent naar de nieuwe pagina's. */
const legacy: [string, string][] = [
  ["/home.html", "/"],
  ["/site-index.html", "/"],
  ["/sitemap.html", "/"],
  ["/page.php", "/"],
  ["/news.php", "/kenniscentrum"],
  ["/nieuwsbrief.html", "/"],
  ["/nieuwsbrief/:path*", "/"],
  ["/contact.html", "/contact"],
  ["/contact.php", "/contact"],
  ["/afspraak-maken.html", "/contact"],
  ["/offerte-aanvragen.html", "/contact"],
  ["/adviesbureau-voor-waterinstallaties.html", "/over-ons"],
  ["/referenties.html", "/over-ons"],
  ["/referenties/:path*", "/over-ons"],
  ["/reviews.html", "/over-ons"],
  ["/contractmanagement.html", "/diensten/uitvoering-beheersmaatregelen"],
  ["/inspectie-en-inventarisatie.html", "/diensten/risicoanalyse-en-beheersplan"],
  ["/risico-inventarisatie-en-beheersplan.html", "/diensten/risicoanalyse-en-beheersplan"],
  ["/diensten/risico-inventarisatie-en-beheersplan", "/diensten/risicoanalyse-en-beheersplan"],
  ["/diensten/chemisch-technisch", "/diensten/reiniging-en-desinfectie"],
  ["/legionellapreventie.html", "/legionellapreventie"],
  ["/legionella-watermonsters.html", "/diensten/legionella-watermonsters"],
  ["/legionella-douchekoppen.html", "/diensten/legionella-douchekoppen"],
  ["/legionella-douchekoppen/:path*", "/diensten/legionella-douchekoppen"],
  ["/sitemap/lp/:path*", "/diensten/legionella-douchekoppen"],
  ["/aanpassen-drinkwaterinstallatie.html", "/diensten/aanpassen-drinkwaterinstallatie"],
  ["/herstellen-gebreken-waterleiding.html", "/diensten/aanpassen-drinkwaterinstallatie"],
  ["/boiler-reiniging.html", "/diensten/boilerreiniging"],
  ["/sediment-verwijderen-boilers.html", "/diensten/sediment-verwijderen-uit-boilers"],
  ["/sediment-verwijderen-uit-boilers.html", "/diensten/sediment-verwijderen-uit-boilers"],
  ["/keerklep-controle.html", "/diensten/keerklepcontrole"],
  ["/keerklepcontrole.html", "/diensten/keerklepcontrole"],
  ["/koeltoren-reinigen-en-desinfecteren.html", "/diensten/reiniging-en-desinfectie"],
  ["/reiniging-en-desinfectie.html", "/diensten/reiniging-en-desinfectie"],
  ["/reiniging-en-desinfectie", "/diensten/reiniging-en-desinfectie"],
  ["/reiniging-en-desinfectie-van-een-drinkwaterleidingsysteem.html", "/diensten/reiniging-en-desinfectie"],
  ["/reiniging-en-desinfece-van-een-drinkwaterleidingsysteem.html", "/diensten/reiniging-en-desinfectie"],
  ["/privacyverklaring.html", "/privacyverklaring"],
  ["/cookies.html", "/privacyverklaring"],
  ["/cookieverklaring.html", "/privacyverklaring"],
  ["/categorie/:path*", "/diensten/reiniging-en-desinfectie"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
