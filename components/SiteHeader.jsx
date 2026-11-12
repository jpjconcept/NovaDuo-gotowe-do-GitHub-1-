"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Inwestycja", href: "/inwestycja" },
  { label: "Lokale", href: "/lokale" },
  { label: "Standard", href: "/standard" },
  { label: "Lokalizacja", href: "/lokalizacja" },
  { label: "Galeria", href: "/galeria" },
  { label: "Finansowanie", href: "/finansowanie" },
  { label: "Dokumenty", href: "/dokumenty" },
  { label: "Ceny i historia cen", href: "/historia-cen" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const contactHref =
    pathname === "/"
      ? "#kontakt-deweloper"
      : "/#kontakt-deweloper";

  const trackEvent = (name, params = {}) => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", name, params);
    }
  };

  const handleNavigation = (label, href, location) => {
    trackEvent("click_navigation", {
      navigation_item: label,
      destination: href,
      location,
    });
  };

  const handleContact = (location) => {
    trackEvent("click_developer_contact", {
      location,
    });
    setMobileOpen(false);
  };

  const isActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 py-4">
          <a
            href="/"
            aria-label="NovaDuo – strona główna"
            onClick={() =>
              handleNavigation("Logo NovaDuo", "/", "header_logo")
            }
            className="shrink-0"
          >
            <img
              src="/images/logo-novaduo.png"
              alt="NovaDuo"
              className="h-20 w-auto md:h-24"
            />
          </a>

          <a
            href={contactHref}
            onClick={() => handleContact("header_desktop")}
            className="hidden shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#152b1e] md:inline-flex"
          >
            Kontakt
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={mobileOpen}
            onClick={() => {
              const nextState = !mobileOpen;
              setMobileOpen(nextState);

              if (nextState) {
                trackEvent("open_mobile_menu", {
                  location: "header",
                });
              }
            }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#1f3d2b] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="hidden items-center justify-center gap-7 border-t border-black/8 py-4 text-sm text-black/65 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() =>
                handleNavigation(item.label, item.href, "header_desktop")
              }
              className={`transition hover:text-[#1f3d2b] ${
                isActive(item.href)
                  ? "font-semibold text-[#1f3d2b]"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/10 bg-[#f6f3ec] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  handleNavigation(
                    item.label,
                    item.href,
                    "header_mobile"
                  );
                  setMobileOpen(false);
                }}
                className={`border-b border-black/8 py-3.5 text-base transition hover:text-[#1f3d2b] ${
                  isActive(item.href)
                    ? "font-semibold text-[#1f3d2b]"
                    : "text-black/70"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href={contactHref}
              onClick={() => handleContact("header_mobile")}
              className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-6 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Kontakt
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Inwestycja", href: "/inwestycja" },
  { label: "Lokale", href: "/lokale" },
  { label: "Standard", href: "/standard" },
  { label: "Lokalizacja", href: "/lokalizacja" },
  { label: "Galeria", href: "/galeria" },
  { label: "Finansowanie", href: "/finansowanie" },
  { label: "Dokumenty", href: "/dokumenty" },
  { label: "Ceny i historia cen", href: "/historia-cen" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const contactHref =
    pathname === "/"
      ? "#kontakt-deweloper"
      : "/#kontakt-deweloper";

  const trackEvent = (name, params = {}) => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", name, params);
    }
  };

  const handleNavigation = (label, href, location) => {
    trackEvent("click_navigation", {
      navigation_item: label,
      destination: href,
      location,
    });
  };

  const handleContact = (location) => {
    trackEvent("click_developer_contact", {
      location,
    });
    setMobileOpen(false);
  };

  const isActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 py-4">
          <a
            href="/"
            aria-label="NovaDuo – strona główna"
            onClick={() =>
              handleNavigation("Logo NovaDuo", "/", "header_logo")
            }
            className="shrink-0"
          >
            <img
              src="/images/logo-novaduo.png"
              alt="NovaDuo"
              className="h-20 w-auto md:h-24"
            />
          </a>

          <a
            href={contactHref}
            onClick={() => handleContact("header_desktop")}
            className="hidden shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#152b1e] md:inline-flex"
          >
            Kontakt
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={mobileOpen}
            onClick={() => {
              const nextState = !mobileOpen;
              setMobileOpen(nextState);

              if (nextState) {
                trackEvent("open_mobile_menu", {
                  location: "header",
                });
              }
            }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#1f3d2b] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="hidden items-center justify-center gap-7 border-t border-black/8 py-4 text-sm text-black/65 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() =>
                handleNavigation(item.label, item.href, "header_desktop")
              }
              className={`transition hover:text-[#1f3d2b] ${
                isActive(item.href)
                  ? "font-semibold text-[#1f3d2b]"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/10 bg-[#f6f3ec] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  handleNavigation(
                    item.label,
                    item.href,
                    "header_mobile"
                  );
                  setMobileOpen(false);
                }}
                className={`border-b border-black/8 py-3.5 text-base transition hover:text-[#1f3d2b] ${
                  isActive(item.href)
                    ? "font-semibold text-[#1f3d2b]"
                    : "text-black/70"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href={contactHref}
              onClick={() => handleContact("header_mobile")}
              className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-[#1f3d2b] px-6 font-medium text-white transition hover:bg-[#152b1e]"
            >
              Kontakt
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}