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
                  width={650} 
                  height={750}
                  className="rounded-lg" 
                />
              </div>
              <div className="md:w-3/5">
                <h1 className="text-3xl font-bold mb-4">M-Knows Consulting</h1>
                <p className="text-gray-600 mb-3 text-2xl">
                  M-Knows Consulting adalah merk yang dipakai bersama oleh PT. Menara Indonesia dan PT. Menara Pengetahuan Indonesia. PT. Menara Indonesia adalah perusahaan yang menjalankan jasa konsultasi manajemen dan pembuatan solusi digital, seperti aplikasi pendidikan (web dan app), solusi artificial intelligence untuk industri keuangan dan pendidikan, serta solusi virtual reality dan pembuatan game yang merupakan induk perusahaan dari PT. Menara Pengetahuan Indonesia,  perusahaan yang bergerak dalam bidang jasa pendidikan dan pelatihan, berkantor pusat di Jakarta dan memiliki cabang di Surabaya.</p>
                <p className="text-gray-600 text-2xl">
                  Sejak berdiri, M-Knows Consulting telah sukses bekerjasama dengan beragam perusahaan nasional dan multinasional, dengan kualitas kerja yang memuaskan, dibuktikan dengan tingginya repeat order dan customer yang loyal Melalui cabang Jakarta & Surabaya, M-Knows Consulting telah sukses melayani beragam perusahaan dengan kualitas kerja yang memuaskan, sesuai keahliannya dan pendekatan konsultasi yang menekankan pada sifat Applicative, Contemporary, High Impact,  Fun & Motivational.
                </p>
              </div>
            </div>
          </div> 
        </section>

        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md"> 
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              
              {/* Kolom Gambar */}
              <div className="md:w-1/2 flex justify-center">
                <Image 
                  src="/about2.png"
                  alt="Clipboard List" 
                  width={650} 
                  height={750}
                />
              </div>

              {/* Kolom Teks (Hapus kelas card dari sini) */}
              <div className="md:w-1/2"> 
                <h2 className="text-4xl font-bold mb-4">Jenis konsultasi yang sering diambil klien meliputi:</h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700 text-2xl">
                  {konsultasiList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                
                <h2 className="text-4xl font-bold mt-8 mb-4">Assessment for Technical Competency</h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700 text-2xl">
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
              <div className="md:w-3/5">
                <Image 
                  src="/about3.png"
                  alt="Training Skills" 
                  width={600} 
                  height={400}
                  className="rounded-lg"
                />
              </div>

              {/* Kolom Teks (Hapus kelas card dari sini) */}
              <div className="md:w-3/5">
                <p className="text-gray-600 mb-3 text-3xl">
                  Program pelatihan unggulan yang banyak di ambil klien M-Knows antara lain meliputi topik: Marketing, Sales Distribution, Service, Leadership, Managerial, Supervisory, Credit Management, Debt Collection, Filing, Office, 5S & Warehouse Management, Finance & Banking, Persiapan Pensiun, Train The Trainers, Presentation Skills, Communication Skills, Negotiation Skills, Achievement Motivation & Soft Skills lainnya.
                </p>
                <p className="text-gray-600 text-3xl">
                  Kami pastikan model pelatihan kontemporer, lebih baik dibandingkan pendekatan yang klasik dan konservatif. We Are Strong In “Activity Based Learning”.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}