import React, { memo } from "react";
import withLayout from "../../../hocs/withLayout";
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

export default withLayout(memo(Home));
