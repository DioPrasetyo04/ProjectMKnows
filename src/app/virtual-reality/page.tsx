import Image from 'next/image';

export default function VirtualRealityPage() {
  const keyFeatures = [
    "Fleksibilitas",
    "Aksesibilitas",
    "Biaya Murah",
    "Beragam",
    "Interaksi Global"
  ];

  return (
    <div className="container mx-auto my-12 p-6">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Kolom Gambar */}
        <div className="lg:w-1/2">
            <div className="relative w-full max-h-[600px] rounded-lg shadow-lg overflow-hidden">
            <Image
            src="/virtual-reality.png" 
            alt="Virtual Reality Learning"
            width={600}  // Sebaiknya ganti ke lebar asli gambar lae
            height={750} // Sebaiknya ganti ke tinggi asli gambar lae (saya tebak 750, sama seperti Content Creator)
            className="object-cover w-full h-full" // Gambar akan mengisi div pembungkus
            />
            </div>
        </div>

        {/* Kolom Teks */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Virtual Reality
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Temukan Masa Depan Pembelajaran dengan Virtual Learning! Virtual Learning merupakan jenis pembelajaran yang berkembang pesat yang menawarkan berbagai keuntungan bagi pelajar dari segala usia dan latar belakang. Dengan virtual learning, anda dapat belajar kapan saja dan dimana saja dengan berbagai perangkat.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Virtual Learning menawarkan berbagai jenis pembelajaran termasuk kursus online, Pelatihan, dan program pengembangan diri yang sesuai dengan minat dan kebutuhan anda. Keuntungan Virtual Learning!
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