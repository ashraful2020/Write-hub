import React, { useEffect, useState } from "react";
import "./Post.css";
const Post = () => {
  const [newData1, setNewData1] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setNewData1(data));
  }, []);
  console.log(newData1);
  return (
    <div className="bg-gray-100 py-20">
      <div className="gallery mx-2 sm:mx-4 md:mx-12 lg:mx-32">
        {newData1.map((data, i) => (
          <div key={data.id} className="pics" >
            {data.type === "blog" && (
              <div className="m-1 bg-white  shadow shadow-gray-300">
                <img src={data.imgURL} alt="" className="w-full md:max-h-52 object-fill"/>
                <div className="p-5">
                  <p className="">{data.date}</p>
                  <p className="font-sans text-xl font-semibold tracking-tight">
                    {data.title}
                  </p>
                  <p className=" text-justify tracking-tight">
                    {data.description}
                  </p>
                </div>
              </div>
            )}
            {data.type === "quote" && (
              <div className="m-1 bg-green-300  p-5  shadow-lg  shadow-gray-300">
                <p className="text-left tracking-tighter">
                  " {data.description} "
                </p>
                <p className="text-right tracking-tighter text-red-700">
                  -{data.author}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
