import { Materi } from "@/Types/Materi";
import Link from "next/link";

const CardMateri = ({ imageSrc, alt, title, slug, buttonSrc }: Materi) => {
  return (
    <div className="flex flex-col justify-center items-center text-center card rounded-[25px] w-[344px] px-3 pb-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] gap-y-[15px]">
      <div className="w-[343px] h-[267px]">
        <img
          src={imageSrc}
          alt={alt}
          className="object-center object-cover w-full h-full"
        />
      </div>
      <p className="text-[26px] font-montserrat font-bold w-[383px]">{title}</p>
      <button className="w-[153px] h-[50px] px-2 py-2 rounded-[20px] bg-[#70B946] cursor-pointer">
        <Link href={slug} className="no-underline text-[#ffff]">
          {buttonSrc}
        </Link>
      </button>
    </div>
  );
};

export default CardMateri;
