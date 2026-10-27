import SiteHeader from "../../components/SiteHeader";

import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  Home,
  LayoutGrid,
  MapPin,
  Maximize2,
  Ruler,
  ShieldCheck,
  ThermometerSun,
  Trees,
  Wind,
} from "lucide-react";

export const metadata = {
  title:
    "Inwestycja NovaDuo – kameralne domy pod Warszawą | Pogroszew",
  description:
    "NovaDuo to kameralna inwestycja 8 lokali w Pogroszewie. Około 154 m² netto, pełne piętro bez skosów, garaż, działki 255–424 m² oraz nowoczesny standard.",
};

export default function InwestycjaPage() {
  const advantages = [
    {
      icon: Home,
      title: "Pełne piętro bez skosów",
      text: "Piętro jest pełnowartościową kondygnacją. Bez ograniczeń typowych dla poddasza i bez niewykończonej przestrzeni wymagającej późniejszej adaptacji.",
    },
    {
      icon: Maximize2,
      title: "Przestrzeń między budynkami ma znaczenie",
      text: "NovaDuo zostało zaprojektowane tak, aby ograniczyć typowe dla zwartej zabudowy wrażenie mieszkania „okno w okno”. Odpowiednie odsunięcie budynków i 8-metrowa droga wewnętrzna zwiększają prywatność oraz poczucie otwartej przestrzeni.",
    },
    {
      icon: Car,
      title: "Garaż w bryle",
      text: "Każdy lokal posiada własny garaż z segmentową bramą, napędem oraz sterowaniem pilotem.",
    },
    {
      icon: Trees,
      title: "Działka do wyłącznego użytkowania",
      text: "Do każdego lokalu przypisana jest własna przestrzeń zewnętrzna do wyłącznego użytkowania o powierzchni od 255 do 424 m².",
    },
    {
      icon: ThermometerSun,
      title: "Pompa ciepła w cenie",
      text: "Pompa ciepła i ogrzewanie podłogowe są elementem standardu lokalu, bez konieczności dodatkowego zakupu urządzenia.",
    },
    {
      icon: Wind,
      title: "Rekuperator w cenie",
      text: "Wentylacja mechaniczna z odzyskiem ciepła wraz z rekuperatorem znajduje się w standardzie NovaDuo.",
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
              <Building2 className="h-4 w-4" />
              Inwestycja NovaDuo
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Kameralna przestrzeń
              <br />
              <span className="text-[#1f3d2b]">
                do życia blisko Warszawy.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              NovaDuo to niewielka inwestycja obejmująca
              <strong> tylko 8 lokali</strong>, zaprojektowana
              dla osób, które szukają przestrzeni domu,
              własnego garażu, działki oraz większej prywatności.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-black/60">
              Inwestycja powstaje przy ul. Nowowiejskiej 58
              w Pogroszewie, na granicy gmin Ożarów Mazowiecki
              i Stare Babice.
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
                href="/lokalizacja"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 bg-white/65 px-7 font-medium text-[#1f3d2b] transition hover:bg-white"
              >
                Zobacz lokalizację
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/images/postprodukcja_0000_Scene-1_upscale01.png"
              alt="Inwestycja NovaDuo w Pogroszewie"
              className="h-[430px] w-full object-cover md:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* LICZBY */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Building2 className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              8 lokali
            </div>

            <div className="mt-2 text-sm leading-6 text-black/55">
              Tylko cztery budynki dwulokalowe.
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Ruler className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              ok. 154 m²
            </div>

            <div className="mt-2 text-sm leading-6 text-black/55">
              Powierzchni netto lokalu.
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1f3d2b] p-7 text-white shadow-lg">
            <Home className="h-7 w-7 text-[#e7c46a]" />

            <div className="mt-5 text-3xl font-semibold">
              BEZ SKOSÓW
            </div>

            <div className="mt-2 text-sm leading-6 text-white/70">
              Pełnowartościowe piętro.
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Trees className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              255–424 m²
            </div>

            <div className="mt-2 text-sm leading-6 text-black/55">
              Działki do wyłącznego użytkowania.
            </div>
          </div>
        </div>
      </section>

      {/* KAMERALNOŚĆ I PRYWATNOŚĆ */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-[#e7c46a]/30 bg-[#e7c46a]/10 px-4 py-2 text-sm font-semibold text-[#e7c46a]">
              MNIEJ SĄSIADÓW. WIĘCEJ PRYWATNOŚCI.
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Nie budujemy
              <br />
              <span className="text-[#e7c46a]">
                dużego osiedla.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              NovaDuo składa się z czterech budynków dwulokalowych.
              To tylko osiem lokali, dzięki czemu inwestycja
              zachowuje kameralny charakter i nie tworzy zwartej,
              wielkomiejskiej zabudowy.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7">
              <Maximize2 className="h-8 w-8 text-[#e7c46a]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Przestrzeń między budynkami ma znaczenie
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                NovaDuo zostało zaprojektowane tak, aby ograniczyć
                typowe dla zwartej zabudowy wrażenie mieszkania
                „okno w okno”. Odpowiednie odsunięcie budynków
                i 8-metrowa droga wewnętrzna zwiększają prywatność
                oraz poczucie otwartej przestrzeni.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white/5 p-3 shadow-2xl">
            <img
              src="/images/postprodukcja_0006_Scene-24_upscale01.webp"
              alt="Przestrzeń pomiędzy budynkami NovaDuo"
              className="h-[440px] w-full rounded-[1.5rem] object-cover md:h-[580px]"
            />
          </div>
        </div>
      </section>

      {/* CO OTRZYMUJESZ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Co otrzymujesz
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Rozwiązania, które mają znaczenie każdego dnia.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
              W NovaDuo skupiamy się na rozwiązaniach,
              które wpływają na komfort, funkcjonalność,
              prywatność i późniejsze koszty użytkowania domu.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => {
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

          <a
            href="/standard"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 px-7 font-medium text-[#1f3d2b] transition hover:bg-[#1f3d2b] hover:text-white"
          >
            Zobacz pełny standard NovaDuo
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CODZIENNA WYGODA */}
      <section className="border-y border-black/5 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Codzienna wygoda
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Dom przygotowany do wygodnego użytkowania.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
              Rozwiązania techniczne planujemy już na etapie budowy,
              aby ograniczyć konieczność wykonywania późniejszych
              przeróbek po odbiorze lokalu.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Garaż w bryle każdego lokalu",
              "Segmentowa brama garażowa z napędem",
              "Ogrodzony teren inwestycji",
              "Brama wjazdowa sterowana pilotem",
              "Własne oświetlenie części wspólnej",
              "Indywidualny wideofon przy bramie",
              "Instalacja przygotowana pod alarm",
              "Okablowanie pod zewnętrzne kamery",
              "Przygotowanie instalacji pod 3 klimatyzatory",
              "Indywidualne opomiarowanie każdego lokalu",
              "Pompa ciepła w cenie",
              "Rekuperator w cenie",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[1.5rem] bg-[#f6f3ec] p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f3d2b]" />

                <span className="leading-6 text-black/70">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOKALIZACJA */}
      <section className="bg-[#e4e6d7] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <MapPin className="h-8 w-8 text-[#1f3d2b]" />

            <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Pogroszew
            </div>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Pomiędzy Ożarowem Mazowieckim
              <br />
              a Starymi Babicami.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-black/65">
              Lokalizacja pozwala korzystać z infrastruktury
              obu gmin, a jednocześnie zachować spokojniejszy
              charakter zabudowy jednorodzinnej poza ścisłym
              centrum miasta.
            </p>

            <a
              href="/lokalizacja"
              className="mt-7 inline-flex items-center font-semibold text-[#1f3d2b]"
            >
              Poznaj lokalizację
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/images/postprodukcja_0005_Scene-25_upscale01.webp"
              alt="NovaDuo w Pogroszewie"
              className="h-[380px] w-full object-cover md:h-[460px]"
            />
          </div>
        </div>
      </section>

      {/* WYBIERZ LOKAL */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2.5rem] bg-white p-8 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:items-center md:p-12">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Wybierz swoje miejsce
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Sprawdź położenie każdego lokalu.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              Na interaktywnym planie możesz sprawdzić aktualną
              dostępność, powierzchnię netto, cenę, wielkość działki
              do wyłącznego użytkowania oraz kartę konkretnego lokalu.
            </p>

            <a
              href="/lokale"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Przejdź do lokali
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <a
            href="/lokale"
            className="group overflow-hidden rounded-[2rem] bg-[#e4e6d7] p-4"
          >
            <img
              src="/images/novaduo_rezerwacje_v2.webp"
              alt="Plan usytuowania lokali NovaDuo"
              className="w-full rounded-[1.5rem] object-contain transition duration-500 group-hover:scale-[1.02]"
            />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#1f3d2b] px-7 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                NovaDuo
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
                Znajdź lokal dopasowany do siebie.
              </h2>

              <p className="mt-4 max-w-2xl text-white/65">
                Sprawdź dostępność albo skontaktuj się
                bezpośrednio z deweloperem inwestycji NovaDuo.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
              >
                Zobacz lokale
              </a>

              <a
                href="/#kontakt-deweloper"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 font-medium text-white transition hover:bg-white/10"
              >
                Kontakt z JPJ Concept
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
