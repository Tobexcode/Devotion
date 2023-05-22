import { ArrowCircleRight, ArrowCircleUp } from 'iconsax-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { title } from 'process';
import React, { useState } from 'react'
import {Collapse} from 'react-collapse';
import {IoIosArrowDropright, IoIosArrowDropup} from 'react-icons/io'




const AccordionItem = ( {toggle,  className, title, open, image, imageText, imageText1 } ) => {

  return (
    <div className={` p-5 ex:p-0 mb-[80px] rounded-[30px] ${className}`} >
      <div className="">
        <div
        onClick={toggle}
        className={`px-0 py-[20px] ex:px-[57px] ex:py-[25px] flex justify-between items-center cursor-pointer `}
        >
          <h3 className={`font-mazzardM text-[22px] ex:text-[35px] ip:text-[30px] font-[700] tracking-[0.3rem]  text-white ${className}`}>{title}</h3>

          <div className={`text-[40px] ex:text-[50px] flex items-center text-white h-6 ${className}`} >
            {open? <IoIosArrowDropup /> : <IoIosArrowDropright />}
          </div>
        </div>
        
      </div>
        

        <Collapse isOpened={open}>
        <hr className={`mx-0 ex:mx-[57px] border-[#FFFFFF] py-[25px] pt-[30px]  ${className}`} />
          <div className="flex justify-center ex:justify-end mb-[70px] ">
           <div className=" px-0 pb-[20px] gap-y-14 gap-x-5 max-w-[667px] ex:pr-[77px] grid ex:grid-cols-2 grid-cols-1 ">
            <Link href="/sub" className="">
             <Image src={image} className='w' alt="" width={285} height={388} /> 
             <p className={`text-white  font-[600] w-[66%] text-[24px] pt-[21px] pb-[15px] ${className}`} >{imageText}</p>
             <p className={`text-white font-[400] text-[16px] ${className}`} >{imageText1}</p>
            </Link>
            <div className="">
             <Image src={image} className='w' alt="" width={285} height={388} /> 
             <p className={`text-white  font-[600] w-[66%] text-[24px] pt-[21px] pb-[15px] ${className}`} >{imageText}</p>
             <p className={`text-white font-[400] text-[16px] ${className}`} >{imageText1}</p>
            </div>
            <div className="">
             <Image src={image} className='w' alt="" width={285} height={388} /> 
             <p className={`text-white  font-[600] w-[66%] text-[24px] pt-[21px] pb-[15px] ${className}`} >{imageText}</p>
             <p className={`text-white font-[400] text-[16px] ${className}`} >{imageText1}</p>
            </div>
            <div className="">
             <Image src={image} className='w' alt="" width={285} height={388} /> 
             <p className={`text-white  font-[600] w-[66%] text-[24px] pt-[21px] pb-[15px] ${className}`} >{imageText}</p>
             <p className={`text-white font-[400] text-[16px] ${className}`} >{imageText1}</p>
            </div>
            
            
          

            
          </div> 
          </div>
          
        </Collapse>
    </div>
  )
}

export default AccordionItem