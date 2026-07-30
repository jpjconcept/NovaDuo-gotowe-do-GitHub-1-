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
  Trees,
  Wind,
} from "lucide-react";

export const metadata = {
  title: "Domy z garażem pod Warszawą na sprzedaż | NovaDuo",
  description:
    "Nowe domy z garażem pod Warszawą w inwestycji NovaDuo w Pogroszewie. Garaż w bryle każdego lokalu, prywatny ogród, pompa ciepła i rekuperacja.",
  keywords: [
    "domy z garażem pod Warszawą",
    "dom z garażem pod Warszawą",
    "nowe domy z garażem pod Warszawą",
    "segment z garażem pod Warszawą",
    "bliźniak z garażem pod Warszawą",
    "dom z garażem w bryle pod Warszawą",
    "domy Pogroszew",
    "domy Ożarów Mazowiecki",
    "NovaDuo",
  ],
  alternates: {
    canonical: "https://www.jpjconcept.pl/domy-z-garazem-pod-warszawa",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Domy z garażem pod Warszawą | NovaDuo Pogroszew",
    description:
      "Kameralna inwestycja NovaDuo w Pogroszewie. Każdy lokal posiada garaż w bryle budynku, prywatny ogród, pompę ciepła i rekuperację.",
    url: "https://www.jpjconcept.pl/domy-z-garazem-pod-warszawa",
    siteName: "NovaDuo | JPJ Concept",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/postprodukcja_0004_Scene-4_upscale01.png",
        alt: "Domy NovaDuo z garażami pod Warszawą",
      },
    ],
  },
};

const advantages = [
  {
    icon: Car,
    title: "Garaż w każdym lokalu",
    description:
      "Garaż znajduje się w bryle budynku i jest wyposażony w panelową bramę z napędem.",
  },
  {
    icon: Ruler,
    title: "Około 154 m² netto",
    description:
      "Przestronny lokal z garażem zapewnia wygodną przestrzeń dla całej rodziny.",
  },
  {
    icon: Trees,
    title: "Prywatny ogród",
    description:
      "Każdy lokal ma również przestrzeń ogrodową do wyłącznego użytkowania od 255 do 424 m².",
  },
  {
    icon: Home,
    title: "Tylko 8 lokali",
    description:
      "Kameralna skala inwestycji zamiast dużego, gęsto zabudowanego osiedla.",
  },
];

const garageBenefits = [
  {
    title: "Ochrona samochodu",
    description:
      "Garaż osłania samochód przed deszczem, śniegiem, słońcem i innymi niekorzystnymi warunkami atmosferycznymi.",
  },
  {
    title: "Codzienna wygoda",
    description:
      "Garaż w bryle budynku ułatwia wsiadanie, wysiadanie i przenoszenie zakupów bez wychodzenia na zewnątrz.",
  },
  {
    title: "Brama z napędem",
    description:
      "Panelowa brama garażowa z napędem zwiększa wygodę codziennego korzystania z miejsca postojowego.",
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
    alt: "Domy NovaDuo z garażami pod Warszawą",
  },
  {
    src: "/images/postprodukcja_0001_Scene-7_upscale01.png",
    alt: "Kameralna inwestycja NovaDuo w Pogroszewie",
  },
  {
    src: "/images/postprodukcja_0002_Scene-2_upscale01.png",
    alt: "Nowe domy z garażami w Pogroszewie",
  },
  {
    src: "/images/postprodukcja_0003_Scene-3_upscale01.png",
    alt: "Domy dwulokalowe NovaDuo z garażami",
  },
  {
    src: "/images/postprodukcja_0004_Scene-4_upscale01.png",
    alt: "Domy z garażami pod Warszawą",
  },
  {
    src: "/images/postprodukcja_0004_Scene-4_upscale01.png",
    alt: "Wizualizacja domów NovaDuo z garażami",
  },
  {
    src: "/images/postprodukcja_0004_Scene-26_upscale01.webp",
    alt: "Przykładowe wnętrze domu NovaDuo",
  },
  {
    src: "/images/postprodukcja_0005_Scene-25_upscale01.webp",
    alt: "Nowoczesna aranżacja salonu NovaDuo",
  },
  {
    src: "/images/postprodukcja_0006_Scene-24_upscale01.webp",
    alt: "Wnętrze domu z garażem NovaDuo",
  },
  {
    src: "/images/postprodukcja_0007_Scene-23_upscale01.webp",
    alt: "Przykładowa aranżacja lokalu NovaDuo",
  },
  {
    src: "/images/postprodukcja_0008_Scene-22_upscale01.webp",
    alt: "Inspiracja wykończenia wnętrza NovaDuo",
  },
  {
    src: "/images/postprodukcja_0009_Scene-21_upscale01.webp",
    alt: "Przestronne wnętrze domu NovaDuo",
  },
];

