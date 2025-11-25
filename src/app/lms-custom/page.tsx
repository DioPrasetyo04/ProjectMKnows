// app/lms/page.tsx
"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/* =========================
   0) Data video (edit sesuaikan)
   ========================= */
type VideoItem = { title: string; src: string; poster?: string };
const VIDEOS: VideoItem[] = [
  { title: "LMS Overview", src: "video-lms.mp4", poster: "gambar-video-lms.jpg" },
  { title: "Onboarding Flow", src: "/videos/onboarding.mp4", poster: "/images/video-poster-2.jpg" },
  { title: "Demo Modul Interaktif", src: "/videos/demo-1.mp4", poster: "/images/video-poster-3.jpg" },
];

/* =========================
   1) Komponen Modal Video
   ========================= */
function VideoModal({
  open,
  videos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  videos: VideoItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const v = videos[index];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Keyboard: Esc, ←, →
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm grid place-items-center p-4">
      {/* Backdrop untuk menutup */}
      <button aria-label="Tutup" className="absolute inset-0" onClick={onClose} />

      {/* Kontainer player */}
      <div
        className="relative z-10 w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={v.title}
      >
        {/* Header + tombol close */}
        <div className="mb-3 flex items-center justify-between text-white">
          <h2 className="text-lg md:text-xl font-semibold">{v.title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-sm"
              aria-label="Sebelumnya"
            >
              ← Prev
            </button>
            <button
              onClick={onNext}
              className="rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-sm"
              aria-label="Berikutnya"
            >
              Next →
            </button>
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 hover:bg-white/20 px-3 py-2 text-sm"
              aria-label="Tutup"
            >
              Tutup
            </button>
          </div>
        </div>

        {/* Player */}
        <div className="rounded-xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
          <video
            key={v.src}                // restart saat ganti video
            ref={videoRef}
            src={v.src}
            poster={v.poster}
            controls
            controlsList="nodownload"
            autoPlay
            className="w-full h-auto"
          />
        </div>

        {/* Bantuan */}
        <p className="mt-3 text-center text-white/75 text-sm">
          Tekan <kbd>Esc</kbd> untuk menutup, <kbd>←</kbd>/<kbd>→</kbd> untuk pindah video.
        </p>
      </div>
    </div>
  );
}

/* =========================
   2) Halaman LMS
   ========================= */
export default function Page() {
  // state modal
  const [open, setOpen] = useState(false);
  const [vidIdx, setVidIdx] = useState(0);

  const openModal = useCallback((i = 0) => {
    setVidIdx(i);
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => setOpen(false), []);
  const prevVid = useCallback(() => setVidIdx((i) => (i - 1 + VIDEOS.length) % VIDEOS.length), []);
  const nextVid = useCallback(() => setVidIdx((i) => (i + 1) % VIDEOS.length), []);

  return (
    <>
      <main className="pb-[80px]">
        {/* ===== HERO (zoom-out background + kalem) ===== */}
        <section className="relative isolate">
          <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
            {/* Layer 1: cover blur supaya tepi penuh */}
            <Image
              src="/images/lms-1.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.08] blur-[2px] opacity-70"
            />
            {/* Overlay gelap + brandy */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-black/30 to-black/20 mix-blend-multiply" />
            {/* Layer 2: gambar utama di-ZOOM OUT */}
            <Image
              src="/images/lms-1.jpg"  // pastikan file ada
              alt="Learning Management System"
              fill
              sizes="100vw"
              className="object-contain scale-[0.88] brightness-[.9]"
            />

            {/* Teks */}
            <div className="absolute inset-0 grid place-items-center px-4">
              <h1 className="text-center font-extrabold text-white text-4xl md:text-6xl leading-[1.06]">
                <span className="text-[#B9F443]">Learning Management</span>{" "}
                <span className="text-[#4697CE]">System</span>
              </h1>
            </div>
          </div>
        </section>

        {/* ===== BUBBLE 1 — font jumbo, spasi dipadatkan ===== */}
        <section className="bg-[#EAF7F0] py-10 md:py-14">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="w-full rounded-none bg-white ring-4 ring-brand-green shadow-lg p-6 md:p-10">
              <div className="grid md:grid-cols-2 items-stretch gap-6 md:gap-8">
                {/* Teks */}
                <div className="h-full">
                  <h2 className="text-6xl md:text-7xl font-extrabold text-brand-green">LMS</h2>
                  <div className="mt-4 space-y-4 text-slate-700 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.65] text-justify">
                    <p>
                      Kami menghadirkan <strong>Learning Management System (LMS)</strong> yang
                      dirancang untuk memberikan fleksibilitas dan efisiensi dalam kegiatan belajar,
                      baik untuk pendidikan formal maupun pelatihan profesional. LMS kami mendukung
                      pengelolaan materi pembelajaran dalam berbagai format, seperti teks dan video,
                      sehingga Anda dapat menyesuaikan konten sesuai kebutuhan.
                    </p>
                    <p>
                      Selain itu, LMS ini memungkinkan pelaksanaan pembelajaran secara
                      <em> sinkronus (real-time)</em> maupun <em>asinkronus (belajar mandiri)</em>.
                      Dengan desain yang kompatibel untuk perangkat seluler, pengguna dapat mengakses
                      sistem ini kapan saja dan di mana saja, memastikan pengalaman belajar yang
                      seamless dan mudah diintegrasikan dalam aktivitas sehari-hari. Kami juga
                      menyediakan layanan personalisasi desain yang memungkinkan tampilan LMS
                      disesuaikan dengan identitas perusahaan Anda.
                    </p>
                    <p>
                      Untuk memberikan kemudahan lebih lanjut, LMS ini dikembangkan berbasis website,
                      sehingga menjadi solusi praktis dan efektif bagi implementasi <em>e-learning</em> di
                      lingkungan perusahaan Anda. Bersama kami, wujudkan pembelajaran yang lebih efektif
                      dan terstruktur untuk mendukung pertumbuhan dan kesuksesan organisasi Anda. Hubungi
                      kami sekarang untuk diskusi lebih lanjut atau mencoba demo gratis.
                    </p>
                  </div>
                </div>

                {/* Gambar */}
                <div className="relative h-72 md:h-full md:min-h-[520px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/lms-7.jpg"
                    alt="Tim berkolaborasi menggunakan LMS"
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover brightness-[.85]"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BUBBLE 2 — Digital Learning Content ===== */}
        <section className="py-10 md:py-14">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="w-full rounded-none bg-white ring-4 ring-brand-green shadow-lg p-6 md:p-10">
              <h2 className="text-5xl md:text-6xl font-extrabold text-brand-green text-center">
                Digital Learning Content
              </h2>

              <div className="mt-8 grid md:grid-cols-2 items-stretch gap-6 md:gap-8">
                {/* Gambar */}
                <div className="relative h-72 md:h-full md:min-h-[520px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/lms-3.jpg"
                    alt="Digital Learning Content"
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover brightness-[.85]"
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                </div>

                {/* Teks */}
                <div className="h-full space-y-6 text-slate-700 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.65]">
                  <div>
                    <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">Modul Interaktif</h3>
                    <p className="mt-2 text-justify">
                      Modul pembelajaran yang kami kembangkan mengacu pada konsep <em>Activity Based Learning</em>
                      dengan memperhatikan level interaktif dari setiap informasi yang perlu disampaikan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">Penggunaan Grafis</h3>
                    <p className="mt-2 text-justify">
                      Grafis digunakan untuk menarik lebih banyak perhatian peserta dalam pembelajaran. Kami dapat
                      memberi Anda grafis dalam bentuk 2D, 3D, <em>still</em> atau bergerak tergantung pada kebutuhan
                      instruksional Anda.
                    </p>
                  </div>

                  <div className="grid gap-5">
                    <div>
                      <h4 className="text-4xl md:text-[40px] font-semibold text-brand-green">Interaktivitas Level 1</h4>
                      <p className="mt-2 text-justify">
                        Modul E-Learning Interaktif dengan metode <em>Show &amp; Tell</em> untuk menyampaikan
                        informasi seperti pengetahuan produk, kebijakan, aturan, prosedur, fakta, dll.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-4xl md:text-[40px] font-semibold text-brand-green">Interaktivitas Level 2</h4>
                      <p className="mt-2 text-justify">
                        Modul E-Learning Interaktif dengan strategi penyampaian <em>Explanatory</em> untuk menyampaikan
                        konsep dan pengetahuan yang lebih dalam dengan dukungan ilustrasi grafis.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-4xl md:text-[40px] font-semibold text-brand-green">Interaktivitas Level 3</h4>
                      <p className="mt-2 text-justify">
                        Modul E-Learning Interaktif dengan strategi penyampaian <strong>Pengalaman</strong> untuk
                        mencapai pemahaman maksimal atas suatu pengetahuan melalui simulasi skenario kasus nyata.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== BUBBLE 3 — Instructional Video ===== */}
        <section className="py-10 md:py-14">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="w-full rounded-none bg-white ring-4 ring-brand-green shadow-lg p-6 md:p-10">
              <h2 className="text-5xl md:text-6xl font-extrabold text-brand-green text-center">
                Instructional Video
              </h2>

              <div className="mt-8 grid md:grid-cols-2 items-stretch gap-6 md:gap-8">
                {/* Teks */}
                <div className="h-full space-y-6 text-slate-700 text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.65]">
                  <p className="text-justify">
                    Video pembelajaran merupakan alternatif lain untuk mengefektifkan kegiatan pembelajaran. Jenis
                    video yang kami sediakan adalah <strong>video live action</strong> atau <strong>video animasi</strong>{" "}
                    tergantung kebutuhan instruksional Anda.
                  </p>

                  <div>
                    <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">Animasi 2D</h3>
                    <p className="mt-2 text-justify">
                      Video penjelasan animasi untuk menyampaikan informasi seperti tutorial program atau platform dan
                      informasi lainnya dengan bantuan host karakter animasi serta ilustrasi animasi.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">3D Animation</h3>
                    <p className="mt-2 text-justify">
                      Video animasi 3D untuk menyampaikan informasi seperti tutorial program atau platform dan informasi
                      lainnya dengan bantuan host karakter 3D dan animasi 3D.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">Live Action</h3>
                    <p className="mt-2 text-justify">
                      Video aksi langsung profesional untuk tutorial atau konsep video wawancara dengan sinematografi
                      menengah dan animasi grafis gerak.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-5xl md:text-[48px] font-bold text-brand-green">Video Penjelasan</h3>
                    <p className="mt-2 text-justify">
                      Video penjelasan dengan menggunakan grafis gerak sederhana untuk menyampaikan informasi seperti
                      pengetahuan produk, kebijakan, aturan, prosedur, fakta, dan lainnya.
                    </p>
                  </div>
                </div>

                {/* Gambar */}
                <div className="relative h-72 md:h-full md:min-h-[520px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/lms-4.jpg"
                    alt="Produksi video pembelajaran"
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover brightness-[.85]"
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA All Videos — buka MODAL (tanpa page baru) ===== */}
        <section className="relative bg-brand-navy pt-16 md:pt-24 p-12 text-white overflow-hidden">
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
              <button
                type="button"
                onClick={() => openModal(0)} // buka modal dari video pertama
                className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-medium hover:bg-white/10"
              >
                ALL VIDEOS +
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL VIDEO */}
      <VideoModal
        open={open}
        videos={VIDEOS}
        index={vidIdx}
        onClose={closeModal}
        onPrev={prevVid}
        onNext={nextVid}
      />
    </>
  );
}