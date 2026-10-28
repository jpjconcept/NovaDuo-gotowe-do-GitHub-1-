import SiteHeader from "../../components/SiteHeader";

import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  Droplets,
  Home,
  KeyRound,
  Ruler,
  ShieldCheck,
  ThermometerSun,
  Video,
  Volume2,
  Wind,
  Zap,
} from "lucide-react";

export const metadata = {
  title:
    "Standard NovaDuo – pompa ciepła i rekuperacja w cenie | Pogroszew",
  description:
    "Poznaj standard NovaDuo w Pogroszewie: pompa ciepła i rekuperator w cenie, ogrzewanie podłogowe, przygotowanie pod 3 klimatyzatory, garaż, wideofon i instalacje bezpieczeństwa.",
};

export default function StandardPage() {
  const mainStandard = [
    {
      icon: ThermometerSun,
      title: "Pompa ciepła w cenie",
      text: "Każdy lokal NovaDuo otrzymuje pompę ciepła w standardzie. Nie jest to opcja dodatkowa i nie wymaga osobnej dopłaty za urządzenie.",
    },
    {
      icon: Wind,
      title: "Rekuperator w cenie",
      text: "Wentylacja mechaniczna z odzyskiem ciepła wraz z rekuperatorem jest elementem standardu lokalu. Klient nie musi kupować urządzenia we własnym zakresie.",
    },
    {
      icon: ThermometerSun,
      title: "Ogrzewanie podłogowe",
      text: "W lokalach przewidziano ogrzewanie podłogowe współpracujące z pompą ciepła, zapewniające komfort oraz równomierne rozprowadzenie temperatury.",
    },
    {
      icon: Wind,
      title: "Przygotowanie pod 3 klimatyzatory",
      text: "Wykonywane jest przygotowanie instalacji umożliwiającej późniejszy montaż trzech jednostek klimatyzacji. Same urządzenia klimatyzacyjne nie są elementem standardu.",
    },
    {
      icon: ShieldCheck,
      title: "Przygotowanie pod system alarmowy",
      text: "Lokal otrzymuje przygotowaną instalację pod system alarmowy. Sam system alarmowy nie jest montowany w standardzie deweloperskim.",
    },
    {
      icon: Video,
      title: "Okablowanie pod kamery",
      text: "W standardzie przewidziane jest okablowanie pod zewnętrzne kamery monitoringu. Kamery i rejestrator mogą zostać zamontowane później przez właściciela.",
    },
  ];

  const additionalStandard = [
    {
      icon: KeyRound,
      title: "Indywidualny wideofon",
      text: "Każdy lokal otrzymuje własny wideofon umożliwiający obsługę wejścia przy bramie.",
    },
    {
      icon: Car,
      title: "Garaż w bryle budynku",
      text: "Każdy lokal posiada własny garaż z segmentową bramą garażową, napędem elektrycznym i sterowaniem pilotem.",
    },
    {
      icon: Zap,
      title: "Indywidualne opomiarowanie",
      text: "Każdy lokal jest indywidualnie opomiarowany i posiada własne liczniki mediów.",
    },
    {
      icon: Droplets,
      title: "Szambo 10 m³",
      text: "Każdy lokal posiada własny zbiornik bezodpływowy o pojemności 10 m³.",
    },
    {
      icon: ShieldCheck,
      title: "Zamknięte osiedle",
      text: "Teren inwestycji będzie ogrodzony, a brama wjazdowa wyposażona w napęd i sterowanie pilotem.",
    },
    {
      icon: Zap,
      title: "Oświetlenie części wspólnej",
      text: "Droga wewnętrzna i części wspólne inwestycji posiadają własne oświetlenie.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      {/* WSPÓLNE MENU */}
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(78,113,76,0.18),transparent_36%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1f3d2b]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#1f3d2b]">
              <CheckCircle2 className="h-4 w-4" />
              Standard NovaDuo
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Więcej w standardzie.
              <br />
              <span className="text-[#1f3d2b]">
                Mniej wydatków po odbiorze.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              W NovaDuo wiele rozwiązań, które w innych inwestycjach
              bywają dodatkiem lub pozostają po stronie kupującego,
              przygotowujemy już na etapie budowy.
            </p>

            <p className="mt-4 max-w-2xl text-xl font-semibold leading-8 text-[#1f3d2b]">
              Pompa ciepła i rekuperator są w cenie lokalu.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Sprawdź dostępne lokale
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/dokumenty"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 bg-white/65 px-7 font-medium text-[#1f3d2b] transition hover:bg-white"
              >
                Dokumenty inwestycji
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/images/postprodukcja_0004_Scene-26_upscale01.webp"
              alt="Standard NovaDuo"
              className="h-[430px] w-full object-cover md:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* NAJWAŻNIEJSZE ELEMENTY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
            Najważniejsze elementy
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Rozwiązania, za które nie musisz później dopłacać.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
            Standard został przygotowany tak, aby ograniczyć zakres
            prac i zakupów, które nabywca musi wykonać po odbiorze lokalu.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mainStandard.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4e6d7] text-[#1f3d2b]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* POMPA + REKUPERACJA */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-[#e7c46a]/30 bg-[#e7c46a]/10 px-4 py-2 text-sm font-semibold text-[#e7c46a]">
              W CENIE LOKALU
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Pompa ciepła
              <br />
              <span className="text-[#e7c46a]">
                + rekuperator.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Oba urządzenia są elementem standardu NovaDuo.
              Nie oferujemy lokalu, a następnie nie pozostawiamy
              klienta z koniecznością osobnego zakupu podstawowych
              urządzeń instalacyjnych.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
                <ThermometerSun className="h-7 w-7 text-[#e7c46a]" />

                <div className="mt-4 text-xl font-semibold">
                  Pompa ciepła
                </div>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  Źródło ogrzewania przygotowane
                  do współpracy z ogrzewaniem podłogowym.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
                <Wind className="h-7 w-7 text-[#e7c46a]" />

                <div className="mt-4 text-xl font-semibold">
                  Rekuperator
                </div>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  Wentylacja mechaniczna z odzyskiem ciepła
                  wraz z urządzeniem w standardzie lokalu.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white/5 p-3 shadow-2xl">
            <img
              src="/images/postprodukcja_0007_Scene-23_upscale01.webp"
              alt="Nowoczesny standard NovaDuo"
              className="h-[440px] w-full rounded-[1.5rem] object-cover md:h-[580px]"
            />
          </div>
        </div>
      </section>

      {/* MATERIAŁY I KONSTRUKCJA */}
      <section className="border-b border-black/5 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <Building2 className="h-9 w-9 text-[#1f3d2b]" />

              <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
                Materiały, na których nie oszczędzamy
              </div>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Solidność zaczyna się
                <br />
                od tego, czego później nie widać.
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-black/65">
                <p>
                  W NovaDuo jakość budynku zaczyna się od konstrukcji i materiałów.
                  Dlatego nie szukamy najtańszych rozwiązań, tylko zestawu, który
                  ma zapewnić trwałość, komfort cieplny i możliwie wysoki komfort
                  akustyczny.
                </p>

                <p>
                  Ściany zewnętrzne pełniące funkcję nośną wykonujemy z bloczków
                  <strong className="font-semibold text-[#1f241f]">
                    {" "}
                    Ytong 24 cm
                  </strong>,
                  a następnie ocieplamy je
                  <strong className="font-semibold text-[#1f241f]">
                    {" "}
                    18 cm grafitowego styropianu
                  </strong>.
                  To przemyślane połączenie solidnej ściany murowanej z grubą
                  warstwą izolacji cieplnej.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-[#f6f3ec] p-7">
                <ThermometerSun className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Ytong 24 cm + 18 cm grafitowego EPS
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Zewnętrzne ściany nośne z betonu komórkowego Ytong łączymy
                  z grubą warstwą grafitowej izolacji. To rozwiązanie nastawione
                  na solidność konstrukcji i ograniczanie strat ciepła.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-[#f6f3ec] p-7">
                <Volume2 className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Silka E24S pomiędzy lokalami
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Ściany międzylokalowe wykonujemy z masywnych bloczków
                  silikatowych Silka E24S. Duża masa takiej przegrody pomaga
                  ograniczać przenoszenie dźwięków i zwiększa poczucie
                  prywatności pomiędzy sąsiadującymi lokalami.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-[#f6f3ec] p-7">
                <Ruler className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Ytong 12 cm wewnątrz lokalu
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Ściany wewnętrzne również są murowane z bloczków Ytong.
                  Jednorodna struktura betonu komórkowego ułatwia późniejsze
                  wykonywanie otworów i mocowań. Przy zastosowaniu właściwych
                  łączników można bezpiecznie montować także cięższe elementy
                  wyposażenia, np. szafki kuchenne czy zabudowy ścienne.
                </p>
              </div>

              <div className="rounded-[1.75rem] bg-[#f6f3ec] p-7">
                <Building2 className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Monolityczne stropy żelbetowe 18 cm
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Strop nad parterem i nad piętrem wykonujemy jako monolityczny
                  strop żelbetowy o grubości 18 cm. To kolejny element, na którym
                  nie chcemy oszczędzać kosztem trwałości i komfortu użytkowania.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#1f3d2b] p-8 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Home className="h-7 w-7 text-[#e7c46a]" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">
                  Nie oszczędzamy na tym, czego po odbiorze nie widać.
                </h3>

                <p className="mt-4 max-w-4xl leading-8 text-white/70">
                  Ytong, 18 cm grafitowego ocieplenia, Silka pomiędzy lokalami,
                  żelbetowe stropy, pompa ciepła, rekuperacja i ogrzewanie
                  podłogowe tworzą spójny standard NovaDuo. Chcemy, aby jakość
                  była odczuwalna nie tylko w dniu odbioru, ale również podczas
                  codziennego użytkowania domu.
                </p>

                <p className="mt-5 text-xl font-semibold text-[#e7c46a]">
                  Komfort i solidność własnego domu w cenie porównywalnej
                  z mieszkaniem w Warszawie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DODATKOWY STANDARD */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Codzienna wygoda
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Standard, który zauważysz każdego dnia.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {additionalStandard.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm"
                >
                  <Icon className="h-7 w-7 text-[#1f3d2b]" />

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEZPIECZEŃSTWO */}
      <section className="bg-[#e4e6d7] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <ShieldCheck className="h-9 w-9 text-[#1f3d2b]" />

              <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
                Przygotowanie na przyszłość
              </div>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                Instalacje przygotowane już podczas budowy.
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                Część instalacji wykonujemy już na etapie budowy,
                aby właściciel nie musiał później prowadzić
                dodatkowych przewodów i ingerować w wykończony lokal.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <ShieldCheck className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Instalacja pod alarm
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Przygotowane przewody umożliwiają późniejszy
                  montaż wybranego systemu alarmowego.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <Video className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Okablowanie pod kamery
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Przygotowane punkty pod montaż zewnętrznych
                  kamer monitoringu.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <KeyRound className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Wideofon
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Indywidualny wideofon dla każdego lokalu
                  przy bramie wjazdowej.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <Wind className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  3 klimatyzatory
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Przygotowanie instalacji pod późniejszy
                  montaż trzech jednostek klimatyzacji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#1f3d2b] px-7 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                NovaDuo
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
                Porównując oferty, porównuj również standard.
              </h2>

              <p className="mt-4 max-w-2xl text-white/65">
                Ytong, Silka, 18 cm grafitowego ocieplenia, pompa ciepła,
                rekuperator, garaż oraz przygotowane instalacje tworzą standard
                NovaDuo — nie listę kosztownych dopłat po odbiorze.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
              >
                Sprawdź lokale
              </a>

              <a
                href="/#kontakt-deweloper"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 font-medium text-white transition hover:bg-white/10"
              >
                Zapytaj dewelopera
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STOPKA */}
      <footer className="border-t border-black/10 bg-[#f6f3ec] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
          <div>
            © 2026 NovaDuo | JPJ Concept Sp. z o.o.
          </div>

          <div>
            ul. Nowowiejska 58A, Pogroszew,
            05-850 Ożarów Mazowiecki
          </div>
        </div>
      </footer>
    </main>
  );
}
