import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Car,
  Check,
  FileText,
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Trees,
} from "lucide-react";

export const metadata = {
  title: "JPJ Concept – deweloper Pogroszew | NovaDuo",
  description:
    "JPJ Concept Sp. z o.o. – deweloper realizujący kameralną inwestycję NovaDuo w Pogroszewie, w gminie Ożarów Mazowiecki. Poznaj firmę, projekt, dane rejestrowe i kontakt.",
  keywords: [
    "JPJ Concept",
    "JPJ Concept deweloper",
    "deweloper Pogroszew",
    "deweloper Ożarów Mazowiecki",
    "NovaDuo",
    "domy Pogroszew",
    "segmenty Pogroszew",
    "domy pod Warszawą",
  ],
  alternates: {
    canonical: "https://www.jpjconcept.pl/o-firmie",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JPJ Concept – deweloper w Pogroszewie | NovaDuo",
    description:
      "Poznaj JPJ Concept Sp. z o.o. – firmę realizującą inwestycję NovaDuo w Pogroszewie, w gminie Ożarów Mazowiecki.",
    url: "https://www.jpjconcept.pl/o-firmie",
    siteName: "NovaDuo | JPJ Concept",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/postprodukcja_0005_Scene-5_upscale01.png",
        alt: "Inwestycja NovaDuo realizowana przez JPJ Concept w Pogroszewie",
      },
    ],
  },
};

const companyFacts = [
  { label: "NIP", value: "1182300374" },
  { label: "KRS", value: "0001156346" },
  { label: "REGON", value: "540927078" },
  { label: "Siedziba", value: "Nowowiejska 58A, Pogroszew" },
];

const trustItems = [
  {
    icon: FileText,
    title: "Przejrzysta dokumentacja",
    description:
      "Na stronie NovaDuo publikujemy prospekty informacyjne, karty lokali i informacje potrzebne do świadomego wyboru nieruchomości.",
  },
  {
    icon: ShieldCheck,
    title: "Jawne ceny i historia zmian",
    description:
      "Aktualne ceny lokali, daty ich obowiązywania oraz historia cen są dostępne publicznie na stronie inwestycji.",
  },
  {
    icon: Home,
    title: "Kameralna skala",
    description:
      "NovaDuo obejmuje cztery budynki dwulokalowe, czyli łącznie osiem lokali mieszkalnych.",
  },
];

const offerLinks = [
  {
    href: "/segmenty-pogroszew",
    eyebrow: "Lokalnie",
    title: "Segmenty Pogroszew",
    text: "Poznaj lokalizację, standard i ofertę NovaDuo w Pogroszewie.",
  },
  {
    href: "/segmenty-pod-warszawa",
    eyebrow: "Pod Warszawą",
    title: "Segmenty pod Warszawą",
    text: "Przestronne lokale z garażem i prywatnym ogrodem.",
  },
  {
    href: "/domy-pod-warszawa",
    eyebrow: "Więcej przestrzeni",
    title: "Domy pod Warszawą",
    text: "NovaDuo jako alternatywa dla mieszkania w mieście.",
  },
  {
    href: "/domy-z-ogrodem-pod-warszawa",
    eyebrow: "Prywatna zieleń",
    title: "Domy z ogrodem",
    text: "Ogrody od 255 do 424 m² przeznaczone do wyłącznego użytkowania.",
  },
  {
    href: "/domy-z-garazem-pod-warszawa",
    eyebrow: "Wygoda",
    title: "Domy z garażem",
    text: "Garaż w bryle każdego lokalu i funkcjonalny układ pomieszczeń.",
  },
  {
    href: "/domy-ozarow-mazowiecki",
    eyebrow: "Gmina Ożarów Mazowiecki",
    title: "Domy Ożarów Mazowiecki",
    text: "Spokojna lokalizacja z dostępem do infrastruktury gminy.",
  },
];

