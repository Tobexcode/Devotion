import React from "react";
import Button from "./button";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  className?: string;
  full?: boolean;
  isTextBlack?: boolean;
  onClick?: () => void;
}
const ServiceCard: React.FC<CardProps> = ({
  icon,
  title,
  description,
  full = false,
  className = "",
  isTextBlack = false,
  onClick,
}) => {
  return (
    <div
      className={`rounded-3xl p-[3rem] lg:p-[4.5rem] flex flex-col ${className}`}
    >
      {/* Next image */}
      <div
        className={full ? "flex lg:gap-7 text-center items-start lg:items-center flex-col lg:flex-row gap-0" : ""}
      >
        <Image src={icon} alt="" width={58} height={60} />
        <h3 className="font-mazzardM text-[32px] font-[700] tracking-[0.3rem]">
          {title}
        </h3>
      </div>

      <div
        className={`font-mazzardM font-[400] leading-7 text-[16px] ex:text-[18px] md:text-[20px]  mb-8 mt-4`}
      >
        {description}
      </div>

      <div className="mt-auto ">
        <Button
          className={`bg-transparent ${
            isTextBlack ? "text-taBlack" : "text-taWhite"
          } "}`}
          onClick={onClick}
        >
          READ MORE
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
