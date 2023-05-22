import React from 'react'
import { IoIosArrowDropright, IoIosArrowDropup } from 'react-icons/io'
import {Collapse} from 'react-collapse';
import { TextBold } from 'iconsax-react';

function AccordionAboutItem( {className, textTitle, text, toggle, title, open, textBold1, text1, textBold2, text2, textBold3, text3, textBold4, text4, textBold5, text5, textTitle1, textTitle2, text6, isTextBlack = false,} ) {
  return (
    <div className="rounded-[30px]">
        <div className={` p-2 ex:p-5 mb-[80px] rounded-[15px] ex:rounded-[30px] ${className}`} >
      <div className="">
        <div
        onClick={toggle}
        className={`px-0 py-[12px] ex:px-[57px] ex:py-[25px] rounded-[30px] flex justify-between items-center cursor-pointer ${className}`}
        >
          <h3 className={`font-mazzardM text-[22px] ex:text-[35px] ip:text-[30px] font-[700] tracking-[0.3rem]  text-white ${className}`}>{title}</h3>

          <div className={`text-[40px] ex:text-[50px] flex items-center text-white h-6 ${className}`} >
            {open? <IoIosArrowDropup /> : <IoIosArrowDropright />}
          </div>
        </div>
        
      </div>
        

        <Collapse isOpened={open}>
        <hr className={`${className} mx-0 ex:mx-[57px]  py-[25px] pt-[30px] border-[#FFFFFF]`} />
        
        <div className={`flex ex:mx-[57px] ex:flex-row flex-col text-white grid-flow-col gap-[120px] pb-[60px] ${className}`}>
            <h3 className='h3 w-full flex-1'>{textTitle}</h3>
            <p className='p w-full flex-1'>{text}</p>
        </div>
          <hr className={`${className} mx-0 ex:mx-[57px] border-[#FFFFFF] py-[25px] pt-[30px] `} />
          <div className={`flex  ex:mx-[57px] ex:flex-row flex-col text-white grid-flow-col gap-[120px] pb-[60px] ${className}`}>
            <h3 className="h3 w-full flex-1">{textTitle1}</h3>
        <div className={`space-y-[40px] w-full flex-1 ${className}`}>
            <div className={className}>
                 <p className='p font-[700] '>{textBold1}</p>  
                 <p className='p '>{text1}</p>    
                </div>
            <div className="">
                 <p className='p font-[700] '>{textBold2}</p>  
                 <p className='p '>{text2}</p>    
            </div>
            <div className="">
                 <p className='p font-[700] '>{textBold3}</p>  
                 <p className='p '>{text3}</p>    
            </div>
            <div className="">
                 <p className='p font-[700] '>{textBold4}</p>  
                 <p className='p '>{text4}</p>    
            </div>
            <div className="">
                 <p className='p font-[700] '>{textBold5}</p>  
                 <p className='p '>{text5}</p>    
            </div>   
        </div>
          </div>
          <hr className={`${className} mx-0 ex:mx-[57px] border-[#FFFFFF] py-[25px] pt-[30px]  `} />
          
          <div className={`flex ex:mx-[57px] ex:flex-row flex-col text-white grid-flow-col gap-[120px] pb-[300px] ${className}`}>
            <h3 className='h3 flex-1'>{textTitle2}</h3>
            <p className='p flex-1'>{text6}</p>
          </div>

        </Collapse>
    </div>
    </div>
  )
}

export default AccordionAboutItem