import "./globals.css";
import AnalyticsConsent from "./AnalyticsConsent";

export const metadata = {
  metadataBase: new URL("https://www.jpjconcept.pl"),

  title: {
    default:
      "NovaDuo – domy i segmenty Ożarów Mazowiecki | Stare Babice",
    template: "%s | NovaDuo",
  },

  description:
    "NovaDuo – nowe domy i segmenty w Pogroszewie, na pograniczu gmin Ożarów Mazowiecki i Stare Babice. Ok. 154 m² netto, garaż, ogród, pompa ciepła i rekuperacja.",

  keywords: [
    "segmenty Ożarów Mazowiecki",
    "segmenty Stare Babice",
    "domy Ożarów Mazowiecki",
    "domy Stare Babice",
    "nowe domy Ożarów Mazowiecki",
    "nowe domy Stare Babice",
    "segmenty Pogroszew",
    "segmenty pod Warszawą",
    "bliźniaki Pogroszew",
    "bliźniaki pod Warszawą",
    "domy Pogroszew",
    "domy pod Warszawą",
    "nowe domy Pogroszew",
    "NovaDuo",
    "JPJ Concept",
    "dom z garażem",
    "dom z ogrodem",
    "dom z pompą ciepła",
    "dom z rekuperacją",
  ],

  applicationName: "NovaDuo",
  authors: [{ name: "JPJ Concept Sp. z o.o." }],
  creator: "JPJ Concept Sp. z o.o.",
  publisher: "JPJ Concept Sp. z o.o.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "NovaDuo – domy i segmenty między Ożarowem Mazowieckim a Starymi Babicami",
    description:
      "Kameralna inwestycja NovaDuo w Pogroszewie, na pograniczu gmin Ożarów Mazowiecki i Stare Babice. Ok. 154 m² netto, garaż, ogród, pompa ciepła i rekuperacja.",
    url: "/",
    siteName: "NovaDuo",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/postprodukcja_0000_Scene-1_upscale01.png",
        alt: "NovaDuo – nowe domy i segmenty w Pogroszewie koło Ożarowa Mazowieckiego i Starych Babic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "NovaDuo – domy i segmenty Ożarów Mazowiecki | Stare Babice",
    description:
      "Kameralna inwestycja NovaDuo w Pogroszewie. Ok. 154 m² netto, garaż, ogród, pompa ciepła i rekuperacja.",
    images: ["/images/postprodukcja_0000_Scene-1_upscale01.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NovaDuo",
    alternateName: "NovaDuo | JPJ Concept",
    url: "https://www.jpjconcept.pl",
    inLanguage: "pl-PL",
    publisher: {
      "@type": "Organization",
      name: "JPJ Concept Sp. z o.o.",
      url: "https://www.jpjconcept.pl",
      logo: {
        "@type": "ImageObject",
        url: "https://www.jpjconcept.pl/images/logo-novaduo.png",
      },
    },
    image:
      "https://www.jpjconcept.pl/images/postprodukcja_0000_Scene-1_upscale01.png",
  };

  return (
    <html lang="pl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />

        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
