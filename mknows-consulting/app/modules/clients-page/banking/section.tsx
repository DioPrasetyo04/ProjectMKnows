import { TClientBank } from "@/app/types/banking";
import { ClientBank } from "./constant";
import Image from "next/image";

export default function BankingSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            {/* banner header */}
            <div className="text-center bg-sky-600 text-white text-xl py-3 rounded-md font-semibold mb-10">We Are Strong In Repeat Orders Satisfaction Guaranteed</div>

            {/* Grid 2 kolom, semua card ditarik sama tinggi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {ClientBank.map((item: TClientBank) => (
                    <div key={item.bankName} className="flex flex-col h-full">
                        {/* AREA LOGO (TINGGI SAMA, LOGO DI TENGAH) */}
                        <div className="flex items-center justify-center h-15 mb-3">
                            <Image src={item.src} alt={item.bankName} className="max-h-12 w-auto object-contain" />
                        </div>

                        {/* KOTAK BIRU HANYA DESC, TINGGI DIRATAKAN */}
                        <div className="bg-[#e6f4ff] rounded-md px-4 py-4 shadow-sm flex-1 flex items-center justify-center">
                            <p className="text-16 text-slate-800 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
