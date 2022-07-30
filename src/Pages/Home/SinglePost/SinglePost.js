import React from "react";
import img1 from "./3.jpg";
import img2 from "./9.jpg";
const SinglePost = () => {
  return (
    <div className="bg-stone-50">
      <div className=" mx-auto max-w-7xl bg-stone-50 py-8 px-4">
        <div className="pb-6">
          <h1 className="py-1 text-center font-mono text-3xl font-bold sm:text-5xl">
            Blog Post Format .
          </h1>
          <div className="flex items-center justify-center space-x-5 font-semibold sm:space-x-14">
            <p className="text-gray-500"> December 16, 2017 </p>
            <p> In Lifestyle Travel </p>
          </div>
        </div>
        <img
          src={img1}
          className="mx-auto  max-w-full object-cover md:h-96 md:w-9/12"
          alt=""
          srcset=""
        />

        <div className="py-6 text-justify text-lg font-medium leading-7">
          <p>
            Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
            nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
            incididunt adipisicing veniam velit id fugiat enim mollit amet anim
            veniam dolor dolor irure velit commodo cillum sit nulla ullamco
            magna amet magna cupidatat qui labore cillum sit in tempor veniam
            consequat non laborum adipisicing aliqua ea nisi sint.
          </p>
        </div>
        <div className="pb-5">
          <p className="py-4 text-4xl font-semibold text-blue-400">
            Sub Heading{" "}
          </p>
          Harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus omnis voluptas assumenda est id quod maxime placeat facere
          possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et.
        </div>

        {/*  Post footer tags section */}
        <div className="flex items-center space-x-10">
          <p className="text-xl font-bold">Post Tags</p>
          <hr className="h-0.5 w-12 bg-red-600 text-black " />
          <div>
            <button className="btn-tag"> name</button>
            <button className="btn-tag"> name</button>
            <button className="btn-tag"> name</button>
            <button className="btn-tag"> name</button>
          </div>
        </div>

        {/*  Athor section */}
      </div>
    </div>
  );
};

export default SinglePost;
