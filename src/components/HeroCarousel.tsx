// components/HeroCarousel.tsx
"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Slide = { image: StaticImageData | string; subtitle?: string };

type Props = {
  slides: Slide[];
  interval?: number;
  title?: string;
  fullPage?: boolean;
  headerOffset?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function HeroCarousel({
  slides,
  interval = 6000,
  title,
  fullPage = false,
  headerOffset = 0,
  showDots = true,
  showArrows = true,
  className = "",
  titleClassName,
  subtitleClassName,
}: Props) {
  const [idx, setIdx] = useState(0);
  const hovering = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = slides.length;
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (total <= 1) return;
    if (timer.current) clearInterval(timer.current);
    if (!hovering.current) {
      timer.current = setInterval(next, Math.max(2500, interval));
    }
    return () => timer.current && clearInterval(timer.current);
  }, [interval, next, total, idx]);

  const style = useMemo(() => {
    if (!fullPage) return { minHeight: "520px" };
    return { minHeight: `calc(100dvh - ${headerOffset}px)` };
  }, [fullPage, headerOffset]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    },
    [next, prev]
  );

  const active = slides[idx];

  return (
    <section
      className={`relative isolate w-full overflow-hidden ${className}`}
      style={style}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => {
        hovering.current = true;
        if (timer.current) clearInterval(timer.current);
      }}
      onMouseLeave={() => {
        hovering.current = false;
        if (timer.current) clearInterval(timer.current);
        timer.current = setInterval(next, Math.max(2500, interval));
      }}
      aria-roledescription="carousel"
      aria-label="Hero slideshow"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image src={active.image} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* >>> TEKS ABSOLUTE-CENTER <<< */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center">
        <div className="max-w-6xl">
          {title && (
            <h1
              className={`text-white text-balance tracking-tight
                          text-5xl sm:text-6xl md:text-7xl
                          font-extrabold leading-[1.08]
                          drop-shadow-[0_8px_40px_rgba(0,0,0,.55)]
                          ${titleClassName ?? ""}`}
            >
              {title}
            </h1>
          )}
          {active.subtitle && (
            <p
              className={`mt-5 text-white/95
                          text-2xl md:text-3xl font-semibold
                          drop-shadow-[0_6px_24px_rgba(0,0,0,.55)]
                          ${subtitleClassName ?? ""}`}
            >
              {active.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && total > 1 && (
        <>
          <button
            type="button"
            aria-label="Slide sebelumnya"
            onClick={prev}
            className="group absolute left-4 md:left-6 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/85 hover:bg-white shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-900 group-active:translate-x-[-1px]" fill="currentColor">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Slide berikutnya"
            onClick={next}
            className="group absolute right-4 md:right-6 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/85 hover:bg-white shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-900 group-active:translate-x-[1px]" fill="currentColor">
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ke slide ${i + 1}`}
              aria-current={i === idx}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
