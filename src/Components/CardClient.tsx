import { CardClientProps } from "@/Types/CardClient";

const CardClient = ({ imageSrc, alt }: CardClientProps) => {
  return (
    <div className="w-[115px] h-[59px]">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default CardClient;
