"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
} from "lucide-react";

const galleryImages = [
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

export default function GaleriaPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage =
    selectedIndex !== null ? galleryImages[selectedIndex] : null;

  function closeGallery() {
    setSelectedIndex(null);
  }

  function previousImage() {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? galleryImages.length - 1
        : current - 1;
    });
  }

  function nextImage() {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === galleryImages.length - 1
        ? 0
        : current + 1;
    });
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

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
            <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
              <Images className="h-5 w-5" />
              Galeria NovaDuo
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Zobacz NovaDuo z bliska
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65">
              Poznaj architekturę, bryłę budynków i charakter inwestycji.
              Kliknij dowolne zdjęcie, aby otworzyć je w dużym formacie
              i przeglądać całą galerię.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                index === 0
                  ? "sm:col-span-2 lg:col-span-2"
                  : ""
              }`}
            >
              <img
                src={image}
                alt={`NovaDuo – wizualizacja ${index + 1}`}
                className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                  index === 0
                    ? "h-[320px] md:h-[480px]"
                    : "h-[280px] md:h-[330px]"
                }`}
                loading={index < 4 ? "eager" : "lazy"}
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

              <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#1f3d2b] opacity-0 shadow-sm transition group-hover:opacity-100">
                Powiększ
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* INFORMACJA */}
      <section className="border-y border-black/5 bg-white/70 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Zobacz również dostępne lokale
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/60">
            Na interaktywnym planie możesz sprawdzić dostępność,
            powierzchnię, cenę i układ pomieszczeń każdego lokalu.
          </p>

          <a
            href="/lokale"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 font-medium text-white transition hover:bg-[#152b1e]"
          >
            Przejdź do lokali
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
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
              Chcesz zobaczyć inwestycję na miejscu?
            </h2>

            <p className="mt-4 max-w-2xl text-white/65">
              Skontaktuj się z biurem sprzedaży i umów prezentację NovaDuo.
            </p>
          </div>

          <a
            href="/biuro-sprzedazy"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 font-medium text-[#1f3d2b] transition hover:bg-[#e4e6d7]"
          >
            Biuro sprzedaży
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

      {/* POWIĘKSZONE ZDJĘCIE */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={closeGallery}
        >
          {/* ZAMKNIJ */}
          <button
            type="button"
            onClick={closeGallery}
            aria-label="Zamknij galerię"
            className="absolute right-5 top-5 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            <X className="h-7 w-7" />
          </button>

          {/* POPRZEDNIE */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white hover:text-black md:left-6"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* ZDJĘCIE */}
          <div
            className="flex max-h-[92vh] max-w-[92vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={`NovaDuo – zdjęcie ${
                selectedIndex !== null ? selectedIndex + 1 : ""
              }`}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
            />
          </div>

          {/* NASTĘPNE */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Następne zdjęcie"
            className="absolute right-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white hover:text-black md:right-6"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* NUMER */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur">
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
