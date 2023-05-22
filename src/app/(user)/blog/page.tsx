import AllBlog from "@/components/AllBlog";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import PreviewBlogList from "@/components/PreviewBlogList";
import { groq } from "next-sanity";
import { previewData } from "next/headers";
import { client } from "../../../../lib/sanity.client";
import PreviewSuspense from '../../../components/PreviewSuspense';


// Querying data from Sanity using groq
const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;
const query2 = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)[0...1]
`;

async function page() {
  if (previewData()) {
    const posts = await client.fetch(query);
    // const posts2 = await client.fetch(query2);
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query2={query2} />

        <AllBlog posts={posts} />

         <Footer />

      </PreviewSuspense>
    );
  }
  

  const posts = await client.fetch(query);
  const posts2 = await client.fetch(query2);
  // console.log(posts2);

  return ( 
    
    <>

    {Array.isArray(posts2) ? console.log("yes") : console.log("no") } 
    <BlogList posts2={posts2} />
    <AllBlog posts={posts} />

    <Footer />
    </>

  );
}

export default page