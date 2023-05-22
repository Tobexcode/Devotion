import React from 'react'
import Header from './Header';

import test from '../../img/test.png'
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../lib/urlFor';
import Footer from './Footer';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  posts2: Post2[];
 
};


function BlogList({posts2}: Props) {
    // console.log(posts);
    // console.log(posts2);
    

  return (
    <div className="">
      <div className='max-w-[1246px] mx-auto'>

        <Header />

        <div className="p-4 mb-[25px] mt-7 ex:mt-[196px] justify-center items-center flex flex-col">
            <h1 className='font-[700] text-[40px] ip:text-[50px] ex:text-[60px] text-ta-purple text-center mb-[45px] leading-[70px]'>Empowering Brands, Communities, and Agriculture: </h1>

            <p className='p p-4  sm:p-0 sm:w-[55%] text-center leading-[30px] '>Welcome to my blog! I'm a brand consultant, advocate, mentor, philanthropist, and agricultural enthusiast. My passion is to make a positive impact in the world and help others do the same. I hope you'll find my blog posts informative, inspiring, and thought-provoking. Thanks for visiting!</p>
        </div>

        
        
         <div className=" bl:space-y-[45px] space-y-4 mb-[100px] px-10">
                <h1 className='mt-[140px] pb-2 text-[48px] font-[600] font-mazzardM '>
                    Recent Blog
                </h1>
                {Array.isArray(posts2) ? posts2.map((post) => (
                 <>
                 <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
                  <div className="flex flex-col bl:flex-row bl:space-x-[45px]" >

       
                    <Image src={urlFor(post.mainImage).url()} className='rounded-[20px] border object-cover h-120 w-fit ' alt="" width={556} height={655} />



                    <div className="mt-4 bl:mt-0">
                        <h1 className='bl:text-[48px] text-[40px] font-[600] font-mazzardM bl:leading-[56px] leading-[47px] bl:mb-[12px] mb-[21px]  '>{post.title}
                        </h1>
                        <div className="flex space-x-3">
                          {post.categories.map(category => (
                          <div className="mb-[50px] bl:mb-[30px] w-fit bg-[#E7E5EE] rounded-[5px] ">
                         <p className='text-ta-purple font-[400] text-[21 px] p-2'>{category.title}</p>   
                        </div>
                        ))}  
                        </div>
                        
                        <p className='bl:text-[20px] font-[400] leading-[30px] text-[18px] '>{post.description}.</p>
                    </div>
                
                </div>
                 </ClientSideRoute>
                
                </>
        )) : null }
        </div>
        
          
          

            
                   
        
        
        
        
    </div>
     
    </div>
    
  )
}

export default BlogList