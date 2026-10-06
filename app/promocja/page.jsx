import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Car,
  CheckCircle2,
  FileText,
  Gift,
  Home,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Promocja NovaDuo – dom i Ford Puma w cenie | Pogroszew",
  description:
    "Kup lokal NovaDuo w Pogroszewie do 31.12.2026 r. i skorzystaj z promocji z nowym Fordem Puma z automatyczną skrzynią biegów o wartości katalogowej ok. 100 000 zł brutto.",
  alternates: {
    canonical: "https://www.jpjconcept.pl/promocja",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nowy dom. Nowy samochód. Jedna cena. | NovaDuo",
    description:
      "Promocja NovaDuo: Ford Puma z automatyczną skrzynią biegów o wartości katalogowej ok. 100 000 zł brutto.",
    url: "https://www.jpjconcept.pl/promocja",
    siteName: "NovaDuo | JPJ Concept",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/promocja-novaduo-ford-puma-web.png",
        alt: "Promocja NovaDuo – nowy dom i Ford Puma",
      },
    ],
  },
};

const REGULAMIN_READY = false;

const steps = [
  {
    number: "01",
    title: "Wybierz lokal NovaDuo",
    description:
      "Sprawdź dostępne lokale, ceny i przypisane działki, a następnie wybierz dom dopasowany do swoich potrzeb.",
  },
  {
    number: "02",
    title: "Podpisz umowę do 31.12.2026 r.",
    description:
      "Zawrzyj umowę objętą zasadami promocji i realizuj płatności zgodnie z harmonogramem wynikającym z umowy oraz prospektu.",
  },
  {
    number: "03",
    title: "Odbierz dom i samochód",
    description:
      "Po przeniesieniu własności lokalu i bezusterkowym zakończeniu odbioru samochód zostanie wydany zgodnie z regulaminem promocji.",
  },
];

const features = [
  "118,48 m² powierzchni użytkowej większości lokali",
  "ok. 154 m² powierzchni netto",
  "garaż w bryle każdego lokalu",
  "pompa ciepła i ogrzewanie podłogowe",
  "rekuperacja",
  "przygotowanie instalacji klimatyzacji",
  "własna przestrzeń działki przy lokalu",
  "kameralna inwestycja – tylko 8 lokali",
];

const faq = [
  {
    question: "Czy zamiast samochodu mogę otrzymać gotówkę lub rabat?",
    answer:
      "Nie. Samochód nie podlega wymianie na gotówkę ani rabat od ceny lokalu, zgodnie z zasadami promocji.",
  },
  {
    question: "Kiedy samochód zostanie wydany?",
    answer:
      "W terminie do 30 dni od spełnienia ostatniego z warunków określonych w regulaminie, w szczególności po przeniesieniu własności lokalu oraz bezusterkowym zakończeniu odbioru.",
  },
  {
    question: "Czy samochód będzie fabrycznie nowy?",
    answer:
      "Tak. Samochód będzie fabrycznie nowy i wyprodukowany nie wcześniej niż w 2027 roku.",
  },
  {
    question: "Czy otrzymam dokładnie samochód widoczny na grafice?",
    answer:
      "Ford Puma z automatyczną skrzynią biegów jest modelem referencyjnym promocji. Kolor, wersja i wyposażenie będą zależały od aktualnej oferty producenta i dostępności. Zasady ewentualnej zamiany modelu określa regulamin.",
  },
  {
    question: "Czy cena lokalu pozostaje niezmienna przez cały okres promocji?",
    answer:
      "Nie. Ceny lokali pozostających w sprzedaży mogą się zmieniać. Aktualne ceny i statusy lokali publikowane są na stronie NovaDuo.",
  },
  {
    question: "Czy promocja może zakończyć się wcześniej?",
    answer:
      "Tak. Organizator może zakończyć promocję przed 31.12.2026 r. na zasadach określonych w regulaminie, z zachowaniem praw już nabytych przez uczestników promocji.",
  },
];

