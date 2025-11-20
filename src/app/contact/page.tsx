import { NextPage } from "next";
import { ContactModules } from "../modules/contact/modules";

const ContactPage: NextPage = () => {
  return (
    <div className="pt-[120px]">
      <ContactModules />
    </div>
  );
};

export default ContactPage;
