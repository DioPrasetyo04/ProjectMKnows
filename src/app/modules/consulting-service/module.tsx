"use client";

import { FC } from "react";
import OurClientsSection from "./our-client/section";
import HeroSection from "./hero/section";
import BenefitseSection from "./benefit/section";
import OpportunitySection from "./oppurtunity/section";

export const ConsultingModules: FC = () => {
  const handleClick = (e: any) => {
    e.preventDefault();

    const pesan = `Halo M-Knows Consulting Team, Berikut data saya:\nNama Lengkap:\nNomor WA:\nEmail:\nPesan:`;

    const url = `https://wa.me/6281210468281?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };
  return (
    <div className="pt-[120px]">
      <HeroSection handleClick={handleClick} />
      <BenefitseSection />
      <OpportunitySection />
      <OurClientsSection />
    </div>
  );
};
