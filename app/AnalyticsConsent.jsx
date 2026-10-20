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

    // Nie używamy zgody analitycznej do reklam Google.
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
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
      {/* 1. Domyślnie pomiar bez zgody jest ograniczony */}
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

      {/* 2. Google Analytics ładuje się od razu */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* 3. Konfiguracja GA4 */}
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

      {/* Mały, nieblokujący panel zgody */}
      {showPanel && (
        <div
          style={{
            position: "fixed",
            left: "16px",
            right: "16px",
            bottom: "16px",
            zIndex: 99999,
            width: "calc(100% - 32px)",
            maxWidth: "460px",
            padding: "14px 16px",
            background: "#ffffff",
            color: "#111111",
            borderRadius: "10px",
            boxShadow: "0 6px 24px rgba(0,0,0,0.16)",
            border: "1px solid #e5e5e5",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: "700",
              marginBottom: "5px",
            }}
          >
            Prywatność i analityka
          </div>

          <div
            style={{
              fontSize: "12px",
              lineHeight: "1.45",
              color: "#444444",
              marginBottom: "11px",
            }}
          >
            Za Twoją zgodą używamy Google Analytics, aby ulepszać stronę
            NovaDuo. Bez zgody strona działa normalnie, a pomiar pozostaje
            ograniczony i nie zapisuje cookies analitycznych.
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={acceptAnalytics}
              style={{
                cursor: "pointer",
                border: "none",
                borderRadius: "7px",
                padding: "9px 14px",
                background: "#111111",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: "700",
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
                borderRadius: "7px",
                padding: "9px 14px",
                background: "#ffffff",
                color: "#111111",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              Tylko niezbędne
            </button>
          </div>
        </div>
      )}

      {/* Po dokonaniu wyboru zostaje tylko dyskretny przycisk */}
      {consent !== undefined && !showPanel && (
        <button
          type="button"
          onClick={openPrivacySettings}
          aria-label="Ustawienia prywatności"
          style={{
            position: "fixed",
            left: "10px",
            bottom: "10px",
            zIndex: 9999,
            cursor: "pointer",
            border: "1px solid #dddddd",
            borderRadius: "20px",
            padding: "5px 9px",
            background: "rgba(255,255,255,0.92)",
            color: "#666666",
            fontSize: "10px",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          Prywatność
        </button>
      )}
    </>
  );
}
