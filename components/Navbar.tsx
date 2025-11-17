"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

/* Ikon hamburger / close */
function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Item menu dengan state aktif */
function NavItem({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const isRoot = href === "/";
  const active = isRoot ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative transition hover:opacity-85 ${active ? "text-brand-lime" : "opacity-90"}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
      {active && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-brand-lime" />}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // shadow saat scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // tutup menu pada ESC
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onKey]);

  // util untuk close saat klik item mobile
  const closeMobile = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full text-white transition-shadow ${
        scrolled ? "shadow-soft" : ""
      } bg-brand-navy/95 backdrop-blur`}
    >
      <div className="container-app flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 font-semibold">
          {/* Pakai logo file jika ada; jika tidak, tetap tampilkan inisial */}
          <div className="w-9 h-9 overflow-hidden rounded-full bg-white/10 grid place-items-center">
            {/* ganti ke /logo.svg jika tersedia */}
            <Image
              src="/logo.svg"
              alt="M-Knows Consulting"
              width={36}
              height={36}
              className="object-contain"
              onError={(e) => {
                // fallback huruf jika logo tidak ada
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="text-sm font-bold">MK</span>
          </div>
          <span className="opacity-90">M-Knows Consulting</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavItem href="/" label="Home" />
          <NavItem href="/bootcamp" label="New Training" />
          <NavItem href="/lms" label="LMS" /> {/* ← tambahan */}
          <NavItem href="/services" label="Our Services" />
          <NavItem href="/more" label="More" />
        </nav>

        {/* Toggle mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 md:hidden">
          <div className="container-app flex flex-col gap-3 py-3">
            <NavItem href="/" label="Home" onClick={closeMobile} />
            <NavItem href="/bootcamp" label="New Training" onClick={closeMobile} />
            <NavItem href="/lms" label="LMS" onClick={closeMobile} />
            <NavItem href="/services" label="Our Services" onClick={closeMobile} />
            <NavItem href="/more" label="More" onClick={closeMobile} />
          </div>
        </div>
      )}
    </header>
  );
}
