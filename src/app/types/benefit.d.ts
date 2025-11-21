import { StaticImageData } from "next/image";

export type TBenefit = {
    title: string; // judul
    src: string | StaticImageData; // gambar
    description: string; // deskripsi
};
