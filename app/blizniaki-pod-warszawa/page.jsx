import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Car,
  Check,
  Home,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Trees,
  Wind,
} from "lucide-react";

export const metadata = {
  title: "Bliźniaki pod Warszawą na sprzedaż | NovaDuo Pogroszew",
  description:
    "Nowe bliźniaki pod Warszawą w inwestycji NovaDuo w Pogroszewie. Przestronne lokale z garażem, prywatnym ogrodem, pompą ciepła i rekuperacją.",
  keywords: [
    "bliźniaki pod Warszawą",
    "bliźniaki pod Warszawą na sprzedaż",
    "nowe bliźniaki pod Warszawą",
    "dom bliźniak pod Warszawą",
    "bliźniaki z ogrodem pod Warszawą",
    "bliźniaki z garażem pod Warszawą",
    "bliźniaki Pogroszew",
    "bliźniaki Ożarów Mazowiecki",
    "NovaDuo",
  ],
  alternates: {
    canonical: "https://www.jpjconcept.pl/blizniaki-pod-warszawa",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bliźniaki pod Warszawą na sprzedaż | NovaDuo",
    description:
      "Kameralna inwestycja NovaDuo w Pogroszewie: przestronne lokale w budynkach dwulokalowych z garażem, ogrodem, pompą ciepła i rekuperacją.",
    url: "https://www.jpjconcept.pl/blizniaki-pod-warszawa",
    siteName: "NovaDuo | JPJ Concept",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/postprodukcja_0002_Scene-2_upscale01.png",
        width: 1200,
        height: 630,
        alt: "Bliźniaki NovaDuo pod Warszawą",
      },
    ],
  },
};

const advantages = [
  {
    icon: Ruler,
    title: "Około 154 m² netto",
    description:
      "Przestrzeń zapewniająca wygodny układ pomieszczeń dla całej rodziny.",
  },
  {
    icon: Car,
    title: "Garaż w bryle",
    description:
      "Każdy lokal posiada własny garaż z panelową bramą wyposażoną w napęd.",
  },
  {
    icon: Trees,
    title: "Prywatny ogród",
    description:
      "Ogrody przeznaczone do wyłącznego użytkowania o powierzchni od 255 do 424 m².",
  },
  {
    icon: Home,
    title: "Tylko 8 lokali",
    description:
      "Cztery budynki dwulokalowe tworzą kameralną i uporządkowaną inwestycję.",
  },
];

const standard = [
  "Powietrzna pompa ciepła",
  "Wentylacja mechaniczna z rekuperacją",
  "Ogrzewanie podłogowe",
  "Stolarka okienna trzyszybowa",
  "Brama garażowa z napędem",
  "Instalacja sieci LAN",
  "Betonowe schody wewnętrzne",
  "Tynki gipsowe",
  "Szlichty cementowe",
  "Drzwi wejściowe klasy C",
];

const galleryImages = [
  {
    src: "/images/postprodukcja_0000_Scene-1_upscale01.png",
    alt: "Nowe bliźniaki NovaDuo pod Warszawą",
  },
  {
    src: "/images/postprodukcja_0001_Scene-7_upscale01.png",
    alt: "Bliźniaki z garażami w inwestycji NovaDuo",
  },
  {
    src: "/images/postprodukcja_0002_Scene-2_upscale01.png",
    alt: "Wizualizacja bliźniaków NovaDuo w Pogroszewie",
  },
  {
    src: "/images/postprodukcja_0003_Scene-3_upscale01.png",
    alt: "Kameralna zabudowa dwulokalowa NovaDuo",
  },
  {
    src: "/images/postprodukcja_0004_Scene-4_upscale01.png",
    alt: "Bliźniaki z prywatnymi ogrodami pod Warszawą",
  },
  {
    src: "/images/postprodukcja_0005_Scene-5_upscale01.png",
    alt: "Nowoczesna zabudowa bliźniacza NovaDuo",
  },
  {
    src: "/images/postprodukcja_0004_Scene-26_upscale01.webp",
    alt: "Przykładowe wnętrze lokalu NovaDuo",
  },
  {
    src: "/images/postprodukcja_0005_Scene-25_upscale01.webp",
    alt: "Nowoczesna aranżacja salonu NovaDuo",
  },
  {
    src: "/images/postprodukcja_0006_Scene-24_upscale01.webp",
    alt: "Przykładowe wykończenie wnętrza bliźniaka NovaDuo",
  },
  {
    src: "/images/postprodukcja_0007_Scene-23_upscale01.webp",
    alt: "Wizualizacja pomieszczenia w lokalu NovaDuo",
  },
  {
    src: "/images/postprodukcja_0008_Scene-22_upscale01.webp",
    alt: "Inspiracja aranżacji wnętrza NovaDuo",
  },
  {
    src: "/images/postprodukcja_0009_Scene-21_upscale01.webp",
    alt: "Przykładowa aranżacja domu w zabudowie bliźniaczej",
  },
];

