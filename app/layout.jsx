export const metadata = {
  title: "NovaDuo – Domy Dwulokalowe w Pogroszewie",
  description:
    "Nowoczesne domy dwulokalowe pod Warszawą. Kameralne osiedle, garaż, ogród i wysoki standard wykończenia, Dom Stare Babice, Dom Babice Nowe, Dom Warszawa Zachód, Segment Warszawa Zachód, Segmenty Warszawa Zachód, Segmenty Ożarów Mazowiecki, Nowoczesne segmenty pod Warszawą.",
};
import "./globals.css";

export const metadata = {
  title:
    "NovaDuo – Domy i bliźniaki Pogroszew | Ożarów Mazowiecki | JPJ Concept",

  description:
    "Nowoczesne domy dwulokalowe w Pogroszewie pod Ożarowem Mazowieckim. Kameralna inwestycja NovaDuo przy ul. Nowowiejskiej 58. Garaż, ogród, pompa ciepła i spokojna okolica.",

  keywords: [
    "domy Pogroszew",
    "bliźniaki Pogroszew",
    "domy Ożarów Mazowiecki",
    "bliźniaki Ożarów Mazowiecki",
    "domy pod Warszawą",
    "nowe domy Pogroszew",
    "dom Stare Babice",
    "dom okolice Kampinosu",
    "bliźniak okolice Kampinosu",
    "bliźniak okolice Stare Babice",
    "NovaDuo",
    "JPJ Concept",
    "dom z garażem",
    "dom z ogrodem",
  ],

  openGraph: {
    title:
      "NovaDuo – Domy dwulokalowe w Pogroszewie",
    description:
      "Kameralna inwestycja nowoczesnych domów pod Warszawą.",
    url: "https://jpjconcept.pl",
    siteName: "NovaDuo",
    locale: "pl_PL",
    type: "website",
  },

  icons: {
  icon: "/icon.png",
},
};
export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>

      <body>{children}</body>
    </html>
  );
}