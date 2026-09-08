"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-124M70T3LJ";

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem(
      "novaduo-analytics-consent"
    );

    if (savedConsent === "granted" || savedConsent === "denied") {
      setConsent(savedConsent);
    }
  }, []);

  const acceptAnalytics = () => {
    localStorage.setItem("novaduo-analytics-consent", "granted");
    setConsent("granted");
  };

  const rejectAnalytics = () => {
    localStorage.setItem("novaduo-analytics-consent", "denied");
    setConsent("denied");
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div
          style={{
            position: "fixed",
            left: "20px",
            right: "20px",
            bottom: "20px",
            zIndex: 99999,
            maxWidth: "620px",
            margin: "0 auto",
            padding: "20px",
            background: "#ffffff",
            color: "#111111",
            borderRadius: "12px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.20)",
            border: "1px solid #dddddd",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              fontSize: "17px",
              fontWeight: "700",
              marginBottom: "8px",
            }}
          >
            Analityka strony
          </div>

          <div
            style={{
              fontSize: "14px",
              lineHeight: "1.5",
              marginBottom: "16px",
            }}
          >
            Chcemy korzystać z Google Analytics, aby sprawdzać, jak
            użytkownicy korzystają ze strony NovaDuo i ulepszać jej
            działanie. Analityka zostanie uruchomiona tylko po Twojej
            zgodzie.
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={acceptAnalytics}
              style={{
                cursor: "pointer",
                border: "none",
                borderRadius: "8px",
                padding: "11px 18px",
                background: "#111111",
                color: "#ffffff",
                fontWeight: "700",
              }}
            >
              Akceptuję analitykę
            </button>

            <button
              type="button"
              onClick={rejectAnalytics}
              style={{
                cursor: "pointer",
                border: "1px solid #999999",
                borderRadius: "8px",
                padding: "11px 18px",
                background: "#ffffff",
                color: "#111111",
                fontWeight: "700",
              }}
            >
              Nie zgadzam się
            </button>
          </div>
        </div>
      )}
    </>
  );
}
