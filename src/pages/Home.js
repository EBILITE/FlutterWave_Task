import React from "react";
import BlogList from "../components/BlogList";
import SingleList from '../components/SingleBlog'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <SingleList />
      <BlogList />
      <Footer />
    </main>
  );
};

export default Home;
