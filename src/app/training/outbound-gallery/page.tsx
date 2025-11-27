// app/outbound/page.tsx
import Footer from "@/Components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import InfoBubble from "@/components/InfoBubble";
import VideoThumb from "@/components/VideoThumb";

// import hero1 from "/images/outbound-1.jpg";
// import hero1 from "/images/Outbound(1).jpeg";
// import hero2 from "/images/Outbound(1).jpeg";
// import hero3 from "/images/Outbound(2).jpeg";
// import hero4 from "/images/Outbound(3).jpeg";
// import hero5 from "/images/Outbound(4).jpeg";

// import img2 from "/images/Daleman(1).jpeg";
// import img3 from "/images/Daleman(2).jpeg";
// import img4 from "/images/Daleman(3).jpeg";
// import img5 from "/images/Daleman(4).jpeg";
// import img6 from "/images/Daleman(5).jpeg";

export default function OutboundPage() {
  const slides = [
    {
      image: "/images/outbound-and-event/outbound-1.jpg",
      subtitle: "Fun in Nature, Growth in Action!",
    },
    {
      image: "/images/outbound-and-event/Outbound(1).jpeg",
      subtitle: "Fun in Nature, Growth in Action!",
    },
    {
      image: "/images/outbound-and-event/Outbound(2).jpeg",
      subtitle: "Fun in Nature, Growth in Action!",
    },
    {
      image: "/images/outbound-and-event/Outbound(3).jpeg",
      subtitle: "Fun in Nature, Growth in Action!",
    },
    {
      image: "/images/outbound-and-event/Outbound(4).jpeg",
      subtitle: "Fun in Nature, Growth in Action!",
    },
  ];

  const vManagement = "/videos/management.mp4";
  const vDrone = "/videos/drone.mp4";
  const vOffroad = "/videos/offroad.mp4";
  const vMotivasi = "/videos/motivasi.mp4";
  const vGathering = "/videos/gathering.mp4";

  return (
    <>
      <HeroCarousel
        slides={slides}
        interval={2000}
        title="Outbound &amp; Gathering M-Knows Consulting"
        fullPage
        headerOffset={80}
      />

      <section className="full-bleed py-10 md:py-12">
        <div className="px-0 space-y-8 md:space-y-10">
          {/* ROW 1 */}
          <div className="grid items-stretch gap-y-8 gap-x-8 grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <VideoThumb
                title="Management Training Program"
                image="/images/outbound-and-event/Daleman(1).jpeg"
                videoSrc={vManagement}
                fit="fill"
                className="h-full"
              />
            </div>
            <div className="lg:col-span-6">
              <InfoBubble
                color="blue"
                size="xxl"
                className="h-full min-h-[220px] mx-[1cm]"
              >
                Outbound merupakan jenis latihan yang memanfaatkan keunggulan
                alam (outdoor) untuk membangun kerja sama tim dan pengembangan
                diri yang disimulasikan dalam outbound training melalui
                permainan-permainan yang edukatif, baik dilakukan secara
                individu maupun kelompok.
              </InfoBubble>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid items-stretch gap-y-8 gap-x-8 grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <InfoBubble
                color="green"
                size="xxl"
                className="h-full min-h-[220px] mx:[1cm] mx-[1cm]"
              >
                Paket Outbound yang ditawarkan M-Knows Consulting bukan hanya
                berupa tantangan fisik dan mental, tetapi juga tantangan
                intelegensia. Program dilakukan melalui permainan/kegiatan yang
                membantu membentuk karakter agar menjadi individu yang lebih
                baik atau positif.
              </InfoBubble>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <VideoThumb
                title="Drone Video"
                image="/images/outbound-and-event/Daleman(2).jpeg"
                videoSrc={vDrone}
                fit="fill"
                className="h-full"
              />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid items-stretch gap-y-8 gap-x-8 grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <VideoThumb
                title="Fun Offroad"
                image="/images/outbound-and-event/Daleman(3).jpeg"
                videoSrc={vOffroad}
                fit="fill"
                className="h-full"
              />
            </div>
            <div className="lg:col-span-6">
              <InfoBubble
                color="blue"
                size="xxl"
                className="h-full min-h-[220px] mx-[1cm]"
              >
                Outbound sangat baik untuk perusahaan maupun instansi yang ingin
                meningkatkan kualitas kerja; menumbuhkan kreativitas,
                kepemimpinan, kerja sama tim, kebersamaan, rasa saling percaya,
                dan tanggung jawab.
              </InfoBubble>
            </div>
          </div>

          {/* ROW 4 */}
          <div className="grid items-stretch gap-y-8 gap-x-8 grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <InfoBubble
                color="green"
                size="xxl"
                className="h-full min-h-[220px] mx-[1cm]"
              >
                Melalui kegiatan outbound training yang menyenangkan, para
                karyawan dapat mengambil banyak pelajaran yang nantinya
                diterapkan untuk meningkatkan kinerja.
              </InfoBubble>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <VideoThumb
                title="Motivasi Outbound"
                image="/images/outbound-and-event/Daleman(4).jpeg"
                videoSrc={vMotivasi}
                fit="fill"
                className="h-full"
              />
            </div>
          </div>

          {/* ROW 5 */}
          <div className="grid items-stretch gap-y-8 gap-x-8 grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <VideoThumb
                title="Family & Employee Gathering"
                image="/images/outbound-and-event/Daleman(5).jpeg"
                videoSrc={vGathering}
                fit="fill"
                className="h-full"
              />
            </div>
            <div className="lg:col-span-6">
              <InfoBubble
                color="blue"
                size="xxl"
                className="h-full min-h-[220px] mx-[1cm]"
              >
                Tersedia beberapa pilihan paket training yang akan kami
                kustomisasi. Setiap paket memiliki durasi dan kegiatan yang
                berbeda (dari singkat hingga program mendalam), serta dapat
                disesuaikan dengan kebutuhan kelompok/instansi.
              </InfoBubble>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
