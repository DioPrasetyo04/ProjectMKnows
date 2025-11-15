import Image from "next/image";
import { FC } from "react";

const DokumentasiSection: FC = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-[1200px] mx-auto rounded-lg overflow-hidden">
                <div className="relative w-full">
                    <Image
                        src="/images/our-client/dokumentasi.png"
                        width={1400}
                        height={1400}
                        alt="dokumentasi"
                        className=" w-full h-auto transform transition-all duration-300 hover:brightness-110"
                    />
                </div>
            </div>
        </section>
    );
};
export default DokumentasiSection;
