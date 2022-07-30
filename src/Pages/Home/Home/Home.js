import React from "react"; 
import withLayout from "../../../hocs/withLayout";
import Test from "../../../Test";

import Hero from "../Hero/Hero";
import Post from "../Post/Post";

const Home = () => {
  return (
    <div>  
      <Hero />
      <Post /> 
    </div>
  );
};

export default withLayout(Home);
