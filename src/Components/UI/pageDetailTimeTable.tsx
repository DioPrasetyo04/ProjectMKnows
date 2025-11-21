"use client";

import { cn } from "@/lib/utils";
import {
  CardProps,
  PageTimeTableTraining,
  TimeTableTraining,
} from "@/Types/TimeTableTraining";
import CardTimeTableTraining from "../CardTimeTableTraining";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { fetchData } from "@/Services/api_service";

const PageDetailTimeTable = ({
  children,
  stylingParent,
  stylingTitle,
  stylingDesc,
  Title,
  Desc,
  link,
  data,
}: PageTimeTableTraining) => {
  const [dataJson, setDataJson] = useState<PageTimeTableTraining[]>(
    data as any
  );

  useEffect(() => {
    const getDataTimeTable = async () => {
      try {
        const res = await fetchData.get(link as any);
        const dataJSon = res.data;

        if (Array.isArray(dataJSon)) {
          setDataJson(dataJSon);
        }
        return null;
      } catch (error) {
        return null;
      }
    };

    getDataTimeTable();
  }, [link]);

  return (
    <>
      <div
        className={cn(
          `
          flex flex-col 
          gap-y-[20px] 
          pt-[200px] 
          pb-[150px] 
          min-h-screen
          px-4 sm:px-6 
          lg:pl-[67px] lg:pr-0
        `,
          stylingParent
        )}
      >
        {children}

        <div className="flex flex-col gap-y-[15px]">
          {Title && (
            <h1
              className={`font-montserrat font-bold text-[35px] md:text-[40px] lg:text-[48px] max-w-[1281px] ${stylingTitle}`}
            >
              {Title}
            </h1>
          )}

          {Desc && (
            <p
              className={`font-montserrat font-regular text-[18px] md:text-[20px] lg:text-[24px] max-w-[900px] lg:max-w-[1000px] text-justify ${stylingDesc}`}
            >
              {Desc}
            </p>
          )}
        </div>

        {/* Card List */}
        <div className="flex flex-col gap-y-[35px] mt-10 w-full">
          {Array.isArray(dataJson)
            ? dataJson.map((item: any) => {
                const keyName = Object.keys(item).find((x) => x !== "id");
                if (!keyName) return null;

                const dates = item[keyName].map((d: any) => d.data);

                const formatted: TimeTableTraining = {
                  [keyName]: dates,
                };

                return <CardTimeTableTraining key={item.id} data={formatted} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default PageDetailTimeTable;
