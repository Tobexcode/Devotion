import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import subimage from "../../../../img/subimage.png";
import subimage1 from "../../../../img/subimage1.png";


function sub() {
  return (
    <div className="">
    <Header /> 
      <div className="max-w-[1127px] mx-auto ">

     <div className="mt-[100px] flex flex-col items-center justify-center ">
      <h3 className="h3 text-[40px] text-ta-purple font-[600] text-center w-[90%] mb-[79px] ">Advocacy for Agricultural Farming in Nigeria: A Case Study</h3>
      
      <div className="space-y-[-2.5rem]">
      <Image className='absolute' src={subimage1} alt='' width={498} height={672} /> 
       <Image className='mb-[100px]' src={subimage} alt='' width={498} height={672} />

       

      </div>
      
     </div>
     <div className=" px-4">
      <p className='font-[600] text-[32px] pt-[100px] mb-[35px] '>Background—</p>

     <p className='p mb-[65px]'>Nigeria is a country with vast arable land and favorable weather conditions for agriculture. Despite this, the agricultural sector has not been able to fully realize its potential due to various challenges, including inadequate funding, poor infrastructure, and limited access to modern farming technologies. These challenges have contributed to food insecurity, poverty, and a decline in the sector's contribution to the country's Gross Domestic Product (GDP).</p>

     <p className='font-[600] text-[32px] pt-[100px] mb-[35px] '>Advocacy Campaign—</p>

     <p className='p mb-[65px]'>In response to these challenges, an advocacy campaign was launched to promote agricultural farming in Nigeria. The campaign was led by a coalition of civil society organizations, farmers' groups, and other stakeholders. The objective of the campaign was to raise awareness about the challenges facing the agricultural sector in Nigeria and to advocate for policy changes and increased funding to support the sector.
The campaign involved a series of activities, including public forums, rallies, and media engagements. The organizers also leveraged social media platforms to reach a wider audience. The campaign's messaging focused on the importance of agriculture in Nigeria's economy, the challenges facing farmers, and the need for policy changes to address these challenges.</p>
    
    <div className=" flex justify-center items-center ">
      <div className="px-20 w-[50%] h-[468px] bg-ta-purple rounded-[40px] ">
    </div>

    </div>
    
    <p className='font-[600] text-[32px] pt-[100px] mb-[35px] '>Impact—</p>

    <p className='p mb-[65px]'>The advocacy campaign had a significant impact on public awareness and policy change. It raised awareness about the challenges facing the agricultural sector and the need for policy changes to address them. The campaign also influenced policy changes, including increased funding for the sector and the implementation of programs to support smallholder farmers.
Additionally, the campaign led to increased collaboration among stakeholders in the sector. The coalition that led the campaign continued to work together to address the challenges facing the sector, and they were able to leverage their collective efforts to secure additional funding and support for agricultural farming.

</p>
    <p className='font-[600] text-[32px] pt-[100px] mb-[35px] '>Conclusion—</p>

    <p className='p mb-[65px]'>The advocacy campaign on agricultural farming in Nigeria demonstrates the power of advocacy in effecting change. By raising awareness about the challenges facing the sector and advocating for policy changes, the campaign was able to influence policy and increase support for the sector. As Nigeria continues to face challenges in the agricultural sector, advocacy efforts will continue to play a critical role in addressing these challenges and promoting sustainable development.


</p>
     </div>
     
     
    </div>
    <Footer />
    </div>
    
    
  )
}

export default sub