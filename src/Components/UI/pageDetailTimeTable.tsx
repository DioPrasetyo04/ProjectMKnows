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
import { IoIosCloseCircle } from "react-icons/io";

const PageDetailTimeTable = ({
  children,
  stylingParent,
  stylingTitle,
  stylingDesc,
  Title,
  Desc,
  link,
  data,
  pdf,
}: PageTimeTableTraining) => {
  const [dataJson, setDataJson] = useState<PageTimeTableTraining[]>(
    data as any
  );

  const [popup, setPopUp] = useState<boolean>(false);
  const [selectedPdf, setSelectedPdf] = useState<string>("");
  const [hoverCard, setHoverCard] = useState<number | null>(null);

  const onHandlePopUp = (pdfFile: any) => {
    setPopUp(true);
    setSelectedPdf(pdfFile);
  };

  const handleDownload = async (pdfFile: string) => {
    const response = await fetch(pdfFile);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = pdfFile.split("/").pop() || "file.pdf";
    link.click();

    window.URL.revokeObjectURL(url);
  };

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

                return (
                  <div
                    key={item.id}
                    className="w-full h-full flex flex-col gap-y-2"
                    onMouseEnter={() => setHoverCard(item.id)}
                    onMouseLeave={() => setHoverCard(null)}
                  >
                    <CardTimeTableTraining key={item.id} data={formatted} />
                    {hoverCard === item.id && (
                      <div className="w-full flex justify-center items-center">
                        <button
                          onClick={() => onHandlePopUp(pdf)}
                          className="mt-4 bg-[#02353C] text-white px-6 py-2 rounded-full shadow-lg text-sm md:text-base hover:bg-[#03454d] transition"
                        >
                          Lihat Detail
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            : null}
        </div>

        {popup === true && (
          <div className="fixed inset-0 bg-gray-700 bg-transparent bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 pt-[130px]">
            <div className="bg-white card rounded-xl shadow-xl w-full max-w-4xl overflow-y-auto p-6 relative">
              <button
                className="absolute top-4 right-7"
                onClick={() => setPopUp(false)}
              >
                <IoIosCloseCircle className="text-red-600 text-[50px]"></IoIosCloseCircle>
              </button>
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => handleDownload(selectedPdf)}
                  className="bg-[#02353C] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#03454d] transition"
                >
                  Download PDF
                </button>

                <button
                  onClick={() => setPopUp(false)}
                  className="bg-gray-400 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-500 transition"
                >
                  Kembali
                </button>
              </div>
              <div className="mt-3 w-full h-[500px] border rounded-md overflow-hidden">
                <iframe src={`${selectedPdf}`} className="w-full h-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PageDetailTimeTable;
