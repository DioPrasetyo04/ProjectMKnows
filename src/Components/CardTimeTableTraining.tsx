import { CardProps } from "@/Types/TimeTableTraining";
import React from "react";
import { RxDividerVertical } from "react-icons/rx";

const CardTimeTableTraining = ({ data }: CardProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-6 w-full p-3">
      {Object.entries(data).map(([title, dates]) => (
        <div
          key={title}
          className="flex flex-col lg:flex-row w-full rounded-[20px] overflow-hidden"
        >
          {/* Title Section */}
          <div className="bg-[#02353C] flex items-center px-5 py-5 w-full lg:w-1/2">
            <p
              className="font-montserrat font-semibold 
            text-[18px] sm:text-[20px] lg:text-[24px] 
            text-white leading-tight"
            >
              {title}
            </p>
          </div>

          {/* Dates Section */}
          <div
            className="
              bg-[#557B67] 
              flex flex-wrap 
              items-center
              justify-center lg:justify-center
              px-5 py-5 
              w-full lg:w-1/2
              gap-y-2 gap-x-4
            "
          >
            {dates.map((value: string, index: number) => {
              const isLast = index === dates.length - 1;

              return (
                <div
                  key={index}
                  className="flex justify-center items-center gap-x-2"
                >
                  <p
                    className="font-montserrat font-semibold 
                    text-[15px] sm:text-[17px] lg:text-[20px] 
                    text-white whitespace-nowrap
                  "
                  >
                    {value}
                  </p>
                  {!isLast && (
                    <RxDividerVertical className="text-white text-[16px] lg:text-[18px]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTimeTableTraining;
