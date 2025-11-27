import { ClientsModules } from "@/app/modules/clients-page/module";
import { NextPage } from "next";

const ConsultingPage: NextPage = () => {
  return (
    <div className="pt-[120px]">
      <ClientsModules />
    </div>
  );
};

export default ConsultingPage;
