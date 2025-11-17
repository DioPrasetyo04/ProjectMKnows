import { FC } from "react";
import OurClientsSection from "./our-client/section";
import HeroSection from "./hero/section";
import BenefitseSection from "./benefit/section";
import OpportunitySection from "./oppurtunity/section";

export const ConsultingModules: FC = () => {
    return (
        <>
            <HeroSection />
            <BenefitseSection />
            <OpportunitySection />
            <OurClientsSection />
        </>
    );
};
