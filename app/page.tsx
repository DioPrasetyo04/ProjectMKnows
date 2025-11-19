"use client";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import StatisticCard from "./Components/StatisticCard";
import ChatButton from "./Components/ChatButton";
import OurServices from "./Components/OurServices";
import Footer from "./Components/Footer";

export default function Home() {
  // --- Gambar untuk carousel ---
  const images = [
    "/images/homepage/Frame1.png",
    "/images/homepage/Frame2.png",
    "/images/homepage/Frame3.png",
    "/images/homepage/Frame4.png",
    "/images/homepage/Frame5.png",
    "/images/homepage/Frame6.png",
    "/images/homepage/Frame7.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Efek untuk auto-slide setiap 3 detik ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="font-poppins bg-[#CEEBFF] text-[#02353C]">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/homepage/bg1.png')" }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten hero */}
        <div className="relative text-center text-[#CEEBFF]">
          <h1 className="text-7xl font-montserrat font-bold">
            <span className="text-[#B9F443]">M-Knows</span>{" "}
            <span className="text-[#4697CE]">Consulting</span>
          </h1>
          <p className="text-lg mt-7 text-[39px] font-montserrat text-white">
            A Meaningful, Contemporary, and Cutting Edge Learning
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-montserrat font-bold text-left mb-10 text-[#065346]">
            <span className="text-[#B9F443]">About</span>{" "}
            <span className="text-[#4697CE]">Us</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Deskripsi */}
            <div className="md:w-2/3 space-y-6 font-montserrat text-[27px] text-black">
              <p>
                M-Knows Consulting adalah merek bersama milik
                PT. Menara Indonesia dan
                PT. Menara Pengetahuan Indonesia, yang bergerak
                di bidang konsultasi manajemen, solusi digital, dan pelatihan
                profesional. Berkantor di Jakarta dan Surabaya.
              </p>
              <p>
                M-Knows telah sukses bermitra dengan berbagai
                perusahaan nasional dan multinasional, melalui pendekatan applicative
                contemporary, high impact, fun & motivational.
              </p>
            </div>

            {/* Carousel Gambar */}
            <div className="relative w-[450px] h-[300px] rounded-2xl overflow-hidden shadow-lg">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`About M-Knows ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-10 bg-white text-center">
        <h2 className="text-6xl font-montserrat font-bold mb-6">
          <span className="text-[#B9F443]">Our</span>{" "}
          <span className="text-[#4697CE]">Statistics</span>
        </h2>
        <p className="text-[#02353C] mb-10 text-[27px] font-montserrat">
          Pencapaian dan dedikasi kami dalam memberikan layanan terbaik
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          <StatisticCard value={20} label="Years" description="of Experience" iconType="experience" />
          <StatisticCard value={2400} label="In-House" description="Training" iconType="inhouse" />
          <StatisticCard value={800} label="Public" description="Training" iconType="public" />
          <StatisticCard value={750} label="Happy" description="Clients" iconType="happy" />
        </div>
      </section>

      {/* Komitmen */}
      <section className="py-10 bg-white text-center">
        <div className="bg-[#02353C] mx-auto text-center w-[70%] md:w-[40%] rounded-2xl py-9 px-7">
          <p className="text-white text-[26px] font-montserrat text-lg md:text-xl font-semibold leading-relaxed">
            Kami berkomitmen memberikan layanan terbaik untuk mendukung
            pertumbuhan organisasi Anda.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <OurServices />

      {/* Footer */}
      <Footer />
      <ChatButton />
    </div>
  );
}