const faq = [
  {
    question: "Gdzie znajdują się bliźniaki NovaDuo?",
    answer:
      "Inwestycja znajduje się przy ul. Nowowiejskiej 58 w Pogroszewie, w gminie Ożarów Mazowiecki, w zachodniej części aglomeracji warszawskiej.",
  },
  {
    question: "Czy NovaDuo to klasyczne domy bliźniacze?",
    answer:
      "NovaDuo składa się z czterech budynków dwulokalowych. Każdy lokal ma osobne wejście, garaż w bryle budynku oraz własną przestrzeń ogrodową. Tego rodzaju zabudowa jest często potocznie określana jako bliźniacza.",
  },
  {
    question: "Jaką powierzchnię mają lokale?",
    answer:
      "Większość lokali ma 154,57 m² powierzchni netto oraz 118,48 m² powierzchni użytkowej. Lokal 58/7 ma 154,02 m² powierzchni netto oraz 123,62 m² powierzchni użytkowej.",
  },
  {
    question: "Czy każdy lokal posiada prywatny ogród?",
    answer:
      "Tak. Do każdego lokalu przypisana jest przestrzeń ogrodowa przeznaczona do wyłącznego użytkowania. Powierzchnie ogrodów wynoszą od 255 do 424 m².",
  },
  {
    question: "Czy każdy lokal posiada garaż?",
    answer:
      "Tak. Każdy lokal posiada garaż znajdujący się w bryle budynku.",
  },
  {
    question: "Jak ogrzewane są budynki?",
    answer:
      "Ogrzewanie budynku i przygotowanie ciepłej wody użytkowej realizowane jest za pomocą powietrznej pompy ciepła. Lokale wyposażone są również w ogrzewanie podłogowe.",
  },
  {
    question: "Czy w lokalach przewidziano rekuperację?",
    answer:
      "Tak. W standardzie przewidziano instalację wentylacji mechanicznej z rekuperacją, stosownie do przeznaczenia pomieszczeń.",
  },
  {
    question: "Gdzie można sprawdzić aktualne ceny?",
    answer:
      "Aktualne ceny, statusy sprzedaży, daty obowiązywania cen, powierzchnie ogrodów i karty lokali publikujemy w głównej ofercie inwestycji NovaDuo.",
  },
];

export default function BlizniakiPodWarszawaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bliźniaki pod Warszawą – NovaDuo Pogroszew",
    description:
      "Nowe lokale w budynkach dwulokalowych z garażem, prywatnym ogrodem, pompą ciepła i rekuperacją w Pogroszewie pod Warszawą.",
    url: "https://www.jpjconcept.pl/blizniaki-pod-warszawa",
    inLanguage: "pl-PL",
    isPartOf: {
      "@type": "WebSite",
      name: "NovaDuo | JPJ Concept",
      url: "https://www.jpjconcept.pl",
    },
    about: {
      "@type": "Residence",
      name: "NovaDuo",
      image:
        "https://www.jpjconcept.pl/images/postprodukcja_0002_Scene-2_upscale01.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Nowowiejska 58",
        addressLocality: "Pogroszew",
        postalCode: "05-850",
        addressRegion: "mazowieckie",
        addressCountry: "PL",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "JPJ Concept Sp. z o.o.",
      url: "https://www.jpjconcept.pl",
      telephone: "+48600397399",
      email: "kontakt@jpjconcept.pl",
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://www.jpjconcept.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bliźniaki pod Warszawą",
        item: "https://www.jpjconcept.pl/blizniaki-pod-warszawa",
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="NovaDuo – strona główna">
            <img
              src="/images/logo-novaduo.png"
              alt="NovaDuo"
              className="h-24 w-auto md:h-28"
            />
          </Link>

          <div className="hidden items-center gap-7 text-sm text-black/65 md:flex">
            <a href="#inwestycja">Inwestycja</a>
            <a href="#zalety">Zalety</a>
            <a href="#standard">Standard</a>
            <a href="#lokalizacja">Lokalizacja</a>
            <a href="#oferta">Lokale i ceny</a>
            <a href="#galeria">Galeria</a>
            <a href="#pytania">Pytania</a>
          </div>

          <a
            href="#kontakt"
            className="rounded-full bg-[#1f3d2b] px-5 py-3 text-sm text-white transition hover:bg-[#152b1e]"
          >
            Zapytaj o lokal
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(78,113,76,0.22),transparent_38%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#1f3d2b]/20 bg-white/60 px-4 py-2 text-sm text-[#1f3d2b] shadow-sm">
              <MapPin className="h-4 w-4" />
              Pogroszew, gmina Ożarów Mazowiecki
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
              Nowe bliźniaki pod Warszawą z ogrodem i garażem
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              NovaDuo to kameralna inwestycja czterech budynków dwulokalowych
              w Pogroszewie. Oferuje przestrzeń domu, prywatny ogród, garaż
              oraz nowoczesne rozwiązania techniczne w spokojnym otoczeniu
              pod Warszawą.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#oferta"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-white transition hover:bg-[#152b1e]"
              >
                Sprawdź dostępne bliźniaki
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#galeria"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-white/50 px-7"
              >
                Zobacz galerię
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/postprodukcja_0002_Scene-2_upscale01.png"
                alt="Nowe bliźniaki NovaDuo pod Warszawą"
                className="h-[460px] w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/postprodukcja_0004_Scene-4_upscale01.png"
                alt="Bliźniaki z garażami w inwestycji NovaDuo"
                className="h-40 w-full rounded-3xl object-cover"
              />

              <img
                src="/images/postprodukcja_0005_Scene-25_upscale01.webp"
                alt="Przykładowe wnętrze lokalu NovaDuo"
                className="h-40 w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="inwestycja"
        className="scroll-mt-36 mx-auto max-w-7xl px-6 py-20"
      >
        <div className="mb-14 max-w-4xl">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Bliźniaki pod Warszawą
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Przestrzeń domu w kameralnej inwestycji
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-black/70">
            <p>
              NovaDuo składa się z czterech budynków dwulokalowych, czyli
              łącznie ośmiu lokali mieszkalnych. Każdy lokal ma osobne wejście,
              garaż w bryle budynku oraz przestrzeń ogrodową przeznaczoną do
              wyłącznego użytkowania.
            </p>

            <p>
              Tego rodzaju zabudowa jest często poszukiwana jako bliźniak pod
              Warszawą. Zapewnia dużą powierzchnię i funkcjonalność domu, a
              jednocześnie pozwala zamieszkać w uporządkowanej, niewielkiej
              inwestycji.
            </p>

            <p>
              Pogroszew, położony w gminie Ożarów Mazowiecki, umożliwia
              połączenie spokojniejszego otoczenia z dostępem do
              infrastruktury i głównych tras prowadzących w kierunku Warszawy.
            </p>
          </div>
        </div>

        <div
          id="zalety"
          className="scroll-mt-36 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-black/5 bg-white/75 p-7 shadow-sm"
            >
              <Icon className="mb-5 h-8 w-8 text-[#1f3d2b]" />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1f3d2b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.28em] text-white/50">
              Codzienny komfort
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Bliźniak jako alternatywa dla mieszkania w mieście
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-white/75">
            <p>
              Większa powierzchnia, własny ogród i garaż pozwalają wygodniej
              zorganizować życie rodzinne, pracę z domu oraz przechowywanie
              codziennych rzeczy.
            </p>

            <p>
              Dwie kondygnacje pomagają wyraźnie oddzielić wspólną strefę
              dzienną od prywatnej części sypialnianej.
            </p>

            <p>
              NovaDuo łączy te zalety z nowoczesnymi instalacjami i kameralną
              skalą całej inwestycji.
            </p>
          </div>
        </div>
      </section>

      <section
        id="standard"
        className="scroll-mt-36 mx-auto max-w-7xl px-6 py-20"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Standard deweloperski
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Nowoczesne instalacje i przemyślane rozwiązania
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Lokale NovaDuo realizowane są w standardzie deweloperskim z
              rozwiązaniami wpływającymi na wygodę użytkowania, jakość
              powietrza oraz sposób ogrzewania budynku.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {standard.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <div className="mt-0.5 rounded-full bg-[#dfead8] p-1">
                  <Check className="h-4 w-4 text-[#1f3d2b]" />
                </div>

                <span className="leading-6 text-black/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-[#e4e6d7] p-8">
            <Wind className="mb-5 h-8 w-8 text-[#1f3d2b]" />
            <h3 className="text-2xl font-semibold">Rekuperacja</h3>
            <p className="mt-3 leading-7 text-black/65">
              Instalacja wentylacji mechanicznej zapewniająca kontrolowaną
              wymianę powietrza w pomieszczeniach.
            </p>
          </div>

          <div className="rounded-3xl bg-[#e4e6d7] p-8">
            <Building2 className="mb-5 h-8 w-8 text-[#1f3d2b]" />
            <h3 className="text-2xl font-semibold">Pompa ciepła</h3>
            <p className="mt-3 leading-7 text-black/65">
              Powietrzna pompa ciepła służąca do ogrzewania budynku i
              przygotowania ciepłej wody użytkowej.
            </p>
          </div>

          <div className="rounded-3xl bg-[#e4e6d7] p-8">
            <ShieldCheck className="mb-5 h-8 w-8 text-[#1f3d2b]" />
            <h3 className="text-2xl font-semibold">Własne wejście</h3>
            <p className="mt-3 leading-7 text-black/65">
              Każdy lokal posiada osobne wejście, garaż i przypisaną przestrzeń
              ogrodową.
            </p>
          </div>
        </div>
      </section>

      <section
        id="lokalizacja"
        className="scroll-mt-36 bg-white/60 py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Lokalizacja
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Bliźniaki w Pogroszewie, w gminie Ożarów Mazowiecki
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-black/65">
              <p>
                Inwestycja NovaDuo powstaje przy ul. Nowowiejskiej 58 w
                Pogroszewie, w zachodniej części aglomeracji warszawskiej.
              </p>

              <p>
                Lokalizacja zapewnia dostęp do infrastruktury Ożarowa
                Mazowieckiego, placówek edukacyjnych, sklepów i głównych tras
                komunikacyjnych.
              </p>

              <p>
                Otoczenie zabudowy jednorodzinnej i terenów zielonych pozwala
                zamieszkać poza zwartą zabudową Warszawy.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <iframe
              title="Lokalizacja bliźniaków NovaDuo w Pogroszewie"
              src="https://www.google.com/maps?q=Nowowiejska+58,+Pogroszew&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section
        id="oferta"
        className="scroll-mt-36 mx-auto max-w-7xl px-6 py-20"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <img
              src="/images/usytuowanie-lokali-novaduo.webp"
              alt="Usytuowanie bliźniaków i lokali NovaDuo"
              className="w-full object-contain"
            />
          </div>

          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Dostępne lokale
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Wybierz lokal dopasowany do potrzeb rodziny
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Poszczególne lokale różnią się położeniem oraz powierzchnią
              przypisanych ogrodów. Aktualne ceny, statusy sprzedaży, daty
              obowiązywania cen i karty lokali publikujemy w głównej ofercie
              inwestycji NovaDuo.
            </p>

            <Link
              href="/#lokale"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-white transition hover:bg-[#152b1e]"
            >
              Przejdź do aktualnych cen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <p className="mt-3 text-sm leading-6 text-black/50">
              Przycisk prowadzi do tabeli cen na głównej stronie inwestycji.
            </p>
          </div>
        </div>
      </section>

      <section id="galeria" className="scroll-mt-36 bg-white/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Galeria NovaDuo
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Zobacz zabudowę i przykładowe wnętrza
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/60">
              Wizualizacje pokazują charakter budynków NovaDuo oraz przykładowe
              możliwości aranżacji wnętrz.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-3xl bg-white shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pytania"
        className="scroll-mt-36 bg-[#e4e6d7] py-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Najczęściej zadawane pytania
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Bliźniaki NovaDuo pod Warszawą
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item) => (
              <article
                key={item.question}
                className="rounded-3xl bg-white/85 p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <p className="mt-3 leading-7 text-black/65">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#1f3d2b]/10 bg-[#f6f3ec] p-8 md:p-10">
              <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
                Szersze wyszukiwanie
              </div>

              <h2 className="text-3xl font-semibold tracking-tight">
                Segmenty pod Warszawą
              </h2>

              <p className="mt-4 leading-7 text-black/65">
                Poznaj NovaDuo jako kameralną inwestycję segmentów z ogrodami,
                garażami, pompami ciepła i rekuperacją.
              </p>

              <Link
                href="/segmenty-pod-warszawa"
                className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-white transition hover:bg-[#152b1e]"
              >
                Zobacz segmenty pod Warszawą
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-[2rem] border border-[#1f3d2b]/10 bg-[#e4e6d7] p-8 md:p-10">
              <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
                Lokalizacja inwestycji
              </div>

              <h2 className="text-3xl font-semibold tracking-tight">
                Segmenty Pogroszew
              </h2>

              <p className="mt-4 leading-7 text-black/65">
                Sprawdź szczegóły inwestycji NovaDuo, jej lokalizację,
                parametry lokali i standard deweloperski.
              </p>

              <Link
                href="/segmenty-pogroszew"
                className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-white transition hover:bg-[#152b1e]"
              >
                Zobacz segmenty w Pogroszewie
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="scroll-mt-36 bg-[#1f3d2b] py-20 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
              Kontakt
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Zapytaj o bliźniak pod Warszawą
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Skontaktuj się z nami, aby poznać dostępność lokali, otrzymać
              dokumenty inwestycji lub umówić spotkanie w Pogroszewie.
            </p>

            <div className="mt-8 space-y-4 text-white/80">
              <p className="font-semibold text-white">
                JPJ Concept Sp. z o.o.
              </p>

              <a
                href="tel:+48600397399"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                600 397 399
              </a>

              <a
                href="mailto:kontakt@jpjconcept.pl"
                className="block hover:text-white"
              >
                kontakt@jpjconcept.pl
              </a>

              <p>ul. Nowowiejska 58A, Pogroszew</p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mdabrvqe"
            method="POST"
            className="rounded-[2rem] bg-white p-8 text-[#1f241f] shadow-2xl"
          >
            <input
              type="hidden"
              name="source"
              value="Podstrona: bliźniaki pod Warszawą"
            />

            <div className="space-y-4">
              <input
                name="name"
                required
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#1f3d2b]"
                placeholder="Imię i nazwisko"
              />

              <input
                name="contact"
                required
                className="w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#1f3d2b]"
                placeholder="Telefon lub e-mail"
              />

              <textarea
                name="message"
                required
                className="min-h-32 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#1f3d2b]"
                placeholder="Wiadomość"
              />

              <label className="flex items-start gap-3 text-xs leading-5 text-black/55">
                <input
                  type="checkbox"
                  name="rodo"
                  required
                  className="mt-1 h-4 w-4"
                />

                <span>
                  Wyrażam zgodę na kontakt telefoniczny lub mailowy w celu
                  przedstawienia informacji dotyczących inwestycji NovaDuo.
                </span>
              </label>

              <button
                type="submit"
                className="h-12 w-full rounded-full bg-[#1f3d2b] px-5 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Wyślij zapytanie
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f6f3ec] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
          <div>
            <div>© 2026 NovaDuo | JPJ Concept Sp. z o.o.</div>

            <div className="mt-3 flex flex-wrap gap-4">
              <Link href="/" className="hover:text-[#1f3d2b]">
                Strona główna NovaDuo
              </Link>

              <Link href="/#lokale" className="hover:text-[#1f3d2b]">
                Lokale i ceny
              </Link>

              <Link
                href="/segmenty-pod-warszawa"
                className="hover:text-[#1f3d2b]"
              >
                Segmenty pod Warszawą
              </Link>

              <Link
                href="/segmenty-pogroszew"
                className="hover:text-[#1f3d2b]"
              >
                Segmenty Pogroszew
              </Link>

              <Link href="/historia-cen" className="hover:text-[#1f3d2b]">
                Historia cen
              </Link>
            </div>
          </div>

          <div className="md:text-right">
            <div>JPJ Concept Sp. z o.o.</div>
            <div>ul. Nowowiejska 58A, Pogroszew</div>
            <div>05-850 Ożarów Mazowiecki</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
