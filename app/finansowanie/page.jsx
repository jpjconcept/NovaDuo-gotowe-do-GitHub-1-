"use client";

import React, { useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  FileText,
  Landmark,
  Mail,
  Phone,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

export default function FinansowaniePage() {
  const [showFinanceContact, setShowFinanceContact] = useState(false);

  const trackEvent = (name, params = {}) => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", name, params);
    }
  };

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
              <Banknote className="h-4 w-4" />
              Finansowanie zakupu NovaDuo
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Zakup lokalu
              <br />
              <span className="text-[#1f3d2b]">
                możesz sfinansować kredytem.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              Jeżeli planujesz zakup lokalu NovaDuo z wykorzystaniem
              kredytu hipotecznego, możesz skorzystać z pomocy
              niezależnego pośrednika kredytowego współpracującego
              z klientami inwestycji.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-black/60">
              Pośrednik może pomóc w przejściu przez proces
              finansowania i przygotowaniu dokumentów wymaganych
              przez bank.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt-finansowanie"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Kontakt w sprawie kredytu
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 bg-white/65 px-7 font-medium text-[#1f3d2b] transition hover:bg-white"
              >
                Sprawdź dostępne lokale
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#10251b] p-8 text-white shadow-2xl md:p-10">
            <Landmark className="h-10 w-10 text-[#e7c46a]" />

            <div className="mt-6 text-sm uppercase tracking-[0.24em] text-[#e7c46a]">
              Warto wiedzieć
            </div>

            <h2 className="mt-3 text-3xl font-semibold">
              Decyzja kredytowa należy do banku.
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Warunki finansowania zależą m.in. od sytuacji
              finansowej kupującego, wysokości wkładu własnego,
              wybranego banku oraz aktualnej oferty kredytowej.
            </p>

            <p className="mt-4 leading-8 text-white/70">
              Dlatego warto rozpocząć analizę możliwości finansowania
              odpowiednio wcześnie, jeszcze przed podpisaniem
              umowy deweloperskiej.
            </p>
          </div>
        </div>
      </section>

      {/* JAK TO DZIAŁA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
            Proces finansowania
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Od wyboru lokalu do uruchomienia kredytu.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
            Dokładny przebieg zależy od banku i indywidualnej
            sytuacji klienta, ale zazwyczaj obejmuje kilka
            podstawowych etapów.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f3d2b] text-lg font-semibold text-white">
              1
            </div>

            <WalletCards className="mt-6 h-7 w-7 text-[#1f3d2b]" />

            <h3 className="mt-4 text-xl font-semibold">
              Analiza możliwości
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Wstępna analiza zdolności kredytowej,
              wkładu własnego oraz możliwych wariantów
              finansowania zakupu.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f3d2b] text-lg font-semibold text-white">
              2
            </div>

            <FileText className="mt-6 h-7 w-7 text-[#1f3d2b]" />

            <h3 className="mt-4 text-xl font-semibold">
              Dokumenty
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Przygotowanie dokumentów dotyczących klienta,
              lokalu oraz przedsięwzięcia wymaganych
              w procesie kredytowym.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f3d2b] text-lg font-semibold text-white">
              3
            </div>

            <Landmark className="mt-6 h-7 w-7 text-[#1f3d2b]" />

            <h3 className="mt-4 text-xl font-semibold">
              Wniosek i decyzja banku
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Złożenie wniosku kredytowego, analiza przez bank
              i — po pozytywnej decyzji — zawarcie umowy
              kredytowej.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT FINANSOWANIE */}
      <section
        id="kontakt-finansowanie"
        className="scroll-mt-40 bg-[#e4e6d7] py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <Banknote className="h-9 w-9 text-[#1f3d2b]" />

              <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
                Kontakt kredytowy
              </div>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                Potrzebujesz pomocy
                <br />
                przy finansowaniu?
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-black/65">
                Możesz skontaktować się bezpośrednio
                z pośrednikiem kredytowym obsługującym klientów
                zainteresowanych zakupem lokalu NovaDuo.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-white p-8 shadow-xl md:p-10">
              <div className="text-sm uppercase tracking-[0.22em] text-[#1f3d2b]/55">
                Pośrednik kredytowy
              </div>

              <div className="mt-3 text-3xl font-semibold">
                Maciej Zieliński
              </div>

              <p className="mt-2 text-black/50">
                Finansowanie zakupu nieruchomości
              </p>

              {!showFinanceContact ? (
                <button
                  type="button"
                  onClick={() => {
                    setShowFinanceContact(true);

                    trackEvent("reveal_contact", {
                      contact_type: "credit_broker",
                      page: "finansowanie",
                    });
                  }}
                  className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1f3d2b] px-6 font-medium text-white transition hover:bg-[#152b1e]"
                >
                  Pokaż dane kontaktowe
                </button>
              ) : (
                <div className="mt-8 space-y-4 rounded-[1.75rem] bg-[#f6f3ec] p-6">
                  <a
                    href="tel:+48882111807"
                    onClick={() =>
                      trackEvent("click_phone", {
                        contact_type: "credit_broker",
                        page: "finansowanie",
                      })
                    }
                    className="flex items-center gap-4 text-lg font-semibold text-[#1f3d2b] transition hover:opacity-70"
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
                    className="flex items-center gap-4 break-all text-[#1f3d2b] transition hover:opacity-70"
                  >
                    <Mail className="h-5 w-5 shrink-0" />
                    maciej.zielinski@notus.pl
                  </a>
                </div>
              )}

              <p className="mt-6 text-xs leading-5 text-black/40">
                JPJ Concept nie jest bankiem ani pośrednikiem
                kredytowym. Ostateczne warunki i decyzję
                dotyczącą finansowania określa wybrana instytucja
                finansująca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CO PRZYGOTOWAĆ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <ShieldCheck className="h-9 w-9 text-[#1f3d2b]" />

              <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
                Przed rozmową
              </div>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                Warto przygotować podstawowe informacje.
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                Zakres dokumentów zależy od banku i źródła dochodu.
                Na pierwszym etapie wystarczą zazwyczaj informacje
                pozwalające na wstępną ocenę możliwości finansowania.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Cena wybranego lokalu",
                "Planowany wkład własny",
                "Forma zatrudnienia lub źródło dochodu",
                "Wysokość miesięcznych dochodów",
                "Aktualne zobowiązania kredytowe",
                "Preferowany termin zakupu",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.5rem] bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f3d2b]" />

                  <span className="leading-6 text-black/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROZDZIELENIE FINANSOWANIA I SPRZEDAŻY */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <Banknote className="h-8 w-8 text-[#e7c46a]" />

              <h2 className="mt-5 text-2xl font-semibold">
                Pytania o kredyt
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Zdolność kredytowa, dokumenty bankowe
                i możliwości finansowania — skontaktuj się
                z pośrednikiem kredytowym.
              </p>

              <a
                href="#kontakt-finansowanie"
                className="mt-7 inline-flex items-center font-semibold text-[#e7c46a]"
              >
                Kontakt kredytowy
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <ShieldCheck className="h-8 w-8 text-[#e7c46a]" />

              <h2 className="mt-5 text-2xl font-semibold">
                Pytania o lokal i zakup
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Dostępność, cena, standard, prezentacja inwestycji
                i dokumenty dotyczące NovaDuo — skontaktuj się
                bezpośrednio z JPJ Concept.
              </p>

              <a
                href="/#kontakt-deweloper"
                className="mt-7 inline-flex items-center font-semibold text-[#e7c46a]"
              >
                Kontakt z deweloperem
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 shadow-sm md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-[#1f3d2b]/45">
                NovaDuo
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
                Najpierw wybierz lokal.
                Potem dobierz sposób finansowania.
              </h2>

              <p className="mt-4 max-w-2xl text-black/60">
                Na stronie lokali znajdziesz aktualne ceny,
                powierzchnie, statusy i położenie każdego domu.
              </p>
            </div>

            <a
              href="/lokale"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Zobacz lokale
              <ArrowRight className="ml-2 h-4 w-4" />
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
