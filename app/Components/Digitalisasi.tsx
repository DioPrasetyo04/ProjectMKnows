import React, { JSX } from "react";
import type { DigitalisasiProps } from "../Types/Digitalisasi";

const Digitalisasi = ({
  imageSrc,
  imageAlt,
  title,
  description,
  features = [],
  count_features,
}: DigitalisasiProps) => {
  const featureCount = count_features ?? 0;
  const featureList =
    featureCount > 0 || (features && features.length > 0)
      ? featureCount > features.length
        ? [
            ...features,
            ...Array.from(
              { length: featureCount - features.length },
              (_, i) => `Feature ${i + features.length}`
            ),
          ]
        : features
      : [];
  return (
    <section className="mx-auto pt-[150px] gap-x-[10px] flex flex-col lg:flex-row  justify-center">
      <div className="lg:w-[473px] lg:h-[631px] w-[300px] h-[400px] flex items-center justify-center">
        <img
          src={`${imageSrc}`}
          alt={imageAlt}
          className="object-center object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col py-2 px-2">
        <h1 className="lg:text-[46px] text-[20px] font-bold font-montserrat font-light-blue leading-[156.8%]">
          {title}
        </h1>
        <div className="flex flex-col gap-y-[30px]">
          <p className="font-poppins font-medium lg:text-[27px] text-[20px] leading-[156.8%] text-black max-w-[841px] text-justify">
            {description}
          </p>
          {featureList.length > 0 ? (
            <React.Fragment>
              <p className="font-dark-green font-bold lg:text-[27px] text-[20px] leading-[156.8%] font-poppins">
                Key Features:
              </p>
              <ul className="list-disc max-w-[841px] text-justify pl-[35px] text-[20px] sm:text-[20px] lg:text-[27px]">
                {featureList.map((feature, index) => (
                  <li
                    key={index}
                    className="font-poppins font-medium text-black leading-[156.8%] lg:text-[27px] text-[20px] "
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ) : (
            <p className="font-poppins font-medium text-[27px] leading-[156.8%] font-dark-green">
              Features Not Found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Digitalisasi;
