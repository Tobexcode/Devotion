"use client";
import React from "react";
import Twitter from "../../img/twitter.png";
import Linkedin from "../../img/linkedin.png";
import Facebook from "../../img/facebook.png";
import Instagram from "../../img/instagram.png";
import Image from "next/image";
import { ArrowCircleRight } from "iconsax-react";

const Footer: React.FC = () => {
  return (
    <div className="">
      <footer className="hidden lg:flex flex-col justify-center text-taWhite font-mazzardH bg-ta-purple px-24 pt-28 pb-10 ">
      <h2 className=" text-[32px] font-[600] px-4 lg:px-12 sm:px-10  ">For more enquiries:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 place-items-center max-w-screen-3xl w-full px-4 sm:px-6 lg:px-8">
        {/* Column 1 */}
        <div className="p-4">
          <ul className="list-none">
            <li className="font-[400] text-[20px] mb-[12px] ">
              Copyright © 2022 Tolulope Aina. All rights reserved.
            </li>
            <li className=" font-[300] text-[9px] ">
              The content, design, and images on this website are protected by
              copyright law and may not be reproduced, distributed, or
              transmitted in any form or by any means without the prior written
              consent of Tolulope Aina. Unauthorized use of this website or its
              content may give rise to a claim for damages and/or be a criminal
              offense.
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex items-center">
          {/* <h2 className="text-lg font-bold mb-4 ">Column 2</h2> */}
          <ul className="list-none flex flex-col content-between flex-wrap">
            <li className=" flex gap-2">
              <Image height={24} width={24} src={Twitter} alt="" />
              <Image height={24} width={24} src={Linkedin} alt="" />
              <Image height={24} width={24} src={Facebook} alt="" />
              <Image height={24} width={24} src={Instagram} alt="" />
            </li>{" "}
            <li className=" space-y-2 relative top-[30px] ">
              <p className="p">hello@thetolulopeaina.com</p>
              <p className="p">+234 (0) 806 907 2839</p>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="list-none">
            <li>HOME</li>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>ABOUT US</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="order-first text-white p-4 sm:order-last">
          <div>
            Join my community of like-minded professionals and stay ahead of the
            curve!
          </div>
          <div className="relative">
            <input
              className="block p w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md leading-5 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
              type="email"
              placeholder="Email"
            ></input>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <ArrowCircleRight />
            </span>
          </div>
        </div>
      </div>
    </footer>

    
    <footer className=" bg-ta-purple p-[24px] lg:hidden">
      <div className=" flex items-center justify-center">
     <p className="p   text-white pt-[67px] text-left  ">Join my community of like-minded
professionals and stay ahead of the curve! </p>
       
    </div>
    <div className=" text-white max-w-full ip:max-w-[70%] mt-[24px] ex:max-w-[50%] md:max-w-[40%] mx-auto flex flex-col items-center justify-center">
      
      <div className="relative">
        <input
              className=" flex p items-center justify-center w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md leading-5 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue  transition duration-150 ease-in-out"
              type="email"
              placeholder="Email"
            ></input>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <ArrowCircleRight />
            </span>
      </div>
            
            <ul className="list-none flex flex-col items-center content-between flex-wrap">
            <li className=" flex gap-2 mt-[45px] mb-[26px] items-center">
              <Image height={24} width={24} src={Twitter} alt="" />
              <Image height={24} width={24} src={Linkedin} alt="" />
              <Image height={24} width={24} src={Facebook} alt="" />
              <Image height={24} width={24} src={Instagram} alt="" />
            </li>{" "}
            <li className=" space-y-4 relative flex flex-col items-center">
              <p className="p">hello@thetolulopeaina.com</p>
              <p className="p">+234 (0) 806 907 2839</p>
              <p className="p text-center">26, Tolulope Aina, Street, Ikoyi, Lagos, Nigeria</p>
            </li>
          </ul>

          <div>
          <ul className="list-none mt-[70px] p space-y-[18px] flex flex-col justify-center items-center">
            <li>HOME</li>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>ABOUT US</li>
          </ul>
        </div>

        <ul className="list-none p flex flex-col justify-center items-center text-center mt-[45px] mb-[55px] ">
            <li className="font-[400] text-[20px] mb-[12px] ">
              Copyright © 2022 Tolulope Aina. All rights reserved.
            </li>
            <li className=" font-[300] text-[12px] ">
              The content, design, and images on this website are protected by
              copyright law and may not be reproduced, distributed, or
              transmitted in any form or by any means without the prior written
              consent of Tolulope Aina. Unauthorized use of this website or its
              content may give rise to a claim for damages and/or be a criminal
              offense.
            </li>
          </ul>
            </div>

     
    </footer>
    

    
    </div>
    

    

    
  );
};

export default Footer;
//convert 111 to rem
