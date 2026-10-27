"use client";

import React, { useState } from "react";
import { ArrowRight, Gift, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trackEvent = (name, params = {}) => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", name, params);
    }
  };

  const menuItems = [
    {
      label: "Inwestycja",
      href: "/inwestycja",
    },
    {
      label: "Lokale",
      href: "/lokale",
    },
    {
      label: "Standard",
      href: "/standard",
    },
    {
      label: "Lokalizacja",
      href: "/lokalizacja",
    },
    {
      label: "Galeria",
      href: "/galeria",
    },
    {
      label: "Finansowanie",
      href: "/finansowanie",
    },
    {
      label: "Dokumenty",
      href: "/dokumenty",
    },
    {
      label: "Ceny i historia cen",
      href: "/historia-cen",
    },
  ];

  const contactHref =
    pathname === "/"
      ? "#kontakt-deweloper"
      : "/#kontakt-deweloper";

  const handleNavigation = (item) => {
    setMobileMenuOpen(false);

    trackEvent("click_navigation", {
      menu_item: item,
      location: "site_header",
    });
  };

  const handleContact = () => {
    setMobileMenuOpen(false);

    trackEvent("click_developer_contact", {
      location: "site_header",
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* GÓRNY WIERSZ */}
        <div className="flex items-center justify-between gap-3 py-3">
          <a href="/" className="shrink-0">
            <img
              src="/images/logo-novaduo.png"
              alt="NovaDuo"
              className="h-14 w-auto sm:h-16 md:h-24"
            />
          </a>

          {/* TELEFON */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen
                  ? "Zamknij menu"
                  : "Otwórz menu"
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
              href={contactHref}
              onClick={handleContact}
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-4 text-xs font-medium text-white transition hover:bg-[#152b1e] sm:text-sm"
            >
              Kontakt
            </a>
          </div>

          {/* KOMPUTER */}
          <a
            href={contactHref}
            onClick={handleContact}
            className="hidden h-11 shrink-0 items-center justify-center rounded-full bg-[#1f3d2b] px-6 text-sm font-medium text-white transition hover:bg-[#152b1e] md:inline-flex"
          >
            Kontakt
          </a>
        </div>

        {/* MENU KOMPUTER */}
        <div className="hidden border-t border-black/5 md:block">
          <div className="flex items-center justify-center gap-5 py-3 text-sm text-black/70">
            {menuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    handleNavigation(item.label)
                  }
                  className={`whitespace-nowrap transition ${
                    active
                      ? "font-semibold text-[#1f3d2b]"
                      : "hover:text-[#1f3d2b]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

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

        {/* MENU TELEFON */}
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

              {menuItems.map((item, index) => {
                const active = pathname === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() =>
                      handleNavigation(item.label)
                    }
                    className={`flex items-center justify-between px-5 py-4 font-medium ${
                      index < menuItems.length - 1
                        ? "border-b border-black/5"
                        : ""
                    } ${
                      active
                        ? "bg-[#e4e6d7]/60 font-semibold text-[#1f3d2b]"
                        : "text-[#1f241f]"
                    }`}
                  >
                    {item.label}

                    <ArrowRight className="h-4 w-4 text-black/35" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
