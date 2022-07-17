import React from "react";

const Post = () => {
    const blogs=[];
  return (
    <div className="md:py-25 grid grid-cols-1 gap-5 bg-slate-300 px-5 py-20 sm:grid-cols-2  md:gap-8 md:px-5 lg:grid-cols-4 lg:gap-10 lg:px-10">
      {blogs.map((post) => (
        <div key={post._id}>
          <div className="blog-cart-warp bg-white">
            <div className="blog-cart-img ">
              <img className="w-full" src={post.img} alt={post.title} />
            </div>
            <div className="blog-content  p-4">
              <p className="font-semibold text-gray-500">{post.date}</p>
              {/* <Link
                to={`/blogs/${post._id}`}
                style={{ textDecoration: "none" }}
              >
                <h3 className="font-large py-5 font-serif text-2xl">
                  {post.title}
                </h3>
              </Link> */}
              <p className="font-sans text-gray-500">{post.blog}</p>
              <p className="pt-5 text-lg font-semibold text-blue-600">
                {post.category}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
