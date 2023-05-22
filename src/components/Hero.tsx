import Image from "next/image";
import React from "react";
import { ArrowCircleRight } from "iconsax-react";
import HeroImage from "../../img/hero-image.png";

function Hero() {
  return (
    <div className=" bg-ta-purple over overflow-hidden">
      <div className="max-w-[1246px] mx-auto pl-3 pr-3 lg:pr-0 flex flex-col lg:flex-row ">
        <div className="w-[100%] basis-[62%] ">
          <h2 className=" lg:text-[60px] w-auto lg:w-[110%] md:text-[60px] sm:text-[50px] text-[40px] text-ta-cream text-center lg:text-left font-mazzardH pt-[40px] md:pt-[150px] lg:pt-[290px] font-[600] leading-[1]">
            Exploring passions, pursuing ambitions, creating my path
          </h2>
          <p className="text-white text-[20px] font-mazzardH font-[400] text-center lg:text-left mb-[90px] mt-[50px] pr-[2px] lg:pr-4 ">
            &quot;I&apos;m Tolu, and I appreciate you visiting my website! If
            you&apos;re ready to join me on this journey of passion and purpose,
            let&apos;s connect.
          </p>

          <div className="flex justify-center lg:justify-normal ">
            <button className="md:py-[22px] md:px-[32px] px-[29px] py-[17px]  mb-[10px] lg:mb-[86px] flex items-center gap-[35px] bg-white font-mazzardM font-[600] text-[16px] rounded-[10px] tracking-[0.3rem] ">
              CONNECT
              <ArrowCircleRight />
            </button>
          </div>
        </div>

        <div className="before:bg-[url('../../img/hero-image.png')] before:opacity-0 before:lg:opacity-100 bg-no-repeat before:absolute before:w-[150%] before:h-[110%] before:left-[-150px]  relative before:bg-no-repeat">
          {/* <img
             className=" w-[1027px] h-[916px]"
             src="https://i.imgur.com/IQXaTpv.png"
             alt="logo"
            /> */}
          <Image
            className="opacity-100 lg:opacity-0"
            src={HeroImage}
            alt="logo"
          />
        </div>

        {/* w-[855px] h-[655px] */}
      </div>
    </div>
  );
}

export default Hero;
