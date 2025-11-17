// app/lms/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>

      {/* ===== HERO (tetap) ===== */}
      <section className="relative isolate">
        <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
          <Image
            src="/images/lms-1.jpg"
            alt="Learning Management System"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 grid place-items-center px-4">
            <h1 className="text-center font-extrabold text-white text-4xl md:text-6xl leading-tight">
              <span className="text-[#B9F443]">Learning Management</span>{" "}
              <span className="text-[#4697CE]">System</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ===== BUBBLE 1 — font JUMBO ===== */}
      <section className="bg-[#EAF7F0] py-12 md:py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-none bg-white ring-4 ring-brand-green shadow-lg p-6 md:p-10">
            <div className="grid md:grid-cols-2 items-stretch gap-8 md:gap-10">
              {/* Teks */}
              <div className="h-full">
                <h2 className="text-6xl md:text-7xl font-extrabold text-brand-green">
                  LMS
                </h2>
                <div className="mt-8 space-y-7 text-slate-700 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.9] text-justify">
                  <p>
                    Kami menghadirkan <strong>Learning Management System (LMS)</strong> yang
                    dirancang untuk memberikan fleksibilitas dan efisiensi dalam kegiatan
                    belajar, baik untuk pendidikan formal maupun pelatihan profesional. LMS
                    kami mendukung pengelolaan materi pembelajaran dalam berbagai format,
                    seperti teks dan video, sehingga Anda dapat menyesuaikan konten sesuai
                    kebutuhan.
                  </p>
                  <p>
                    Selain itu, LMS ini memungkinkan pelaksanaan pembelajaran secara
                    <em> sinkronus (real-time)</em> maupun <em>asinkronus (belajar mandiri)</em>.
                    Dengan desain yang kompatibel untuk perangkat seluler, pengguna dapat
                    mengakses sistem ini kapan saja dan di mana saja, memastikan pengalaman
                    belajar yang seamless dan mudah diintegrasikan dalam aktivitas sehari-hari.
                    Kami juga menyediakan layanan personalisasi desain yang memungkinkan tampilan
                    LMS disesuaikan dengan identitas perusahaan Anda.
                  </p>
                  <p>
                    Untuk memberikan kemudahan lebih lanjut, LMS ini dikembangkan berbasis
                    website, sehingga menjadi solusi praktis dan efektif bagi implementasi
                    <em> e-learning</em> di lingkungan perusahaan Anda. Bersama kami, wujudkan
                    pembelajaran yang lebih efektif dan terstruktur untuk mendukung pertumbuhan
                    dan kesuksesan organisasi Anda. Hubungi kami sekarang untuk diskusi lebih
                    lanjut atau mencoba demo gratis.
                  </p>
                </div>
              </div>

              {/* Gambar (match height ke teks jumbo) */}
              <div className="relative h-80 md:h-full md:min-h-[520px] rounded-xl overflow-hidden">
                <Image
                  src="/images/lms-2.jpg"
                  alt="Tim berkolaborasi menggunakan LMS"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUBBLE 2 — Digital Learning Content (font JUMBO) ===== */}
      <section className="py-12 md:py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-none bg-white ring-4 ring-brand-green shadow-lg p-6 md:p-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-brand-green text-center">
              Digital Learning Content
            </h2>

            <div className="mt-10 grid md:grid-cols-2 items-stretch gap-8 md:gap-10">
              {/* Gambar */}
              <div className="relative h-80 md:h-full md:min-h-[520px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/lms-3.jpg"
                  alt="Digital Learning Content"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
              </div>

              {/* Teks */}
              <div className="h-full space-y-10 text-slate-700 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.9]">
                <div>
                  <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">
                    Modul Interaktif
                  </h3>
                  <p className="mt-3 text-justify">
                    Modul pembelajaran yang kami kembangkan mengacu pada konsep
                    <em> Activity Based Learning</em> dengan memperhatikan level interaktif
                    dari setiap informasi yang perlu disampaikan.
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">
                    Penggunaan Grafis
                  </h3>
                  <p className="mt-3 text-justify">
                    Grafis digunakan untuk menarik lebih banyak perhatian peserta dalam
                    pembelajaran. Kami dapat memberi Anda grafis dalam bentuk 2D, 3D,
                    <em> still</em> atau bergerak tergantung pada kebutuhan instruksional Anda.
                  </p>
                </div>

                <div className="grid gap-7">
                  <div>
                    <h4 className="text-4xl md:text-[40px] font-semibold text-brand-green">
                      Interaktivitas Level 1
                    </h4>
                    <p className="mt-2 text-justify">
                      Modul E-Learning Interaktif dengan metode <em>Show &amp; Tell</em> untuk
                      menyampaikan informasi seperti pengetahuan produk, kebijakan, aturan,
                      prosedur, fakta, dll.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl md:text-[40px] font-semibold text-brand-green">
                      Interaktivitas Level 2
                    </h4>
                    <p className="mt-2 text-justify">
                      Modul E-Learning Interaktif dengan strategi penyampaian
                      <em> Explanatory</em> untuk menyampaikan konsep dan pengetahuan yang lebih
                      dalam dengan dukungan ilustrasi grafis.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl md:text-[40px] font-semibold text-brand-green">
                      Interaktivitas Level 3
                    </h4>
                    <p className="mt-2 text-justify">
                      Modul E-Learning Interaktif dengan strategi penyampaian
                      <strong> Pengalaman</strong> untuk mencapai pemahaman maksimal atas suatu
                      pengetahuan melalui simulasi skenario kasus nyata.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BUBBLE 3 — Instructional Video (font JUMBO) ===== */}
      <section className="py-12 md:py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-none bg-white ring-4 ring-brand-green shadow-lg p-6 md:p-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-brand-green text-center">
              Instructional Video
            </h2>

            <div className="mt-10 grid md:grid-cols-2 items-stretch gap-8 md:gap-10">
              {/* Teks */}
              <div className="h-full space-y-10 text-slate-700 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.9]">
                <p className="text-justify">
                  Video pembelajaran merupakan alternatif lain untuk mengefektifkan kegiatan
                  pembelajaran. Jenis video yang kami sediakan adalah <strong>video live action</strong>
                  atau <strong>video animasi</strong> tergantung kebutuhan instruksional Anda.
                </p>

                <div>
                  <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">Animasi 2D</h3>
                  <p className="mt-3 text-justify">
                    Video penjelasan animasi untuk menyampaikan informasi seperti tutorial program atau
                    platform dan informasi lainnya dengan bantuan host karakter animasi serta ilustrasi animasi.
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">3D Animation</h3>
                  <p className="mt-3 text-justify">
                    Video animasi 3D untuk menyampaikan informasi seperti tutorial program atau platform dan
                    informasi lainnya dengan bantuan host karakter 3D dan animasi 3D.
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">Live Action</h3>
                  <p className="mt-3 text-justify">
                    Video aksi langsung profesional untuk tutorial atau konsep video wawancara dengan
                    sinematografi menengah dan animasi grafis gerak.
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">Video Penjelasan</h3>
                  <p className="mt-3 text-justify">
                    Video penjelasan dengan menggunakan grafis gerak sederhana untuk menyampaikan informasi
                    seperti pengetahuan produk, kebijakan, aturan, prosedur, fakta, dan lainnya.
                  </p>
                </div>
              </div>

              {/* Gambar */}
              <div className="relative h-80 md:h-full md:min-h-[520px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/lms-4.jpg"
                  alt="Produksi video pembelajaran"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA All Videos (biarkan seperti sebelumnya) ===== */}
      <section className="relative bg-brand-navy pt-16 md:pt-24 pb-0 text-white overflow-hidden -mb-px">
        <div className="pointer-events-none absolute -left-24 top-10 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">All Videos</h3>
          <p className="mt-2 opacity-90 text-[16.5px] md:text-[17px]">
            Jelajahi contoh video pembelajaran & portofolio kami
          </p>
          <div className="mt-8 grid place-items-center gap-5">
            <div className="h-24 w-24 rounded-full bg-white/10 ring-1 ring-white/25 grid place-content-center">
              <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </div>
            <Link
              href="/videos"
              className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-medium hover:bg-white/10"
            >
              ALL VIDEOS +
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
