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
  const [openPopup, setOpenPopup] = useState(null);

  /* ===== DATA POPUP ===== */
  const popupContent = {
    "Solusi AI": {
      image: "/images/popup-ourservices/SolusiAI.png",
      title: "Solusi AI",
      description: `
Tingkatkan Bisnis anda dengan AI Solution! AI Solution merupakan alat yang penting untuk membantu bisnis meningkatkan efisiensi, produktivitas, dan pengambilan keputusan. AI Solution yang tepat juga dapat memberikan keuntungan yang signifikan bagi bisnis seperti penghematan biaya, peningkatan pendapatan, dan keunggulan kompetitif. Kami adalah tim ahli AI berpengalaman yang dapat membantu anda untuk memilih AI Solution yang tepat untuk kebutuhan bisnis anda. Kami menawarkan berbagai AI Solution seperti:
    `,
      features: [
        "AI Credit Scoring",
        "AI Collection Tools",
        "AI Sales Tools",
        "AI for OmniChannel Bot",
        "Pengajuan & DColl Apps untuk Pengajuan dan Penagihan Credit",
      ],
    },

    "Brand Consulting": {
      image: "/images/popup-ourservices/Consulting.png",
      title: "Brand Consulting",
      description: `
Tingkatkan merek dan bisnis anda dengan Brand Consulting! Di era yang kompetitif ini, memiliki merek yang kuat dan berkesan sangat penting untuk kesuksesan bisnis. Brand consulting dapat membantu Anda untuk membangun merek yang dapat bersaing di pasar dan mencapai tujuan bisnis Anda. Konsultan merek kami yang berpengalaman bekerja sama dengan Anda untuk memahami target audiens Anda, mengembangkan identitas merek yang unik, dan menciptakan strategi pemasaran yang efektif. Kami dapat membantu Anda untuk:
    `,
      features: [
        "Mengembangkan identitas merek yang kuat dan berkesan",
        "Menjangkau target audiens Anda dengan lebih efektif",
        "Meningkatkan loyalitas pelanggan dan meningkatkan penjualan",
      ],
    },

    "Web Development": {
      image: "/images/popup-ourservices/JasaWeb.png",
      title: "Jasa Web Development",
      description: `
Buka dan Wujudkan ide web anda melalui pintu menuju dunia digital yang tak terbatas dengan solusi web development dengan tim ahli dan teknologi terdepan kami! Di era digital ini, memiliki website yang profesional adalah suatu keharusan bagi setiap bisnis. Website dapat membantu Anda untuk meningkatkan brand awareness, menjangkau lebih banyak pelanggan, dan meningkatkan penjualan.
    `,
      features: [
        "Pembuatan Website (Statis, Dinamis, Landing Pages, E-commerce)",
        "Desain UI/UX (Wireframing dan Prototyping)",
        "Pengembangan Front-End",
        "Pengembangan Back-End (server dan database)",
        "Optimasi Kinerja Kecepatan dan SEO",
        "Pengujian dan QA",
        "Pemeliharaan dan Dukungan Pembaruan Konten",
        "Integrasi API dan layanan pihak ketiga",
        "Konsultasi dan Pelatihan",
      ],
    },

    "Apps Development": {
      image: "/images/popup-ourservices/JasaApps.png",
      title: "Jasa App (Mobile) Development",
      description: `
Temukan solusi pengembangan aplikasi berkualitas tinggi anda dengan biaya terjangkau! Dapatkan konsultasi gratis dengan tim ahli kami. Di era mobile ini, aplikasi mobile dapat membantu anda untuk menjangkau lebih banyak pelanggan, meningkatkan penjualan, dan membangun brand awareness. Apps Development adalah proses pembuatan dan pemeliharaan aplikasi mobile.
    `,
      features: [
        "Pembuatan aplikasi mobile (UI/UX, Front End, Back End)",
        "Optimasi Kinerja Kecepatan",
        "Pengujian dan QA",
        "Pemeliharaan dan Dukungan Perbaikan Bug",
        "Integrasi API dan Layanan Pihak Ketiga",
        "Konsultasi dan Pelatihan",
      ],
    },

    "Pengembangan LMS Kustom": {
      image: "/images/popup-ourservices/LMS.png",
      title: "Pengembangan LMS Kustom",
      description: `
Tingkatkan Pembelajaran Anda dengan Learning Management System! LMS merupakan alat yang penting bagi organisasi untuk meningkatkan efektivitas pembelajaran, menghemat waktu dan biaya, serta meningkatkan hasil belajar.
    `,
      features: [
        "Modul Pembelajaran dan Konten",
        "Audit, Pengujian dan QA",
        "Pemeliharaan dan Dukungan",
        "Konsultasi dan Pelatihan",
      ],
    },

    "Virtual Reality & XR": {
      image: "/images/popup-ourservices/vr.png",
      title: "Virtual Reality & XR",
      description: `
Temukan Masa Depan Pembelajaran dengan Virtual Learning! Virtual Learning menawarkan fleksibilitas, aksesibilitas, serta pengalaman belajar yang lebih interaktif dan imersif sesuai kebutuhan perkembangan saat ini.
    `,
      features: [
        "Fleksibilitas",
        "Aksesibilitas",
        "Biaya murah",
        "Beragam metode belajar",
        "Interaksi Global",
      ],
    },

    "Pengembangan Game": {
      image: "/images/popup-ourservices/Game.png",
      title: "Pengembangan Game",
      description: `
Temukan dunia game 2D dan 3D yang sempurna untuk anda! Kami memiliki pengalaman membuat game untuk berbagai kebutuhan seperti hiburan, edukasi, simulasi, hingga VR dan AR.
    `,
      features: [
        "Desain dan Konsep Game",
        "Pemrograman Game 2D & 3D",
        "Sound, Voice, Dialog & Music",
        "Pengujian, Optimasi dan QA",
        "Publishing dan Marketing",
        "Pengembangan AR dan VR",
        "Konsultasi dan Pelatihan",
      ],
    },

    "Digital Marketing": {
      image: "/images/popup-ourservices/Marketing.png",
      title: "Digital Marketing",
      description: `
Tingkatkan Bisnis anda dengan Digital Consulting! Kami membantu meningkatkan visibilitas online, menarik lebih banyak pengunjung, dan meningkatkan konversi untuk pertumbuhan bisnis anda.
    `,
      features: [
        "Meningkatkan visibilitas online",
        "Menarik lebih banyak pengunjung",
        "Meningkatkan konversi penjualan",
        "Meningkatkan Return on Investment (ROI)",
      ],
    },

    "Content Creator": {
      image: "/images/popup-ourservices/Content.png",
      title: "Content Creator",
      description: `
Tingkatkan bisnis anda dengan Content Creation berkualitas tinggi! Konten yang baik mampu menarik, mempertahankan audiens, dan meningkatkan loyalitas pelanggan. Kami siap membantu pembuatan berbagai jenis konten.
    `,
      features: [
        "Penulisan Konten (artikel, blog, website, e-book, iklan)",
        "Desain Grafis (infografis, media sosial, banner, presentasi)",
        "Produksi Video dan Animasi",
        "Fotografi Produk & Editing Foto",
        "Podcast Production",
        "Konten Interaktif & Media Sosial",
        "Konsultasi Strategi Konten",
      ],
    },
  };

  return (
    <section className="py-5 bg-white text-center main-content">
      {/* ===== Judul ===== */}
      <h2 className="text-6xl font-montserrat font-bold mb-6 text-[#065346]">
        <span className="text-[#B9F443]">Our</span>{" "}
        <span className="text-[#4697CE]">Services</span>
      </h2>
      <p className="text-[#02353C] mb-12 text-[26px] font-montserrat">
        Solusi kami untuk transformasi dan pengembangan organisasi Anda
      </p>

      {/* ===== Tabs ===== */}
      <div className="tabs-wrapper flex justify-center px-0">
        <div className="tabs-container bg-white border border-gray-300 rounded-2xl shadow-md flex w-full max-w-[600px]">
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
              className={`tab-item flex items-center justify-center gap-2 flex-1 px-4 py-4 text-[20px] md:text-[24px] font-montserrat font-semibold transition-all ${
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
      <div className="max-w-6xl mx-auto text-[24px] px-4 md:px-6 mt-12">
        {/* ========================= TRAINING ========================= */}
        {activeTab === "training" && (
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-8 justify-center flex-wrap">
              <ServiceCard
                href="/training/public-in-house-training"
                icon={
                  <FaUserFriends className="text-green-500 text-4xl mb-3" />
                }
                title="Public & In-house Training"
                text="Pelatihan khusus bagi perusahaan dengan materi yang disesuaikan."
              />
              <ServiceCard
                href="/bootcamp"
                icon={<FaRocket className="text-green-500 text-4xl mb-3" />}
                title="Bootcamp Program"
                text="Pelatihan intensif dengan metodologi accelerated learning."
              />
              <ServiceCard
                href="/outbound-gallery"
                icon={<FaMountain className="text-green-500 text-4xl mb-3" />}
                title="Outbound & Event"
                text="Team building dan adventure learning."
              />
            </div>

            <div className="flex gap-8 justify-center flex-wrap">
              <ServiceCard
                href="/lms-custom"
                icon={
                  <FaGraduationCap className="text-green-500 text-4xl mb-3" />
                }
                title="Learning Management System"
                text="Platform pembelajaran digital."
              />
              <ServiceCard
                href="/training/lms"
                icon={<FaCogs className="text-green-500 text-4xl mb-3" />}
                title="Pengembangan LMS Kustom"
                text="Pembuatan LMS sesuai kebutuhan organisasi."
              />
            </div>
          </div>
        )}

        {/* ========================= CONSULTING ========================= */}
        {activeTab === "consulting" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center ipad-grid-3">
            <ServiceCard
              href="/consulting/brand-consulting"
              icon={<FaBuilding className="text-green-500 text-4xl mb-4" />}
              title="Brand Consulting"
              text="Pembuatan & penguatan identitas brand."
            />
            <ServiceCard
              href="/consulting/executive-coaching"
              icon={<FaUserTie className="text-green-500 text-4xl mb-3" />}
              title="Executive Coaching"
              text="Program pengembangan personal bagi eksekutif."
            />
            <ServiceCard
              href="/hybrid-officer-development"
              icon={<FaUsersCog className="text-green-500 text-4xl mb-3" />}
              title="Hybrid Officer Development"
              text="Seleksi, pelatihan, coaching & counseling."
            />
            <ServiceCard
              href="/assessment-technical-competency"
              icon={<FaAward className="text-green-500 text-4xl mb-3" />}
              title="Assessment Competency"
              text="Pembuatan kamus & assessment kompetensi teknis."
            />
          </div>
        )}

        {/* ========================= DIGITALISASI (POPUP VERSION) ========================= */}
        {activeTab === "digitalisasi" && (
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-8 flex-wrap justify-center ipad-grid-3">
              <ServiceCardModal
                icon={<FaRobot className="text-green-500 text-4xl mb-3" />}
                title="Solusi AI"
                text="RPA & AI Agent untuk automasi kerja."
                onClick={() => setOpenPopup("Solusi AI")}
              />
              <ServiceCardModal
                icon={<FaCode className="text-green-500 text-4xl mb-3" />}
                title="Web Development"
                text="Pembuatan website profesional bisnis."
                onClick={() => setOpenPopup("Web Development")}
              />
              <ServiceCardModal
                icon={<FaMobileAlt className="text-green-500 text-4xl mb-3" />}
                title="Apps Development"
                text="Pengembangan aplikasi mobile inovatif."
                onClick={() => setOpenPopup("Apps Development")}
              />
            </div>

            <div className="flex gap-8 flex-wrap justify-center ipad-grid-3">
              <ServiceCardModal
                icon={<FaGamepad className="text-green-500 text-4xl mb-3" />}
                title="Pengembangan Game"
                text="Game 2D, 3D, VR, XR."
                onClick={() => setOpenPopup("Pengembangan Game")}
              />
              <ServiceCardModal
                icon={<FaBullhorn className="text-green-500 text-4xl mb-3" />}
                title="Digital Marketing"
                text="Strategi pemasaran digital efektif."
                onClick={() => setOpenPopup("Digital Marketing")}
              />
              <ServiceCardModal
                icon={<FaVideo className="text-green-500 text-4xl mb-3" />}
                title="Content Creator"
                text="Produksi konten kreatif digital."
                onClick={() => setOpenPopup("Content Creator")}
              />
            </div>

            <div className="flex justify-center ipad-grid-3">
              <ServiceCardModal
                icon={
                  <FaVrCardboard className="text-green-500 text-4xl mb-3" />
                }
                title="Virtual Reality & XR"
                text="Solusi simulasi interaktif imersif."
                onClick={() => setOpenPopup("Virtual Reality & XR")}
              />
            </div>
          </div>
        )}
      </div>

      {/* ===== RESPONSIVE CSS ===== */}
      <style>{`
        .tabs-wrapper { width: 100%; overflow-x: auto; }
        .tabs-container { display: flex; gap: 12px; padding: 0 10px; min-width: max-content; }
        .tab-item { white-space: nowrap; flex-shrink: 0; }
        @media (max-width: 500px) {
          .tabs-container { gap: 6px; padding: 0 6px; }
        }
      `}</style>

      {/* ===== RENDER POPUP ===== */}
      <PopupModal
        data={openPopup ? popupContent[openPopup] : null}
        onClose={() => setOpenPopup(null)}
      />
    </section>
  );
}

/* ============================================================
   COMPONENT: CARD default (LINK)
============================================================ */
function ServiceCard({ href, icon, title, text }) {
  return (
    <Link href={href} className="flex justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200 hover:border-[#4697CE] cursor-pointer flex flex-col items-center text-center w-[260px] h-[250px] md:w-[300px]">
        {icon}
        <h3 className="text-[#4697CE] text-[20px] font-montserrat mb-2 font-semibold">
          {title}
        </h3>
        <p className="text-black font-montserrat text-[16px]">{text}</p>
      </div>
    </Link>
  );
}

/* ============================================================
   COMPONENT: CARD POPUP (TIDAK PINDAH HALAMAN)
============================================================ */
function ServiceCardModal({ icon, title, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200 hover:border-[#4697CE] cursor-pointer flex flex-col items-center text-center w-[260px] h-[250px] md:w-[300px]"
    >
      {icon}
      <h3 className="text-[#4697CE] text-[20px] font-montserrat mb-2 font-semibold">
        {title}
      </h3>
      <p className="text-black font-montserrat text-[16px]">{text}</p>
    </div>
  );
}
/* ============================================================
   COMPONENT: POPUP / MODAL (FADE + SCALE + CLOSE BY OVERLAY)
============================================================ */
function PopupModal({ data, onClose }) {
  if (!data) return null;

  const handleBackgroundClick = (e) => {
    // Klik area gelap → tutup popup
    if (e.target.id === "popup-overlay") onClose();
  };

  return (
    <div
      id="popup-overlay"
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999] animate-fadeIn"
    >
      <div
        className="bg-white rounded-xl shadow-xl flex overflow-hidden relative animate-popupScale"
        style={{ width: "1013px", height: "542px" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-3xl font-montserrat font-bold text-black hover:text-gray-600"
        >
          ×
        </button>

        {/* Left Image */}
        <div className="w-1/2 h-full">
          <img
            src={data.image}
            className="w-full h-full object-cover"
            alt={data.title}
          />
        </div>

        {/* Right Content */}
        <div className="w-1/2 p-10 text-left overflow-y-auto">
          <h2
            className="text-[44px] font-montserrat font-bold mb-4"
            style={{ color: "#3B8EC3" }}
          >
            {data.title}
          </h2>
          {/* DESCRIPTION */}
          <p className="text-[22px] font-montserrat text-black/80 leading-relaxed mb-6">
            {data.description}
          </p>

          <h3
            className="text-[22px] font-montserrat font-bold mb-3"
            style={{ color: "#3F8642" }}
          >
            Key Features:
          </h3>

          <ul className="text-[22px] leading-relaxed font-montserrat">
            {data.features.map((f, i) => (
              <ul className="list-disc">
                <li key={i} className="mb-2 text-outside">
                  {f}
                </li>
              </ul>
            ))}
          </ul>
        </div>
      </div>

      {/* ANIMASI CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popupScale {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }

        .animate-popupScale {
          animation: popupScale 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}
