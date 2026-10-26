import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Home,
  Trees,
  ShoppingBag,
  GraduationCap,
  Route,
  Building2,
} from "lucide-react";

export const metadata = {
  title:
    "Lokalizacja NovaDuo – Pogroszew, Ożarów Mazowiecki i Stare Babice",
  description:
    "NovaDuo przy ul. Nowowiejskiej 58 w Pogroszewie. Kameralna inwestycja pod Warszawą, na pograniczu gmin Ożarów Mazowiecki i Stare Babice.",
};

const advantages = [
  {
    icon: MapPin,
    title: "Pogranicze dwóch gmin",
    text: "NovaDuo powstaje w Pogroszewie, w lokalizacji pozwalającej korzystać z infrastruktury zarówno Ożarowa Mazowieckiego, jak i Starych Babic.",
  },
  {
    icon: Home,
    title: "Spokojne otoczenie",
    text: "Okolica ma charakter przede wszystkim zabudowy jednorodzinnej, co sprzyja spokojniejszemu stylowi życia poza zwartą zabudową miasta.",
  },
  {
    icon: Trees,
    title: "Więcej przestrzeni",
    text: "Pogroszew łączy bliskość Warszawy z bardziej kameralnym otoczeniem i większą ilością przestrzeni charakterystyczną dla miejscowości podmiejskich.",
  },
  {
    icon: Building2,
    title: "Blisko miejskiej infrastruktury",
    text: "Położenie pomiędzy Ożarowem Mazowieckim a Starymi Babicami daje dostęp do sklepów, usług, szkół i pozostałej infrastruktury obu gmin.",
  },
];

export default function LokalizacjaPage() {
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Lokalizacja NovaDuo
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Pogroszew – pomiędzy Ożarowem Mazowieckim a Starymi Babicami
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              NovaDuo powstaje przy ul. Nowowiejskiej 58 w Pogroszewie,
              na pograniczu gmin Ożarów Mazowiecki i Stare Babice.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
              To lokalizacja dla osób, które chcą mieszkać blisko Warszawy,
              a jednocześnie cenią spokojniejsze otoczenie zabudowy
              jednorodzinnej i większą prywatność.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Zobacz lokale
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/inwestycja"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 bg-white/50 px-7 font-medium text-[#1f3d2b] transition hover:bg-white"
              >
                Poznaj inwestycję
              </a>
            </div>
          </div>

          {/* MAPA */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=Nowowiejska+58,+Pogroszew&output=embed"
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja NovaDuo – Nowowiejska 58, Pogroszew"
            />
          </div>
        </div>
      </section>

      {/* NAJWAŻNIEJSZE ZALETY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Dlaczego tutaj?
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Blisko miasta, ale poza jego gęstą zabudową
          </h2>

          <p className="mt-5 text-lg leading-8 text-black/60">
            Lokalizacja NovaDuo pozwala połączyć wygodę życia pod Warszawą
            z bardziej kameralnym charakterem otoczenia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm"
            >
              <Icon className="h-8 w-8 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DWIE GMINY */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-white/45">
              Ożarów Mazowiecki
            </div>

            <h2 className="mt-4 text-3xl font-semibold">
              Infrastruktura potrzebna na co dzień
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Położenie NovaDuo pozwala korzystać z infrastruktury gminy
              Ożarów Mazowiecki: handlu, usług, placówek edukacyjnych
              oraz pozostałych udogodnień potrzebnych w codziennym życiu.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                <ShoppingBag className="h-4 w-4" />
                sklepy i usługi
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                <GraduationCap className="h-4 w-4" />
                edukacja
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                <Route className="h-4 w-4" />
                komunikacja
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.28em] text-white/45">
              Stare Babice
            </div>

            <h2 className="mt-4 text-3xl font-semibold">
              Drugi kierunek codziennych potrzeb
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              Bliskość gminy Stare Babice poszerza wybór dostępnych usług,
              sklepów i infrastruktury. Mieszkańcy nie są ograniczeni
              wyłącznie do jednego lokalnego centrum.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/70">
              To jedna z zalet położenia NovaDuo właśnie na styku
              dwóch dobrze rozwiniętych podwarszawskich gmin.
            </p>
          </div>
        </div>
      </section>

      {/* ADRES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <MapPin className="h-9 w-9 text-[#1f3d2b]" />

            <div className="mt-6 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Adres inwestycji
            </div>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              ul. Nowowiejska 58
            </h2>

            <div className="mt-3 text-xl text-black/60">
              Pogroszew
            </div>

            <div className="mt-1 text-black/50">
              gmina Ożarów Mazowiecki
            </div>

            <p className="mt-7 max-w-lg leading-7 text-black/60">
              NovaDuo to propozycja dla osób poszukujących domu pod Warszawą,
              które nie chcą rezygnować z dostępu do miejskiej infrastruktury.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/images/postprodukcja_0005_Scene-25_upscale01.webp"
              alt="NovaDuo w Pogroszewie"
              className="h-[380px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SEO / SEGMENTY POD WARSZAWĄ */}
      <section className="border-y border-black/5 bg-white/70 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Dom pod Warszawą
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Segmenty pod Warszawą na pograniczu Ożarowa Mazowieckiego
            i Starych Babic
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/60">
            Pogroszew jest alternatywą dla osób, które chcą pozostać
            w sąsiedztwie Warszawy, ale szukają większej przestrzeni,
            własnego garażu i bardziej kameralnego otoczenia.
          </p>

          <a
            href="/segmenty-pod-warszawa"
            className="mt-7 inline-flex items-center font-medium text-[#1f3d2b] underline underline-offset-4 transition hover:opacity-70"
          >
            Zobacz więcej o segmentach pod Warszawą
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
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
              Sprawdź dostępne lokale
            </h2>

            <p className="mt-4 max-w-2xl text-white/65">
              Zobacz plan inwestycji i wybierz lokal dopasowany do swoich potrzeb.
            </p>
          </div>

          <a
            href="/lokale"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
          >
            Wybierz lokal
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
