"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  Home,
  MapPin,
  MessageCircle,
  CalendarDays,
  Building2,
} from "lucide-react";

export default function BiuroSprzedazyPage() {
  const [showContact, setShowContact] = useState(false);

  const trackEvent = (name, params = {}) => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", name, params);
    }
  };

  function revealContact() {
    setShowContact(true);

    trackEvent("reveal_contact", {
      contact_type: "sales_agent",
      page: "biuro_sprzedazy",
    });
  }

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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Biuro sprzedaży NovaDuo
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Chcesz zobaczyć NovaDuo na żywo?
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              Skontaktuj się z biurem sprzedaży, aby uzyskać informacje
              dotyczące dostępnych lokali, umówić prezentację inwestycji
              lub porozmawiać o szczegółach zakupu.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
              Przed kontaktem możesz sprawdzić aktualną dostępność,
              ceny, powierzchnie i układ pomieszczeń każdego lokalu
              na interaktywnym planie NovaDuo.
            </p>

            <a
              href="/lokale"
              className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Zobacz dostępne lokale
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/images/postprodukcja_0006_Scene-24_upscale01.webp"
              alt="NovaDuo – biuro sprzedaży"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* W CZYM POMOŻEMY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            W czym możemy pomóc?
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Wszystkie informacje o zakupie w jednym miejscu
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
            <Home className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-5 text-xl font-semibold">
              Dostępne lokale
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Uzyskasz informacje o aktualnie dostępnych i zarezerwowanych
              lokalach NovaDuo.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
            <CalendarDays className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-5 text-xl font-semibold">
              Umówienie prezentacji
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Umów dogodny termin spotkania i zobacz inwestycję
              bezpośrednio na miejscu.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
            <MessageCircle className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-5 text-xl font-semibold">
              Pytania o inwestycję
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Zapytaj o standard, układ pomieszczeń, teren do wyłącznego
              użytkowania lub procedurę zakupu.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
            <MapPin className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-5 text-xl font-semibold">
              Lokalizacja
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Dowiesz się więcej o położeniu inwestycji w Pogroszewie
              oraz jej najbliższym otoczeniu.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT Z AGENTEM */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-white/45">
              Kontakt
            </div>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Porozmawiaj z biurem sprzedaży NovaDuo
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Jeżeli wybrany lokal Cię zainteresował lub chcesz zobaczyć
              inwestycję na miejscu, skontaktuj się z biurem sprzedaży.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-[#1f241f] shadow-2xl md:p-10">
            <div className="text-sm uppercase tracking-[0.22em] text-[#1f3d2b]/55">
              Biuro sprzedaży NovaDuo
            </div>

            <div className="mt-3 text-3xl font-semibold">
              Anna Bieńka
            </div>

            <p className="mt-2 text-black/55">
              Agent nieruchomości
            </p>

            {!showContact ? (
              <button
                type="button"
                onClick={revealContact}
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1f3d2b] px-6 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Pokaż dane kontaktowe
              </button>
            ) : (
              <div className="mt-8 space-y-4 rounded-2xl bg-[#f6f3ec] p-6">
                <a
                  href="tel:+48886200190"
                  onClick={() =>
                    trackEvent("click_phone", {
                      contact_type: "sales_agent",
                      page: "biuro_sprzedazy",
                    })
                  }
                  className="flex items-center gap-3 text-lg font-semibold text-[#1f3d2b] transition hover:opacity-70"
                >
                  <Phone className="h-5 w-5" />
                  +48 886 200 190
                </a>

                <a
                  href="mailto:info@bienka-nieruchomosci.pl"
                  onClick={() =>
                    trackEvent("click_email", {
                      contact_type: "sales_agent",
                      page: "biuro_sprzedazy",
                    })
                  }
                  className="flex items-center gap-3 break-all text-[#1f3d2b] underline underline-offset-4"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  info@bienka-nieruchomosci.pl
                </a>
              </div>
            )}

            <div className="mt-7 border-t border-black/10 pt-6">
              <div className="flex items-start gap-3">
                <Building2 className="mt-1 h-5 w-5 shrink-0 text-[#1f3d2b]" />

                <div>
                  <div className="font-medium">
                    Inwestycja NovaDuo
                  </div>

                  <div className="mt-1 text-sm leading-6 text-black/55">
                    ul. Nowowiejska 58
                    <br />
                    Pogroszew
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRZED SPOTKANIEM */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Przed spotkaniem
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Wybierz lokal, który najbardziej Ci odpowiada
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/60">
              Na planie inwestycji możesz wcześniej sprawdzić położenie
              konkretnego lokalu, jego powierzchnię, cenę oraz układ
              pomieszczeń.
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
              alt="Plan lokali NovaDuo"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* DODATKOWE LINKI */}
      <section className="border-y border-black/5 bg-white/70 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-3">
          <a
            href="/inwestycja"
            className="rounded-[2rem] border border-black/5 bg-[#f6f3ec] p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-xl font-semibold">
              Poznaj inwestycję
            </div>

            <p className="mt-3 text-sm leading-6 text-black/55">
              Dowiedz się więcej o NovaDuo i najważniejszych zaletach
              inwestycji.
            </p>

            <div className="mt-5 inline-flex items-center font-medium text-[#1f3d2b]">
              Czytaj więcej
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </a>

          <a
            href="/standard"
            className="rounded-[2rem] border border-black/5 bg-[#f6f3ec] p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-xl font-semibold">
              Standard NovaDuo
            </div>

            <p className="mt-3 text-sm leading-6 text-black/55">
              Ytong, Silka, pompa ciepła, rekuperacja i rozwiązania
              zwiększające komfort.
            </p>

            <div className="mt-5 inline-flex items-center font-medium text-[#1f3d2b]">
              Zobacz standard
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </a>

          <a
            href="/finansowanie"
            className="rounded-[2rem] border border-black/5 bg-[#f6f3ec] p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-xl font-semibold">
              Finansowanie
            </div>

            <p className="mt-3 text-sm leading-6 text-black/55">
              Potrzebujesz kredytu? Sprawdź możliwość kontaktu
              z pośrednikiem kredytowym.
            </p>

            <div className="mt-5 inline-flex items-center font-medium text-[#1f3d2b]">
              Zobacz finansowanie
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
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
              Zacznij od wyboru lokalu
            </h2>

            <p className="mt-4 max-w-2xl text-white/65">
              Sprawdź aktualną dostępność i wybierz swój lokal na planie.
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
