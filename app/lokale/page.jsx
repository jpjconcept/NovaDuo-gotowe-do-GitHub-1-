"use client";

import React, { useEffect, useMemo, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  Ruler,
  Trees,
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

const HOTSPOTS = [
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

const FALLBACK_UNITS = [
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
];

function formatCurrency(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "—";
  }

  return `${number.toLocaleString("pl-PL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })} zł`;
}

function formatArea(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "—";
  }

  return number.toLocaleString("pl-PL", {
    minimumFractionDigits: Number.isInteger(number) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function formatPricePerSquareMeter(price, area) {
  const numericPrice = Number(price);
  const numericArea = Number(area);

  if (
    !Number.isFinite(numericPrice) ||
    !Number.isFinite(numericArea) ||
    numericArea <= 0
  ) {
    return "—";
  }

  return `${(numericPrice / numericArea).toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} zł/m²`;
}

function getStatusType(status) {
  const normalized = String(status || "").toLowerCase();

  if (normalized.includes("sprzed")) {
    return "sold";
  }

  if (normalized.includes("rezerw")) {
    return "reserved";
  }

  return "available";
}

function getStatusLabel(status) {
  const type = getStatusType(status);

  if (type === "sold") {
    return "Sprzedany";
  }

  if (type === "reserved") {
    return "Rezerwacja";
  }

  return "Dostępny";
}

function buildHome(unit) {
  return {
    id: unit.id,
    totalPrice: Number(unit.total_price),
    netArea: Number(unit.net_area),
    usableArea: Number(unit.usable_area),
    gardenArea: Number(unit.garden_area),
    plotNo: unit.plot_no,
    status: getStatusLabel(unit.status),

    price: formatCurrency(unit.total_price),

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

function getCardPath(id) {
  return `/karty-lokali/lokal-${id.replace("/", "-")}.png`;
}

export default function LokalePage() {
  const fallbackHomes = useMemo(
    () =>
      FALLBACK_UNITS.map(buildHome).sort(
        (first, second) =>
          DISPLAY_ORDER.indexOf(first.id) -
          DISPLAY_ORDER.indexOf(second.id)
      ),
    []
  );

  const [homes, setHomes] = useState(fallbackHomes);

  const [selectedId, setSelectedId] = useState(null);

  const [openCardId, setOpenCardId] = useState(null);

  const selectedHome =
    homes.find((home) => home.id === selectedId) || null;

  const openCardHome =
    homes.find((home) => home.id === openCardId) || null;

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
        .map(buildHome)
        .sort(
          (first, second) =>
            DISPLAY_ORDER.indexOf(first.id) -
            DISPLAY_ORDER.indexOf(second.id)
        );

      setHomes(homesFromDatabase);
    }

    loadHomes();

    return () => {
      active = false;
    };
  }, []);

  const availableForModal = homes.filter(
    (home) => getStatusType(home.status) !== "sold"
  );

  function openHomeCard(id) {
    const home = homes.find((item) => item.id === id);

    if (!home) {
      return;
    }

    if (getStatusType(home.status) === "sold") {
      return;
    }

    setSelectedId(id);
    setOpenCardId(id);
  }

  function closeCard() {
    setOpenCardId(null);
  }

  function moveCard(direction) {
    if (!openCardId || availableForModal.length === 0) {
      return;
    }

    const currentIndex = availableForModal.findIndex(
      (home) => home.id === openCardId
    );

    if (currentIndex < 0) {
      return;
    }

    const nextIndex =
      (currentIndex + direction + availableForModal.length) %
      availableForModal.length;

    const nextHome = availableForModal[nextIndex];

    setOpenCardId(nextHome.id);
    setSelectedId(nextHome.id);
  }

  useEffect(() => {
    if (!openCardId) {
      return;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeCard();
      }

      if (event.key === "ArrowLeft") {
        moveCard(-1);
      }

      if (event.key === "ArrowRight") {
        moveCard(1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openCardId, homes]);

  function getHotspotStyle(home, isSelected) {
    const type = getStatusType(home?.status);

    if (type === "sold") {
      return {
        backgroundColor: isSelected
          ? "rgba(185, 45, 45, 0.60)"
          : "rgba(185, 45, 45, 0.42)",
        borderColor: "#b92d2d",
      };
    }

    if (type === "reserved") {
      return {
        backgroundColor: isSelected
          ? "rgba(225, 132, 28, 0.58)"
          : "rgba(225, 132, 28, 0.34)",
        borderColor: "#e1841c",
      };
    }

    return {
      backgroundColor: isSelected
        ? "rgba(46, 125, 50, 0.52)"
        : "rgba(46, 125, 50, 0.26)",
      borderColor: "#2e7d32",
    };
  }

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      {/* WSPÓLNE MENU */}
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(78,113,76,0.18),transparent_36%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-[#1f3d2b]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#1f3d2b]">
              Dostępne lokale NovaDuo
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Wybierz lokal
              <br />
              <span className="text-[#1f3d2b]">
                na planie inwestycji.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
              Najedź kursorem na wybrany lokal. Zostanie on
              podświetlony, a obok pojawią się jego najważniejsze
              informacje. Na telefonie wystarczy dotknąć
              wybranego lokalu.
            </p>
          </div>

          {/* LEGENDA */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="h-3 w-3 rounded-full bg-[#2e7d32]" />
              Dostępny
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="h-3 w-3 rounded-full bg-[#e1841c]" />
              Rezerwacja
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <span className="h-3 w-3 rounded-full bg-[#b92d2d]" />
              Sprzedany
            </div>
          </div>
        </div>
      </section>

      {/* PLAN + PANEL */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          {/* PLAN */}
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white p-4 shadow-xl md:p-6">
            <div className="relative mx-auto w-full overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/novaduo_rezerwacje_v2.webp"
                alt="Plan usytuowania lokali NovaDuo"
                className="block h-auto w-full"
              />

              {HOTSPOTS.map((hotspot) => {
                const home = homes.find(
                  (item) => item.id === hotspot.id
                );

                if (!home) {
                  return null;
                }

                const type = getStatusType(home.status);
                const sold = type === "sold";
                const selected = selectedId === home.id;

                return (
                  <button
                    key={home.id}
                    type="button"
                    aria-label={`Lokal ${home.id} – ${home.status}`}
                    disabled={sold}
                    onMouseEnter={() =>
                      setSelectedId(home.id)
                    }
                    onFocus={() =>
                      setSelectedId(home.id)
                    }
                    onClick={() => {
                      if (!sold) {
                        openHomeCard(home.id);
                      }
                    }}
                    style={{
                      position: "absolute",
                      left: hotspot.left,
                      top: hotspot.top,
                      width: hotspot.width,
                      height: hotspot.height,
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderRadius: "6px",
                      transition:
                        "background-color 180ms ease, border-color 180ms ease, opacity 180ms ease",
                      cursor: sold
                        ? "not-allowed"
                        : "pointer",
                      ...getHotspotStyle(home, selected),
                    }}
                    className={`focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] focus:ring-offset-2 ${
                      sold ? "opacity-85" : ""
                    }`}
                  />
                );
              })}
            </div>

            <p className="mt-5 text-center text-sm leading-6 text-black/45">
              Kliknij dostępny lub zarezerwowany lokal,
              aby zobaczyć jego kartę i układ pomieszczeń.
            </p>
          </div>

          {/* PANEL */}
          <div className="lg:sticky lg:top-40">
            {!selectedHome ? (
              <div className="rounded-[2rem] bg-[#1f3d2b] p-8 text-white shadow-xl">
                <MapPin className="h-8 w-8 text-[#e7c46a]" />

                <h2 className="mt-6 text-3xl font-semibold">
                  Wybierz lokal
                </h2>

                <p className="mt-4 leading-7 text-white/70">
                  Najedź kursorem na lokal na planie lub dotknij go
                  na telefonie, aby zobaczyć jego powierzchnię,
                  cenę, działkę i aktualny status.
                </p>
              </div>
            ) : getStatusType(selectedHome.status) === "sold" ? (
              <div className="rounded-[2rem] border border-red-200 bg-white p-8 shadow-xl">
                <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800">
                  SPRZEDANY
                </div>

                <h2 className="mt-6 text-3xl font-semibold">
                  Lokal {selectedHome.id}
                </h2>

                <p className="mt-4 leading-7 text-black/60">
                  Ten lokal został sprzedany. Szczegółowe dane,
                  cena oraz karta lokalu nie są już dostępne.
                </p>

                <a
                  href="/#kontakt-deweloper"
                  className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1f3d2b] px-6 font-medium text-white transition hover:bg-[#152b1e]"
                >
                  Zapytaj o inne lokale
                </a>
              </div>
            ) : (
              <div className="rounded-[2rem] bg-white p-8 shadow-xl">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.22em] text-black/40">
                      NovaDuo
                    </div>

                    <h2 className="mt-2 text-4xl font-semibold">
                      Lokal {selectedHome.id}
                    </h2>
                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      getStatusType(selectedHome.status) ===
                      "reserved"
                        ? "bg-orange-100 text-orange-900"
                        : "bg-[#dfead8] text-[#1f3d2b]"
                    }`}
                  >
                    {selectedHome.status}
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  <div>
                    <div className="text-sm text-black/45">
                      Powierzchnia netto
                    </div>

                    <div className="mt-1 text-3xl font-semibold text-[#1f3d2b]">
                      {formatArea(selectedHome.netArea)} m²
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="rounded-[1.25rem] bg-[#f6f3ec] p-5">
                      <Trees className="h-5 w-5 text-[#1f3d2b]" />

                      <div className="mt-3 text-xs uppercase tracking-[0.15em] text-black/40">
                        Działka do wyłącznego użytkowania
                      </div>

                      <div className="mt-2 text-xl font-semibold">
                        {formatArea(selectedHome.gardenArea)} m²
                      </div>
                    </div>

                    <div className="rounded-[1.25rem] bg-[#f6f3ec] p-5">
                      <MapPin className="h-5 w-5 text-[#1f3d2b]" />

                      <div className="mt-3 text-xs uppercase tracking-[0.15em] text-black/40">
                        Działka ewidencyjna
                      </div>

                      <div className="mt-2 text-xl font-semibold">
                        {selectedHome.plotNo}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-5">
                    <div className="text-sm text-black/45">
                      Cena lokalu
                    </div>

                    <div className="mt-1 text-3xl font-semibold text-[#1f3d2b]">
                      {selectedHome.price}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-start justify-between gap-4 border-b border-black/5 pb-3">
                      <span className="text-sm text-black/50">
                        Cena za 1 m² netto
                      </span>

                      <span className="text-right font-semibold">
                        {
                          selectedHome.pricePerNetSquareMeter
                        }
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 border-b border-black/5 pb-3">
                      <span className="text-sm text-black/50">
                        Powierzchnia użytkowa
                      </span>

                      <span className="text-right font-semibold">
                        {formatArea(selectedHome.usableArea)} m²
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <span className="text-sm text-black/50">
                        Cena za 1 m² powierzchni użytkowej
                      </span>

                      <span className="text-right font-semibold">
                        {
                          selectedHome.pricePerUsableSquareMeter
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      openHomeCard(selectedHome.id)
                    }
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1f3d2b] px-6 font-medium text-white transition hover:bg-[#152b1e]"
                  >
                    Zobacz układ i pomieszczenia
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                  <a
                    href={`/historia-cen#lokal-${selectedHome.id.replace(
                      "/",
                      "-"
                    )}`}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[#1f3d2b]/20 px-6 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
                  >
                    Historia ceny
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DODATKOWA INFORMACJA */}
      <section className="bg-[#e4e6d7] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white/75 p-7">
              <Ruler className="h-7 w-7 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">
                Około 154 m² netto
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                Duża, funkcjonalna powierzchnia lokalu
                z pełnowartościowym piętrem bez skosów.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/75 p-7">
              <Building2 className="h-7 w-7 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">
                Garaż w bryle
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                Każdy lokal posiada własny garaż
                z segmentową bramą i napędem.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/75 p-7">
              <CheckCircle2 className="h-7 w-7 text-[#1f3d2b]" />

              <h3 className="mt-5 text-xl font-semibold">
                Aktualne dane
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                Ceny i statusy lokali pobierane są
                z aktualnej bazy danych inwestycji NovaDuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#1f3d2b] px-7 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                NovaDuo
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
                Masz pytanie o konkretny lokal?
              </h2>

              <p className="mt-4 max-w-2xl text-white/65">
                Skontaktuj się bezpośrednio z JPJ Concept
                i umów prezentację inwestycji w Pogroszewie.
              </p>
            </div>

            <a
              href="/#kontakt-deweloper"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
            >
              Kontakt z deweloperem
            </a>
          </div>
        </div>
      </section>

      {/* MODAL KARTY LOKALU */}
      {openCardHome && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeCard();
            }
          }}
        >
          <div className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            {/* GÓRNY PASEK */}
            <div className="flex items-center justify-between gap-4 border-b border-black/10 px-5 py-4">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-black/40">
                  Karta lokalu
                </div>

                <div className="mt-1 text-xl font-semibold">
                  Lokal {openCardHome.id}
                </div>
              </div>

              <button
                type="button"
                onClick={closeCard}
                aria-label="Zamknij kartę lokalu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f3ec] text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* OBRAZ */}
            <div className="relative min-h-0 flex-1 overflow-auto bg-[#f3f2ed] p-4 md:p-6">
              <img
                src={getCardPath(openCardHome.id)}
                alt={`Karta lokalu ${openCardHome.id}`}
                className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
              />

              {availableForModal.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => moveCard(-1)}
                    aria-label="Poprzedni lokal"
                    className="fixed left-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#1f3d2b] shadow-xl transition hover:bg-white md:left-8"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => moveCard(1)}
                    aria-label="Następny lokal"
                    className="fixed right-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#1f3d2b] shadow-xl transition hover:bg-white md:right-8"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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
