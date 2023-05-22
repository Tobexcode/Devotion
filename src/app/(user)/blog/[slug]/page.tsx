import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../../lib/sanity.client";
import urlFor from "../../../../../lib/urlFor";


type Props = {
    params: {
        slug: string;
    };
};



async function Blog ({ params: {slug}}: Props) {

  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
      ...,
      author->,
      categories[]->
  }
`;
const post: Post = await client.fetch(query, { slug });
  return (
    <div className="">
        <Header />

        <article className="max-w-[1246px] mx-auto">
          <section>
            <div className="p-5">
              <h3 className="h3 flex justify-center mt-[80px]  text-ta-purple text-center sm:text-[38px] text-[30px] leading-[35px]  ">
              {post.title}
              </h3>
            </div>

            <div className="flex px-5 justify-center mt-[25px] space-x-3">
              {/* Author's Image */}
              <div className="rounded-full flex justify-center w-fit h-fit bg-ta-purple  ">
                <Image
               className="rounded-full p-1 flex justify-center"
               src={urlFor(post.author.image).url()}
               alt={post.author.name}
               height={40}
               width={40}
               />
               
              </div>
              <div className="flex items-center justify-center">
                <p className="b-p "><span className="b-p">Blog post by </span>{post.author.name} <span className="b-p"> - </span> <span className="b-p">Published at <span className="b-p">{new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}</span></span></p>
              </div>
              
            </div>
            <div className="flex items-center justify-center mb-[80px] mt-[40px]">
              <Image src={urlFor(post.mainImage).url()} className='rounded-[20px] border object-cover h-[456px] w-fit ' alt="" width={656} height={655} />
              </div>
          </section>

          <div className="mb-[40px]">
           <PortableText value={post.body} /> 
          </div>
          
        </article>

        <Footer />
    </div>
  )
}

export default Blog
