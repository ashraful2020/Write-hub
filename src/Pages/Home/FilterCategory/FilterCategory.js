import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchPostByCategory } from "../../../features/postSlice";
import Spinner from "../../Shared/Spinner/Spinner";
const FilterCategory = () => {
  const location = useLocation();
  const item = location?.state ? location?.state : "Management";
  const dispatch = useDispatch();
  const { categoryPost, status } = useSelector((state) => state.posts);
  console.log(categoryPost, status);
  console.log(status);
  useEffect(() => {
    dispatch(fetchPostByCategory(item));
  }, [item, dispatch]);

  if (status === "loading") {
    return <Spinner/>;
  }
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <button className="m-2 flex items-center justify-center rounded bg-black py-4 px-10 text-white">
          <Link to="/"> {" < "} Back Home </Link>
        </button>
        <h1 className="py-8 text-center font-serif text-2xl font-medium sm:text-4xl lg:text-6xl">
          Category:{item}
        </h1>
        <p className="mx-auto max-w-4xl pb-10 text-center text-xl text-gray-500">
          Blogging is a great way to show your talents and interests to
          prospective employers, while adding an edge to your resume. If you
          blog consistently it shows your dedication, passions and creativity –
          all of which are key attributes employers look for in job candidates.
        </p>
        <div className="gallery mx-2 pb-96 sm:mx-4 md:mx-12 lg:mx-32">
          {categoryPost.map((post, i) => (
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
                  <p className="text-left tracking-tighter">
                    " {post.message} "
                  </p>
                  <p className="text-right tracking-tighter text-red-700">
                    -{post.author}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto min-h-full max-w-5xl text-center text-4xl ">
          {!categoryPost.length && (
            <div>
              You may search on
              <span className="font-mono text-5xl text-blue-400"> {item} </span>
              category . Unfortunately
              <span className="font-mono text-5xl text-blue-400"> {item} </span>
              category doesn't have any post
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
