import Link from "next/link";
import { ArrowLeft, Camera, Home } from "lucide-react";

export const metadata = {
  title: "Galeria NovaDuo | Pogroszew",
  description:
    "Galeria inwestycji NovaDuo w Pogroszewie: wizualizacje budynków, inspiracje wnętrz oraz zdjęcia z realizacji.",
  alternates: {
    canonical: "https://www.jpjconcept.pl/galeria",
  },
  openGraph: {
    title: "Galeria NovaDuo | Pogroszew",
    description:
      "Zobacz wizualizacje budynków, wnętrz oraz zdjęcia z realizacji inwestycji NovaDuo.",
    url: "https://www.jpjconcept.pl/galeria",
    siteName: "NovaDuo | JPJ Concept",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/postprodukcja_0000_Scene-1_upscale01.png",
        alt: "NovaDuo w Pogroszewie",
      },
    ],
  },
};

const exteriorImages = [
    "/images/postprodukcja_0000_Scene-1_upscale01.png",
    "/images/postprodukcja_0001_Scene-7_upscale01.png",
    "/images/postprodukcja_0002_Scene-2_upscale01.png",
    "/images/postprodukcja_0003_Scene-3_upscale01.png",
    "/images/postprodukcja_0004_Scene-4_upscale01.png",
    "/images/postprodukcja_0005_Scene-5_upscale01.png",
    "/images/postprodukcja_0006_Scene-6_upscale01.png",
    "/images/postprodukcja_0007_Scene-8_upscale01.png",
    "/images/postprodukcja_0008_Scene-9_upscale01.png",
    "/images/postprodukcja_0009_Scene-10_upscale01.png",
    "/images/postprodukcja_0010_Scene-11_upscale01.png",
  ];

const interiorImages = [
    "/images/postprodukcja_0003_Scene-27_upscale01.webp",
    "/images/postprodukcja_0004_Scene-26_upscale01.webp",
    "/images/postprodukcja_0005_Scene-25_upscale01.webp",
    "/images/postprodukcja_0006_Scene-24_upscale01.webp",
    "/images/postprodukcja_0007_Scene-23_upscale01.webp",
    "/images/postprodukcja_0008_Scene-22_upscale01.webp",
    "/images/postprodukcja_0009_Scene-21_upscale01.webp",
    "/images/postprodukcja_0010_Scene-20_upscale01.webp",
    "/images/postprodukcja_0011_Scene-19_upscale01.webp",
    "/images/postprodukcja_0012_Scene-18_upscale01.webp",
    "/images/postprodukcja_0013_Scene-17_upscale01.webp",
    "/images/postprodukcja_0014_Scene-16_upscale01.webp",
    "/images/postprodukcja_0015_Scene-15_upscale01.webp",
    "/images/postprodukcja_0016_Scene-14_upscale01.webp",
    "/images/postprodukcja_0017_Scene-13_upscale01.webp",
    "/images/postprodukcja_0018_Scene-12_upscale01.webp",
    "/images/postprodukcja_0019_Scene-11_upscale01.webp",
    "/images/postprodukcja_0020_Scene-10_upscale01.webp",
  ];

const constructionImages = [
    "/images/01.jpg",
    "/images/02.jpg",
    "/images/03.jpg",
    "/images/04.jpg",
    "/images/05.jpg",
    "/images/06.jpg",
    "/images/07.jpg",
    "/images/08.jpg",
    "/images/09.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
  ];

function GalleryGrid({ images, altPrefix }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {images.map((src, index) => (
        <a
          key={src}
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-2xl bg-white shadow-sm"
          aria-label={`Otwórz zdjęcie ${index + 1}`}
        >
          <img
            src={src}
            alt={`${altPrefix} ${index + 1}`}
            loading="lazy"
            className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-64 lg:h-72"
          />
        </a>
      ))}
    </div>
  );
}

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" aria-label="Powrót do NovaDuo">
            <img
              src="/images/logo-novaduo.png"
              alt="NovaDuo"
              className="h-20 w-auto sm:h-24"
            />
          </Link>

          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white/60 px-5 text-sm font-medium transition hover:bg-[#1f3d2b] hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Wróć do strony głównej
          </Link>
        </div>
      </nav>

      <section className="border-b border-black/5 bg-[#e8eadb]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:py-20">
          <Camera className="mx-auto h-9 w-9 text-[#1f3d2b]" />

          <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            NovaDuo
          </div>

          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Galeria inwestycji
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/60">
            Wizualizacje budynków, przykładowe aranżacje wnętrz oraz zdjęcia
            dokumentujące realizację inwestycji NovaDuo w Pogroszewie.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="#budynki"
              className="rounded-full bg-[#1f3d2b] px-5 py-3 text-white"
            >
              Budynki
            </a>
            <a
              href="#wnetrza"
              className="rounded-full border border-black/15 bg-white/60 px-5 py-3"
            >
              Wnętrza
            </a>
            <a
              href="#budowa"
              className="rounded-full border border-black/15 bg-white/60 px-5 py-3"
            >
              Budowa
            </a>
          </div>
        </div>
      </section>

      <section id="budynki" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.24em] text-[#1f3d2b]/55">
            Wizualizacje
          </div>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Budynki i otoczenie
          </h2>
        </div>

        <GalleryGrid
          images={exteriorImages}
          altPrefix="Wizualizacja budynków NovaDuo"
        />
      </section>

      <section id="wnetrza" className="scroll-mt-32 bg-white/55 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <div className="text-sm uppercase tracking-[0.24em] text-[#1f3d2b]/55">
              Inspiracje
            </div>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Przykładowe aranżacje wnętrz
            </h2>
          </div>

          <GalleryGrid
            images={interiorImages}
            altPrefix="Przykładowa aranżacja wnętrza NovaDuo"
          />
        </div>
      </section>

      <section id="budowa" className="scroll-mt-32 mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.24em] text-[#1f3d2b]/55">
            Realizacja
          </div>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            Zdjęcia z budowy
          </h2>
        </div>

        <GalleryGrid
          images={constructionImages}
          altPrefix="Zdjęcie z realizacji NovaDuo"
        />
      </section>

      <section className="bg-[#1f3d2b] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Poznaj dostępne lokale</h2>
            <p className="mt-2 text-white/65">
              Aktualne ceny, powierzchnie i statusy sprzedaży znajdziesz na
              stronie głównej NovaDuo.
            </p>
          </div>

          <Link
            href="/#lokale"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 font-medium text-[#1f3d2b]"
          >
            <Home className="mr-2 h-4 w-4" />
            Lokale i ceny
          </Link>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f6f3ec] py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
          <div>© 2026 NovaDuo | JPJ Concept Sp. z o.o.</div>
          <div>ul. Nowowiejska 58A, Pogroszew, 05-850 Ożarów Mazowiecki</div>
        </div>
      </footer>
    </main>
  );
}
