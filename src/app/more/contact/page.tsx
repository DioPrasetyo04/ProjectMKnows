import { ContactModules } from "@/app/modules/contact/modules";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <div className="pt-[120px]">
      <ContactModules />
    </div>
  );
};

export default ContactPage;
