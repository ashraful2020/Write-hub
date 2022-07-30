import React from "react"; 
import Test from "../../../Test";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import PopularPost from "../../Shared/PopularPost/PopularPost";
import Tags from "../../Shared/Tags/Tags";
import Hero from "../Hero/Hero";
import Post from "../Post/Post";

const Home = () => {
  return (
    <div> 
      {/* <Test/> */}
      <Navigation />
      <Hero />
      <Post />
      <PopularPost />
      <Tags />
      <Footer />
    </div>
  );
};

export default Home;
