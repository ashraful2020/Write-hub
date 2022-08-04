import React from "react";
import { Link } from "react-router-dom";

const Tags = () => {
  const tags = [
    { name: "salad", link: "/category-post" },
    { name: "recipe", link: "/category-post" },
    { name: "places", link: "/category-post" },
    { name: "friends", link: "/category-post" },
    { name: "exercise", link: "/category-post" },
    { name: "travel", link: "/category-post" },
    { name: "tips", link: "/category-post" },
    { name: "reading", link: "/category-post" },
    { name: "running", link: "/category-post" },
    { name: "self", link: "/category-post" },
    { name: "vacation", link: "/category-post" },
  ];
  return (
    <div>
      <div className="ml-3 flex items-center justify-center text-center">
        <div>
          <h2 className="text-center text-3xl font-semibold">Tags</h2>
          <div className="max-w-4xl">
            {tags.map((tag, _i) => (
              <button className="btn" key={_i}>
                <Link to={tag.link} state={tag.name}>
                  {tag.name.toUpperCase()}
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
