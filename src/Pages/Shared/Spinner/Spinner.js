import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return ( 
      <div className="flex min-h-screen items-center justify-center">
        <div className="spinner">
          <div></div>
          <div></div>
        </div>
      </div> 
  );
};

export default Spinner;
