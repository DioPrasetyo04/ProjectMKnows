import { FC } from "react";
import PartnersPage from "./patners/section";
import BankingSection from "./banking/section";
import FinanceSection from "./finance/section";
import DokumentasiSection from "./dokumentasi/section";

export const ClientsModules: FC = () => {
    return (
        <>
            <PartnersPage />
            <BankingSection />
            <FinanceSection />
            <DokumentasiSection />
        </>
    );
};
