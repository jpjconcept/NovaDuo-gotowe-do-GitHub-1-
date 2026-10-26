"use client";

import React, { useEffect, useState } from "react";
import { Building2, MapPin, Ruler, ArrowRight } from "lucide-react";
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

/*
  To są na razie pola wyboru na mapie.
  Po uruchomieniu strony dopasujemy je dokładnie do Twojego rysunku.
  Nie zmieniamy samego rysunku ani granic działek.
*/
const HOTSPOTS = [
  {
    id: "58/2",
    left: "4%",
    top: "7%",
    width: "21%",
    height: "31%",
  },
  {
    id: "58/4",
    left: "26%",
    top: "7%",
    width: "21%",
    height: "31%",
  },
  {
    id: "58/6",
    left: "48%",
    top: "7%",
    width: "21%",
    height: "31%",
  },
  {
    id: "58/8",
    left: "70%",
    top: "7%",
    width: "25%",
    height: "31%",
  },

  {
    id: "58/1",
    left: "4%",
    top: "61%",
    width: "21%",
    height: "31%",
  },
  {
    id: "58/3",
    left: "26%",
    top: "61%",
    width: "21%",
    height: "31%",
  },
  {
    id: "58/5",
    left: "48%",
    top: "61%",
    width: "21%",
    height: "31%",
  },
  {
    id: "58/7",
    left: "70%",
    top: "61%",
    width: "25%",
    height: "31%",
  },
];

function formatCurrency(value) {
  return `${Number(value).toLocaleString("pl-PL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })} zł`;
}

