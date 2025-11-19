"use client";
import { fetchData } from "@/Services/api_service";
import { CardHouseTrainingProps } from "@/Types/CardHouseTraining";
import { useEffect, useState } from "react";
import CardHouseTraining from "../CardHouseTraining";
import { CardClientProps } from "@/Types/CardClient";
import CardClient from "../CardClient";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Footer from "../Footer";

const InHouseTraining = ({
  staticDataHouseTraining,
  staticDataClient,
}: {
  staticDataHouseTraining: CardHouseTrainingProps[];
  staticDataClient: CardClientProps[];
}) => {
  const [data, setData] = useState<CardHouseTrainingProps[]>(
    staticDataHouseTraining
  );

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData.get(`/CardHouse`);
      const data = res.data;
      setData(data);
    };

    getData();
  }, [staticDataHouseTraining]);

  const [dataClient, setDataClient] =
    useState<CardClientProps[]>(staticDataClient);

  useEffect(() => {
    const getDataClient = async () => {
      const res = await fetchData.get(`/CardClient`);
      const data = res.data;
      setDataClient(data);
    };

    getDataClient();
  }, [staticDataClient]);
  return (
    <section className="flex flex-col gap-y-[10px] overflow-x-hidden">
      <div className="w-full h-[651px] flex relative items-center justify-center">
        <img
          src="/images/in-house-training/bg-in-house-training.png"
          alt="Image Laptop"
          className="object-cover w-full h-full pt-[100px] relative z-0"
        />
      </div>
      <div className="flex flex-col items-center justify-center mx-auto right-0 left-0 top-0 bottom-0 z-20 absolute pb-[20px]">
        <div className="flex justify-center mx-auto left-0 right-0 text-center">
          <h1 className="w-[526px] text-[48px] font-montserrat font-bold text-[#FFFFFF]">
            In-House Training
          </h1>
        </div>
        <h3 className="text-[#ffff] font-poppins text-[26px] w-[1117px] text-center">
          In House Training merupakan program pelatihan yang diselenggarakan
          oleh M-KNOWS CONSULTING bekerjasama dengan Perusahaan atau Instansi
          pemerintah untuk meningkatkan skill karyawan sehingga meningkatkan
          keunggulan kompetitif di bidang Sumberdaya Manusia dengan materi,
          contoh studi kasus dan konsep pelaksanaan yang dikustomisasi sesuai
          kebutuhan perusahaan atau instansi.
        </h3>
      </div>
      <div className="flex flex-col pt-[34px] pl-[81px]">
        <h1 className="font-montserrat font-bold text-[48px] pb-[44px]">
          Tentang Program
        </h1>
        <p className="font-poppins text-[24px] max-w-[1007px] pb-[54px]">
          Kami membantu mendesain konsep training, kurikulum, materi, dan jadwal
          yang dapat disesuaikan dengan kebutuhan perusahaan. Pelatihan dapat
          dilaksanakan di lokasi Anda maupun secara hybrid.
        </p>
      </div>
      <div className="flex flex-row gap-x-[72px] justify-center items-center py-[50px]">
        <div className="card w-[560px] h-full rounded-[10px] bg-[#ffff] px-5 py-2 shadow-[0px_4px_4px_0px_#557B67]">
          <p className="font-montserrat font-semibold text-[24px] pb-[22px] pt-[28px]">
            Pengalaman sejak 2003
          </p>
          <p className="font-poppins font-light text-[24px]">
            Menyelenggarakan in‑house training di banyak perusahaan dan instansi
            pemerintah. Metode singkat, padat, dan praktis langsung dapat
            diterapkan setelah pelatihan.
          </p>
        </div>
        <div className="card w-[560px] h-full rounded-[10px] bg-[#ffff] px-5 py-2 shadow-[0px_4px_4px_0px_#557B67]">
          <p className="font-montserrat font-semibold text-[24px] pb-[22px] pt-[28px]">
            Durasi Fleksibel
          </p>
          <p className="font-poppins font-light text-[24px]">
            Kelas kecil (10–20 orang) hingga kelas besar (50+). Jadwal & materi
            disesuaikan kebutuhan. Tersedia program pasca pelatihan melalui LMS
            selama 3 bulan.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-[50px] px-5 pt-[90px] pb-[123px] bg-[#245454]">
        <p className="capitalize font-montserrat font-bold text-[48px] text-white">
          kenapa in-house training kami
        </p>
        <div className="flex flex-row justify-center items-center gap-x-[22px] flex-wrap gap-y-[20px] gap-x-[20px]">
          {data.length > 0 &&
            data.map((item) => <CardHouseTraining key={item.id} {...item} />)}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-5 pt-[92px] pb-[18px]">
        <p className="capitalize font-montserrat font-bold text-[48px]">
          our client
        </p>
        <div className="card rounded-[30px] w-[1024px] h-full bg-[#ffff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center p-5">
          {dataClient.length > 0 && (
            <div className="grid grid-cols-6 justify-center items-center right-0 left-0 mx-auto gap-y-[20px] gap-x-[20px]">
              {dataClient.map((item) => (
                <CardClient key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center left-0 right-0 mx-auto pb-[100px]">
        <button className="px-3 py-3 bg-[#6DEA6A] rounded-[10px] w-[215px] border border-[#424242]">
          <div className="flex justify-center items-center gap-x-[5px]">
            <a href="/about">
              <p className="font-manrope font-bold text-[14px]">View More</p>
            </a>
            <FaArrowAltCircleRight className="text-[20px]" />
          </div>
        </button>
      </div>
      <Footer />
    </section>
  );
};

export default InHouseTraining;
