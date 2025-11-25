// OurClients.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ClientCategory } from "@/app/types/ourClient";
import { primaryCategories } from "./constant";
import Link from "next/link";
// import type { ClientCategory } from "./types";
// import { primaryCategories, moreCategories } from "./clients.data";

function ClientCard({ title, logos }: ClientCategory) {
    return (
        <div className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm">
            {/* pita judul kiri-atas */}
            <div className="absolute left-0 top-0 w-full h-10 rounded-t-2xl bg-gradient-to-l from-emerald-500 to-brand-blue px-4 flex items-center text-white font-montserrat text-2xl font-semibold">
                {title}
            </div>

            {/* konten logo */}
            <div className="p-6 pt-12">
                <div className="grid grid-cols-3 gap-4">
                    {logos.map((logo) => (
                        <div key={logo.alt} className="rounded-xl border border-neutral-200 bg-white p-3 shadow-[0_1px_6px_rgba(0,0,0,0.04)] flex items-center justify-center">
                            <Image src={logo.src} alt={logo.alt} width={150} height={60} className="h-full w-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MoreCard() {
    return (
        <Link
            href="/clients-page" // <- pindah ke halaman full (partners)
            className="relative block rounded-2xl border border-neutral-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="View all partners"
        >
            {/* header biru full */}
            <div className="absolute left-0 top-0 w-full h-10 rounded-t-2xl bg-gradient-to-l from-emerald-500 to-brand-blue px-4 flex items-center text-white text-xl font-semibold">More Clients</div>

            <div className="p-6 pt-16 h-full flex items-center justify-center">
                <span className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-white bg-brand-green text-md font-semibold hover:bg-brand-blue hover:text-white transition">
                    View More →
                </span>
            </div>
        </Link>
    );
}

export default function OurClientsSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            {/* heading */}
            <h2 className="text-center text-6xl font-montserrat font-extrabold">
                <span className="bg-gradient-to-r from-emerald-500 to-brand-blue bg-clip-text text-transparent">Our Clients</span>
            </h2>

            {/* grid utama */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {primaryCategories.slice(0, 5).map((cat) => (
                    <ClientCard key={cat.id} {...cat} />
                ))}
                {/* kartu More */}
                <MoreCard />
            </div>
        </section>
    );
}
