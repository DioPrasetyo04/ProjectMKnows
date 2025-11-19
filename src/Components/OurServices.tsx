"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaChalkboardTeacher,
  FaGlobe,
  FaChartLine,
  FaUserFriends,
  FaRocket,
  FaMountain,
  FaGraduationCap,
  FaCogs,
  FaBuilding,
  FaUserTie,
  FaUsersCog,
  FaAward,
  FaRobot,
  FaCode,
  FaMobileAlt,
  FaGamepad,
  FaBullhorn,
  FaVideo,
  FaVrCardboard,
} from "react-icons/fa";

export default function OurServices() {
  const [activeTab, setActiveTab] = useState("training");

  return (
    <section className="py-5 bg-white text-center">
      {/* ===== Judul ===== */}
      <h2 className="text-6xl font-montserrat font-bold mb-6 text-[#065346]">
        <span className="text-[#B9F443]">Our</span>{" "}
        <span className="text-[#4697CE]">Services</span>
      </h2>
      <p className="text-[#02353C] mb-12 text-[26px] font-montserrat">
        Solusi kami untuk transformasi dan pengembangan organisasi Anda
      </p>

      {/* ===== Tabs ===== */}
      <div className="flex justify-center">
        <div className="bg-white border border-gray-300 rounded-2xl shadow-md flex overflow-hidden">
          {[
            {
              key: "training",
              label: "Training",
              icon: <FaChalkboardTeacher />,
            },
            { key: "consulting", label: "Consulting", icon: <FaChartLine /> },
            { key: "digitalisasi", label: "Digitalisasi", icon: <FaGlobe /> },
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-8 py-4 text-[24px] font-montserrat font-semibold transition-all ${
                activeTab === key
                  ? "bg-[#4697CE] text-white"
                  : "text-[#7A7A7A] hover:bg-[#E3F2FD]"
              }`}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================= KONTEN ========================= */}
      <div className="max-w-6xl mx-auto text-[24px] px-6 mt-12">
        {/* ========================= TRAINING ========================= */}
        {activeTab === "training" && (
          <div className="flex flex-col items-center gap-8">
            {/* Baris 1 */}
            <div className="flex gap-8 justify-center flex-wrap">
              <ServiceCard
                href="/training"
                icon={
                  <FaUserFriends className="text-green-500 text-4xl mb-3" />
                }
                title="Public & In-house Training"
                text="Pelatihan khusus bagi perusahaan dengan materi yang disesuaikan."
              />
              <ServiceCard
                href="/training"
                icon={<FaRocket className="text-green-500 text-4xl mb-3" />}
                title="Bootcamp Program"
                text="Pelatihan intensif dengan metodologi accelerated learning."
              />
              <ServiceCard
                href="/training"
                icon={<FaMountain className="text-green-500 text-4xl mb-3" />}
                title="Outbound & Event"
                text="Team building dan adventure learning."
              />
            </div>

            {/* Baris 2 (tengah) */}
            <div className="flex gap-8 justify-center">
              <ServiceCard
                href="/training"
                icon={
                  <FaGraduationCap className="text-green-500 text-4xl mb-3" />
                }
                title="Learning Management System"
                text="Platform pembelajaran digital."
              />
              <ServiceCard
                href="/training"
                icon={<FaCogs className="text-green-500 text-4xl mb-3" />}
                title="Pengembangan LMS Kustom"
                text="Pembuatan LMS sesuai kebutuhan organisasi."
              />
            </div>
          </div>
        )}

        {/* ========================= CONSULTING ========================= */}
        {activeTab === "consulting" && (
          <div className="flex justify-center flex-nowrap gap-8">
            <ServiceCard
              href="/consulting"
              icon={<FaBuilding className="text-green-500 text-4xl mb-4" />}
              title="Brand Consulting"
              text="Pembuatan & penguatan identitas brand."
            />
            <ServiceCard
              href="/consulting"
              icon={<FaUserTie className="text-green-500 text-4xl mb-3" />}
              title="Executive Coaching"
              text="Program pengembangan personal bagi eksekutif."
            />
            <ServiceCard
              href="/consulting"
              icon={<FaUsersCog className="text-green-500 text-4xl mb-3" />}
              title="Hybrid Officer Development"
              text="Seleksi, pelatihan, coaching & counseling."
            />
            <ServiceCard
              href="/consulting"
              icon={<FaAward className="text-green-500 text-4xl mb-3" />}
              title="Assessment Competency"
              text="Pembuatan kamus & assessment kompetensi teknis."
            />
          </div>
        )}

        {/* ========================= DIGITALISASI ========================= */}
        {activeTab === "digitalisasi" && (
          <div className="flex flex-col items-center gap-8">
            {/* Baris 1 */}
            <div className="flex gap-8 flex-wrap justify-center">
              <ServiceCard
                href="/digitalisasi"
                icon={<FaRobot className="text-green-500 text-4xl mb-3" />}
                title="Solusi AI"
                text="RPA & AI Agent untuk automasi kerja."
              />
              <ServiceCard
                href="/digitalisasi"
                icon={<FaCode className="text-green-500 text-4xl mb-3" />}
                title="Web Development"
                text="Pembuatan website profesional bisnis."
              />
              <ServiceCard
                href="/digitalisasi"
                icon={<FaMobileAlt className="text-green-500 text-4xl mb-3" />}
                title="Apps Development"
                text="Pengembangan aplikasi mobile inovatif."
              />
            </div>

            {/* Baris 2 */}
            <div className="flex gap-8 flex-wrap justify-center">
              <ServiceCard
                href="/digitalisasi"
                icon={<FaGamepad className="text-green-500 text-4xl mb-3" />}
                title="Pengembangan Game"
                text="Game 2D, 3D, VR, XR."
              />
              <ServiceCard
                href="/digitalisasi"
                icon={<FaBullhorn className="text-green-500 text-4xl mb-3" />}
                title="Digital Marketing"
                text="Strategi pemasaran digital efektif."
              />
              <ServiceCard
                href="/digitalisasi"
                icon={<FaVideo className="text-green-500 text-4xl mb-3" />}
                title="Content Creator"
                text="Produksi konten kreatif digital."
              />
            </div>

            {/* Baris 3 (tengah) */}
            <div className="flex justify-center">
              <ServiceCard
                href="/digitalisasi"
                icon={
                  <FaVrCardboard className="text-green-500 text-4xl mb-3" />
                }
                title="Virtual Reality & XR"
                text="Solusi simulasi interaktif imersif."
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export type serviceCardType = {
  href: string;
  icon: React.ReactNode;
  title: string;
  text: string;
};

function ServiceCard({ href, icon, title, text }: serviceCardType) {
  return (
    <Link href={href}>
      <div
        className="
          bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition
          border border-gray-200 hover:border-[#4697CE]
          cursor-pointer flex flex-col items-center text-center
          w-[300px] h-[260px]
        "
      >
        {icon}
        <h3 className="text-[#4697CE] text-[20px] font-montserrat text-xl mb-2 font-semibold">
          {title}
        </h3>
        <p className="text-black text-[20px] font-montserrat font-medium text-sm">
          {text}
        </p>
      </div>
    </Link>
  );
}
