import SiteHeader from "../../components/SiteHeader";
import TrackedDocumentLink from "../../components/TrackedDocumentLink";

import {
  ArrowRight,
  Building2,
  FileSpreadsheet,
  FileText,
  History,
  Home,
  Info,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Dokumenty NovaDuo – prospekty i karty lokali | Pogroszew",
  description:
    "Dokumenty inwestycji NovaDuo w Pogroszewie: prospekty informacyjne, karty lokali, historia cen oraz dane dotyczące aktualnych cen lokali.",
  alternates: {
    canonical: "https://www.jpjconcept.pl/dokumenty",
  },
};

const unitCards = [
  {
    id: "58/1",
    task: "Zadanie nr 1",
    href: "/karty-lokali/lokal-58-3.png",
  },
  {
    id: "58/3",
    task: "Zadanie nr 1",
    href: "/karty-lokali/lokal-58-1.png",
  },
  {
    id: "58/5",
    task: "Zadanie nr 1",
    href: "/karty-lokali/lokal-58-7.png",
  },
  {
    id: "58/7",
    task: "Zadanie nr 1",
    href: "/karty-lokali/lokal-58-5.png",
  },
  {
    id: "58/2",
    task: "Zadanie nr 2",
    href: "/karty-lokali/lokal-58-2.png",
  },
  {
    id: "58/4",
    task: "Zadanie nr 2",
    href: "/karty-lokali/lokal-58-4.png",
  },
  {
    id: "58/6",
    task: "Zadanie nr 2",
    href: "/karty-lokali/lokal-58-6.png",
  },
  {
    id: "58/8",
    task: "Zadanie nr 2",
    href: "/karty-lokali/lokal-58-8.png",
  },
];

