"use client";

import { useState } from "react";
import HeroBootcamp from "@/components/HeroBootcamp";
import BootcampCard from "@/components/BootcampCard";
import Modal from "@/components/Modal";

type Program = {
  id: string;
  image: string;
  subtitle?: string;
  title: string;
  description: string;
  details?: string[];
};

const programs: Program[] = [
  {
    id: "game-dev",
    image: "/images/bootcamp-program/FRONT-END.jpg",
    subtitle: "BOOTCAMP FRONT END DEVELOPER : ADVANCE LEVEL",
    title: "",
    description:
      "Bootcamp Intensif untuk membekali peserta menjadi front-end developer professional. Materi mencakup html, CSS, JavaScript, dan konsep penting lainnya, serta kesempatan membangun portofolio untuk mendukung karir.",
    details: [
      "Tech stack: Unity/Unreal/HTML5/C# dasar",
      "Mentoring pembuatan prototype sampai publish sederhana",
      "Portfolio showcase di akhir bootcamp",
    ],
  },
  {
    id: "iot",
    image: "/images/bootcamp-program/BACK-END.jpg",
    subtitle: "BOOTCAMP BACK-END DEVELOPMENT : ADVANCE LEVEL",
    title: "",
    description:
      "Bootcamp tingkat lanjut untuk pengembangan yang ingin focus pada back-end, mencakup server, basis data, keamanan, pemrosesan data, dan integrasi API.",
    details: [
      "Dasar microcontroller & sensor",
      "Arsitektur solusi & manajemen proyek IoT",
      "Studi kasus komersialisasi",
    ],
  },
  {
    id: "web-sec",
    image: "/images/bootcamp-program/FLUTTER.jpg",
    subtitle: "FLUTTER MULTI-PLATFORM APP DEVELOPMENT",
    title: "",
    description:
      "Bootcamp Flutter untuk membangun aplikasi mobile dan web multi-platform yang konsisten, responsif, dan sesuai best practices.",
    details: [
      "OWASP Top 10, pentest basic",
      "Hardening & incident response",
      "Lab praktik terarah",
    ],
  },
  {
    id: "finance",
    image: "/images/bootcamp-program/DATA-SIENCE.jpg",
    subtitle: "DATA SIENCE & DATA ANALYTICS",
    title: "",
    description:
      "Bootcamp Data Sience & Analytics untuk industry keuangan, dengan focus pada penjualan, kredit, penagihan, dan manajemen resiko menggunakan AI & Machine Learning.",
    details: ["Forecasting & scenario testing", "Dashboard analytics", "Best practice budgeting"],
  },
  {
    id: "vr",
    image: "/images/bootcamp-program/ANIMATOR.jpg",
    subtitle: "PROFESSIONAL VIDEO GRAFER & SINEATOGRAFER",
    title: "",
    description:
      "Bootcamp Sinematografi yang membahas kamera, pencahayaan, suara, editing, dan produksi film langsung Bersama para professional.",
    details: ["Pipeline konten VR", "Studi kasus implementasi", "ROI & adopsi teknologi"],
  },
  {
    id: "ai-sales",
    image: "/images/bootcamp-program/SINEMATOGRAFER.jpg",
    subtitle:
      "MENJADI VIDEO EDITOR, CONTENT, CREATOR & ANIMATOR, PROFESIONAL",
    title: "",
    description:
      "Bootcamp Editing & Animasi dengan Adobe Premiere Pro untuk menguasai pembuatan konten video dan animasi populer.",
    details: ["Lead gen & scoring dengan AI", "Automasi konten & follow-up", "Integrasi CRM"],
  },
  {
    id: "qa",
    image: "/images/bootcamp-program/3D.jpg",
    subtitle: "COMPREHENSIVE 3D DESIGN WITH BLENDER",
    title: "",
    description:
      "Bootcamp intensif design #D untuk membekali peserta dengan keterampilan menciptakan visual realisitis sesuai kebutuhan proyek.",
    details: ["Test case & test plan", "Automation basic", "Pipeline CI untuk QA"],
  },
  {
    id: "ai-banking",
    image: "/images/bootcamp-program/FOTOGRAFER.jpg",
    subtitle: "MENJADI PROFESIONAL DI BIDANG FOTOGRAFI",
    title: "",
    description:
      "Bootcamp Fotografi intensif untuk menguasai komposisi, pencayahaan, dan teknik profesional, dengan praktik langsung bersama instruktur berpengalaman.",
    details: [
      "Machine Learning, NLP, RPA, Blockchain (overview)",
      "Modeling risiko & scoring",
      "Implementasi di lingkungan industri",
    ],
  },
  {
    id: "dm-event",
    image: "/images/bootcamp-program/UI.jpg",
    subtitle: "UI & UX FOR WEB & APP PROJECT",
    title: "",
    description:
      "Bootcamp UI/UX untuk web & app, dengan pembelajaran dasar hingga tools penting, serta mentoring profesional agar siap berkarier dibidang UI/UX.",
    details: ["SEO/SEM/CRM/KPI", "Manajemen event end-to-end", "Project real portfolio"],
  },
  {
    id: "sponsorship",
    image: "/images/bootcamp-program/MULTIFINANCE.jpg",
    subtitle:
      "APLIKASI TERAPAN AI UNTUK INDUSTRI PERBANKAN, MULTIFINANCE, ASURANSI, DAN FINTECH",
    title: "",
    description:
      "Bootcamp lanjutan untuk peserta yang sudah menguasai Python & logika pemrograman, fokus pada penerapan AI di industri keuangan dengan materi Machine Learning, NLP, Blockchain, RPA, hingga RObo Adivsors.",
    details: ["Funnel & proposal sponsor", "Negosiasi & kontrak", "Case study B2B"],
  },
  {
    id: "blender",
    image: "/images/bootcamp-program/DIGITAL.jpg",
    subtitle: "BOOTCAMP DIGITAL MARKETING DAN EVENT MANAGEMENT",
    title: "",
    description:
      "Bootcamp DIgital Marketing & Event management untuk mempelejari strategi pemasaran, pengelolaan acara, hingga proyek portofolio nyata.",
    details: ["Workflow Blender modern", "Asset creation untuk portfolio", "Rendering & export"],
  },
  {
    id: "photo",
    image: "/images/bootcamp-program/SPONSORSHIP.jpg",
    subtitle: "strategy STRATEGY SPONSORSHIP",
    title: "",
    description:
      "Bootcamp Penjualan Digital & Sponsorship untuk menguasai pemasaran online, social selling, manajemen lead, serta strategi negosiasi dan pengelolaan sponsor.",
    details: ["Lighting & exposure triangle", "Genre practice session", "Editing dasar"],
  },
  {
    id: "uiux",
    image: "/images/bootcamp-program/TRANSFORMASI.jpg",
    subtitle: "TEKNOLOGI VIRTUAL REALITY UNTUK TRANSFORMASI BISNIS",
    title: "",
    description:
      "Pelatih Virtual Reality: Transformasi Bisnis dengan VR membekali peserta dengan pemahaman dan keterampilan praktis untuk memanfaatkan VR dalam berbagai industri dan mendorong inovasi bisnis.",
    details: ["User research & persona", "Journey map & prototyping", "Handoff ke dev"],
  },
  {
    id: "ds-banking",
    image: "/images/bootcamp-program/SALES.jpg",
    subtitle: "AI SALES TOOLS UNTUK MENINGKATKAN PENJUALAN",
    title: "",
    description:
      "Pelatihan AI SALES TOOLS Membekali Anda dengan pemahamaan dasar AI dan Pengunaan 11 tools terbaik untuk meningkatkan efisiensi serta hasil penjualan.",
    details: ["ETL & feature engineering", "Model evaluation", "Use case industri"],
  },
  {
    id: "video-editor",
    image: "/images/bootcamp-program/QA.jpg",
    subtitle: "IT QA ENGINEER : MENJADI QA PROFESIONAL",
    title: "",
    description:
      "Bootcamp IT Quality Assurance (QA) memberikan pemahaman mendalam tentang prinsip & praktik QA untuk memasitkan perangkat lunak berkualitas tinggi sesuai harapan pengguna.",
    details: ["Workflow Adobe/alternatif", "Color & sound basic", "Packaging konten"],
  },
  {
    id: "cinema",
    image: "/images/bootcamp-program/PLANNING.jpg",
    subtitle:
      "FINANCIAL PLANNING, FINANCIAL MODELLING, BUSINESS SIMULATION, FINANCIAL SCENARIO TESTING, AND ANALYTICS DASBOARDING",
    title: "",
    description:
      "Pelatihan ini ditunjukkan bagi mahasiswa dan profesional muda yang ingin mendalami analisis keuangan, dengan fokus pada konsep dasar, teknik terbaru, dan praktik terbaik di dunia finansial.",
    details: ["Shooting plan", "Lighting scene", "Post-production pipeline"],
  },
  {
    id: "fe-adv",
    image: "/images/bootcamp-program/IOT.jpg",
    subtitle:
      "PENGUASAAN IOT : IDE, SOlUSI, PERANGAKAIAN, MANAJEMEN PROYEK DAN KOMERSIALISASI",
    title: "",
    description:
      "Bootcamp IoT untuk memahami konsep, hardware & software development, serta penerapaan Iot di berbagai industri, dengan fokus pada perancangan dan implementasi solusi efeketif.",
    details: ["Next.js & SSR/ISR basic", "Atomic design & Tailwind", "React Query & pattern"],
  },
  {
    id: "be-adv",
    image: "/images/bootcamp-program/CS.jpg",
    subtitle: "CYBER SECURITY : WEB EXPLOITATION ADN DEFENSE",
    title: "",
    description:
      "Pelatihan Keamanan Web intensif untuk preofesional dan pengembang, dengan simulasi nyata serangan dan pertahanan guna memperdalam pemahanan keamanan web.",
    details: ["Node/Express/TS", "SQL/NoSQL & ORM", "Auth & security"],
  },
  {
    id: "flutter",
    image: "/images/bootcamp-program/GAME.jpg",
    subtitle: "GAME DEVELOPMENT",
    title: "",
    description:
      "Bootcamp Pengembangan Game M-Knows membekali anda dengan keterampilan membuat game, bimbingan ahli, dan portofolio untuk memulai karir di industri game.",
    details: ["State management & routing", "Best practices UI", "Publish & CI/CD basic"],
  },
];

