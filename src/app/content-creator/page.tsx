import Image from "next/image";

export default function ContentCreatorPage() {
  const keyFeatures = [
    "Penulisan Konten (Artikel, blog, Konten website, E-book, iklan dan landing page)",
    "Desain Grafis (Infografis, media sosial, banner, iklan digital, Dan Desain presentasi)",
    "Produksi Video dan Animasi",
    "Fotografi produk, acara, Editing dan retouching foto",
    "Podcast Production",
    "Pengembangan Konten Interaktif dan media sosial",
    "Konsultasi Strategi Konten",
  ];

  return (
    <div className="mx-auto pt-[150px] p-6 text-xl">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Kolom Gambar */}
        <div className="lg:w-2/5 flex justify-center items-center mx-auto">
          <div className="relative w-full max-h-[600px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/content-creator/content-creator.png"
              alt="Content Creator"
              width={600}
              height={750}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="lg:w-5/5">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Content Creator
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed text-xl text-justify">
            Tingkatkan Bisnis anda dengan Content Creation yang Berkualitas
            Tinggi! Content Creation merupakan alat penting untung bisnis yang
            sukses. Konten yang berkualitas tinggi dapat membantu anda untuk
            menarik dan mempertahankan audiens dan meningkatkan brand awareness
            pelanggan.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-xl text-justify">
            Kami merupakan tim content creator berpengalaman yang dapat membantu
            anda untuk membuat konten yang menarik, informatif, dan sesuai
            dengan target audiens. Kami menawarkan berbagai layanan content
            creation seperti penulisan artikel dan blog post, pembuatan video,
            desain infografis, copywriting, editing, dan proofreading.
          </p>

          <h2 className="text-2xl font-bold text-green-600 mb-2">
            Key Features:
          </h2>
          <ul className="list-decimal list-outside ml-6 space-y-2 text-gray-700 text-xl">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