export default function DokumentyPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(78,113,76,0.18),transparent_36%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1f3d2b]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#1f3d2b]">
              <FileText className="h-4 w-4" />
              Dokumenty NovaDuo
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Dokumenty inwestycji
              <br />
              <span className="text-[#1f3d2b]">
                w jednym miejscu.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65">
              Tutaj znajdziesz prospekty informacyjne,
              karty poszczególnych lokali oraz informacje
              dotyczące aktualnych cen i ich historii.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#prospekty"
                className="rounded-full bg-[#1f3d2b] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#152b1e]"
              >
                Prospekty
              </a>

              <a
                href="#karty-lokali"
                className="rounded-full border border-black/15 bg-white/70 px-5 py-3 text-sm font-medium transition hover:bg-white"
              >
                Karty lokali
              </a>

              <a
                href="#ceny"
                className="rounded-full border border-black/15 bg-white/70 px-5 py-3 text-sm font-medium transition hover:bg-white"
              >
                Ceny i historia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROSPEKTY */}
      <section
        id="prospekty"
        className="scroll-mt-40 mx-auto max-w-7xl px-6 py-20"
      >
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
            Prospekty informacyjne
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Wybierz prospekt właściwy dla lokalu.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
            Inwestycja została podzielona na dwa zadania.
            Każde z nich posiada odrębny prospekt informacyjny.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <TrackedDocumentLink
            href="/prospekt-novaduo-zadanie-1-do-publikacji.pdf"
            documentName="Prospekt NovaDuo – Zadanie nr 1"
            documentCategory="prospekt"
            className="group rounded-[2rem] border border-[#1f3d2b]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e4e6d7] text-[#1f3d2b]">
              <FileText className="h-7 w-7" />
            </div>

            <div className="mt-7 text-sm uppercase tracking-[0.2em] text-[#1f3d2b]/50">
              Zadanie nr 1
            </div>

            <h3 className="mt-2 text-2xl font-semibold">
              Prospekt informacyjny
            </h3>

            <p className="mt-4 leading-7 text-black/60">
              Dotyczy budynków nr 3 i 4 oraz lokali:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["58/1", "58/3", "58/5", "58/7"].map((id) => (
                <span
                  key={id}
                  className="rounded-full bg-[#f6f3ec] px-4 py-2 text-sm font-medium"
                >
                  {id}
                </span>
              ))}
            </div>

            <span className="mt-7 inline-flex items-center font-semibold text-[#1f3d2b]">
              Otwórz prospekt PDF
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </TrackedDocumentLink>

          <TrackedDocumentLink
            href="/prospekt-novaduo-zadanie-2-do-publikacji.pdf"
            documentName="Prospekt NovaDuo – Zadanie nr 2"
            documentCategory="prospekt"
            className="group rounded-[2rem] border border-[#1f3d2b]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e4e6d7] text-[#1f3d2b]">
              <FileText className="h-7 w-7" />
            </div>

            <div className="mt-7 text-sm uppercase tracking-[0.2em] text-[#1f3d2b]/50">
              Zadanie nr 2
            </div>

            <h3 className="mt-2 text-2xl font-semibold">
              Prospekt informacyjny
            </h3>

            <p className="mt-4 leading-7 text-black/60">
              Dotyczy budynków nr 1 i 2 oraz lokali:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["58/2", "58/4", "58/6", "58/8"].map((id) => (
                <span
                  key={id}
                  className="rounded-full bg-[#f6f3ec] px-4 py-2 text-sm font-medium"
                >
                  {id}
                </span>
              ))}
            </div>

            <span className="mt-7 inline-flex items-center font-semibold text-[#1f3d2b]">
              Otwórz prospekt PDF
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </TrackedDocumentLink>
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-[1.75rem] border border-[#1f3d2b]/10 bg-[#e4e6d7] p-6">
          <Info className="mt-1 h-6 w-6 shrink-0 text-[#1f3d2b]" />

          <p className="leading-7 text-black/65">
            Przed podjęciem decyzji o zakupie sprawdź prospekt
            odpowiedni dla wybranego lokalu. Dokument otwiera się
            w nowej karcie przeglądarki.
          </p>
        </div>
      </section>

      {/* KARTY LOKALI */}
      <section
        id="karty-lokali"
        className="scroll-mt-40 bg-[#e4e6d7] py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Karty lokali
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Układ każdego lokalu.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
              Wybierz numer lokalu, aby otworzyć jego kartę
              z układem funkcjonalnym i podstawowymi informacjami.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {unitCards.map((unit) => (
              <TrackedDocumentLink
                key={unit.id}
                href={unit.href}
                documentName={`Karta lokalu ${unit.id}`}
                documentCategory="karta_lokalu"
                className="group rounded-[1.75rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Building2 className="h-6 w-6 text-[#1f3d2b]" />

                <div className="mt-5 text-3xl font-semibold">
                  {unit.id}
                </div>

                <div className="mt-2 text-sm text-black/45">
                  {unit.task}
                </div>

                <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#1f3d2b]">
                  Otwórz kartę
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </TrackedDocumentLink>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/lokale"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              <Home className="mr-2 h-4 w-4" />
              Zobacz lokale na planie
            </a>
          </div>
        </div>
      </section>

      {/* CENY */}
      <section
        id="ceny"
        className="scroll-mt-40 mx-auto max-w-7xl px-6 py-20"
      >
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
            Ceny i transparentność
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Aktualne ceny i historia zmian.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
            Aktualną cenę i status każdego lokalu możesz sprawdzić
            na stronie oferty. Udostępniamy również historię cen
            oraz plik z aktualnymi danymi.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <a
            href="/lokale"
            className="group rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Home className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-6 text-xl font-semibold">
              Aktualne ceny lokali
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Ceny, powierzchnie, statusy sprzedaży
              i położenie lokali na planie inwestycji.
            </p>

            <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#1f3d2b]">
              Zobacz lokale
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </a>

          <a
            href="/historia-cen"
            className="group rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <History className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-6 text-xl font-semibold">
              Historia cen
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Sprawdź wcześniejsze ceny i daty ich obowiązywania
              dla poszczególnych lokali.
            </p>

            <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#1f3d2b]">
              Zobacz historię
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </a>

          <TrackedDocumentLink
            href="/dane/novaduo-ceny.csv"
            documentName="Aktualne ceny NovaDuo – CSV"
            documentCategory="dane_csv"
            className="group rounded-[2rem] bg-[#1f3d2b] p-7 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <FileSpreadsheet className="h-8 w-8 text-[#e7c46a]" />

            <h3 className="mt-6 text-xl font-semibold">
              Dane CSV
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              Plik z aktualnymi danymi dotyczącymi cen
              i parametrów lokali NovaDuo.
            </p>

            <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#e7c46a]">
              Otwórz plik CSV
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </TrackedDocumentLink>
        </div>
      </section>

      {/* INFORMACJA */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <ShieldCheck className="h-10 w-10 text-[#e7c46a]" />

              <div className="mt-5 text-sm uppercase tracking-[0.25em] text-[#e7c46a]">
                Przejrzystość
              </div>

              <h2 className="mt-3 text-4xl font-semibold">
                Dokumenty dostępne
                przed zakupem.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-white/70">
                Chcemy, aby przed podjęciem decyzji klient miał
                łatwy dostęp do dokumentów dotyczących wybranego
                lokalu i przedsięwzięcia NovaDuo.
              </p>

              <p className="mt-4 max-w-3xl leading-8 text-white/60">
                Jeżeli potrzebujesz dodatkowego dokumentu
                albo wyjaśnienia dotyczącego prospektu,
                skontaktuj się bezpośrednio z JPJ Concept.
              </p>
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
                Masz pytanie dotyczące dokumentów?
              </h2>

              <p className="mt-4 max-w-2xl text-black/60">
                Skontaktuj się bezpośrednio z deweloperem
                inwestycji NovaDuo.
              </p>
            </div>

            <a
              href="/#kontakt-deweloper"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Kontakt z JPJ Concept
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
