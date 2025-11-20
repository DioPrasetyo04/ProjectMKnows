import Digitalisasi from "../../Components/Digitalisasi";

const page = () => {
  return (
    <Digitalisasi
      imageSrc="/images/game-dev/game-developer.png"
      imageAlt="game development images"
      title="Pengembangan Game 2D & 3D"
      description="Temukan Dunia Game 2D dan 3D yang sempurna untuk anda! Game 3D menawarkan grafik yang realistis dan dunia yang imersif yang akan membuat Anda merasa seperti berada di dalam game. Game 2D menawarkan gameplay yang lebih sederhana dan mudah dipelajari, sehingga cocok untuk pemula. Kami memiliki koleksi game 3D dan 2D yang luas untuk dipilih, termasuk game aksi, petualangan, teka-teki, dan strategi. Anda juga dapat menemukan game gratis untuk diunduh."
      count_features={7}
      features={[
        "Desain dan Konsep Game",
        "Pemrograman Game 2D & 3D",
        "Sound, Voice, Dialog & Music",
        "Pengujian, optimasi dan QA",
        "Publishing dan Marketing",
        "Pengembangan game berbasis augmented reality (AR) dan virtual reality (VR)",
        "Konsultasi dan Pelatihan",
      ]}
    ></Digitalisasi>
  );
};

export default page;
