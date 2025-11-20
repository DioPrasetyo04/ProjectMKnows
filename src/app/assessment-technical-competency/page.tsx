import Image from "next/image";
import React from "react";

// Komponen helper kecil untuk konsistensi
const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`${className}`}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[500px]">
      {" "}
      {/* Tambahkan min-h agar konsisten */}
      {children}
    </div>
  </section>
);

export default function ATCPage() {
  return (
    <div className="bg-white text-gray-700 lg:pt-[120px] md:pt-[120px] sm:pt-[120px] pt-[120px] pb-[120px]">
      {/* --- Bagian 1 (Gambar 5 Atas) --- */}
      {/* GANTI 'bg-gray-50' MENJADI 'bg-[#D9D9D9]' DI SINI */}
      <Section className="bg-[#D9D9D9]">
        {/* Kolom Gambar */}
        <div className="relative w-full h-80 md:h-full min-h-[300px] md:min-h-[500px] overflow-hidden order-last md:order-first">
          <Image
            src="/images/assessment-technical-competencey/gambaratc1.png"
            alt="Assessment for Technical Competency"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Kolom Teks - TAMBAHKAN PADDING DI SINI */}
        <div className="order-first md:order-last flex justify-center items-center p-8 md:p-16">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Assessment for Technical Competency (ATC)
            </h1>
            <p className="text-lg leading-relaxed">
              Adalah mitra (salah satu solusi) dalam mengukur dan menilai
              potensi serta kompetensi dari sumber daya manusia. ATC menawarkan
              solusi integratif melalui metode terstandar dan sesuai dengan
              kebutuhan untuk menyesuaikan dengan kebutuhan pengembangan
              bakat/minat individu.
            </p>
          </div>
        </div>
      </Section>

      {/* --- Bagian 2 (Gambar 5 Bawah) --- */}
      <Section className="bg-[#D9D9D9]">
        <div className="flex justify-center items-center p-8 md:p-16">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              ATC menawarkan solusi integratif
            </h2>
            <p className="text-lg leading-relaxed">
              Untuk mengoptimasi pengembangan bakat melalui metode dan sarana
              yang valid dan terpercaya. Kami juga memberikan laporan yang unik
              dan dipersonalisasikan oleh para asesor dan penasihat kami untuk
              memberikan informasi yang lengkap serta pengembangan jangka
              panjang kepada client.
            </p>
          </div>
        </div>

        {/* Kolom Gambar */}
        <div className="relative w-full h-80 md:h-full min-h-[300px] md:min-h-[500px] overflow-hidden">
          <Image
            src="/images/assessment-technical-competencey/gambaratc2.png"
            alt="Solusi integratif ATC"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Section>

      {/* --- Bagian 3 (Gambar 6 Atas) --- */}
      <Section className="bg-[#D9D9D9]">
        {/* Kolom Gambar */}
        <div className="relative w-full h-80 md:h-full min-h-[300px] md:min-h-[500px] overflow-hidden order-last md:order-first">
          <Image
            src="/images/assessment-technical-competencey/gambaratc3.png"
            alt="Solusi-solusi ATC"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Kolom Teks - TAMBAHKAN PADDING DI SINI */}
        <div className="order-first md:order-last flex justify-center items-center p-8 md:p-16">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Solusi-solusi yang ditawarkan oleh ATC
            </h2>
            <p className="text-lg leading-relaxed">
              Sesuai dengan setiap Individual Development Plan serta dapat
              menangkap potensi serta kompetensi dari para sumber daya manusia
              serta dapat memberikan gambaran yang jelas dari profil sumber daya
              manusia dengan menggunakan tools - tools dari kami yang bisa di
              sesuaikan dengan kebutuhan client.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
