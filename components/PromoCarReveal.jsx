"use client";

import { useEffect, useState } from "react";

const sparkles = [
  { top: "13%", left: "24%", delay: "0ms", size: 26 },
  { top: "7%", left: "52%", delay: "140ms", size: 20 },
  { top: "18%", left: "77%", delay: "280ms", size: 30 },
  { top: "39%", left: "10%", delay: "420ms", size: 18 },
  { top: "44%", left: "88%", delay: "560ms", size: 24 },
  { top: "66%", left: "17%", delay: "700ms", size: 28 },
  { top: "72%", left: "80%", delay: "840ms", size: 18 },
  { top: "84%", left: "51%", delay: "980ms", size: 24 },
  { top: "31%", left: "49%", delay: "1120ms", size: 16 },
];

export default function PromoCarReveal() {
  const [revealed, setRevealed] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setRevealed(true);
      setShowSparkles(true);
    }, 350);

    const sparklesTimer = setTimeout(() => {
      setShowSparkles(false);
    }, 2600);

    const settleTimer = setTimeout(() => {
      setSettled(true);
    }, 2800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(sparklesTimer);
      clearTimeout(settleTimer);
    };
  }, []);

  return (
    <div className="relative mx-auto flex min-h-[390px] w-full max-w-[760px] items-center justify-center overflow-visible md:min-h-[520px]">

      {/* Delikatna poświata podczas pojawiania się auta */}
      <div
        className={`pointer-events-none absolute inset-8 rounded-[45%]
        bg-[radial-gradient(circle,rgba(185,218,255,0.50)_0%,rgba(185,218,255,0.20)_42%,transparent_72%)]
        blur-2xl transition-all ease-out
        ${
          !revealed
            ? "scale-75 opacity-0 duration-[1800ms]"
            : settled
            ? "scale-100 opacity-0 duration-700"
            : "scale-100 opacity-100 duration-[1800ms]"
        }`}
      />

      {/* Gwiazdki — tylko podczas pojawiania się */}
      {showSparkles && (
        <div
          className="pointer-events-none absolute inset-0 z-20"
          aria-hidden="true"
        >
          {sparkles.map((sparkle, index) => (
            <span
              key={index}
              className="promo-spark absolute text-[#ffd97a]"
              style={{
                top: sparkle.top,
                left: sparkle.left,
                fontSize: `${sparkle.size}px`,
                animationDelay: sparkle.delay,
              }}
            >
              ✦
            </span>
          ))}
        </div>
      )}

      {/* Samochód */}
      <img
        src="/images/promocja-auto.png"
        alt="Ford Puma z czerwoną kokardą i kluczykami – promocja NovaDuo"
        className={`relative z-10 w-full object-contain
        drop-shadow-[0_32px_38px_rgba(0,0,0,0.22)]
        transition-[opacity,transform,filter]
        duration-[2200ms] ease-out
        ${
          revealed
            ? "scale-100 opacity-100 blur-0"
            : "scale-90 opacity-0 blur-xl"
        }`}
      />

      <style jsx>{`
        .promo-spark {
          opacity: 0;
          transform: scale(0.2) rotate(0deg);
          text-shadow:
            0 0 8px rgba(255, 232, 166, 1),
            0 0 18px rgba(255, 205, 95, 0.95),
            0 0 30px rgba(255, 255, 255, 0.8);
          animation: promoSparkle 1500ms ease-out forwards;
        }

        @keyframes promoSparkle {
          0% {
            opacity: 0;
            transform: scale(0.15) rotate(0deg);
          }

          20% {
            opacity: 1;
            transform: scale(1.4) rotate(20deg);
          }

          55% {
            opacity: 0.95;
            transform: scale(0.9) rotate(45deg);
          }

          100% {
            opacity: 0;
            transform: scale(0.2) rotate(90deg);
          }
        }
      `}</style>
    </div>
  );
}
