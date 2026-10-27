"use client";

import { useEffect, useMemo, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import {
  ArrowRight,
  FileSpreadsheet,
  History,
  Info,
  ShieldCheck,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

const DISPLAY_ORDER = [
  "58/1",
  "58/3",
  "58/5",
  "58/7",
  "58/2",
  "58/4",
  "58/6",
  "58/8",
];

const INITIAL_DATE = "2026-07-23";
const ROAD_PRICE = 2;

const INITIAL_PRICES = {
  "58/1": 1279000,
  "58/3": 1090000,
  "58/5": 1179000,
  "58/7": 1279000,
  "58/2": 1279000,
  "58/4": 1179000,
  "58/6": 1179000,
  "58/8": 1279000,
};

const USABLE_AREAS = {
  "58/1": 118.48,
  "58/3": 118.48,
  "58/5": 118.48,
  "58/7": 123.62,
  "58/2": 118.48,
  "58/4": 118.48,
  "58/6": 118.48,
  "58/8": 118.48,
};

function money(value) {
  return `${Number(value).toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} PLN`;
}

function pricePerM2(value, unitId) {
  return `${(
    Number(value) / Number(USABLE_AREAS[unitId])
  ).toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} PLN/m²`;
}

function polishDate(value) {
  return new Intl.DateTimeFormat("pl-PL").format(
    new Date(`${String(value).slice(0, 10)}T12:00:00`)
  );
}

export default function PriceHistoryPage() {
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState(
    "Wczytywanie historii cen..."
  );

  useEffect(() => {
    let active = true;

    async function loadHistory() {
      const { data, error } = await supabase
        .from("unit_price_history")
        .select(
          "id, unit_id, old_total_price, new_total_price, changed_at"
        )
        .gte("changed_at", `${INITIAL_DATE}T00:00:00`)
        .order("changed_at", { ascending: true });

      if (!active) {
        return;
      }

      if (error) {
        setMessage(
          `Nie udało się pobrać historii cen: ${error.message}`
        );
        return;
      }

      setHistory(data ?? []);
      setMessage("");
    }

    loadHistory();

    return () => {
      active = false;
    };
  }, []);

  const rows = useMemo(() => {
    const initialRows = DISPLAY_ORDER.map((unitId) => ({
      key: `initial-${unitId}`,
      unitId,
      date: INITIAL_DATE,
      oldPrice: null,
      newPrice: INITIAL_PRICES[unitId],
      kind: "Cena początkowa",
    }));

    const changedRows = history
      .filter(
        (entry) =>
          entry.old_total_price !== null &&
          Number(entry.old_total_price) !==
            Number(entry.new_total_price)
      )
      .map((entry) => ({
        key: entry.id,
        unitId: entry.unit_id,
        date: entry.changed_at.slice(0, 10),
        oldPrice: Number(entry.old_total_price),
        newPrice: Number(entry.new_total_price),
        kind: "Zmiana ceny",
      }));

    return [...initialRows, ...changedRows].sort((a, b) => {
      const dateResult = a.date.localeCompare(b.date);

      if (dateResult !== 0) {
        return dateResult;
      }

      return (
        DISPLAY_ORDER.indexOf(a.unitId) -
        DISPLAY_ORDER.indexOf(b.unitId)
      );
    });
  }, [history]);

  const changedRowsCount = rows.filter(
    (row) => row.kind === "Zmiana ceny"
  ).length;

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      {/* WSPÓLNE MENU */}
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(78,113,76,0.18),transparent_36%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1f3d2b]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#1f3d2b]">
              <History className="h-4 w-4" />
              Ceny i historia cen
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Historia cen
              <br />
              <span className="text-[#1f3d2b]">
                lokali NovaDuo.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65">
              Publikujemy historię cen lokali od rozpoczęcia
              raportowania, czyli od 23 lipca 2026 r.
              Poniższa tabela pokazuje ceny początkowe
              oraz późniejsze rzeczywiste zmiany cen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Aktualne ceny lokali
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/dokumenty"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 bg-white/70 px-7 font-medium text-[#1f3d2b] transition hover:bg-white"
              >
                Dokumenty inwestycji
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WYJAŚNIENIE */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <History className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              23.07.2026
            </div>

            <p className="mt-2 text-sm leading-6 text-black/55">
              Początek publikowanej historii cen NovaDuo.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <ShieldCheck className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              8 lokali
            </div>

            <p className="mt-2 text-sm leading-6 text-black/55">
              Historia prowadzona jest indywidualnie
              dla każdego lokalu.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#1f3d2b] p-7 text-white shadow-sm">
            <FileSpreadsheet className="h-7 w-7 text-[#e7c46a]" />

            <div className="mt-5 text-3xl font-semibold">
              {changedRowsCount}
            </div>

            <p className="mt-2 text-sm leading-6 text-white/65">
              Zarejestrowanych zmian cen
              od początku raportowania.
            </p>
          </div>
        </div>
      </section>

      {/* INFORMACJA */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-start gap-4 rounded-[1.75rem] border border-[#1f3d2b]/10 bg-[#e4e6d7] p-6 md:p-7">
          <Info className="mt-1 h-6 w-6 shrink-0 text-[#1f3d2b]" />

          <div className="leading-7 text-black/65">
            <strong className="text-[#1f3d2b]">
              Jak czytać tabelę?
            </strong>

            <p className="mt-2">
              „Cena początkowa” oznacza cenę obowiązującą
              w dniu rozpoczęcia raportowania. „Zmiana ceny”
              pokazuje poprzednią i nową cenę lokalu.
              Zmiana samego statusu lokalu — np. na
              „Rezerwacja” — nie jest traktowana jako zmiana ceny.
            </p>
          </div>
        </div>
      </section>

      {/* TABELA */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
            Pełna historia
          </div>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Zmiany cen lokali NovaDuo
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-black/60">
            Cena za 1 m² w tej tabeli obliczana jest
            na podstawie powierzchni użytkowej lokalu.
          </p>
        </div>

        {message && (
          <div className="mb-6 rounded-[1.5rem] bg-white p-5 shadow-sm">
            {message}
          </div>
        )}

        <div className="overflow-x-auto rounded-[2rem] bg-white shadow-xl">
          <table className="w-full min-w-[1080px] border-collapse">
            <thead className="bg-[#e4e6d7] text-left text-xs uppercase tracking-[0.12em] text-black/55">
              <tr>
                <th className="px-5 py-5">
                  Data
                </th>

                <th className="px-5 py-5">
                  Lokal
                </th>

                <th className="px-5 py-5">
                  Rodzaj wpisu
                </th>

                <th className="px-5 py-5">
                  Poprzednia cena
                </th>

                <th className="px-5 py-5">
                  Cena lokalu
                </th>

                <th className="px-5 py-5">
                  Cena za 1 m²
                  <span className="mt-1 block normal-case tracking-normal text-black/40">
                    pow. użytkowej
                  </span>
                </th>

                <th className="px-5 py-5">
                  Udziały drogowe
                </th>

                <th className="px-5 py-5">
                  Cena łączna
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.key}
                  id={`lokal-${row.unitId.replace("/", "-")}`}
                  className="border-t border-black/10 transition hover:bg-[#f8f7f2]"
                >
                  <td className="whitespace-nowrap px-5 py-5">
                    {polishDate(row.date)}
                  </td>

                  <td className="px-5 py-5">
                    <span className="rounded-full bg-[#f6f3ec] px-3 py-2 font-semibold">
                      {row.unitId}
                    </span>
                  </td>

                  <td className="px-5 py-5">
                    <span
                      className={`rounded-full px-3 py-2 text-xs font-medium ${
                        row.kind === "Cena początkowa"
                          ? "bg-[#e4e6d7] text-[#1f3d2b]"
                          : "bg-[#fff1d6] text-[#805412]"
                      }`}
                    >
                      {row.kind}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-5 py-5 text-black/55">
                    {row.oldPrice === null
                      ? "—"
                      : money(row.oldPrice)}
                  </td>

                  <td className="whitespace-nowrap px-5 py-5 font-semibold">
                    {money(row.newPrice)}
                  </td>

                  <td className="whitespace-nowrap px-5 py-5">
                    {pricePerM2(
                      row.newPrice,
                      row.unitId
                    )}
                  </td>

                  <td className="whitespace-nowrap px-5 py-5">
                    {money(ROAD_PRICE)}
                  </td>

                  <td className="whitespace-nowrap px-5 py-5 text-lg font-semibold text-[#1f3d2b]">
                    {money(
                      row.newPrice + ROAD_PRICE
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm leading-6 text-black/45">
          Do ceny każdego lokalu doliczane są dwa udziały
          w działkach drogowych po 1,00 PLN brutto,
          czyli łącznie 2,00 PLN.
        </p>
      </section>

      {/* CSV */}
      <section className="bg-[#e4e6d7] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center md:p-10">
            <div>
              <FileSpreadsheet className="h-8 w-8 text-[#1f3d2b]" />

              <h2 className="mt-5 text-3xl font-semibold">
                Aktualne dane cenowe
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-black/60">
                Aktualne dane dotyczące cen lokali
                udostępniamy również w formacie CSV.
              </p>
            </div>

            <a
              href="/dane/novaduo-ceny.csv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Otwórz aktualny CSV
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#10251b] px-7 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-[#e7c46a]">
                NovaDuo
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
                Sprawdź aktualną ofertę lokali.
              </h2>

              <p className="mt-4 max-w-2xl text-white/65">
                Na interaktywnym planie znajdziesz aktualne
                ceny, statusy, powierzchnie oraz położenie
                wszystkich lokali.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/lokale"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
              >
                Zobacz lokale
              </a>

              <a
                href="/#kontakt-deweloper"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 font-medium text-white transition hover:bg-white/10"
              >
                Kontakt z JPJ Concept
              </a>
            </div>
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
