import type { NextConfig } from "next";
import oldSite from "./src/content/redirects.json";

/** Oude cleanwatersystems.nl-adressen (.html en /sitemap/lp/...) naar dezelfde pagina zonder .html. */
const escape = (path: string) => path.replace(/[()[\]{}*+?:!]/g, (c) => `\\${c}`);
const legacy = Object.entries(oldSite as Record<string, string>)
  .filter(([from, to]) => from !== to && !from.includes("%") && !from.includes(" "))
  .map(([from, to]) => [escape(from), to] as const);

/** Adressen van de tussenversie (okt 2026) naar de best passende oude pagina. */
const interim: [string, string][] = [
  ["/diensten/risicoanalyse-en-beheersplan", "/risico-inventarisatie-en-beheersplan"],
  ["/diensten/reiniging-en-desinfectie", "/reiniging-en-desinfectie-van-een-drinkwaterleidingsysteem"],
  ["/diensten/keerklepcontrole", "/keerklepcontrole"],
  ["/diensten/sediment-verwijderen-uit-boilers", "/sediment-verwijderen-uit-boilers"],
  ["/diensten/legionella-watermonsters", "/legionella-watermonsters"],
  ["/diensten/thermische-desinfectie", "/thermisch-desinfecteren-van-een-drinkwaterleidingsysteem"],
  ["/diensten/boilerreiniging", "/boiler-reiniging"],
  ["/diensten/uitvoering-beheersmaatregelen", "/uitvoering-beheersmaatregelen"],
  ["/diensten/legionella-douchekoppen", "/legionella-douchekoppen"],
  ["/diensten/aanpassen-drinkwaterinstallatie", "/aanpassen-drinkwaterinstallatie"],
  ["/diensten/stinkend-drinkwater-verhelpen", "/stinkend-drinkwater-uit-uw-waterleidingsysteem-verhelpen"],
  ["/diensten/legionella-uitbraak", "/lp/legionellabestrijding"],
  ["/branches/hotels", "/lp/legionellabestrijding/hotels"],
  ["/branches/zorginstellingen", "/lp/legionellabestrijding/verzorgingstehuizen"],
  ["/branches/sportaccommodaties", "/lp/legionellabestrijding/sportverenigingen"],
  ["/branches/:slug", "/lp/legionellabestrijding"],
  ["/branches", "/lp/legionellabestrijding"],
  ["/kenniscentrum/:slug*", "/veelgestelde-vragen"],
  ["/over-ons", "/"],
  ["/adviesbureau-voor-waterinstallaties", "/"],
  ["/categorie/:path*", "/"],
  ["/nieuwsbrief/:path*", "/"],
  ["/nieuwsbrief.html", "/"],
  ["/news.php", "/"],
  ["/page.php", "/"],
  ["/index.php", "/"],
  ["/contact.php", "/contact"],
  ["/referenties/:path*", "/reviews"],
  ["/legionella-douchekoppen/categorie/:path*", "/legionella-douchekoppen"],
  ["/sitemap/lp/:path*", "/sitemap"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [...legacy, ...interim].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
