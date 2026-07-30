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
  title: "Segmenty pod Warszawą na sprzedaż | NovaDuo Pogroszew",
  description:
    "Nowe segmenty pod Warszawą w inwestycji NovaDuo w Pogroszewie. Około 154 m² powierzchni netto, garaż, prywatny ogród, pompa ciepła i rekuperacja.",
  keywords: [
    "segmenty pod Warszawą",
    "segmenty pod Warszawą na sprzedaż",
    "nowe segmenty pod Warszawą",
    "segment z ogrodem pod Warszawą",
    "segment z garażem pod Warszawą",
    "segmenty Pogroszew",
    "domy Ożarów Mazowiecki",
    "NovaDuo",
  ],
  alternates: {
    canonical: "https://www.jpjconcept.pl/segmenty-pod-warszawa",
  },
  openGraph: {
    title: "Segmenty pod Warszawą na sprzedaż | NovaDuo",
    description:
      "Nowe segmenty z ogrodem i garażem w Pogroszewie, w gminie Ożarów Mazowiecki.",
    url: "https://www.jpjconcept.pl/segmenty-pod-warszawa",
    siteName: "NovaDuo | JPJ Concept",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/postprodukcja_0000_Scene-1_upscale01.png",
        width: 1200,
        height: 630,
        alt: "Segmenty NovaDuo pod Warszawą",
      },
    ],
  },
};

const advantages = [
  {
    icon: Ruler,
    title: "Około 154 m²",
    description: "Przestronna powierzchnia netto każdego lokalu.",
  },
  {
    icon: Car,
    title: "Garaż w bryle",
    description: "Wygodne miejsce garażowe będące częścią każdego lokalu.",
  },
  {
    icon: Trees,
    title: "Prywatny ogród",
    description: "Ogrody o powierzchni od około 255 do 424 m².",
  },
  {
    icon: Home,
    title: "Tylko 8 lokali",
    description: "Kameralna inwestycja składająca się z czterech budynków.",
  },
];

const standard = [
  "Powietrzna pompa ciepła",
  "Wentylacja mechaniczna z rekuperacją",
  "Ogrzewanie podłogowe",
  "Stolarka trzyszybowa",
  "Brama garażowa z napędem",
  "Instalacja sieci LAN",
  "Betonowe schody wewnętrzne",
  "Tynki gipsowe i szlichty cementowe",
];

const faq = [
  {
    question: "Gdzie położona jest inwestycja NovaDuo?",
    answer:
      "Inwestycja znajduje się przy ul. Nowowiejskiej 58 w Pogroszewie, w gminie Ożarów Mazowiecki, na zachód od Warszawy.",
  },
  {
    question: "Jaką powierzchnię mają segmenty?",
    answer:
      "Lokale mają około 154 m² powierzchni netto. Standardowa powierzchnia użytkowa wynosi 118,48 m², natomiast lokal 58/7 ma powierzchnię użytkową 123,62 m².",
  },
  {
    question: "Czy każdy lokal posiada ogród?",
    answer:
      "Tak. Do każdego lokalu przypisana jest przestrzeń ogrodowa przeznaczona do wyłącznego użytkowania. Powierzchnie ogrodów wynoszą od około 255 do 424 m².",
  },
  {
    question: "Czy segmenty posiadają garaż?",
    answer:
      "Tak. Każdy lokal posiada garaż znajdujący się w bryle budynku.",
  },
  {
    question: "Jakie ogrzewanie zastosowano w budynkach?",
    answer:
      "Ogrzewanie budynku i przygotowanie ciepłej wody użytkowej realizowane jest za pomocą powietrznej pompy ciepła.",
  },
  {
    question: "Gdzie można sprawdzić aktualne ceny?",
    answer:
      "Aktualne ceny, statusy lokali, daty obowiązywania cen oraz ich historię publikujemy na głównej stronie inwestycji NovaDuo.",
  },
];

