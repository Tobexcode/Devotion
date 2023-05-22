"use client";
import Accordion from '@/components/Accordion'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { Aclonica } from 'next/font/google'
import Image from 'next/image';
import React from 'react'
import sign from "../../../../img/sign.svg";



function portfolio() {
  return (
    <div className="">
      <div className='max-w-[1246px] mx-auto'>
        <Header />

        <div className=" mt-7 ex:mt-[250px] justify-center items-center flex flex-col">
            <h1 className='font-[700] text-[32px] ip:text-[45px] ex:text-[60px] text-ta-purple text-center mb-[45px] '>Explore My Works</h1>

            <p className='p p-4  sm:p-0 sm:w-[55%] text-center mb-[234px] '>Welcome to my portfolio! I am excited to share with you my diverse range of experiences across branding, business consultancy, mentorship, advocacy, and philanthropy services.</p>
        </div>

        <div className="">
            <Accordion />
        </div>

        <div className="flex flex-col lg:flex-row px-4 lg:px-[150px] mb-[140px] mt-[140px] space-x-0 lg:space-x-[50px] justify-center items-center ">

          <Image src={sign} className='mb-12 lg:mb-0' alt="" width={195} height={195} />

          <div className=" ">
            <p className='p'>
          I cannot share my clients' outstanding results due to strict confidentiality agreements. Protecting my clients' sensitive information is crucial to my business, and I take this responsibility seriously. I remain dedicated to upholding ethical standards and providing exceptional service."
          </p>
          </div>
          
        </div>


        
    </div>
    <Footer />
    </div>
    
  )
}

export default portfolio