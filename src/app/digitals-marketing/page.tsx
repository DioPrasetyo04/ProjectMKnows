import Digitalisasi from "../../Components/Digitalisasi";

const page = () => {
  return (
    <Digitalisasi
      imageSrc="/images/digital-mar/digital-marketing.png"
      imageAlt="digital marketing images"
      title="Digital Marketing"
      description="Tingkatkan Bisnis anda dengan Digital Consulting! Dalam era digital ini, Digital Consulting dapat membantu anda untuk meningkatkan visibilitas online anda, menjangkau lebih banyak pelanggan, dan meningkatkan penjualan online anda. Konsultan digital kami yang berpengalaman bekerja sama dengan Anda untuk mengembangkan strategi digital yang efektif, mengoptimalkan situs web dan kehadiran online Anda, dan meningkatkan hasil pemasaran digital Anda"
      count_features={4}
      features={[
        "Meningkatkan Visibilitas Online",
        "Menarik lebih banyak pengunjung ke situs web",
        "Meningkatkan konversi dan menghasilkan lebih banyak penjualan online",
        "Meningkatkan Return on Investment (ROI)",
      ]}
    ></Digitalisasi>
  );
};

export default page;