export default function SegmentyPodWarszawaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "Segmenty pod Warszawą – NovaDuo Pogroszew",
    description:
      "Nowe segmenty z ogrodem i garażem w Pogroszewie, w gminie Ożarów Mazowiecki.",
    url: "https://www.jpjconcept.pl/segmenty-pod-warszawa",
    image:
      "https://www.jpjconcept.pl/images/postprodukcja_0000_Scene-1_upscale01.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Nowowiejska 58",
      addressLocality: "Pogroszew",
      postalCode: "05-850",
      addressRegion: "mazowieckie",
      addressCountry: "PL",
    },
    seller: {
      "@type": "Organization",
      name: "JPJ Concept Sp. z o.o.",
      url: "https://www.jpjconcept.pl",
      telephone: "+48600397399",
      email: "kontakt@jpjconcept.pl",
    },
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
            <a href="#standard">Standard</a>
            <a href="#lokalizacja">Lokalizacja</a>
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
              Nowe segmenty pod Warszawą z ogrodem i garażem
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              NovaDuo to kameralna inwestycja w Pogroszewie, przygotowana dla
              osób poszukujących przestronnego segmentu pod Warszawą,
              prywatnego ogrodu, garażu oraz nowoczesnych rozwiązań
              technicznych.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-white transition hover:bg-[#152b1e]"
              >
                Sprawdź dostępne segmenty
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href="#kontakt"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-white/50 px-7"
              >
                Umów rozmowę
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/postprodukcja_0000_Scene-1_upscale01.png"
                alt="Nowe segmenty pod Warszawą – NovaDuo w Pogroszewie"
                className="h-[460px] w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/postprodukcja_0004_Scene-26_upscale01.webp"
                alt="Wnętrze segmentu NovaDuo"
                className="h-40 w-full rounded-3xl object-cover"
              />

              <img
                src="/images/postprodukcja_0005_Scene-25_upscale01.webp"
                alt="Przykładowa aranżacja wnętrza NovaDuo"
                className="h-40 w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="inwestycja" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Segmenty pod Warszawą
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Więcej przestrzeni dla całej rodziny
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-black/70">
            <p>
              Zakup segmentu pod Warszawą może być alternatywą dla mieszkania
              w mieście lub wolnostojącego domu wymagającego samodzielnej
              organizacji całej inwestycji. NovaDuo łączy dużą powierzchnię,
              prywatny ogród i spokojne otoczenie z dostępem do infrastruktury
              Ożarowa Mazowieckiego oraz Warszawy.
            </p>

            <p>
              Inwestycja składa się z czterech budynków dwulokalowych, a więc
              łącznie tylko ośmiu lokali. Każdy segment ma osobne wejście,
              garaż w bryle budynku, funkcjonalny układ pomieszczeń oraz
              indywidualną przestrzeń ogrodową.
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

      <section className="bg-[#1f3d2b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.28em] text-white/50">
              NovaDuo
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Kameralny charakter zamiast dużego osiedla
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-white/75">
            <p>
              NovaDuo powstaje przy ul. Nowowiejskiej 58 w Pogroszewie.
              Niewielka liczba lokali pozwala zachować spokojny i bardziej
              prywatny charakter inwestycji.
            </p>

            <p>
              Segmenty zaprojektowano z myślą o codziennym komforcie rodziny:
              wspólnej przestrzeni dziennej, prywatnych pokojach na piętrze,
              garażu oraz własnym ogrodzie.
            </p>
          </div>
        </div>
      </section>

      <section id="standard" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Standard deweloperski
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Nowoczesne instalacje i funkcjonalne rozwiązania
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Lokale NovaDuo realizowane są w standardzie deweloperskim z
              rozwiązaniami wpływającymi na komfort użytkowania oraz
              energooszczędność budynku.
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
              Wentylacja mechaniczna zapewniająca kontrolowaną wymianę
              powietrza w pomieszczeniach.
            </p>
          </div>

          <div className="rounded-3xl bg-[#e4e6d7] p-8">
            <Building2 className="mb-5 h-8 w-8 text-[#1f3d2b]" />
            <h3 className="text-2xl font-semibold">Pompa ciepła</h3>
            <p className="mt-3 leading-7 text-black/65">
              Nowoczesne źródło ogrzewania budynku i przygotowania ciepłej
              wody użytkowej.
            </p>
          </div>

          <div className="rounded-3xl bg-[#e4e6d7] p-8">
            <Car className="mb-5 h-8 w-8 text-[#1f3d2b]" />
            <h3 className="text-2xl font-semibold">Własny garaż</h3>
            <p className="mt-3 leading-7 text-black/65">
              Garaż w bryle każdego lokalu, wyposażony w panelową bramę z
              napędem.
            </p>
          </div>
        </div>
      </section>

      <section id="lokalizacja" className="bg-white/60 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Lokalizacja
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Pogroszew – segmenty w pobliżu Ożarowa Mazowieckiego
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-black/65">
              <p>
                Pogroszew znajduje się w gminie Ożarów Mazowiecki, w zachodniej
                części aglomeracji warszawskiej.
              </p>

              <p>
                Lokalizacja zapewnia dostęp do infrastruktury miejskiej,
                placówek edukacyjnych, sklepów i głównych tras
                komunikacyjnych, a jednocześnie pozwala zamieszkać poza zwartą
                zabudową Warszawy.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <iframe
              title="Lokalizacja inwestycji NovaDuo w Pogroszewie"
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/images/usytuowanie-lokali-novaduo.webp"
              alt="Plan usytuowania segmentów NovaDuo w Pogroszewie"
              className="w-full object-contain"
            />
          </div>

          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Dostępne lokale
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Wybierz segment odpowiedni dla swojej rodziny
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Poszczególne lokale różnią się położeniem oraz wielkością
              przypisanych ogrodów. Aktualne ceny, statusy sprzedaży,
              powierzchnie i karty lokali dostępne są w głównej ofercie
              inwestycji.
            </p>

            <Link
              href="/#lokale"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-white transition hover:bg-[#152b1e]"
            >
              Zobacz ceny i dostępność
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="pytania" className="bg-[#e4e6d7] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Najczęściej zadawane pytania
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Segmenty NovaDuo pod Warszawą
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

      <section id="kontakt" className="bg-[#1f3d2b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
              Kontakt
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Zapytaj o segment pod Warszawą
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
              value="Podstrona: segmenty pod Warszawą"
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
                Strona główna
              </Link>

              <Link href="/#lokale" className="hover:text-[#1f3d2b]">
                Lokale i ceny
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
