"use client";
import { useEffect, useState } from "react";
import SearchForm from "../SearchForm";
import { SearchContext } from "@/hooks/CreateContextMateri";
import { Materi } from "@/Types/Materi";
import searchMateri from "@/hooks/searchMateri";
import CardMateri from "../CardMateri";
import { fetchData } from "@/Services/api_service";
import Footer from "../Footer";

const SearchMateri = ({ staticDataMateri }: { staticDataMateri: Materi[] }) => {
  const [keyword, setKeyword] = useState("");

  const [data, setData] = useState<Materi[]>(staticDataMateri);

  useEffect(() => {
    const getDataMateri = async () => {
      const res = await fetchData.get("/materi-training");
      const data = res.data;
      setData(data);
    };

    getDataMateri();
  }, [staticDataMateri]);

  const materi = searchMateri(keyword, data);

  const onHandleDownload = () => {
    const link = document.createElement("a");
    link.href = "/utility/Jadwal_Public_Training_M-Knows_Consulting_2026.xlsx";
    link.download = "Jadwal_Public_Training_M-Knows_Consulting_2026.xlsx";
    link.click();
    link.remove();
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center px-3 py-3">
        <div className="flex flex-col justify-center items-center pt-2.5 pt-[180px]">
          <h1 className="capitalize font-montserrat font-bold text-[25px] md:text-[48px] lg:text-[48px]">
            public training tahun 2026
          </h1>
          <SearchContext.Provider value={{ keyword, setKeyword }}>
            <SearchForm name="search" />
          </SearchContext.Provider>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-x-11 gap-y-[25px] mx-auto left-0 right-0 pt-[80px]">
          {materi.length > 0 ? (
            materi.map((item: Materi, index) => (
              <div key={index}>
                <CardMateri
                  key={index}
                  imageSrc={item.imageSrc}
                  alt={item.alt}
                  title={item.title}
                  slug={item.slug}
                  buttonSrc={item.buttonSrc}
                />
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center font-semibold text-gray-500 text-[50px]">
              Data tidak ditemukan
            </p>
          )}
        </div>
        <div className="flex justify-center items-center pt-[50px] pb-[50px]">
          <button
            className="border bg-[#ffff] px-5 py-2 text-center rounded-[20px]"
            onClick={onHandleDownload}
          >
            <p className="font-montserrat font-regular text-[16px] text-black">
              Download Jadwal Public Training Tahun 2025
            </p>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchMateri;
