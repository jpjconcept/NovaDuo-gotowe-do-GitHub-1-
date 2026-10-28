"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-124M70T3LJ";
const CONSENT_KEY = "novaduo-analytics-consent";

function updateGoogleConsent(isGranted) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  window.gtag("consent", "update", {
    analytics_storage: isGranted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function sendAnalyticsEvent(eventName, parameters = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    page_path: window.location.pathname,
    ...parameters,
  });
}

function getDocumentInfo(href) {
  try {
    const url = new URL(href, window.location.origin);
    const pathname = url.pathname;
    const lowerPath = pathname.toLowerCase();

    const supportedExtensions = [".pdf", ".png", ".csv"];

    const extension = supportedExtensions.find((item) =>
      lowerPath.endsWith(item)
    );

    if (!extension) {
      return null;
    }

    const fileName = decodeURIComponent(
      pathname.split("/").pop() || pathname
    );

    let category = "inny";

    if (lowerPath.includes("prospekt")) {
      category = "prospekt";
    } else if (lowerPath.includes("/karty-lokali/")) {
      category = "karta_lokalu";
    } else if (lowerPath.endsWith(".csv")) {
      category = "dane_csv";
    }

    return {
      documentName: fileName,
      documentType: extension.replace(".", ""),
      documentCategory: category,
      documentPath: pathname,
    };
  } catch {
    return null;
  }
}

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState(undefined);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "granted") {
      setConsent("granted");
      updateGoogleConsent(true);
      return;
    }

    if (savedConsent === "denied") {
      setConsent("denied");
      updateGoogleConsent(false);
      return;
    }

    setConsent(null);
    setShowPanel(true);
  }, []);

  useEffect(() => {
    if (consent !== "granted") return;

    const handleClick = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href) return;

      // Kliknięcie telefonu
      if (href.startsWith("tel:")) {
        sendAnalyticsEvent("click_phone", {
          contact_method: "phone",
        });

        return;
      }

      // Kliknięcie e-mail
      if (href.startsWith("mailto:")) {
        sendAnalyticsEvent("click_email", {
          contact_method: "email",
        });

        return;
      }

      // Otwarcie dokumentu
      const documentInfo = getDocumentInfo(href);

      if (documentInfo) {
        sendAnalyticsEvent("open_document", {
          document_name: documentInfo.documentName,
          document_type: documentInfo.documentType,
          document_category: documentInfo.documentCategory,
          document_path: documentInfo.documentPath,
        });

        return;
      }

      // Kliknięcie prowadzące do strony Lokale
      try {
        const url = new URL(href, window.location.origin);

        if (url.pathname === "/lokale" || url.pathname === "/lokale/") {
          sendAnalyticsEvent("click_lokale", {
            destination: "lokale",
          });
        }
      } catch {
        // Nie robimy nic dla nieprawidłowego adresu.
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [consent]);

  const acceptAnalytics = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateGoogleConsent(true);
    setConsent("granted");
    setShowPanel(false);
  };

  const rejectAnalytics = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    updateGoogleConsent(false);
    setConsent("denied");
    setShowPanel(false);
  };

  const openPrivacySettings = () => {
    setShowPanel(true);
  };

  return (
    <>
      <Script id="ga-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          window.gtag = window.gtag || function() {
            window.dataLayer.push(arguments);
          };

          window.gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          window.gtag = window.gtag || function() {
            window.dataLayer.push(arguments);
          };

          window.gtag('js', new Date());

          window.gtag('config', '${GA_ID}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>

      {showPanel && (
        <div
          style={{
            position: "fixed",
            left: "10px",
            bottom: "10px",
            zIndex: 99999,

            width: "calc(100% - 20px)",
            maxWidth: "280px",
            boxSizing: "border-box",

            padding: "8px 10px",

            background: "rgba(255,255,255,0.97)",
            color: "#111111",

            borderRadius: "8px",
            border: "1px solid #e5e5e5",

            boxShadow: "0 3px 12px rgba(0,0,0,0.12)",

            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: "700",
              marginBottom: "3px",
            }}
          >
            Prywatność i analityka
          </div>

          <div
            style={{
              fontSize: "10px",
              lineHeight: "1.3",
              color: "#555555",
              marginBottom: "7px",
            }}
          >
            Opcjonalna analityka pomaga nam ulepszać stronę.
          </div>

          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "nowrap",
            }}
          >
            <button
              type="button"
              onClick={acceptAnalytics}
              style={{
                cursor: "pointer",
                border: "none",
                borderRadius: "5px",
                padding: "6px 9px",
                background: "#111111",
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Akceptuję
            </button>

            <button
              type="button"
              onClick={rejectAnalytics}
              style={{
                cursor: "pointer",
                border: "1px solid #bbbbbb",
                borderRadius: "5px",
                padding: "6px 9px",
                background: "#ffffff",
                color: "#111111",
                fontSize: "10px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Tylko niezbędne
            </button>
          </div>
        </div>
      )}

      {consent !== undefined && !showPanel && (
        <button
          type="button"
          onClick={openPrivacySettings}
          aria-label="Ustawienia prywatności"
          style={{
            position: "fixed",
            left: "7px",
            bottom: "7px",
            zIndex: 9999,

            cursor: "pointer",

            border: "1px solid #dddddd",
            borderRadius: "16px",

            padding: "3px 7px",

            background: "rgba(255,255,255,0.9)",
            color: "#777777",

            fontSize: "8px",
            fontFamily: "Arial, sans-serif",

            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          Prywatność
        </button>
      )}
    </>
  );
}
