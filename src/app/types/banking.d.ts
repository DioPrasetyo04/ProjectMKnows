import { StaticImageData } from "next/image";

export type TClientBank = {
    bankName: string; // Nama bank
    src: string | StaticImageData; // Logo bank
    description: string; // Program/kegiatan
};