const faq = [
  {
    question: "Czym zajmuje się JPJ Concept?",
    answer:
      "JPJ Concept Sp. z o.o. realizuje inwestycję mieszkaniową NovaDuo w Pogroszewie. Projekt obejmuje cztery budynki dwulokalowe i łącznie osiem lokali mieszkalnych.",
  },
  {
    question: "Gdzie znajduje się siedziba JPJ Concept?",
    answer:
      "Siedziba JPJ Concept Sp. z o.o. znajduje się przy ul. Nowowiejskiej 58A w Pogroszewie, 05-850 Ożarów Mazowiecki.",
  },
  {
    question: "Czym jest NovaDuo?",
    answer:
      "NovaDuo to kameralna inwestycja mieszkaniowa w Pogroszewie, obejmująca przestronne lokale z garażami w bryle budynku i prywatnymi przestrzeniami ogrodowymi.",
  },
  {
    question: "Gdzie można sprawdzić aktualne ceny NovaDuo?",
    answer:
      "Aktualne ceny, statusy sprzedaży, powierzchnie lokali, ogrody i historię cen publikujemy na głównej stronie inwestycji NovaDuo.",
  },
];

export default function OFirmiePage() {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JPJ Concept Sp. z o.o.",
    legalName: "JPJ CONCEPT SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    url: "https://www.jpjconcept.pl",
    email: "kontakt@jpjconcept.pl",
    telephone: "+48600397399",
    taxID: "1182300374",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Nowowiejska 58A",
      addressLocality: "Pogroszew",
      postalCode: "05-850",
      addressRegion: "mazowieckie",
      addressCountry: "PL",
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "KRS",
        value: "0001156346",
      },
      {
        "@type": "PropertyValue",
        name: "REGON",
        value: "540927078",
      },
    ],
    brand: {
      "@type": "Brand",
      name: "NovaDuo",
    },
  };

  const aboutPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "JPJ Concept – deweloper Pogroszew | O firmie",
    description:
      "Informacje o JPJ Concept Sp. z o.o., inwestycji NovaDuo, danych rejestrowych i kontakcie.",
    url: "https://www.jpjconcept.pl/o-firmie",
    inLanguage: "pl-PL",
    mainEntity: {
      "@type": "Organization",
      name: "JPJ Concept Sp. z o.o.",
      url: "https://www.jpjconcept.pl",
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
        name: "O firmie JPJ Concept",
        item: "https://www.jpjconcept.pl/o-firmie",
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
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageStructuredData),
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
            <a href="#firma">O firmie</a>
            <a href="#novaduo">NovaDuo</a>
            <a href="#dane">Dane firmy</a>
            <a href="#lokalizacja">Lokalizacja</a>
            <a href="#kontakt">Kontakt</a>
          </div>

          <Link
            href="/#lokale"
            className="rounded-full bg-[#1f3d2b] px-5 py-3 text-sm text-white transition hover:bg-[#152b1e]"
          >
            Zobacz lokale
          </Link>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(78,113,76,0.22),transparent_38%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#1f3d2b]/20 bg-white/60 px-4 py-2 text-sm text-[#1f3d2b] shadow-sm">
              <Building2 className="h-4 w-4" />
              JPJ Concept Sp. z o.o. • Pogroszew
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
              JPJ Concept – deweloper w Pogroszewie
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              JPJ Concept Sp. z o.o. realizuje kameralną inwestycję mieszkaniową
              NovaDuo w Pogroszewie, w gminie Ożarów Mazowiecki. Stawiamy na
              przejrzystą ofertę, dostęp do dokumentów i bezpośredni kontakt z
              osobami zainteresowanymi zakupem.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-white transition hover:bg-[#152b1e]"
              >
                Poznaj ofertę NovaDuo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href="#dane"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-white/50 px-7"
              >
                Dane firmy
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/postprodukcja_0005_Scene-5_upscale01.png"
                alt="Inwestycja NovaDuo realizowana przez JPJ Concept w Pogroszewie"
                className="h-[460px] w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-[#1f3d2b] p-6 text-white">
                <div className="text-3xl font-semibold">8 lokali</div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  Kameralna skala inwestycji NovaDuo
                </div>
              </div>

              <div className="rounded-3xl bg-white/75 p-6 shadow-sm">
                <div className="text-3xl font-semibold">Pogroszew</div>
                <div className="mt-2 text-sm leading-6 text-black/55">
                  Gmina Ożarów Mazowiecki
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="firma"
        className="scroll-mt-36 mx-auto max-w-7xl px-6 py-20"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              O firmie
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              JPJ Concept i inwestycja NovaDuo
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-black/70">
            <p>
              JPJ Concept Sp. z o.o. jest spółką z siedzibą w Pogroszewie,
              odpowiedzialną za realizację inwestycji mieszkaniowej NovaDuo przy
              ul. Nowowiejskiej 58.
            </p>
            <p>
              Projekt obejmuje cztery budynki dwulokalowe, tworzące łącznie osiem
              lokali mieszkalnych. Każdy lokal posiada osobne wejście, garaż w
              bryle budynku oraz indywidualną przestrzeń ogrodową przeznaczoną do
              wyłącznego użytkowania.
            </p>
            <p>
              Na stronie inwestycji publikujemy aktualne informacje o lokalach,
              cenach, historii cen, standardzie deweloperskim oraz dokumentach.
              Dzięki temu najważniejsze informacje o ofercie są dostępne w jednym
              miejscu.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {trustItems.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-black/5 bg-white/75 p-7 shadow-sm"
            >
              <Icon className="mb-5 h-8 w-8 text-[#1f3d2b]" />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-black/60">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="novaduo" className="scroll-mt-36 bg-[#1f3d2b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/images/postprodukcja_0000_Scene-1_upscale01.png"
              alt="NovaDuo – domy i segmenty w Pogroszewie"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.28em] text-white/50">
              Inwestycja mieszkaniowa
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              NovaDuo – kameralne domy i segmenty w Pogroszewie
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              NovaDuo powstaje w spokojnej części Pogroszewa. Lokale oferują około
              154 m² powierzchni netto, garaż w bryle budynku oraz prywatne ogrody
              o powierzchni od 255 do 424 m².
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-5">
                <Check className="mt-1 h-5 w-5 shrink-0" />
                <span>Pompa ciepła i ogrzewanie podłogowe</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-5">
                <Check className="mt-1 h-5 w-5 shrink-0" />
                <span>Wentylacja mechaniczna z rekuperacją</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-5">
                <Car className="mt-1 h-5 w-5 shrink-0" />
                <span>Garaż w bryle każdego lokalu</span>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-5">
                <Trees className="mt-1 h-5 w-5 shrink-0" />
                <span>Prywatne przestrzenie ogrodowe</span>
              </div>
            </div>

            <Link
              href="/#lokale"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#eef1e7]"
            >
              Sprawdź aktualne lokale i ceny
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="dane" className="scroll-mt-36 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Dane rejestrowe
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            JPJ Concept Sp. z o.o.
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/65">
            Podstawowe dane identyfikacyjne spółki odpowiedzialnej za realizację
            inwestycji NovaDuo.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companyFacts.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-[#1f3d2b]/55">
                {item.label}
              </div>
              <div className="mt-3 break-words text-xl font-semibold">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-[#e4e6d7] p-8 text-black/70">
          <p className="leading-7">
            <strong className="text-[#1f241f]">Pełna nazwa:</strong> JPJ CONCEPT
            SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
          </p>
          <p className="mt-2 leading-7">
            <strong className="text-[#1f241f]">Adres:</strong> ul. Nowowiejska
            58A, 05-850 Pogroszew, gmina Ożarów Mazowiecki, woj. mazowieckie
          </p>
        </div>
      </section>

      <section id="lokalizacja" className="scroll-mt-36 bg-white/60 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Lokalizacja
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              JPJ Concept w Pogroszewie
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-black/65">
              <p>
                Siedziba JPJ Concept znajduje się przy ul. Nowowiejskiej 58A w
                Pogroszewie, w gminie Ożarów Mazowiecki.
              </p>
              <p>
                Sama inwestycja NovaDuo realizowana jest przy ul. Nowowiejskiej 58
                w Pogroszewie, w bezpośrednim sąsiedztwie siedziby spółki.
              </p>
              <p>
                Lokalizacja łączy spokojne otoczenie zabudowy jednorodzinnej z
                dostępem do infrastruktury Ożarowa Mazowieckiego i dogodnym
                połączeniem z Warszawą.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-[#1f3d2b]">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Nowowiejska 58A, Pogroszew</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <iframe
              title="Lokalizacja JPJ Concept w Pogroszewie"
              src="https://www.google.com/maps?q=Nowowiejska+58A,+Pogroszew&output=embed"
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-4xl">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Poznaj ofertę
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            NovaDuo – domy i segmenty w Pogroszewie pod Warszawą
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/65">
            Przejdź do szczegółowych podstron inwestycji i wybierz temat, który
            najlepiej odpowiada temu, czego szukasz.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-[#1f3d2b]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-[#1f3d2b]/55">
                {item.eyebrow}
              </div>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-black/60">{item.text}</p>
              <div className="mt-5 inline-flex items-center text-sm font-medium text-[#1f3d2b]">
                Zobacz podstronę
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#e4e6d7] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Najczęściej zadawane pytania
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              JPJ Concept i NovaDuo
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

      <section id="kontakt" className="scroll-mt-36 bg-[#1f3d2b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
              Kontakt
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Skontaktuj się z JPJ Concept
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Zapraszamy do kontaktu w sprawie inwestycji NovaDuo, dostępności
              lokali, dokumentów oraz spotkania na inwestycji w Pogroszewie.
            </p>

            <div className="mt-8 space-y-4 text-white/85">
              <a
                href="tel:+48600397399"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                600 397 399
              </a>
              <a
                href="mailto:kontakt@jpjconcept.pl"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                kontakt@jpjconcept.pl
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>ul. Nowowiejska 58A, 05-850 Pogroszew</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-[#1f241f] shadow-2xl">
            <h3 className="text-2xl font-semibold">NovaDuo</h3>
            <p className="mt-4 leading-7 text-black/60">
              Sprawdź aktualną ofertę lokali, powierzchnie, ogrody, ceny i
              dokumenty inwestycji.
            </p>

            <Link
              href="/#lokale"
              className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1f3d2b] px-6 text-white transition hover:bg-[#152b1e]"
            >
              Przejdź do oferty NovaDuo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/#kontakt"
              className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-black/15 px-6"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f6f3ec] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-black/55 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-medium text-[#1f241f]">
              © 2026 JPJ Concept Sp. z o.o. | NovaDuo
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link href="/" className="hover:text-[#1f3d2b]">
                NovaDuo
              </Link>
              <Link href="/segmenty-pogroszew" className="hover:text-[#1f3d2b]">
                Segmenty Pogroszew
              </Link>
              <Link href="/segmenty-pod-warszawa" className="hover:text-[#1f3d2b]">
                Segmenty pod Warszawą
              </Link>
              <Link href="/domy-pod-warszawa" className="hover:text-[#1f3d2b]">
                Domy pod Warszawą
              </Link>
              <Link href="/historia-cen" className="hover:text-[#1f3d2b]">
                Historia cen
              </Link>
            </div>
          </div>

          <div className="leading-6 md:text-right">
            <div>JPJ Concept Sp. z o.o.</div>
            <div>NIP 1182300374 • KRS 0001156346 • REGON 540927078</div>
            <div>ul. Nowowiejska 58A, 05-850 Pogroszew</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
