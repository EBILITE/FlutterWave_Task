import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const blog = ({ jetpack_featured_media_url, title, excerpt, parsely ,id}) => {
  const newTitle = title?.rendered;
  const para = excerpt?.rendered
  const publisher = parsely?.meta?.publisher?.name
  // console.log(newTitle);
  return (
    <section className="card">
      <div className="card-cont">
        <img
          src={jetpack_featured_media_url}
          alt={jetpack_featured_media_url}
          className="photo"
        />
        <div className="content-container">
          <div className="heading">
            <h5>{publisher}</h5>
            {/* <p>2 Months ago</p> */}
          </div>
          <h5
            dangerouslySetInnerHTML={{ __html: newTitle }}
            className="line-spacing"
          />
          <p
            dangerouslySetInnerHTML={{ __html: para.substring(0, 200) }}
            className="para-cont"
          />
          <div className="readme-cont">
            <p>8 min Read</p>
            <Link to={`/home/${id}`}>
              <button className="blog-btn">
                Readmore{" "}
                <span>
                  <BsArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog;
