import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="w-full bg-white">
            <div className="relative w-full max-w-[1440px] mx-auto">
                {/* BAGIAN HERO DENGAN BACKGROUND FOTO */}
                <div className="relative h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/our-service/hero-background.jpg')",
                        }}
                    />
                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-7xl font-extrabold tracking-wide text-center mb-3">CONSULTING SERVICE</h1>
                        <p className="max-w-[900px] mx-auto text-center text-[11px] md:text-xl text-white">Dari strategi ke eksekusi asesmen, pelatihan, coaching, dan evaluasi yang terukur.</p>
                    </div>
                </div>

                {/* PANEL PUTIH DI BAWAH HERO */}
                <div className="relative -mt-6 md:-mt-10 bg-white px-4 md:px-10 lg:px-16 pt-8 pb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                        <span className="text-brand-lime">M-Knows </span>
                        <span className="text-brand-blue">Consulting</span>
                    </h2>

                    <p className="max-w-6xl mx-auto text-16 md:text-xl leading-relaxed text-gray-800 text-justify mb-6">
                        Mempunyai hubungan jangka panjang dengan perusahaan-perusahaan lokal dan internasional yang berbasis di Indonesia untuk mendukung pengembangan sumber daya manusia mereka serta
                        strategi bisnis dan manajemen. Program pengembangan ini dirancang untuk meningkatkan keahlian spesifik bahwa perusahaan membutuhkan strategi untuk mengahadapi masa depan.
                    </p>

                    <button className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-green px-6 py-2 text-xs md:text-xl font-semibold text-white hover:bg-brand-blue transition">
                        Konsultasi Sekarang
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
