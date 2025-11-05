"use client";
import { useState } from "react";
import data from "../DB/db.json";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const onHandleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center justify-between p-4 dark-blue w-full h-[122px] fixed z-999">
      <div className="relative flex grow-0 shrink-0 w-[200.57px] h-[62px]">
        <img
          src="/logos/M-Knows.png"
          alt="M-Knows"
          className="absolute w-full h-full object-cover object-center left-[51px]"
        />
      </div>
      <div className="flex justify-center items-center gap-x-[77px] top-11 bottom-[46px] mr-[117px]">
        {data.navLinksStatics.map((link: any) => {
          const isActive = pathname === link.href;
          return (
            <div
              key={link.id}
              className={`font-montserrat font-medium text-[26px] leading-[34px] hover:underline cursor-pointer transition-colors ${
                isActive ? "font-limegreen" : "text-white"
              }`}
            >
              <a href={link.href}>{link.label}</a>
            </div>
          );
        })}
        <div
          className={`text-white font-montserrat font-medium text-[26px] leading-[34px] hover:underline cursor-pointer transition-colors`}
        >
          Our Services
        </div>
        <div
          className={`text-white font-montserrat font-medium text-[26px] leading-[34px] hover:underline cursor-pointer transition-colors`}
          onClick={onHandleOpen}
        >
          More
        </div>
        {open && <div className=""></div>}
      </div>
    </div>
  );
};

export default Navbar;
