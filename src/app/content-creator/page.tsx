import Image from 'next/image';

export default function ContentCreatorPage() {
  const keyFeatures = [
    "Penulisan Konten (Artikel, blog, Konten website, E-book, iklan dan landing page)",
    "Desain Grafis (Infografis, media sosial, banner, iklan digital, Dan Desain presentasi)",
    "Produksi Video dan Animasi",
    "Fotografi produk, acara, Editing dan retouching foto",
    "Podcast Production",
    "Pengembangan Konten Interaktif dan media sosial",
    "Konsultasi Strategi Konten"
  ];

  return (
    <div className="container mx-auto my-12 p-6">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Kolom Gambar */}
        <div className="lg:w-1/2">
            <div className="relative w-full max-h-[600px] rounded-lg shadow-lg overflow-hidden">
                <Image
                src="/content-creator.png" 
                alt="Content Creator"
                width={600}  // Sebaiknya ganti ke lebar asli gambar lae
                height={750} // Sebaiknya ganti ke tinggi asli gambar lae (saya tebak 750)
                className="object-cover w-full h-full" // Gambar akan mengisi div pembungkus
                />
            </div>
        </div>

        {/* Kolom Teks */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Content Creator
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Tingkatkan Bisnis anda dengan Content Creation yang Berkualitas Tinggi! Content Creation merupakan alat penting untung bisnis yang sukses. Konten yang berkualitas tinggi dapat membantu anda untuk menarik dan mempertahankan audiens dan meningkatkan brand awareness pelanggan.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Kami merupakan tim content creator berpengalaman yang dapat membantu anda untuk membuat konten yang menarik, informatif, dan sesuai dengan target audiens. Kami menawarkan berbagai layanan content creation seperti penulisan artikel dan blog post, pembuatan video, desain infografis, copywriting, editing, dan proofreading.
          </p>

          <h2 className="text-xl font-bold text-green-600 mb-4">
            Key Features:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}