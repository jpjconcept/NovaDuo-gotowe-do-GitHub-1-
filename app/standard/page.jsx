import {
  ShieldCheck,
  Volume2,
  ThermometerSun,
  Wind,
  Snowflake,
  Car,
  Video,
  Fence,
  Lightbulb,
  Gauge,
  Check,
  ArrowLeft,
  ArrowRight,
  Home,
} from "lucide-react";

export const metadata = {
  title: "Standard NovaDuo – Ytong, Silka, pompa ciepła i rekuperacja",
  description:
    "Poznaj standard inwestycji NovaDuo w Pogroszewie. Ytong, ściany akustyczne Silka, pompa ciepła, rekuperacja, przygotowanie klimatyzacji, alarm, kamery, wideofon i garaż.",
};

const benefits = [
  {
    icon: ThermometerSun,
    title: "Komfort cieplny",
    subtitle: "Ściany zewnętrzne z Ytong",
    text: "Ściany zewnętrzne wykonujemy z bloczków Ytong, które zapewniają bardzo dobre właściwości termoizolacyjne. To rozwiązanie wspiera stabilną temperaturę wewnątrz domu i ogranicza straty ciepła.",
  },
  {
    icon: Volume2,
    title: "Więcej ciszy",
    subtitle: "Ściany z Silki akustycznej",
    text: "W miejscach wymagających szczególnej ochrony akustycznej stosujemy bloczki Silka o wysokiej izolacyjności akustycznej. Rozwiązanie ogranicza przenoszenie dźwięków i zwiększa komfort codziennego życia.",
  },
  {
    icon: ThermometerSun,
    title: "Nowoczesne ogrzewanie",
    subtitle: "Pompa ciepła i podłogówka",
    text: "Każdy lokal wyposażony jest w pompę ciepła. Ogrzewanie podłogowe zapewnia równomierne rozprowadzenie ciepła oraz pozwala uniknąć tradycyjnych grzejników w pomieszczeniach.",
  },
  {
    icon: Wind,
    title: "Świeże powietrze",
    subtitle: "Rekuperacja",
    text: "Wentylacja mechaniczna z odzyskiem ciepła zapewnia stałą wymianę powietrza, poprawiając komfort wewnątrz domu przy jednoczesnym ograniczeniu strat energii.",
  },
  {
    icon: Snowflake,
    title: "Gotowy na lato",
    subtitle: "Instalacja pod 3 klimatyzatory",
    text: "Każdy lokal otrzyma przygotowaną instalację umożliwiającą późniejszy montaż trzech jednostek klimatyzacji bez konieczności wykonywania podstawowych instalacji od nowa.",
  },
  {
    icon: ShieldCheck,
    title: "Bezpieczeństwo",
    subtitle: "Alarm i przygotowanie pod monitoring",
    text: "W standardzie przewidziana jest instalacja alarmowa oraz okablowanie przygotowane pod montaż zewnętrznych kamer monitoringu.",
  },
  {
    icon: Video,
    title: "Kontrola dostępu",
    subtitle: "Wideofon dla każdego lokalu",
    text: "Każdy lokal posiada własny wideofon przy bramie wjazdowej, dzięki czemu mieszkańcy mogą kontrolować dostęp do terenu inwestycji.",
  },
  {
    icon: Car,
    title: "Wygodny garaż",
    subtitle: "Brama segmentowa z napędem",
    text: "Garaż znajduje się w bryle każdego lokalu i wyposażony jest w segmentową bramę garażową z automatycznym napędem sterowanym pilotem.",
  },
];

const estateFeatures = [
  {
    icon: Fence,
    title: "Ogrodzony teren",
    text: "NovaDuo tworzy zamkniętą, kameralną przestrzeń przeznaczoną wyłącznie dla mieszkańców inwestycji.",
  },
  {
    icon: Car,
    title: "Brama wjazdowa na pilota",
    text: "Wjazd na teren osiedla odbywa się przez automatyczną bramę, zapewniając mieszkańcom wygodę i kontrolę dostępu.",
  },
  {
    icon: Lightbulb,
    title: "Własne oświetlenie",
    text: "Części wspólne inwestycji będą posiadały własne oświetlenie, zwiększające komfort i bezpieczeństwo po zmroku.",
  },
  {
    icon: Home,
    title: "Tylko 8 lokali",
    text: "NovaDuo to cztery budynki dwulokalowe. Niewielka liczba mieszkańców oznacza bardziej kameralny charakter niż w dużych osiedlach.",
  },
];

const technicalStandard = [
  "Stolarka okienna 3-szybowa w kolorze antracytowym",
  "Drzwi wejściowe klasy C",
  "Tynki gipsowe na ścianach i sufitach",
  "Schody wewnętrzne betonowe",
  "Posadzki cementowe",
  "Instalacja wodociągowa z sieci",
  "Indywidualne opomiarowanie lokalu",
  "Zbiornik na nieczystości ciekłe o pojemności 10 m³ dla każdego lokalu",
  "Instalacja elektryczna wewnętrzna i zewnętrzna",
  "Instalacja niskoprądowa i sieć LAN",
];

