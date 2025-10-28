import Image from 'next/image';

export default function HistoryPage() {
  return (
    <div 
      className="relative py-16 md:py-24 bg-cover bg-center" // Padding atas/bawah
      style={{ backgroundImage: "url('/history-background.png')" }} 
    >
      {/* Overlay gelap agar teks terbaca */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten ditaruh di container relatif */}
      <div className="relative container mx-auto px-4">
        
        {/* 1. Judul di luar Card, langsung di atas background */}
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Sejarah M-Knows Consulting
        </h1>

        {/* 2. Card Pembungkus Utama DIHAPUS */}
        
        {/* Card 1: Bagian 1: Pendirian */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/history1.png" // Asumsi ini ikon Gedung
                alt="Ikon Pendirian"
                width={48}
                height={48}
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                M-Knows Consulting didirikan pertama kali pada bulan Juni 2003 dan berlokasi di Petogogan Jakarta, dan pada tahun 2005 pindah ke Jl. Radio 4 No. 8B Kebayoran Baru Jakarta Selatan. Tahun 2008, M-Knows Consulting membuka kantor cabangnya di Surabaya yang berlokasi Jl. Raya Darmo Permai III sampai dengan sekarang. Tahun 2020 M-Knows membuka kantor untuk produksi solusi digital di jalan raya Cirendeu no 6f Tangerang Selatan.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Bagian 2: Perkembangan */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/history2.png" // Asumsi ini ikon Handshake
                alt="Ikon Perkembangan"
                width={48}
                height={48}
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Sejak berdiri, M-Knows Consulting telah sukses bekerjasama dengan beragam perusahaan nasional dan multinasional, dengan kualitas kerja yang memuaskan, dibuktikan dengan tingginya repeat order dan customer yang loyal.
              </p>
            </div>
          </div>
        </div>
        
        {/* Card 3: Bagian 3: Layanan Awal */}
        {/* Di desain lae ada 4 card, tapi teksnya duplikat. Saya pakai 3 card sesuai kode kita ya */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto mb-8"> 
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/history3.png" // Asumsi ini ikon Lightbulb
                alt="Ikon Layanan Awal"
                width={48}
                height={48}
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Di awal berdirinya, jasa yang diberikan, kebanyakan berupa education & learning services, yang dibungkus dalam bentuk solusi Consulting Services, Public Training, In-house Training, dan Outbound & Team Building, sebelum mulai memberikan layanan solusi digital. Dalam kaitannya dengan Education & Learning Services sering kali menjadi merupakan bagian tak terpisahkan dari solusi konsultasi manajemen yang diberikan.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}