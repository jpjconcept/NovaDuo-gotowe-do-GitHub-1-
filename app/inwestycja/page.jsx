import {
  Home,
  Car,
  Trees,
  ShieldCheck,
  Volume2,
  Wind,
  ThermometerSun,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Inwestycja NovaDuo – kameralne domy pod Warszawą",
  description:
    "Poznaj NovaDuo w Pogroszewie. Kameralna inwestycja 8 lokali, ok. 154 m² powierzchni netto, garaż w bryle, prywatne tereny do wyłącznego użytkowania, pompa ciepła, rekuperacja i nowoczesny standard.",
};

const highlights = [
  {
    icon: Home,
    value: "8 lokali",
    label: "kameralna inwestycja",
  },
  {
    icon: Building2,
    value: "ok. 154 m²",
    label: "powierzchni netto",
  },
  {
    icon: Car,
    value: "Garaż",
    label: "w bryle każdego lokalu",
  },
  {
    icon: Trees,
    value: "255–424 m²",
    label: "terenu do wyłącznego użytkowania",
  },
];

const advantages = [
  {
    icon: Volume2,
    title: "Więcej prywatności i ciszy",
    text: "W przegrodach wymagających ochrony akustycznej stosujemy bloczki Silka, ograniczające przenoszenie dźwięków i zwiększające komfort mieszkańców.",
  },
  {
    icon: ThermometerSun,
    title: "Komfort cieplny",
    text: "Ściany zewnętrzne z Ytong, pompa ciepła i ogrzewanie podłogowe tworzą nowoczesny system ogrzewania bez tradycyjnych grzejników.",
  },
  {
    icon: Wind,
    title: "Rekuperacja",
    text: "Wentylacja mechaniczna z odzyskiem ciepła zapewnia stałą wymianę powietrza i poprawia komfort codziennego użytkowania domu.",
  },
  {
    icon: ShieldCheck,
    title: "Bezpieczeństwo w standardzie",
    text: "Instalacja alarmowa, okablowanie pod kamery oraz indywidualny wideofon przy bramie są przewidziane dla każdego lokalu.",
  },
];

export default function InwestycjaPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      {/* HEADER */}
      <header className="border-b border-black/10 bg-[#f6f3ec]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/">
            <img
              src="/images/logo-novaduo.png"
              alt="NovaDuo"
              className="h-24 w-auto"
            />
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#1f3d2b]/20 px-5 py-3 text-sm font-medium text-[#1f3d2b] transition hover:bg-[#1f3d2b] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Wróć na stronę główną
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(78,113,76,0.18),transparent_36%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Inwestycja NovaDuo
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Kameralna przestrzeń do życia blisko Warszawy.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              NovaDuo to niewielka inwestycja obejmująca tylko osiem lokali,
              zaprojektowana dla osób, które szukają przestrzeni domu
              jednorodzinnego, własnego garażu i prywatnej przestrzeni
              zewnętrznej, bez rezygnacji z nowoczesnych rozwiązań.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
              Inwestycja powstaje przy ul. Nowowiejskiej 58 w Pogroszewie,
              na pograniczu gmin Ożarów Mazowiecki i Stare Babice.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Zobacz dostępne lokale
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/standard"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 bg-white/50 px-7 font-medium text-[#1f3d2b] transition hover:bg-white"
              >
                Poznaj standard
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/images/postprodukcja_0003_Scene-27_upscale01.webp"
              alt="NovaDuo – kameralna inwestycja w Pogroszewie"
              className="h-[430px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* LICZBY */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, value, label }) => (
            <div
              key={value}
              className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm"
            >
              <Icon className="h-7 w-7 text-[#1f3d2b]" />

              <div className="mt-5 text-3xl font-semibold">
                {value}
              </div>

              <div className="mt-2 text-sm leading-6 text-black/55">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPIS */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-white/45">
              Mniej sąsiadów, więcej prywatności
            </div>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Nie budujemy dużego osiedla.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              NovaDuo składa się z czterech budynków dwulokalowych.
              Oznacza to tylko osiem lokali i znacznie bardziej kameralny
              charakter niż w dużych inwestycjach mieszkaniowych.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Każdy lokal posiada garaż w bryle budynku oraz teren
              przeznaczony do wyłącznego użytkowania właściciela.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <MapPin className="h-9 w-9 text-[#e7c46a]" />

            <h3 className="mt-6 text-2xl font-semibold">
              Pogroszew – pomiędzy Ożarowem Mazowieckim a Starymi Babicami
            </h3>

            <p className="mt-4 leading-7 text-white/65">
              Lokalizacja pozwala korzystać z infrastruktury obu gmin,
              a jednocześnie zachować spokojniejszy charakter zabudowy
              jednorodzinnej poza ścisłym centrum miasta.
            </p>

            <a
              href="/lokalizacja"
              className="mt-7 inline-flex items-center font-medium text-[#e7c46a] transition hover:opacity-75"
            >
              Zobacz lokalizację
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* KORZYŚCI */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Co otrzymujesz
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Rozwiązania, które mają znaczenie każdego dnia
          </h2>

          <p className="mt-5 text-lg leading-8 text-black/60">
            W NovaDuo skupiamy się na elementach, które wpływają na
            komfort, ciszę, bezpieczeństwo i koszty codziennego użytkowania.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {advantages.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm md:p-8"
            >
              <Icon className="h-8 w-8 text-[#1f3d2b]" />

              <h3 className="mt-5 text-2xl font-semibold">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-black/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KOMFORT OSIEDLA */}
      <section className="border-y border-black/5 bg-white/70 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Codzienna wygoda
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Dom przygotowany do wygodnego użytkowania
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Rozwiązania techniczne planujemy na etapie budowy, aby
              ograniczyć konieczność późniejszych przeróbek po odbiorze domu.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Garaż w bryle każdego lokalu",
              "Automatyczna brama garażowa sterowana pilotem",
              "Ogrodzony teren inwestycji",
              "Brama wjazdowa na pilota",
              "Własne oświetlenie części wspólnej",
              "Wideofon przy bramie dla każdego lokalu",
              "Instalacja alarmowa",
              "Okablowanie pod zewnętrzne kamery",
              "Przygotowanie instalacji pod 3 klimatyzatory",
              "Indywidualne opomiarowanie każdego lokalu",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-[#f6f3ec] p-5"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b]">
                  <Check className="h-4 w-4 text-white" />
                </div>

                <div className="leading-7 text-black/70">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Wybierz swoje miejsce
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Sprawdź położenie każdego lokalu
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/60">
              Na interaktywnym planie możesz sprawdzić dostępność,
              powierzchnię netto, cenę, wielkość terenu do wyłącznego
              użytkowania oraz układ pomieszczeń konkretnego lokalu.
            </p>

            <a
              href="/lokale"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Przejdź do lokali
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <img
              src="/images/novaduo_rezerwacje_v2.webp"
              alt="Plan usytuowania lokali NovaDuo"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1f3d2b] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-white/45">
              NovaDuo
            </div>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Znajdź lokal dopasowany do siebie
            </h2>

            <p className="mt-4 max-w-2xl text-white/65">
              Sprawdź aktualną dostępność i wybierz lokal na planie inwestycji.
            </p>
          </div>

          <a
            href="/lokale"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
          >
            Zobacz lokale
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#f6f3ec] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
          <div>
            © 2026 NovaDuo | JPJ Concept Sp. z o.o.
          </div>

          <div>
            ul. Nowowiejska 58A, Pogroszew, 05-850 Ożarów Mazowiecki
          </div>
        </div>
      </footer>
    </main>
  );
}
