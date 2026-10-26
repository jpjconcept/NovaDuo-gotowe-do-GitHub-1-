"use client";

import React, { useEffect, useState } from "react";
import {
  Building2,
  MapPin,
  Ruler,
  ArrowRight,
  X,
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

/*
  Aktywne pola nad bryłami lokali.
  Nie zmieniamy oryginalnego planu.
*/
const HOTSPOTS = [
  // GÓRNY RZĄD
  {
    id: "58/2",
    left: "29.5%",
    top: "12%",
    width: "10.3%",
    height: "15%",
  },
  {
    id: "58/4",
    left: "39.8%",
    top: "12%",
    width: "10.3%",
    height: "15%",
  },
  {
    id: "58/6",
    left: "50.1%",
    top: "12%",
    width: "10.3%",
    height: "15%",
  },
  {
    id: "58/8",
    left: "60.4%",
    top: "12%",
    width: "10.3%",
    height: "15%",
  },

  // DOLNY RZĄD
  {
    id: "58/1",
    left: "29.5%",
    top: "68.2%",
    width: "10.3%",
    height: "15%",
  },
  {
    id: "58/3",
    left: "39.8%",
    top: "68.2%",
    width: "10.3%",
    height: "15%",
  },
  {
    id: "58/5",
    left: "50.1%",
    top: "68.2%",
    width: "10.3%",
    height: "15%",
  },
  {
    id: "58/7",
    left: "60.4%",
    top: "68.2%",
    width: "10.3%",
    height: "15%",
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

function formatPricePerSquareMeter(totalPrice, area) {
  const price = Number(totalPrice);
  const surface = Number(area);

  if (
    !Number.isFinite(price) ||
    !Number.isFinite(surface) ||
    surface <= 0
  ) {
    return "—";
  }

  return `${(price / surface).toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} zł/m²`;
}

function buildHomeViewModel(unit) {
  return {
    id: unit.id,
    price: formatCurrency(unit.total_price),

    netArea: `${formatArea(unit.net_area)} m²`,
    usableArea: `${formatArea(unit.usable_area)} m²`,

    terrainArea: `${formatArea(unit.garden_area)} m²`,

    plot: unit.plot_no,
    status: unit.status,

    pricePerNetSquareMeter: formatPricePerSquareMeter(
      unit.total_price,
      unit.net_area
    ),

    pricePerUsableSquareMeter: formatPricePerSquareMeter(
      unit.total_price,
      unit.usable_area
    ),
  };
}

function isSold(home) {
  return home?.status?.toLowerCase() === "sprzedany";
}

function isReserved(home) {
  return home?.status?.toLowerCase() === "rezerwacja";
}

function isAvailable(home) {
  return !isSold(home) && !isReserved(home);
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
    Lokal wskazany kursorem pozostaje wybrany.
  */
  const [selectedId, setSelectedId] = useState(null);

  /*
    Lokal, którego karta jest aktualnie otwarta.
  */
  const [openCardId, setOpenCardId] = useState(null);

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

  /*
    ESC zamyka kartę lokalu.
  */
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenCardId(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectedHome =
    homes.find((home) => home.id === selectedId) || null;

  const openCardHome =
    homes.find((home) => home.id === openCardId) || null;

  function getHome(id) {
    return homes.find((home) => home.id === id);
  }

  function openHomeCard(id) {
    const home = getHome(id);

    /*
      Sprzedanego lokalu nie można otworzyć.
    */
    if (!home || isSold(home)) {
      return;
    }

    setSelectedId(id);
    setOpenCardId(id);
  }

  function getCardPath(id) {
    return `/karty-lokali/lokal-${id.replace("/", "-")}.png`;
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
            Najedź kursorem na wybrany lokal, aby zobaczyć jego
            najważniejsze informacje. Kliknij dostępny lub zarezerwowany
            lokal, aby otworzyć szczegółową kartę z układem i opisem
            pomieszczeń.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.7fr] lg:items-start">
          {/* PLAN INWESTYCJI */}
          <div>
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-xl">
              <img
                src="/images/novaduo_rezerwacje_v2.webp"
                alt="Plan usytuowania lokali NovaDuo"
                className="block h-auto w-full"
              />

              {HOTSPOTS.map((spot) => {
                const home = getHome(spot.id);

                const selected = selectedId === spot.id;
                const sold = isSold(home);
                const reserved = isReserved(home);

                let selectedClasses = "";

                if (selected && sold) {
                  selectedClasses =
                    "border-red-600 bg-red-500/40";
                } else if (selected && reserved) {
                  selectedClasses =
                    "border-orange-500 bg-orange-400/35";
                } else if (selected && isAvailable(home)) {
                  selectedClasses =
                    "border-[#1f6b42] bg-[#78b894]/40";
                }

                let hoverClasses =
                  "border-transparent bg-transparent";

                if (sold) {
                  hoverClasses +=
                    " hover:border-red-600 hover:bg-red-500/30";
                } else if (reserved) {
                  hoverClasses +=
                    " hover:border-orange-500 hover:bg-orange-400/25";
                } else {
                  hoverClasses +=
                    " hover:border-[#1f3d2b]/40 hover:bg-[#78b894]/20";
                }

                return (
                  <button
                    key={spot.id}
                    type="button"
                    aria-label={
                      sold
                        ? `Lokal ${spot.id} sprzedany`
                        : `Wybierz lokal ${spot.id}`
                    }
                    aria-disabled={sold}
                    title={
                      sold
                        ? `Lokal ${spot.id} – sprzedany`
                        : `Lokal ${spot.id}`
                    }
                    tabIndex={sold ? -1 : 0}
                    onMouseEnter={() => setSelectedId(spot.id)}
                    onFocus={() => {
                      if (!sold) {
                        setSelectedId(spot.id);
                      }
                    }}
                    onClick={() => {
                      if (!sold) {
                        openHomeCard(spot.id);
                      }
                    }}
                    style={{
                      left: spot.left,
                      top: spot.top,
                      width: spot.width,
                      height: spot.height,
                    }}
                    className={`absolute border-2 transition duration-200 ${
                      sold
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } ${
                      selected
                        ? selectedClasses
                        : hoverClasses
                    }`}
                  />
                );
              })}
            </div>

            {/* LEGENDA */}
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-black/55">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#78b894]" />
                Dostępny
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-orange-400" />
                Rezerwacja
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-600" />
                Sprzedany
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
                  Najedź kursorem na lokal, aby zobaczyć jego dane.
                  Kliknij, aby otworzyć kartę z rozkładem pomieszczeń.
                </p>
              </div>
            ) : isSold(selectedHome) ? (
              /*
                SPRZEDANY:
                nie pokazujemy żadnych danych lokalu.
              */
              <div className="rounded-[2rem] border border-red-200 bg-white p-8 shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-black/40">
                      NovaDuo
                    </div>

                    <h2 className="mt-2 text-3xl font-semibold">
                      Lokal {selectedHome.id}
                    </h2>
                  </div>

                  <span className="rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700">
                    Sprzedany
                  </span>
                </div>

                <div className="mt-8 rounded-2xl bg-red-50 p-6">
                  <div className="text-lg font-semibold text-red-700">
                    Ten lokal został sprzedany
                  </div>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Dane i karta tego lokalu nie są już dostępne.
                    Wybierz inny lokal na planie inwestycji.
                  </p>
                </div>
              </div>
            ) : (
              /*
                DOSTĘPNY / REZERWACJA
              */
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
                      isReserved(selectedHome)
                        ? "bg-orange-200 text-orange-900"
                        : "bg-[#dfead8] text-[#1f3d2b]"
                    }`}
                  >
                    {selectedHome.status}
                  </span>
                </div>

                <div className="mt-7 space-y-5">
                  {/* POWIERZCHNIA NETTO */}
                  <div>
                    <div className="text-sm text-black/45">
                      Powierzchnia netto
                    </div>

                    <div className="mt-1 text-3xl font-semibold text-[#1f3d2b]">
                      {selectedHome.netArea}
                    </div>
                  </div>

                  {/* TEREN */}
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

                  {/* CENA ZA M2 NETTO */}
                  <div className="flex items-start gap-3">
                    <Ruler className="mt-0.5 h-5 w-5 text-[#1f3d2b]" />

                    <div>
                      <div className="text-sm text-black/45">
                        Cena za 1 m² netto
                      </div>

                      <div className="mt-1 text-xl font-semibold text-[#1f3d2b]">
                        {selectedHome.pricePerNetSquareMeter}
                      </div>

                      {/* CENA ZA M2 UŻYTKOWEJ */}
                      <div className="mt-3 text-xs text-black/45">
                        Cena za 1 m² powierzchni użytkowej
                      </div>

                      <div className="mt-1 text-sm font-medium text-black/60">
                        {selectedHome.pricePerUsableSquareMeter}
                      </div>
                    </div>
                  </div>

                  {/* CENA LOKALU */}
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
                  <button
                    type="button"
                    onClick={() => openHomeCard(selectedHome.id)}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-5 font-medium text-white transition hover:bg-[#152b1e]"
                  >
                    Zobacz układ i pomieszczenia
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

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

      {/* MODAL Z KARTĄ LOKALU */}
      {openCardHome && !isSold(openCardHome) && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 md:p-8"
          onClick={() => setOpenCardId(null)}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* GÓRNA BELKA */}
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 md:px-8">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-[#1f3d2b]/50">
                  NovaDuo
                </div>

                <div className="mt-1 text-xl font-semibold md:text-2xl">
                  Lokal {openCardHome.id} — układ pomieszczeń
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpenCardId(null)}
                aria-label="Zamknij kartę lokalu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f3ec] text-[#1f3d2b] transition hover:bg-[#1f3d2b] hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* KARTA LOKALU */}
            <div className="overflow-auto bg-[#f6f3ec] p-3 md:p-6">
              <img
                src={getCardPath(openCardHome.id)}
                alt={`Karta lokalu ${openCardHome.id} z układem i opisem pomieszczeń`}
                className="mx-auto h-auto max-h-[75vh] max-w-full rounded-xl bg-white object-contain"
              />
            </div>

            {/* DOLNA BELKA */}
            <div className="flex flex-col gap-3 border-t border-black/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <div className="text-sm text-black/55">
                Lokal {openCardHome.id}
                <span className="mx-2">•</span>
                {openCardHome.netArea} netto
              </div>

              <a
                href={getCardPath(openCardHome.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#1f3d2b]/20 px-5 text-sm font-medium text-[#1f3d2b] transition hover:bg-[#1f3d2b] hover:text-white"
              >
                Otwórz kartę w pełnym rozmiarze
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