function formatArea(value) {
  const number = Number(value);

  return number.toLocaleString("pl-PL", {
    minimumFractionDigits: Number.isInteger(number) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function formatPricePerNetSquareMeter(totalPrice, netArea) {
  const price = Number(totalPrice);
  const area = Number(netArea);

  if (!Number.isFinite(price) || !Number.isFinite(area) || area <= 0) {
    return "—";
  }

  return `${(price / area).toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} zł/m²`;
}

function buildHomeViewModel(unit) {
  return {
    id: unit.id,
    totalPrice: Number(unit.total_price),
    price: formatCurrency(unit.total_price),
    netAreaValue: Number(unit.net_area),
    netArea: `${formatArea(unit.net_area)} m²`,
    usableArea: `${formatArea(unit.usable_area)} m²`,
    terrainArea: `${formatArea(unit.garden_area)} m²`,
    plot: unit.plot_no,
    status: unit.status,
    pricePerNetSquareMeter: formatPricePerNetSquareMeter(
      unit.total_price,
      unit.net_area
    ),
  };
}

export default function LokalePage() {
  const fallbackHomes = [
    {
      id: "58/1",
      total_price: 1279000,
      net_area: 154.57,
      usable_area: 118.48,
      garden_area: 424,
      plot_no: "24/11",
      status: "Dostępny",
    },
    {
      id: "58/3",
      total_price: 1179000,
      net_area: 154.57,
      usable_area: 118.48,
      garden_area: 272,
      plot_no: "24/11",
      status: "Dostępny",
    },
    {
      id: "58/5",
      total_price: 1179000,
      net_area: 154.57,
      usable_area: 118.48,
      garden_area: 272,
      plot_no: "24/12",
      status: "Rezerwacja",
    },
    {
      id: "58/7",
      total_price: 1279000,
      net_area: 154.02,
      usable_area: 123.62,
      garden_area: 405,
      plot_no: "24/12",
      status: "Rezerwacja",
    },
    {
      id: "58/2",
      total_price: 1279000,
      net_area: 154.57,
      usable_area: 118.48,
      garden_area: 408,
      plot_no: "24/8",
      status: "Dostępny",
    },
    {
      id: "58/4",
      total_price: 1179000,
      net_area: 154.57,
      usable_area: 118.48,
      garden_area: 255,
      plot_no: "24/8",
      status: "Dostępny",
    },
    {
      id: "58/6",
      total_price: 1179000,
      net_area: 154.57,
      usable_area: 118.48,
      garden_area: 255,
      plot_no: "24/9",
      status: "Dostępny",
    },
    {
      id: "58/8",
      total_price: 1279000,
      net_area: 154.57,
      usable_area: 118.48,
      garden_area: 345,
      plot_no: "24/9",
      status: "Dostępny",
    },
  ]
    .map(buildHomeViewModel)
    .sort(
      (a, b) =>
        DISPLAY_ORDER.indexOf(a.id) - DISPLAY_ORDER.indexOf(b.id)
    );

  const [homes, setHomes] = useState(fallbackHomes);

  /*
    selectedId zostaje zapamiętany.
    Dzięki temu po odsunięciu myszy informacje NIE znikają.
  */
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    let active = true;

    async function loadHomes() {
      const { data, error } = await supabase
        .from("units")
        .select(
          "id, usable_area, net_area, garden_area, plot_no, total_price, status"
        );

      if (error) {
        console.error(
          "Nie udało się pobrać lokali z Supabase:",
          error.message
        );
        return;
      }

      if (!active || !data) {
        return;
      }

      const homesFromDatabase = data
        .map(buildHomeViewModel)
        .sort(
          (a, b) =>
            DISPLAY_ORDER.indexOf(a.id) -
            DISPLAY_ORDER.indexOf(b.id)
        );

      setHomes(homesFromDatabase);
    }

    loadHomes();

    return () => {
      active = false;
    };
  }, []);

  const selectedHome =
    homes.find((home) => home.id === selectedId) || null;

  function getHome(id) {
    return homes.find((home) => home.id === id);
  }

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
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
            className="rounded-full border border-[#1f3d2b]/20 px-5 py-3 text-sm font-medium text-[#1f3d2b] transition hover:bg-[#1f3d2b] hover:text-white"
          >
            Wróć na stronę główną
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
            Lokale NovaDuo
          </div>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Wybierz lokal na planie inwestycji
          </h1>

          <p className="mt-5 text-lg leading-8 text-black/60">
            Najedź kursorem na wybrany lokal. Zostanie on podświetlony,
            a obok pojawią się jego najważniejsze informacje.
            Na telefonie wystarczy dotknąć wybranego lokalu.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.7fr] lg:items-start">
          {/* MAPA */}
          <div>
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-xl">
              <img
                src="/images/novaduo_rezerwacje_v2.webp"
                alt="Plan usytuowania lokali NovaDuo"
                className="block h-auto w-full"
              />

              {HOTSPOTS.map((spot) => {
                const home = getHome(spot.id);
                const isSelected = selectedId === spot.id;
                const isReserved = home?.status === "Rezerwacja";

                return (
                  <button
                    key={spot.id}
                    type="button"
                    aria-label={`Wybierz lokal ${spot.id}`}
                    title={`Lokal ${spot.id}`}
                    onMouseEnter={() => setSelectedId(spot.id)}
                    onFocus={() => setSelectedId(spot.id)}
                    onClick={() => setSelectedId(spot.id)}
                    style={{
                      left: spot.left,
                      top: spot.top,
                      width: spot.width,
                      height: spot.height,
                    }}
                    className={`absolute flex items-center justify-center rounded-xl border-2 transition duration-200 ${
                      isSelected
                        ? isReserved
                          ? "border-orange-500 bg-orange-400/30"
                          : "border-[#1f6b42] bg-[#78b894]/35"
                        : "border-transparent bg-transparent hover:border-[#1f3d2b]/40 hover:bg-[#78b894]/20"
                    }`}
                  >
                    <span
                      className={`rounded-full px-3 py-1.5 text-sm font-semibold shadow-sm transition ${
                        isSelected
                          ? "bg-white text-[#1f3d2b]"
                          : "bg-white/85 text-[#1f3d2b]"
                      }`}
                    >
                      {spot.id}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-5 text-sm text-black/55">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#78b894]" />
                Dostępny
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-orange-400" />
                Rezerwacja
              </div>
            </div>
          </div>

          {/* PANEL INFORMACYJNY */}
          <div className="lg:sticky lg:top-8">
            {!selectedHome ? (
              <div className="rounded-[2rem] border border-[#1f3d2b]/10 bg-white p-8 shadow-sm">
                <Building2 className="h-9 w-9 text-[#1f3d2b]" />

                <h2 className="mt-5 text-2xl font-semibold">
                  Wybierz lokal
                </h2>

                <p className="mt-4 leading-7 text-black/60">
                  Najedź kursorem na wybrany lokal na planie.
                  Tutaj pojawią się jego najważniejsze informacje.
                </p>
              </div>
            ) : (
              <div className="rounded-[2rem] border border-[#1f3d2b]/10 bg-white p-8 shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-[#1f3d2b]/55">
                      NovaDuo
                    </div>

                    <h2 className="mt-2 text-3xl font-semibold">
                      Lokal {selectedHome.id}
                    </h2>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      selectedHome.status === "Rezerwacja"
                        ? "bg-orange-200 text-orange-900"
                        : "bg-[#dfead8] text-[#1f3d2b]"
                    }`}
                  >
                    {selectedHome.status}
                  </span>
                </div>

                <div className="mt-7 space-y-5">
                  <div>
                    <div className="text-sm text-black/45">
                      Powierzchnia netto
                    </div>

                    <div className="mt-1 text-3xl font-semibold text-[#1f3d2b]">
                      {selectedHome.netArea}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-black/10 pt-5">
                    <MapPin className="mt-0.5 h-5 w-5 text-[#1f3d2b]" />

                    <div>
                      <div className="text-sm text-black/45">
                        Teren do wyłącznego użytkowania
                      </div>

                      <div className="mt-1 font-semibold">
                        {selectedHome.terrainArea}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ruler className="mt-0.5 h-5 w-5 text-[#1f3d2b]" />

                    <div>
                      <div className="text-sm text-black/45">
                        Cena za 1 m² netto
                      </div>

                      <div className="mt-1 text-xl font-semibold text-[#1f3d2b]">
                        {selectedHome.pricePerNetSquareMeter}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-5">
                    <div className="text-sm text-black/45">
                      Cena lokalu
                    </div>

                    <div className="mt-1 text-2xl font-semibold">
                      {selectedHome.price}
                    </div>
                  </div>

                  <div className="text-sm text-black/55">
                    Działka ewidencyjna: {selectedHome.plot}
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  <a
                    href={`/karty-lokali/lokal-${selectedHome.id.replace(
                      "/",
                      "-"
                    )}.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-5 font-medium text-white transition hover:bg-[#152b1e]"
                  >
                    Otwórz kartę lokalu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>

                  <a
                    href={`/historia-cen#lokal-${selectedHome.id.replace(
                      "/",
                      "-"
                    )}`}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 px-5 text-sm font-medium text-[#1f3d2b] transition hover:bg-[#f0f2e8]"
                  >
                    Historia ceny
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
