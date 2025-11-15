"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
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
        <Link href={href} onClick={onClick} className={`relative transition hover:opacity-85 ${active ? "text-brand-lime" : "opacity-90"}`} aria-current={active ? "page" : undefined}>
            {label}
            {active && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-brand-lime" />}
        </Link>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openMore, setOpenMore] = useState(false);

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
    const moreRef = useRef<HTMLDivElement | null>(null);

    return (
        <header className={`sticky top-0 z-50 w-full text-white transition-shadow ${scrolled ? "shadow-soft" : ""} bg-brand-navy/95 backdrop-blur`}>
            <div className="container-app flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 font-semibold">
                    {/* ganti ke /logo.svg jika tersedia */}
                    <Image
                        src="/images/logo-MKnows.jpg"
                        alt="M-Knows Consulting"
                        width={150}
                        height={150}
                        className="object-contain"
                        onError={(e) => {
                            // fallback huruf jika logo tidak ada
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                    />
                    {/* <span className="text-sm font-bold">MK</span> */}
                    {/* <span className="opacity-90">M-Knows Consulting</span> */}
                </Link>

                {/* Menu desktop */}
                <nav className="hidden items-center gap-15 md:flex">
                    <NavItem href="/" label="Home" />
                    <NavItem href="/bootcamp" label="New Training" />
                    <NavItem href="/consulting-service" label="Our Services" />

                    {/* ✅ DROPDOWN MORE */}
                    <div ref={moreRef} className="relative">
                        <button type="button" className="relative transition hover:opacity-85 opacity-90 flex items-center gap-1" onClick={() => setOpenMore((v) => !v)}>
                            More
                            <span className="text-xs">▾</span>
                        </button>

                        {openMore && (
                            <div className="absolute right-0 mt-2 w-40 rounded-md bg-white text-sm text-slate-800 shadow-lg py-2 z-50">
                                <Link href="/consulting-service" className="block px-3 py-2 hover:bg-slate-100" onClick={() => setOpenMore(false)}>
                                    Consulting Service
                                </Link>
                                <Link href="/clients-page" className="block px-3 py-2 hover:bg-slate-100" onClick={() => setOpenMore(false)}>
                                    Our Clients
                                </Link>
                                <Link href="/contact" className="block px-3 py-2 hover:bg-slate-100" onClick={() => setOpenMore(false)}>
                                    Contact Us
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Toggle mobile */}
                <button onClick={() => setOpen((v) => !v)} className="rounded-md p-2 hover:bg-white/10 md:hidden" aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-menu">
                    {open ? <IconX /> : <IconMenu />}
                </button>
            </div>

            {/* Menu mobile */}
            {open && (
                <div ref={moreRef} className="relative">
                    <button type="button" className="relative transition hover:opacity-85 opacity-90 flex items-center gap-1" onClick={() => setOpenMore((v) => !v)}>
                        More
                        <span className="text-xs">▾</span>
                    </button>

                    {openMore && (
                        <div className="absolute right-0 mt-2 w-40 rounded-md bg-white text-sm text-slate-800 shadow-lg py-2 z-50">
                            <Link href="/consulting-service" className="block px-3 py-2 hover:bg-slate-100" onClick={() => setOpenMore(false)}>
                                Consulting Service
                            </Link>
                            <Link href="/clients-page" className="block px-3 py-2 hover:bg-slate-100" onClick={() => setOpenMore(false)}>
                                Our Clients
                            </Link>
                            <Link href="/contact" className="block px-3 py-2 hover:bg-slate-100" onClick={() => setOpenMore(false)}>
                                Contact Us
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}
