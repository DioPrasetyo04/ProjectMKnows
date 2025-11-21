import { TBenefit } from "@/app/types/benefit";
import mitra from "./assets/mitra.png";
import network from "./assets/network.png";
import program from "./assets/program.png";

export const BenefitItems: TBenefit[] = [
    {
        title: "Menjadi mitra terpercaya lebih dari 15 tahun",
        src: mitra, // kalau mau, boleh pakai icon khusus atau kosong
        description:
            "Bagi perusahaan nasional dan multinasional dalam mendukung pengembangan bisnis dan strategi manajemen serta kompetensi sumber daya manusia. Kebanggaan berasal dari hubungan jangka panjang yang saling menguntungkan dengan berbagai perusahaan yang memiliki visi untuk sukses, dan komitmen untuk mencapai kesuksesan itu melalui pengembangan sumber daya manusia.",
    },
    {
        title: "Pengembangan sumber daya manusia",
        src: network,
        description:
            "Merupakan proses yang berkesinambungan yang membutuhkan komitmen tinggi dan manajemen yang baik untuk menjadi efektif dalam segala hal. Program pengembangan berkaitan dengan tahap pengembangan perusahaan dan penyesuaian dengan kondisi bisnis dan tantangan mereka, baik saat start up, dalam ekspansi, atau masa transisi besar berikutnya. Perusahaan harus merencanakan dan merancang program pengembangan untuk mengintegrasikan strategi SDM dengan kebutuhan bisnis seperti: MT, Leadership Program & Consulting.",
    },
    {
        title: "Program pelatihan yang efektif",
        src: program,
        description:
            "Meningkatkan kompetensi sumber daya manusia untuk melakukan lebih baik dan memberi nilai tambah bagi perusahaan adalah tujuan utama pelatihan. Pelatihan diperlukan untuk berbagai tujuan, mulai dari teknis, keterampilan, hingga pengembangan perilaku dan kepemimpinan. M-Knows Consulting menyiapkan solusi pelatihan yang relevan dengan kebutuhan perusahaan melalui pendekatan praktis dan customized, agar hasil pelatihan berdampak langsung pada kinerja individu maupun organisasi.",
    },
];
