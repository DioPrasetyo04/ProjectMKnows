"use client";

import { useEffect, useRef } from "react";

/** Spotlight/glow yang mengikuti kursor di seluruh halaman.
 *  - Tidak mengganggu klik (pointer-events-none)
 *  - Disembunyikan di mobile (hidden md:block)
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
      el.style.opacity = "1";
    };
    const onLeave = () => { el.style.opacity = "0"; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="
        hidden md:block fixed inset-0 z-60
        pointer-events-none transition-opacity duration-300 opacity-0
      "
      style={{
        background: `
          radial-gradient(140px at var(--x) var(--y), rgba(185,244,67,0.22), transparent 60%),
          radial-gradient(280px at var(--x) var(--y), rgba(70,151,206,0.14), transparent 70%)
        `,
      }}
    />
  );
}