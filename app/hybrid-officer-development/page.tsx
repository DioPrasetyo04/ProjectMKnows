import React from "react";

interface SectionProps {
  title: string;
  bgType: "white" | "green" | "dark";
  children: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  imageRight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  bgType,
  children,
  imageUrl,
  imageAlt,
  imageRight = false,
}) => {
  // UNTUK SECTION PUTIH: Gunakan struktur asli (kotak putih di dalam)
  // Ini agar Section 2, 3, 4, 6 tetap terlihat benar.
  if (bgType === "white") {
    return (
      <section
        className="rounded-3xl p-[3px] shadow-xl"
        style={{ background: "#FFFFFF" }}
      >
        {/* INNER CONTENT BOX (SELALU PUTIH) */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* TEXT */}
            <div
              className={`p-8 md:p-10 ${
                imageRight ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#3B8EC3] to-[#1C445D] bg-clip-text text-transparent">
                {title}
              </h2>
              <div className="text-gray-700 space-y-4">{children}</div>
            </div>
            {/* IMAGE (menggunakan <img>) */}
            <div
              className={`relative h-64 md:h-auto ${
                imageRight ? "order-2 md:order-1" : "order-2"
              }`}
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // UNTUK SECTION HIJAU/GELAP: Gunakan struktur baru dari Gambar 1 (Target)
  // Ini akan berlaku untuk Section 1, 5, 7
  return (
    <section
      className="rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
      style={{
        background:
          bgType === "green"
            ? "linear-gradient(to bottom right, #5D866C, #02353C)"
            : "#02353C",
      }}
    >
      {/* TEXT (Sekarang punya kotak putih sendiri) */}
      <div
        className={`bg-white rounded-2xl p-8 md:p-10 ${
          imageRight ? "order-1 md:order-2" : "order-1"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#3B8EC3] to-[#1C445D] bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="text-gray-700 space-y-4">{children}</div>
      </div>

      {/* IMAGE (Tanpa kotak putih, tapi sudut bulat) */}
      <div
        className={`relative h-64 md:h-auto rounded-2xl overflow-hidden ${
          imageRight ? "order-2 md:order-1" : "order-2"
        }`}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default function HybridOfficerPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #EEEEEE, #02353C)",
      }}
    >
      {/* HERO SECTION (Sesuai kode Anda di chat terakhir) */}
      <div className="relative w-full h-[480px]">
        <img
          src="/hybrid-officer-development/gambarhod1.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
              Hybrid Officer Development
            </h1>
            <p className="text-xl md:text-3xl text-[#BFF932] font-semibold mt-2">
              Crash Program for Financial Industry
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <main className="container mx-auto max-w-5xl py-16 space-y-5 px-4">
        {/* 1 — Hybrid Officer Development */}
        <Section
          title="Hybrid Officer Development Crash Program For Financial Industry"
          bgType="green"
          imageUrl="/hybrid-officer-development/gambarhod2.png"
          imageAlt="Hybrid Officer"
          imageRight={false}
        >
          <p className="text-gray-700 text-lg">
            Creating Competent Professionals In Sales, Credit & Collection
            (Pelatihan, Magang, Bekerja).
          </p>
        </Section>

        {/* 2 — Deskripsi Program (WHITE) */}
        <Section
          title="Deskripsi Program ODCP"
          bgType="white"
          imageUrl="/hybrid-officer-development/gambarhod3.png"
          imageAlt="Deskripsi Program"
          imageRight={true}
        >
          <p>
            Officer Development Crash Program adalah
program pelatihan & magang yang merupakan penciptaan kompetensi di bidang Sales, Credit & Collection, guna menghasilkan SDM yang produktif dan berkinerja tinggi.
          </p>
          <p>Penguatan kompetensi dilakukan berupa pelatihan selama 1 bulan di M-Knows, fokus pada role play dan drill, ditutup dengan uji kompetensi.</p>
          <p>
            Mereka yang lulus uji kompetensi, disalurkan
untuk 1 bulan magang di perusahaan (Bank, Multi Finance, Fintech dan Asuransi). Bagi yang
berkinerja tinggi akan ditawarkan untuk bekerja di perusahaan yang berpartisipasi, bekerja di Industri Keuangan.
          </p>
        </Section>

        {/* 3 — Lingkup Project (WHITE) */}
        <Section
          title="Lingkup Project Hybrid Officer Development Crash Program"
          bgType="white"
          imageUrl="/hybrid-officer-development/gambarhod4.png"
          imageAlt="Lingkup Project"
          imageRight={false}
        >
          <ol className="list-decimal ml-5 space-y-2 text-gray-700">
            <li>Recruitment & Seleksi</li>
            <li>Kontrak kerja & Orientasi</li>
            <li>Pelatihan berbasis kompetensi</li>
            <li>Roleplay, Drill & Penilaian</li>
            <li>Magang di perusahaan</li>
            <li>Coaching & Mentoring</li>
            <li>Evaluasi & kelulusan</li>
            <li>Pembuatan laporan individual (Tingkat kompetensi ybs, kelemahan, kekuatan dan rekomendasi atas jenis atasan yang cocok, bentuk penempatan kerja, dan bentuk pengembangan ke depannya bagi peserta magang)</li>
            <li>Penawaran untuk bekerja di perusahaan yang berpartisipasi.</li>
          </ol>
        </Section>

        {/* 4 — Proses Recruitment (GREEN) */}
        <Section
          title="Proces Recruitment & On Boarding"
          bgType="green"
          imageUrl="/hybrid-officer-development/gambarhod5.png"
          imageAlt="Recruitment"
          imageRight={true}
        >
          <ol className="list-decimal ml-5 text-gray-700 space-y-2">
            <li>Recruitment 300 mahasiswa dilakukan</li>
            <li>Persyaratan seleksi mahasiswa tingkat skripsi (tugas akhir), atau yang sudah lulus atau maksimal selama Covid, (2 tahun terakhir) belum mendapatkan pekerjaan.</li>
            <li>Pembuatan Kontrak kerja dan MOU dengan universitas (pusat karir).</li>
            <li>Mahasiswa melakukan onboarding dan mulai mengikuti pelatihan.</li>
          </ol>
        </Section>

        {/* 5 — Kerangka Program (WHITE) */}
        <Section
          title="Kerangka Program (Project Framework)"
          bgType="white"
          imageUrl="/hybrid-officer-development/gambarhod6.png"
          imageAlt="Kerangka Program"
          imageRight={false}
        >
          <p>
            Aktivitas magang yang kami rancang adalah
untuk mahasiswa dapat diterima bekerja di
perusahaan keuangan, yang bernama Officer Development Crash Program (ODCP).
          </p>
          <p>ODCP memiliki keunggulan, karena mahasiswa diberikan kemampuan atau keahlian yang spesifik, seperti Sales, Credit dan Collection sesuai kebutuhan dari perusahaan keuangan yang akan menerimanya.</p>
          <p>Pendekatan kerja dan magang akan menggunakan pendekatan SCRUM Framework, dimana pemagang akan diarahkan untuk merancang solusi melalui lima proses iterative, yaitu:</p>
          <li>Sprint Planning,</li>
          <li>Daily SCRUM,</li>
          <li>SPRINT Review,</li>
          <li>SPRINT Restrospective, dan</li>
          <li>Improvement.</li>
        </Section>

        {/* 6 — Proses Pelatihan (WHITE) */}
        <Section
          title="Proses Pelatihan di Kampus Gratis"
          bgType="white"
          imageUrl="/hybrid-officer-development/gambarhod7.png"
          imageAlt="Pelatihan"
          imageRight={true}
        >
          <p>Pemberian materi diberikan baik secara synchronous (melalui online meeting), dan asynchronous (dengan disediakannya
video ajar dan white paper di aplikasi
kampusgratis.id). </p>
          <p>Sesi tatap muka atau zoom dibutuhkan untuk pada penugasan dan mentoring yang membutuhkan untuk dilakukan secara langsung.</p>
          <p>Setiap materi pembelajaran akan dilengkapi dengan kuis dan latihan, penugasan, ujian akhir dan uji kompetensi berupa studi kasus, role play dan drill, sebagai evaluasi apakah peserta sudah mencapai minimum standar kompetensi.</p>
        </Section>

        {/* 7 — Monitoring (DARK) */}
        <Section
          title="Monitoring & Evaluasi"
          bgType="dark"
          imageUrl="/hybrid-officer-development/gambarhod8.png"
          imageAlt="Monitoring"
          imageRight={false}
        >
          <p className="text-gray-700">
            Peserta program akan dimonitor kinerjanya meliputi:
          </p>
          <li>Professional Working Attitude</li>
          <li>Pantang Menyerah Terhadap Hasil</li>
          <li>Penguasaan Kompetensi Teknis & Non Teknis</li>
          <p>Selama melakukan magang keria, mahasiswa akan di monitoring dan evaluasi Progres kerjanya oleh Kampus Gratis. Laporan yang dibuat akan di berikan akses kepapada mahasiswa dan pihak perusahaan, sesuai kebutuhan dan kepentingannya.</p>
        </Section>
      </main>
    </div>
  );
}