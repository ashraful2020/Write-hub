import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../../features/singlePostSlice";
import withLayout from "../../../hocs/withLayout";
import Spinner from "../../Shared/Spinner/Spinner";
import PostComment from "../PostComment/PostComment";
const SinglePost = () => {
  const { id } = useParams();
  const {status,post} = useSelector((state) => state.singlePost);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [id, dispatch]);
  
  const {
    title,
    message,
    summery,
    category,
    author,
    authorPhoto,
    bannerImage,
    date,
  } = post;
  const git = "https://github.com/ashraful2020";
  const linkedin = "https://www.linkedin.com/in/ashraful20/";

  if (status === "loading") {
    return <Spinner />;
  }
  return (
    <div className="bg-stone-50">
      <div className=" mx-auto bg-stone-50 py-8 px-4 lg:max-w-5xl">
        <div className="pb-6">
          <h1 className="py-1 text-center font-mono text-3xl font-bold sm:text-5xl">
            {title}
          </h1>
          <div className="flex items-center justify-center space-x-5 font-semibold sm:space-x-14">
            <p className="text-gray-500"> {date} </p>
            <p> In {category} </p>
          </div>
        </div>
        <img
          src={`data:image/png;base64,${bannerImage}`}
          className="mx-auto  max-w-full object-cover md:h-96 md:w-9/12"
          alt=""
        />

        <div className="py-6 text-justify text-lg font-medium leading-7">
          {message}
        </div>
        {summery && (
          <div className="pb-5">
            <p className="py-4 text-4xl font-semibold text-blue-400">
              Sub Heading
            </p>
            <p> {summery}</p>
          </div>
        )}

        {/*  Post footer tags section */}
        <div className="items-center md:flex md:space-x-10">
          <p className="text-xl font-bold">Post Tags</p>
          <hr className="inline h-0.5 w-12 bg-gray-600" />
          <div>
            <button className="btn-tag"> Learning </button>
            <button className="btn-tag"> {category}</button>
            <button className="btn-tag"> Profession</button>
            <button className="btn-tag"> skill</button>
          </div>
        </div>

        {/*  Author section */}
        <div className="max-w-4xl justify-evenly py-12 text-center md:flex md:space-x-8 md:text-left">
          <img
            className="mx-auto h-16 w-16 rounded-full md:m-0"
            src={authorPhoto}
            alt="author_images"
          />
          <div>
            <h1 className="font-serif text-2xl font-normal first-letter:font-mono first-letter:text-5xl first-letter:uppercase">
              {author}
            </h1>
            <p className="py-4 text-justify leading-7">
              Alias aperiam at debitis deserunt dignissimos dolorem doloribus,
              fuga fugiat impedit laudantium magni maxime nihil nisi quidem
              quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
            <span>
              <a
                href={git}
                target="_blank"
                rel="noreferrer"
                className="social-media-btn text-blue-400"
              >
                Facebook
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-media-btn text-red-400"
              >
                Instagram
              </a>
              <a
                href={git}
                target="_blank"
                rel="noreferrer"
                className="social-media-btn text-blue-500"
              >
                Twitter
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-media-btn text-blue-700"
              >
                Linkedin
              </a>
            </span>
          </div>
        </div>
        <hr className="h-0.5 bg-gray-500" />
        {/*  previous post and next post section*/}
        <div className="items-center justify-around md:mx-10 md:flex">
          <div className="mx-auto w-full py-4 hover:bg-slate-100 md:px-5">
            <p className="uppercase leading-10 tracking-widest text-gray-500">
              Previous Post
            </p>
            <p className="font-serif text-xl font-semibold tracking-wide md:text-3xl">
              Tips on Minimalist Design
            </p>
          </div>
          <div className="mx-auto w-full py-4 hover:bg-slate-100 md:px-5">
            <p className="uppercase leading-10 tracking-widest text-gray-500">
              Next Post
            </p>
            <p className="font-serif text-xl font-semibold tracking-wide md:text-3xl">
              The way of writing code
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
