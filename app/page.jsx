"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  Gift,
  Home,
  LayoutGrid,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  ThermometerSun,
  Trees,
  Wind,
  X,
} from "lucide-react";

export default function Page() {
  const [showDeveloperContact, setShowDeveloperContact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    "/images/postprodukcja_0000_Scene-1_upscale01.png",
    "/images/postprodukcja_0001_Scene-7_upscale01.png",
    "/images/postprodukcja_0002_Scene-2_upscale01.png",
    "/images/postprodukcja_0003_Scene-3_upscale01.png",
    "/images/postprodukcja_0004_Scene-4_upscale01.png",
    "/images/postprodukcja_0005_Scene-5_upscale01.png",
    "/images/postprodukcja_0006_Scene-6_upscale01.png",
    "/images/postprodukcja_0007_Scene-8_upscale01.png",
    "/images/postprodukcja_0008_Scene-9_upscale01.png",
    "/images/postprodukcja_0009_Scene-10_upscale01.png",
    "/images/postprodukcja_0010_Scene-11_upscale01.png",

    "/images/postprodukcja_0003_Scene-27_upscale01.webp",
    "/images/postprodukcja_0004_Scene-26_upscale01.webp",
    "/images/postprodukcja_0005_Scene-25_upscale01.webp",
    "/images/postprodukcja_0006_Scene-24_upscale01.webp",
    "/images/postprodukcja_0007_Scene-23_upscale01.webp",
    "/images/postprodukcja_0008_Scene-22_upscale01.webp",
    "/images/postprodukcja_0009_Scene-21_upscale01.webp",
    "/images/postprodukcja_0010_Scene-20_upscale01.webp",
    "/images/postprodukcja_0011_Scene-19_upscale01.webp",
    "/images/postprodukcja_0012_Scene-18_upscale01.webp",
    "/images/postprodukcja_0013_Scene-17_upscale01.webp",
    "/images/postprodukcja_0014_Scene-16_upscale01.webp",
    "/images/postprodukcja_0015_Scene-15_upscale01.webp",
    "/images/postprodukcja_0016_Scene-14_upscale01.webp",
    "/images/postprodukcja_0017_Scene-13_upscale01.webp",
    "/images/postprodukcja_0018_Scene-12_upscale01.webp",
    "/images/postprodukcja_0019_Scene-11_upscale01.webp",
    "/images/postprodukcja_0020_Scene-10_upscale01.webp",

    "/images/01.jpg",
    "/images/02.jpg",
    "/images/03.jpg",
    "/images/04.jpg",
    "/images/05.jpg",
    "/images/06.jpg",
    "/images/07.jpg",
    "/images/08.jpg",
    "/images/09.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const trackEvent = (name, params = {}) => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", name, params);
    }
  };

  const handleMobileNavigation = (item) => {
    setMobileMenuOpen(false);

    trackEvent("click_navigation", {
      menu_item: item,
      device_menu: "mobile",
    });
  };

  const handleDeveloperContactClick = (location) => {
    trackEvent("click_developer_contact", {
      location,
    });

    setMobileMenuOpen(false);
  };

  const advantages = [
    {
      icon: Ruler,
      title: "Około 154 m² powierzchni netto",
      text: "Duża i funkcjonalna przestrzeń domu, pokazana w sposób czytelny i przejrzysty.",
    },
    {
      icon: Home,
      title: "Bez ograniczających skosów",
      text: "Piętro jest pełnowartościową kondygnacją. Możesz swobodnie ustawić meble i wykorzystać przestrzeń przy każdej ścianie.",
    },
    {
      icon: CheckCircle2,
      title: "Całość w standardzie deweloperskim",
      text: "Nie kupujesz powierzchni, którą po odbiorze trzeba dopiero adaptować i wykańczać na własny koszt.",
    },
    {
      icon: LayoutGrid,
      title: "Praktyczny układ pomieszczeń",
      text: "Układ zaprojektowany pod codzienne życie rodziny, z czytelnym podziałem stref i wygodną komunikacją.",
    },
    {
      icon: Building2,
      title: "Nowoczesna architektura",
      text: "Prosta bryła, płaski dach i współczesna elewacja nadają NovaDuo nowoczesny charakter.",
    },
    {
      icon: Car,
      title: "Garaż w bryle każdego lokalu",
      text: "Pełnoprawny garaż z segmentową bramą, napędem i sterowaniem pilotem.",
    },
  ];

  const standardItems = [
    {
      icon: ThermometerSun,
      title: "Pompa ciepła w cenie",
      text: "Każdy lokal otrzymuje pompę ciepła w standardzie. Bez dodatkowej dopłaty za urządzenie.",
    },
    {
      icon: Wind,
      title: "Rekuperator w cenie",
      text: "Rekuperator również znajduje się w cenie lokalu. Klient nie musi kupować go dodatkowo.",
    },
    {
      icon: ThermometerSun,
      title: "Ogrzewanie podłogowe",
      text: "Komfortowe ogrzewanie podłogowe współpracujące z pompą ciepła.",
    },
    {
      icon: Wind,
      title: "Przygotowanie pod 3 klimatyzatory",
      text: "Instalacja przygotowana pod późniejszy montaż trzech jednostek klimatyzacji.",
    },
    {
      icon: ShieldCheck,
      title: "Przygotowanie pod system bezpieczeństwa",
      text: "Instalacja pod alarm, okablowanie pod kamery zewnętrzne oraz indywidualny wideofon przy bramie.",
    },
    {
      icon: Trees,
      title: "Zamknięte, kameralne osiedle",
      text: "Tylko 8 lokali, brama wjazdowa sterowana pilotem oraz własne oświetlenie części wspólnej.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      {/* GÓRNY PASEK PROMOCJI - ZOSTAJE */}
      <a
        href="/promocja"
        onClick={() =>
          trackEvent("click_promotion", {
            location: "top_banner",
          })
        }
        className="block bg-[#10251b] px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-[#152b1e]"
      >
        <span className="font-semibold text-[#e7c46a]">
          🎁 PROMOCJA DO 31.12.2026
        </span>

        <span className="mx-2 hidden text-white/40 sm:inline">
          •
        </span>

        <span className="block sm:inline">
          Ford Puma z automatem w ramach zakupu NovaDuo
        </span>

        <span className="ml-2 font-semibold text-[#e7c46a]">
          SPRAWDŹ →
        </span>
      </a>

      {/* MENU */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between gap-3 py-3">
            <a href="/" className="shrink-0">
              <img
                src="/images/logo-novaduo.png"
                alt="NovaDuo"
                className="h-14 w-auto sm:h-16 md:h-24"
              />
            </a>

            {/* MOBILE */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-label={
                  mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"
                }
                onClick={() => {
                  setMobileMenuOpen((current) => !current);

                  if (!mobileMenuOpen) {
                    trackEvent("open_mobile_menu");
                  }
                }}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#1f3d2b]/20 bg-white px-4 text-sm font-semibold text-[#1f3d2b]"
              >
                {mobileMenuOpen ? (
                  <>
                    <X className="h-4 w-4" />
                    Zamknij
                  </>
                ) : (
                  <>
                    <Menu className="h-4 w-4" />
                    Menu
                  </>
                )}
              </button>

              <a
                href="#kontakt-deweloper"
                onClick={() =>
                  handleDeveloperContactClick("mobile_navigation")
                }
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-4 text-xs font-medium text-white sm:text-sm"
              >
                Kontakt
              </a>
            </div>

            {/* DESKTOP KONTAKT */}
            <a
              href="#kontakt-deweloper"
              onClick={() =>
                handleDeveloperContactClick("top_navigation")
              }
              className="hidden h-11 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-6 text-sm font-medium text-white transition hover:bg-[#152b1e] md:inline-flex"
            >
              Kontakt
            </a>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden border-t border-black/5 md:block">
            <div className="flex items-center justify-center gap-5 py-3 text-sm text-black/70">
              <a
                href="/inwestycja"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Inwestycja
              </a>

              <a
                href="/lokale"
                className="whitespace-nowrap font-semibold text-[#1f3d2b]"
              >
                Lokale
              </a>

              <a
                href="/standard"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Standard
              </a>

              <a
                href="/lokalizacja"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Lokalizacja
              </a>

              <a
                href="/galeria"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Galeria
              </a>

              <a
                href="/finansowanie"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Finansowanie
              </a>

              <a
                href="/dokumenty"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Dokumenty
              </a>

              <a
                href="/historia-cen"
                className="whitespace-nowrap transition hover:text-[#1f3d2b]"
              >
                Ceny i historia cen
              </a>

              {/* WYRÓŻNIONA PROMOCJA */}
              <a
                href="/promocja"
                onClick={() =>
                  trackEvent("click_promotion", {
                    location: "desktop_navigation",
                  })
                }
                className="inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-full bg-[#e7c46a] px-4 font-semibold text-[#10251b] shadow-sm transition hover:bg-[#f0d681]"
              >
                <Gift className="h-4 w-4" />
                Promocja
              </a>
            </div>
          </div>

          {/* MENU MOBILE */}
          {mobileMenuOpen && (
            <div className="border-t border-black/10 pb-4 pt-3 md:hidden">
              <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-xl">
                <a
                  href="/promocja"
                  onClick={() => {
                    setMobileMenuOpen(false);

                    trackEvent("click_promotion", {
                      location: "mobile_navigation",
                    });
                  }}
                  className="flex items-center justify-between border-b border-[#d7b358]/30 bg-[#f7edce] px-5 py-4 font-semibold text-[#7a5916]"
                >
                  <span className="flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    Promocja
                  </span>

                  <ArrowRight className="h-4 w-4" />
                </a>

                {[
                  ["Inwestycja", "/inwestycja", "inwestycja"],
                  ["Lokale", "/lokale", "lokale"],
                  ["Standard", "/standard", "standard"],
                  ["Lokalizacja", "/lokalizacja", "lokalizacja"],
                  ["Galeria", "/galeria", "galeria"],
                  ["Finansowanie", "/finansowanie", "finansowanie"],
                  ["Dokumenty", "/dokumenty", "dokumenty"],
                  [
                    "Ceny i historia cen",
                    "/historia-cen",
                    "historia_cen",
                  ],
                ].map(([label, href, eventName], index, array) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() =>
                      handleMobileNavigation(eventName)
                    }
                    className={`flex items-center justify-between px-5 py-4 font-medium ${
                      index < array.length - 1
                        ? "border-b border-black/5"
                        : ""
                    } ${
                      label === "Lokale"
                        ? "bg-[#e4e6d7]/50 font-semibold text-[#1f3d2b]"
                        : "text-[#1f241f]"
                    }`}
                  >
                    {label}

                    <ArrowRight className="h-4 w-4 text-black/35" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO NOVADUO - TERAZ OD RAZU PO MENU */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(78,113,76,0.20),transparent_38%),linear-gradient(120deg,#f6f3ec,#e7eadc)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-[#1f3d2b]/20 bg-white/65 px-4 py-2 text-sm font-medium text-[#1f3d2b]">
              NovaDuo • tylko 8 lokali • Pogroszew pod Warszawą
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Więcej domu.
              <br />
              Więcej działki.
              <br />
              <span className="text-[#1f3d2b]">
                Więcej w standardzie.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-[#1f3d2b] md:text-2xl">
              Około 154 m² powierzchni netto.
              <br />
              <strong>Bez skosów.</strong>
              <br />
              Bez niewykończonego poddasza do późniejszej adaptacji.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
              Garaż w bryle, działka do wyłącznego użytkowania
              od <strong>255 do 424 m²</strong> oraz
              <strong>
                {" "}
                pompa ciepła i rekuperator w cenie lokalu
              </strong>
              .
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/lokale"
                onClick={() =>
                  trackEvent("click_units", {
                    location: "main_hero",
                  })
                }
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Sprawdź dostępne lokale
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/standard"
                onClick={() =>
                  trackEvent("click_standard", {
                    location: "main_hero",
                  })
                }
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 bg-white/65 px-7 font-medium text-[#1f3d2b] transition hover:bg-white"
              >
                Zobacz pełny standard
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm">
                ok. 154 m² netto
              </span>

              <span className="rounded-full bg-[#1f3d2b] px-5 py-2 text-sm font-semibold text-white shadow-sm">
                BEZ SKOSÓW
              </span>

              <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm">
                działka 255–424 m²
              </span>

              <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm">
                garaż w bryle
              </span>
            </div>
          </div>

          {/* AUTOMATYCZNY SLIDER */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-black/5 shadow-2xl">
              <img
                key={heroImages[heroIndex]}
                src={heroImages[heroIndex]}
                alt={`NovaDuo – wizualizacja inwestycji ${
                  heroIndex + 1
                }`}
                className="h-[430px] w-full object-cover md:h-[560px]"
              />
            </div>

            <div className="absolute -bottom-6 left-6 right-6 rounded-[1.5rem] bg-[#1f3d2b]/95 p-5 text-white shadow-xl backdrop-blur md:left-10 md:right-auto md:max-w-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                Jedna z głównych przewag NovaDuo
              </div>

              <div className="mt-2 text-2xl font-semibold">
                Pełne piętro bez skosów
              </div>

              <div className="mt-2 text-sm leading-6 text-white/70">
                Więcej ustawnej i rzeczywiście użytecznej przestrzeni.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PRZEWAGI */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Ruler className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              ok. 154 m²
            </div>

            <div className="mt-2 text-sm leading-6 text-black/55">
              Powierzchni netto lokalu.
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1f3d2b] p-7 text-white shadow-lg">
            <Home className="h-7 w-7 text-[#e7c46a]" />

            <div className="mt-5 text-3xl font-semibold">
              BEZ SKOSÓW
            </div>

            <div className="mt-2 text-sm leading-6 text-white/70">
              Pełnowartościowa przestrzeń na całym piętrze.
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Trees className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              255–424 m²
            </div>

            <div className="mt-2 text-sm leading-6 text-black/55">
              Działki do wyłącznego użytkowania.
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <Car className="h-7 w-7 text-[#1f3d2b]" />

            <div className="mt-5 text-3xl font-semibold">
              Garaż
            </div>

            <div className="mt-2 text-sm leading-6 text-black/55">
              W bryle każdego lokalu, z bramą i napędem.
            </div>
          </div>
        </div>
      </section>

      {/* BEZ SKOSÓW */}
      <section className="bg-[#10251b] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-[#e7c46a]/30 bg-[#e7c46a]/10 px-4 py-2 text-sm font-semibold text-[#e7c46a]">
              PEŁNOWARTOŚCIOWE METRY
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              154 m² to nie tylko liczba.
              <br />
              <span className="text-[#e7c46a]">
                Liczy się, jak możesz je wykorzystać.
              </span>
            </h2>

            <div className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
              BEZ SKOSÓW.
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              W NovaDuo piętro nie jest poddaszem ograniczonym skosami.
              Otrzymujesz pełnowartościową kondygnację z pionowymi
              ścianami, którą możesz normalnie umeblować i wykorzystać.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Łóżko, szafa, biurko czy zabudowa mogą stanąć tam,
              gdzie są naprawdę potrzebne — a nie tylko tam,
              gdzie pozwala na to wysokość pod skosem.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
              <div className="text-xl font-semibold text-[#e7c46a]">
                Bez dodatkowej adaptacji
              </div>

              <p className="mt-3 leading-7 text-white/70">
                Cała oferowana przestrzeń jest wykonana w standardzie
                deweloperskim. Nie kupujesz niewykończonego poddasza,
                które po odbiorze trzeba dopiero adaptować
                i wykańczać na własny koszt.
              </p>
            </div>

            <a
              href="/lokale"
              onClick={() =>
                trackEvent("click_units", {
                  location: "no_slopes_section",
                })
              }
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#e7c46a] px-7 font-semibold text-[#10251b] transition hover:bg-[#f0d681]"
            >
              Zobacz układy lokali
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white/5 p-3 shadow-2xl">
            <img
              src="/images/postprodukcja_0005_Scene-25_upscale01.webp"
              alt="NovaDuo – pełnowartościowe piętro bez skosów"
              className="h-[440px] w-full rounded-[1.5rem] object-cover md:h-[580px]"
            />
          </div>
        </div>
      </section>

      {/* DLACZEGO NOVADUO */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Dlaczego NovaDuo?
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Nie porównuj tylko ceny.
              <br />
              <span className="text-[#1f3d2b]">
                Porównaj, co naprawdę dostajesz.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/65">
              Sam metraż nie mówi wszystkiego. Znaczenie ma to,
              czy przestrzeń jest naprawdę funkcjonalna,
              wykończona w standardzie deweloperskim
              i jakie wyposażenie otrzymujesz w cenie.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4e6d7] text-[#1f3d2b]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STANDARD */}
      <section className="border-y border-black/5 bg-white/70 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Standard NovaDuo
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Ważne elementy są już w cenie.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
              Pompa ciepła i rekuperator nie są dodatkowymi opcjami.
              Otrzymujesz je razem z lokalem — bez dodatkowej dopłaty
              za urządzenia.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {standardItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-black/5 bg-[#f6f3ec] p-7"
                >
                  <Icon className="h-7 w-7 text-[#1f3d2b]" />

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <a
            href="/standard"
            onClick={() =>
              trackEvent("click_standard", {
                location: "standard_section",
              })
            }
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full border border-[#1f3d2b]/20 px-7 font-medium text-[#1f3d2b] transition hover:bg-[#1f3d2b] hover:text-white"
          >
            Zobacz pełny standard techniczny
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* DZIAŁKI */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.5rem] bg-[#e4e6d7] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
                Więcej własnej przestrzeni
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Działki od 255 do 424 m².
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
                Do każdego lokalu przypisana jest działka
                do wyłącznego użytkowania. Jej powierzchnia zależy
                od wybranego lokalu.
              </p>

              <p className="mt-3 max-w-3xl leading-7 text-black/60">
                Na interaktywnym planie możesz sprawdzić dokładne
                położenie, powierzchnię działki, cenę
                i aktualny status każdego lokalu.
              </p>
            </div>

            <a
              href="/lokale"
              onClick={() =>
                trackEvent("click_units", {
                  location: "plots_section",
                })
              }
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Zobacz plan i lokale
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* LOKALIZACJA */}
      <section className="bg-[#e4e6d7] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <MapPin className="h-8 w-8 text-[#1f3d2b]" />

            <div className="mt-5 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/55">
              Pogroszew
            </div>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Blisko Warszawy.
              <br />
              Z dala od dużego osiedla.
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              NovaDuo powstaje przy ul. Nowowiejskiej 58
              w Pogroszewie, na granicy gmin Ożarów Mazowiecki
              i Stare Babice.
            </p>

            <a
              href="/lokalizacja"
              onClick={() =>
                trackEvent("click_location", {
                  location: "location_section",
                })
              }
              className="mt-7 inline-flex items-center font-semibold text-[#1f3d2b]"
            >
              Zobacz lokalizację
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/images/postprodukcja_0006_Scene-24_upscale01.webp"
              alt="NovaDuo w Pogroszewie"
              className="h-[380px] w-full object-cover md:h-[460px]"
            />
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold">
            NovaDuo – nowoczesne domy i segmenty pod Warszawą
          </h2>

          <p className="mt-4 leading-7 text-black/60">
            NovaDuo to kameralna inwestycja mieszkaniowa
            w Pogroszewie, w gminie Ożarów Mazowiecki,
            w bezpośrednim sąsiedztwie gminy Stare Babice.
            Inwestycja obejmuje 8 lokali z garażami,
            działkami do wyłącznego użytkowania i nowoczesnym
            standardem technicznym.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="/segmenty-pod-warszawa"
              className="font-medium text-[#1f3d2b] underline underline-offset-4"
            >
              Segmenty pod Warszawą
            </a>

            <a
              href="/domy-pod-warszawa"
              className="font-medium text-[#1f3d2b] underline underline-offset-4"
            >
              Domy pod Warszawą
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#1f3d2b] px-7 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                NovaDuo
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
                Zanim porównasz cenę za metr, sprawdź jakie metry
                naprawdę kupujesz.
              </h2>

              <p className="mt-4 max-w-2xl text-white/65">
                Bez skosów. Bez niewykończonego poddasza.
                Z garażem, działką oraz pompą ciepła
                i rekuperatorem w cenie.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/lokale"
                onClick={() =>
                  trackEvent("click_units", {
                    location: "bottom_cta",
                  })
                }
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
              >
                Dostępne lokale
              </a>

              <a
                href="#kontakt-deweloper"
                onClick={() =>
                  handleDeveloperContactClick("bottom_cta")
                }
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 font-medium text-white transition hover:bg-white/10"
              >
                Kontakt z deweloperem
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#f6f3ec] py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
          <div
            id="kontakt-deweloper"
            className="scroll-mt-32"
          >
            <div className="text-sm uppercase tracking-[0.22em] text-[#1f3d2b]/50">
              Deweloper
            </div>

            <div className="mt-2 text-xl font-semibold text-[#1f241f]">
              JPJ Concept Sp. z o.o.
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-black/55">
              Bezpośredni kontakt z deweloperem inwestycji NovaDuo.
            </p>

            {!showDeveloperContact ? (
              <button
                type="button"
                onClick={() => {
                  setShowDeveloperContact(true);

                  trackEvent("reveal_contact", {
                    contact_type: "developer",
                    location: "footer",
                  });
                }}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
              >
                Pokaż dane kontaktowe
              </button>
            ) : (
              <div className="mt-6 max-w-md rounded-[1.5rem] border border-[#1f3d2b]/10 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-[0.18em] text-black/45">
                  Telefon
                </div>

                <a
                  href="tel:+48600397399"
                  onClick={() =>
                    trackEvent("click_phone", {
                      contact_type: "developer",
                      location: "footer",
                    })
                  }
                  className="mt-2 flex w-fit items-center gap-3 text-xl font-semibold text-[#1f3d2b] transition hover:opacity-65"
                >
                  <Phone className="h-5 w-5" />
                  600 397 399
                </a>

                <div className="mt-5 text-xs uppercase tracking-[0.18em] text-black/45">
                  E-mail
                </div>

                <a
                  href="mailto:kontakt@jpjconcept.pl"
                  onClick={() =>
                    trackEvent("click_email", {
                      contact_type: "developer",
                      location: "footer",
                    })
                  }
                  className="mt-2 flex w-fit items-center gap-3 text-[#1f3d2b] transition hover:opacity-65"
                >
                  <Mail className="h-5 w-5" />
                  kontakt@jpjconcept.pl
                </a>
              </div>
            )}

            <div className="mt-6 text-sm leading-6 text-black/55">
              ul. Nowowiejska 58A, Pogroszew
              <br />
              05-850 Ożarów Mazowiecki
            </div>

            <div className="mt-4 text-xs leading-5 text-black/45">
              NIP: 1182300374
              <br />
              KRS: 0001156346
              <br />
              REGON: 540927078
            </div>
          </div>

          <div className="md:text-right">
            <div className="text-sm uppercase tracking-[0.22em] text-[#1f3d2b]/50">
              NovaDuo
            </div>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
              <a
                href="/inwestycja"
                className="hover:text-[#1f3d2b]"
              >
                Inwestycja
              </a>

              <a
                href="/lokale"
                className="hover:text-[#1f3d2b]"
              >
                Lokale
              </a>

              <a
                href="/standard"
                className="hover:text-[#1f3d2b]"
              >
                Standard
              </a>

              <a
                href="/lokalizacja"
                className="hover:text-[#1f3d2b]"
              >
                Lokalizacja
              </a>

              <a
                href="/galeria"
                className="hover:text-[#1f3d2b]"
              >
                Galeria
              </a>

              <a
                href="/finansowanie"
                className="hover:text-[#1f3d2b]"
              >
                Finansowanie
              </a>

              <a
                href="/dokumenty"
                className="hover:text-[#1f3d2b]"
              >
                Dokumenty
              </a>

              <a
                href="/historia-cen"
                className="hover:text-[#1f3d2b]"
              >
                Historia cen
              </a>

              <a
                href="/promocja"
                onClick={() =>
                  trackEvent("click_promotion", {
                    location: "footer",
                  })
                }
                className="font-semibold text-[#b07f24]"
              >
                Promocja
              </a>
            </div>

            <div className="mt-8 text-sm text-black/45">
              © 2026 NovaDuo | JPJ Concept Sp. z o.o.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
