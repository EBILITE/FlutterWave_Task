import React, { useState } from "react";
// import logo from "../assests/images/flutter.png";
import { BsArrowRight } from "react-icons/bs";
import { useGlobalContext } from "../context";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useParams, Link } from "react-router-dom";

const SingleListItem = () => {
  const { id } = useParams();
  const { list } = useGlobalContext();
  const [newList, setNewList] = useState({});
  const [loading, setLoading] = useState(false);
   console.log(id)
  const fetData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${list}/${id}`)
      const data = await response.json() 
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  };

  return (
    <section className="singleList-cont">
      <div className="list-cont">
        <div></div>
        <h5>By name</h5>
        <h2>Optimizing The use Of Css</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam
          officia distinctio soluta quo officiis aut magnam beatae est similique
          nobis ipsam, assumenda voluptate iste voluptates atque id, deserunt
          obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi modi ullam libero. Vel odio distinctio delectus ullam quisquam
          dolorum obcaecati deleniti, iure quidem rerum numquam veritatis,
          nobis, molestiae porro enim. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nisi ullam officia distinctio soluta quo officiis
          aut magnam beatae est similique nobis ipsam, assumenda voluptate iste
          voluptates atque id, deserunt obcaecati. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Animi modi ullam libero. Vel odio
          distinctio delectus ullam quisquam dolorum obcaecati deleniti, iure
          quidem rerum numquam veritatis, nobis, molestiae porro enim. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam officia
          distinctio soluta quo officiis aut magnam beatae est similique nobis
          ipsam, assumenda voluptate iste voluptates atque id, deserunt
          obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi modi ullam libero. Vel odio distinctio delectus ullam quisquam
          dolorum obcaecati deleniti, iure quidem rerum numquam veritatis,
          nobis, molestiae porro enim. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nisi ullam officia distinctio soluta quo officiis
          aut magnam beatae est similique nobis ipsam, assumenda voluptate iste
          voluptates atque id, deserunt obcaecati. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Animi modi ullam libero. Vel odio
          distinctio delectus ullam quisquam dolorum obcaecati deleniti, iure
          quidem rerum numquam veritatis, nobis, molestiae porro enim. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam officia
          distinctio soluta quo officiis aut magnam beatae est similique nobis
          ipsam, assumenda voluptate iste voluptates atque id, deserunt
          obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi modi ullam libero. Vel odio distinctio delectus ullam quisquam
          dolorum obcaecati deleniti, iure quidem rerum numquam veritatis,
          nobis, molestiae porro enim.
        </p>
        <h3>More Articles</h3>
      </div>
    </section>
  );
};

export default SingleListItem;
