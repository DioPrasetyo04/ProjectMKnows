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
            <h2 className="text-xl md:text-[28px] font-montserrat font-semibold text-center leading-snug text-white">
              {title}
            </h2>
          </div>

          {/* Dates Section */}
          <div
            className="
              bg-[#557B67] 
              flex flex-wrap 
              items-center
              justify-center lg:justify-center
              px-3 py-5 
              w-full lg:w-1/2
              gap-y-2
            "
          >
            {dates.map((value: string, index: number) => {
              const isLast = index === dates.length - 1;

              return (
                <div key={index} className="flex justify-center items-center">
                  <p className="text-lg md:text-[28px] font-montserrat font-semibold text-center leading-snug text-white">
                    {value}
                  </p>
                  {!isLast && (
                    <RxDividerVertical className="text-white text-[16px] lg:text-[28px]" />
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
