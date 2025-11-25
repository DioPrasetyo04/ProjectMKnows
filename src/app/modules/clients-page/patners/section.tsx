import { Metadata } from "next";
import Image from "next/image";
import { PartnerList } from "./constant";
import { PartnerCard } from "@/app/types/patners";
// import { PartnerCard } from "@/app/types/patners"; // dipakai hanya untuk type, boleh tetap

export const metadata: Metadata = {
    title: "Partners",
    description: "Daftar lengkap partner/clients.",
};

export function PartnerCategoryCard({ title, src }: PartnerCard) {
    return (
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
            {/* HEADER JUDUL TETAP SEJAJAR */}
            <div className="h-12 bg-gradient-to-l from-emerald-500 to-brand-blue px-4 text-white flex items-center font-montserrat text-2xl font-semibold">{title}</div>

            {/* GAMBAR MENGIKUTI UKURAN ASLINYA */}
            <div className="flex items-center justify-center bg-white px-4 py-5">
                <Image src={src} alt={title} className="relative w-full max-w-[320px] h-auto" />
            </div>
        </div>
    );
}

export default function PartnersPage() {
    const COLS = 4; // grid 4 kolom di xl
    const total = PartnerList.length;

    // Hitung baris penuh
    const fullRowCount = Math.floor(total / COLS);
    const fullItemCount = fullRowCount * COLS;

    const fullItems = PartnerList.slice(0, fullItemCount);
    const lastRowItems = PartnerList.slice(fullItemCount);
    const remainder = lastRowItems.length;

    const renderCard = (item: PartnerCard) => <PartnerCategoryCard key={item.title} {...item} />;

    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center text-5xl font-extrabold mb-8">Our Clients</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                {/* Baris penuh (4,8,12,... items) */}
                {fullItems.map(renderCard)}

                {/* --- CENTERING BARIS TERAKHIR --- */}

                {/* Jika sisa 2 → taruh spacer di kiri lalu render item, lalu spacer kanan */}
                {remainder === 2 && <div className="hidden xl:block" />}

                {/* Render item yang tersisa */}
                {lastRowItems.map(renderCard)}

                {/* Jika sisa 2 atau 3 → kasih spacer kanan */}
                {(remainder === 2 || remainder === 3) && <div className="hidden xl:block" />}
            </div>
        </main>
    );
}

// 3 KOLOM
// export function PartnerCategoryCard({ title, src }: PartnerCard) {
//     return (
//         <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
//             {/* HEADER JUDUL TETAP SEJAJAR */}
//             <div className="h-12 bg-gradient-to-l from-emerald-500 to-brand-blue flex items-center px-4 text-white font-semibold text-lg">{title}</div>

//             {/* GAMBAR MENGIKUTI UKURAN ASLINYA */}
//             <div className="flex items-center justify-center bg-white px-4 py-5">
//                 <Image src={src} alt={title} className="relative w-full max-w-[320px] h-auto" />
//             </div>
//         </div>
//     );
// }

// export default function PartnersPage() {
//     return (
//         <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
//             <h1 className="text-center text-4xl font-extrabold mb-2">Our Clients</h1>

//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {PartnerList.map((item) => (
//                     <PartnerCategoryCard key={item.title} {...item} />
//                 ))}
//             </div>
//         </main>
//     );
// }
