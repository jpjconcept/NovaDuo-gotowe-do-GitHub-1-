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

    title: "NovaDuo – Domy dwulokalowe w Pogroszewie",
 description:
"Nowoczesne domy i bliźniaki w Pogroszewie pod Warszawą. Kameralna inwestycja NovaDuo przy ul. Nowowiejskiej 58. 8 lokali z garażem, działkami od 255 do 424 m² oraz pompą ciepła.",
  url: "https://novaduo.pl",
  siteName: "NovaDuo",
  locale: "pl_PL",
  type: "website",
},

alternates: {
  canonical: "https://novaduo.pl",
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