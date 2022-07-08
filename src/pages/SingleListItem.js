import React, { useState, useEffect,useCallback } from "react";
import { BsArrowRight } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useParams, Link } from "react-router-dom";

const url = "https://techcrunch.com/wp-json/wp/v2/posts";

const SingleListItem = () => {
  const { id } = useParams();

  const [newList, setNewList] = useState({});
  const [loading, setLoading] = useState(false);
  const [newUrl, setNewUrl] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      setNewList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  },[id]);

  const fetchUrl = async () => {
    setLoading(true);
    try {
      const response2 = await fetch(url);
      const data2 = await response2.json();
      const newData = data2.slice(7);
      setNewUrl(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id,fetchData]);

  useEffect(() => {
    fetchUrl();
  }, [id]);

  if (loading) {
    return <div className="loader"></div>;
  }

  const { content, title, parsely } = newList;

  return (
    <section className="singleList-cont">
      <div className="list-cont">
        <div></div>
        <h4>By {parsely?.meta?.creator[0]}</h4>
        <h2>{title?.rendered}</h2>

        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {content?.rendered}
        </ReactMarkdown>

        <h3>More Articles</h3>
        <div className="moreArticleCard">
          {newUrl.map((item, id) => {
            const { jetpack_featured_media_url, title, excerpt, parsely } =
              item;
            const newTitle = title?.rendered;
            const para = excerpt?.rendered;
            const publisher = parsely?.meta?.publisher?.name;
            console.log(item.id);
            return (
              <section className="card" key={id}>
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
                      dangerouslySetInnerHTML={{
                        __html: para.substring(0, 200),
                      }}
                      className="para-cont"
                    />
                    <div className="readme-cont">
                      <p>8 min Read</p>
                      <Link to={`/home/${item.id}`}>
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
          })}
        </div>
      </div>
    </section>
  );
};

export default SingleListItem;
