// types.ts
export type ClientLogo = {
    alt: string;
    src: string; // path ke image (public/...) atau URL
};

export type ClientCategory = {
    id: string;
    title: string;
    logos: ClientLogo[];
};
