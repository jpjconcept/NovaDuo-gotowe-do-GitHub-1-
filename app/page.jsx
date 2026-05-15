
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, MapPin, FileText, ShieldCheck, Phone, ArrowRight, Trees, Car, Ruler, Building2, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
const heroImages = [
  "/images/postprodukcja_0003_Scene-27_upscale01.webp",
  "/images/postprodukcja_0004_Scene-26_upscale01.webp",
  "/images/postprodukcja_0005_Scene-25_upscale01.webp",
  "/images/postprodukcja_0006_Scene-24_upscale01.webp",

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
  "/images/11.jpg"
];
const [heroIndex, setHeroIndex] = useState(0);
const [selectedImage, setSelectedImage] = useState(null);

useEffect(() => {
  const interval = setInterval(() => {
    setHeroIndex((current) => (current + 1) % heroImages.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  const homes = [
    { id: "58/1", price: "1 279 000 PLN", netArea: "154,57 m²", usableArea: "118,48 m²", gardenArea: "424 m²", plot: "dz. 24/11", status: "Dostępny" },
    { id: "58/3", price: "1 179 000 PLN", netArea: "154,57 m²", usableArea: "118,48 m²", gardenArea: "272 m²", plot: "dz. 24/11", status: "Rezerwacja" },
    { id: "58/5", price: "1 179 000 PLN", netArea: "154,57 m²", usableArea: "118,48 m²", gardenArea: "272 m²", plot: "dz. 24/12", status: "Dostępny" },
    { id: "58/7", price: "1 279 000 PLN", netArea: "154,57 m²", usableArea: "118,48 m²", gardenArea: "405 m²", plot: "dz. 24/12", status: "Rezerwacja" },
    { id: "58/2", price: "1 279 000 PLN", netArea: "154,57 m²", usableArea: "118,48 m²", gardenArea: "408 m²", plot: "dz. 24/8", status: "Dostępny" },
    { id: "58/4", price: "1 179 000 PLN", netArea: "154,57 m²", usableArea: "118,48 m²", gardenArea: "255 m²", plot: "dz. 24/8", status: "Dostępny" },
    { id: "58/6", price: "1 179 000 PLN", netArea: "154,57 m²", usableArea: "118,48 m²", gardenArea: "255 m²", plot: "dz. 24/9", status: "Dostępny" },
    { id: "58/8", price: "1 279 000 PLN", netArea: "154,57 m²", usableArea: "118,48 m²", gardenArea: "345 m²", plot: "dz. 24/9", status: "Dostępny" }
  ];

  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1f241f]">
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div><div className="text-xl font-semibold tracking-tight">NovaDuo</div><div className="text-xs uppercase tracking-[0.28em] text-black/50">JPJ Concept Sp. z o.o.</div></div>
          <div className="hidden gap-8 text-sm text-black/70 md:flex"><a href="#inwestycja">Inwestycja</a><a href="#lokalizacja">Lokalizacja</a><a href="#lokale">Lokale</a><a href="#dokumenty">Dokumenty</a><a href="#galeria">Galeria</a><a href="#kontakt">Kontakt</a></div>
          <a href="#kontakt" className="rounded-full bg-[#1f3d2b] px-6 py-3 text-white hover:bg-[#152b1e]">Zapytaj o lokal</a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(78,113,76,0.22),transparent_38%),linear-gradient(120deg,#f6f3ec,#e8eadb)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex rounded-full border border-[#1f3d2b]/20 bg-white/60 px-4 py-2 text-sm text-[#1f3d2b] shadow-sm">Kameralna inwestycja przy ul. Nowowiejskiej 58 w Pogroszewie</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">Domy dwulokalowe w spokojnej, zielonej okolicy.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">NovaDuo to nowoczesna, kameralna inwestycja obejmująca funkcjonalne lokale mieszkalne z garażem, ogrodem i wygodnym układem pomieszczeń.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#lokale" className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-7 text-base text-white hover:bg-[#152b1e]">Sprawdź dostępne lokale <ArrowRight className="ml-2 h-4 w-4" /></a>
              <a href="#dokumenty" className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-white/50 px-7 text-base">Pobierz prospekt</a>
            </div>
          </motion.div>
         <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
  <div className="grid gap-4">
    <div className="overflow-hidden rounded-[2rem] shadow-2xl">
      <img
        src={heroImages[heroIndex]}
        alt="NovaDuo"
        className="h-[420px] w-full object-cover"
      />
    </div>

    <div className="grid grid-cols-3 gap-4">
      <img
        src="/images/postprodukcja_0004_Scene-26_upscale01.webp"
        alt="NovaDuo"
        className="h-40 w-full rounded-3xl object-cover"
      />
      <img
        src="/images/postprodukcja_0005_Scene-25_upscale01.webp"
        alt="NovaDuo"
        className="h-40 w-full rounded-3xl object-cover"
      />
      <img
        src="/images/postprodukcja_0006_Scene-24_upscale01.webp"
        alt="NovaDuo"
        className="h-40 w-full rounded-3xl object-cover"
      />
    </div>
  </div>
</motion.div>
        </div>
      </section>

      <section id="inwestycja" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-4">{[[Home,"4 budynki","zabudowa jednorodzinna dwulokalowa"],[Ruler,"118,48 m²","powierzchnia użytkowa lokalu"],[Car,"Garaż","w bryle każdego lokalu"],[Trees,"Działka","prywatna przestrzeń przy lokalu"]].map(([Icon,title,text])=><Card key={title} className="rounded-3xl border-black/5 bg-white/70 shadow-sm"><CardContent className="p-7"><Icon className="mb-5 h-7 w-7 text-[#1f3d2b]" /><div className="text-2xl font-semibold">{title}</div><p className="mt-2 text-sm leading-6 text-black/55">{text}</p></CardContent></Card>)}</div>
      </section>

      <section className="bg-[#1f3d2b] py-20 text-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2"><div><div className="mb-4 text-sm uppercase tracking-[0.28em] text-white/50">O inwestycji</div><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Przestrzeń dla rodzin, blisko natury i miasta.</h2></div><div className="text-lg leading-8 text-white/75">Inwestycja położona jest przy ul. Nowowiejskiej 58 w Pogroszewie, na działkach ewidencyjnych 24/8, 24/9, 24/11 i 24/12. Projekt zakłada kameralną zabudowę z wygodnym układem lokali, garażami oraz indywidualnymi przestrzeniami zielonymi.</div></div></section>

      <section id="lokalizacja" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center"><div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">Lokalizacja</div><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Zamieszkaj w spokojnej części Pogroszewa</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/60">Inwestycja NovaDuo położona jest przy ul. Nowowiejskiej 58 w Pogroszewie.</p></div>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><Card className="rounded-[2rem] border-black/5 bg-[#1f3d2b] text-white shadow-xl"><CardContent className="space-y-6 p-10"><div><div className="text-sm uppercase tracking-[0.25em] text-white/50">Najważniejsze atuty</div><h3 className="mt-3 text-3xl font-semibold">Świetna lokalizacja pod Warszawą</h3></div><div className="space-y-5 text-white/80"><div><div className="font-semibold text-white">Dogodny dojazd do Warszawy</div><div className="text-sm">szybki dostęp do głównych tras komunikacyjnych</div></div><div><div className="font-semibold text-white">Blisko Ożarowa Mazowieckiego</div><div className="text-sm">szkoły, sklepy i infrastruktura miejska</div></div><div><div className="font-semibold text-white">Kameralne otoczenie</div><div className="text-sm">zabudowa jednorodzinna i tereny zielone</div></div></div></CardContent></Card><div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl"><iframe src="https://www.google.com/maps?q=Nowowiejska+58,+Pogroszew&output=embed" width="100%" height="520" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div>
      </section>
<section id="galeria" className="mx-auto max-w-7xl px-6 py-20">
  <div className="mb-14 text-center">
    <div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">
      Inspiracje wnętrz
    </div>

    <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
      Przykładowe wizualizacje wykończenia
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/60">
      Nowoczesne i eleganckie wnętrza przygotowane jako inspiracja dla przyszłych mieszkańców NovaDuo.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-3">
    <img
  src="/images/01.jpg"
  onClick={() => setSelectedImage("/images/01.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>

   <img
  src="/images/02.jpg"
  onClick={() => setSelectedImage("/images/02.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>

    <img
  src="/images/03.jpg"
  onClick={() => setSelectedImage("/images/03.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>

    <img
  src="/images/04.jpg"
  onClick={() => setSelectedImage("/images/04.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>

    <img
  src="/images/05.jpg"
  onClick={() => setSelectedImage("/images/05.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>

   <img
  src="/images/06.jpg"
  onClick={() => setSelectedImage("/images/06.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>
<img
  src="/images/07.jpg"
  onClick={() => setSelectedImage("/images/07.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>
<img
  src="/images/08.jpg"
  onClick={() => setSelectedImage("/images/08.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>
<img
  src="/images/09.jpg"
  onClick={() => setSelectedImage("/images/09.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>
<img
  src="/images/10.jpg"
  onClick={() => setSelectedImage("/images/10.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>
<img
  src="/images/11.jpg"
  onClick={() => setSelectedImage("/images/11.jpg")}
  className="h-80 w-full rounded-[2rem] object-cover shadow-xl cursor-pointer hover:scale-[1.02] transition"
/>  </div>
</section>
      <section id="lokale" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">Oferta</div><h2 className="text-4xl font-semibold tracking-tight">Dostępne lokale</h2></div><p className="max-w-xl text-black/60">Aktualne ceny, statusy sprzedaży, powierzchnie lokali oraz ogrody do wyłącznego użytkowania.</p></div>
<div className="mb-12 overflow-hidden rounded-[2rem] bg-white shadow-2xl">
  <img
    src="/images/usytuowanie-lokali-novaduo.webp"
    alt="Usytuowanie lokali NovaDuo"
    className="w-full object-cover"
  />
</div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{homes.map((home)=><Card key={home.id} className="rounded-3xl border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><CardContent className="p-7"><div className="mb-5 flex items-center justify-between"><div className="text-3xl font-semibold">Lokal {home.id}</div><span className={`rounded-full px-3 py-1 text-xs font-medium ${home.status === "Rezerwacja" ? "bg-orange-200 text-orange-900" : "bg-[#dfead8] text-[#1f3d2b]"}`}>{home.status}</span></div><div className="space-y-3 text-sm text-black/60"><div className="flex items-center gap-2"><Ruler className="h-4 w-4" /> {home.usableArea} użytkowej</div><div className="flex items-center gap-2"><Building2 className="h-4 w-4" /> {home.netArea} netto</div><div className="flex items-center gap-2"><Trees className="h-4 w-4" /> Działka: {home.gardenArea}</div><div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {home.plot}</div><div className="pt-2 text-lg font-semibold text-[#1f3d2b]">{home.price}</div></div><a
  href={`/karty-lokali/lokal-${home.id.replace("/", "-")}.png`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-black/15 px-4 py-3 font-medium transition hover:bg-[#1f3d2b] hover:text-white"
>
  Pobierz kartę lokalu
</a></CardContent></Card>)}</div>
      </section>

      <section id="dokumenty" className="mx-auto max-w-7xl px-6 pb-20">
  <Card className="rounded-[2rem] border-black/5 bg-white shadow-sm">
    <CardContent className="grid gap-8 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
      <div>
        <FileText className="mb-5 h-9 w-9 text-[#1f3d2b]" />
        <h2 className="text-3xl font-semibold">
          Dokumenty i informacje wymagane prawem
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {homes.map((home) => (
          <a
            key={home.id}
            href={`/karty-lokali/lokal-${home.id.replace("/", "-")}.png`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-black/10 p-5 transition hover:bg-black hover:text-white"
          >
            Lokal {home.id} — karta lokalu
          </a>
        ))}
      </div>
    </CardContent>
  </Card>
</section>

      <section id="kontakt" className="bg-[#e4e6d7] py-20"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2"><div><div className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3d2b]/60">Kontakt</div><h2 className="text-4xl font-semibold tracking-tight">Zapytaj o lokal w inwestycji NovaDuo.</h2><div className="mt-8 space-y-3 text-black/65"><p>JPJ Concept Sp. z o.o.</p><p>ul. Nowowiejska 58A, Pogroszew</p><p className="flex items-center gap-2"><Phone className="h-4 w-4" /> JPJConcept: 600 397 399</p>
<p>E-mail inwestora: kontakt@jpjconcept.pl</p>
<p>Agent nieruchomości Anna Bieńka: 509 123 619</p>
<p>E-mail biura sprzedaży: info@bienka-nieruchomosci.pl</p></div></div><Card className="rounded-[2rem] border-white/70 bg-white/80 shadow-sm">
  <form action="https://formspree.io/f/mdabrvqe" method="POST">
    <CardContent className="space-y-4 p-8">
      <input
        name="name"
        className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none"
        placeholder="Imię i nazwisko"
      />

      <input
        name="contact"
        className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none"
        placeholder="Telefon / e-mail"
      />

      <textarea
        name="message"
        className="min-h-32 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none"
        placeholder="Wiadomość"
      />

      <div className="space-y-4 text-xs leading-5 text-black/55">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="rodo"
            required
            className="mt-1 h-4 w-4"
          />

          <span>
            Wyrażam zgodę na kontakt telefoniczny oraz mailowy w celu
            przedstawienia informacji dotyczących inwestycji NovaDuo.
          </span>
        </label>

        <p>
          Administratorem danych osobowych jest JPJ Concept Sp. z o.o.
          Dane będą przetwarzane wyłącznie w celu kontaktu dotyczącym
          inwestycji NovaDuo. Podanie danych jest dobrowolne.
        </p>
      </div>

      <Button
        type="submit"
        className="h-12 w-full rounded-full bg-[#1f3d2b] px-5 text-white hover:bg-[#152b1e]"
      >
        Wyślij zapytanie
      </Button>
    </CardContent>
  </form>
</Card></div></section>
{selectedImage && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6">
    
    <button
      onClick={() => setSelectedImage(null)}
      className="absolute right-6 top-6 text-white"
    >
      <X className="h-10 w-10" />
    </button>

    <img
      src={selectedImage}
      className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain"
    />
  </div>
)}
    </main>
  );
}
