import { Metadata } from "next";
import { PartnerList } from "./constant";
import { PartnerCard } from "@/app/types/patners";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Partners",
    description: "Daftar lengkap partner/clients.",
};

export default function PartnersPage() {
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center text-4xl font-extrabold mb-2">Our Clients</h1>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                {PartnerList.map((partner) => (
                    <div key={partner.id} className="mb-6 break-inside-avoid">
                        <Image src={partner.src} alt={partner.title} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </main>
    );
}
