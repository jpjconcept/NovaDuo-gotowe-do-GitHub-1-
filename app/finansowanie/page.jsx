"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  Calculator,
  Home,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export default function FinansowaniePage() {
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
      contact_type: "credit_broker",
      page: "finansowanie",
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
              Finansowanie NovaDuo
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Potrzebujesz finansowania zakupu?
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              Zakup domu to jedna z najważniejszych decyzji finansowych.
              Jeżeli planujesz finansowanie kredytem hipotecznym,
              możesz skontaktować się z pośrednikiem kredytowym
              współpracującym przy obsłudze klientów NovaDuo.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
              Pośrednik może pomóc w przejściu przez proces finansowania
              oraz w przygotowaniu dokumentów wymaganych przez bank.
            </p>

            <a
              href="/lokale"
              className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Zobacz dostępne lokale
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="rounded-[2rem] border border-[#1f3d2b]/10 bg-white/80 p-8 shadow-xl md:p-10">
            <Calculator className="h-10 w-10 text-[#1f3d2b]" />

            <h2 className="mt-6 text-2xl font-semibold">
              Finansowanie dopasowane do zakupu nieruchomości
            </h2>

            <p className="mt-4 leading-7 text-black/60">
              Każda sytuacja finansowa jest inna. Dlatego zamiast
              prezentować na stronie przykładowe raty czy symulacje,
              umożliwiamy bezpośredni kontakt z osobą zajmującą się
              finansowaniem nieruchomości.
            </p>
          </div>
        </div>
      </section>

      {/* JAK TO DZIAŁA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Wsparcie w finansowaniu
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Prościej przejść przez proces zakupu
          </h2>

          <p className="mt-5 text-lg leading-8 text-black/60">
            W jednym miejscu możesz uzyskać informacje potrzebne
            do przygotowania finansowania zakupu wybranego lokalu.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
            <Home className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-5 text-xl font-semibold">
              Wybierz lokal
            </h3>

            <p className="mt-3 leading-7 text-black/60">
              Najpierw sprawdź dostępne lokale NovaDuo, ich ceny,
              powierzchnie i układ pomieszczeń.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
            <Landmark className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-5 text-xl font-semibold">
              Omów finansowanie
            </h3>

            <p className="mt-3 leading-7 text-black/60">
              Skontaktuj się z pośrednikiem kredytowym i przedstaw
              swoją sytuację oraz planowany sposób zakupu.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-5 text-xl font-semibold">
              Przygotuj dokumenty
            </h3>

            <p className="mt-3 leading-7 text-black/60">
              Otrzymasz informacje dotyczące dokumentów potrzebnych
              w procesie ubiegania się o finansowanie.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-white/45">
              Kontakt w sprawie finansowania
            </div>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Porozmawiaj z pośrednikiem kredytowym
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Jeżeli rozważasz kredyt hipoteczny na zakup lokalu NovaDuo,
              możesz skontaktować się bezpośrednio z osobą zajmującą się
              obsługą finansowania.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-[#1f241f] shadow-2xl md:p-10">
            <div className="text-sm uppercase tracking-[0.22em] text-[#1f3d2b]/55">
              Pośrednik kredytowy
            </div>

            <div className="mt-3 text-3xl font-semibold">
              Maciej Zieliński
            </div>

            <p className="mt-2 text-black/55">
              Finansowanie zakupu nieruchomości
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
                  href="tel:+48882111807"
                  onClick={() =>
                    trackEvent("click_phone", {
                      contact_type: "credit_broker",
                      page: "finansowanie",
                    })
                  }
                  className="flex items-center gap-3 text-lg font-semibold text-[#1f3d2b] transition hover:opacity-70"
                >
                  <Phone className="h-5 w-5" />
                  882 111 807
                </a>

                <a
                  href="mailto:maciej.zielinski@notus.pl"
                  onClick={() =>
                    trackEvent("click_email", {
                      contact_type: "credit_broker",
                      page: "finansowanie",
                    })
                  }
                  className="flex items-center gap-3 break-all text-[#1f3d2b] underline underline-offset-4"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  maciej.zielinski@notus.pl
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INFORMACJA */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#1f3d2b]/10 bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-semibold">
            Warto wiedzieć
          </h2>

          <p className="mt-4 leading-7 text-black/60">
            Decyzję o przyznaniu finansowania oraz jego warunkach
            każdorazowo podejmuje bank na podstawie indywidualnej oceny
            sytuacji klienta. Informacje prezentowane na tej stronie
            nie stanowią decyzji kredytowej ani gwarancji uzyskania
            finansowania.
          </p>
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
              Najpierw wybierz swój lokal
            </h2>

            <p className="mt-4 max-w-2xl text-white/65">
              Sprawdź aktualną dostępność, ceny oraz układ pomieszczeń.
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
