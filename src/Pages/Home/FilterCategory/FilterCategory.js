import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import withLayout from "../../../hocs/withLayout";
const FilterCategory = () => {
  const location = useLocation();

  // if (!location.state) return <p>Loading ...</p>;
  const [categoryData, setCategoryData] = useState([]);
  const item = location?.state ? location?.state : "Management";
  const uri = `http://localhost:5000/category-post?category=${item}`;
  console.log(item);
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setCategoryData(data.result));
  }, [uri]);

  useEffect(() => {}, []);
  // const test = categoryData.length ? "ase re vai wait kor " : "asole e nai ";
  // console.log(test);
  // console.log(categoryData)
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
          Dolor similique vitae. Exercitationem quidem occaecati iusto. Id non
          vitae enim quas error dolor maiores ut. Exercitationem earum ut
          repudiandae optio veritatis animi nulla qui dolores.
        </p>
        <div className="gallery mx-2 pb-96 sm:mx-4 md:mx-12 lg:mx-32">
          {categoryData.map((post, i) => (
            <div key={post._id} className="pics">
              <Link to="/post">
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
          <p className="text-center text-4xl max-w-5xl mx-auto min-h-full ">
            {!categoryData.length && (
              <div>
                You may search on
                <span className="font-mono text-5xl text-blue-400">
                  {" "}
                  {item}{" "}
                </span>
                category . Unfortunately
                <span className="font-mono text-5xl text-blue-400">
                  {" "}
                  {item}{" "}
                </span>
              category doesn't have any post
              </div>
            )}
          </p>
      </div>
    </div>
  );
};

export default FilterCategory;
