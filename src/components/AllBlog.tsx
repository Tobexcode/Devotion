import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import urlFor from '../../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

type Props = {
    posts: Post[];
 
};

function AllBlog({posts}: Props) {
  return (
    <div className='max-w-[1246px] mx-auto'>
        <div className="px-10 mb-[35px]">
                    <h1 className='pb-2 text-[48px] font-[600] font-mazzardM md:p-6'>
                        All Blog
                    </h1> 

                    
                      <div className="mb-[80px]  grid grid-cols-1 gap-3 p-6 sm:grid-cols-2 md:gap-6 ex:p-0 md:grid-cols-3">
                      {posts.map((post) => (

                        <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
                            <div className="group">
                            <div className=" cursor-pointer border rounded-[20px] overflow-hidden">
                              <Image src={urlFor(post.mainImage).url()} className=' h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' alt="" width={388} height={285} />  
                            </div>
                            
                              <p className="font-[600] w-[66%] text-[24px] ip:text-[20px]  pt-[21px] mb-[15px] ">
                              {post.title}
                            </p>  
                            
                            <div className="flex space-x-2">
                          {post.categories.map(category => (
                          <div className="mb-[50px] bl:mb-[30px] w-fit bg-[#E7E5EE] rounded-[5px] ">
                         <p className='text-ta-purple font-[400] text-[16px] p-2'>{category.title}</p>   
                        </div>
                        ))}  
                        </div>
                            {/* <div className=" bg-ta-grey">
                             <p className="font-[400] text-[16px] p-2">Advocacy
                            </p>   
                            </div> */}
                            
                        </div>
                        </ClientSideRoute>
                        
                      ))}
                        
                        
                    </div>
                    
                    
                </div>
    </div>
  )
}

export default AllBlog