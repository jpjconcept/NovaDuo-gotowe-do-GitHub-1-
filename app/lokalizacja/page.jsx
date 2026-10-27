import SiteHeader from "../../components/SiteHeader";

import {
  ArrowRight,
  Bike,
  Bus,
  Car,
  Coffee,
  Dumbbell,
  GraduationCap,
  MapPin,
  ShoppingBag,
  Train,
  Trees,
  Trophy,
  Utensils,
  Waves,
} from "lucide-react";

export const metadata = {
  title:
    "Lokalizacja NovaDuo – Pogroszew, Ożarów Mazowiecki | Domy pod Warszawą",
  description:
    "NovaDuo w Pogroszewie – spokojna lokalizacja na granicy gmin Ożarów Mazowiecki i Stare Babice. Komunikacja, szkoły, zakupy, sport i rekreacja.",
};

export default function LokalizacjaPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      {/* WSPÓLNE MENU */}
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(78,113,76,0.18),transparent_36%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1f3d2b]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#1f3d2b]">
              <MapPin className="h-4 w-4" />
              Pogroszew • gmina Ożarów Mazowiecki
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Spokojniej niż w mieście.
              <br />
              <span className="text-[#1f3d2b]">
                Nadal blisko wszystkiego.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              NovaDuo powstaje przy ul. Nowowiejskiej 58
              w Pogroszewie, na granicy gmin
              <strong> Ożarów Mazowiecki i Stare Babice</strong>.
              To kameralne otoczenie zabudowy jednorodzinnej,
              z wygodnym dostępem do komunikacji, szkół,
              zakupów, sportu i rekreacji.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
                blisko Ożarowa Mazowieckiego
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
                autobus 743
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
                kolej w pobliżu
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
                sport i rekreacja
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/images/postprodukcja_0005_Scene-25_upscale01.webp"
              alt="NovaDuo w Pogroszewie"
              className="h-[420px] w-full object-cover md:h-[540px]"
            />
          </div>
        </div>
      </section>

      {/* KOMUNIKACJA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Car className="h-7 w-7 text-[#1f3d2b]" />

            <h2 className="mt-5 text-xl font-semibold">
              Ożarów Mazowiecki
            </h2>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Wygodny dojazd do centrum miasta,
              sklepów, usług oraz codziennej infrastruktury.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Bus className="h-7 w-7 text-[#1f3d2b]" />

            <h2 className="mt-5 text-xl font-semibold">
              Autobus 743
            </h2>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Linia przebiega przez Pogroszew, Kaputy
              i Ożarów Mazowiecki oraz zapewnia połączenie
              w kierunku Warszawy.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Train className="h-7 w-7 text-[#1f3d2b]" />

            <h2 className="mt-5 text-xl font-semibold">
              Kolej
            </h2>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Dogodny dostęp do stacji Ożarów Mazowiecki
              i Płochocin oraz połączeń Kolei Mazowieckich.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Car className="h-7 w-7 text-[#1f3d2b]" />

            <h2 className="mt-5 text-xl font-semibold">
              A2 i DK92
            </h2>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Dogodny dostęp do autostrady A2
              oraz drogi krajowej nr 92 w kierunku Warszawy
              i zachodniego Mazowsza.
            </p>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl">
          <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="text-sm uppercase tracking-[0.25em] text-[#1f3d2b]/55">
                Adres inwestycji
              </div>

              <h2 className="mt-3 text-3xl font-semibold">
                ul. Nowowiejska 58
              </h2>

              <p className="mt-2 text-lg text-black/60">
                Pogroszew
                <br />
                05-850 Ożarów Mazowiecki
              </p>

              <p className="mt-6 leading-7 text-black/60">
                Lokalizacja łączy spokojniejsze otoczenie
                zabudowy jednorodzinnej z dostępem
                do infrastruktury Ożarowa Mazowieckiego
                i Starych Babic.
              </p>
            </div>

            <iframe
              src="https://www.google.com/maps?q=Nowowiejska+58,+Pogroszew&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NovaDuo – Nowowiejska 58, Pogroszew"
            />
          </div>
        </div>
      </section>

      {/* CODZIENNE ŻYCIE */}
      <section className="bg-[#e4e6d7] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Wszystko potrzebne na co dzień
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Spokojna okolica bez rezygnacji
              z miejskiej infrastruktury.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
              Mieszkańcy NovaDuo mają wygodny dostęp
              do szkół, sklepów, usług, klubów fitness
              i obiektów sportowych zarówno w Ożarowie Mazowieckim,
              jak i w kierunku Starych Babic.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* SZKOŁY */}
            <div className="rounded-[2rem] bg-white/75 p-7">
              <GraduationCap className="h-7 w-7 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">
                Szkoły i przedszkola
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                W pobliżu działają placówki oświatowe,
                m.in. w Umiastowie, Borzęcinie Dużym
                i Ożarowie Mazowieckim.
              </p>
            </div>

            {/* ATUT */}
            <div className="rounded-[2rem] bg-white/75 p-7">
              <ShoppingBag className="h-7 w-7 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">
                Atut Ożarów
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                Nowe centrum handlowe w Ożarowie Mazowieckim
                z m.in. Zdrofit, Rossmannem, Empikiem,
                RTV EURO AGD, apteką, sklepami
                i punktami usługowymi.
              </p>
            </div>

            {/* POZNAŃSKA 153 */}
            <div className="rounded-[2rem] bg-white/75 p-7">
              <ShoppingBag className="h-7 w-7 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">
                Poznańska 153
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                Kolejne wygodne miejsce codziennych zakupów
                w Ożarowie Mazowieckim. W kompleksie działają
                m.in. Biedronka, Rossmann i Pepco.
              </p>
            </div>

            {/* BABICE */}
            <div className="rounded-[2rem] bg-white/75 p-7">
              <ShoppingBag className="h-7 w-7 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">
                Park Handlowy Nowe Babice
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                Drugie wygodne zaplecze zakupowe znajduje się
                w kierunku Starych Babic. Park Handlowy Nowe Babice
                oferuje sklepy, punkty usługowe, gastronomię
                oraz miejsca rodzinnej rozrywki.
              </p>
            </div>

            {/* FITNESS */}
            <div className="rounded-[2rem] bg-white/75 p-7">
              <Dumbbell className="h-7 w-7 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">
                Siłownie i fitness
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                W Ożarowie dostępne są siłownie i kluby fitness,
                a ofertę uzupełnia Zdrofit w centrum Atut
                oraz gminne strefy treningowe.
              </p>
            </div>

            {/* DWIE GMINY */}
            <div className="rounded-[2rem] bg-[#1f3d2b] p-7 text-white">
              <MapPin className="h-7 w-7 text-[#e7c46a]" />

              <h3 className="mt-5 text-xl font-semibold">
                Dwa kierunki codziennych zakupów
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Położenie NovaDuo pozwala korzystać
                z infrastruktury Ożarowa Mazowieckiego
                oraz Starych Babic bez konieczności
                każdorazowego dojazdu do Warszawy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KRĘCZKI / KAPUTY */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-[#e7c46a]/30 bg-[#e7c46a]/10 px-4 py-2 text-sm font-semibold text-[#e7c46a]">
              SPORT I REKREACJA
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Kręczki i Kaputy.
              <br />
              <span className="text-[#e7c46a]">
                Aktywny wypoczynek blisko domu.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              W rejonie Kręczek i Kaput znajduje się
              rozbudowana infrastruktura sportowo-rekreacyjna,
              z której mogą korzystać zarówno dzieci,
              jak i dorośli.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* ARENA */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
              <Trophy className="h-8 w-8 text-[#e7c46a]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Arena Ożarów
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Centrum Widowiskowo-Sportowe w Kręczkach
                z pełnowymiarową halą sportową,
                widownią i infrastrukturą do zajęć
                oraz wydarzeń sportowych.
              </p>
            </div>

            {/* BOISKA */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
              <Trophy className="h-8 w-8 text-[#e7c46a]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Boiska sportowe
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                W rejonie kompleksu dostępne są również
                boiska sportowe, w tym ogólnodostępne
                boisko w Kręczkach.
              </p>
            </div>

            {/* BASENY */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
              <Waves className="h-8 w-8 text-[#e7c46a]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Baseny letnie
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Kompleks trzech basenów, wodny plac zabaw,
                zjeżdżalnia dla dzieci, miejsca do wypoczynku,
                siatkówka plażowa oraz strefa gastronomiczna.
              </p>
            </div>

            {/* PUMPTRACK */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
              <Bike className="h-8 w-8 text-[#e7c46a]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Pumptrack
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Ogólnodostępny tor przy Arenie,
                przeznaczony do jazdy na rowerach,
                hulajnogach, deskorolkach i rolkach.
              </p>
            </div>

            {/* STREET WORKOUT */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
              <Dumbbell className="h-8 w-8 text-[#e7c46a]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Street workout
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Nowa strefa treningowa przy Arenie Ożarów
                z drążkami, poręczami, drabinkami
                i urządzeniami do ćwiczeń na świeżym powietrzu.
              </p>
            </div>

            {/* GASTRONOMIA */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
              <Utensils className="h-8 w-8 text-[#e7c46a]" />

              <h3 className="mt-5 text-2xl font-semibold">
                Restauracja i cukiernia
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                W rejonie kompleksu sportowego znajduje się
                także restauracja i pracownia cukiernicza,
                dzięki czemu można połączyć aktywny wypoczynek
                ze wspólnym rodzinnym czasem.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#e7c46a]/20 bg-[#e7c46a]/10 p-7 md:p-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <Coffee className="h-10 w-10 shrink-0 text-[#e7c46a]" />

              <div>
                <h3 className="text-2xl font-semibold">
                  Nie tylko sport
                </h3>

                <p className="mt-2 max-w-4xl leading-7 text-white/70">
                  Połączenie hali sportowej, boisk,
                  basenów, pumptracku, stref treningowych
                  i gastronomii sprawia, że okolica daje
                  szeroki wybór sposobów spędzania wolnego czasu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NATURA */}
      <section className="bg-[#e4e6d7] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <Trees className="h-9 w-9 text-[#1f3d2b]" />

              <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
                Natura i wypoczynek
              </div>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                Weekend blisko natury.
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                Położenie po zachodniej stronie Warszawy
                zapewnia dogodny kierunek wyjazdu
                w stronę Kampinoskiego Parku Narodowego
                oraz terenów rekreacyjnych zachodniego Mazowsza.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-[#1f3d2b] p-8 text-white md:p-12">
              <h3 className="text-3xl font-semibold">
                Więcej przestrzeni na co dzień.
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
                NovaDuo łączy to, czego wiele osób szuka
                przy przeprowadzce pod Warszawę:
                spokojniejsze otoczenie, własną przestrzeń
                i dostęp do miasta bez rezygnowania
                ze szkół, sportu, zakupów i codziennych usług.
              </p>
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
                Zobacz nie tylko dom.
                Zobacz również jego otoczenie.
              </h2>

              <p className="mt-4 max-w-2xl text-white/65">
                Sprawdź dostępne lokale albo umów się
                bezpośrednio z deweloperem na prezentację
                inwestycji w Pogroszewie.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
              >
                Dostępne lokale
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/#kontakt-deweloper"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 font-medium text-white transition hover:bg-white/10"
              >
                Umów prezentację
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold">
            NovaDuo – domy w Pogroszewie pod Warszawą
          </h2>

          <p className="mt-4 leading-7 text-black/60">
            Inwestycja NovaDuo znajduje się w Pogroszewie,
            w gminie Ożarów Mazowiecki, w sąsiedztwie
            gminy Stare Babice. Lokalizacja zapewnia dostęp
            do komunikacji publicznej, kolei, infrastruktury
            handlowej, szkół oraz obiektów sportowo-rekreacyjnych.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="/segmenty-pod-warszawa"
              className="font-medium text-[#1f3d2b] underline underline-offset-4"
            >
              Segmenty pod Warszawą
            </a>

            <a
              href="/domy-pod-warszawa"
              className="font-medium text-[#1f3d2b] underline underline-offset-4"
            >
              Domy pod Warszawą
            </a>
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
