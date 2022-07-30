import React, { useState } from "react";

function Test() {
  const [img, setImg] = useState(null);

  const onImageChange = (e) => { 
    const [file] = e.target.files; 
    setImg(URL.createObjectURL(file)); 
  };
   
  return (
    <div className="h-screen bg-gray-500 mx-auto">
      <div>
        <img
          src={img}
          alt=""
          className="h-full relative max-w-lg object-contain text-center"
        />
        <label
          className={`${
            img ? "hidden" : ""
          } absolute h-96 w-72 bg-blue-50 text-7xl`}
        >
          🎗️
          <input className=" hidden" type="file" onChange={onImageChange} />
        </label>
      </div>
    </div>
  );
}
export default Test;
