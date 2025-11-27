import Digitalisasi from "@/Components/Digitalisasi";

const page = () => {
  return (
    <Digitalisasi
      imageSrc="/images/apps-dev/Banner.png"
      imageAlt="apps development images"
      title="Jasa Apps (mobile) Development"
      description="Temukan solusi pengembangan aplikasi berkualitas tinggi anda dengan biaya terjangkau! Dapatkan Konsultasi Gratis dengan Tim Ahli kami. Di era mobile ini, memiliki aplikasi mobile yang profesional adalah suatu kewajiban setiap bisnis, Karena aplikasi mobile dapat membantu anda untuk menjangkau lebih banyak pelanggan, meningkatkan penjualan, dan membangun brand awareness serta dapat digunakan untuk edukasi dan hiburan saat ini. Apps Development adalah proses pembuatan dan pemeliharaan aplikasi mobile yang menggunakan bahasa pemrograman dan alat untuk membuat aplikasi yang menarik, fungsional, dan mudah digunakan."
      count_features={6}
      features={[
        "Pembuatan aplikasi mobile (Desain UI/UX, Front End, Back End)",
        "Optimasi Kinerja Kecepatan",
        "Pengujian dan QA",
        "Pemeliharaan dan Dukungan Pembaruan Konten, Pemantauan Keamanan dan Perbaikan Bug",
        "Integrasi API dan Layanan Pihak Ketiga (pembayaran online, layanan email, dan lainnya)",
        "Konsultasi dan Pelatihan",
      ]}
    ></Digitalisasi>
  );
};

export default page;
