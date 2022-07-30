import React from "react";
import withLayout from "../../../hocs/withLayout";
const About = () => {
  return (
    <div className="h-screen bg-blue-300 text-center ">
      <h1 className="text-5xl"> This is About page </h1>
    </div>
  );
};

export default withLayout(About);
