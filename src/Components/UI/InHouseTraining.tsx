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
    <section className="gap-y-[10px] overflow-x-hidden py-[5px] min-w-screen min-h-screen">
      <div className="w-full h-[651px] flex relative items-center justify-center">
        <img
          src="/images/in-house-training/bg-in-house-training.png"
          alt="Image Laptop"
          className="object-cover w-full lg:h-full md:h-[680px] h-[1100px] pt-[100px] relative z-0"
        />
      </div>
      <div className="flex flex-col items-center lg:justify-center mx-auto inset-0 z-20 absolute pb-[20px] pt-[180px] md:pt-[150px] lg:pt-0 gap-y-[20px]">
        <div className="flex justify-center mx-auto left-0 right-0 text-center lg:text-center md:text-center">
          <h1 className="w-[526px] text-[35px] md:text-[40px] lg:text-[48px] font-montserrat font-bold text-[#FFFFFF]">
            In-House Training
          </h1>
        </div>
        <h3 className="text-[#ffff] font-poppins text-[26px] md:text-[24px] lg:text-[30px] w-[400px] md:w-[500px] lg:w-[1465px] text-justify md:text-justify lg:text-center px-2 py-2 lg:px-5 lg:py-3">
          In House Training merupakan program pelatihan yang diselenggarakan
          oleh M-KNOWS CONSULTING bekerjasama dengan Perusahaan atau Instansi
          pemerintah untuk meningkatkan skill karyawan sehingga meningkatkan
          keunggulan kompetitif di bidang Sumberdaya Manusia dengan materi,
          contoh studi kasus dan konsep pelaksanaan yang dikustomisasi sesuai
          kebutuhan perusahaan atau instansi.
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center pt-[250px] text-center lg:pt-[34px] md:pt-[40px] pb-[40px] gap-y-[20px]">
        <h1 className="font-montserrat font-bold text-[48px]">
          Tentang Program
        </h1>
        <p className="font-poppins text-[28px] max-w-[1300px]">
          Kami membantu mendesain konsep training, kurikulum, materi, dan jadwal
          yang dapat disesuaikan dengan kebutuhan perusahaan. Pelatihan dapat
          dilaksanakan di lokasi Anda maupun secara hybrid.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-[72px] justify-center items-center gap-y-[40px] pb-[40px] px-5">
        <div className="card w-[360px] lg:w-[550px] md:w-[560px] h-full rounded-[10px] bg-[#ffff] px-5 py-2 shadow-[0px_4px_4px_0px_#557B67]">
          <p className="font-montserrat font-semibold text-[24px] pb-[22px] pt-[28px]">
            Pengalaman sejak 2003
          </p>
          <p className="font-poppins font-light text-[24px]">
            Menyelenggarakan in‑house training di banyak perusahaan dan instansi
            pemerintah. Metode singkat, padat, dan praktis langsung dapat
            diterapkan setelah pelatihan.
          </p>
        </div>
        <div className="card w-[360px] lg:w-[550px] md:w-[560px] h-full rounded-[10px] bg-[#ffff] px-5 py-2 shadow-[0px_4px_4px_0px_#557B67]">
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
        <p className="capitalize font-montserrat font-bold text-[30px] md:text-[40px] lg:text-[48px] text-white">
          kenapa in-house training kami
        </p>
        <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-x-5 gap-y-5">
          {data.length > 0 &&
            data.map((item) => <CardHouseTraining key={item.id} {...item} />)}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-5 pt-[92px] pb-[18px]">
        <p className="capitalize font-montserrat font-bold text-[48px]">
          our client
        </p>
        <div className="card rounded-[30px] w-[500px] md:w-[700px] lg:w-[1024px] h-full bg-[#ffff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center p-5">
          {dataClient.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center items-center right-0 left-0 mx-auto gap-y-5 gap-x-5 p-3">
              {dataClient.map((item) => (
                <CardClient key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center left-0 right-0 mx-auto pb-[50px] pt-[20px]">
        <button className="px-3 py-3 bg-[#6DEA6A] rounded-[10px] w-[215px] border border-[#424242]">
          <div className="flex justify-center items-center gap-x-[5px]">
            <a href="/more/clients-page">
              <p className="font-manrope font-bold text-[14px]">View More</p>
            </a>
            <FaArrowAltCircleRight className="text-[20px]" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default InHouseTraining;
