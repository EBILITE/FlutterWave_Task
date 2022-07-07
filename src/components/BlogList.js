import React from "react";
import Blog from "../components/blog";
import { useGlobalContext } from "../context";

const BlogList = () => {
  const { list, loading } = useGlobalContext();
  const blogList = list.slice(1);

  if(loading){
    return <div className="loader"></div>
  }
  return (
    <section className="blog">
      <div className="blog-center">
        {blogList.map((item, id) => {
          
          return <Blog key={id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default BlogList;
