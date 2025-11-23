import { TBenefit } from "@/app/types/benefit";
import Image from "next/image";
import { BenefitItems } from "./constant";

const BenefitseSection = () => {
    return (
        <section className="w-full bg-white ">
            {/* wrapper putih, lebarnya standar seperti section lain */}
            <div className="max-w-7xl mx-auto bg-white rounded-lg px-6 md:px-8 lg:px-10 py-8 md:py-10">
                <div className="space-y-6 md:space-y-7">
                    {BenefitItems.map((item: TBenefit) => (
                        <div key={item.title} className="flex gap-4">
                            {/* icon di kiri, ukuran konsisten */}
                            <div className="hidden sm:flex shrink-0 items-center">
                                <Image src={item.src} alt={item.title} className="w-40 h-40 items-center" />
                            </div>

                            <div>
                                {/* semua judul warna biru */}
                                <h3 className="text-4xl font-extrabold mb-2 text-brand-blue">{item.title}</h3>
                                <p className="font-montserrat text-[27px] leading-relaxed text-black text-justify">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitseSection;
