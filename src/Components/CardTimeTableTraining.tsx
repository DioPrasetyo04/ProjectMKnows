import { CardProps } from "@/Types/TimeTableTraining";
import React from "react";
import { RxDividerVertical } from "react-icons/rx";

const CardTimeTableTraining = ({ data }: CardProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-10">
      {Object.entries(data).map(([title, dates]) => (
        <div
          key={title}
          className="flex flex-row w-[1291px] rounded-[20px] overflow-hidden"
        >
          <div className="bg-[#02353C] flex items-center px-6 py-4 w-1/2">
            <p className="font-montserrat font-semibold text-[24px] text-white leading-tight">
              {title}
            </p>
          </div>

          <div className="bg-[#557B67] flex items-center px-6 py-4 w-1/2 gap-x-3 flex-wrap">
            {dates.map((value: string, index: number) => {
              const isLast = index === dates.length - 1;

              return (
                <div key={index} className="flex items-center gap-x-2">
                  <p className="font-montserrat font-semibold text-[22px] text-white">
                    {value}
                  </p>
                  {!isLast && (
                    <RxDividerVertical className="text-white text-[18px]" />
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
