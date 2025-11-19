"use client";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { useState } from "react";

export default function NewTraining() {
  const trainings = [
    {
      title: "Strategic Digital Learning & Development using AI",
      dates: "21–22 Jan | 12–13 Feb | 16–17 Apr | 11–12 Jul | 3–4 Okt",
      pdf: "training.pdf",
    },
    {
      title: "AI-Powered LMS Optimization & People Analytics",
      dates: "29–30 Jan | 23–24 Feb | 1–2 Juli | 30–31 Okt | 15-16 Des",
      pdf: "training.pdf",
    },
    {
      title:
        "AI Sales Tools: Meningkatkan Penjualan dan Profit Berlipat Ganda Menggunakan IT Tools",
      dates: "14–15 Jan | 4–5 Feb | 7–8 Apr | 6–7 Jun | 12–13 Sep | 5-6 Des",
      pdf: "training.pdf",
    },
    {
      title: "Data Driven Decision Making",
      dates: "4–5 Feb | 7–8 Apr | 6–7 Jun | 12–13 Sep | 5–6 Des",
      pdf: "training.pdf",
    },
    {
      title:
        "Pembuatan AI Credit Scoring untuk Kredit Produktif, Usaha Kecil, Mikro dan Ultra Mikro",
      dates:
        "28–29 Jan | 19–20 Feb | 12–13 Mar | 21–22 Mei | 25–26 Jul | 26–27 Sep | 25–26 Nov",
      pdf: "training.pdf",
    },
    {
      title:
        "Transformasi Kinerja Tim Penagihan Menggunakan Tools Artificial Intelligence 2.0",
      dates:
        "28–29 Jan | 19–20 Feb | 23–24 Apr | 19–20 Jun | 22–23 Agu | 24–25 Okt | 12–13 Des",
      pdf: "training.pdf",
    },
    {
      title: "Build Your Own Report-Summarizing Chatbot with GEN AI",
      dates:
        "29–30 Jan | 23–24 Feb | 28–29 Mei | 1–2 Jul | 30–31 Okt | 15–16 Des",
      pdf: "training.pdf",
    },
    {
      title:
        "Create a 24/7 Customer Service Chatbot with GEN AI (LLM OpenAI) for Any Industry",
      dates:
        "28–29 Jan | 19–20 Feb | 23–24 Apr | 19–20 Jun | 22–23 Agu | 24–25 Okt | 12–13 Des",
      pdf: "training.pdf",
    },
    {
      title:
        "Prompt Engineering Mastery: A Game-Changer for Sales, Entrepreneurs, and Professionals",
      dates: "14–15 Jan | 4–5 Feb | 7–8 Mei | 7–8 Agu | 5–6 Nov",
      pdf: "training.pdf",
    },
    {
      title: "Hybrid Coaching & Mentoring Skills in Digital Era",
      dates: "21–22 Jan | 12–13 Feb | 16–17 Apr | 11–12 Jul | 3–4 Okt",
      pdf: "training.pdf",
    },
    {
      title:
        "Teknologi Virtual Reality Untuk Transformasi Bisnis, Pengembangan Karyawan dan Peningkatan Profit",
      dates:
        "15–16 Jan | 5–6 Feb | 11–12 Apr | 4–5 Jul | 15-16 Sep | 10-11 Nov",
      pdf: "training.pdf",
    },
    {
      title:
        "Transformasi dan Digitalisasi Bisnis Memanfaatkan AI, IoT & Blockchain Bagi Pimpinan Perusahaan",
      dates:
        "15–16 Jan | 5–6 Feb | 11–12 Apr | 4–5 Jul | 15–16 Sep | 10–11 Nov",
      pdf: "training.pdf",
    },
    {
      title: "Cyber Security for Digital Banking & Fintech in Indonesia",
      dates:
        "28–29 Jan | 19–20 Feb | 12–13 Mar | 21–22 Mei | 25–26 Jul | 26–27 Sep | 26–27 Nov",
      pdf: "training.pdf",
    },
    {
      title:
        "Cyber Security: Policy Updates, Regulation Compliance, Future Requirement & Internal‑Team Preparation",
      dates:
        "28–29 Jan | 19–20 Feb | 23–24 Apr | 19–20 Jun | 22–23 Agt | 24–25 Okt | 12–13 Des",
      pdf: "training.pdf",
    },
    {
      title: "PDP (Perlindungan Data Pribadi) dan Data Science",
      dates: "14–15 Jan | 4–5 Feb | 7–8 Apr | 6–7 Jun | 12–13 Sep | 5–6 Des",
      pdf: "training.pdf",
    },
    {
      title: "Flutter Expert: Building Enterprise-Grade Application",
      dates:
        "22–23 Jan | 16–17 Feb | 14–15 Mei | 18–19 Jul | 21–22 Sep | 17–18 Nov",
      pdf: "training.pdf",
    },
    {
      title:
        "Mastering UI/UX Design: Figma Pro Workflows & Advanced Techniques",
      dates:
        "28–29 Jan | 19–20 Feb | 12–13 Mar | 21–22 Mei | 25–26 Jul | 26–27 Sep | 26–27 Nov",
      pdf: "training.pdf",
    },
    {
      title:
        "Front-End Framework Front End Modern: React, Next.js, & Tailwind CSS",
      dates:
        "29–30 Jan | 23–24 Feb | 28–29 Mei | 1–2 Jul | 30–31 Okt | 15–16 Des",
      pdf: "training.pdf",
    },
    {
      title:
        "Komunikasi dan Negosiasi Tingkat Lanjut bagi Sales, Marketing & Purchasing",
      dates:
        "21–22 Jan | 12–13 Feb | 5–6 Mar | 12–13 Jun | 14-15 Agt | 13–14 Okt",
      pdf: "training.pdf",
    },
    {
      title: "Digital Marketing & E-Commerce & Social Media Selling",
      dates:
        "21–22 Jan | 12–13 Feb | 5–6 Mar | 12–13 Jul | 14-15 Agt | 13–14 Okt",
      pdf: "training.pdf",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [openPdf, setOpenPdf] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");

  const openModal = (pdfFile: any) => {
    setSelectedPdf(pdfFile);
    setOpenPdf(true);
  };

  return (
    <div className="font-montserrat bg-[#DEE5E7] min-h-screen text-[#02353C] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-24 w-56 h-56 bg-[#AEC9B6] rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-32 right-32 w-72 h-72 bg-[#AEC9B6] rounded-full opacity-40 blur-3xl"></div>

      <div className="relative z-10 px-6 md:px-20 pt-40 py-16">
        <p className="text-[#6E7E80] text-xl md:text-2xl font-montserrat font-semibold mb-2">
          Public Training{" "}
          <span className="text-[#02353C] font-montserrat">
            New Training 2026
          </span>
        </p>

        <h1 className="text-[48px] font-montserrat font-bold mb-6">
          New Training 2026
        </h1>

        <p className="text-2xl font-montserrat font-semibold text-[#02353C] mb-10 leading-snug max-w-5xl">
          Menjawab Dinamika Dunia Bisnis Dan Perkembangan Kebutuhan Kompetensi
          Yang Terus Berubah, Kami Menghadirkan Kategori New Topic – Kumpulan
          Program Pelatihan Terbaru Yang Dirancang Khusus Untuk Menjawab
          Tantangan Masa Kini.
        </p>

        {/* List Cards */}
        <div className="space-y-10">
          {trainings.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-visible transition-all duration-300 hover:-translate-y-1 p-1"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="flex flex-col md:flex-row justify-between items-stretch">
                {/* Title */}
                <div className="flex-1 bg-[#02353C] text-white p-6 md:p-8 flex items-center justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                  <h2 className="text-xl md:text-[25px] font-montserrat font-semibold text-center leading-snug">
                    {item.title}
                  </h2>
                </div>

                {/* Dates */}
                <div className="flex-1 bg-[#557B67] text-white p-6 md:p-8 flex items-center justify-center rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
                  <p className="text-lg md:text-[25px] font-montserrat font-semibold text-center leading-snug">
                    {item.dates}
                  </p>
                </div>
              </div>

              {/* Tombol Lihat Detail */}
              {hoverIndex === i && (
                <div className="w-full flex justify-center">
                  <button
                    onClick={() => openModal(item.pdf)}
                    className="mt-4 bg-[#02353C] text-white px-6 py-2 rounded-full shadow-lg text-sm md:text-base hover:bg-[#03454d] transition"
                  >
                    Lihat Detail
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* MODAL */}
      {openPdf && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl pt-40 p-6 relative">
            {/* Close modal */}
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-black text-2xl"
              onClick={() => setOpenPdf(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-4">Detail Training</h2>

            <div className="flex gap-4 mb-4">
              <a
                href={`/pdf/${selectedPdf}`}
                download
                className="bg-[#02353C] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#03454d] transition"
              >
                Download PDF
              </a>

              <button
                onClick={() => setOpenPdf(false)}
                className="bg-gray-400 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-500 transition"
              >
                Kembali
              </button>
            </div>

            <div className="mt-3 w-full h-[500px] border rounded-md overflow-hidden">
              <embed
                src={`/pdf/${selectedPdf}#toolbar=0`}
                type="application/pdf"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
