import Image from 'next/image';

export default function AboutUsPage() {
  const konsultasiList = [
    "MT & MDP Program",
    "Sales to Service S.O.P Development to Execution (Guidebook)",
    "Performance Management System & Implementation",
    "Competency Assessment",
    "Grading System & Implementation",
    "Corporate Culture Dsvn Implementation"
  ];

  const assessmentList = [
    "Analytical Thinking Competency",
    "Credit analysis Competency",
    "Market analysis Competency",
    "Leadership, Managerial, & Supervisory Competencies",
    "Problem Solving & Decision Making",
    "Business Presentation Competency",
    "Team Cohesion & Leadership Competency"
  ];

  return (
    // Latar belakang abu-abu untuk halaman
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        
        {/* Bagian 1: M-Knows Consulting Intro (Sudah Benar) */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md"> 
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <Image 
                  src="/about1.png"
                  alt="M-Knows Team" 
                  width={600} 
                  height={400}
                  className="rounded-lg" 
                />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">M-Knows Consulting</h1>
                <p className="text-gray-600 mb-3">
                  M-Knows Consulting adalah merk yang dipakai bersama oleh PT. Menara Indonesia dan PT. Menara Pengetahuan Indonesia...
                </p>
                <p className="text-gray-600 mb-3">
                  M-Knows beroperasi di Indonesia, perusahaan yang bergerak dalam bidang jasa pendidikan dan konsultasi...
                </p>
                <p className="text-gray-600">
                  Sejak berdiri, M-Knows Consulting telah sukses bekerjasama dengan beragam perusahaan nasional dan multinasional...
                </p>
              </div>
            </div>
          </div> 
        </section>

        {/* Bagian 2: Jenis Konsultasi (Gambar & Teks di dalam Card) */}
        <section className="mb-16">
          {/* Tambahkan Card Pembungkus Luar */}
          <div className="bg-white p-8 rounded-lg shadow-md"> 
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              
              {/* Kolom Gambar */}
              <div className="md:w-1/2 flex justify-center">
                <Image 
                  src="/about2.png"
                  alt="Clipboard List" 
                  width={300} 
                  height={400}
                />
              </div>

              {/* Kolom Teks (Hapus kelas card dari sini) */}
              <div className="md:w-1/2"> 
                <h2 className="text-2xl font-bold mb-4">Jenis konsultasi yang sering diambil klien meliputi:</h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700">
                  {konsultasiList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Assessment for Technical Competency</h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700">
                  {assessmentList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bagian 3: Program Pelatihan (Gambar & Teks di dalam Card) */}
        <section className="mb-16">
          {/* Tambahkan Card Pembungkus Luar */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              
              {/* Kolom Gambar */}
              <div className="md:w-1/2">
                <Image 
                  src="/about3.png"
                  alt="Training Skills" 
                  width={600} 
                  height={400}
                  className="rounded-lg"
                />
              </div>

              {/* Kolom Teks (Hapus kelas card dari sini) */}
              <div className="md:w-1/2">
                <p className="text-gray-600 mb-3">
                  Program pelatihan unggulan yang banyak di ambil klien M-Knows antara lain: Sales, Marketing, Retail...
                </p>
                <p className="text-gray-600">
                  Kami pastikan model pelatihan kontemporer, lebih baik dibandingkan pendahulunya yang klasik dan konservatif. We are strong in "activity based learning".
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}