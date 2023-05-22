"use client";

import { usePreview } from "../../lib/sanity.preview";
import BlogList from "./BlogList";

type Props = {
  query2: string;
};

export default function PreviewBlogList({ query2 }: Props) {
  const posts = usePreview(null, query2);
  
  return <BlogList  posts2={posts} />;
};