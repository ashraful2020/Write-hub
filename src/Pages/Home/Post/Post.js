import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllPost } from "../../../features/postSlice";
import Pagination from "../Pagination/Pagination";
import "./Post.css";
const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
 
  useEffect(() => {
    dispatch(fetchAllPost());
  }, [dispatch]);

  
  return (
    <div className="bg-gray-100 py-20">
      <div className="gallery mx-2 sm:mx-4 md:mx-12 lg:mx-32">
        {posts.map((post, i) => (
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
      <Pagination />
    </div>
  );
};

export default Post;
