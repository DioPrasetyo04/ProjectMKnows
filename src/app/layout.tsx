import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurClientsSection from "./modules/consulting-service/our-client/section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bootcamp Program — M-Knows Consulting",
    description: "Bootcamp unggulan untuk pengembangan keterampilan dengan mentor berpengalaman di berbagai industri.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <body className={inter.className}>
                <Navbar />
                <main>{children}</main>
                {/* <OurClientsSection /> */}
                <Footer />
            </body>
        </html>
    );
}
