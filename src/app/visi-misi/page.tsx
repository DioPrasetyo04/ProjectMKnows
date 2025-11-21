"use client";

const Page = () => {
  return (
    // 1. Ini adalah INDUK UTAMA dengan gambar background
    <div
      className="relative text-white font-[Montserrat] bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/visi_misi/halaman.png')" }}
    >
      {/* 2. Ini adalah OVERLAY HITAM 54% */}
      {/* Ini akan duduk di atas gambar, tapi di bawah konten */}
      <div className="absolute inset-0 bg-black/[.54]" aria-hidden="true"></div>
      {/* 3. NAVBAR Anda biarkan di sini. */}
      {/* Karena sudah 'fixed' dan 'z-[1000]', dia akan selalu di atas. */}
      <header className="w-full h-[100px] px-[60px] py-3 flex items-center justify-between bg-[#083b44] text-white fixed top-0 left-0 right-0 z-[1000] shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
        <div className="logo">
          <img
            src="logos/M-Knows.png"
            alt="M-Knows Consulting"
            className="h-[50px] object-contain"
          />
        </div>
        <nav className="flex gap-[2cm]">
          <a
            href="#"
            className="text-white text-[20px] font-normal hover:text-[#d1e7e0] transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-[20px] font-normal hover:text-[#d1e7e0] transition-colors duration-300"
          >
            New Training
          </a>
          <a
            href="#"
            className="text-white text-[20px] font-normal hover:text-[#d1e7e0] transition-colors duration-300"
          >
            Our Services
          </a>
          <a
            href="#"
            className="text-white text-[20px] font-normal hover:text-[#d1e7e0] transition-colors duration-300"
          >
            More
          </a>
        </nav>
      </header>
      {/* 4. INI WRAPPER KONTEN ANDA */}
      {/* SEMUA sisa konten halaman (hero, main, footer) masuk ke sini */}
      <div className="relative">
        <section className="hero text-center pt-[20px] pb-[20px] px-[20px] mt-[100px] text-white font-montserrat">
          <h2 className="text-[64px] font-bold mt-[80px] max-md:text-[48px]">
            Vision & Mission
          </h2>
          <p className="text-[48px] font-bold mt-[10px] max-md:text-[32px]">
            What We Believe
          </p>
        </section>

        <main className="font-montserrat">
          {/* VISI & MISI */}
          <section className="visi-misi py-[60px] px-[20px] md:px-[60px] flex flex-col items-center gap-[40px]">
            {/* VISI CARD */}
            <div className="card bg-white/80 text-black p-[30px] w-full max-w-[1300px] border border-white/40 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col justify-center text-left">
              <h3 className="text-center text-[40px] font-bold mb-[20px] text-black max-md:text-[28px]">
                VISI
              </h3>
              <div className="space-y-[8px] font-poppins">
                <p className="leading-relaxed text-[28px] max-md:text-[20px] text-justify">
                  Menjadikan M-Knows Consulting sebagai one stop solution dalam
                  kegiatan konsultasi manajemen sumber daya manusia, solusi
                  digital dan penyelenggaraan pelatihan, yang menekankan
                  pendekatan HIGH IMPACT (custom-aplikatif) – CUTTING EDGE
                  (Kontemporer-Berbasis riset lapangan), dan FUN
                  (Energik-Menyenangkan), guna peningkatan kemampuan sumber daya
                  manusia di Indonesia.
                </p>
              </div>
            </div>

            {/* MISI CARD */}
            <div className="card bg-white/80 text-black p-[30px] w-full max-w-[1300px] border border-white/40 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col justify-center text-left">
              <h3 className="text-center text-[40px] font-bold mb-[20px] text-black max-md:text-[28px]">
                MISI
              </h3>
              <ul className="list-disc ml-[25px] leading-relaxed text-[28px] max-md:text-[20px] space-y-[12px] font-poppins">
                <li>
                  Memberikan pelayanan terbaik dalam penyelenggaraan jasa
                  layanan, sesuai dengan kompetensi M-Knows.
                </li>
                <li>
                  Membangun secara berkelanjutan kemampuan dan kompetensi
                  perusahaan dalam memberikan solusi baru, baik para konsultan
                  maupun unit pendukungnya.
                </li>
                <li>
                  Memberikan peningkatan kesejahteraan dan ruang bagi
                  pengembangan kompetensi diri setiap individu yang bekerja di
                  M-Knows Consulting.
                </li>
              </ul>
            </div>
          </section>

          {/* NILAI-NILAI */}
          <section className="values text-center py-[80px] px-[20px] text-white">
            <h3 className="text-[64px] font-bold mb-[40px] max-md:text-[40px]">
              NILAI-NILAI PERUSAHAAN:
            </h3>
            <div className="value-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] justify-items-center items-start">
              {[
                {
                  img: "images/visi_misi/trust.png",
                  title: "Trustworthy & Loyalty",
                  desc: "Dapat dipercaya dan memiliki loyalitas",
                },
                {
                  img: "images/visi_misi/work.png",
                  title: "Working Together",
                  desc: "Bekerja Bersama",
                },
                {
                  img: "images/visi_misi/learn.png",
                  title: "Learning Environment",
                  desc: "Lingkungan Pembelajaran",
                },
                {
                  img: "images/visi_misi/customers.png",
                  title: "Customer Intimacy",
                  desc: "Kedekatan hubungan dengan pelanggan",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="value-item flex flex-col items-center justify-center text-center"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[120px] sm:w-[150px] mb-[15px]"
                  />
                  <h4 className="text-[24px] font-bold mt-[20px] mb-[5px]">
                    {item.title}
                  </h4>
                  <p className="text-[20px] leading-tight max-w-[300px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>{" "}
      {/* <-- Ini adalah penutup untuk <div className="relative"> */}
    </div> // <-- Ini adalah penutup untuk <div> utama
  );
};

export default Page;
