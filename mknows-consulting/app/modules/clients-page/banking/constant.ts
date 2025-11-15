import { TClientBank } from "@/app/types/banking";
import mufg from "./assets/mufg.png";
import cimb from "./assets/cimb.png";
import btn from "./assets/btn.png";
import dbs from "./assets/dbs.png";
import jateng from "./assets/bankJateng.png";
import qnb from "./assets/qnb.png";
import bni from "./assets/bni.png";
import bi from "./assets/BI.png";

export const ClientBank: TClientBank[] = [
    {
        bankName: "MUFG",
        src: mufg,
        description:
            "Creating The Winning Team (Motivational Program); Building Solid Team Work Among Team Members Through Better Communication; Train The Trainer (2 batch); Coaching,Counseling & Mentoring for Unit Head (2 batch); Applied Management to Create a Better Relationship & Result; Amazing Race (engagement); Persiapan Pranpensiun.",
    },
    {
        bankName: "CIMB Niaga",
        src: cimb,
        description:
            "Mengelola Emosi & Kontrol Diri bagi Debt Collector; Intermediate Collection Skills; Powerful Selling Skills; Collection Skills (2 batch); Collection Management (2 batch); Management Development Program for Credit Card; Management Development Program for Consumer Collection.",
    },
    {
        bankName: "Bank BTN",
        src: btn,
        description: "Soft Skills for Loan Service (14 batch); Verifikasi Dokumen; Collection (2); Workshop Credit (2).",
    },
    {
        bankName: "DBS",
        src: dbs,
        description: "Selling with NLP (6 batch)",
    },
    {
        bankName: "Bank Jateng",
        src: jateng,
        description: "Collection; Analisa Interview Nasabah (8); Grafologi & Grafonomi (4); Analisa Teknik Interview.",
    },
    {
        bankName: "QNB",
        src: qnb,
        description: "Identifikasi Uang Palsu & Tanda Tangan Palsu (22 batch); Professional Debt Collection.",
    },
    {
        bankName: "BNI",
        src: bni,
        description:
            "Supervisory Skills; Coaching, Mentoring & Counseling Skills; Train The Trainer (15 batch); Collection Management; Leadership & Legal Aspect; Analytical Thinking (8); Collection (5); Negotiation Skills (2); Presentation & Communication (5).",
    },
    {
        bankName: "Bank Indonesia",
        src: bi,
        description:
            "Innovative & Lateral Thinking (3 batch); Communication (2); Team Building; Mind Mapping; Motivation; Personality Development Skills; Concept Analyst Thinking; Keterampilan berkomunikasi dalam rapat & diskusi; Effective Sales Management; Gathering; E-Filing; Training untuk Kasir; Advance Negotiation Skills (4); Winning Employee (2); Executive Presence (3); Service Excellence (3); Leadership (2); Train The Trainer; Lateral Thinking (2); Public Speaking; Personal Image. BNI",
    },
];