export default function BootcampPage() {
  const [selected, setSelected] = useState<Program | null>(null);

  return (
    <div className="pt-[120px]">
      <HeroBootcamp />

      {/* GRID FULL LEBAR */}
      <section id="program" className="full-bleed py-12 md:py-16">
        <div
          className="
            grid gap-8 sm:grid-cols-2 lg:grid-cols-3

            /* === Center kartu terakhir (orphan) === */
            /* Tablet (2 kolom): last item span 2 kolom -> center */
            sm:[&>*:nth-last-child(1)]:col-span-2

            /* Desktop (3 kolom): last item mulai kolom 2 -> center */
            lg:[&>*:nth-last-child(1)]:col-start-2
            lg:[&>*:nth-last-child(1)]:col-span-1
          "
        >
          {programs.map((p) => (
            <BootcampCard
              key={p.id}
              image={p.image}
              subtitle={p.subtitle}
              title={p.title}
              description={p.description}
              onDetail={() => setSelected(p)}
            />
          ))}
        </div>
      </section>

      {/* POPUP */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
        subtitle={selected?.subtitle}
      >
        {selected?.details ? (
          <ul className="list-disc pl-6 space-y-2 text-justify">
            {selected.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        ) : (
          <p className="text-justify">{selected?.description}</p>
        )}
      </Modal>
    </div>
  );
}