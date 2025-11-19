import type { CardHouseTrainingProps } from "@/Types/CardHouseTraining";
import { GiHandBag, GiHandBandage } from "react-icons/gi";
import { IoLocationOutline, IoSchool, IoSchoolSharp } from "react-icons/io5";

const iconMap: Record<string, React.ElementType> = {
  IoSchoolSharp,
  IoLocationOutline,
  GiHandBag,
};

const CardHouseTraining = ({
  title,
  description,
  icon,
}: CardHouseTrainingProps) => {
  const IconComponent = iconMap[icon] || IoSchoolSharp;
  return (
    <div className="card w-[433px] h-[390px] rounded-[10px] bg-[#ffff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-5 py-2 flex flex-col gap-y-[15px] mx-auto justify-center items-center">
      <div className="bg-[#557B67] w-[57px] p-3 flex items-center justify-center rounded-[10px]">
        <IconComponent className="text-[30px] text-[#ffff]" />
      </div>
      <p className="font-montserrat font-bold text-[24px] capitalize">
        {title}
      </p>
      <p className="font-montserrat font-regular text-[20px] text-center w-[356px]">
        {description}
      </p>
    </div>
  );
};

export default CardHouseTraining;
