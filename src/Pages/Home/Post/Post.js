import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
const Post = () => {
  const [newData1, setNewData1] = useState([]);
  /* 
author: "Mohammad Ashraful"
authorEmail: "ashrafulibbl595@gmail.com"
authorPhoto: "https://lh3.googleusercontent.com/a-/AFdZucrNY8nLJeaeLrmP8HXdAPaa63DkD9NYN4HfjQVIZw=s96-c"
bannerImage: {type: 'Buffer', data: Array(9742)}
category: "Family"
message: "asdfasf"
summery: "false"
title: "Ashraful " 

data title category 
<img src={`data:image/png;base64,${image}`} alt=""style={{width:200,}} />
    title,
    message,
    summery,
    category,
    author,
    authorEmail,
    authorPhoto,
    bannerImage,
    date,
*/
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setNewData1(data));
  }, []); 
  return (
    <div className="bg-gray-100 py-20">
      <div className="gallery mx-2 sm:mx-4 md:mx-12 lg:mx-32">
        {newData1.map((post, i) => (
          <div key={post._id} className="pics">
            <Link to={`/post/${post._id}`}>
              {post.type === "blog" && (
                <div className="m-1 bg-white  shadow shadow-gray-300">
                  <img
                    src={`data:image/png;base64,${post.bannerImage}`}
                    alt=""
                    className="w-full object-fill md:max-h-52 lg:max-h-72"
                  />
                  <div className="p-5">
                    <p className="">{post.date}</p>
                    <p className="font-sans text-xl font-semibold tracking-tight">
                      {post.title}
                    </p>
                    <p className=" text-justify tracking-tight">
                      {post.message.slice(0, 200)}
                    </p>
                  </div>
                </div>
              )}
            </Link>
            {post.type === "quote" && (
              <div className="m-1 bg-green-300  p-5  shadow-lg  shadow-gray-300">
                <p className="text-left tracking-tighter">" {post.message} "</p>
                <p className="text-right tracking-tighter text-red-700">
                  -{post.author}
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
