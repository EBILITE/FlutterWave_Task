import React from "react";
// import logo from "../assests/images/flutter.png";
import { BsArrowRight } from "react-icons/bs";
import { useGlobalContext } from "../context";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  const { list, loading } = useGlobalContext();
  const newList = list[0];
  const id = newList?.id
  const para = newList?.excerpt?.rendered;
  const title = newList?.title?.rendered;
  const img = newList?.jetpack_featured_media_url;
  const publisher = newList?.parsely?.meta?.publisher?.name;
 console.log(id)
  // console.log(rendered);
  if (loading) {
    return <div></div>;
  }
  return (
    <section className="singleBlog">
      <div className="singleBlog-cont">
        <img src={img} alt="pics" className="singleListImage" />
        <div className="detail-container">
          <div className="role-cont">
            <h4>{publisher}</h4>
            <p>1 Hour ago</p>
          </div>
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            className="line-spacing"
          />

          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{para}</ReactMarkdown>

          <div className="readmore">
            <h4>3 min read</h4>
            <div>
              <Link to={`/home/${id}`}>
                <button>
                  Readmore{" "}
                  <span>
                    <BsArrowRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