export default function StandardPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(78,113,76,0.17),transparent_36%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Standard NovaDuo
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Komfort, którego nie widać tylko na wizualizacji.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              W NovaDuo zwracamy uwagę nie tylko na wygląd domu, ale przede
              wszystkim na rozwiązania, które mają znaczenie każdego dnia:
              komfort cieplny, ciszę, jakość powietrza, bezpieczeństwo i wygodę
              użytkowania.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
              Dlatego już w standardzie przewidzieliśmy rozwiązania, które w
              wielu inwestycjach wymagają późniejszego wykonania przez
              właściciela.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/75 px-4 py-2 text-sm shadow-sm">
                Ytong
              </span>
              <span className="rounded-full bg-white/75 px-4 py-2 text-sm shadow-sm">
                Silka akustyczna
              </span>
              <span className="rounded-full bg-white/75 px-4 py-2 text-sm shadow-sm">
                Pompa ciepła
              </span>
              <span className="rounded-full bg-white/75 px-4 py-2 text-sm shadow-sm">
                Rekuperacja
              </span>
              <span className="rounded-full bg-white/75 px-4 py-2 text-sm shadow-sm">
                Klimatyzacja
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/images/postprodukcja_0004_Scene-26_upscale01.webp"
              alt="NovaDuo – nowoczesne domy w Pogroszewie"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* GŁÓWNE KORZYŚCI */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Rozwiązania, które robią różnicę
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Standard zaprojektowany dla wygodnego życia
          </h2>

          <p className="mt-5 text-lg leading-8 text-black/60">
            Niektórych elementów domu nie widać na pierwszy rzut oka.
            To właśnie one często decydują o komforcie przez kolejne lata.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map(({ icon: Icon, title, subtitle, text }) => (
            <div
              key={title}
              className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#e4e6d7]">
                <Icon className="h-6 w-6 text-[#1f3d2b]" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">{title}</h3>

              <div className="mt-1 font-medium text-[#1f3d2b]">
                {subtitle}
              </div>

              <p className="mt-4 leading-7 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CISZA */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-white/45">
              Prywatność i akustyka
            </div>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Dom powinien być miejscem, w którym możesz odpocząć.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Dlatego szczególną uwagę zwracamy na rozwiązania ograniczające
              przenoszenie dźwięków pomiędzy lokalami. Zastosowanie ciężkich
              bloczków silikatowych Silka w przegrodach akustycznych pomaga
              zwiększyć komfort i poczucie prywatności mieszkańców.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <Volume2 className="h-10 w-10 text-[#e7c46a]" />

            <div className="mt-7 text-2xl font-semibold">
              Komfort akustyczny to część standardu
            </div>

            <p className="mt-4 leading-7 text-white/65">
              Przy wyborze domu warto zwrócić uwagę nie tylko na jego
              powierzchnię i wygląd. Rodzaj materiału zastosowanego w
              przegrodach ma wpływ na codzienny komfort mieszkańców.
            </p>
          </div>
        </div>
      </section>

      {/* OSIEDLE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 max-w-3xl">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Kameralna przestrzeń
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Własny dom w małej, uporządkowanej inwestycji
          </h2>

          <p className="mt-5 text-lg leading-8 text-black/60">
            NovaDuo to tylko osiem lokali. Teren inwestycji będzie ogrodzony,
            wyposażony w automatyczną bramę wjazdową oraz własne oświetlenie
            części wspólnych.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {estateFeatures.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[2rem] border border-[#1f3d2b]/10 bg-[#e4e6d7]/65 p-7"
            >
              <Icon className="h-7 w-7 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-black/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BEZPIECZEŃSTWO */}
      <section className="border-y border-black/5 bg-white/70 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <ShieldCheck className="h-10 w-10 text-[#1f3d2b]" />

            <h2 className="mt-6 text-4xl font-semibold tracking-tight">
              Bezpieczeństwo przygotowane od początku
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/60">
              Nie musisz zaczynać od prowadzenia nowych przewodów przez
              wykończony dom. Najważniejsze instalacje bezpieczeństwa
              przewidzieliśmy już na etapie realizacji inwestycji.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Instalacja alarmowa w każdym lokalu",
              "Okablowanie pod zewnętrzne kamery monitoringu",
              "Indywidualny wideofon przy bramie dla każdego lokalu",
              "Ogrodzony teren inwestycji",
              "Automatyczna brama wjazdowa sterowana pilotem",
              "Oświetlenie części wspólnych po zmroku",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-[#f6f3ec] p-5"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b]">
                  <Check className="h-4 w-4 text-white" />
                </div>

                <div className="leading-7 text-black/70">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEŁNY STANDARD */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Szczegóły
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Co jeszcze otrzymujesz w standardzie?
            </h2>

            <p className="mt-5 leading-7 text-black/60">
              Standard NovaDuo obejmuje rozwiązania potrzebne do wygodnego
              późniejszego wykończenia i użytkowania domu.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {technicalStandard.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <Check className="mt-1 h-5 w-5 shrink-0 text-[#1f3d2b]" />
                <span className="leading-7 text-black/65">{item}</span>
              </div>
            ))}
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
              Zobacz dostępne lokale
            </h2>

            <p className="mt-4 max-w-2xl text-white/65">
              Wybierz lokal na planie inwestycji i sprawdź jego cenę,
              powierzchnię oraz układ pomieszczeń.
            </p>
          </div>

          <a
            href="/lokale"
            className="inline-flex h-13 shrink-0 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
          >
            Wybierz lokal
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#f6f3ec] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
          <div>© 2026 NovaDuo | JPJ Concept Sp. z o.o.</div>

          <div>
            ul. Nowowiejska 58A, Pogroszew, 05-850 Ożarów Mazowiecki
          </div>
        </div>
      </footer>
    </main>
  );
}
