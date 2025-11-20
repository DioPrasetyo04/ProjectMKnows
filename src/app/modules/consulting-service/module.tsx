import { FC } from "react";
import OurClientsSection from "./our-client/section";
import HeroSection from "./hero/section";
import BenefitseSection from "./benefit/section";
import OpportunitySection from "./oppurtunity/section";

export const ConsultingModules: FC = () => {
  return (
    <div className="pt-[120px]">
      <HeroSection />
      <BenefitseSection />
      <OpportunitySection />
      <OurClientsSection />
    </div>
  );
};
