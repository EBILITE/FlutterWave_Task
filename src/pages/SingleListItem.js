import React, { useState, useEffect } from "react";
// import logo from "../assests/images/flutter.png";
// import { BsArrowRight } from "react-icons/bs";
// import { useGlobalContext } from "../context";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useParams, Link } from "react-router-dom";

const url = "https://techcrunch.com/wp-json/wp/v2/posts";

const SingleListItem = () => {
  const { id } = useParams();
  // const { list } = useGlobalContext();
  const [newList, setNewList] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log();
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      console.log(data);
      setNewList(data)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <div className="loader"></div>;
  }

  
  const {content: content, title,parsely} = newList
 const nam = parsely?.meta?.creator[0]
 console.log(nam)
  return (
    <section className="singleList-cont">
      <div className="list-cont">
        <div></div>
        <h4>By {nam}</h4>
        <h2>{title?.rendered}</h2>
       
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {content?.rendered}
          </ReactMarkdown>
        
        <h3>More Articles</h3>
      </div>
    </section>
  );
};

export default SingleListItem;
