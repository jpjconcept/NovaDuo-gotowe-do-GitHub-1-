import SiteHeader from "../../components/SiteHeader";

import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  Droplets,
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
  ];

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
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

      {/* MATERIAŁY PREMIUM */}
      <section className="border-b border-black/5 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <Building2 className="h-9 w-9 text-[#1f3d2b]" />

            <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Materiały i konstrukcja
            </div>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Jakość zaczyna się od tego, czego nie widać.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
              W NovaDuo jakość budynku zaczyna się od konstrukcji,
              materiałów i rozwiązań technicznych, które po zakończeniu
              prac często pozostają ukryte pod tynkiem, elewacją i
              wykończeniem.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-black/65">
              Dlatego wybieramy materiały z myślą nie tylko o dniu
              odbioru, ale przede wszystkim o wieloletnim użytkowaniu domu.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-[#f6f3ec] p-8">
              <ThermometerSun className="h-8 w-8 text-[#1f3d2b]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Ytong 24 cm + 18 cm grafitowego EPS
              </h3>

              <p className="mt-4 leading-8 text-black/65">
                Ściany zewnętrzne wykonujemy z bloczków
                <strong className="font-semibold text-[#1f241f]">
                  {" "}Ytong o grubości 24 cm
                </strong>,
                uzupełnionych
                <strong className="font-semibold text-[#1f241f]">
                  {" "}18 cm grafitowego styropianu
                </strong>.
                To połączenie solidnej ściany murowanej z grubą warstwą
                izolacji cieplnej, stworzone z myślą o ograniczaniu strat
                ciepła i komforcie użytkowania.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f6f3ec] p-8">
              <Ruler className="h-8 w-8 text-[#1f3d2b]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Praktyczny także przy urządzaniu domu
              </h3>

              <p className="mt-4 leading-8 text-black/65">
                Jednorodna struktura Ytonga ułatwia wykonywanie otworów
                i mocowań. Przy zastosowaniu odpowiednich systemów
                mocujących można bezpiecznie montować także cięższe
                elementy wyposażenia, takie jak szafki kuchenne,
                półki czy zabudowy ścienne.
              </p>
            </div>
          </div>

          {/* AKUSTYKA */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
                Komfort akustyczny
              </div>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Solidność, którą czuć każdego dnia.
              </h3>

              <p className="mt-5 leading-8 text-black/65">
                Szczególną uwagę zwracamy na rozwiązania wpływające
                na poczucie prywatności i komfort życia w sąsiadujących
                lokalach.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-[#e4e6d7] p-8">
                <Volume2 className="h-8 w-8 text-[#1f3d2b]" />

                <h3 className="mt-5 text-2xl font-semibold">
                  Silka E24S pomiędzy lokalami
                </h3>

                <p className="mt-4 leading-8 text-black/65">
                  Ściany pomiędzy lokalami wykonujemy z masywnych
                  bloczków
                  <strong className="font-semibold text-[#1f241f]">
                    {" "}Silka E24S o grubości 24 cm
                  </strong>.
                  Duża masa takiej przegrody pomaga ograniczać
                  przenoszenie dźwięków i zwiększa poczucie prywatności
                  pomiędzy sąsiadującymi lokalami.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#e4e6d7] p-8">
                <Building2 className="h-8 w-8 text-[#1f3d2b]" />

                <h3 className="mt-5 text-2xl font-semibold">
                  Żelbetowe stropy 18 cm
                </h3>

                <p className="mt-4 leading-8 text-black/65">
                  Konstrukcję budynku uzupełniają
                  <strong className="font-semibold text-[#1f241f]">
                    {" "}monolityczne stropy żelbetowe o grubości 18 cm
                  </strong>.
                  To kolejny element wpływający na solidność konstrukcji
                  oraz komfort codziennego użytkowania.
                </p>
              </div>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="mt-12 rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:p-10">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Premium to nie dodatki. To sposób budowania.
              </h3>

              <p className="mt-5 max-w-4xl leading-8 text-black/65">
                Dla nas standard premium nie oznacza wyłącznie efektownych
                elementów widocznych na pierwszy rzut oka. To przede wszystkim
                jakość konstrukcji, izolacji i instalacji, które wpływają
                na komfort użytkowania przez wiele lat.
              </p>

              <p className="mt-4 max-w-4xl leading-8 text-black/65">
                Dlatego w standardzie NovaDuo znajdują się również
                <strong className="font-semibold text-[#1f241f]">
                  {" "}pompa ciepła, rekuperacja, ogrzewanie podłogowe,
                  przygotowanie pod klimatyzację, instalację alarmową
                  i monitoring
                </strong>.
              </p>
            </div>
          </div>

          {/* OSIEDLE */}
          <div className="mt-12">
            <div className="max-w-4xl">
              <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
                Osiedle i bezpieczeństwo
              </div>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Komfort zaczyna się już przy wjeździe na osiedle.
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
                NovaDuo to nie tylko standard samego budynku.
                Dbamy również o uporządkowaną przestrzeń wspólną,
                bezpieczeństwo i codzienną wygodę mieszkańców.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[2rem] bg-[#1f3d2b] p-7 text-white">
                <ShieldCheck className="h-8 w-8 text-[#e7c46a]" />

                <h4 className="mt-5 text-xl font-semibold">
                  Ogrodzone osiedle
                </h4>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Teren inwestycji będzie ogrodzony, tworząc uporządkowaną
                  i wyraźnie wydzieloną przestrzeń dla mieszkańców NovaDuo.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#1f3d2b] p-7 text-white">
                <KeyRound className="h-8 w-8 text-[#e7c46a]" />

                <h4 className="mt-5 text-xl font-semibold">
                  Brama wjazdowa na pilota
                </h4>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Wjazd na teren inwestycji będzie odbywał się przez
                  automatyczną bramę wyposażoną w napęd i sterowanie pilotem.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#1f3d2b] p-7 text-white">
                <Zap className="h-8 w-8 text-[#e7c46a]" />

                <h4 className="mt-5 text-xl font-semibold">
                  Własne oświetlenie
                </h4>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Droga wewnętrzna oraz części wspólne inwestycji
                  będą posiadały własne oświetlenie zwiększające komfort
                  korzystania z osiedla po zmroku.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#1f3d2b] p-7 text-white">
                <KeyRound className="h-8 w-8 text-[#e7c46a]" />

                <h4 className="mt-5 text-xl font-semibold">
                  Indywidualny wideofon
                </h4>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Każdy lokal otrzyma własny wideofon umożliwiający
                  obsługę wejścia przy bramie bezpośrednio z domu.
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-black/65">
              To kolejne elementy pokazujące nasze podejście do NovaDuo:
              <strong className="font-semibold text-[#1f241f]">
                {" "}premium to nie pojedynczy dodatek, ale suma przemyślanych
                rozwiązań tworzących wygodny dom i uporządkowane otoczenie.
              </strong>
            </p>
          </div>

          {/* PODSUMOWANIE */}
          <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#1f3d2b] p-8 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <CheckCircle2 className="h-7 w-7 text-[#e7c46a]" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">
                  Dobre materiały mają znaczenie także wtedy, gdy ich nie widać.
                </h3>

                <p className="mt-4 max-w-4xl leading-8 text-white/70">
                  Ytong, 18 cm grafitowego ocieplenia, Silka pomiędzy
                  lokalami, żelbetowe stropy, pompa ciepła, rekuperacja,
                  ogrzewanie podłogowe oraz przemyślana infrastruktura
                  osiedla tworzą spójny standard NovaDuo.
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

      {/* CODZIENNA WYGODA */}
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

          <div className="mt-12 grid gap-5 md:grid-cols-3">
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
                <Wind className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Przygotowanie pod klimatyzację
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Przygotowanie instalacji pod późniejszy
                  montaż trzech jednostek klimatyzacji.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <Zap className="h-7 w-7 text-[#1f3d2b]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Instalacje wykonane na etapie budowy
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Najważniejsze przewody przygotowujemy przed wykończeniem,
                  ograniczając potrzebę późniejszej ingerencji w ściany.
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
                rekuperator, garaż, indywidualny wideofon, ogrodzone osiedle
                i przygotowane instalacje tworzą standard NovaDuo —
                nie listę kosztownych dopłat po odbiorze.
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
