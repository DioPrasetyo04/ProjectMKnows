import Hero from "@/Components/hero";
import React from "react";

const ExecutiveCoachingPage = () => {
  const topikDitawarkan = [
    "Executive coaching",
    "Leadership coaching",
    "Business mentoring",
  ];

  return (
    <div className="bg-white text-white min-h-screen">
      {/* 1. Hero Section (Menggunakan Komponen Hero) */}
      <Hero
        imageUrl="images/executive-coaching/exe.jpg" // Ganti dengan gambar yang sesuai
        title="Executive Coaching & Business Mentoring"
        subtitle="Program ini bertujuan untuk membantu peserta dalam memperoleh pengetahuan dan keterampilan fungsional sehingga dapat mereka terapkan di tempat kerja khususnya bagi Anda yang memiliki Tim (punya anak buah)."
      />

      {/* 2. Tujuan Coaching - KODE REVISI */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            className="text-4xl font-bold mb-4 text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-green-400">Tujuan</span>{" "}
            <span className="text-blue-500">Coaching</span>
          </h2>
          <p className="text-2xl leading-relaxed max-w-7xl mx-auto text-center text-black">
            Mengatasi semua kesulitan yang dihadapi bawahan dalam mengerjakan
            tugas atau performance yang tidak mencapai dengan ketentuan yang
            diperintahkan sehingga daripada itu meningkatkan keahlian tertentu
            di dalam pekerjaan yang kita kerjakan untuk memberikan kepercayaan
            yang lebih besar dalam pekerjaan yang kita lakukan saat ini
          </p>
        </div>
      </section>

      {/* 3. Topik yang Ditawarkan - KODE REVISI (Perbaikan Latar Belakang & Tata Letak Gambar) */}
      <section className="py-4">
        <div className="container mx-auto px-6 lg:px-10">
          <div
            className="p-8 rounded-4xl shadow-xl"
            style={{ backgroundColor: "#02353c" }}
          >
            {/* Container Flexbox untuk Konten Teks dan Gambar */}
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              {/* Kolom Kiri: Konten Teks */}
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-white text-left">
                  Topik yang Ditawarkan
                </h2>
                <div className="max-w-xl">
                  <ol className="list-decimal list-inside ml space-y-2 text-2xl text-gray-200">
                    {topikDitawarkan.map((topik, index) => (
                      <li key={index} className="pl-2">
                        {topik}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-6 text-2xl text-left text-gray-300">
                    Untuk mengembangkan kompetensi dan keterampilan peserta
                    sehingga mampu menjadi sumber daya yang handal dalam
                    pencapaian target perusahaan.
                  </p>
                </div>
              </div>

              {/* Kolom Kanan: Gambar Ilustrasi */}
              <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
                {/* Ganti 'path/ke/gambar/anda.jpg' dengan path gambar yang sebenarnya */}
                <img
                  src="images/executive-coaching/coach.jpg"
                  alt=""
                  className="rounded-xl w-full max-w-sm lg:max-w-full h-auto object-cover"
                  style={{ maxHeight: "350px" }} // Atur tinggi maksimum agar tidak terlalu besar
                />
              </div>
            </div>
            {/* Akhir Container Flexbox */}
          </div>
        </div>
      </section>

      {/* Penutup Komponen: Ini adalah </div> untuk <div className="bg-white text-white min-h-screen"> */}
    </div>
  );
};

export default ExecutiveCoachingPage;
