import Footer from "@/Components/Footer";
import React from "react";

const page = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full">
        {/* Background image */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">
          <img
            src="/images/house-training/laptop.png"
            alt="Laptop"
            className="w-full h-full object-cover pt-[70px] md:pt-[100px]"
          />
        </div>

        <div
          className="
          flex flex-col gap-3
          absolute lg:top-[50%] top-[60%]
          -translate-y-1/2
          p-5
          max-w-[650px]
          lg:max-w-[900px]
          md:max-w-[800px]
          justify-center
          text-justify
          lg:flex 
          lg:justify-center
          lg:mx-auto
          lg:inset-0
          md:flex 
          md:justify-center
          md:mx-auto
          md:right-0
          md:left-0
        "
        >
          <h1 className="text-[30px] md:text-[40px] lg:text-[48px] pt-[50px] leading-tight font-bold font-montserrat">
            <span className="text-[#B9F443]">In-House Training</span>
            <span className="text-white"> & </span>
            <span className="text-[#3B8EC3]">Public Training</span>
          </h1>

          <p className="text-white text-[18px] lg:text-[20px] leading-relaxed font-poppins">
            Kami adalah mitra terpercaya Anda untuk peningkatan kompetensi tim,
            menyediakan pelatihan kustom In-House dan program Publik dengan
            standar industri tertinggi.
          </p>
        </div>
      </section>

      {/* ================= SPACING ================= */}
      <div className="h-[40px] md:h-[120px]" />

      {/* ================= TRAINING GRID ================= */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20 pb-10">
        {/* PUBLIC TRAINING CARD */}
        <a href="/search-training" className="w-full">
          <img
            src="/images/house-training/public-training.png"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </a>

        {/* INHOUSE TRAINING CARD */}
        <a href="/in-house-training" className="w-full">
          <img
            src="/images/house-training/in-house-training.png"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </a>

        {/* TEXT COLUMN */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-montserrat font-bold text-[26px] md:text-[32px] lg:text-[40px] leading-tight">
            Pelatihan Fleksibel, Hasil Terukur
          </h1>

          <p className="font-poppins text-[16px] md:text-[18px] lg:text-[22px] leading-relaxed text-justify">
            Pilih kelas publik terjadwal untuk belajar cepat & networking, atau
            sesi in-house yang disesuaikan kebutuhan tim. Materi aplikatif,
            fasilitator praktisi, standar industri terkini.
          </p>
        </div>
      </section>

      {/* ================= GREEN SECTION ================= */}
      <section className="w-full bg-[#065346] py-14 px-6 md:px-12 lg:px-20 space-y-20">
        {/* ROW 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src="/images/house-training/meeting.png"
            className="w-full max-w-[320px] rounded-xl"
          />

          <div className="text-white max-w-[650px] space-y-4">
            <h2 className="font-bold text-[26px] md:text-[32px] lg:text-[40px] leading-tight">
              Dilatih dengan Serius, Diukur Hasilnya
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              Program Public & In-House berbasis kompetensi, dipandu praktisi,
              dengan evaluasi terstruktur.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="text-white max-w-[650px] space-y-4">
            <h2 className="font-bold text-[26px] md:text-[32px] lg:text-[40px] leading-tight">
              Built for Indonesian Enterprises
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
              Materi relevan untuk pasar Indonesia dengan praktik terbaik
              internasional.
            </p>
          </div>

          <img
            src="/images/house-training/meet-up.png"
            className="w-full max-w-[320px] rounded-xl"
          />
        </div>
      </section>
    </>
  );
};

export default page;
