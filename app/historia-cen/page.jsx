"use client";

import { useEffect, useMemo, useState } from "react";
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
    minimumFractionDigits: 6,
    maximumFractionDigits: 6,
  })} PLN/m²`;
}

function polishDate(value) {
  return new Intl.DateTimeFormat("pl-PL").format(
    new Date(`${String(value).slice(0, 10)}T12:00:00`)
  );
}

export default function PriceHistoryPage() {
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("Wczytywanie historii cen...");

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
        setMessage(`Nie udało się pobrać historii: ${error.message}`);
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
          Number(entry.old_total_price) !== Number(entry.new_total_price)
      )
      .map((entry) => ({
        key: entry.id,
        unitId: entry.unit_id,
        date: entry.changed_at.slice(0, 10),
        oldPrice: Number(entry.old_total_price),
        newPrice: Number(entry.new_total_price),
        kind: "Zmiana ceny",
      }));

    return [...initialRows, ...changedRows].sort((first, second) => {
      const dateResult = first.date.localeCompare(second.date);

      if (dateResult !== 0) {
        return dateResult;
      }

      return (
        DISPLAY_ORDER.indexOf(first.unitId) -
        DISPLAY_ORDER.indexOf(second.unitId)
      );
    });
  }, [history]);

  return (
    <main className="min-h-screen bg-[#f6f3ec] px-5 py-12 text-[#1f241f]">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm text-[#1f3d2b] underline">
          ← Wróć do strony NovaDuo
        </a>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Historia cen NovaDuo
        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-black/65">
          Zestawienie zachowuje ceny publikowane od rozpoczęcia
          raportowania 23 lipca 2026 r. Garaż w bryle budynku oraz ogród
          do wyłącznego korzystania są wliczone w cenę lokalu. Do ceny
          każdego lokalu doliczane są dwa udziały drogowe po 1,00 PLN
          brutto.
        </p>

        <div className="mt-6 rounded-2xl border border-[#1f3d2b]/15 bg-white p-5 text-sm leading-6 text-black/65">
          Udział w działce ewid. 24/10 – droga wewnętrzna:
          1,00 PLN brutto. Udział w działce ewid. 24/3 – droga
          dojazdowa do drogi publicznej: 1,00 PLN brutto.
        </div>

        {message && (
          <div className="mt-8 rounded-2xl bg-white p-5 shadow">
            {message}
          </div>
        )}

        <div className="mt-8 overflow-x-auto rounded-3xl bg-white shadow-xl">
          <table className="w-full min-w-[980px] border-collapse">
            <thead className="bg-[#eef2e8] text-left text-xs uppercase tracking-[0.12em] text-black/55">
              <tr>
                <th className="px-5 py-4">Data</th>
                <th className="px-5 py-4">Lokal</th>
                <th className="px-5 py-4">Rodzaj wpisu</th>
                <th className="px-5 py-4">Poprzednia cena lokalu</th>
                <th className="px-5 py-4">Cena lokalu</th>
                <th className="px-5 py-4">Cena za 1 m²</th>
                <th className="px-5 py-4">Udziały drogowe</th>
                <th className="px-5 py-4">Cena łączna</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  id={`lokal-${row.unitId.replace("/", "-")}`}
                  key={row.key}
                  className="border-t border-black/10"
                >
                  <td className="px-5 py-4">
                    {polishDate(row.date)}
                  </td>

                  <td className="px-5 py-4 font-semibold">
                    {row.unitId}
                  </td>

                  <td className="px-5 py-4">{row.kind}</td>

                  <td className="px-5 py-4">
                    {row.oldPrice === null
                      ? "—"
                      : money(row.oldPrice)}
                  </td>

                  <td className="px-5 py-4 font-medium">
                    {money(row.newPrice)}
                  </td>

                  <td className="px-5 py-4">
                    {pricePerM2(row.newPrice, row.unitId)}
                  </td>

                  <td className="px-5 py-4">
                    {money(ROAD_PRICE)}
                  </td>

                  <td className="px-5 py-4 font-semibold text-[#1f3d2b]">
                    {money(row.newPrice + ROAD_PRICE)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm leading-6 text-black/55">
          Cena za 1 m² jest wyliczana na podstawie ceny lokalu i
          powierzchni użytkowej. Cena łączna obejmuje cenę lokalu oraz
          wartość dwóch udziałów drogowych w łącznej wysokości 2,00 PLN
          brutto.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/dane/novaduo-ceny.csv"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1f3d2b] px-5 py-3 text-sm font-medium text-white"
          >
            Pobierz aktualny plik CSV
          </a>

          <a
            href="/#lokale"
            className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-medium"
          >
            Oferta lokali
          </a>
        </div>
      </div>
    </main>
  );
}
