import React, { useState } from 'react'
import AccordionAboutItem from './AccordionAboutItem'
import Consulting from "../../img/consulting.png";
import agric from "../../img/agric.png";

// interface index {
  
//   index: null;
// }

// const imageText: string[] = [
//   "Agricultural Advocacy in Nigeria",
// ];
// const imageText1: string[] = [
//   "Advocacy, Consulting",
// ];


function Accordion() {
  const accordionData = [
    {  
        title: "a",
        className: "bg-ta-purple",
        textTitle: "Executive Summary—",
        text: "Tolulope is a budding data analyst and agricultural enthusiast with experience in agribusiness, business research and consulting, advocacy, capacity building trainings and most recently agritech education. She has implemented, supervised and managed different agricultural projects in various crop and livestock value chain across Nigeria through research driven methodologies. She is an excellent communicator with great interpersonal relationship skills which she has efficiently implemented locally and internationally. She is passionate about grooming young entrepreneurs through trainings and mentorship of small and medium scaled business founders to own profitable and scalable businesses",
        textTitle1: "Experience—",
        textBold1: "Quantic School of Business and Technology",
        text1: "Master in Business Administration (In-View)",
        textBold2: "University of Ibadan, Second Class Upper Division",
        text2: "Bachelor of Agriculture, Agricultural Economics",
        textBold3: "eCornell University, USA",
        text3: "Certificate in Project Management",
        textBold4: "University of London, London Business School via Cousera",
        text4: "Managing the Company of the Future",  
        textBold5: "African Women Entrepreneurship Cooperative (AWEC)",
        text5: "12-month management and leadership training program",  
        textTitle2:"Certification—",
        text6: "As a seasoned consultant with years of experience working with business in the Agriculture, social and commercial sectors, I provide customized solutions to help you achieve your goals. Whether you need assistance with strategy development, process improvement, or team management.",
  },
    {  
        title: "Certification—",
        className: "bg-ta-red",
        textTitle: "Executive Summary—",
        text: "Tolulope is a budding data analyst and agricultural enthusiast with experience in agribusiness, business research and consulting, advocacy, capacity building trainings and most recently agritech education. She has implemented, supervised and managed different agricultural projects in various crop and livestock value chain across Nigeria through research driven methodologies. She is an excellent communicator with great interpersonal relationship skills which she has efficiently implemented locally and internationally. She is passionate about grooming young entrepreneurs through trainings and mentorship of small and medium scaled business founders to own profitable and scalable businesses",
        textTitle1: "Experience—",
        textBold1: "Quantic School of Business and Technology",
        text1: "Master in Business Administration (In-View)",
        textBold2: "University of Ibadan, Second Class Upper Division",
        text2: "Bachelor of Agriculture, Agricultural Economics",
        textBold3: "eCornell University, USA",
        text3: "Certificate in Project Management",
        textBold4: "University of London, London Business School via Cousera",
        text4: "Managing the Company of the Future",  
        textBold5: "African Women Entrepreneurship Cooperative (AWEC)",
        text5: "12-month management and leadership training program",  
        textTitle2:"Certification—",
        text6: "As a seasoned consultant with years of experience working with business in the Agriculture, social and commercial sectors, I provide customized solutions to help you achieve your goals. Whether you need assistance with strategy development, process improvement, or team management.",
  },
    {  
        title: "Philosophy and beliefs—",
        className: " bg-ta-cyan",
        textTitle: "Executive Summary—",
        text: "Tolulope is a budding data analyst and agricultural enthusiast with experience in agribusiness, business research and consulting, advocacy, capacity building trainings and most recently agritech education. She has implemented, supervised and managed different agricultural projects in various crop and livestock value chain across Nigeria through research driven methodologies. She is an excellent communicator with great interpersonal relationship skills which she has efficiently implemented locally and internationally. She is passionate about grooming young entrepreneurs through trainings and mentorship of small and medium scaled business founders to own profitable and scalable businesses",
        textTitle1: "Experience—",
        textBold1: "Quantic School of Business and Technology",
        text1: "Master in Business Administration (In-View)",
        textBold2: "University of Ibadan, Second Class Upper Division",
        text2: "Bachelor of Agriculture, Agricultural Economics",
        textBold3: "eCornell University, USA",
        text3: "Certificate in Project Management",
        textBold4: "University of London, London Business School via Cousera",
        text4: "Managing the Company of the Future",  
        textBold5: "African Women Entrepreneurship Cooperative (AWEC)",
        text5: "12-month management and leadership training program",  
        textTitle2:"Certification—",
        text6: "As a seasoned consultant with years of experience working with business in the Agriculture, social and commercial sectors, I provide customized solutions to help you achieve your goals. Whether you need assistance with strategy development, process improvement, or team management.",
  },
    {  
        title: "Awards—",
        className: " bg-ta-cream isblack border-black",
        textTitle: "Executive Summary—",
        text: "Tolulope is a budding data analyst and agricultural enthusiast with experience in agribusiness, business research and consulting, advocacy, capacity building trainings and most recently agritech education. She has implemented, supervised and managed different agricultural projects in various crop and livestock value chain across Nigeria through research driven methodologies. She is an excellent communicator with great interpersonal relationship skills which she has efficiently implemented locally and internationally. She is passionate about grooming young entrepreneurs through trainings and mentorship of small and medium scaled business founders to own profitable and scalable businesses",
        textTitle1: "Experience—",
        textBold1: "Quantic School of Business and Technology",
        text1: "Master in Business Administration (In-View)",
        textBold2: "University of Ibadan, Second Class Upper Division",
        text2: "Bachelor of Agriculture, Agricultural Economics",
        textBold3: "eCornell University, USA",
        text3: "Certificate in Project Management",
        textBold4: "University of London, London Business School via Cousera",
        text4: "Managing the Company of the Future",  
        textBold5: "African Women Entrepreneurship Cooperative (AWEC)",
        text5: "12-month management and leadership training program",  
        textTitle2:"Certification—",
        text6: "As a seasoned consultant with years of experience working with business in the Agriculture, social and commercial sectors, I provide customized solutions to help you achieve your goals. Whether you need assistance with strategy development, process improvement, or team management.",
  },
    
  
    
  ];
  const [open, setOpen] = useState(false)

  const toggle = (index) => {
    if(open === index) {
      return setOpen(null)
    }
    
    setOpen(index)
  }
  return (
        <div className="max-w-[1242px] px-2 mx-auto rounded-[30px] mt-[140px]">
        {accordionData.map((data,index) => {
          return <AccordionAboutItem  title={data.title}  textTitle={data.textTitle} text={data.text} textTitle1={data.textTitle1} text1={data.text1} textTitle2={data.textTitle2} text2={data.text2} text3={data.text3} text4={data.text4} text5={data.text5} text6={data.text6} textBold1={data.textBold1} textBold2={data.textBold2} textBold3={data.textBold3} textBold4={data.textBold4} textBold5={data.textBold5} className={data.className} open={index === open } toggle={() => toggle(index)} key={index} image={data.image} />
      })}
        </div>
  )
}

export default Accordion
