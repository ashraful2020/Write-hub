import React from "react";
import withLayout from "../../../hocs/withLayout";
const Contact = () => {
  return (
    <div className=" bg-blue-300 text-center h-screen ">
      <h1 className="text-5xl"> This is Contact page </h1>
    </div>
  );
};

export default withLayout(Contact);
