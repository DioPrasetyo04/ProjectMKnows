import React from "react";

const LMSPage = () => {
  const keyFeatures = [
    "Modul Pembelajaran dan Konten",
    "Audit, Pengujian dan QA",
    "Pemeliharaan dan Dukungan",
    "Konsultasi dan Pelatihan",
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-[80px] lg:pt-[120px]">
      <main className="py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Kolom Kiri – Gambar */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/images/lms-pengembangan/lms.jpg"
                alt="Pengembangan LMS Kustom"
                className="
                  w-full
                  max-w-sm
                  rounded-lg 
                  shadow-2xl 
                  object-cover
                "
              />
            </div>

            {/* Kolom Kanan – Teks */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-[#4697ce]">
                Pengembangan LMS Kustom
              </h1>

              <p className="text-base md:text-xl mb-6 leading-relaxed text-justify">
                Tingkatkan Pembelajaran Anda dengan Learning Management System!
                Learning Management System (LMS) merupakan alat yang penting
                untuk organisasi yang ingin meningkatkan efektivitas
                pembelajaran dengan menawarkan berbagai fitur yang dapat
                membantu anda untuk menghemat waktu dan uang, meningkatkan
                keterlibatan pelajar, dan meningkatkan hasil belajar.
              </p>

              <h2 className="text-xl md:text-3xl font-semibold mb-4 text-green-600">
                Key Features:
              </h2>

              <ul className="text-base md:text-xl ml-4 space-y-2 list-disc">
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
