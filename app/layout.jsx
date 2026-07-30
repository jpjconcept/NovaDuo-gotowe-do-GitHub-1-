import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.jpjconcept.pl"),

  title: {
    default:
      "NovaDuo – Segmenty, domy i bliźniaki w Pogroszewie | JPJ Concept",
    template: "%s | NovaDuo",
  },

  description:
    "Nowoczesne domy dwulokalowe w Pogroszewie, w gminie Ożarów Mazowiecki. Kameralna inwestycja NovaDuo przy ul. Nowowiejskiej 58. Garaż, prywatny ogród, pompa ciepła i rekuperacja.",

  keywords: [
    "segmenty Pogroszew",
    "segmenty pod Warszawą",
    "bliźniaki Pogroszew",
    "bliźniaki pod Warszawą",
    "domy Pogroszew",
    "domy Ożarów Mazowiecki",
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
      "NovaDuo – Segmenty, domy i bliźniaki w Pogroszewie pod Warszawą",
    description:
      "Kameralna inwestycja NovaDuo przy ul. Nowowiejskiej 58 w Pogroszewie. 8 lokali z garażami, prywatnymi ogrodami, pompami ciepła i rekuperacją.",
    url: "/",
    siteName: "NovaDuo",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/postprodukcja_0000_Scene-1_upscale01.png",
        alt: "NovaDuo – nowe segmenty i bliźniaki w Pogroszewie pod Warszawą",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "NovaDuo – Segmenty, domy i bliźniaki w Pogroszewie pod Warszawą",
    description:
      "Kameralna inwestycja NovaDuo w Pogroszewie. Garaż, prywatny ogród, pompa ciepła i rekuperacja.",
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
      </body>
    </html>
  );
}
