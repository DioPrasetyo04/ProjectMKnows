import { StaticImageData } from "next/image";

export type TFinance = {
    bankName: string; // Nama bank
    src: string | StaticImageData; // Logo bank
    description: string; // Program/kegiatan
};
