import React from "react";
import withLayout from "../../../hocs/withLayout";
import PostComment from "../PostComment/PostComment";
import img1 from "./3.jpg";
import profile from "./9.jpg";
const SinglePost = () => {
  return (
    <div className="bg-stone-50 pb-96">
      <div className=" mx-auto bg-stone-50 py-8 px-4 lg:max-w-5xl">
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
        <div className="md:flex items-center md:space-x-10">
          <p className="text-xl font-bold">Post Tags</p>
          <hr className="h-0.5 inline w-12 bg-gray-600" />
          <div>
            <button className="btn-tag"> name</button>
            <button className="btn-tag"> name</button>
            <button className="btn-tag"> name</button>
            <button className="btn-tag"> name</button>
          </div>
        </div>

        {/*  Author section */}
        <div className="text-center md:text-left md:flex max-w-4xl justify-evenly md:space-x-8 py-12">
          <img className="h-16 w-16 rounded-full mx-auto md:m-0" src={profile} alt="" />
          <div>
            <h1 className="font-serif text-2xl font-normal first-letter:font-mono first-letter:text-5xl first-letter:uppercase">
              Author Name
            </h1>
            <p className="py-4 text-justify leading-7">
              Alias aperiam at debitis deserunt dignissimos dolorem doloribus,
              fuga fugiat impedit laudantium magni maxime nihil nisi quidem
              quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
            <span>
              <button className="social-media-btn"> media</button>
              <button className="social-media-btn"> media</button>
              <button className="social-media-btn"> media</button>
              <button className="social-media-btn"> media</button>
            </span>
          </div>
        </div>
        <hr className="h-0.5 bg-gray-500" />
        {/*  previous post and next post section*/}
        <div className="md:mx-10 md:flex items-center justify-around">
          <div className="mx-auto w-full py-4 md:px-5 hover:bg-slate-100">
            <p className="uppercase leading-10 tracking-widest text-gray-500">
              Previous Post
            </p>
            <p className="font-serif text-xl md:text-3xl font-semibold tracking-wide">
              Tips on Minimalist Design
            </p>
          </div>
          <div className="mx-auto w-full py-4 md:px-5 hover:bg-slate-100">
            <p className="uppercase leading-10 tracking-widest text-gray-500">
              Next Post{" "}
            </p>
            <p className="font-serif text-xl md:text-3xl font-semibold tracking-wide">
              The way of writing code{" "}
            </p>
          </div>
        </div>
      </div>
        {/* Post Comment  */}
        <PostComment />
    </div>
  );
};

export default withLayout(SinglePost);