const faq = [
  {
    question: "Czy każdy lokal NovaDuo posiada garaż?",
    answer:
      "Tak. Każdy lokal posiada garaż znajdujący się w bryle budynku.",
  },
  {
    question: "Jak wyposażona jest brama garażowa?",
    answer:
      "W standardzie przewidziano panelową bramę garażową z napędem, w kolorze antracytowym.",
  },
  {
    question: "Gdzie znajdują się domy NovaDuo?",
    answer:
      "Inwestycja znajduje się przy ul. Nowowiejskiej 58 w Pogroszewie, w gminie Ożarów Mazowiecki, w zachodniej części aglomeracji warszawskiej.",
  },
  {
    question: "Jaką powierzchnię mają lokale?",
    answer:
      "Większość lokali ma 154,57 m² powierzchni netto oraz 118,48 m² powierzchni użytkowej. Lokal 58/7 ma 154,02 m² powierzchni netto oraz 123,62 m² powierzchni użytkowej.",
  },
  {
    question: "Czy każdy lokal posiada również prywatny ogród?",
    answer:
      "Tak. Do każdego lokalu przypisana jest przestrzeń ogrodowa przeznaczona do wyłącznego użytkowania. Powierzchnie ogrodów wynoszą od 255 do 424 m².",
  },
  {
    question: "Jak ogrzewane są budynki?",
    answer:
      "Ogrzewanie budynku i przygotowanie ciepłej wody użytkowej realizowane jest za pomocą powietrznej pompy ciepła. W lokalach przewidziano również ogrzewanie podłogowe.",
  },
  {
    question: "Czy w standardzie znajduje się rekuperacja?",
    answer:
      "Tak. W lokalach przewidziano instalację wentylacji mechanicznej z rekuperacją, stosownie do przeznaczenia pomieszczeń.",
  },
  {
    question: "Gdzie można sprawdzić ceny i dostępność?",
    answer:
      "Aktualne ceny, statusy sprzedaży, daty obowiązywania cen, powierzchnie ogrodów i karty lokali publikujemy w głównej ofercie inwestycji NovaDuo.",
  },
];

export default function DomyZGarazemPodWarszawaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Domy z garażem pod Warszawą – NovaDuo Pogroszew",
    description:
      "Nowe lokale w budynkach dwulokalowych z garażem w bryle, prywatnym ogrodem, pompą ciepła i rekuperacją.",
    url: "https://www.jpjconcept.pl/domy-z-garazem-pod-warszawa",
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
        "https://www.jpjconcept.pl/images/postprodukcja_0004_Scene-4_upscale01.png",
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
        name: "Domy z garażem pod Warszawą",
        item: "https://www.jpjconcept.pl/domy-z-garazem-pod-warszawa",
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
            <a href="#garaze">Garaże</a>
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
              Nowe domy z garażem pod Warszawą
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              NovaDuo oferuje przestronne lokale z garażem w bryle każdego budynku,
              prywatnym ogrodem oraz nowoczesnymi instalacjami. Inwestycja
              powstaje w Pogroszewie, w gminie Ożarów Mazowiecki.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#oferta"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-white transition hover:bg-[#152b1e]"
              >
                Sprawdź dostępne domy
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#garaze"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-white/50 px-7"
              >
                Poznaj zalety garażu
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/postprodukcja_0004_Scene-4_upscale01.png"
                alt="Domy NovaDuo z garażami pod Warszawą"
                className="h-[460px] w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/postprodukcja_0002_Scene-2_upscale01.png"
                alt="Nowe domy z garażem w Pogroszewie"
                className="h-40 w-full rounded-3xl object-cover"
              />

              <img
                src="/images/postprodukcja_0005_Scene-25_upscale01.webp"
                alt="Przykładowe wnętrze domu NovaDuo"
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
            Domy z garażem
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Wygodny garaż połączony z przestrzenią domu
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-black/70">
            <p>
              NovaDuo składa się z czterech budynków dwulokalowych, czyli
              łącznie ośmiu lokali mieszkalnych. Każdy lokal posiada osobne
              wejście, garaż w bryle budynku oraz indywidualną przestrzeń
              ogrodową przeznaczoną do wyłącznego użytkowania.
            </p>

            <p>
              Garaż stanowi integralną część każdego lokalu i jest wyposażony w
              panelową bramę z napędem. Ułatwia codzienne parkowanie oraz
              bezpośrednie korzystanie z samochodu niezależnie od pogody.
            </p>

            <p>
              Przestronny lokal, własny garaż i prywatny ogród tworzą funkcjonalną
              alternatywę dla mieszkania w mieście, szczególnie dla rodzin
              potrzebujących wygodnej i dobrze zorganizowanej przestrzeni.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      <section
        id="garaze"
        className="scroll-mt-36 bg-[#1f3d2b] py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-white/50">
                Garaż w każdym lokalu
              </div>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Garaż jako wygodna część każdego lokalu
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/70">
                Garaż połączony z bryłą budynku zwiększa wygodę codziennego użytkowania
                domu i chroni samochód przed niekorzystnymi warunkami
                atmosferycznymi.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {garageBenefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-white/10 bg-white/10 p-7"
                >
                  <Car className="mb-5 h-8 w-8 text-white/80" />
                  <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                  <p className="mt-4 leading-7 text-white/70">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
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
              Nowoczesny dom z własnym garażem
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
            <Car className="mb-5 h-8 w-8 text-[#1f3d2b]" />
            <h3 className="text-2xl font-semibold">Własny garaż</h3>
            <p className="mt-3 leading-7 text-black/65">
              Garaż w bryle każdego lokalu z panelową bramą wyposażoną w
              napęd.
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
              Dom z garażem w Pogroszewie pod Warszawą
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-black/65">
              <p>
                NovaDuo powstaje przy ul. Nowowiejskiej 58 w Pogroszewie, w
                gminie Ożarów Mazowiecki.
              </p>

              <p>
                Lokalizacja zapewnia dostęp do infrastruktury Ożarowa
                Mazowieckiego, placówek edukacyjnych, sklepów i głównych tras
                komunikacyjnych.
              </p>

              <p>
                Otoczenie zabudowy jednorodzinnej oraz terenów zielonych
                odpowiada osobom szukającym domu poza zwartą zabudową
                Warszawy.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <iframe
              title="Lokalizacja domów z garażem NovaDuo"
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
              alt="Usytuowanie lokali z garażami NovaDuo"
              className="w-full object-contain"
            />
          </div>

          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Lokale z garażami
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Wybierz lokal z garażem i prywatnym ogrodem
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Każdy lokal posiada garaż w bryle budynku. Poszczególne lokale różnią
              się położeniem oraz powierzchnią przypisanej przestrzeni
              ogrodowej. Aktualne ceny, statusy sprzedaży i karty lokali
              publikujemy w głównej ofercie NovaDuo.
            </p>

            <Link
              href="/#lokale"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-white transition hover:bg-[#152b1e]"
            >
              Sprawdź lokale z garażami
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
              Zobacz domy, garaże i przykładowe wnętrza
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/60">
              Wizualizacje przedstawiają charakter inwestycji, bryły budynków z
              garażami oraz przykładowe możliwości aranżacji wnętrz.
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
              Domy NovaDuo z garażami w bryle
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/segmenty-pod-warszawa"
              className="rounded-3xl border border-[#1f3d2b]/10 bg-[#f6f3ec] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-[#1f3d2b]/60">
                Segmenty
              </div>
              <h2 className="mt-3 text-xl font-semibold">
                Pod Warszawą
              </h2>
            </Link>

            <Link
              href="/segmenty-pogroszew"
              className="rounded-3xl border border-[#1f3d2b]/10 bg-[#e4e6d7] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-[#1f3d2b]/60">
                Segmenty
              </div>
              <h2 className="mt-3 text-xl font-semibold">Pogroszew</h2>
            </Link>

            <Link
              href="/blizniaki-pod-warszawa"
              className="rounded-3xl border border-[#1f3d2b]/10 bg-[#f6f3ec] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-[#1f3d2b]/60">
                Bliźniaki
              </div>
              <h2 className="mt-3 text-xl font-semibold">
                Pod Warszawą
              </h2>
            </Link>

            <Link
              href="/domy-ozarow-mazowiecki"
              className="rounded-3xl border border-[#1f3d2b]/10 bg-[#e4e6d7] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-[#1f3d2b]/60">
                Domy
              </div>
              <h2 className="mt-3 text-xl font-semibold">
                Ożarów Mazowiecki
              </h2>
            </Link>

            <Link
              href="/domy-pod-warszawa"
              className="rounded-3xl border border-[#1f3d2b]/10 bg-[#f6f3ec] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-[#1f3d2b]/60">
                Domy
              </div>
              <h2 className="mt-3 text-xl font-semibold">
                Pod Warszawą
              </h2>
            </Link>

            <Link
              href="/domy-z-ogrodem-pod-warszawa"
              className="rounded-3xl border border-[#1f3d2b]/10 bg-[#e4e6d7] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-[#1f3d2b]/60">
                Domy
              </div>
              <h2 className="mt-3 text-xl font-semibold">
                Z ogrodem
              </h2>
            </Link>
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
              Zapytaj o dom z garażem pod Warszawą
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
              value="Podstrona: domy z garażem pod Warszawą"
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

              <Link
                href="/blizniaki-pod-warszawa"
                className="hover:text-[#1f3d2b]"
              >
                Bliźniaki pod Warszawą
              </Link>

              <Link
                href="/domy-ozarow-mazowiecki"
                className="hover:text-[#1f3d2b]"
              >
                Domy Ożarów Mazowiecki
              </Link>

              <Link
                href="/domy-pod-warszawa"
                className="hover:text-[#1f3d2b]"
              >
                Domy pod Warszawą
              </Link>

              <Link
                href="/domy-z-ogrodem-pod-warszawa"
                className="hover:text-[#1f3d2b]"
              >
                Domy z ogrodem
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
