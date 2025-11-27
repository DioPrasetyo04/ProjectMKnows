const BrandConsultingPage = () => {
  const keyFeatures = [
    "Mengembangkan identitas merek yang kuat dan berkesan",
    "Menjangkau target audiens Anda dengan lebih efektif",
    "Meningkatkan loyalitas pelanggan dan meningkatkan penjualan",
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-[110px] pb-[10px]">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Kolom Kiri: Visual/Gambar */}
          <div className="lg:w-1/2 relative">
            <img
              src="/images/brand-consulting/brand.jpg" // Ganti dengan gambar yang sesuai di folder public
              alt="Brand Consulting"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Kolom Kanan: Teks dan Fitur */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-[#4697ce]">
              Brand Consulting
            </h1>
            <p className="text-2xl mb-6 leading-relaxed">
              Tingkatkan merek dan bisnis anda dengan Brand Consulting! Di era
              yang kompetitif ini, memiliki merek yang kuat dan berkesan sangat
              penting untuk kesuksesan bisnis. Brand consulting dapat membantu
              Anda untuk membangun merek yang dapat bersaing di pasar dan
              mencapai tujuan bisnis Anda. Konsultan merek kami yang
              berpengalaman bekerja sama dengan Anda untuk memahami target
              audiens Anda, mengembangkan identitas merek yang unik, dan
              menciptakan strategi pemasaran yang efektif. Kami dapat membantu
              Anda untuk:
            </p>

            <h2 className="text-3xl font-semibold mb-3 text-green-600">
              Key Features:
            </h2>
            <ul className="list-disc ml-5 space-y-2 text-black">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="text-2xl">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandConsultingPage;
