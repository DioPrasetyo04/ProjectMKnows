import Footer from "@/Components/Footer";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <section className="relative flex flex-col gap-y-5 items-center">
        <div className="w-full h-[651px] relative items-center justify-center">
          <img
            src="/images/house-training/laptop.png"
            alt="Image Laptop"
            className="object-cover w-full h-full pt-[100px] relative z-0"
          />
        </div>
        <div className="flex flex-col justify-center z-20 absolute translate-y-1/2 left-0 pt-[79px] pl-[111px] gap-y-[9px]">
          <h1 className="w-[526px] text-[48px] font-montserrat font-bold">
            <span className="text-[#B9F443]">In-House Training</span>
            <span className="text-[#ffff]"> & </span>
            <span className="text-[#3B8EC3]">Public Training</span>
          </h1>
          <h3 className="text-[#ffff] font-poppins font-bold text-[20px] w-[850px] text-justify">
            Kami adalah mitra terpercaya Anda untuk peningkatan kompetensi tim,
            menyediakan pelatihan kustom In-House dan program Publik dengan
            standar industri tertinggi.
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-x-[40px] pt-[43px] pl-[71px] pb-[90px]">
          <div className="w-[386px] h-[427.56px]">
            <a href="/search-training">
              <img
                src="/images/house-training/public-training.png"
                alt="public training image"
              />
            </a>
          </div>
          <div className="w-[386px] h-[427.56px]">
            <a href="/in-house-training">
              <img
                src="/images/house-training/in-house-training.png"
                alt="public training image"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-y-[24px]">
            <h1 className="w-[389px] font-montserrat font-bold text-[40px] leading-[50px]">
              Pelatihan Fleksibel, Hasil Terukur
            </h1>
            <p className="font-poppins font-regular text-[25px] leading-[50px] w-[389px] text-justify">
              Pilih kelas publik terjadwal untuk belajar cepat & networking,
              atau sesi in-house yang disesuaikan kebutuhan tim. Materi
              aplikatif, fasilitator praktisi, standar industri terkini.
            </p>
          </div>
        </div>
        <div className="h-full w-full max-h-[532px] bg-[#065346] gap-y-[10px] p-8">
          <div className="flex flex-row justify-center items-center gap-y-[20px] gap-x-[88px]">
            <div className="w-[320px] h-[206px]">
              <img
                src="/images/house-training/meeting.png"
                alt="meeting images"
                className="object-cover object-center h-full w-full rounded-[20px]"
              />
            </div>
            <div className="flex flex-col gap-y-[25px]">
              <h1 className="text-[#ffff] font-montserrat font-bold text-[40px] leading-[30px]">
                Dilatih dengan Serius, Diukur Hasilnya
              </h1>
              <p className="text-[#ffff] font-poppins font-regular text-[20px] leading-[30px] max-w-[636px]">
                Program Public & In-House berbasis kompetensi, dipandu praktisi,
                dengan evaluasi terstruktur
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-y-[20px] gap-x-[88px]">
            <div className="flex flex-col gap-y-[25px]">
              <h1 className="text-[#ffff] font-montserrat font-bold text-[40px] leading-[30px]">
                Built for Indonesian Enterprises
              </h1>
              <p className="text-[#ffff] font-poppins font-regular text-[20px] leading-[30px] max-w-[636px]">
                Materi relevan untuk pasar Indonesia dengan praktik terbaik
                internasional.
              </p>
            </div>
            <div className="w-[320px] h-[206px]">
              <img
                src="/images/house-training/meet-up.png"
                alt="meeting images"
                className="object-cover object-center h-full w-full rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default page;
