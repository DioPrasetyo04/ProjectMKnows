// clients.data.ts

import { ClientCategory } from "@/app/types/ourClient";

export const primaryCategories: ClientCategory[] = [
    {
        id: "banking",
        title: "Banking",
        logos: [
            { alt: "BNI", src: "/images/our-client/bni.png" },
            { alt: "BCA", src: "/images/our-client/bca.png" },
            { alt: "Mandiri", src: "/images/our-client/mandiri.png" },
            { alt: "BRI", src: "/images/our-client/bri.png" },
            { alt: "Bank DKI", src: "/images/our-client/DKI.png" },
            { alt: "Bank BJB", src: "/images/our-client/bjb.png" },
        ],
    },
    {
        id: "multifinance",
        title: "Multifinance",
        logos: [
            { alt: "AEON", src: "/images/our-client/aeon.png" },
            { alt: "Artha Prima", src: "/images/our-client/arthaprima.png" },
            { alt: "Bess Finance", src: "/images/our-client/bessFinance.png" },
            { alt: "bii", src: "/images/our-client/biiFinance.png" },
            { alt: "Uang Teman", src: "/images/our-client/uangTeman.png" },
            { alt: "Home Credit", src: "/images/our-client/homeCredit.png" },
        ],
    },
    {
        id: "manufacture",
        title: "Manufacture",
        logos: [
            { alt: "YKK", src: "/images/our-client/ykk.png" },
            { alt: "lea", src: "/images/our-client/lea.png" },
            { alt: "Bridgestone", src: "/images/our-client/bridgestone.png" },
            { alt: "Faber-Castell", src: "/images/our-client/faber.png" },
            { alt: "Holcim", src: "/images/our-client/holcim.png" },
            { alt: "Indoprima", src: "/images/our-client/indoprima.png" },
        ],
    },
    {
        id: "automotive",
        title: "Automotive",
        logos: [
            { alt: "Toyota", src: "/images/our-client/toyota.png" },
            { alt: "Mitsubishi", src: "/images/our-client/mitsubishi.png" },
            { alt: "Isuzu", src: "/images/our-client/isuzu.png" },
            { alt: "Yamaha", src: "/images/our-client/yamaha.png" },
            { alt: "Honda", src: "/images/our-client/honda.png" },
            { alt: "Suzuki", src: "/images/our-client/suzuki.png" },
        ],
    },
    {
        id: "telecom",
        title: "Telecom",
        logos: [
            { alt: "Indosat", src: "/images/our-client/indosat.png" },
            { alt: "Telkomsel", src: "/images/our-client/telkomsel.png" },
            { alt: "Infomedia", src: "/images/our-client/infomedia.png" },
            { alt: "AXIS", src: "/images/our-client/axis.png" },
            { alt: "Elabram", src: "/images/our-client/elabram.png" },
            { alt: "Moratelindo", src: "/images/our-client/moratelindo.png" },
        ],
    },
];
