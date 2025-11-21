import React from "react";

const LMSPage = () => {
  const keyFeatures = [
    "Modul Pembelajaran dan Konten",
    "Audit, Pengujian dan QA",
    "Pemeliharaan dan Dukungan",
    "Konsultasi dan Pelatihan",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black pt-[120px]">
      {/* Jika Navbar dan Footer sudah ada di layout.tsx, Anda bisa menghapusnya di sini */}

      {/* Konten Utama - Layout Dua Kolom */}
      <main className="flex-grow pt-16 pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Kolom Kiri: Visual/Gambar */}
            <div className="lg:w-1/2 relative min-h-[600px]">
              {/* Ini adalah placeholder untuk visual yang kompleks (tangan di laptop + overlay ikon) */}
              {/* Menggunakan div dengan latar belakang gelap dan overlay ikon placeholder untuk menyamai vibe desain */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80 rounded-lg shadow-2xl"
                style={{
                  backgroundImage: "url('/images/lms/lms.jpg')", // Ganti dengan path gambar Anda
                  filter: "grayscale(10%) brightness(0.8)",
                }}
              ></div>
              <img
                src="/images/lms/lms.jpg" // Ganti dengan gambar tangan di laptop yang sesuai.
                alt="Pengembangan LMS Kustom"
                className="w-full h-full object-cover rounded-lg" // Disembunyikan, menggunakan div di atas untuk simulasi desain
              />
            </div>

            {/* Kolom Kanan: Teks dan Fitur */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-blue-500">
                Pengembangan LMS Kustom
              </h1>
              <p className="text-xl mb-6 leading-relaxed">
                Tingkatkan Pembelajaran Anda dengan Learning Management System!
                Learning Management System (LMS) merupakan alat yang penting
                untuk organisasi yang ingin meningkatkan efektivitas
                pembelajaran dengan menawarkan berbagai fitur yang dapat
                membantu anda untuk menghemat waktu dan uang, meningkatkan
                keterlibatan pelajar, dan meningkatkan hasil belajar.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-green-600">
                Key Features:
              </h2>
              <ul
                className="text-xl ml-4 space-y-2 text-black"
                style={{ listStyleType: "disc" }}
              >
                {keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LMSPage;
