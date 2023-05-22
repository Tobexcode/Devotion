"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroImage from "../../../../img/hero-image.png";
import fun from "../../../../img/fun.png";
import passionate from "../../../../img/passionate.png"; 
import professional from "../../../../img/professional.png";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import AccordionAbout from "@/components/AccordionAbout";
import Footer from "@/components/Footer";

function about() {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Header />

      <div className="">
        <Swiper
          loop={true}
          autoplay={{
            delay: 40000000,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className=" bg-ta-cream h-[calc(100dvh-80px)] w-full overflow-hidden">
              <div className="max-w-[1246px] mx-auto h-full  lg:px-0 md:grid md:grid-cols-3 md:flex-row ">
                <div className="md:col-span-1 w-full  md:h-full h-1/3">
                  <span className=" md:text-[100px] w-full  h-full flex items-end md:items-center justify-center   sm:text-[50px] text-[60px] text-ta-purple text-center lg:text-left font-mazzardH  font-[700] leading-[1]">
                    Professional
                  </span>
                </div> 

                {/* <div className="before:bg-[url('../../img/hero-image.png')] before:opacity-0 before:lg:opacity-100 bg-no-repeat before:absolute before:w-[100%] before:h-[110%] before:left-[-289px] before:lg:hidden   before:bg-no-repeat after:bg-[url('../../img/hero-image.png')] after:h-[76%] w-[110%] "> */}
                {/* <img
             className=" w-[1027px] h-[916px]"
             src="https://i.imgur.com/IQXaTpv.png"
             alt="logo"
            /> */}
                <div className="lg:col-span-2 w-full hidden md:flex  ">
                  <Image
                    className="opacity-100 object-contain object-right-bottom max-h-full"
                    src={HeroImage}
                    fill
                    priority
                    alt="logo"
                  />{" "}
                </div>
                <div className="h-2/3  w-full md:hidden relative  ">
                  <Image
                    className="opacity-100 object-bottom object-cover w-full"
                    src={HeroImage}
                    fill
                    priority
                    alt="logo"
                  />{" "}
                </div>
              </div>

              {/* w-[855px] h-[655px] */}
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white h-[calc(100dvh-80px)] w-full overflow-hidden">
              <div className="max-w-[1246px] mx-auto h-full  lg:px-0 md:grid md:grid-cols-3 md:flex-row  ">
                <div className="lg:col-span-2 w-full hidden md:flex  ">
                  <Image
                    className="opacity-100  object-contain object-left-bottom max-h-full"
                    src={fun}
                    fill
                    alt="logo"
                  />
                </div>

                <div className="md:col-span-1 w-full  md:h-full h-1/3">
                  <span className="  md:text-[100px] w-full  h-full flex items-end md:items-center justify-center   sm:text-[50px] text-[60px] text-ta-purple text-center lg:text-left font-mazzardH  font-[700] leading-[1]">
                    Fun
                  </span>
                </div>
                <div className="h-2/3  w-full relative md:hidden ">
                  <Image
                    className="opacity-100 object-bottom object-cover w-full"
                    src={fun}
                    fill
                    priority
                    alt="logo"
                  />{" "}
                </div>

                {/* <div className="before:bg-[url('../../img/hero-image.png')] before:opacity-0 before:lg:opacity-100 bg-no-repeat before:absolute before:w-[100%] before:h-[110%] before:left-[-289px] before:lg:hidden   before:bg-no-repeat after:bg-[url('../../img/hero-image.png')] after:h-[76%] w-[110%] "> */}
                {/* <img
             className=" w-[1027px] h-[916px]"
             src="https://i.imgur.com/IQXaTpv.png"
             alt="logo"
            /> */}
              </div>

              {/* w-[855px] h-[655px] */}
            </div>
            {/* </div> */}
          </SwiperSlide>

          <SwiperSlide>
            <div className=" bg-ta-purple h-[calc(100dvh-80px)] overflow-hidden">
              <div className="max-w-[1246px] mx-auto h-full  lg:px-0 md:grid md:grid-cols-3 md:flex-row  ">
                <div className="md:col-span-1 w-full  md:h-full h-1/3">
                  <span className="  md:text-[100px] w-full  h-full flex items-end md:items-center justify-center   sm:text-[50px] text-[60px] text-white text-center lg:text-left font-mazzardH  font-[700] leading-[1]">
                    Passionate
                  </span>
                </div>

                {/* <div className="before:bg-[url('../../img/hero-image.png')] before:opacity-0 before:lg:opacity-100 bg-no-repeat before:absolute before:w-[100%] before:h-[110%] before:left-[-289px] before:lg:hidden   before:bg-no-repeat after:bg-[url('../../img/hero-image.png')] after:h-[76%] w-[110%] "> */}
                {/* <img
             className=" w-[1027px] h-[916px]"
             src="https://i.imgur.com/IQXaTpv.png"
             alt="logo"
            /> */}
                <div className="lg:col-span-2 w-full hidden md:flex  ">
                  <Image
                    className="opacity-100 object-contain object-right-bottom max-h-full"
                    src={passionate}
                    fill
                    alt="logo"
                  />{" "}
                </div>
                <div className="h-2/3  w-full relative  md:hidden ">
                  <Image
                    className="opacity-100 object-bottom object-cover w-full"
                    src={passionate}
                    fill
                    priority
                    alt="logo"
                  />{" "}
                </div>
              </div>

              {/* w-[855px] h-[655px] */}
            </div>
            {/* </div> */}
          </SwiperSlide>
        </Swiper>
      </div>

      <AccordionAbout />

      <div className="mt-[150px] ">
        <Footer />
      </div>
      
    </div>
  );
}

export default about;

// autoplay={{
//   delay: 500,
//   disableOnInteraction: false
// }}
