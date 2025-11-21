import Image from "next/image";
import React from "react";

export default function WebDevelopmentPage() {
  const features = [
    "Pembuatan Website (Statis, dinamis, Landing Pages, E-commerce)",
    "Desain UI/UX (wireframing dan prototyping)",
    "Pengembangan Front-End",
    "Pengembangan Back-End (server dan database)",
    "Optimasi Kinerja Kecepatan dan SEO",
    "Pengujian dan QA",
    "Pemeliharaan dan Dukungan Pembaruan Konten, Pemantauan Keamanan dan Perbaikan Bug",
    "Integrasi API dan Layanan Pihak Ketiga (pembayaran online, layanan email, dan lainnya)",
    "Konsultasi dan Pelatihan",
  ];

  return (
    <div className="container mx-auto px-4 pt-[180px] pb-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kolom Gambar */}
        <div className="relative w-full h-80 md:h-[700px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/jasa-web-development/gambarjwb1.png" // Ganti dengan path gambar Anda
            alt="Jasa Web Development M-Knows"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Kolom Teks */}
        <div>
          {/* Judul dengan warna biru */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#3B8EC3] mb-6">
            Jasa Web Development
          </h1>

          <div className="text-gray-600 space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Buka dan Wujudkan ide web anda melalui pintu menuju dunia digital
              yang tak terbatas dengan solusi web development dengan tim ahli
              dan teknologi terdepan kami!
            </p>
            <p>
              Di era digital ini, memiliki website yang profesional adalah suatu
              keharusan bagi setiap bisnis. Website dapat membantu Anda untuk
              meningkatkan brand awareness, menjangkau lebih banyak pelanggan,
              dan meningkatkan penjualan.
            </p>
            <p>
              Web Development merupakan pembuatan dan pemeliharaan situs web
              yang melibatkan kegiatan seperti desain tampilan, pengembangan
              fungsionalitas, dan penyesuaian agar situs web berjalan baik.
            </p>
          </div>

          {/* Sub-judul dengan warna hijau */}
          <h3 className="text-2xl font-semibold text-[#3F8642] mt-10 mb-4">
            Key Features:
          </h3>

          <ul className="space-y-3 list-disc list-outside text-gray-700 pl-2 text-justify">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