export default function PromocjaPage() {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "NovaDuo",
        item: "https://www.jpjconcept.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Promocja",
        item: "https://www.jpjconcept.pl/promocja",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <div className="bg-[#1f3d2b] px-4 py-2.5 text-center text-sm font-medium text-white">
        <span className="text-[#e7c46a]">PROMOCJA NOVADUO</span>
        <span className="mx-2 text-white/40">•</span>
        Ford Puma z automatem o wartości katalogowej ok. 100 000 zł
      </div>

      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4">
          <Link href="/" aria-label="NovaDuo – strona główna">
            <img
              src="/images/logo-novaduo.png"
              alt="NovaDuo"
              className="h-20 w-auto md:h-24"
            />
          </Link>

          <div className="hidden items-center gap-7 text-sm text-black/65 md:flex">
            <Link href="/">Strona główna</Link>
            <Link href="/#lokale">Lokale i ceny</Link>
            <a href="#jak-dziala">Jak działa</a>
            <a href="#samochod">Samochód</a>
            <a href="#faq">Pytania</a>
          </div>

          <Link
            href="/#kontakt"
            className="rounded-full bg-[#1f3d2b] px-5 py-3 text-sm text-white transition hover:bg-[#152b1e]"
          >
            Zapytaj o lokal
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-[1500px] px-4 py-6 md:px-6 md:py-10">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#10251b] shadow-2xl">
          <img
            src="/images/promocja-novaduo-ford-puma-web.png"
            alt="Nowy dom. Nowy samochód. Jedna cena – promocja NovaDuo"
            className="w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8913c]/30 bg-[#ead09a]/25 px-4 py-2 text-sm font-medium text-[#6d531d]">
            <CalendarDays className="h-4 w-4" />
            Promocja do 31.12.2026 r.
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Nowy dom. Nowy samochód. Jedna cena.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65 md:text-xl">
            Kup lokal w inwestycji NovaDuo w okresie obowiązywania promocji i
            skorzystaj ze świadczenia promocyjnego w postaci fabrycznie nowego
            Forda Puma z automatyczną skrzynią biegów o orientacyjnej wartości
            katalogowej około 100 000 zł brutto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#lokale"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 py-3.5 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Sprawdź dostępne lokale
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <a
              href="#jak-dziala"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-white px-7 py-3.5 font-medium"
            >
              Poznaj zasady promocji
            </a>
          </div>

          <p className="mt-5 text-xs leading-5 text-black/45">
            Promocja może zakończyć się wcześniej na zasadach określonych w
            regulaminie. Prezentowany model i kolor samochodu mają charakter
            poglądowy.
          </p>
        </div>
      </section>

      <section id="jak-dziala" className="scroll-mt-32 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Proste zasady
            </div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Jak działa promocja?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[2rem] border border-black/5 bg-[#f6f3ec] p-8 shadow-sm"
              >
                <div className="text-5xl font-semibold text-[#b8913c]">
                  {step.number}
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-black/60">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-[#1f3d2b]/10 bg-[#e4e6d7] p-6 text-center text-sm leading-6 text-black/60">
            Samochód zostanie wydany w terminie do 30 dni od spełnienia
            wszystkich warunków określonych w regulaminie promocji.
          </div>
        </div>
      </section>

      <section id="samochod" className="scroll-mt-32 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1f3d2b] px-4 py-2 text-sm text-white">
              <Gift className="h-4 w-4" />
              Świadczenie promocyjne
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Ford Puma z automatyczną skrzynią biegów
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Modelem referencyjnym promocji jest fabrycznie nowy Ford Puma z
              automatyczną skrzynią biegów o orientacyjnej wartości katalogowej
              około 100 000 zł brutto.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [Car, "Automatyczna skrzynia biegów"],
                [ShieldCheck, "Fabrycznie nowy samochód"],
                [CalendarDays, "Produkcja nie wcześniej niż 2027 r."],
                [Gift, "Wartość katalogowa min. 95 000 zł brutto"],
              ].map(([Icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <Icon className="h-6 w-6 shrink-0 text-[#1f3d2b]" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>

            <p className="mt-7 text-sm leading-6 text-black/50">
              Dokładna wersja, kolor i wyposażenie będą zależały od aktualnej
              oferty producenta i dostępności w momencie realizacji świadczenia.
              Jeżeli model Ford Puma zostanie wycofany lub istotnie zmieniony,
              może zostać zastąpiony innym fabrycznie nowym samochodem zgodnie z
              regulaminem promocji.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#10251b] shadow-2xl">
            <img
              src="/images/promocja-novaduo-ford-puma-social.png"
              alt="Ford Puma z czerwoną kokardą – promocja NovaDuo"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1f3d2b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-white/50">
                NovaDuo
              </div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Samochód jest dodatkiem. Najważniejszy jest Twój nowy dom.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                NovaDuo to kameralna inwestycja w Pogroszewie, w gminie Ożarów
                Mazowiecki. Tylko osiem lokali, duża powierzchnia, garaż i
                nowoczesny standard techniczny.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#e7c46a]" />
                  <span className="leading-6 text-white/85">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ead09a]/25 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6d531d] lg:justify-start">
              <CalendarDays className="h-4 w-4" />
              Promocja do 31.12.2026 r.
            </div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Sprawdź aktualne lokale i ceny NovaDuo
            </h2>
            <p className="mt-3 text-black/55">
              Ceny lokali pozostających w sprzedaży mogą zmieniać się w trakcie
              trwania promocji.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#lokale"
              className="inline-flex items-center justify-center rounded-full bg-[#1f3d2b] px-7 py-3.5 font-medium text-white"
            >
              Zobacz lokale i ceny
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center rounded-full border border-[#1f3d2b]/20 bg-white px-7 py-3.5 font-medium text-[#1f3d2b]"
            >
              Umów spotkanie
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-32 bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Najczęstsze pytania
            </div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Promocja NovaDuo
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <article
                key={item.question}
                className="rounded-3xl border border-black/5 bg-[#f6f3ec] p-7"
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <p className="mt-3 leading-7 text-black/60">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl md:p-10">
            <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-[#1f3d2b]/55">
                  <FileText className="h-4 w-4" />
                  Regulamin
                </div>
                <h2 className="mt-3 text-3xl font-semibold">
                  Regulamin promocji „Nowy Dom. Nowy Samochód.”
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-black/55">
                  Ostateczna wersja regulaminu zostanie opublikowana przed
                  uruchomieniem promocji, po zakończeniu uzgodnień podatkowych.
                </p>
              </div>

              {REGULAMIN_READY ? (
                <a
                  href="/dokumenty/regulamin-promocji-novaduo.pdf"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-7 py-3.5 font-medium text-white"
                >
                  Pobierz regulamin PDF
                </a>
              ) : (
                <div className="shrink-0 rounded-full border border-black/10 bg-[#f6f3ec] px-6 py-3 text-sm font-medium text-black/45">
                  Regulamin – w przygotowaniu
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f3d2b] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="h-4 w-4" /> Pogroszew, ul. Nowowiejska 58
            </div>
            <h2 className="mt-2 text-3xl font-semibold">
              Chcesz zobaczyć NovaDuo na miejscu?
            </h2>
          </div>

          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-[#1f3d2b]"
          >
            Skontaktuj się z nami
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f6f3ec] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-sm text-black/55 md:flex-row md:items-end md:justify-between">
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
