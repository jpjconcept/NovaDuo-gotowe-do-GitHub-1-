"use client";

import React from "react";
import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  Home,
  LayoutGrid,
  MapPin,
  Ruler,
  ShieldCheck,
  ThermometerSun,
  Trees,
  Wind,
} from "lucide-react";

export default function Page() {
  const advantages = [
    {
      icon: Ruler,
      title: "Około 154 m² powierzchni netto",
      text: "Duża, realna przestrzeń domu. Powierzchnię netto pokazujemy jasno i czytelnie, bez ukrywania jej za marketingowymi określeniami.",
    },
    {
      icon: Home,
      title: "Bez ograniczających skosów",
      text: "Piętro pozostaje pełnowartościową przestrzenią. Łatwiej ustawić meble, zaplanować szafy i wykorzystać każdy metr.",
    },
    {
      icon: CheckCircle2,
      title: "Cała przestrzeń w standardzie deweloperskim",
      text: "Nie sprzedajemy dodatkowych metrów wymagających późniejszej adaptacji. Powierzchnia objęta ofertą jest przygotowana w standardzie deweloperskim.",
    },
    {
      icon: LayoutGrid,
      title: "Praktyczny układ pomieszczeń",
      text: "Dom został zaprojektowany pod codzienne życie rodziny — z czytelnym podziałem stref, wygodną komunikacją i funkcjonalnymi pomieszczeniami.",
    },
    {
      icon: Building2,
      title: "Nowoczesna architektura",
      text: "Prosta bryła, płaski dach i współczesna elewacja tworzą nowoczesny styl, który odróżnia NovaDuo od klasycznej zabudowy bliźniaczej.",
    },
    {
      icon: Car,
      title: "Garaż w bryle każdego lokalu",
      text: "Pełnoprawny garaż stanowi część domu. Brama garażowa jest segmentowa, z napędem i sterowaniem pilotem.",
    },
  ];

  const standardItems = [
    {
      icon: ThermometerSun,
      title: "Pompa ciepła w cenie",
      text: "Każdy lokal otrzymuje pompę ciepła w standardzie. Klient nie musi dopłacać za urządzenie.",
    },
    {
      icon: Wind,
      title: "Rekuperator w cenie",
      text: "Rekuperator również znajduje się w cenie lokalu — bez dodatkowej dopłaty za urządzenie.",
    },
    {
      icon: ThermometerSun,
      title: "Ogrzewanie podłogowe",
      text: "Komfortowe ogrzewanie podłogowe współpracujące z pompą ciepła.",
    },
    {
      icon: Wind,
      title: "Przygotowanie pod 3 klimatyzatory",
      text: "Instalacja jest przygotowana pod późniejszy montaż trzech jednostek klimatyzacji.",
    },
    {
      icon: ShieldCheck,
      title: "Przygotowanie pod system bezpieczeństwa",
      text: "Instalacja pod alarm, okablowanie pod kamery zewnętrzne oraz indywidualny wideofon przy bramie.",
    },
    {
      icon: Trees,
      title: "Zamknięte, kameralne osiedle",
      text: "Tylko 8 lokali, brama wjazdowa sterowana pilotem oraz własne oświetlenie części wspólnej.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">

      {/* PROMOCJA */}
      <a
        href="/promocja"
        className="block bg-[#1f3d2b] px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-[#152b1e]"
      >
        <span className="font-semibold text-[#e7c46a]">
          🎁 PROMOCJA DO 31.12.2026
        </span>

        <span className="mx-2 hidden text-white/40 sm:inline">
          •
        </span>

        <span className="block sm:inline">
          Ford Puma z automatem w ramach zakupu NovaDuo
        </span>

        <span className="ml-2 font-semibold text-[#e7c46a]">
          SPRAWDŹ →
        </span>
      </a>

      {/* MENU */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 md:px-6">

          <div className="flex items-center justify-between gap-4 py-3">
            <a href="/" className="shrink-0">
              <img
                src="/images/logo-novaduo.png"
                alt="NovaDuo"
                className="h-20 w-auto md:h-24"
              />
            </a>

            <a
              href="/biuro-sprzedazy"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-5 text-sm font-medium text-white transition hover:bg-[#152b1e] md:px-6"
            >
              Biuro sprzedaży
            </a>
          </div>

          <div className="-mx-4 overflow-x-auto border-t border-black/5 px-4 md:mx-0 md:px-0">
            <div className="flex min-w-max items-center gap-5 py-3 text-sm text-black/70 md:justify-center md:gap-7">

              <a
                href="/inwestycja"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Inwestycja
              </a>

              <a
                href="/lokale"
                className="whitespace-nowrap font-semibold text-[#1f3d2b] transition hover:opacity-70"
              >
                Lokale
              </a>

              <a
                href="/standard"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Standard
              </a>

              <a
                href="/lokalizacja"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Lokalizacja
              </a>

              <a
                href="/galeria"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Galeria
              </a>

              <a
                href="/finansowanie"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Finansowanie
              </a>

              <a
                href="/dokumenty"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Dokumenty
              </a>

              <a
                href="/historia-cen"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Ceny i historia cen
              </a>

            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(78,113,76,0.20),transparent_38%),linear-gradient(120deg,#f6f3ec,#e7eadc)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">

          <div>
            <div className="mb-5 inline-flex rounded-full border border-[#1f3d2b]/20 bg-white/65 px-4 py-2 text-sm font-medium text-[#1f3d2b]">
              NovaDuo • Pogroszew pod Warszawą
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Więcej domu.
              <br />
              Więcej działki.
              <br />
              <span className="text-[#1f3d2b]">
                Więcej w standardzie.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
              NovaDuo to kameralna inwestycja tylko 8 lokali.
              Około <strong>154 m² powierzchni netto</strong>,
              garaż w bryle oraz działka do wyłącznego użytkowania
              od <strong>255 do 424 m²</strong>.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-black/60">
              Bez ograniczających skosów. Bez konieczności adaptowania
              niewykończonego poddasza. Pompa ciepła i rekuperator
              znajdują się w cenie lokalu.
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
                href="/standard"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 bg-white/65 px-7 font-medium text-[#1f3d2b] transition hover:bg-white"
              >
                Zobacz pełny standard
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/70 px-4 py-2 text-sm shadow-sm">
                ok. 154 m² netto
              </span>

              <span className="rounded-full bg-white/70 px-4 py-2 text-sm shadow-sm">
                brak skosów
              </span>

              <span className="rounded-full bg-white/70 px-4 py-2 text-sm shadow-sm">
                garaż w bryle
              </span>

              <span className="rounded-full bg-white/70 px-4 py-2 text-sm shadow-sm">
                pompa ciepła w cenie
              </span>

              <span className="rounded-full bg-white/70 px-4 py-2 text-sm shadow-sm">
                rekuperator w cenie
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/postprodukcja_0003_Scene-27_upscale01.webp"
                alt="NovaDuo – nowoczesne domy w Pogroszewie"
                className="h-[430px] w-full object-cover md:h-[560px]"
              />
            </div>

            <div className="absolute -bottom-6 left-6 right-6 rounded-[1.5rem] bg-[#1f3d2b]/95 p-5 text-white shadow-xl backdrop-blur md:left-10 md:right-auto md:max-w-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                W cenie każdego lokalu
              </div>

              <div className="mt-2 text-xl font-semibold">
                Pompa ciepła + rekuperator
              </div>

              <div className="mt-1 text-sm text-white/70">
                Bez dodatkowej dopłaty za urządzenia.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NAJWAŻNIEJSZE LICZBY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Home className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              8 lokali
            </div>

            <div className="mt-2 text-sm leading-6 text-black/55">
              Kameralna inwestycja zamiast dużego osiedla.
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

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Trees className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              255–424 m²
            </div>

            <div className="mt-2 text-sm leading-6 text-black/55">
              Działki do wyłącznego użytkowania.
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Car className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              Garaż
            </div>

            <div className="mt-2 text-sm leading-6 text-black/55">
              W bryle każdego lokalu, z bramą i napędem.
            </div>
          </div>

        </div>
      </section>

      {/* PRZEWAGI */}
      <section className="bg-[#1f3d2b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-4xl text-center">
            <div className="text-sm uppercase tracking-[0.28em] text-white/45">
              Dlaczego NovaDuo?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Nie porównuj tylko ceny.
              <br />
              <span className="text-[#e7c46a]">
                Porównaj, co faktycznie dostajesz.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Sam metraż nie mówi wszystkiego. Znaczenie ma to,
              czy powierzchnia jest rzeczywiście funkcjonalna,
              wykończona w standardzie deweloperskim i czy po zakupie
              trzeba jeszcze ponosić znaczne dodatkowe koszty.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7c46a] text-[#1f3d2b]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/inwestycja"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
            >
              Poznaj inwestycję
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* PEŁNOWARTOŚCIOWA POWIERZCHNIA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">

          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Metry, które naprawdę wykorzystasz
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Pełna wysokość.
              <br />
              Bez skosów.
              <br />
              Bez późniejszej adaptacji.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">
              W NovaDuo piętro nie jest poddaszem ograniczonym skosami.
              Dzięki płaskiemu dachowi otrzymujesz pełnowartościową
              przestrzeń, którą łatwiej urządzić i wykorzystać.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-black/60">
              Nie trzeba również kupować dodatkowej powierzchni,
              która dopiero po odbiorze będzie wymagała kosztownej
              adaptacji do funkcji mieszkalnej.
            </p>

            <a
              href="/lokale"
              className="mt-7 inline-flex items-center font-semibold text-[#1f3d2b] transition hover:opacity-60"
            >
              Zobacz układy lokali
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/images/postprodukcja_0005_Scene-25_upscale01.webp"
              alt="Nowoczesna architektura NovaDuo bez skosów"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
          </div>

        </div>
      </section>

      {/* STANDARD W CENIE */}
      <section className="border-y border-black/5 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Standard NovaDuo
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Ważne elementy są już w cenie.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
              Pompa ciepła i rekuperator nie są dodatkowymi opcjami,
              za które trzeba później dopłacać. Otrzymujesz je
              razem z lokalem.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {standardItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-black/5 bg-[#f6f3ec] p-7"
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

          <div className="mt-10">
            <a
              href="/standard"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 px-7 font-medium text-[#1f3d2b] transition hover:bg-[#1f3d2b] hover:text-white"
            >
              Zobacz pełny standard techniczny
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* DZIAŁKA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <img
              src="/images/novaduo_rezerwacje_v2.webp"
              alt="Plan inwestycji NovaDuo"
              className="w-full object-contain"
            />
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Więcej własnej przestrzeni
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Działka do wyłącznego użytkowania.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              Do poszczególnych lokali przypisane są działki
              do wyłącznego użytkowania o powierzchni od
              <strong> 255 do 424 m²</strong>.
            </p>

            <p className="mt-4 leading-7 text-black/60">
              To przestrzeń przypisana konkretnie do Twojego lokalu —
              obejmująca budynek, podjazd, dojście oraz część zieloną.
            </p>

            <a
              href="/lokale"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Sprawdź działkę przy każdym lokalu
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* LOKALIZACJA */}
      <section className="bg-[#e4e6d7] py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <MapPin className="h-8 w-8 text-[#1f3d2b]" />

              <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
                Pogroszew
              </div>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                Blisko Warszawy.
                <br />
                Z dala od dużego osiedla.
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                NovaDuo powstaje przy ul. Nowowiejskiej 58
                w Pogroszewie, na granicy gmin Ożarów Mazowiecki
                i Stare Babice.
              </p>

              <a
                href="/lokalizacja"
                className="mt-7 inline-flex items-center font-semibold text-[#1f3d2b]"
              >
                Zobacz lokalizację
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/images/postprodukcja_0006_Scene-24_upscale01.webp"
                alt="NovaDuo w Pogroszewie"
                className="h-[380px] w-full object-cover md:h-[460px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* PROMOCJA FORD */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">

          <div>
            <div className="inline-flex rounded-full border border-[#e7c46a]/30 bg-[#e7c46a]/10 px-4 py-2 text-sm font-semibold text-[#e7c46a]">
              PROMOCJA DO 31.12.2026
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Nowy dom.
              <br />
              Nowy samochód.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Przy zakupie lokalu NovaDuo w okresie obowiązywania
              promocji możesz otrzymać fabrycznie nowego
              Forda Puma z automatyczną skrzynią biegów.
            </p>

            <a
              href="/promocja"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#e7c46a] px-7 font-semibold text-[#10251b] transition hover:bg-[#f0d681]"
            >
              Poznaj warunki promocji
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <a
            href="/promocja"
            className="group flex min-h-[320px] items-center justify-center overflow-hidden rounded-[2rem] bg-white/5 p-6"
          >
            <img
              src="/images/promocja-auto.png"
              alt="Ford Puma w promocji NovaDuo"
              className="w-full max-w-[650px] object-contain transition duration-500 group-hover:scale-[1.03]"
            />
          </a>

        </div>
      </section>

      {/* SEO / KRÓTKI OPIS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:p-10">

          <h2 className="text-2xl font-semibold">
            NovaDuo – nowoczesne domy i segmenty pod Warszawą
          </h2>

          <p className="mt-4 leading-7 text-black/60">
            NovaDuo to kameralna inwestycja mieszkaniowa
            w Pogroszewie, w gminie Ożarów Mazowiecki,
            w bezpośrednim sąsiedztwie gminy Stare Babice.
            Inwestycja obejmuje 8 lokali z garażami,
            działkami do wyłącznego użytkowania i nowoczesnym
            standardem technicznym.
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

      {/* GŁÓWNE CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#1f3d2b] px-7 py-12 text-white md:px-12 md:py-16">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                NovaDuo
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
                Zobacz lokal, zanim porównasz go tylko po cenie za metr.
              </h2>

              <p className="mt-4 max-w-2xl text-white/65">
                Sprawdź powierzchnię, działkę, układ pomieszczeń,
                standard i wyposażenie, które otrzymujesz w cenie.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
              >
                Dostępne lokale
              </a>

              <a
                href="/biuro-sprzedazy"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 font-medium text-white transition hover:bg-white/10"
              >
                Umów prezentację
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#f6f3ec] py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-sm text-black/55 md:grid-cols-2">

          <div>
            <div className="font-medium text-[#1f241f]">
              © 2026 NovaDuo | JPJ Concept Sp. z o.o.
            </div>

            <div className="mt-3">
              ul. Nowowiejska 58A, Pogroszew
              <br />
              05-850 Ożarów Mazowiecki
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
            <a href="/lokale" className="hover:text-[#1f3d2b]">
              Lokale
            </a>

            <a href="/standard" className="hover:text-[#1f3d2b]">
              Standard
            </a>

            <a href="/dokumenty" className="hover:text-[#1f3d2b]">
              Dokumenty
            </a>

            <a
              href="/historia-cen"
              className="hover:text-[#1f3d2b]"
            >
              Historia cen
            </a>

            <a
              href="/promocja"
              className="font-medium text-[#b07f24]"
            >
              Promocja
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}
