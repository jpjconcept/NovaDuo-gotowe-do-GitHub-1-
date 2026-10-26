import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Download,
  Home,
  History,
  Database,
} from "lucide-react";

export const metadata = {
  title: "Dokumenty NovaDuo – prospekty i karty lokali",
  description:
    "Dokumenty inwestycji NovaDuo w Pogroszewie. Prospekty informacyjne, karty lokali, historia cen oraz dane cenowe.",
};

const task1Homes = ["58/1", "58/3", "58/5", "58/7"];
const task2Homes = ["58/2", "58/4", "58/6", "58/8"];

function cardPath(id) {
  return `/karty-lokali/lokal-${id.replace("/", "-")}.png`;
}

export default function DokumentyPage() {
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

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Dokumenty NovaDuo
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Wszystkie najważniejsze dokumenty w jednym miejscu
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65">
              Wybierz prospekt informacyjny lub kartę konkretnego lokalu.
              Dokumenty otwierają się dopiero po wybraniu interesującej Cię
              pozycji.
            </p>
          </div>
        </div>
      </section>

      {/* PROSPEKTY */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Prospekty informacyjne
          </div>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Wybierz odpowiednie zadanie inwestycyjne
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* ZADANIE 1 */}
          <a
            href="/prospekt-novaduo-zadanie-1-do-publikacji.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <FileText className="h-9 w-9 text-[#1f3d2b]" />

            <div className="mt-6 text-sm uppercase tracking-[0.22em] text-[#1f3d2b]/55">
              Zadanie nr 1
            </div>

            <h3 className="mt-2 text-3xl font-semibold">
              Prospekt informacyjny
            </h3>

            <p className="mt-4 leading-7 text-black/60">
              Dokument dotyczący lokali:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {task1Homes.map((id) => (
                <span
                  key={id}
                  className="rounded-full bg-[#e4e6d7] px-4 py-2 text-sm font-medium text-[#1f3d2b]"
                >
                  {id}
                </span>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center font-medium text-[#1f3d2b]">
              Otwórz prospekt
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </a>

          {/* ZADANIE 2 */}
          <a
            href="/prospekt-novaduo-zadanie-2-do-publikacji.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <FileText className="h-9 w-9 text-[#1f3d2b]" />

            <div className="mt-6 text-sm uppercase tracking-[0.22em] text-[#1f3d2b]/55">
              Zadanie nr 2
            </div>

            <h3 className="mt-2 text-3xl font-semibold">
              Prospekt informacyjny
            </h3>

            <p className="mt-4 leading-7 text-black/60">
              Dokument dotyczący lokali:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {task2Homes.map((id) => (
                <span
                  key={id}
                  className="rounded-full bg-[#e4e6d7] px-4 py-2 text-sm font-medium text-[#1f3d2b]"
                >
                  {id}
                </span>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center font-medium text-[#1f3d2b]">
              Otwórz prospekt
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </section>

      {/* KARTY LOKALI */}
      <section className="border-y border-black/5 bg-white/65 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              Karty lokali
            </div>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Sprawdź układ konkretnego lokalu
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/60">
              Każda karta zawiera układ pomieszczeń oraz szczegółowe
              informacje dotyczące wybranego lokalu.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[...task1Homes, ...task2Homes].map((id) => (
              <a
                key={id}
                href={cardPath(id)}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[2rem] border border-black/5 bg-[#f6f3ec] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <Home className="h-7 w-7 text-[#1f3d2b]" />

                <div className="mt-5 text-sm uppercase tracking-[0.2em] text-black/40">
                  NovaDuo
                </div>

                <div className="mt-1 text-2xl font-semibold">
                  Lokal {id}
                </div>

                <div className="mt-5 inline-flex items-center text-sm font-medium text-[#1f3d2b]">
                  Otwórz kartę
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CENY I DANE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Informacje cenowe
          </div>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Ceny i historia zmian
          </h2>

          <p className="mt-5 text-lg leading-8 text-black/60">
            Szczegółowe informacje o cenach oraz ich zmianach są dostępne
            w osobnej sekcji.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/historia-cen"
            className="group rounded-[2rem] border border-[#1f3d2b]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <History className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-5 text-2xl font-semibold">
              Ceny i historia cen
            </h3>

            <p className="mt-3 leading-7 text-black/60">
              Sprawdź aktualne informacje cenowe oraz historię zmian cen
              poszczególnych lokali.
            </p>

            <div className="mt-6 inline-flex items-center font-medium text-[#1f3d2b]">
              Zobacz ceny
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </a>

          <a
            href="/dane/novaduo-ceny.csv"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[2rem] border border-[#1f3d2b]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Database className="h-8 w-8 text-[#1f3d2b]" />

            <h3 className="mt-5 text-2xl font-semibold">
              Dane cenowe CSV
            </h3>

            <p className="mt-3 leading-7 text-black/60">
              Pobierz dane cenowe inwestycji NovaDuo w formacie CSV.
            </p>

            <div className="mt-6 inline-flex items-center font-medium text-[#1f3d2b]">
              Pobierz dane
              <Download className="ml-2 h-4 w-4" />
            </div>
          </a>
        </div>
      </section>

      {/* SZYBKI DOSTĘP */}
      <section className="bg-[#10251b] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-3">
          <a
            href="/lokale"
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
          >
            <div className="text-xl font-semibold">
              Lokale
            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Wybierz lokal na interaktywnym planie inwestycji.
            </p>

            <div className="mt-5 inline-flex items-center text-[#e7c46a]">
              Wybierz lokal
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </a>

          <a
            href="/standard"
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
          >
            <div className="text-xl font-semibold">
              Standard
            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Poznaj materiały, instalacje i rozwiązania NovaDuo.
            </p>

            <div className="mt-5 inline-flex items-center text-[#e7c46a]">
              Zobacz standard
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </a>

          <a
            href="/biuro-sprzedazy"
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
          >
            <div className="text-xl font-semibold">
              Biuro sprzedaży
            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Masz pytania? Skontaktuj się z biurem sprzedaży.
            </p>

            <div className="mt-5 inline-flex items-center text-[#e7c46a]">
              Kontakt
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
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
