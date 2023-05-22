import Image from "next/image";
import React from "react";
import Innovate from "../../img/innovate.png";
import Giz from "../../img/giz.png";
import Makelab from "../../img/makelab.png";
import Winrock from "../../img/winrock.png";
import One from "../../img/one.png";

function Work() {
  return (
    <div className="flex flex-col items-center max-w-[1260px] mx-auto">
      <h1 className="pt-[119px] pb-[35px] h3">WORKED WITH</h1>

      <p className=" p text-center px-5 sm:24 md:px-24 lg:px-[310px] pb-[58px] ">
        I have worked with top-tier companies and individuals in and out of
        Africa to deliver exceptional results and drive business success.
      </p>

      <div className="flex lg:space-x-[50px] items-center lg:items-end mb-[113px] flex-col lg:flex-row w-fit h-fit ">
        <Image src={Innovate} width={198.47} height={53} alt="ggg" />
        <Image
          className="place-self-center"
          src={Giz}
          width={198.47}
          height={53}
          alt="ggg"
        />
        <Image src={Makelab} width={198.47} height={53} alt="ggg" />
        <Image src={Winrock} width={198.47} height={53} alt="ggg" />
        <Image src={One} width={198.47} height={53} alt="ggg" />
      </div>
    </div>
  );
}

export default Work;
