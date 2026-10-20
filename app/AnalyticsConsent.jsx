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
      {/* Domyślny stan zgód Google */}
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

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* Konfiguracja GA4 */}
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

      {/* Panel zgody */}
      {showPanel && (
        <div
          style={{
            position: "fixed",
            left: "12px",
            bottom: "12px",
            zIndex: 99999,

            width: "calc(100% - 24px)",
            maxWidth: "350px",

            padding: "11px 12px",

            background: "rgba(255,255,255,0.97)",
            color: "#111111",

            borderRadius: "9px",
            border: "1px solid #e3e3e3",

            boxShadow: "0 4px 18px rgba(0,0,0,0.13)",

            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: "700",
              marginBottom: "4px",
            }}
          >
            Prywatność i analityka
          </div>

          <div
            style={{
              fontSize: "11px",
              lineHeight: "1.4",
              color: "#555555",
              marginBottom: "9px",
            }}
          >
            Używamy opcjonalnej analityki, aby ulepszać stronę. Bez zgody
            strona działa normalnie.
          </div>

          <div
            style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={acceptAnalytics}
              style={{
                cursor: "pointer",
                border: "none",
                borderRadius: "6px",
                padding: "7px 11px",
                background: "#111111",
                color: "#ffffff",
                fontSize: "11px",
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
                borderRadius: "6px",
                padding: "7px 11px",
                background: "#ffffff",
                color: "#111111",
                fontSize: "11px",
                fontWeight: "700",
              }}
            >
              Tylko niezbędne
            </button>
          </div>
        </div>
      )}

      {/* Mały przycisk do ponownego otwarcia ustawień */}
      {consent !== undefined && !showPanel && (
        <button
          type="button"
          onClick={openPrivacySettings}
          aria-label="Ustawienia prywatności"
          style={{
            position: "fixed",
            left: "8px",
            bottom: "8px",
            zIndex: 9999,

            cursor: "pointer",

            border: "1px solid #dddddd",
            borderRadius: "18px",

            padding: "4px 8px",

            background: "rgba(255,255,255,0.88)",
            color: "#777777",

            fontSize: "9px",
            fontFamily: "Arial, sans-serif",

            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          Prywatność
        </button>
      )}
    </>
  );
}
