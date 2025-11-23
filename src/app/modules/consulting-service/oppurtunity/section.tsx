import Image from "next/image";

const OpportunitySection = () => {
    return (
        <section className="w-full bg-[#e6e6e6] py-10 md:py-14 px-4 sm:px-6 lg:px-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                {/* Judul */}
                <h2 className="font-montserrat md:text-5xl font-extrabold text-brand-blue leading-snug">M-Knows Consulting telah memperoleh banyak kesempatan bekerja sama</h2>

                {/* Deskripsi */}
                <p className="mt-8 text-sm font-montserrat text-[27px] leading-relaxed text-slate-800 text-justify">
                    Dengan lembaga-lembaga swasta dan pemerintah pada proyek-proyek perumusan kebijakan, studi banding, serta undangan untuk menjadi pembicara tamu dalam berbagai kesempatan dan
                    pertemuan atau seminar untuk berbagi dan memperkenalkan pandangan dan pengetahuan di bidang ekonomi, manajemen dan bisnis.
                </p>

                {/* Ilustrasi */}
                <div className="mt-8 w-full flex justify-center">
                    <Image
                        src="/images/our-service/oppurtunity 1.png" // gambar
                        alt="Ilustrasi kerja sama"
                        width={600}
                        height={260}
                        className="w-full max-w-[600px] h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default OpportunitySection;
