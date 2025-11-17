import Image from "next/image";

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
  return (
    <section
      className="rounded-3xl p-[3px] shadow-xl"
      style={{
        background:
          bgType === "green"
            ? "linear-gradient(to bottom right, #5D866C, #02353C)"
            : bgType === "dark"
            ? "#02353C"
            : "#FFFFFF",
      }}
    >
      {/* INNER CONTENT BOX (SELALU PUTIH) */}
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* TEXT */}
          <div className={`p-8 md:p-10 ${imageRight ? "order-1" : "order-2"}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#3B8EC3] to-[#1C445D] bg-clip-text text-transparent">
              {title}
            </h2>
            <div className="text-gray-700 space-y-4">{children}</div>
          </div>

          {/* IMAGE */}
          <div className={`relative h-64 md:h-auto ${imageRight ? "order-2" : "order-1"}`}>
            <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
          </div>

        </div>
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
      {/* HERO */}
      <div className="relative w-full h-[480px] flex items-center justify-center">
        <Image
          src="/hybrid-officer-development/gambarhod1.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Hybrid Officer Development
          </h1>
          <p className="text-xl md:text-3xl text-[#BFF932] font-semibold mt-2">
            Crash Program for Financial Industry
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <main className="container mx-auto max-w-5xl py-16 space-y-12 px-4">

        {/* 1 — Hybrid Officer Development */}
        <Section
          title="Hybrid Officer Development Crash Program For Financial Industry"
          bgType="green"
          imageUrl="/hybrid-officer-development/gambarhod2.png"
          imageAlt="Hybrid Officer"
          imageRight={true}
        >
          <p className="text-gray-700 text-lg">
            Creating Competent Professionals In Sales, Credit & Collection (Pelatihan, Magang, Bekerja).
          </p>
        </Section>

        {/* 2 — Deskripsi Program (WHITE) */}
        <Section
          title="Deskripsi Program ODCP"
          bgType="white"
          imageUrl="/hybrid-officer-development/gambarhod3.png"
          imageAlt="Deskripsi Program"
          imageRight={false}
        >
          <p>Officer Development Crash Program adalah program pelatihan & magang...</p>
          <p>Penguatan kompetensi berupa pelatihan 1 bulan di M-Knows.</p>
          <p>Mereka yang lulus akan disalurkan 1 bulan magang dan berpeluang bekerja di industri keuangan.</p>
        </Section>

        {/* 3 — Lingkup Project (WHITE) */}
        <Section
          title="Lingkup Project Hybrid Officer Development Crash Program"
          bgType="white"
          imageUrl="/hybrid-officer-development/gambarhod4.png"
          imageAlt="Lingkup Project"
          imageRight={true}
        >
          <ol className="list-decimal ml-5 space-y-2 text-gray-700">
            <li>Recruitment & Seleksi</li>
            <li>Kontrak kerja & Orientasi</li>
            <li>Pelatihan berbasis kompetensi</li>
            <li>Roleplay, Drill & Penilaian</li>
            <li>Magang di perusahaan</li>
            <li>Coaching & Mentoring</li>
            <li>Evaluasi & kelulusan</li>
          </ol>
        </Section>

        {/* 4 — Kerangka Program (WHITE) */}
        <Section
          title="Kerangka Program (Project Framework)"
          bgType="white"
          imageUrl="/hybrid-officer-development/gambarhod5.png"
          imageAlt="Kerangka Program"
          imageRight={false}
        >
          <p>Magang dirancang untuk mahasiswa diterima bekerja di perusahaan keuangan.</p>
          <p>Dibangun dengan pendekatan SCRUM dan iterative progress.</p>
        </Section>

        {/* 5 — Proses Recruitment (GREEN) */}
        <Section
          title="Proces Recruitment & On Boarding"
          bgType="green"
          imageUrl="/hybrid-officer-development/gambarhod7.png"
          imageAlt="Recruitment"
          imageRight={true}
        >
          <ol className="list-decimal ml-5 text-gray-700 space-y-2">
            <li>Recruitment 300 mahasiswa</li>
            <li>Seleksi Skripsi / Fresh Graduate</li>
            <li>Kontrak Kerja & MOU</li>
            <li>Onboarding & Mulai Pelatihan</li>
          </ol>
        </Section>

        {/* 6 — Proses Pelatihan (WHITE) */}
        <Section
          title="Proses Pelatihan di Kampus Gratis"
          bgType="white"
          imageUrl="/hybrid-officer-development/gambarhod6.png"
          imageAlt="Pelatihan"
          imageRight={false}
        >
          <p>Materi disampaikan secara synchronous & asynchronous.</p>
          <p>Mentoring, tugas, kuis, ujian, dan uji kompetensi.</p>
        </Section>

        {/* 7 — Monitoring (DARK) */}
        <Section
          title="Monitoring & Evaluasi"
          bgType="dark"
          imageUrl="/hybrid-officer-development/gambarhod8.png"
          imageAlt="Monitoring"
          imageRight={true}
        >
          <p className="text-gray-700">
            Monitoring dilakukan terhadap attitude, semangat pantang menyerah, serta penguasaan kompetensi teknis & non teknis.
          </p>
        </Section>

      </main>
    </div>
  );
}
