import React, { useState } from 'react'
import AccordionAboutItem from './AccordionItem'
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
    title: "Business Consulting",
    className: "bg-ta-purple",
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: Consulting,
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: agric  ,
  },
    {  
    title: "Mentorship",
    className: "bg-ta-red",
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: Consulting,
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: agric  ,
  },
    {  
    title: "Advocacy",
    className: "bg-ta-cyan",
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: Consulting,
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: agric  ,
  },
    {  
    title: "Foundation",
    className: "bg-ta-cream  isblack border-black",
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: Consulting,
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: agric  ,
  },
    {  
    title: "Agrolearn",
    className: "bg-ta-green",
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: Consulting,
    imageText: "Agricultural Advocacy in Nigeria",
    imageText1: "Advocacy, Consulting",
    image: agric  ,
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
        <div className="max-w-[1242px] px-2 mx-auto rounded-[30px] grid">
        {accordionData.map((data,index) => {
          return <AccordionAboutItem title={data.title} imageText={data.imageText} imageText1={data.imageText1} className={data.className} open={index === open } toggle={() => toggle(index)} key={index} image={data.image} />
      })}
        </div>
  )
}

export default Accordion