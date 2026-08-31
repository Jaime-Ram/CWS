import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";
import { organizationSchema } from "@/lib/seo";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Legionellapreventie & BRL 6010 risicoanalyse | Clean Watersystems",
    template: "%s | Clean Watersystems",
  },
  description: site.description,
  applicationName: site.legalName,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.legalName,
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#001035",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={interTight.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2 focus:text-white"
        >
          Naar hoofdinhoud
        </a>
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organizationSchema} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            url: site.url,
            name: site.legalName,
            inLanguage: "nl-NL",
            publisher: { "@id": `${site.url}/#organization` },
          }}
        />
      </body>
    </html>
  );
}
